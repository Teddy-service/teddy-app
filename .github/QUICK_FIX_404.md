# ⚡ 빠른 해결: 배포 후 /intro, /about 등 404 오류

## 🎯 바로 해결하기 (1분)

### Azure Portal에서 설정 (가장 빠름!)

1. **Azure Portal** → **Storage Account** 선택

2. **Static website** 클릭 (왼쪽 메뉴)

3. **설정 변경:**
   ```
   Error document path: index.html
   ```

4. **Save** 클릭

5. **완료!** 이제 모든 경로가 작동합니다.

---

## 🖥️ 또는 Azure CLI 사용 (10초)

```bash
# 스토리지 계정명을 본인 것으로 변경
az storage blob service-properties update \
  --account-name [스토리지계정명] \
  --static-website \
  --404-document index.html \
  --index-document index.html
```

또는 스크립트 사용:

```bash
chmod +x .github/scripts/configure-azure-spa.sh
./.github/scripts/configure-azure-spa.sh [스토리지계정명]
```

---

## 🧪 테스트

브라우저에서 직접 접속:
```
https://[스토리지].z20.web.core.windows.net/intro
```

새로고침 (F5)도 정상 작동해야 합니다!

---

## 📚 자세한 설명

- [AZURE_SPA_ROUTING_FIX.md](./AZURE_SPA_ROUTING_FIX.md) 참고

---

## 💡 다음 배포부터는 자동 설정됨

이제 GitHub Actions 워크플로우에 자동 설정이 추가되어 있으므로,
다음 push부터는 자동으로 설정됩니다!

