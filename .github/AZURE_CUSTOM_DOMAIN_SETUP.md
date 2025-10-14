# 🌐 Azure Storage 사용자 지정 도메인 설정 가이드

## 🐛 발생한 오류

```
스토리지 계정 'cdnteddy'에 대한 사용자 지정 도메인을 업데이트하지 못했습니다.
오류: The custom domain name could not be verified. 
CNAME mapping from teddyagency.co.kr to any of 
cdnteddy.blob.core.windows.net, cdnteddy.z12.web.core.windows.net does not exist.
```

**원인:** DNS CNAME 레코드가 설정되지 않았거나 아직 전파되지 않음

---

## ✅ 해결 방법

### 📋 현재 설정 정보

| 항목 | 값 |
|------|-----|
| **Storage Account** | cdnteddy |
| **사용자 지정 도메인** | teddyagency.co.kr |
| **Static Website 엔드포인트** | cdnteddy.z12.web.core.windows.net |
| **Blob 엔드포인트** | cdnteddy.blob.core.windows.net |

---

## 🚀 방법 1: 직접 CNAME 설정 (일반적인 방법)

### 1단계: DNS 제공업체에서 CNAME 레코드 추가

**도메인 등록 업체** (가비아, 후이즈, AWS Route 53 등)의 DNS 설정으로 이동:

#### Static Website용 CNAME 설정 (권장) ⭐

| 유형 | 이름/호스트 | 값/대상 | TTL |
|------|------------|---------|-----|
| CNAME | @ 또는 teddyagency.co.kr | cdnteddy.z12.web.core.windows.net | 3600 |

**또는 www 서브도메인:**

| 유형 | 이름/호스트 | 값/대상 | TTL |
|------|------------|---------|-----|
| CNAME | www | cdnteddy.z12.web.core.windows.net | 3600 |

#### ⚠️ 루트 도메인 (@) 제한 사항

많은 DNS 제공업체에서 루트 도메인(@)에는 CNAME을 설정할 수 없습니다.

**해결 방법:**
1. **www 서브도메인 사용** (권장)
2. **A 레코드 + ALIAS** 사용 (Route 53, Cloudflare 등)
3. **Azure CDN 사용** (루트 도메인 지원)

### 2단계: DNS 전파 대기 및 확인

CNAME 설정 후 DNS 전파를 기다립니다 (보통 5분~2시간, 최대 48시간).

**확인 방법:**

```bash
# macOS/Linux
nslookup teddyagency.co.kr

# 또는
dig teddyagency.co.kr CNAME

# 또는 온라인 도구 사용
# https://dnschecker.org/
```

**정상 응답 예시:**
```
teddyagency.co.kr
    canonical name = cdnteddy.z12.web.core.windows.net
```

### 3단계: Azure에서 사용자 지정 도메인 추가

DNS가 전파되었으면:

1. **Azure Portal** → **Storage Account (cdnteddy)** 선택
2. **Networking** → **Custom domain** (또는 **사용자 지정 도메인**)
3. **Custom domain name** 입력: `teddyagency.co.kr` (또는 `www.teddyagency.co.kr`)
4. **Save** 클릭
5. ✅ 성공!

---

## 🔧 방법 2: 중간 확인 레코드 사용 (asverify)

다운타임 없이 설정하거나 루트 도메인을 사용하려면:

### 1단계: asverify CNAME 레코드 추가

DNS 제공업체에서 다음 CNAME 레코드 추가:

| 유형 | 이름/호스트 | 값/대상 | TTL |
|------|------------|---------|-----|
| CNAME | asverify.teddyagency.co.kr | asverify.cdnteddy.z12.web.core.windows.net | 3600 |

**또는 www 서브도메인:**

| 유형 | 이름/호스트 | 값/대상 | TTL |
|------|------------|---------|-----|
| CNAME | asverify.www | asverify.cdnteddy.z12.web.core.windows.net | 3600 |

### 2단계: Azure에서 도메인 추가 (중간 확인 사용)

