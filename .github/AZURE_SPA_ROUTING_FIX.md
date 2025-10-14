# 🔧 Azure Storage SPA 라우팅 설정 가이드

## 🐛 문제 증상

- ✅ 로컬: `/intro`, `/about`, `/portfolio` 등 모든 경로 정상 작동
- ❌ Azure 배포 후: 루트(`/`)만 작동, 다른 경로는 404 발생
- 특히 URL을 직접 입력하거나 새로고침할 때 문제 발생

## 🔍 원인

**SPA (Single Page Application) 라우팅 문제**

React Router는 클라이언트 사이드 라우팅을 사용합니다:
1. 서버는 항상 `index.html`을 제공해야 함
2. React Router가 로드된 후 URL에 맞는 컴포넌트 렌더링
3. 하지만 Azure Storage는 기본적으로 요청 경로에 파일이 없으면 404 반환

---

## ✅ 해결 방법

### 방법 1: Azure Portal 설정 (추천) ⭐

**가장 간단하고 확실한 방법입니다.**

#### 단계:

1. **Azure Portal** (https://portal.azure.com) 접속

2. **Storage Account** 선택
   - 본인의 Storage Account 클릭

3. **Static website 설정**
   - 왼쪽 메뉴에서 **Data management** → **Static website** 클릭

4. **설정 값 입력:**
   ```
   Static website: Enabled
   Index document name: index.html
   Error document path: index.html    ← 핵심! 404 시 index.html로 리다이렉트
   ```

5. **Save** 버튼 클릭

6. **테스트:**
   ```
   https://[스토리지].z20.web.core.windows.net/intro
   ```
   이제 정상 작동해야 합니다!

---

### 방법 2: Azure CLI로 설정

터미널에서 다음 명령어 실행:

```bash
# Static website 활성화 및 에러 문서 설정
az storage blob service-properties update \
  --account-name [스토리지계정명] \
  --static-website \
  --404-document index.html \
  --index-document index.html
```

---

### 방법 3: GitHub Actions 워크플로우에 추가 (자동화)

워크플로우 파일에 설정 단계를 추가할 수 있습니다:

```yaml
- name: Configure Static Website Settings
  run: |
    az storage blob service-properties update \
      --account-name ${{ secrets.AZURE_STORAGE_ACCOUNT_NAME }} \
      --static-website \
      --404-document index.html \
      --index-document index.html
```

---

## 🧪 테스트 방법

### 1. 브라우저에서 직접 URL 입력

```
https://[스토리지].z20.web.core.windows.net/intro
https://[스토리지].z20.web.core.windows.net/about
https://[스토리지].z20.web.core.windows.net/portfolio
```

### 2. 페이지에서 새로고침 (F5)

각 페이지에서 새로고침했을 때 404가 아닌 정상 페이지가 나와야 합니다.

### 3. 404 페이지 테스트

존재하지 않는 경로는 React Router의 NotFound 페이지가 나와야 합니다:
```
https://[스토리지].z20.web.core.windows.net/non-existent-page
```

---

## 📊 동작 원리

### 설정 전 (문제 발생)

```
브라우저 요청: /intro
    ↓
Azure Storage: /intro 파일 찾기
    ↓
없음 → 404 에러 페이지
    ↓
❌ React Router 실행 안 됨
```

### 설정 후 (정상 동작)

```
브라우저 요청: /intro
    ↓
Azure Storage: /intro 파일 찾기
    ↓
없음 → Error document (index.html) 반환
    ↓
index.html 로드 → React 앱 실행
    ↓
React Router: /intro 경로 처리
    ↓
✅ Intro 페이지 렌더링
```

---

## 🎯 중요 포인트

### Error document path를 index.html로 설정하는 것이 핵심!

이 설정은:
1. ✅ 존재하지 않는 모든 경로 요청을 `index.html`로 리다이렉트
2. ✅ React 앱이 로드되고 React Router가 경로 처리
3. ✅ SPA의 클라이언트 사이드 라우팅 가능하게 함
4. ✅ 새로고침해도 정상 작동

### 비교: 다른 플랫폼의 동일한 기능

| 플랫폼 | 설정 방법 |
|--------|----------|
| **Vercel** | `vercel.json`의 `rewrites` |
| **Netlify** | `_redirects` 파일 또는 `netlify.toml` |
| **Azure Storage** | Static website의 Error document path |
| **AWS S3** | CloudFront의 Custom error responses |

---

## ⚠️ 주의사항

### 1. 진짜 404는 어떻게 처리?

React Router의 catch-all route (`path="*"`)에서 처리합니다:

```typescript
// App.tsx
<Route path="*" element={<NotFound />} />
```

Azure는 항상 `index.html`을 반환하지만, React Router가 유효하지 않은 경로를 감지하고 NotFound 컴포넌트를 렌더링합니다.

### 2. 설정 후에도 안 되면?

1. **브라우저 캐시 삭제:**
   - Cmd+Shift+R (Mac) 또는 Ctrl+Shift+R (Windows)

2. **Azure 설정 재확인:**
   ```bash
   az storage blob service-properties show \
     --account-name [스토리지계정명] \
     --query staticWebsite
   ```

3. **CDN 사용 시:**
   - CDN 캐시도 제거해야 할 수 있음
   - CDN endpoint에서도 error page 설정 필요

### 3. SEO 고려사항

모든 경로가 `index.html`을 반환하므로 SEO를 위해서는:
- Server-side rendering (SSR) 고려
- 또는 Pre-rendering 도구 사용 (react-snap 등)
- 또는 Azure Functions / CDN Rules로 동적 처리

---

## 🚀 빠른 설정 체크리스트

- [ ] Azure Portal 접속
- [ ] Storage Account 선택
- [ ] Static website 메뉴 클릭
- [ ] Error document path = `index.html` 설정
- [ ] Save 클릭
- [ ] 브라우저에서 `/intro` 접속 테스트
- [ ] 페이지에서 F5 새로고침 테스트
- [ ] ✅ 정상 작동 확인!

---

## 📞 문제 해결

### Q: 설정했는데도 404가 나와요

**A: 다음을 확인하세요:**
1. 브라우저 캐시 강력 새로고침 (Cmd+Shift+R)
2. Azure Portal에서 설정이 저장되었는지 확인
3. 올바른 Storage Account URL 사용 중인지 확인

### Q: CDN을 사용하는데 여전히 404가 나와요

**A: CDN endpoint에서도 설정 필요:**
1. Azure Portal → CDN Endpoint
2. Origin type: Custom origin
3. Custom error pages 추가:
   - Error code: 404
   - Custom page path: /index.html

### Q: 로컬에서는 되는데 배포하면 404...

**A: 정확히 이 가이드의 문제입니다!**
- Error document path를 index.html로 설정하세요

---

## 💡 참고 자료

- [Azure Static Website 문서](https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website)
- [React Router 문서](https://reactrouter.com/en/main)
- [SPA 배포 가이드](https://create-react-app.dev/docs/deployment/)

