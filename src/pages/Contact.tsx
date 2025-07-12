import { useState } from 'react'
import { motion } from 'framer-motion'
// import { init, send } from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS 설정 (실제 사용시 환경변수로 관리)
      // init("YOUR_USER_ID")
      // await send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      
      // 임시로 성공 처리
      setTimeout(() => {
        setSubmitStatus('success')
        setIsSubmitting(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      }, 1000)
    } catch (error) {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "주소",
      content: "서울특별시 강남구 테헤란로 123",
      subContent: "TEDDY 빌딩 5층"
    },
    {
      icon: "📞",
      title: "전화",
      content: "02-1234-5678",
      subContent: "평일 09:00 - 18:00"
    },
    {
      icon: "✉️",
      title: "이메일",
      content: "teddy@agency.com",
      subContent: "24시간 접수 가능"
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
            <h1 className="text-4xl md:text-6xl font-bold text-teddy-text mb-6">
              문의하기
            </h1>
            <p className="text-xl text-teddy-muted max-w-3xl mx-auto leading-relaxed">
              TEDDY와 함께 프로젝트를 시작해보세요.
              언제든지 문의해주시면 빠른 답변 드리겠습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Background for Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl"></div>
              
              <div className="relative p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  문의 폼
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        연락처
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="010-1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        회사명
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="회사명"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      서비스 유형 *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors text-gray-900"
                    >
                      <option value="" className="text-gray-600">서비스를 선택해주세요</option>
                      <option value="model" className="text-gray-900">모델 에이전시</option>
                      <option value="event" className="text-gray-900">행사 기획</option>
                      <option value="marketing" className="text-gray-900">마케팅 컨설팅</option>
                      <option value="other" className="text-gray-900">기타</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      문의 내용 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors resize-none placeholder-gray-600"
                      placeholder="프로젝트에 대한 자세한 내용을 알려주세요..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white/50 backdrop-blur-sm border-2 border-gray-400/70 text-gray-900 text-lg py-4 rounded-lg hover:bg-white/60 hover:border-gray-500/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg"
                  >
                    {isSubmitting ? '전송 중...' : '문의하기'}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50/80 backdrop-blur-sm border border-green-200/60 rounded-lg text-green-700"
                    >
                      문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50/80 backdrop-blur-sm border border-red-200/60 rounded-lg text-red-700"
                    >
                      문의 전송에 실패했습니다. 다시 시도해주세요.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Background for Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl"></div>
              
              <div className="relative p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  연락처 정보
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="relative group"
                    >
                      {/* Glass Effect Background */}
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/60 transition-all duration-300"></div>
                      
                      {/* Content */}
                      <div className="relative p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div 
                            className="text-3xl"
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            {info.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                              {info.title}
                            </h3>
                            <p className="text-gray-800 font-medium">
                              {info.content}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {info.subContent}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="mt-8"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    위치
                  </h3>
                  <div className="relative">
                    {/* Glass Effect for Map */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl"></div>
                    <div className="relative w-full h-64 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🗺️</div>
                        <p className="text-gray-700">지도가 여기에 표시됩니다</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 