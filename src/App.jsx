import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import StyleSwitcher from './components/StyleSwitcher/StyleSwitcher'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isNavOpen, setIsNavOpen] = useState(false)

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'portfolio', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="main-container">
      <Sidebar
        activeSection={activeSection}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        onNavClick={handleNavClick}
      />
      <div className="main-content">
        <Home onNavClick={handleNavClick} />
        <About onNavClick={handleNavClick} />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <StyleSwitcher />
    </div>
  )
}
