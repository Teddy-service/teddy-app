import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[rgba(165,124,69,1)] to-[rgba(165,124,69,0.7)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="cta-title font-bold mb-6">
            지금 바로 <span className="text-yellow-300">시작</span>하세요
          </h2>
          <p className="cta-subtitle mb-8 max-w-3xl mx-auto opacity-90">
            TEDDY와 함께라면 당신의 브랜드도 더욱 빛날 수 있습니다.
            <br />
            지금 바로 문의하고 무료 상담을 받아보세요.
          </p>

          <div className="cta-buttons">
            <Link
              to="/contact"
              className="bg-white text-[rgba(165,124,69,1)] hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 cta-button"
            >
              무료 상담 신청
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-[rgba(165,124,69,1)] font-semibold rounded-lg transition-colors duration-200 cta-button"
            >
              포트폴리오 보기
            </Link>
          </div>

          {/* Contact Info */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">📞</div>
              <div className="text-lg font-semibold mb-1">전화 문의</div>
              <div className="opacity-90">02-1234-5678</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">✉️</div>
              <div className="text-lg font-semibold mb-1">이메일 문의</div>
              <div className="opacity-90">teddy@agency.com</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">💬</div>
              <div className="text-lg font-semibold mb-1">카카오톡</div>
              <div className="opacity-90">@teddyagency</div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection 