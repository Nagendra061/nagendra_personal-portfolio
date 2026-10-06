import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Home({ onNavClick }) {
  const typingRef = useRef(null)

  useEffect(() => {
    if (!typingRef.current) return

    const typed = new Typed(typingRef.current, {
      strings: ['', 'Web Designer', 'web Developer', 'Graphic Designer', 'Youtuber'],
      typeSpeed: 100,
      backSpeed: 60,
      Backspeed: 60,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is<span className="name"> Nagendra</span>
            </h3>
            <h3 className="my-profession">
              I'm a<span className="typing" ref={typingRef}> Web designer</span>
            </h3>
            <p>
              I'm a web designer with extensive experience for over 10 years.My expertise is to create and website design, and many more...
            </p>
            <a
              href="#contact"
              className="btn hire-me"
              onClick={() => onNavClick && onNavClick('contact')}
            >
              Hire Me
            </a>
          </div>
          <div className="home-img padd-15">
            <img src="/images/hero.jpg?v=2" alt="Nagendra profile" />
          </div>
        </div>
      </div>
    </section>
  )
}
