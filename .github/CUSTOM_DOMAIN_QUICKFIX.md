# ⚡ 사용자 지정 도메인 설정 빠른 해결

## 🎯 당신의 상황

```
Storage Account: cdnteddy
도메인: teddyagency.co.kr
엔드포인트: cdnteddy.z12.web.core.windows.net
오류: CNAME mapping does not exist
```

---

## ✅ 해결 방법 (3단계)

### 1단계: DNS 제공업체에서 CNAME 레코드 추가 (5분)

**도메인 등록 업체** (가비아, 후이즈, Route 53 등)에 로그인:

#### ⚠️ 중요: www 사용 (루트 도메인은 제한적)

| 유형 | 호스트/이름 | 값/대상 | TTL |
|------|------------|---------|-----|
| CNAME | **www** | cdnteddy.z12.web.core.windows.net | 3600 |

**설정 예시:**
```
종류: CNAME
호스트: www
값: cdnteddy.z12.web.core.windows.net
TTL: 3600 (1시간)
```

저장!

---

### 2단계: DNS 전파 대기 (15분~2시간)

터미널에서 확인:

```bash
# macOS/Linux
nslookup www.teddyagency.co.kr

# 정상이면 다음과 같이 나옴:
# www.teddyagency.co.kr
#     canonical name = cdnteddy.z12.web.core.windows.net
```

또는 온라인에서 확인:
- https://dnschecker.org/ 에서 `www.teddyagency.co.kr` 입력

---

### 3단계: Azure에서 사용자 지정 도메인 추가

DNS가 전파되었으면:

1. **Azure Portal** → **cdnteddy** Storage Account
2. **Networking** → **Custom domain**
3. **Custom domain name** 입력: `www.teddyagency.co.kr`
4. **Save**
5. ✅ 완료!

---

## 🚨 루트 도메인 (teddyagency.co.kr)을 사용하고 싶다면?

루트 도메인은 일반 CNAME으로 설정할 수 없습니다. 두 가지 방법:

### 방법 A: Azure CDN 사용 (권장)

1. Azure CDN Profile & Endpoint 생성
2. CDN에 사용자 지정 도메인 추가 (루트 도메인 가능)
3. HTTPS도 자동 설정됨!

### 방법 B: DNS 리다이렉트

1. www에 CNAME 설정
2. 루트 도메인은 www로 리다이렉트 (DNS 제공업체 기능)

---

## 💡 빠른 체크리스트

- [ ] DNS에 CNAME 레코드 추가 (`www → cdnteddy.z12.web.core.windows.net`)
- [ ] DNS 전파 대기 (최소 15분)
- [ ] `nslookup www.teddyagency.co.kr`로 확인
- [ ] Azure에서 사용자 지정 도메인 추가
- [ ] 브라우저에서 `http://www.teddyagency.co.kr` 접속 테스트

---

## 📚 자세한 가이드

[AZURE_CUSTOM_DOMAIN_SETUP.md](./AZURE_CUSTOM_DOMAIN_SETUP.md) 참고

