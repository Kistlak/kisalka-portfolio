import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // To force form remount and reset Formspree internal state
  const [formKey, setFormKey] = useState(0);

  // Toast notification state
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [state, handleSubmit] = useForm("xzznazpw");

  const hasErrors = Array.isArray(state.errors) && state.errors.length > 0;

  // Handle success and error toasts, reset form on success
  useEffect(() => {
    if (state.succeeded) {
      setToast({ type: 'success', message: 'Message sent successfully!' });

      // Reset local form data
      setFormData({ name: '', email: '', message: '' });

      // Change formKey to remount form and reset Formspree internal state
      setFormKey(prev => prev + 1);

      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }

    if (hasErrors) {
      setToast({ type: 'error', message: 'Something went wrong. Try again.' });

      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, hasErrors]);

  // Detect other submission failures (CORS, network, blocked)
  useEffect(() => {
    if (!state.submitting && !state.succeeded && state.errors === null) {
      if (state.touched) {
        setToast({ type: "error", message: "Something went wrong. Please try again." });

        const timer = setTimeout(() => setToast(null), 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [state.submitting, state.succeeded, state.errors, state.touched]);

  const contactInfo = [
    {
      icon: 'fa-envelope',
      label: 'Email',
      value: 'kistlakall@gmail.com',
      link: 'mailto:kistlakall@gmail.com'
    },
    {
      icon: 'fa-brands fa-linkedin',
      label: 'LinkedIn',
      value: 'Kisalka Rajapaksha',
      link: 'https://www.linkedin.com/in/kisalka-rajapaksha/'
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: 'Kistlak',
      link: 'https://github.com/Kistlak'
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

        {/* Toast popup */}
        {toast && (
          <div
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              padding: '16px 22px',
              backgroundColor: toast.type === 'success' ? '#00ffcc' : '#ff4d4d',
              color: '#000',
              borderRadius: '6px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              zIndex: 9999,
              animation: 'fadeInOut 3s ease'
            }}
          >
            {toast.message}
          </div>
        )}

        {/* Fade animation */}
        <style>
          {`
            @keyframes fadeInOut {
              0% { opacity: 0; transform: translateY(-10px); }
              10% { opacity: 1; transform: translateY(0); }
              90% { opacity: 1; transform: translateY(0); }
              100% { opacity: 0; transform: translateY(-10px); }
            }
          `}
        </style>

        {/* Header */}
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

          {/* Left: Contact Info */}
          <div className="col-lg-5 animate-on-scroll">
            <h3 className="h4 fw-bold mb-4" style={{ color: '#ffffff' }}>
              Get In Touch
            </h3>
            <p className="mb-4" style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
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

          {/* Right: Form */}
          <div className="col-lg-7 animate-on-scroll">
            <div
              className="p-4 p-md-5 rounded-4"
              style={{
                backgroundColor: '#1f1f1f',
                border: '1px solid rgba(0, 212, 255, 0.2)'
              }}
            >
              <form key={formKey} onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label" style={{ color: '#b0b0b0' }}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="form-control form-control-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      backgroundColor: '#2a2a2a',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label" style={{ color: '#b0b0b0' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="form-control form-control-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      backgroundColor: '#2a2a2a',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label" style={{ color: '#b0b0b0' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={500}
                    className="form-control form-control-lg"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      backgroundColor: '#2a2a2a',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      color: '#ffffff',
                      resize: 'none'
                    }}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  <small style={{ color: '#8a8a8a' }}>
                    {formData.message.length}/500 characters
                  </small>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-lg w-100 fw-semibold border-0"
                  disabled={state.submitting}
                  style={{
                    backgroundColor: '#00d4ff',
                    color: '#000',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
