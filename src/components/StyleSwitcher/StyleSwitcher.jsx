import React, { useState, useEffect } from 'react'

export default function StyleSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme-mode') === 'dark'
  })
  const [activeColor, setActiveColor] = useState(() => {
    return localStorage.getItem('skin-color') || '#ec1839'
  })

  const colorOptions = [
    { id: 'color-1', color: '#ec1839', className: 'color-1' },
    { id: 'color-2', color: '#fa5b0f', className: 'color-2' },
    { id: 'color-3', color: '#37b182', className: 'color-3' },
    { id: 'color-4', color: '#1854b4', className: 'color-4' },
    { id: 'color-5', color: '#f021b2', className: 'color-5' },
  ]

  // Apply dark mode
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
      localStorage.setItem('theme-mode', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme-mode', 'light')
    }
  }, [isDark])

  // Apply skin color
  useEffect(() => {
    document.documentElement.style.setProperty('--skins-colour', activeColor)
    localStorage.setItem('skin-color', activeColor)
  }, [activeColor])

  // Auto-close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const handleColorChange = (color) => {
    setActiveColor(color)
  }

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div
        className="style-switcher-toggler s-icon"
        onClick={toggleOpen}
        role="button"
        tabIndex={0}
        aria-label="Toggle theme color settings"
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div
        className="day-night s-icon"
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        aria-label="Toggle light and dark mode"
      >
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {colorOptions.map((item) => (
          <span
            key={item.id}
            className={item.className}
            onClick={() => handleColorChange(item.color)}
            role="button"
            tabIndex={0}
            aria-label={`Select ${item.id} color`}
          ></span>
        ))}
      </div>
    </div>
  )
}
