import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import BrandIntro from '../components/BrandIntro'
import ServicesSection from '../components/ServicesSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Brand Introduction */}
      <BrandIntro />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export default Home 