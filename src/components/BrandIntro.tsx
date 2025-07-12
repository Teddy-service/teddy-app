import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const BrandIntro = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const features = [
    {
      icon: "🎯",
      title: "전문성",
      description: "모델 & 행사 분야의 풍부한 경험과 전문 지식을 바탕으로 고객의 니즈에 최적화된 솔루션을 제공합니다."
    },
    {
      icon: "🤝",
      title: "신뢰성",
      description: "고객과의 장기적인 파트너십을 중시하며, 약속한 결과를 반드시 달성하는 신뢰할 수 있는 파트너입니다."
    },
    {
      icon: "💡",
      title: "창의성",
      description: "트렌드를 선도하는 창의적인 아이디어와 혁신적인 접근 방식으로 브랜드의 가치를 극대화합니다."
    },
    {
      icon: "⚡",
      title: "효율성",
      description: "체계적인 프로젝트 관리와 효율적인 리소스 활용으로 최고의 결과를 최단 시간에 제공합니다."
    }
  ]

  const stats = [
    { value: 500, label: "누적 프로젝트 수", suffix: "+" },
    { value: 2000, label: "누적 파견 모델 수", suffix: "+" },
    { value: 150, label: "누적 브랜드 수", suffix: "+" },
    { value: 10, label: "업계 경험", suffix: "년+" },
    { value: 95, label: "계약 유지율", suffix: "%" },
    { value: 98, label: "고객 만족도", suffix: "%" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("animate")
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [controls])

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teddy-text mb-6">
            TEDDY의 <span className="text-gradient">특별함</span>
          </h2>
          <p className="text-xl text-teddy-muted max-w-3xl mx-auto leading-relaxed">
            단순한 서비스 제공을 넘어 고객의 브랜드와 함께 성장하는 진정한 파트너십을 추구합니다.
            TEDDY만의 특별한 가치를 경험해보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group w-full h-full"
            >
              {/* Glass Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-200/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-300/50 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8 text-center w-full h-full flex flex-col justify-center">
                <motion.div 
                  className="text-6xl mb-6 inline-block"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-teddy-text mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-teddy-muted leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// 숫자 카운터 컴포넌트
const StatCounter = ({ value, label, suffix, index, isVisible }: {
  value: number
  label: string
  suffix: string
  index: number
  isVisible: boolean
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000 // 2초
        const steps = 60 // 60프레임
        const increment = value / steps
        let current = 0

        const interval = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(interval)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(interval)
      }, index * 200 + 500) // 각 카운터마다 0.2초씩 지연

      return () => clearTimeout(timer)
    }
  }, [isVisible, value, index])

  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-gradient mb-2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
      >
        {count}
        {suffix}
      </motion.div>
      <motion.div
        className="text-teddy-muted"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 1.5 }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}

export default BrandIntro 