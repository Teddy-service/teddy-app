import { motion } from 'framer-motion'

const About = () => {
  const newProcessSteps = [
    {
      step: 1,
      title: '계약 체결',
      description: '프로모션 의뢰 접수 & 내용 및 운영 조건 검토 & 실무진 미팅 진행 & 계약 체결',
      icon: '📋',
      color: 'from-gray-900 to-gray-800'
    },
    {
      step: 2,
      title: '브랜드 분석',
      description: '브랜드 및 행사 내용 분석 & 인력 섭외 기준 정립 & 자체 교육자료 제작(투입 인원 맞춤 교육)',
      icon: '🔍',
      color: 'from-gray-900 to-gray-800'
    },
    {
      step: 3,
      title: '현장답사',
      description: '사전 현장 방문 및 구조 파악 & 유동 인구 및 상권조사 & 클라이언트와 현장 미팅 & 현장 분석 보고서 제출',
      icon: '🏢',
      color: 'from-gray-900 to-gray-800'
    },
    {
      step: 4,
      title: '1차 인원 리스트업',
      description: '테디 인력 DB, 검증 인원 1차 선별 & 브랜드 분석 기반 섭외 기준 적용 & 자체 맞춤형 교육자료 전달',
      icon: '👥',
      color: 'from-gray-900 to-gray-800'
    },
    {
      step: 5,
      title: '미팅을 통한 2차 선별',
      description: '1차 인력 대상 실무 미팅 & 브랜드 이해 및 응대 시뮬레이션 기반 2차 선발',
      icon: '🤝',
      color: 'from-gray-900 to-gray-800'
    },
    {
      step: 6,
      title: '최종인원 선정 및 집중 교육',
      description: '최종 투입 인원 확정 & 프로모션 목적에 맞춘 집중 사전 교육 & CS 교육 및 운영 시뮬레이션',
      icon: '🎓',
      color: 'from-gray-900 to-gray-800'
    },
    {
      step: 7,
      title: '현장 운영',
      description: '기상, 출근, 그루밍, 중간, 마감 등 인원 관리 & 현장 모니터링 실시간 소통 & 피드백에 따른 즉각적인 현장 개선',
      icon: '⚡',
      color: 'from-gray-900 to-gray-800'
    },
    {
      step: 8,
      title: '결과보고 및 모니터링',
      description: '행사 종료 후 결과 분석 및 리포트 제출 & 피드백 수렴 및 향후 운영에 반영 & 브랜드 만족도 및 매출 증장 기대',
      icon: '📊',
      color: 'from-gray-900 to-gray-800'
    }
  ]

  const philosophies = [
    {
      title: '고객 중심',
      description: '고객의 니즈를 최우선으로 생각하며 맞춤형 서비스를 제공합니다.',
      icon: '🎯',
      bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: '창의적 혁신',
      description: '새로운 아이디어와 혁신적인 접근으로 차별화된 가치를 창출합니다.',
      icon: '💡',
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: '지속적 성장',
      description: '끊임없는 학습과 발전을 통해 더 나은 서비스를 제공합니다.',
      icon: '🌱',
      bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: '신뢰 파트너십',
      description: '약속한 결과를 반드시 달성하는 신뢰할 수 있는 파트너가 됩니다.',
      icon: '🤝',
      bgImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TEDDY <span className="text-gradient">소개</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              모델 & 행사 전문 에이전시 TEDDY는 고객의 브랜드와 함께 성장하는
              진정한 파트너십을 추구합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 우리의 이야기 Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              우리의 <span className="text-gradient">이야기</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TEDDY의 성장 스토리와 비전을 소개합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                전문성과 신뢰의 <span className="text-gradient">역사</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                TEDDY는 2015년 설립 이후, 모델 에이전시와 행사 기획 분야에서 
                지속적인 성장을 이어왔습니다. 우리는 단순한 서비스 제공을 넘어 
                고객의 브랜드와 함께 성장하는 진정한 파트너십을 추구합니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                최고의 전문성과 창의성을 바탕으로, 고객의 니즈에 최적화된 
                솔루션을 제공하며, 약속한 결과를 반드시 달성하는 신뢰할 수 
                있는 파트너가 되겠습니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-4 text-white text-center">
                  <div className="text-3xl font-bold mb-2">2015</div>
                  <div className="text-gray-300">설립</div>
                </div>
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-4 text-white text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-gray-300">프로젝트</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="text-xl font-bold text-gray-900">성장의 여정</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">모델 에이전시 전문성 확립</div>
                      <div className="text-xs text-gray-500 mt-1">2015-2017</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">행사 기획 및 운영 전문성</div>
                      <div className="text-xs text-gray-500 mt-1">2017-2019</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">브랜드 파트너십 확대</div>
                      <div className="text-xs text-gray-500 mt-1">2019-2021</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">업계 리더십 구축</div>
                      <div className="text-xs text-gray-500 mt-1">2021-현재</div>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>2015</span>
                    <span>현재</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEDDY의 철학 Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              TEDDY의 <span className="text-gradient">철학</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              우리가 추구하는 핵심 가치와 비전
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                {/* Glass Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-200/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-300/50 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative p-8 text-center w-full h-full flex flex-col justify-center">
                  <motion.div 
                    className="text-5xl mb-6 inline-block"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {philosophy.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {philosophy.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {philosophy.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casting Process Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Casting <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적이고 전문적인 캐스팅 프로세스를 통해 최적의 결과를 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {castingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{step.icon}</div>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Flow Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              프로세스 <span className="text-gradient">플로우</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적이고 전문적인 프로세스로 완벽한 결과를 만들어갑니다
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProcessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                    {/* Step Number */}
                    <div className={`bg-gradient-to-r ${step.color} rounded-full w-12 h-12 flex items-center justify-center text-white text-lg font-bold mb-4 mx-auto shadow-lg`}>
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-3xl mb-4 text-center">{step.icon}</div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-gray-900 mb-3 text-lg text-center">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed text-center">{step.description}</p>
                  </div>

                  {/* Arrow for Desktop */}
                  {index < newProcessSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <div className="text-2xl text-gray-500 font-bold">→</div>
                    </div>
                  )}

                  {/* Arrow for Mobile/Tablet */}
                  {index < newProcessSteps.length - 1 && (
                    <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                      <div className="text-2xl text-gray-500 font-bold">↓</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Process Flow Connection Lines for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform -translate-y-1/2 z-0"></div>
          </div>

          {/* Process Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">8단계</div>
                <div className="text-gray-600">체계적 프로세스</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24시간</div>
                <div className="text-gray-600">실시간 모니터링</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">고객 만족도</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              TEDDY와 함께 <span className="text-gradient">성장</span>하세요
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              전문적인 서비스와 체계적인 프로세스로 여러분의 브랜드와 함께 성장하겠습니다
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 