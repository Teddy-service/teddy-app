import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-teddy-primary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* 404 숫자 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[150px] md:text-[200px] font-bold text-white leading-none mb-4"
          style={{ 
            textShadow: '0 0 30px rgba(255,255,255,0.3)',
            letterSpacing: '-0.02em'
          }}
        >
          404
        </motion.h1>

        {/* 에러 메시지 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto mb-2">
            죄송합니다. 요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Page not found or has been moved
          </p>
        </motion.div>

        {/* 버튼 그룹 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-white text-teddy-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            홈으로 돌아가기
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-teddy-primary transition-all duration-300"
          >
            이전 페이지로
          </button>
        </motion.div>

        {/* 장식 요소 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound

