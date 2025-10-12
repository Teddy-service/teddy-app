# 🗺️ 배포 경로 선택 가이드

Azure Storage에 배포할 때 경로를 선택할 수 있습니다.

## 📋 두 가지 옵션

### Option A: 루트 경로 배포 (추천) ⭐

**URL:**
```
https://[스토리지].z20.web.core.windows.net/
```

**장점:**
- ✅ 설정이 간단함
- ✅ 경로 문제 없음
- ✅ 짧고 깔끔한 URL

**설정 방법:**

1. **vite.config.ts 수정:**
   ```bash
   # 루트 설정 파일로 교체
   mv vite.config.ts vite.config.websites.ts
   mv vite.config.root.ts vite.config.ts
   ```

2. **워크플로우 파일 선택:**
   ```bash
   # 루트 배포 워크플로우 사용
   mv .github/workflows/deploy-azure.yml .github/workflows/deploy-azure-websites.yml
   mv .github/workflows/deploy-azure-root.yml .github/workflows/deploy-azure.yml
   ```

3. **재빌드:**
   ```bash
   npm run build
   npm run preview  # 테스트
   ```

---

### Option B: 하위 경로 배포 (`/websites/`)

**URL:**
```
https://[스토리지].z20.web.core.windows.net/websites/
```

**장점:**
- ✅ 여러 사이트를 같은 Storage Account에 호스팅 가능
- ✅ 조직화된 구조

**단점:**
- ⚠️ Base path 설정 필요
- ⚠️ 더 긴 URL

**설정 방법:**

1. **vite.config.ts (이미 설정됨):**
   ```typescript
   base: '/websites/'
   ```

2. **워크플로우 (이미 설정됨):**
   ```yaml
   --destination '$web/websites'
   ```

3. **재빌드:**
   ```bash
   npm run build
   npm run preview  # 테스트
   ```

---

## 🔄 현재 설정

### 현재 활성화된 설정:

**vite.config.ts:**
```typescript
base: '/websites/'  // 하위 경로
```

**deploy-azure.yml:**
```yaml
--destination '$web/websites'  // 하위 경로
```

### 변경하려면:

#### 루트 경로로 변경 (추천):

```bash
# 1. Vite 설정 변경
cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // 루트 경로
  server: {
    host: true,
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
EOF

# 2. 워크플로우 파일 수정
# .github/workflows/deploy-azure.yml 파일에서
# --destination '$web/websites' → --destination '$web'
```

---

## 🧪 테스트 방법

### 올바른 테스트 (두 옵션 공통)

```bash
# 1. 빌드
npm run build

# 2. 미리보기 (실제 프로덕션과 동일하게 테스트)
npm run preview
```

**접속:**
- Option A (루트): `http://localhost:4173/`
- Option B (하위): `http://localhost:4173/websites/`

### ❌ 잘못된 테스트 방법

- Live Server로 `dist/index.html` 열기
- `file://` 프로토콜로 직접 열기
- 다른 간단한 HTTP 서버 사용

---

## 📊 비교표

| 항목 | 루트 경로 (`/`) | 하위 경로 (`/websites/`) |
|------|----------------|------------------------|
| **URL** | `https://xxx.z20.web.core.windows.net/` | `https://xxx.z20.web.core.windows.net/websites/` |
| **설정 난이도** | ⭐ 쉬움 | ⭐⭐ 보통 |
| **Base path** | `/` 또는 없음 | `/websites/` |
| **여러 사이트 호스팅** | ❌ 한 사이트만 | ✅ 여러 사이트 가능 |
| **권장** | ✅ 대부분의 경우 | 특별한 경우만 |

---

## 💡 추천

**일반적인 경우**: **Option A (루트 경로)** 사용
- 설정이 간단하고 문제가 적음
- URL이 짧고 깔끔함

**여러 프로젝트를 관리하는 경우**: Option B (하위 경로) 사용
- 예: `/project1/`, `/project2/`, `/websites/`
- 하나의 Storage Account로 여러 사이트 운영

---

## 🚨 주의사항

### vite.config.ts의 base와 워크플로우의 destination이 반드시 일치해야 합니다!

**일치하는 경우 (정상):**
```typescript
// vite.config.ts
base: '/websites/'
```
```yaml
# deploy-azure.yml
--destination '$web/websites'
```

**일치하지 않는 경우 (오류 발생):**
```typescript
// vite.config.ts
base: '/'  // 루트
```
```yaml
# deploy-azure.yml
--destination '$web/websites'  // 하위 경로 - 불일치!
```

이 경우 빌드된 파일의 경로가 맞지 않아 404 오류 발생!

---

## 🔧 실제 적용 예시

### 루트 경로로 변경하는 전체 과정:

```bash
# 1. vite.config.ts에서 base를 '/'로 변경
# 2. .github/workflows/deploy-azure.yml에서 destination을 '$web'로 변경
# 3. 재빌드
npm run build

# 4. 로컬 테스트
npm run preview
# http://localhost:4173/ 접속

# 5. Git 커밋 & Push (자동 배포)
git add .
git commit -m "Change deployment path to root"
git push origin main

# 6. Azure에서 확인
# https://[스토리지].z20.web.core.windows.net/
```

