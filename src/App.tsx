import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Intro from './pages/Intro'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Client from './pages/Client'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-teddy-primary">
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/*" element={
          <>
            <Header />
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/client" element={<Client />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App 