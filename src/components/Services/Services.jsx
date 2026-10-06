import React from 'react'

export default function Services() {
  const serviceList = [
    { icon: 'fa fa-mobile-alt', title: 'Web design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta exercitationem omnis.' },
    { icon: 'fa fa-laptop-code', title: 'Web design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta exercitationem omnis.' },
    { icon: 'fa fa-palette', title: 'Web design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta exercitationem omnis.' },
    { icon: 'fa fa-code', title: 'Web design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta exercitationem omnis.' },
    { icon: 'fa fa-search', title: 'Web design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta exercitationem omnis.' },
    { icon: 'fa fa-bullhorn', title: 'Web design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta exercitationem omnis.' },
  ]

  return (
    <section className="Service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15 padd15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {serviceList.map((service, index) => (
            <div className="Service-item padd-15" key={index}>
              <div className="Service-item-inner">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
