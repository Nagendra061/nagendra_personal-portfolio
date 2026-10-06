import React from 'react'

export default function Portfolio() {
  const projects = [
    { img: '/images/hero1.jpg', alt: 'Project 1' },
    { img: '/images/hero4.jpg', alt: 'Project 2' },
    { img: '/images/hero3.jpg', alt: 'Project 3' },
    { img: '/images/hero4.jpg', alt: 'Project 4' },
    { img: '/images/hero4.jpg', alt: 'Project 5' },
    { img: '/images/hero1.jpg', alt: 'Project 6' },
  ]

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15 padd15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>my last projects :</h2>
          </div>
        </div>
        <div className="row">
          {projects.map((item, index) => (
            <div className="portfolio-item padd-15" key={index}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={item.img} alt={item.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
