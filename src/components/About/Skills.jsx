import React from 'react'

export default function Skills() {
  const skillsData = [
    { name: 'Css', percent: '86%' },
    { name: 'Js', percent: '76%' },
    { name: 'html', percent: '92%' },
    { name: 'C', percent: '56%' },
  ]

  return (
    <div className="skills padd-15">
      <div className="row">
        {skillsData.map((skill, index) => (
          <div className="skills-item padd-15" key={index}>
            <h5>{skill.name}</h5>
            <div className="progress">
              <div className="progress-in" style={{ width: skill.percent }}></div>
              <div className="skills-percent">{skill.percent}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
