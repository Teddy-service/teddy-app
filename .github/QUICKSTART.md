# 🚀 Azure 자동 배포 빠른 시작 가이드

5분 안에 GitHub Actions로 Azure Storage 자동 배포를 설정할 수 있습니다.

## ✅ 체크리스트

### 1단계: Azure 준비 (2분)
- [ ] Azure Portal 로그인
- [ ] Storage Account 생성
- [ ] Static Website 기능 활성화
- [ ] `$web` 컨테이너에 `websites` 폴더 생성 (자동 생성됨)
- [ ] Access Key 복사 (Settings → Access keys → key1 → Key)

### 2단계: GitHub Secrets 설정 (2분)
GitHub Repository → Settings → Secrets and variables → Actions → New repository secret

**필수 Secrets 2개만 추가:**

1. `AZURE_STORAGE_ACCOUNT_NAME`
   ```
   [당신의 스토리지 계정 이름]
   예: teddystorage
   ```

2. `AZURE_STORAGE_ACCOUNT_KEY`
   ```
   [Azure Portal에서 복사한 Access Key]
   ```

3. `AZURE_CREDENTIALS`
   ```json
   {
     "clientId": "xxx",
     "clientSecret": "xxx",
     "subscriptionId": "xxx",
     "tenantId": "xxx"
   }
   ```
   
   **생성 방법 (Azure CLI):**
   ```bash
   az ad sp create-for-rbac --name "github-teddy" --role contributor \
     --scopes /subscriptions/{구독ID}/resourceGroups/{리소스그룹명} \
     --sdk-auth
   ```

**선택사항 (CDN 사용 시만):**

4. `AZURE_RESOURCE_GROUP` - 리소스 그룹 이름
5. `AZURE_CDN_PROFILE` - CDN Profile 이름
6. `AZURE_CDN_ENDPOINT` - CDN Endpoint 이름

**CDN 정보 확인 방법:**
```bash
# 스크립트로 한 번에 확인
chmod +x .github/scripts/check-azure-info.sh
./.github/scripts/check-azure-info.sh [리소스그룹명]

# 또는 Azure CLI로 직접 확인
az cdn profile list --resource-group [리소스그룹명] --output table
az cdn endpoint list --profile-name [프로필명] --resource-group [리소스그룹명] --output table
```

### 3단계: 배포 테스트 (1분)
```bash
# main 브랜치에 push
git add .
git commit -m "test: Azure deployment"
git push origin main
```

GitHub → Actions 탭에서 진행 상황 확인

---

## 🎯 최소 설정 (Simple 버전)

Service Principal 없이 Storage Key만으로 배포하려면:

1. `.github/workflows/deploy-azure-simple.yml.example` 파일 이름 변경:
   ```bash
   mv .github/workflows/deploy-azure-simple.yml.example \
      .github/workflows/deploy-azure-simple.yml
   ```

2. `deploy-azure.yml` 삭제 또는 비활성화

3. GitHub Secrets 2개만 설정:
   - `AZURE_STORAGE_ACCOUNT_NAME`
   - `AZURE_STORAGE_ACCOUNT_KEY`

---

## 🔍 배포 확인

### Azure Portal에서 확인
1. Storage Account → Containers → `$web` → `websites`
2. 파일들이 업로드되었는지 확인

### 웹사이트 접속
```
https://[스토리지계정명].z20.web.core.windows.net/websites/
```

예시:
```
https://teddystorage.z20.web.core.windows.net/websites/
```

---

## ⚠️ 문제 해결

### ❌ 인증 실패
```
Error: Authentication failed
```
→ `AZURE_STORAGE_ACCOUNT_KEY` 확인 (공백 없이 복사했는지 확인)

### ❌ 컨테이너 없음
```
Error: The specified container does not exist
```
→ Azure Portal에서 Static Website 기능 활성화 확인

### ❌ 빌드 실패
```
Error: npm run build failed
```
→ 로컬에서 먼저 테스트:
```bash
npm install
npm run build
```

---

## 📞 추가 도움말

- 상세 가이드: [AZURE_DEPLOYMENT_GUIDE.md](./AZURE_DEPLOYMENT_GUIDE.md)
- Azure 공식 문서: [Azure Static Websites](https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website)

---

## 💡 팁

1. **브랜치 보호**: main 브랜치에 직접 push하면 자동 배포되므로, 개발은 develop 브랜치에서 진행하고 PR로 병합하세요.

2. **수동 배포**: GitHub Actions 탭에서 "Run workflow" 버튼으로 언제든 수동 배포 가능

3. **CDN 연결**: 추가 Secrets 설정으로 CDN 캐시 자동 제거 가능 (선택사항)

4. **로그 확인**: Actions 탭에서 각 단계별 로그를 확인할 수 있습니다.

