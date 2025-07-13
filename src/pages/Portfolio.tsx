import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useState, useEffect } from 'react'
import { scrollToTop } from '../utils/scrollToTop'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
      title: "패션 브랜드 런칭 이벤트",
      category: "행사 기획",
      description: "신규 패션 브랜드의 런칭 이벤트를 기획하고 실행했습니다.",
      longDescription: "신규 패션 브랜드 'STYLE'의 런칭 이벤트를 총괄 기획했습니다. 200명 규모의 VIP 고객을 대상으로 한 런칭 파티를 성공적으로 진행했으며, 브랜드의 핵심 가치와 컨셉을 효과적으로 전달했습니다. 이벤트 당일 매출 목표 150% 달성 및 브랜드 인지도 300% 향상을 기록했습니다.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "STYLE 브랜드",
        date: "2024.03",
        location: "서울 강남구",
        duration: "3개월",
        team: "기획팀 3명, 운영팀 5명",
        results: ["매출 목표 150% 달성", "브랜드 인지도 300% 향상", "VIP 고객 200명 참석"]
      }
    },
    {
      id: 2,
      title: "뷰티 브랜드 팝업스토어",
      category: "행사 기획",
      description: "뷰티 브랜드의 임시 매장을 기획하고 운영했습니다.",
      longDescription: "뷰티 브랜드 'BEAUTY'의 팝업스토어를 2개월간 운영했습니다. 강남역 인근 100평 규모의 공간을 활용하여 브랜드의 핵심 제품들을 전시하고 체험할 수 있는 공간을 구성했습니다. 총 방문객 5,000명, 매출 2억원 달성의 성과를 거두었습니다.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "BEAUTY 브랜드",
        date: "2024.01-02",
        location: "서울 강남역",
        duration: "2개월",
        team: "기획팀 2명, 운영팀 8명",
        results: ["총 방문객 5,000명", "매출 2억원 달성", "브랜드 체험 공간 구성"]
      }
    },
    {
      id: 3,
      title: "패션 쇼 모델 캐스팅",
      category: "모델 에이전시",
      description: "대형 패션쇼에 필요한 모델들을 선별하고 매니지먼트했습니다.",
      longDescription: "서울 패션위크 2024에 참가하는 10개 브랜드의 패션쇼 모델 캐스팅을 총괄했습니다. 각 브랜드의 컨셉과 디자인에 맞는 모델 50명을 선별하고, 쇼 당일까지의 모든 스케줄 관리와 현장 매니지먼트를 담당했습니다. 모든 브랜드로부터 높은 만족도를 받았습니다.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "서울 패션위크 2024",
        date: "2024.03",
        location: "서울 DDP",
        duration: "1개월",
        team: "캐스팅팀 4명, 매니지먼트팀 6명",
        results: ["모델 50명 선별", "10개 브랜드 쇼 진행", "100% 고객 만족도"]
      }
    },
    {
      id: 4,
      title: "브랜드 전시회",
      category: "행사 기획",
      description: "브랜드의 새로운 컬렉션을 소개하는 전시회를 기획했습니다.",
      longDescription: "럭셔리 브랜드 'LUXE'의 2024 S/S 컬렉션 전시회를 기획했습니다. 코엑스몰 내 200평 규모의 전시 공간을 활용하여 브랜드의 새로운 컬렉션을 체험할 수 있는 인터랙티브 전시회를 구성했습니다. 2주간 운영하여 총 15,000명의 방문객을 기록했습니다.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop"
      ],
      details: {
        client: "LUXE 브랜드",
        date: "2024.02",
        location: "서울 코엑스몰",
        duration: "2주",
        team: "기획팀 4명, 디자인팀 3명, 운영팀 6명",
        results: ["총 방문객 15,000명", "매출 5억원 달성", "브랜드 인지도 200% 향상"]
      }
    },
    {
      id: 5,
      title: "광고 촬영 모델",
      category: "모델 에이전시",
      description: "TV 광고 및 프린트 광고에 필요한 모델들을 제공했습니다.",
      longDescription: "대형 화장품 브랜드 'COSMETIC'의 TV 광고 및 프린트 광고 촬영을 위한 모델 캐스팅을 담당했습니다. 브랜드의 이미지에 맞는 모델 20명을 선별하고, 3개월간의 촬영 일정을 관리했습니다. 광고 방영 후 브랜드 매출 150% 증가의 성과를 달성했습니다.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "COSMETIC 브랜드",
        date: "2024.01-03",
        location: "서울 스튜디오",
        duration: "3개월",
        team: "캐스팅팀 3명, 매니지먼트팀 4명",
        results: ["모델 20명 선별", "TV/프린트 광고 촬영", "브랜드 매출 150% 증가"]
      }
    },
    {
      id: 6,
      title: "라이프스타일 브랜드 캠페인",
      category: "마케팅 컨설팅",
      description: "라이프스타일 브랜드의 종합 마케팅 캠페인을 기획했습니다.",
      longDescription: "라이프스타일 브랜드 'LIFE'의 종합 마케팅 캠페인을 6개월간 기획하고 실행했습니다. 온라인/오프라인 통합 마케팅 전략을 수립하고, SNS 마케팅, 이벤트 기획, 모델 캐스팅까지 전 과정을 담당했습니다. 캠페인 기간 동안 브랜드 인지도 400% 향상과 매출 300% 증가를 달성했습니다.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "LIFE 브랜드",
        date: "2023.07-12",
        location: "전국",
        duration: "6개월",
        team: "마케팅팀 5명, 기획팀 3명, 운영팀 8명",
        results: ["브랜드 인지도 400% 향상", "매출 300% 증가", "SNS 팔로워 200% 증가"]
      }
    },
    {
      id: 7,
      title: "럭셔리 호텔 런칭 이벤트",
      category: "행사 기획",
      description: "5성급 호텔의 런칭 이벤트를 기획하고 실행했습니다.",
      longDescription: "서울 중심가에 위치한 5성급 호텔 'GRAND'의 런칭 이벤트를 총괄 기획했습니다. VIP 고객 300명을 초대하여 럭셔리한 런칭 파티를 성공적으로 진행했으며, 호텔의 브랜드 가치와 서비스를 효과적으로 전달했습니다. 런칭 이후 예약률 200% 증가를 달성했습니다.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "GRAND 호텔",
        date: "2024.04",
        location: "서울 중구",
        duration: "4개월",
        team: "기획팀 5명, 운영팀 10명",
        results: ["VIP 고객 300명 참석", "예약률 200% 증가", "브랜드 인지도 400% 향상"]
      }
    },
    {
      id: 8,
      title: "스포츠 브랜드 캠페인",
      category: "마케팅 컨설팅",
      description: "스포츠 브랜드의 종합 마케팅 캠페인을 기획했습니다.",
      longDescription: "글로벌 스포츠 브랜드 'SPORT'의 한국 시장 진출 캠페인을 8개월간 기획하고 실행했습니다. 온라인/오프라인 통합 마케팅 전략을 수립하고, 스포츠 이벤트 기획, 모델 캐스팅까지 전 과정을 담당했습니다. 캠페인 기간 동안 브랜드 인지도 500% 향상과 매출 400% 증가를 달성했습니다.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "SPORT 브랜드",
        date: "2023.09-2024.04",
        location: "전국",
        duration: "8개월",
        team: "마케팅팀 6명, 기획팀 4명, 운영팀 12명",
        results: ["브랜드 인지도 500% 향상", "매출 400% 증가", "스포츠 이벤트 20회 진행"]
      }
    },
    {
      id: 9,
      title: "테크 브랜드 런칭",
      category: "행사 기획",
      description: "테크 브랜드의 신제품 런칭 이벤트를 기획했습니다.",
      longDescription: "글로벌 테크 브랜드 'TECH'의 신제품 런칭 이벤트를 총괄 기획했습니다. 코엑스몰 내 300평 규모의 전시 공간을 활용하여 신제품을 체험할 수 있는 인터랙티브 전시회를 구성했습니다. 3주간 운영하여 총 25,000명의 방문객을 기록했습니다.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop"
      ],
      details: {
        client: "TECH 브랜드",
        date: "2024.05",
        location: "서울 코엑스몰",
        duration: "3주",
        team: "기획팀 6명, 디자인팀 4명, 운영팀 15명",
        results: ["총 방문객 25,000명", "매출 8억원 달성", "브랜드 인지도 300% 향상"]
      }
    },
    {
      id: 10,
      title: "패션 매거진 촬영",
      category: "모델 에이전시",
      description: "패션 매거진 촬영을 위한 모델들을 제공했습니다.",
      longDescription: "국내 최고의 패션 매거진 'VOGUE KOREA'의 2024 S/S 컬렉션 촬영을 위한 모델 캐스팅을 담당했습니다. 브랜드의 컨셉에 맞는 모델 30명을 선별하고, 2개월간의 촬영 일정을 관리했습니다. 매거진 발행 후 브랜드 매출 200% 증가의 성과를 달성했습니다.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "VOGUE KOREA",
        date: "2024.01-02",
        location: "서울 스튜디오",
        duration: "2개월",
        team: "캐스팅팀 4명, 매니지먼트팀 6명",
        results: ["모델 30명 선별", "매거진 촬영 완료", "브랜드 매출 200% 증가"]
      }
    },
    {
      id: 11,
      title: "뷰티 컨퍼런스",
      category: "행사 기획",
      description: "뷰티 업계 최대 컨퍼런스를 기획하고 실행했습니다.",
      longDescription: "뷰티 업계 최대 규모의 컨퍼런스 'BEAUTY CONFERENCE 2024'를 총괄 기획했습니다. 500명 규모의 업계 전문가들을 초대하여 트렌드 세미나, 네트워킹 파티, 전시회를 성공적으로 진행했습니다. 컨퍼런스 이후 업계 협력 프로젝트 50건 이상을 성사시켰습니다.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "BEAUTY CONFERENCE",
        date: "2024.06",
        location: "서울 그랜드하얏트",
        duration: "3일",
        team: "기획팀 8명, 운영팀 20명",
        results: ["업계 전문가 500명 참석", "협력 프로젝트 50건 성사", "업계 인지도 300% 향상"]
      }
    },
    {
      id: 12,
      title: "패션 위크 모델",
      category: "모델 에이전시",
      description: "서울 패션위크의 모델 캐스팅을 총괄했습니다.",
      longDescription: "서울 패션위크 2024에 참가하는 15개 브랜드의 패션쇼 모델 캐스팅을 총괄했습니다. 각 브랜드의 컨셉과 디자인에 맞는 모델 80명을 선별하고, 쇼 당일까지의 모든 스케줄 관리와 현장 매니지먼트를 담당했습니다. 모든 브랜드로부터 높은 만족도를 받았습니다.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      height: "h-[30rem]",
      images: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      details: {
        client: "서울 패션위크 2024",
        date: "2024.03",
        location: "서울 DDP",
        duration: "1개월",
        team: "캐스팅팀 6명, 매니지먼트팀 10명",
        results: ["모델 80명 선별", "15개 브랜드 쇼 진행", "100% 고객 만족도"]
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
      setVisibleProjects(6)
      setIsExpanded(false)
    } else {
      setVisibleProjects(projects.length)
      setIsExpanded(true)
    }
  }

  const displayedProjects = projects.slice(0, visibleProjects)

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
                className="portfolio-category rounded-full bg-teddy-secondary hover:bg-primary-600 hover:text-white text-teddy-text font-medium transition-colors duration-200"
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
              const isNewItem = index >= 6 && isExpanded
              const animationDelay = isNewItem ? (index - 6) * 0.1 : 0
              
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
                          <h3 className="text-white font-bold portfolio-grid-title mb-2">
                            {project.title}
                          </h3>
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
          {projects.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16"
            >
              <button
                onClick={handleLoadMore}
                className="group relative px-8 py-4 rounded-full text-primary-600 hover:text-primary-700 font-bold text-lg transition-all duration-300 hover:bg-primary-50"
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
          <motion.div
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
          </motion.div>
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
                    <h3 className="portfolio-details-title font-bold text-gray-900 mb-4">프로젝트 정보</h3>
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
                      <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                        {selectedProject.details.duration}
                      </span>
                      <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                        {selectedProject.details.team}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="portfolio-details-title font-bold text-gray-900 mb-4">주요 성과</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.details.results.map((result: string, index: number) => (
                        <span key={index} className="bg-green-50 text-green-700 px-4 py-2 rounded-full portfolio-grid-category font-medium">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
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