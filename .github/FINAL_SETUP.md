# ✅ 최종 배포 설정 완료

## 🎯 문제 해결 완료

### 문제 원인
두 개의 워크플로우 파일이 서로 다른 경로에 배포하면서 발생한 불일치:
- `vite.config.ts`: `base: '/websites/'` (HTML이 `/websites/assets/...` 참조)
- `deploy-azure.yml`: `$web/websites`에 배포 ✅
- `deploy-azure-root.yml`: `$web`에 배포 ❌

→ 둘 다 실행되면 두 곳에 파일이 있어서 동작했지만, 하나만 실행하면 경로 불일치로 404 오류 발생

### 해결 방법
**루트 경로로 통일**하여 설정을 단순화했습니다.

---

## 📋 변경 사항

### 1. ✅ vite.config.ts
```typescript
// 변경 전
base: '/websites/'

// 변경 후
base: '/'
```

### 2. ✅ .github/workflows/deploy-azure.yml
```yaml
# 변경 전
--destination '$web/websites'

# 변경 후
--destination '$web'
```

### 3. ✅ 불필요한 파일 삭제
- ❌ `deploy-azure-root.yml` (삭제됨)
- ✅ `deploy-azure.yml` (단일 워크플로우로 통합)

---

## 🚀 다음 단계

### 1. 프로젝트 재빌드 (필수!)

```bash
# 변경된 base 설정을 적용하여 다시 빌드
npm run build
```

### 2. 로컬에서 테스트

```bash
# 빌드된 파일 미리보기
npm run preview
```

브라우저에서 http://localhost:4173/ 접속하여 확인

### 3. Git 커밋 & 배포

```bash
# 변경 사항 커밋
git add .
git commit -m "Fix: Unify deployment to root path"

# main 브랜치에 push하면 자동 배포
git push origin main
```

### 4. Azure에서 확인

GitHub Actions 탭에서 워크플로우 실행 확인 후:
```
https://[스토리지계정명].z20.web.core.windows.net/
```

---

## 📊 최종 설정 요약

| 항목 | 설정 |
|------|------|
| **Vite Base Path** | `/` (루트) |
| **배포 경로** | `$web` (루트) |
| **접속 URL** | `https://[스토리지].z20.web.core.windows.net/` |
| **워크플로우** | `deploy-azure.yml` (단일 파일) |

---

## ✅ 확인 사항

빌드 후 `dist/index.html`을 확인하면:

```html
<!-- 이전 (잘못된 경로) -->
<script src="/websites/assets/index-xxx.js"></script>

<!-- 현재 (올바른 경로) -->
<script src="/assets/index-xxx.js"></script>
```

---

## 🎉 완료!

이제 하나의 워크플로우 파일만으로 정상적으로 배포됩니다.

### 자동 배포 흐름:
1. main 브랜치에 push
2. GitHub Actions 실행
3. 프로젝트 빌드 (`base: '/'` 적용)
4. Azure Storage `$web`에 업로드
5. 브라우저가 `/assets/...` 요청
6. Azure가 `$web/assets/...` 파일 제공
7. ✅ 정상 동작!

---

## 🆘 문제 발생 시

### 404 오류가 여전히 발생하면:

1. **캐시 확인:**
   ```bash
   # 브라우저 캐시 삭제 (Cmd+Shift+R 또는 Ctrl+Shift+R)
   ```

2. **빌드 확인:**
   ```bash
   cat dist/index.html | grep "script"
   # /assets/... 경로인지 확인 (NOT /websites/assets/...)
   ```

3. **Azure Storage 확인:**
   - Azure Portal → Storage Account → $web 컨테이너
   - assets/ 폴더가 루트에 있는지 확인
   - websites/ 폴더가 없어야 함

4. **워크플로우 로그 확인:**
   - GitHub → Actions 탭
   - 최근 실행 내역의 "Upload to Azure Storage" 단계 확인
   - `--destination '$web'`로 배포되는지 확인

---

## 📞 추가 도움말

- 빌드 가이드: [BUILD_AND_TEST_GUIDE.md](./BUILD_AND_TEST_GUIDE.md)
- Azure 배포 가이드: [AZURE_DEPLOYMENT_GUIDE.md](./AZURE_DEPLOYMENT_GUIDE.md)
- 빠른 시작: [QUICKSTART.md](./QUICKSTART.md)

