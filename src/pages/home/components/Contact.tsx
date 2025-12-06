import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      label: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: 'fa-brands fa-linkedin',
      label: 'LinkedIn',
      value: 'Kisalka Rajapaksha',
      link: 'https://www.linkedin.com/in/kisalka-rajapaksha/'
    },
    {
      icon: 'fa-map-marker-alt',
      label: 'Location',
      value: 'Available Worldwide',
      link: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      className="section-padding position-relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(0, 255, 204, 0.05) 100%)',
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="container position-relative">
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
            Let's Build Something
          </h2>
          <div 
            className="mx-auto mb-4"
            style={{ 
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #00d4ff, #00ffcc)',
              borderRadius: '2px'
            }}
          />
          <p className="lead" style={{ color: '#8a8a8a' }}>
            Open to opportunities and collaborations
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5 animate-on-scroll">
            <h3 className="h4 fw-bold mb-4" style={{ color: '#ffffff' }}>
              Get In Touch
            </h3>
            <p className="mb-4" style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="d-flex flex-column gap-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-decoration-none d-flex align-items-center gap-3 p-3 rounded-3"
                  style={{ 
                    backgroundColor: '#1f1f1f',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                    e.currentTarget.style.borderColor = '#00d4ff';
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1f1f1f';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{ 
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 255, 204, 0.2))',
                      border: '2px solid #00d4ff'
                    }}
                  >
                    <i className={`fas ${info.icon}`} style={{ color: '#00d4ff' }}></i>
                  </div>
                  <div>
                    <div style={{ color: '#8a8a8a', fontSize: '0.85rem' }}>{info.label}</div>
                    <div className="fw-semibold" style={{ color: '#ffffff' }}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-7 animate-on-scroll">
            <div 
              className="p-4 p-md-5 rounded-4"
              style={{ 
                backgroundColor: '#1f1f1f',
                border: '1px solid rgba(0, 212, 255, 0.2)'
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label" style={{ color: '#b0b0b0' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control form-control-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{ 
                      backgroundColor: '#2a2a2a',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.95rem'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)'}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label" style={{ color: '#b0b0b0' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{ 
                      backgroundColor: '#2a2a2a',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.95rem'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)'}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label" style={{ color: '#b0b0b0' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-control form-control-lg"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    maxLength={500}
                    style={{ 
                      backgroundColor: '#2a2a2a',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      resize: 'none'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)'}
                  />
                  <small style={{ color: '#8a8a8a' }}>
                    {formData.message.length}/500 characters
                  </small>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg w-100 fw-semibold border-0"
                  style={{ 
                    backgroundColor: '#00d4ff',
                    color: '#000000',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {submitStatus === 'idle' && 'Send Message'}
                  {submitStatus === 'success' && '✓ Message Sent!'}
                  {submitStatus === 'error' && '✗ Error, Try Again'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
