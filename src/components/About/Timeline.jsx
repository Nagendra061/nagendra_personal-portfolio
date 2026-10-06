import React from 'react'

export default function Timeline({ title, className, items }) {
  return (
    <div className={className}>
      <h3 className="title">{title}</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {items.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="circle-dot"></div>
                <h3 className="timeline-date">
                  <i className="fa fa-calendar"></i> {item.date}
                </h3>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
