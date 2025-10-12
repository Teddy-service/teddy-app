# 🔨 빌드 및 테스트 가이드

## 🐛 일반적인 빌드 오류 해결

### ❌ MIME Type 오류 발생
```
Refused to apply style from '...' because its MIME type ('text/html') is not a supported stylesheet MIME type
GET .../assets/index-xxx.js net::ERR_ABORTED 404 (Not Found)
```

**원인:**
1. Live Server 같은 단순 서버로 빌드 파일을 열었을 때
2. Base path 설정이 배포 경로와 일치하지 않을 때
3. SPA 라우팅 설정이 없는 서버에서 실행할 때

**해결 방법:**
- ✅ `npm run preview` 사용 (추천)
- ❌ Live Server로 `dist/index.html` 직접 열기 (안 됨)

---

## ✅ 올바른 빌드 및 테스트 방법

### 1. 개발 모드 (실시간 HMR)
```bash
npm run dev
```
- 포트: `http://localhost:3000`
- 실시간 코드 변경 반영
- 개발 중에는 이것을 사용하세요

### 2. 프로덕션 빌드
```bash
npm run build
```
- 출력: `dist/` 폴더
- 최적화된 파일 생성
- Sourcemap 포함

### 3. 빌드 파일 미리보기 (로컬 테스트)
```bash
npm run preview
```
- 빌드된 파일을 실제 프로덕션과 동일하게 테스트
- SPA 라우팅 지원
- Base path 설정이 적용됨

---

## 🌐 배포 경로 설정

### 현재 설정
```typescript
// vite.config.ts
base: '/websites/'
```

이 설정은 다음 URL 구조를 위한 것입니다:
```
https://[스토리지].z20.web.core.windows.net/websites/
```

### 경로별 설정 방법

#### Option 1: Azure Storage 하위 경로에 배포 (`/websites/`)

**vite.config.ts:**
```typescript
export default defineConfig({
  base: '/websites/',
  // ...
})
```

**GitHub Actions 워크플로우:**
```yaml
--destination '$web/websites'
```

**접속 URL:**
```
https://[스토리지].z20.web.core.windows.net/websites/
```

#### Option 2: Azure Storage 루트에 배포 (추천) ⭐

**vite.config.ts:**
```typescript
export default defineConfig({
  base: '/',  // 또는 base 설정 제거
  // ...
})
```

**GitHub Actions 워크플로우:**
```yaml
--destination '$web'
```

**접속 URL:**
```
https://[스토리지].z20.web.core.windows.net/
```

---

## 🔧 빌드 후 확인사항

### 1. dist/index.html 경로 확인

빌드 후 `dist/index.html`을 열어 경로를 확인하세요:

```html
<!-- base: '/websites/' 인 경우 -->
<script type="module" src="/websites/assets/index-xxx.js"></script>
<link rel="stylesheet" href="/websites/assets/index-xxx.css">

<!-- base: '/' 인 경우 -->
<script type="module" src="/assets/index-xxx.js"></script>
<link rel="stylesheet" href="/assets/index-xxx.css">
```

### 2. 파일 구조 확인

```bash
ls -la dist/
```

예상 결과:
```
dist/
├── index.html
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── IMG/
        └── ...
```

---

## 🚀 배포 전 체크리스트

- [ ] `npm run build` 성공
- [ ] `npm run preview`로 로컬 테스트 완료
- [ ] 모든 페이지 접근 가능 (Home, About, Portfolio, Client, Contact)
- [ ] 404 페이지 동작 확인
- [ ] 이미지 로딩 확인
- [ ] 모바일 반응형 확인
- [ ] Base path 설정이 배포 경로와 일치

---

## 💡 일반적인 문제 해결

### 문제 1: 페이지가 빈 화면으로 나옴

**해결:**
1. 브라우저 콘솔(F12) 확인
2. 404 에러가 있는지 확인
3. Base path 설정 확인

### 문제 2: 라우팅이 동작하지 않음

**해결:**
1. React Router 설정 확인
2. Azure Storage에 rewrite rule 필요:
   ```json
   // vercel.json.backup 참고
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
3. Azure Storage는 자동으로 SPA fallback 지원

### 문제 3: 이미지가 로딩되지 않음

**해결:**
1. 이미지 경로가 `/assets/IMG/...`로 시작하는지 확인
2. Public 폴더의 파일은 빌드 시 `dist/` 루트로 복사됨
3. Base path를 고려한 경로 사용

---

## 📊 빌드 최적화

### 빌드 크기 확인
```bash
npm run build

# 빌드 크기 분석
du -sh dist/
du -sh dist/assets/
```

### 최적화 팁
1. **이미지 최적화**: WebP 포맷 사용
2. **Code Splitting**: 이미 React Router로 적용됨
3. **Tree Shaking**: Vite가 자동으로 처리
4. **Compression**: Azure CDN에서 Gzip/Brotli 활성화

---

## 🔍 디버깅 명령어

```bash
# 빌드 verbose 모드
npm run build -- --debug

# 특정 파일 확인
cat dist/index.html

# Assets 폴더 확인
ls -la dist/assets/

# 빌드 파일 크기 확인
find dist -type f -exec du -h {} + | sort -rh | head -20
```

---

## 📞 도움이 필요한 경우

1. 브라우저 개발자 도구(F12) → Console 탭에서 오류 확인
2. Network 탭에서 어떤 파일이 404인지 확인
3. `npm run preview`로 테스트했는지 확인
4. Base path 설정과 배포 경로가 일치하는지 확인

