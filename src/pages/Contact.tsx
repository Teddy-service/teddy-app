import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { scrollToTop } from '../utils/scrollToTop'
import { sendContactEmail } from '../services/emailService'
// import { init, send } from '@emailjs/browser'

// Google Maps 타입 정의
declare global {
  interface Window {
    google: {
      maps: {
        Map: any
        Marker: any
        Size: any
      }
    }
  }
}

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
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    scrollToTop()
  }, [])

  // Google Maps 초기화
  useEffect(() => {
    const initMap = () => {
      const googleMapKey = import.meta.env.VITE_GOOGLE_MAP_KEY
      
      if (!googleMapKey) {
        console.error('Google Maps API key not found')
        return
      }

      // Google Maps API 스크립트 로드
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapKey}&libraries=places`
      script.async = true
      script.defer = true
      
      script.onload = () => {
        if (mapRef.current && window.google) {
          // TEDDY Agency 위치 (강남구로 가정)
          const teddyLocation = { lat: 37.5095924, lng: 127.025036 }
          
          mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
            zoom: 15,
            center: teddyLocation,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          })

          // 마커 추가
          new window.google.maps.Marker({
            position: teddyLocation,
            map: mapInstanceRef.current,
            title: 'TEDDY Agency',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="black" stroke="#fff" stroke-width="2"/>
                  <text x="20" y="26" text-anchor="middle" fill="white" font-size="16" font-weight="bold">T</text>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(40, 40)
            }
          })

          setIsMapLoaded(true)
        }
      }

      script.onerror = () => {
        console.error('Failed to load Google Maps API')
      }

      document.head.appendChild(script)

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      }
    }

    // 컴포넌트 마운트 후 지도 초기화
    const timer = setTimeout(initMap, 100)
    return () => clearTimeout(timer)
  }, [])

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
      // emailService를 통해 이메일 전송
      const success = await sendContactEmail(formData)
      
      if (success) {
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
      }
    } catch (error) {
      console.error('문의 폼 제출 오류:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "주소",
      content: "서울특별시 강남구 강남대로126길 26-5",
      subContent: ""
    },
    {
      icon: "📞",
      title: "전화",
      content: "010-3527-7600",
      subContent: "연중무휴"
    },
    {
      icon: "✉️",
      title: "이메일",
      content: "teddyagency@naver.com",
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
            <h1 className="contact-title font-bold text-teddy-text mb-6">
              문의하기
            </h1>
            <p className="contact-subtitle text-teddy-muted max-w-3xl mx-auto leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50 rounded-3xl"></div>
              
              <div className="relative p-8">
                <h2 className="contact-section-title font-bold text-gray-900 mb-8">
                  문의 폼
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block contact-form-label font-medium text-gray-900 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full contact-form-input bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                    <div>
                      <label className="block contact-form-label font-medium text-gray-900 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full contact-form-input bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="이메일을 입력해주세요"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block contact-form-label font-medium text-gray-900 mb-2">
                        연락처
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full contact-form-input bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="연락처를 입력해주세요"
                      />
                    </div>
                    <div>
                      <label className="block contact-form-label font-medium text-gray-900 mb-2">
                        회사명
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full contact-form-input bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors placeholder-gray-600"
                        placeholder="회사명을 입력해주세요"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block contact-form-label font-medium text-gray-900 mb-2">
                      서비스 유형 *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full contact-form-select bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors text-gray-900"
                    >
                      <option value="" className="text-gray-600">서비스를 선택해주세요</option>
                      <option value="model" className="text-gray-900">모델 에이전시</option>
                      <option value="event" className="text-gray-900">행사 기획</option>
                      <option value="marketing" className="text-gray-900">마케팅 컨설팅</option>
                      <option value="other" className="text-gray-900">기타</option>
                    </select>
                  </div>

                  <div>
                    <label className="block contact-form-label font-medium text-gray-900 mb-2">
                      문의 내용 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full contact-form-textarea bg-white/40 backdrop-blur-sm border-2 border-gray-300/60 rounded-lg focus:ring-2 focus:ring-gray-400/80 focus:border-gray-400/80 transition-colors resize-none placeholder-gray-600"
                      placeholder="문의 내용을 입력해주세요"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full contact-form-button bg-white/50 backdrop-blur-sm border-2 border-gray-400/70 text-gray-900 rounded-lg hover:bg-white/60 hover:border-gray-500/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg"
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50 rounded-3xl"></div>
              
              <div className="relative p-8">
                <h2 className="contact-section-title font-bold text-gray-900 mb-8">
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
                            <h3 className="contact-info-title font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                              {info.title}
                            </h3>
                            <p className="contact-info-content text-gray-800 font-medium">
                              {info.content}
                            </p>
                            <p className="contact-info-subcontent text-gray-600">
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
                  <h3 className="contact-map-title font-semibold text-gray-900 mb-4">
                    위치
                  </h3>
                  <div className="relative">
                    {/* Google Maps */}
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                      {!isMapLoaded ? (
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">🗺️</div>
                            <p className="text-gray-700">지도를 로딩 중입니다...</p>
                          </div>
                        </div>
                      ) : null}
                      <div 
                        ref={mapRef} 
                        className="w-full h-full rounded-2xl"
                        style={{ minHeight: '256px' }}
                      />
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