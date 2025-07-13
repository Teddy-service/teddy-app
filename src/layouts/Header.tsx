import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToTop } from '../utils/scrollToTop'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '소개' },
    { path: '/portfolio', label: '포트폴리오' },
    { path: '/client', label: '클라이언트' },
    { path: '/contact', label: '문의' },
  ]

  const isActive = (path: string) => location.pathname === path

  const handleNavClick = () => {
    scrollToTop()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            {/* <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-teddy-text">TEDDY</span> */}
            <img 
              src="assets/IMG/LOGO/logo-1.png" 
              alt="TEDDY" 
              className="logo-responsive"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-black text-bold'
                    : 'text-teddy-muted hover:text-teddy-text'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-primary"
            >
              문의하기
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-teddy-secondary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-teddy-accent"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavClick()
                    }}
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-teddy-muted hover:bg-teddy-secondary hover:text-teddy-text'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* <div className="px-4 pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    문의하기
                  </Link>
                </div> */}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header 