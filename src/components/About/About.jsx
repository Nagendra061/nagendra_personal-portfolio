import React from 'react'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'
import Timeline from './Timeline'

export default function About({ onNavClick }) {
  const loremText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit in id accusantium deleniti quos, recusandae consectetur suscipit vero minima impedit? Fugiat explicabo dolorem maxime quas facere voluptatibus quaerat recusandae?'

  const educationItems = [
    { date: '2021-2024', title: 'B-tech in Computer science', text: loremText },
    { date: '2021-2024', title: 'B-tech in Computer science', text: loremText },
    { date: '2021-2024', title: 'B-tech in Computer science', text: loremText },
  ]

  const experienceItems = [
    { date: '2021-2024', title: 'B-tech in Computer science', text: loremText },
    { date: '2021-2024', title: 'B-tech in Computer science', text: loremText },
    { date: '2021-2024', title: 'B-tech in Computer science', text: loremText },
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  i'm nagendra and <span>Web Developer</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusamus expedita architecto minus excepturi numquam ab eaque ducimus minima, dolor similique! Velit iure sint, neque ipsum impedit vel error commodi!
                </p>
              </div>
            </div>
            <div className="row">
              <PersonalInfo onNavClick={onNavClick} />
              <Skills />
            </div>
            <div className="row">
              <Timeline
                title="Education"
                className="education padd-15"
                items={educationItems}
              />
              <Timeline
                title="Experience"
                className="experience padd-15"
                items={experienceItems}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
