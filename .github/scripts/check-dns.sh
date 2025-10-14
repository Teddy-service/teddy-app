#!/bin/bash

# DNS CNAME 전파 확인 스크립트
# 사용법: ./check-dns.sh [도메인명]

set -e

echo "🔍 DNS CNAME 전파 확인"
echo "================================"

# 도메인 확인
if [ -z "$1" ]; then
  echo ""
  echo "사용법:"
  echo "  ./check-dns.sh [도메인명]"
  echo ""
  echo "예시:"
  echo "  ./check-dns.sh www.teddyagency.co.kr"
  echo "  ./check-dns.sh teddyagency.co.kr"
  exit 1
fi

DOMAIN=$1
TARGET="cdnteddy.z12.web.core.windows.net"

echo ""
echo "🌐 도메인: $DOMAIN"
echo "🎯 목표: $TARGET"
echo ""

# nslookup 확인
echo "📋 nslookup 결과:"
echo "---"
nslookup $DOMAIN || echo "❌ 조회 실패"
echo ""

# dig 확인 (설치되어 있으면)
if command -v dig &> /dev/null; then
  echo "📋 dig CNAME 결과:"
  echo "---"
  CNAME_RESULT=$(dig $DOMAIN CNAME +short)
  
  if [ -z "$CNAME_RESULT" ]; then
    echo "❌ CNAME 레코드가 없습니다"
    echo ""
    echo "다음을 확인하세요:"
    echo "1. DNS 제공업체에서 CNAME 레코드를 추가했는가?"
    echo "2. 레코드가 저장되었는가?"
    echo "3. 충분한 시간(15분 이상)이 지났는가?"
  else
    echo "✅ CNAME: $CNAME_RESULT"
    
    # 목표와 비교
    if [[ "$CNAME_RESULT" == *"$TARGET"* ]]; then
      echo ""
      echo "🎉 성공! DNS가 올바르게 설정되었습니다!"
      echo ""
      echo "이제 Azure Portal에서 사용자 지정 도메인을 추가할 수 있습니다:"
      echo "1. Azure Portal → Storage Account (cdnteddy)"
      echo "2. Networking → Custom domain"
      echo "3. Custom domain name: $DOMAIN"
      echo "4. Save"
    else
      echo ""
      echo "⚠️  CNAME이 올바르지 않습니다"
      echo "현재: $CNAME_RESULT"
      echo "필요: $TARGET"
    fi
  fi
else
  echo "ℹ️  dig 명령어가 설치되어 있지 않습니다"
fi

echo ""
echo "================================"
echo ""
echo "💡 추가 확인 방법:"
echo ""
echo "1. 온라인 도구:"
echo "   https://dnschecker.org/ 에서 '$DOMAIN' 입력"
echo ""
echo "2. 로컬 DNS 캐시 삭제 (macOS):"
echo "   sudo dscacheutil -flushcache"
echo "   sudo killall -HUP mDNSResponder"
echo ""
echo "3. DNS 전파는 최대 48시간 걸릴 수 있습니다"
echo "   (보통 15분~2시간)"
echo ""

