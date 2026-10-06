import React from 'react'

export default function Sidebar({ activeSection, isNavOpen, setIsNavOpen, onNavClick }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa fa-home' },
    { id: 'about', label: 'About', icon: 'fa fa-user' },
    { id: 'services', label: 'Services', icon: 'fa fa-list' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fa fa-briefcase' },
    { id: 'contact', label: 'Contact', icon: 'fa fa-comments' },
  ]

  const handleLinkClick = (id) => {
    if (onNavClick) {
      onNavClick(id)
    }
    setIsNavOpen(false)
  }

  return (
    <div className={`aside ${isNavOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="#home" onClick={() => handleLinkClick('home')}>
          <span>n</span>agendra
        </a>
      </div>
      <div
        className="nav-toggler"
        onClick={() => setIsNavOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation"
      >
        <span></span>
      </div>
      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => handleLinkClick(item.id)}
            >
              <i className={item.icon}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
