import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const services = [
    {
      title: "BTL Marketing",
      description: "Below The Line 마케팅으로 타겟 고객에게 직접적인 메시지를 전달하는 효과적인 마케팅 전략을 제공합니다.",
      icon: "🎯",
      features: ["타겟 마케팅", "직접 마케팅", "이벤트 마케팅", "퍼포먼스 마케팅"],
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Sales Promotion",
      description: "매출 증대를 위한 다양한 프로모션 전략과 실행을 통해 브랜드의 성장을 가속화합니다.",
      icon: "📈",
      features: ["프로모션 기획", "할인 전략", "이벤트 기획", "성과 분석"],
      backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      title: "Outsourcing",
      description: "전문적인 외주 서비스로 고객의 비즈니스 효율성을 극대화하고 핵심 업무에 집중할 수 있도록 지원합니다.",
      icon: "🤝",
      features: ["업무 외주", "전문 인력", "품질 관리", "비용 최적화"],
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
    },
    {
      title: "Design",
      description: "마케팅 컨설팅을 위한 창의적이고 효과적인 디자인 솔루션으로 브랜드의 시각적 가치를 극대화합니다.",
      icon: "🎨",
      features: ["브랜드 디자인", "마케팅 디자인", "UI/UX 디자인", "콘텐츠 디자인"],
      backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-teddy-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teddy-text mb-6">
            우리의 <span className="text-gradient">서비스</span>
          </h2>
          <p className="text-xl text-teddy-muted max-w-3xl mx-auto leading-relaxed">
            BTL 마케팅부터 디자인까지, TEDDY는 고객의 브랜드 성장을 위한
            모든 서비스를 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group w-full h-full min-h-[400px]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
              </div>
              
              {/* Glass Effect Background */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px] rounded-2xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
              
              {/* Text Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-primary-200/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-300/70 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative p-6 text-center w-full h-full flex flex-col justify-center">
                <motion.div 
                  className="text-5xl mb-4 inline-block drop-shadow-lg"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors duration-300 drop-shadow-lg font-semibold underline decoration-2 underline-offset-8">
                  {service.title}
                </h3>
                <p className="text-white text-sm mb-4 leading-relaxed drop-shadow-md font-medium">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white text-sm font-medium drop-shadow-md">
                      <svg className="w-4 h-4 text-primary-300 mr-2 flex-shrink-0 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block bg-white/30 hover:bg-white/40 text-white px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/40 hover:border-white/60 mt-auto font-semibold drop-shadow-md"
                >
                  자세히 보기
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-teddy-muted mb-6">
            특별한 프로젝트가 있으신가요? TEDDY와 함께 이야기해보세요.
          </p>
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            무료 상담 신청
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 