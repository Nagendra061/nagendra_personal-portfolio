import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactDetails = [
    { icon: 'fa fa-phone', title: 'Call us on', detail: '+8525928' },
    { icon: 'fa fa-map-marker-alt', title: 'office', detail: 'india' },
    { icon: 'fa fa-envelope', title: 'Email', detail: 'ghvgvghgv@gmail.com' },
    { icon: 'fa fa-globe-europe', title: 'Website', detail: 'www.digitalpromax.blogspot.com' },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15 padd15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have you any quareis ?</h3>
        <h4 className="contact-sub-title padd-15">I'm at your services</h4>
        <div className="row">
          {contactDetails.map((item, index) => (
            <div className="contact-info-item padd-15" key={index}>
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
        <h3 className="contact-title padd-15">Send me an email</h3>
        <h4 className="contact-sub-title padd-15">I'm very responsive to messages</h4>

        {/* Contact Form */}
        <div className="row">
          <form className="contact-form padd-15" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn">
                  {submitted ? 'Message Sent!' : 'send message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
