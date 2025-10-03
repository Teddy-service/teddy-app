import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  // Swiper pagination 스타일 커스터마이징
  const customStyles = `
    .portfolio-swiper {
      height: 400px !important;
    }
    
    .portfolio-swiper .swiper-pagination {
      bottom: 0 !important;
      margin-top: 2rem;
    }
    
    .portfolio-swiper .swiper-pagination-bullet {
      background: #f97316 !important;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    
    .portfolio-swiper .swiper-pagination-bullet-active {
      opacity: 1;
      transform: scale(1.2);
    }
    
    .portfolio-swiper .swiper-button-next,
    .portfolio-swiper .swiper-button-prev {
      color: #f97316 !important;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      backdrop-filter: blur(10px);
    }
    
    .portfolio-swiper .swiper-button-next::after,
    .portfolio-swiper .swiper-button-prev::after {
      font-size: 14px !important;
      font-weight: bold;
    }
    
    .portfolio-swiper .swiper-button-next:hover,
    .portfolio-swiper .swiper-button-prev:hover {
      background: rgba(255, 255, 255, 1);
      transform: scale(1.1);
    }
  `

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const featuredProjects = [
    {
      id: 1,
      title: "지프 시승행사",
      category: "행사 기획",
      description: "지프 차량의 시승행사를 기획하고 성공적으로 진행했습니다.",
      image: "/assets/IMG/Project/Jeep/jeep_1.jpg",
    },
    {
      id: 2,
      title: "[GIVENCHY] 신세계백화점 강남점 팝업 스토어",
      category: "행사 기획",
      description: (
        <>
          <p>✔️ 포토 인화 이벤트</p>
          <p>✔️ 100% 당첨 스크래치 카드 이벤트</p>
          <br />
          <p>신세계백화점 강남점에서 진행된 지방시 젠틀맨 소사이어티 팝업을 성공적으로 마무리했습니다.</p>
        </>
      ),
      image: "/assets/IMG/Project/Givenchy/givenchy_2.PNG",
    },
    {
      id: 3,
      title: "[FRESHIAN] Kurly Beauty Festa",
      category: "행사 기획",
      description: "프레시안 컬리뷰티페스타 현장을 더욱 빛낼 수 있도록 행사 경험이 많은 프로모터들로 구성하여 페스타 분위기에 걸맞은 생동감 있는 운영을 선보였습니다.",
      image: "/assets/IMG/Project/Freshian/freshian_2.jpg",
    },
    {
      id: 4,
      title: "[GIVENCHY] 싱글즈 스튜디오 팝업 스토어 ",
      category: "행사 기획",
      description: (
        <>
          <p>카카오톡 플친 이벤트 🎁</p>
          <p>100% 당첨 스크래치 이벤트 🖍️</p>
          <br />
          <p>고객들과 소통하며 재밌게 운영한 덕분에 더 많은 분들이 지방시 제품을 직접 체험하고 즐길 수 있었어요!</p>
        </>
      ),
      image: "/assets/IMG/Project/Givenchy/singles/singles_1.jpg",
    },
    {
      id: 5,
      title: "메이크업 행사",
      category: "행사 기획",
      description: "메이크업 브랜드의 신제품 런칭 및 체험 행사를 성공적으로 진행했습니다.",
      image: "/assets/IMG/Project/Gucci/makeup_1.jpg",
    },
    {
      id: 6,
      title: "[GUCCI BEAUTY] FLORA 시향회",
      category: "행사 기획",
      description: (
        <>
          <p>“향기로 기억되는 순간” 🌸</p>
          <br />
          <p>이번 구찌 뷰티 FLORA 시향회에서는 플로럴 무드 가득한 공간에서 고객분들이 직접 향을 경험하고 브랜드 스토리에 깊이 빠질 수 있도록 섬세한 운영을 진행했습니다.</p>
        </>
      ),
      image: "/assets/IMG/Project/Gucci/test/test_3.jpg",
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-teddy-primary via-white to-teddy-secondary">
      <style>{customStyles}</style>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="portfolio-title font-bold text-teddy-text mb-6">
            주요 프로젝트
          </h2>
          <p className="portfolio-subtitle text-teddy-muted max-w-3xl mx-auto leading-relaxed">
            TEDDY가 함께한 성공적인 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
            {featuredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="card overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300"
                  onClick={() => openModal(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[rgba(165,124,69,1)] text-white px-3 py-1 rounded-full portfolio-grid-category font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 
                      className="portfolio-grid-title font-bold text-teddy-text mb-2 group-hover:text-orange-600 transition-colors duration-300"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%'
                      }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-teddy-muted portfolio-grid-category mb-4"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%',
                        maxHeight: '20px'
                      }}
                    >
                      {project.description}
                    </p>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 group-hover:translate-x-1"
                    >
                      자세히 보기
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-[rgba(165,124,69,1)] hover:bg-[rgba(165,124,69,0.8)] text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            전체 포트폴리오 보기
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>

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
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
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
                  {/* <p className="text-white/90 portfolio-modal-subtitle leading-relaxed">
                    {selectedProject.description}
                  </p> */}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 max-h-96 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <h3 className="portfolio-details-title font-bold text-gray-900 mb-4">프로젝트 상세 정보</h3>
                    <p className="text-gray-600 leading-relaxed portfolio-details-text">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[rgba(165,124,69,1)] hover:bg-[rgba(165,124,69,0.8)] text-white font-medium rounded-lg transition-all duration-300"
                    >
                      전체 포트폴리오에서 더 자세히 보기
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeaturedProjects
