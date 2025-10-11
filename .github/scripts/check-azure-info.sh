#!/bin/bash

# Azure 정보 확인 스크립트
# 사용법: ./check-azure-info.sh [리소스그룹명]

echo "🔍 Azure 배포 정보 확인 중..."
echo "================================"

# 리소스 그룹 확인
if [ -z "$1" ]; then
  echo ""
  echo "📋 사용 가능한 리소스 그룹 목록:"
  az group list --query "[].{Name:name, Location:location}" -o table
  echo ""
  echo "사용법: ./check-azure-info.sh [리소스그룹명]"
  exit 0
fi

RESOURCE_GROUP=$1

echo ""
echo "🗂️  리소스 그룹: $RESOURCE_GROUP"
echo ""

# Storage Accounts 확인
echo "💾 Storage Accounts:"
az storage account list --resource-group $RESOURCE_GROUP \
  --query "[].{Name:name, Location:location, Kind:kind}" -o table

echo ""

# CDN Profiles 확인
echo "🌐 CDN Profiles:"
CDN_PROFILES=$(az cdn profile list --resource-group $RESOURCE_GROUP --query "[].name" -o tsv)

if [ -z "$CDN_PROFILES" ]; then
  echo "  ❌ CDN Profile이 없습니다."
  echo "  ℹ️  CDN을 사용하지 않는 경우 AZURE_CDN_PROFILE과 AZURE_CDN_ENDPOINT Secrets는 설정하지 않아도 됩니다."
else
  echo "$CDN_PROFILES" | while read PROFILE; do
    echo "  ✅ CDN Profile: $PROFILE"
    
    # Endpoints 확인
    echo "     📍 Endpoints:"
    az cdn endpoint list --profile-name $PROFILE --resource-group $RESOURCE_GROUP \
      --query "[].{Name:name, HostName:hostName}" -o table | sed 's/^/        /'
  done
fi

echo ""
echo "================================"
echo "📝 GitHub Secrets 설정 정보:"
echo ""

# Storage Account 정보
STORAGE_NAME=$(az storage account list --resource-group $RESOURCE_GROUP --query "[0].name" -o tsv)
if [ ! -z "$STORAGE_NAME" ]; then
  echo "AZURE_STORAGE_ACCOUNT_NAME = \"$STORAGE_NAME\""
  echo ""
  echo "AZURE_STORAGE_ACCOUNT_KEY를 확인하려면:"
  echo "az storage account keys list --account-name $STORAGE_NAME --resource-group $RESOURCE_GROUP --query '[0].value' -o tsv"
fi

echo ""
echo "AZURE_RESOURCE_GROUP = \"$RESOURCE_GROUP\""

# CDN 정보
if [ ! -z "$CDN_PROFILES" ]; then
  FIRST_PROFILE=$(echo "$CDN_PROFILES" | head -1)
  FIRST_ENDPOINT=$(az cdn endpoint list --profile-name $FIRST_PROFILE --resource-group $RESOURCE_GROUP --query "[0].name" -o tsv)
  
  echo ""
  echo "AZURE_CDN_PROFILE = \"$FIRST_PROFILE\""
  echo "AZURE_CDN_ENDPOINT = \"$FIRST_ENDPOINT\""
fi

echo ""
echo "================================"
echo "✅ 확인 완료!"

