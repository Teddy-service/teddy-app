# Azure Storage 자동 배포 설정 가이드

이 가이드는 GitHub Actions를 통해 Azure Storage에 자동으로 배포하기 위한 설정 방법을 안내합니다.

## 📋 필수 사전 작업

1. Azure Storage Account 생성
2. Static Website 기능 활성화
3. `$web/websites` 컨테이너 경로 확인

## 🔐 GitHub Secrets 설정

GitHub Repository → Settings → Secrets and variables → Actions → New repository secret

다음 Secrets를 추가해야 합니다:

### 1. AZURE_STORAGE_ACCOUNT_NAME
```
Azure Storage Account 이름
예: mystorageaccount
```

### 2. AZURE_STORAGE_ACCOUNT_KEY
```
Azure Storage Account의 액세스 키
찾는 방법:
1. Azure Portal에서 Storage Account 선택
2. Security + networking → Access keys
3. key1 또는 key2의 Key 값 복사
```

### 3. AZURE_CREDENTIALS (Service Principal 방식)
```json
{
  "clientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "clientSecret": "your-client-secret",
  "subscriptionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "tenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

#### Service Principal 생성 방법:
```bash
# Azure CLI로 Service Principal 생성
az ad sp create-for-rbac \
  --name "github-actions-teddy-app" \
  --role contributor \
  --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \
  --sdk-auth
```

### 4. AZURE_RESOURCE_GROUP (선택사항 - CDN 사용 시)
```
Azure Resource Group 이름
예: teddy-app-rg
```

**확인 방법:**
```bash
# Azure Portal: 홈 → Resource groups → 이름 확인
# 또는 CLI:
az group list --query "[].name" -o table
```

### 5. AZURE_CDN_PROFILE (선택사항 - CDN 사용 시)
```
Azure CDN Profile 이름
예: teddy-cdn-profile
```

**확인 방법:**
```bash
# Azure Portal: 검색창에 "CDN" 입력 → Front Door and CDN profiles → Profile 이름 확인
# 또는 CLI:
az cdn profile list --resource-group [리소스그룹명] --query "[].name" -o table
```

### 6. AZURE_CDN_ENDPOINT (선택사항 - CDN 사용 시)
```
Azure CDN Endpoint 이름
예: teddy-endpoint
```

**확인 방법:**
```bash
# Azure Portal: CDN Profile 선택 → Endpoints → Endpoint 이름 확인
# 또는 CLI:
az cdn endpoint list \
  --profile-name [프로필명] \
  --resource-group [리소스그룹명] \
  --query "[].name" -o table
```

**💡 자동 확인 스크립트:**
```bash
# 한 번에 모든 정보 확인
chmod +x .github/scripts/check-azure-info.sh
./.github/scripts/check-azure-info.sh [리소스그룹명]
```

## 🚀 사용 방법

### 자동 배포
```bash
# main 브랜치에 push하면 자동으로 배포됩니다
git add .
git commit -m "Update website"
git push origin main
```

### 수동 배포
1. GitHub Repository → Actions 탭
2. "Deploy to Azure Storage" 워크플로우 선택
3. "Run workflow" 버튼 클릭

## 📁 배포 경로

빌드된 파일들은 다음 경로에 업로드됩니다:
```
Azure Storage: $web/websites/
```

## 🔍 배포 확인

1. Azure Portal에서 Storage Account 접속
2. Containers → $web → websites 폴더 확인
3. Static Website URL로 접속하여 확인

## ⚠️ 주의사항

1. **main 브랜치 보호**: main 브랜치에 직접 push하면 자동 배포되므로 주의하세요
2. **빌드 시간**: 프로젝트 크기에 따라 2-5분 정도 소요됩니다
3. **캐시**: CDN 사용 시 변경사항이 반영되는데 시간이 걸릴 수 있습니다

## 🛠️ 트러블슈팅

### 인증 실패
```
Error: Authentication failed
```
→ AZURE_CREDENTIALS와 AZURE_STORAGE_ACCOUNT_KEY 확인

### 업로드 실패
```
Error: Container not found
```
→ $web/websites 경로가 존재하는지 확인

### 빌드 실패
```
Error: Build failed
```
→ 로컬에서 `npm run build` 테스트

## 📞 도움말

더 자세한 정보는 Azure 공식 문서를 참고하세요:
- [Azure Static Website](https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website)
- [GitHub Actions for Azure](https://github.com/Azure/actions)

