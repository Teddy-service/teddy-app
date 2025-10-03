import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useEffect } from 'react'
import { scrollToTop } from '../utils/scrollToTop'
import 'swiper/css'

const Client = () => {
  useEffect(() => {
    scrollToTop()
  }, [])

  const clients = [
    { name: "BURBERRY", logo: "/assets/IMG/Clients/Burberry.png", category: "패션", size: "w-30 h-30" },
    { name: "GUCCI", logo: "/assets/IMG/Clients/gucci.png", category: "푸드", size: "w-30 h-30" },
    { name: "GICENCHY", logo: "/assets/IMG/Clients/gicenchy.jpg", category: "패션", size: "w-30 h-20" },
    { name: "JEEP", logo: "/assets/IMG/Clients/jeep.png", category: "스포츠", size: "w-20 h-20" },
    { name: "SUM", logo: "/assets/IMG/Clients/sum.jpeg", category: "스타트업", size: "w-30 h-30" },
    { name: "CNPRX", logo: "/assets/IMG/Clients/cnprx.png", category: "라이프스타일", size: "w-30 h-30" },
    { name: "CELLCURE", logo: "/assets/IMG/Clients/cellcure.png", category: "뷰티", size: "w-30 h-30" },
    { name: "FRESHIAN", logo: "/assets/IMG/Clients/freshian.png", category: "테크", size: "w-25 h-20" },
    { name: "THE FACESHOP", logo: "/assets/IMG/Clients/theFaceShop.png", category: "럭셔리", size: "w-30 h-30" },
  ]

  const testimonials = [
    {
      name: "김민수",
      position: "마케팅 디렉터",
      company: "Fashion Brand A",
      content: "TEDDY와의 협업은 정말 만족스러웠습니다. 전문성과 창의성을 모두 갖춘 팀이었고, 우리 브랜드의 가치를 잘 이해하고 있었습니다.",
      rating: 5
    },
    {
      name: "이지영",
      position: "브랜드 매니저",
      company: "Beauty Brand B",
      content: "처음부터 끝까지 체계적으로 진행해주셔서 정말 감사했습니다. 결과물도 기대 이상이었고, 앞으로도 계속 협업하고 싶습니다.",
      rating: 5
    },
    {
      name: "박준호",
      position: "CEO",
      company: "Lifestyle Brand C",
      content: "TEDDY의 전문성과 신뢰성에 감동받았습니다. 우리 브랜드의 성장에 큰 도움이 되었고, 진정한 파트너십을 경험했습니다.",
      rating: 5
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* <h1 className="client-title font-bold text-teddy-text mb-6">
              클라이언트
            </h1> */}
            <p className="client-subtitle text-teddy-muted max-w-3xl mx-auto leading-relaxed">
              TEDDY와 함께 성장한 다양한 브랜드들을 소개합니다.
            </p>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="client-section-title font-bold text-teddy-text text-center mb-12">
              클라이언트 후기
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="client-testimonial-content text-teddy-muted leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="client-testimonial-name font-semibold text-teddy-text">
                      {testimonial.name}
                    </div>
                    <div className="client-testimonial-position text-teddy-muted">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="client-section-title font-bold text-teddy-text text-center mb-12">
              협력 브랜드
            </h2>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="client-swiper"
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-24 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`${client.size} object-contain`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Client Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            {/* <h2 className="client-section-title font-bold text-teddy-text text-center mb-12">
              클라이언트 소개
            </h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`${client.size} object-contain`}
                    />
                  </div>
                  <h3 className="client-card-title font-bold text-teddy-text mb-2 opacity-30">
                    {client.name}
                  </h3>
                  {/* <span className="inline-block bg-teddy-secondary text-teddy-muted px-3 py-1 rounded-full client-card-category">
                    {client.category}
                  </span> */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Client 