1. Azure Portal → Storage Account → Custom domain
2. **Use indirect CNAME validation** 체크박스 선택
3. Custom domain name 입력: `teddyagency.co.kr`
4. Save
5. ✅ 성공!

### 3단계: 실제 CNAME 레코드 추가

이제 다운타임 없이 실제 CNAME을 추가할 수 있습니다:

| 유형 | 이름/호스트 | 값/대상 | TTL |
|------|------------|---------|-----|
| CNAME | teddyagency.co.kr (또는 www) | cdnteddy.z12.web.core.windows.net | 3600 |

---

## 🌟 방법 3: Azure CDN 사용 (루트 도메인 + HTTPS)

**루트 도메인 (teddyagency.co.kr)과 HTTPS를 함께 사용**하려면 Azure CDN이 필수입니다.

### 장점:
- ✅ 루트 도메인 지원
- ✅ 자동 HTTPS/SSL 인증서
- ✅ CDN 캐싱 및 성능 향상
- ✅ 전 세계 배포

### 단계:

#### 1. Azure CDN Profile 생성

```bash
# Azure CLI로 CDN Profile 생성
az cdn profile create \
  --name teddy-cdn-profile \
  --resource-group [리소스그룹명] \
  --sku Standard_Microsoft
```

#### 2. CDN Endpoint 생성

```bash
az cdn endpoint create \
  --name teddy-endpoint \
  --profile-name teddy-cdn-profile \
  --resource-group [리소스그룹명] \
  --origin cdnteddy.z12.web.core.windows.net \
  --origin-host-header cdnteddy.z12.web.core.windows.net \
  --enable-compression
```

#### 3. DNS 설정

**루트 도메인용 A 레코드:**

CDN endpoint IP를 확인한 후:

| 유형 | 이름/호스트 | 값/대상 |
|------|------------|---------|
| A | @ | [CDN endpoint IP] |

**또는 CNAME (서브도메인):**

| 유형 | 이름/호스트 | 값/대상 |
|------|------------|---------|
| CNAME | www | teddy-endpoint.azureedge.net |

#### 4. CDN에 사용자 지정 도메인 추가

1. Azure Portal → CDN Endpoint → Custom domains
2. Add custom domain
3. Hostname 입력: `teddyagency.co.kr`
4. HTTPS 활성화 (CDN managed certificate)

---

## 📊 DNS 설정 예시 (도메인 제공업체별)

### 가비아 (Gabia)

1. My가비아 → 도메인 관리
2. DNS 정보 → 레코드 수정
3. 레코드 추가:
   ```
   타입: CNAME
   호스트: www (또는 @는 불가능)
   값: cdnteddy.z12.web.core.windows.net
   TTL: 3600
   ```

### AWS Route 53

1. Hosted zones → 도메인 선택
2. Create record:
   ```
   Record name: www (또는 비워두기)
   Record type: CNAME (또는 루트는 A/ALIAS)
   Value: cdnteddy.z12.web.core.windows.net
   TTL: 300
   ```

**루트 도메인 (ALIAS):**
```
Record name: (비워두기)
Record type: A
Alias: Yes
Alias target: [Azure endpoint]
```

### Cloudflare

1. DNS → Add record:
   ```
   Type: CNAME
   Name: @ (또는 www)
   Target: cdnteddy.z12.web.core.windows.net
   Proxy status: DNS only (주황색 구름 OFF)
   TTL: Auto
   ```

⚠️ **중요:** Cloudflare 사용 시 Proxy(주황색 구름)를 끄세요!

### 후이즈 (Whois)

1. 도메인 관리 → DNS 관리
2. 레코드 추가:
   ```
   종류: CNAME
   호스트: www
   데이터: cdnteddy.z12.web.core.windows.net
   ```

---

## 🧪 DNS 전파 확인 방법

### 방법 1: nslookup (터미널)

```bash
nslookup www.teddyagency.co.kr
```

**정상 응답:**
```
www.teddyagency.co.kr
    canonical name = cdnteddy.z12.web.core.windows.net
Address: [IP 주소]
```

### 방법 2: dig (터미널)

```bash
dig www.teddyagency.co.kr CNAME +short
```

**정상 응답:**
```
cdnteddy.z12.web.core.windows.net.
```

### 방법 3: 온라인 도구

- **DNS Checker**: https://dnschecker.org/
- **What's My DNS**: https://www.whatsmydns.net/
- **DNS Propagation Checker**: https://www.dnswatch.info/

도메인 입력 후 전 세계 DNS 서버에서 전파 상태 확인

---

## ⚠️ 일반적인 문제 해결

### 문제 1: 루트 도메인(@)에 CNAME을 설정할 수 없음

**원인:** DNS 표준상 루트 도메인에는 CNAME 사용 불가

**해결:**
- **옵션 A:** `www.teddyagency.co.kr` 사용 (권장)
- **옵션 B:** Azure CDN + A 레코드 사용
- **옵션 C:** DNS 제공업체를 ALIAS 지원 업체로 변경 (Route 53, Cloudflare)

### 문제 2: DNS가 전파되지 않음

**확인 사항:**
- DNS 설정을 올바르게 저장했는가?
- 충분한 시간(최소 15분)이 지났는가?
- 로컬 DNS 캐시 삭제:
  ```bash
  # macOS
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
  
  # Windows
  ipconfig /flushdns
  ```

### 문제 3: HTTPS 인증서 오류

**해결:**
- Azure Storage는 사용자 지정 도메인에 HTTPS를 직접 지원하지 않음
- **Azure CDN을 사용해야 함** (자동 SSL 인증서 제공)

### 문제 4: www와 루트 도메인 둘 다 사용하고 싶음

**해결:**
1. www에 CNAME 설정
2. 루트 도메인에 www로 리다이렉트 설정 (DNS 제공업체 기능 사용)
3. 또는 Azure CDN 사용

---

## 📋 단계별 체크리스트

### DNS 설정 전

- [ ] Storage Account 이름 확인: `cdnteddy`
- [ ] Static Website 엔드포인트 확인: `cdnteddy.z12.web.core.windows.net`
- [ ] 도메인 확인: `teddyagency.co.kr`
- [ ] DNS 제공업체 로그인

### DNS 설정

- [ ] CNAME 레코드 추가 (www 권장)
- [ ] 또는 asverify CNAME 레코드 추가 (중간 확인용)
- [ ] 레코드 저장

### 확인 및 적용

- [ ] DNS 전파 대기 (15분~2시간)
- [ ] nslookup/dig로 CNAME 확인
- [ ] Azure Portal에서 사용자 지정 도메인 추가
- [ ] 브라우저에서 도메인 접속 테스트

### HTTPS 필요 시

- [ ] Azure CDN Profile 생성
- [ ] CDN Endpoint 생성
- [ ] CDN에 사용자 지정 도메인 추가
- [ ] HTTPS 활성화

---

## 🎯 권장 설정

### 소규모 프로젝트 (비용 절감)

```
도메인: www.teddyagency.co.kr
CNAME → cdnteddy.z12.web.core.windows.net
HTTPS: 불필요하면 생략 (HTTP만 사용)
```

### 프로덕션 환경 (권장)

```
Azure CDN 사용
도메인: teddyagency.co.kr + www.teddyagency.co.kr
HTTPS: CDN managed certificate (무료)
성능: CDN 캐싱
```

---

## 💡 최종 권장 사항

**가장 간단한 방법 (HTTPS 불필요):**
1. `www.teddyagency.co.kr` 사용
2. DNS에 CNAME 레코드 추가: `www → cdnteddy.z12.web.core.windows.net`
3. DNS 전파 대기 (15분)
4. Azure에서 사용자 지정 도메인 추가

**프로덕션 환경 (HTTPS 필수):**
1. Azure CDN 설정
2. CDN에 사용자 지정 도메인 추가
3. HTTPS 활성화 (자동 인증서)

---

## 📞 추가 도움말

- Azure 사용자 지정 도메인 문서: https://docs.microsoft.com/azure/storage/blobs/storage-custom-domain-name
- Azure CDN 문서: https://docs.microsoft.com/azure/cdn/

