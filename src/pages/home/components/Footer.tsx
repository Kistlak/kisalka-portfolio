import krLogo from '../../../assets/images/apple-touch-icon.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: 'fa-github', url: 'https://github.com/Kistlak', label: 'GitHub' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/kisalka-rajapaksha/', label: 'LinkedIn' },
  ];

  return (
    <footer 
      className="py-5"
      style={{ 
        backgroundColor: '#0f0f0f',
        borderTop: '1px solid rgba(0, 212, 255, 0.3)'
      }}
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-4 text-center text-lg-start">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
              <img 
                src={krLogo}
                alt="KR Logo" 
                style={{ height: '35px', width: '35px', objectFit: 'cover', borderRadius: '6px' }}
              />
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="d-flex justify-content-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{ 
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#1f1f1f',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    color: '#8a8a8a',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                    e.currentTarget.style.borderColor = '#00d4ff';
                    e.currentTarget.style.color = '#00d4ff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1f1f1f';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                    e.currentTarget.style.color = '#8a8a8a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={`fab ${social.icon} fa-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-4 text-center text-lg-end">
            <p className="mb-0" style={{ color: '#8a8a8a', fontSize: '0.9rem' }}>
              © {currentYear} Kisalka Rajapaksha. All rights reserved.
            </p>
            {/* <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none d-inline-block mt-2"
              style={{ 
                color: '#8a8a8a',
                fontSize: '0.85rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#00d4ff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8a8a8a'}
            >
              Powered by Kisalka Rajapaksha
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
