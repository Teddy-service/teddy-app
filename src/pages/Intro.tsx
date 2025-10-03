import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { scrollToTop } from '../utils/scrollToTop'

const Intro = () => {
  const navigate = useNavigate()

  useEffect(() => {
    scrollToTop()
  }, [])

  const handleClick = () => {
    navigate('/')
  }

  const customStyles = `
    @import url('//fonts.googleapis.com/earlyaccess/nanumbrushscript.css');

    #intro-text {
        font-family: 'Nanum Brush Script';
        font-weight: normal;
    }
  `

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{customStyles}</style>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teddy-primary via-white to-teddy-secondary"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[rgba(165,124,69,0.4)] rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-[rgba(165,124,69,0.7)] rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -150, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-[rgba(165,124,69,1)] rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 120, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div id="intro-text" className="text-center cursor-pointer" onClick={handleClick}>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-teddy-text mb-8 leading-tight drop-shadow-lg">
              <TypeAnimation
                sequence={[ // 타이핑할 텍스트 배열
                  '가장 가까운 자리에서 함께하는 팀 TEDDY',
                  100,
                ]}
                wrapper="span"
                speed={1} // 타이핑 속도 (숫자가 클수록 빠름)
                repeat={0} // 반복 횟수 (Infinity로 무한 반복)
                cursor={true} // 커서 표시 여부 (true/false)
              />
            </h1>
          {/* <p className="text-lg md:text-xl text-gray-600 mt-4 animate-pulse">
            클릭하여 시작하기
          </p> */}
        </div>
      </div>
    </section>
  )
}

export default Intro
