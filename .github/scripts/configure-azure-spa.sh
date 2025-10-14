#!/bin/bash

# Azure Storage Static Website SPA 라우팅 설정 스크립트
# 사용법: ./configure-azure-spa.sh [스토리지계정명]

set -e

echo "🔧 Azure Storage SPA 라우팅 설정"
echo "================================"

# 스토리지 계정명 확인
if [ -z "$1" ]; then
  echo ""
  echo "❌ 오류: 스토리지 계정명을 입력해주세요"
  echo ""
  echo "사용법:"
  echo "  ./configure-azure-spa.sh [스토리지계정명]"
  echo ""
  echo "예시:"
  echo "  ./configure-azure-spa.sh teddystorage"
  exit 1
fi

STORAGE_ACCOUNT=$1

echo ""
echo "📦 Storage Account: $STORAGE_ACCOUNT"
echo ""

# Azure CLI 로그인 확인
echo "🔐 Azure 로그인 확인 중..."
if ! az account show &> /dev/null; then
  echo "❌ Azure CLI에 로그인되어 있지 않습니다."
  echo "다음 명령어로 로그인하세요:"
  echo "  az login"
  exit 1
fi

echo "✅ Azure 로그인 확인됨"
echo ""

# Static Website 설정
echo "⚙️  Static Website 설정 중..."
az storage blob service-properties update \
  --account-name $STORAGE_ACCOUNT \
  --static-website \
  --404-document index.html \
  --index-document index.html

echo ""
echo "✅ Static Website 설정 완료!"
echo ""

# 설정 확인
echo "📋 현재 설정 확인:"
az storage blob service-properties show \
  --account-name $STORAGE_ACCOUNT \
  --query "staticWebsite" \
  --output table

echo ""
echo "================================"
echo "🎉 설정 완료!"
echo ""
echo "이제 다음 URL에서 SPA 라우팅이 정상 작동합니다:"
echo "  https://$STORAGE_ACCOUNT.z20.web.core.windows.net/"
echo "  https://$STORAGE_ACCOUNT.z20.web.core.windows.net/intro"
echo "  https://$STORAGE_ACCOUNT.z20.web.core.windows.net/about"
echo ""
echo "💡 팁: 브라우저 캐시를 강력 새로고침(Cmd+Shift+R) 하세요"
echo ""

