import React from 'react'

export default function PersonalInfo({ onNavClick }) {
  const infoData = [
    { label: 'Birthday', value: '25 Aug 2003' },
    { label: 'Age', value: '20' },
    { label: 'Website', value: 'www.digitalpromax.blogspot.com' },
    { label: 'Email', value: 'nagendravarma061@gmail.com' },
    { label: 'Degree', value: 'CSE' },
    { label: 'phone no', value: '+12 34567890' },
    { label: 'country', value: 'India' },
    { label: 'Freelnace', value: 'Available' },
  ]

  return (
    <div className="personal-info padd-15">
      <div className="row">
        {infoData.map((item, index) => (
          <div className="info-item padd-15" key={index}>
            <p>
              {item.label} : <span>{item.value}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="buttons padd-15">
          <a href="#" className="btn">
            Download CV
          </a>
          <a
            href="#contact"
            className="btn hire-me"
            onClick={() => onNavClick && onNavClick('contact')}
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  )
}
