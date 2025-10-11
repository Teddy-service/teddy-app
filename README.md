# 🐻 TEDDY Agency Official Website (React)

모델 & 행사 전문 에이전시 **TEDDY**의 공식 웹사이트입니다.  
기존 사이트 ([tlcreative.co.kr](http://tlcreative.co.kr/index.php?c=main))를 기반으로 리액트(React)로 재구성하며,  
현대적인 디자인과 사용자 경험을 제공하기 위한 프로젝트입니다.

---

## 🎯 메인 슬로건

> **"언제나 고객과 브랜드 옆, 가장 가까운 자리에서 함께하는 팀 TEDDY"**  
> 당신의 브랜드 곁을 늘 지키며 브랜드의 가치를 함께 빛내고  
> 믿을 수 있는 파트너 테디 에이전시입니다.

---

## 📌 프로젝트 디자인 컨셉

- 밝고 깨끗한 화이트 톤을 기본으로 한 모던한 디자인
- 블러 효과와 그라디언트를 활용한 세련된 UI 요소
- 애플 스타일의 미니멀하고 직관적인 레이아웃
- 부드러운 그림자와 반투명 효과로 깊이감 표현
- 여백을 활용한 시원하고 개방적인 디자인
- 산뜻한 파스텔 컬러를 포인트 컬러로 활용

## 📌 프로젝트 목표

- 브랜드 가치와 정체성을 시각적으로 잘 전달하는 웹사이트
- 반응형 웹 기반으로 다양한 디바이스 최적화
- 유지보수하기 쉬운 컴포넌트 기반 구조 설계
- 향후 관리자/클라이언트 페이지 확장 고려
- Swiper, Motion 등 최신 UI 트렌드 반영

---

## 🧱 기술 스택

| 항목 | 기술 |
|------|------|
| **Frontend** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **UI Framework** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Animation** | Framer Motion |
| **슬라이더/갤러리** | Swiper |
| **Form 처리** | EmailJS (설정 필요) |
| **배포** | Azure Storage Static Website |
| **CI/CD** | GitHub Actions |

---

## 🗂 폴더 구조

```
teddy-agency/
├── public/
│   └── assets/          # 로고, 이미지 등 정적 파일
├── src/
│   ├── components/      # 재사용 UI 컴포넌트
│   │   ├── HeroSection.tsx
│   │   ├── BrandIntro.tsx
│   │   ├── ServicesSection.tsx
│   │   └── CTASection.tsx
│   ├── layouts/         # 공통 레이아웃 (Header, Footer)
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/           # 각 페이지 (Home, About, Portfolio, Client, Contact)
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Client.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # 루트 컴포넌트
│   ├── main.tsx         # 진입점
│   └── index.css        # 전역 CSS
├── .env                 # 환경변수 (EmailJS 설정 등)
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 🗺 페이지 구성 (Sitemap)

- `/` : 메인 페이지 (슬로건, 배너, 브랜드 소개, CTA)
- `/about` : 에이전시 소개 및 팀 TEDDY 철학
- `/portfolio` : 프로젝트 및 행사 사례 슬라이드/그리드
- `/client` : 협력 브랜드 및 클라이언트 로고
- `/contact` : 문의 폼, 위치 지도, 연락처

## ✅ 작업 완료 체크리스트

- ✅ 프로젝트 기획 및 기존 사이트 분석
- ✅ Vite + TS + Tailwind 기반 프로젝트 생성
- ✅ 메인 슬로건 Hero Section UI 구현
- ✅ Header, Footer 공통 레이아웃 컴포넌트 생성
- ✅ Portfolio Swiper 구성
- ✅ Responsive 최적화
- ✅ 모든 페이지 컴포넌트 구현
- ✅ 애니메이션 및 인터랙션 추가
- ✅ 디자인 시스템 구축

## 📸 주요 기능

- **메인 배너**: 자동 전환 슬라이더 (Swiper)
- **포트폴리오**: 사례 그리드 및 상세 모달
- **클라이언트**: 로고 캐러셀 및 후기 섹션
- **문의하기**: 폼 (EmailJS 연동 준비)
- **반응형**: 모바일 및 태블릿 대응
- **애니메이션**: Framer Motion 기반 부드러운 전환

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: `#0ea5e9` (파란색 계열)
- **TEDDY Primary**: `#f8fafc` (밝은 화이트)
- **TEDDY Secondary**: `#f1f5f9` (연한 그레이)
- **TEDDY Accent**: `#e2e8f0` (포인트 컬러)
- **Text**: `#1e293b` (진한 텍스트)
- **Muted**: `#64748b` (연한 텍스트)

### 타이포그래피
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### 컴포넌트
- **Buttons**: Primary, Secondary 스타일
- **Cards**: Glass effect, Hover animations
- **Forms**: Focus states, Validation
- **Navigation**: Active states, Mobile menu

## 🚀 프로젝트 실행 방법

```bash
# 1. 프로젝트 클론
git clone [repository-url]
cd teddy-agency

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 빌드
npm run build

# 5. 프리뷰
npm run preview
```

## ☁️ Azure Storage 자동 배포

GitHub Actions를 통해 main 브랜치에 push하면 자동으로 Azure Storage에 배포됩니다.

### 배포 설정 방법
1. [Azure 배포 가이드](.github/AZURE_DEPLOYMENT_GUIDE.md) 참고
2. GitHub Secrets 설정 (필수):
   - `AZURE_STORAGE_ACCOUNT_NAME`: Azure Storage 계정 이름
   - `AZURE_STORAGE_ACCOUNT_KEY`: Azure Storage 액세스 키
   - `AZURE_CREDENTIALS`: Azure 인증 정보 (Service Principal)

### 자동 배포 트리거
```bash
# main 브랜치에 push하면 자동 배포
git push origin main
```

### 수동 배포
- GitHub → Actions → "Deploy to Azure Storage" → Run workflow

자세한 설정 방법은 [.github/AZURE_DEPLOYMENT_GUIDE.md](.github/AZURE_DEPLOYMENT_GUIDE.md)를 참고하세요.

### Vercel 배포 비활성화 ⚠️

이 프로젝트는 **Azure Storage**를 주 배포 플랫폼으로 사용합니다.
- `vercel.json`은 `vercel.json.backup`으로 백업되어 있습니다
- Vercel 자동 배포가 비활성화되었습니다
- Vercel을 다시 활성화하려면 [VERCEL_DISABLE_GUIDE.md](.github/VERCEL_DISABLE_GUIDE.md) 참고

## 🔧 환경 설정

### EmailJS 설정 (문의 폼)
```javascript
// src/pages/Contact.tsx에서 주석 해제
import { init, send } from '@emailjs/browser'

// 환경변수 설정
init("YOUR_USER_ID")
await send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
```

### 환경변수 (.env)
```env
VITE_EMAILJS_USER_ID=your_user_id
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 📱 반응형 지원

- **Mobile**: 320px ~ 768px
- **Tablet**: 768px ~ 1024px
- **Desktop**: 1024px 이상

## 🎯 성능 최적화

- **Code Splitting**: React Router 기반
- **Lazy Loading**: 이미지 및 컴포넌트
- **Bundle Optimization**: Vite 빌드 최적화
- **SEO**: 메타 태그 및 구조화된 데이터

## 💬 유지보수 및 확장

### 향후 계획
- [ ] 관리 페이지 (Admin CMS 연동)
- [ ] 게시판/채용 공고 연동 기능
- [ ] SNS 연동 (인스타그램, 유튜브 등)
- [ ] 다국어 지원 (영어, 중국어)
- [ ] PWA (Progressive Web App) 구현

### 개발 가이드
- 컴포넌트 추가: `src/components/` 폴더에 생성
- 페이지 추가: `src/pages/` 폴더에 생성 후 라우팅 설정
- 스타일 수정: `tailwind.config.js` 또는 `src/index.css`
- 애니메이션: Framer Motion 사용

## 📞 문의 및 지원

- **개발 문의**: [개발자 연락처]
- **디자인 문의**: [디자이너 연락처]
- **기술 스택**: React, TypeScript, Tailwind CSS, Framer Motion

---

## 📄 라이선스

이 프로젝트는 TEDDY Agency의 공식 웹사이트입니다.
© 2024 TEDDY Agency. All rights reserved. 