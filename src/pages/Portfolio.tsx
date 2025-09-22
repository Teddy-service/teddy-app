import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { scrollToTop } from '../utils/scrollToTop'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(8)
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("전체")

  // Scroll to top on page load
  useEffect(() => {
    scrollToTop()
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const projects = [
    {
      id: 1,
      title: "[THE FACE SHOP] 더페이스샵 X 다이노탱 풍작 에디션 팝업스토어",
      category: "행사 기획",
      description: "귀여운 다이노탱 에디션과 함께한 특별한 현장 🍑✨",
      longDescription: (
        <>
          {/* <p>✔️ 포토 인화 이벤트 </p>
          <p>✔️ 100% 당첨 스크래치 카드 이벤트</p> */}
          <br />
          <p>
            현장에는 슈퍼바이저, 이벤트·세일즈 프로모터, 그리고 인형탈 캐릭터까지 함께해 방문해주신 모든 고객분들께 즐겁고 잊지 못할 경험을 선사했습니다. 🎉
            <br /><br />
            과일 수확 게임, 100% 럭키드로우, 풍성한 구매 혜택으로 브랜드 매력을 자연스럽게 알리고 고객과 활발히 소통할 수 있었던 의미 있는 자리였습니다. 
            <br /><br />
            많은 분들이 웃음과 추억을 담아가시며
            브랜드 인지도와 긍정적인 경험을 동시에 높일 수 있었습니다. 🌟
          </p>
        </>
      ),
      image: "/assets/IMG/Project/Dino/thefaceshop_n_dino_1.jpeg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Dino/thefaceshop_n_dino_1.jpeg",
        "/assets/IMG/Project/Dino/thefaceshop_n_dino_2.jpeg",
        "/assets/IMG/Project/Dino/thefaceshop_n_dino_3.jpeg",
        "/assets/IMG/Project/Dino/thefaceshop_n_dino_4.jpeg",
        "/assets/IMG/Project/Dino/thefaceshop_n_dino_5.jpeg",
      ],
      details: {
        client: "@thefaceshop.official",
        date: "2025.08.15 - 2025.08.24",
        location: "무신사 뷰티 스페이스 1",
        // duration: "2주",
        // team: "이벤트 운영팀 4명, 프로모터 6명",
        // results: ["VIP 고객 1,000명 방문", "매출 3억원 달성", "SNS 인플루언서 50명 참여"]
      }
    },
    {
      id: 2,
      title: "지프 시승행사",
      category: "마케팅 컨설팅",
      description: "지프 차량의 시승행사를 기획하고 성공적으로 진행했습니다.",
      longDescription: "지프 코리아의 신형 차량 시승행사를 총괄 기획했습니다. 150명의 VIP 고객과 자동차 전문 기자단을 대상으로 오프로드 시승 행사를 성공적으로 진행했으며, 지프 브랜드의 핵심 가치와 차량의 성능을 효과적으로 전달했습니다. 행사 후 시승 차량 계약률 200% 달성 및 언론 보도 50건 이상의 성과를 기록했습니다.",
      image: "/assets/IMG/Project/Jeep/jeep_1.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Jeep/jeep_1.jpg",
        "/assets/IMG/Project/Jeep/jeep_2.jpg",
      ],
      details: {
        client: "지프 코리아",
        date: "2024.03",
        location: "서울 강남구",
        duration: "3개월",
        team: "기획팀 3명, 운영팀 5명",
        results: ["시승 차량 계약률 200% 달성", "언론 보도 50건 이상", "VIP 고객 150명 참석"]
      }
    },
    {
      id: 3,
      title: "[GIVENCHY] 신세계백화점 강남점 팝업 스토어",
      category: "행사 기획",
      description: "신세계백화점 강남점에서 진행된 지방시 젠틀맨 소사이어티 팝업을 성공적으로 마무리했습니다.",
      longDescription: (
        <>
          <p>✔️ 포토 인화 이벤트 </p>
          <p>✔️ 100% 당첨 스크래치 카드 이벤트</p>
          <br />
          <p>
            연예인 방문 등 이슈가 많은 행사였던 만큼 동선 및 안전 관리에 특히 신경을 썼고 브랜드 이미지에 걸맞은 세심한 현장 연출에 집중했습니다.
            <br /><br />
            또한 이벤트, 세일즈 전문 프로모터를 다수 배치해 고객 응대부터 제품 체험, 구매 유도까지 전 과정을 체계적으로 운영한 결과 브랜드 홍보와 지점 목표 매출을 초과 달성하여 성공적인 운영을 이끌었습니다.
            <br /><br />
            앞으로도 브랜드와 고객 모두가 만족할 수 있는 운영으로 찾아뵙겠습니다🖤</p>
            <br />
        </>
      ),
      image: "/assets/IMG/Project/Givenchy/givenchy_2.PNG",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Givenchy/givenchy_2.PNG",
        "/assets/IMG/Project/Givenchy/givenchy_3.jpg",
        "/assets/IMG/Project/Givenchy/givenchy_1.jpg",
      ],
      details: {
        client: "@givenchybeauty",
        date: "2023.03.15 - 2023.03.21",
        location: "신세계백화점 강남점",
        // duration: "2주",
        // team: "이벤트 운영팀 4명, 프로모터 6명",
        // results: ["VIP 고객 1,000명 방문", "매출 3억원 달성", "SNS 인플루언서 50명 참여"]
      }
    },
    {
      id: 4,
      title: "[FRESHIAN] Kurly Beauty Festa",
      category: "마케팅 컨설팅",
      description: "프로시안 화장품 브랜드의 신제품 런칭 행사를 성공적으로 진행했습니다.",
      longDescription: (
        <>
          {/* <p>카카오톡 플친 이벤트 🎁</p>
          <p>100% 당첨 스크래치 이벤트 🖍️</p> */}
          <br />
          <p>
            프레시안 컬리뷰티페스타 현장을 더욱 빛낼 수 있도록 행사 경험이 많은 프로모터들로 구성하여 페스타 분위기에 걸맞은 생동감 있는 운영을 선보였습니다.
            <br /><br />
            방문해주신 모든 고객분들께 즐거운 경험을 선사하며 브랜드 이미지 홍보에도 큰 기여를 했던 뜻깊은 시간이었습니다✨
          </p>
        </>
      ),
      image: "/assets/IMG/Project/Freshian/freshian_2.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Freshian/freshian_2.jpg",
        "/assets/IMG/Project/Freshian/freshian_1.jpg",
        "/assets/IMG/Project/Freshian/freshian_3.jpg"
      ],
      details: {
        client: "@freshian.official",
        date: "2024.10.10 - 2024.10.13",
        location: "DDP 동대문 디자인 플라자 아트홀",
        // duration: "2개월",
        // team: "기획팀 4명, 운영팀 8명",
        // results: ["VIP 고객 300명 참석", "SNS 노출 100만회 달성", "런칭 제품 초도물량 완판"]
      }
    },
    {
      id: 5,
      title: "[GIVENCHY] 싱글즈 스튜디오 팝업 스토어 ",
      category: "마케팅 컨설팅",
      description: "고객들과 소통하며 재밌게 운영한 덕분에 더 많은 분들이 지방시 제품을 직접 체험하고 즐길 수 있었어요!",
      longDescription: (
        <>
          <p>카카오톡 플친 이벤트 🎁</p>
          <p>100% 당첨 스크래치 이벤트 🖍️</p>
          <br />
          <p>
            현장 분위기도 뜨겁고 반응도 정말 좋았던 이번 팝업✨
            <br /><br />
            덕분에 많은 고객분들을 만날 수 있었고 지방시만의 매력을 제대로 보여드릴 수 있었습니다🖤
          </p>
        </>
      ),
      image: "/assets/IMG/Project/Givenchy/singles/singles_1.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Givenchy/singles/singles_1.jpg",
        "/assets/IMG/Project/Givenchy/singles/singles_2.jpg",
        "/assets/IMG/Project/Givenchy/singles/singles_3.jpg",
        "/assets/IMG/Project/Givenchy/singles/singles_4.jpg",
        "/assets/IMG/Project/Givenchy/singles/singles_5.jpg",
        "/assets/IMG/Project/Givenchy/singles/singles_6.jpg",
      ],
      details: {
        client: "@givenchybeauty",
        date: "2024.04.19 - 2024.04.20",
        location: "서울시 성동구 연무장길 99",
        // duration: "1일",
        // team: "기획팀 3명, 운영팀 8명",
        // results: ["VIP/인플루언서 200명 참석", "SNS 노출 50만회 달성", "행사 제품 완판 달성"]
      }
    },
    {
      id: 6,
      title: "구찌 메이크업 행사",
      category: "행사 기획",
      description: "구찌 뷰티의 메이크업 라인 런칭 행사를 성공적으로 진행했습니다.",
      longDescription: "구찌 뷰티의 신규 메이크업 라인 런칭 행사를 기획하고 운영했습니다. 서울 강남구의 프리미엄 편집숍에서 VIP 고객 150명과 뷰티 인플루언서 30명을 초청하여 새로운 메이크업 컬렉션을 소개했습니다. 전문 메이크업 아티스트의 시연과 고객 체험존 운영으로 제품의 우수성을 직접 체험할 수 있도록 했으며, SNS 실시간 중계를 통해 온라인 마케팅 효과도 극대화했습니다.",
      image: "/assets/IMG/Project/Gucci/makeup_1.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Gucci/makeup_1.jpg",
        "/assets/IMG/Project/Gucci/makeup_2.png",
      ],
      details: {
        client: "구찌 뷰티 코리아",
        date: "2024.01",
        location: "서울 강남구",
        duration: "1개월",
        team: "기획팀 3명, 운영팀 6명",
        results: ["VIP/인플루언서 180명 참석", "SNS 노출 80만회 달성", "런칭 컬렉션 완판"]
      }
    },
    {
      id: 7,
      title: "[GUCCI BEAUTY] FLORA 시향회 🌸",
      category: "마케팅 컨설팅",
      description: `“향기로 기억되는 순간”`,
      longDescription: (
        <>
          {/* <p>카카오톡 플친 이벤트 🎁</p>
          <p>100% 당첨 스크래치 이벤트 🖍️</p> */}
          <br />
          <p>
            이번 구찌 뷰티 FLORA 시향회에서는 플로럴 무드 가득한 공간에서 고객분들이 직접 향을 경험하고 브랜드 스토리에 깊이 빠질 수 있도록 섬세한 운영을 진행했습니다.
            <br /><br />
            특히 전문적인 세일즈 교육을 받은 프로모터들이 현장에 배치되어 단순 응대를 넘어 고객과 깊이 있는 소통을 이끌어내고 사랑스러운 FLORA 향을 더욱 가까이에서 느낄 수 있도록 브랜드의 감성을 오감으로 경험하는 공간으로 기획·운영하였습니다.
            <br /><br />
            고객과 브랜드가 만나는 접점! 
            그 중심에 저희 테디 에이전시가 함께했습니다.
            <br /><br />
            곧 또 다른 시향회로 찾아뵐게요 🙌
          </p>
        </>
      ),
      image: "/assets/IMG/Project/Gucci/test/test_3.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Gucci/test/test_3.jpg",
        "/assets/IMG/Project/Gucci/test/test_1.jpg",
        "/assets/IMG/Project/Gucci/test/test_2.jpg",
        "/assets/IMG/Project/Gucci/test/test_4.jpg"
      ],
      details: {
        client: "@guccibeauty ",
        date: "2025.05.23 - 2025.06.01",
        location: "대전 신세계백화점 Art&Science",
        // duration: "2주",
        // team: "기획팀 4명, 운영팀 10명",
        // results: ["VIP/인플루언서 150명 참석", "SNS 노출 100만회 달성", "론칭 제품 사전예약 완판"]
      }
    },
    {
      id: 8,
      title: "[THE FACE SHOP] Coupang Mega Beauty Show",
      category: "행사 기획",
      description: "쿠팡 메가뷰티쇼✨",
      longDescription: (
        <>
          {/* <p>카카오톡 플친 이벤트 🎁</p>
          <p>100% 당첨 스크래치 이벤트 🖍️</p> */}
          <br />
          <p>
            저희가 운영한 더페이스샵 부스는 다양한 게임과 이벤트로 현장은 웃음과 환호로 가득! 🎯💚
            <br /><br />
            고객분들의 뜨거운 반응과 활발한 참여 덕분에
            브랜드 매력을 제대로 전한 인기 폭발 부스였어요🔥
          </p>
        </>
      ),
      image: "/assets/IMG/Project/Thefaceshop/thefaceshop_1.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Thefaceshop/thefaceshop_1.jpg",
        "/assets/IMG/Project/Thefaceshop/thefaceshop_2.jpg",
        "/assets/IMG/Project/Thefaceshop/thefaceshop_3.jpg",
      ],
      details: {
        client: "@thefaceshop.official",
        date: "2025.04.18 - 2025.04.20",
        location: "성수 XYZ",
        // duration: "2주",
        // team: "기획팀 3명, 운영팀 8명",
        // results: ["총 방문객 5,000명", "SNS 노출 30만회 달성", "신제품 매출 목표 150% 달성"]
      }
    },
    {
      id: 9,
      title: "버버리 메이크업 쇼",
      category: "행사 기획",
      description: "버버리 뷰티의 신제품 메이크업 쇼를 성공적으로 진행했습니다.",
      longDescription: "버버리 뷰티의 2024 S/S 메이크업 컬렉션 런칭을 위한 메이크업 쇼를 기획하고 운영했습니다. 서울 성수동의 트렌디한 공간에서 뷰티 인플루언서 100명과 패션 매거진 기자단 50명을 초청하여 새로운 시즌 메이크업 룩을 선보였습니다. 프로페셔널 메이크업 아티스트의 라이브 메이크업 쇼와 제품 체험존을 운영하여 버버리 뷰티의 프리미엄 이미지를 강화했습니다.",
      image: "/assets/IMG/Project/Burberry/makeup_1.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Burberry/makeup_1.jpg",
      ],
      details: {
        client: "버버리 뷰티 코리아",
        date: "2024.03",
        location: "서울 성수동",
        duration: "1일",
        team: "기획팀 5명, 운영팀 15명, 메이크업팀 8명",
        results: ["VIP/인플루언서 150명 참석", "SNS 노출 120만회 달성", "런칭 컬렉션 예약판매 완료"]
      }
    },
    {
      id: 10,
      title: "셀트리온 스킨큐어 팝업스토어",
      category: "행사 기획",
      description: "셀트리온 스킨큐어의 신제품 팝업스토어를 성공적으로 운영했습니다.",
      longDescription: "셀트리온 스킨큐어의 신제품 라인 출시를 기념한 팝업스토어를 기획하고 운영했습니다. 강남 파르나스몰에서 진행된 이번 행사는 피부 진단존, 제품 체험존, 포토존 등 다양한 체험 공간을 구성했습니다. 특히 전문 피부 상담사가 상주하여 개인별 맞춤 피부 케어 솔루션을 제공했으며, 3주간의 운영 기간 동안 총 15,000명의 방문객을 기록했습니다.",
      image: "/assets/IMG/Project/Celltrion/celltrion_1.png",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Celltrion/celltrion_1.png",
        "/assets/IMG/Project/Celltrion/celltrion_2.png",
      ],
      details: {
        client: "셀트리온 스킨큐어",
        date: "2024.05",
        location: "서울 파르나스몰",
        duration: "3주",
        team: "기획팀 5명, 운영팀 12명, 피부 상담사 4명",
        results: ["총 방문객 15,000명", "제품 판매액 5억원 달성", "멤버십 가입자 3,000명 확보"]
      }
    },
    {
      id: 11,
      title: "지방시 코스메틱 메이크업 쇼",
      category: "행사 기획",
      description: "지방시 코스메틱의 신제품 메이크업 쇼와 팝업 스토어를 성공적으로 진행했습니다.",
      longDescription: "지방시 코스메틱의 2024 S/S 메이크업 컬렉션 런칭을 위한 메이크업 쇼와 팝업 스토어를 기획하고 운영했습니다. 서울 가로수길의 프리미엄 공간에서 뷰티 인플루언서와 VIP 고객 200명을 초청하여 새로운 시즌 메이크업 룩을 선보였습니다. 프로페셔널 메이크업 아티스트의 라이브 메이크업 쇼와 제품 체험존, 포토존을 운영하여 지방시 코스메틱의 럭셔리 브랜드 이미지를 강화했습니다.",
      image: "/assets/IMG/Project/Givenchy/makeup_3.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Givenchy/makeup_3.jpg",
        "/assets/IMG/Project/Givenchy/makeup_2.png",
        "/assets/IMG/Project/Givenchy/makeup_1.jpg",
      ],
      details: {
        client: "지방시 코스메틱 코리아",
        date: "2024.03",
        location: "서울 가로수길",
        duration: "2주",
        team: "기획팀 6명, 운영팀 15명, 메이크업팀 10명",
        results: ["VIP/인플루언서 200명 참석", "SNS 노출 150만회 달성", "런칭 컬렉션 매출 목표 200% 달성"]
      }
    },
    {
      id: 12,
      title: "cnpx 코스메틱 신제품 런칭쇼",
      category: "마케팅 컨설팅", 
      description: "cnpx 코스메틱의 신제품 런칭쇼와 체험 행사를 성공적으로 진행했습니다.",
      longDescription: "cnpx 코스메틱의 2024 시그니처 라인 출시를 기념한 런칭쇼와 체험 행사를 기획하고 운영했습니다. 서울 성수동의 트렌디한 공간에서 뷰티 인플루언서와 VIP 고객 300명을 초청하여 신제품을 소개했습니다. 피부 진단존, 제품 체험존, 포토존을 운영하고 전문 피부 컨설턴트가 상주하여 개인별 맞춤 스킨케어 솔루션을 제공했습니다. 행사를 통해 브랜드 인지도 상승과 매출 증대에 크게 기여했습니다.",
      image: "/assets/IMG/Project/Cnpx/cnpx_1.png",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Cnpx/cnpx_1.png",
        "/assets/IMG/Project/Cnpx/cnpx_2.png",
      ],
      details: {
        client: "cnpx 코스메틱",
        date: "2024.04",
        location: "서울 성수동",
        duration: "2주",
        team: "기획팀 6명, 운영팀 15명, 피부 컨설턴트 8명",
        results: ["VIP/인플루언서 300명 참석", "SNS 노출 200만회 달성", "런칭 제품 사전예약 목표 150% 달성"]
      }
    },
    {
      id: 13,
      title: "sum 코스메틱 팝업스토어",
      category: "행사 기획",
      description: "sum 코스메틱의 럭셔리 안티에이징 라인 팝업스토어를 성공적으로 운영했습니다.",
      longDescription: "sum의 프리미엄 안티에이징 라인 '시크릿 프로그래밍 에센스' 출시를 기념한 팝업스토어를 기획하고 운영했습니다. 서울 청담동의 럭셔리 공간에서 VIP 고객과 뷰티 인플루언서 250명을 초청하여 신제품을 소개했습니다. 피부 분석존, 제품 체험존, 포토존을 운영하고, 전문 뷰티 컨설턴트가 1:1 맞춤 컨설팅을 제공하여 브랜드의 프리미엄 이미지를 강화했습니다. 행사를 통해 신제품 매출 목표를 크게 초과 달성했습니다.",
      image: "/assets/IMG/Project/Sum/sum_1.png",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Sum/sum_1.png",
        "/assets/IMG/Project/Sum/sum_2.png",
      ],
      details: {
        client: "sum37 코스메틱",
        date: "2024.02",
        location: "서울 청담동",
        duration: "2주",
        team: "기획팀 8명, 운영팀 15명, 뷰티 컨설턴트 6명",
        results: ["VIP/인플루언서 250명 참석", "SNS 노출 180만회 달성", "신제품 매출 목표 180% 달성"]
      }
    },
    {
      id: 14,
      title: "지프 로드 행사",
      category: "마케팅 컨설팅",
      description: "지프 브랜드의 오프로드 체험 행사를 성공적으로 진행했습니다.",
      longDescription: "지프 브랜드의 오프로드 성능을 체험할 수 있는 특별 행사를 기획하고 운영했습니다. 강원도 홍천의 전문 오프로드 코스에서 자동차 매체 기자단과 VIP 고객 100명을 초청하여 지프의 4x4 시스템과 주행 성능을 직접 체험하도록 했습니다. 전문 드라이버의 시연과 함께 참가자들이 직접 운전할 수 있는 체험 코스, 차량 전시존, 포토존을 운영했습니다. 행사를 통해 지프 브랜드의 핵심 가치인 모험과 자유를 효과적으로 전달했습니다.",
      image: "/assets/IMG/Project/Jeep/Road/road_1.webp",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Jeep/Road/road_1.webp",
        "/assets/IMG/Project/Jeep/Road/road_2.jpg",
      ],
      details: {
        client: "지프 코리아",
        date: "2024.03",
        location: "강원도 홍천",
        duration: "3일",
        team: "기획팀 5명, 운영팀 10명, 전문 드라이버 4명",
        results: ["자동차 매체/VIP 100명 참석", "언론 보도 50건 달성", "시승 예약 목표 150% 달성"]
      }
    },
    {
      id: 15,
      title: "패션 위크 모델 캐스팅",
      category: "모델 에이전시",
      description: "서울 패션위크에 참가하는 브랜드들의 모델 캐스팅을 총괄했습니다.",
      longDescription: "서울 패션위크 2024에 참가하는 15개 브랜드의 패션쇼 모델 캐스팅을 총괄했습니다. 각 브랜드의 컨셉과 디자인에 맞는 모델 80명을 선별하고, 쇼 당일까지의 모든 스케줄 관리와 현장 매니지먼트를 담당했습니다. 모든 브랜드로부터 높은 만족도를 받았습니다.",
      image: "/assets/IMG/Project/Givenchy/makeup_1.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Givenchy/makeup_1.jpg",
        "/assets/IMG/Project/Givenchy/makeup_2.png",
      ],
      details: {
        client: "서울 패션위크 2024",
        date: "2024.03",
        location: "서울 DDP",
        duration: "1개월",
        team: "캐스팅팀 6명, 매니지먼트팀 10명",
        results: ["모델 80명 선별", "15개 브랜드 쇼 진행", "100% 고객 만족도"]
      }
    },
    {
      id: 16,
      title: "광고 촬영 모델 매니지먼트",
      category: "모델 에이전시",
      description: "TV 광고 및 프린트 광고에 필요한 모델들을 제공하고 매니지먼트했습니다.",
      longDescription: "대형 화장품 브랜드 'COSMETIC'의 TV 광고 및 프린트 광고 촬영을 위한 모델 캐스팅을 담당했습니다. 브랜드의 이미지에 맞는 모델 20명을 선별하고, 3개월간의 촬영 일정을 관리했습니다. 광고 방영 후 브랜드 매출 150% 증가의 성과를 달성했습니다.",
      image: "/assets/IMG/Project/Gucci/test/test_1.jpg",
      height: "h-[30rem]",
      images: [
        "/assets/IMG/Project/Gucci/test/test_1.jpg",
        "/assets/IMG/Project/Gucci/test/test_2.jpg",
      ],
      details: {
        client: "COSMETIC 브랜드",
        date: "2024.01-03",
        location: "서울 스튜디오",
        duration: "3개월",
        team: "캐스팅팀 3명, 매니지먼트팀 4명",
        results: ["모델 20명 선별", "TV/프린트 광고 촬영", "브랜드 매출 150% 증가"]
      }
    }
  ]

  const categories = ["전체", "행사 기획", "모델 에이전시", "마케팅 컨설팅"]

  const customStyles = `
    .swiper-horizontal {
      padding-bottom: 50px;
    }
  `

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setVisibleProjects(8)
    setIsExpanded(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    setSelectedImage(null)
  }

  const openImageZoom = (image: string) => {
    console.log('Opening image zoom:', image)
    setSelectedImage(image)
  }

  const closeImageZoom = () => {
    console.log('Closing image zoom')
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedProject || !selectedImage) return
    
    const currentIndex = selectedProject.images.indexOf(selectedImage)
    let newIndex: number
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? selectedProject.images.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === selectedProject.images.length - 1 ? 0 : currentIndex + 1
    }
    
    setSelectedImage(selectedProject.images[newIndex])
  }

  const handleLoadMore = () => {
    if (isExpanded) {
      setVisibleProjects(8)
      setIsExpanded(false)
    } else {
      setVisibleProjects(filteredProjects.length)
      setIsExpanded(true)
    }
  }

  const filteredProjects = selectedCategory === "전체" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const displayedProjects = filteredProjects.slice(0, visibleProjects)

  return (
    <div className="pt-16 lg:pt-20">
      <style>{customStyles}</style>
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="portfolio-title font-bold text-teddy-text mb-6">
              포트폴리오
            </h1>
            <p className="portfolio-subtitle text-teddy-muted max-w-3xl mx-auto leading-relaxed">
              TEDDY가 함께한 다양한 프로젝트들을 확인해보세요.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category)}
                className={`portfolio-category rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                    : 'bg-teddy-secondary hover:bg-orange-500 hover:text-white text-teddy-text'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Instagram-style Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {displayedProjects.map((project, index) => {
              // 기존 6개 아이템은 즉시 표시, 추가 아이템만 애니메이션
              const isNewItem = index >= 8 && isExpanded
              const animationDelay = isNewItem ? (index - 8) * 0.1 : 0
              
              return (
                <motion.div
                  key={project.id}
                  initial={isNewItem ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: animationDelay
                  }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openModal(project)}
                >
                  <div className={`relative ${project.height} overflow-hidden rounded-lg`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/60"></div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-4 right-4 text-right">
                      <h3 className="text-white font-bold portfolio-grid-title leading-tight drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/80 portfolio-grid-category mt-1">
                        {project.category}
                      </p>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <h4 className="text-white font-bold portfolio-grid-title mb-2">
                            {project.title}
                          </h4>
                          <p className="text-white/90 portfolio-grid-category leading-relaxed">
                            {project.description}
                          </p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full portfolio-grid-category font-medium">
                              {project.category}
                            </span>
                            <span className="text-white/80 portfolio-grid-category">
                              자세히 보기 →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Load More Button */}
          {filteredProjects.length > 8 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16"
            >
              <button
                onClick={handleLoadMore}
                className="group relative px-8 py-4 rounded-full text-orange-600 hover:text-orange-700 font-bold text-lg transition-all duration-300 hover:bg-primary-50"
              >
                <span className="flex items-center justify-center gap-2">
                  {isExpanded ? (
                    <>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      접기
                    </>
                  ) : (
                    <>
                      더 보기
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </motion.div>
          )}

          {/* Featured Project Slider */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="portfolio-title font-bold text-teddy-text text-center mb-12">
              주요 프로젝트
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="portfolio-swiper"
            >
              {projects.slice(0, 6).map((project, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="card overflow-hidden cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full portfolio-grid-category font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="portfolio-grid-title font-bold text-teddy-text mb-2">
                        {project.title}
                      </h3>
                      <p className="text-teddy-muted portfolio-grid-category leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div> */}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-96 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Header Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full portfolio-grid-category font-medium mb-3 inline-block">
                    {selectedProject.category}
                  </span>
                  <h2 className="portfolio-modal-title font-bold text-white mb-2 drop-shadow-lg">
                    {selectedProject.title}
                  </h2>
                  <p className="text-white/90 portfolio-modal-subtitle leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 portfolio-scrollable">
                {/* Image Gallery */}
                <div className="mb-8">
                  <h3 className="portfolio-gallery-title font-bold text-gray-900 mb-6">프로젝트 갤러리</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.images.map((image: string, index: number) => (
                      <div 
                        key={index} 
                        className="relative overflow-hidden rounded-xl cursor-pointer group"
                        onClick={(e) => {
                          e.stopPropagation()
                          openImageZoom(image)
                        }}
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.title} ${index + 1}`}
                          className="w-full h-32 object-cover transition-all duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-8">
                  <div>
                    <h3 className="portfolio-details-title font-bold text-gray-900 mb-4">프로젝트 설명</h3>
                    <p className="text-gray-600 leading-relaxed portfolio-details-text">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="portfolio-details-title font-bold text-gray-900 mb-4">Key Information</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                        {selectedProject.details.client}
                      </span>
                      <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                        {selectedProject.details.date}
                      </span>
                      <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                        {selectedProject.details.location}
                      </span>
                      {/* <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                        {selectedProject.details.duration}
                      </span> */}
                      {/* <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                        {selectedProject.details.team}
                      </span> */}
                    </div>
                  </div>

                  {/* <div>
                    <h3 className="portfolio-details-title font-bold text-gray-900 mb-4">주요 성과</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.details.results.map((result: string, index: number) => (
                        <span key={index} className="bg-green-50 text-green-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[60] flex items-center justify-center p-4"
            onClick={closeImageZoom}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Navigation Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Navigation Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <img
                src={selectedImage}
                alt="Fullscreen"
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeImageZoom}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              {selectedProject && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedProject.images.indexOf(selectedImage) + 1} / {selectedProject.images.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Portfolio 