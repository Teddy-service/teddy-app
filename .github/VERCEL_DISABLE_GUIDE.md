# 🚫 Vercel 자동 배포 비활성화 가이드

Azure Storage로 배포 방식을 변경하면서 Vercel 자동 배포를 비활성화하는 방법입니다.

## ✅ 완료된 작업

1. ✅ `vercel.json` 파일을 `vercel.json.backup`으로 이름 변경
2. ✅ `.gitignore`에 Vercel 관련 항목 추가

## 🔧 추가 비활성화 단계

### 1. GitHub에서 Vercel 연결 해제 (추천)

GitHub Repository에서 Vercel 앱 연결을 해제하면 완전히 자동 배포가 중단됩니다.

**방법:**
1. GitHub Repository → **Settings**
2. 왼쪽 메뉴 → **Integrations** → **GitHub Apps**
3. **Vercel** 찾기 → **Configure**
4. 해당 Repository 체크 해제 또는 **Suspend** 클릭

### 2. Vercel Dashboard에서 프로젝트 일시 중지

Vercel 프로젝트는 유지하되 자동 배포만 중단하려면:

**방법:**
1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. 해당 프로젝트 선택
3. **Settings** → **Git**
4. **Disconnect** 버튼 클릭 (Git 연결 해제)

또는:
1. **Settings** → **General**
2. **Pause Deployments** 옵션 활성화

### 3. Vercel 프로젝트 완전 삭제 (선택사항)

Vercel을 더 이상 사용하지 않는다면:

**방법:**
1. Vercel Dashboard → 프로젝트 선택
2. **Settings** → **Advanced**
3. 맨 아래 **Delete Project** 클릭

## 🔄 나중에 다시 활성화하려면

### Vercel 재활성화

1. **vercel.json 복원:**
   ```bash
   mv vercel.json.backup vercel.json
   ```

2. **.gitignore 수정:**
   ```bash
   # .gitignore에서 다음 줄 제거
   vercel.json
   ```

3. **Git에 커밋:**
   ```bash
   git add vercel.json
   git commit -m "Re-enable Vercel deployment"
   git push
   ```

4. **Vercel Dashboard에서 다시 연결:**
   - Import Project → GitHub Repository 선택

## 📋 현재 배포 상태

- ❌ **Vercel**: 비활성화됨 (vercel.json.backup으로 백업)
- ✅ **Azure Storage**: GitHub Actions로 자동 배포 활성화

## 🎯 배포 흐름

### 이전 (Vercel)
```
Git Push → Vercel 자동 빌드 → Vercel 배포
```

### 현재 (Azure)
```
Git Push (main) → GitHub Actions → Azure Storage ($web/websites)
```

## ⚠️ 주의사항

1. **DNS 설정**: 
   - Vercel에 커스텀 도메인을 연결했다면, DNS를 Azure로 변경해야 합니다
   - Azure Storage Static Website URL로 도메인을 포인팅하세요

2. **환경변수**:
   - Vercel의 환경변수를 사용했다면, GitHub Secrets로 이전해야 합니다

3. **빌드 설정**:
   - Vercel의 빌드 명령어와 출력 디렉토리를 확인하세요
   - GitHub Actions 워크플로우에서 동일하게 설정되어 있는지 확인

## 📞 문제 해결

### Vercel이 여전히 배포를 시도하는 경우

1. **GitHub Apps 연결 확인:**
   - GitHub Repository Settings → Integrations 확인

2. **Vercel Git 연결 확인:**
   - Vercel Dashboard → Project Settings → Git 확인

3. **강제 중단:**
   - Vercel Dashboard에서 프로젝트 삭제

### 커스텀 도메인 이슈

- Vercel에서 Azure로 도메인을 이전하는 경우:
  1. Vercel에서 도메인 제거
  2. Azure Storage Static Website 또는 Azure CDN에 도메인 추가
  3. DNS 레코드 업데이트 (CNAME 변경)
  4. SSL 인증서 설정

## 💡 참고

- **vercel.json.backup**: 원본 Vercel 설정 파일 (나중에 복원 가능)
- **Azure 배포 가이드**: [AZURE_DEPLOYMENT_GUIDE.md](./AZURE_DEPLOYMENT_GUIDE.md)
- **빠른 시작**: [QUICKSTART.md](./QUICKSTART.md)

