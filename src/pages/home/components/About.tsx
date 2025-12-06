export default function About() {
  const metrics = [
    { value: '7+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '15+', label: 'Teams Led' }
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 animate-on-scroll">
            <div className="mb-3">
              <span 
                className="text-uppercase fw-semibold"
                style={{ 
                  color: '#00d4ff',
                  fontSize: '0.875rem',
                  letterSpacing: '2px'
                }}
              >
                ABOUT ME
              </span>
            </div>
            
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#ffffff' }}>
              Building Scalable Solutions
            </h2>
            
            <p className="mb-4" style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '1.1rem' }}>
              As a <strong style={{ color: '#ffffff' }}>Senior Software Engineer</strong> with over 7 years of experience, I specialize in architecting and delivering high-performance web applications using modern technologies and best practices.
            </p>
            
            <p className="mb-4" style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '1.1rem' }}>
              My expertise spans across <strong style={{ color: '#ffffff' }}>PHP, Laravel, and cloud platforms</strong> including AWS, Azure, and DigitalOcean. I'm passionate about leading teams, driving technical excellence, and optimizing system scalability and reliability.
            </p>
            
            <p className="mb-5" style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '1.1rem' }}>
              I'm a strong advocate of <strong style={{ color: '#ffffff' }}>TDD, DDD, and SOLID principles</strong>, focused on building clean, maintainable, and scalable solutions that stand the test of time.
            </p>
            
            <div className="row g-3">
              {metrics.map((metric, index) => (
                <div key={index} className="col-md-4">
                  <div 
                    className="p-4 rounded-3 h-100"
                    style={{ 
                      backgroundColor: '#1f1f1f',
                      border: '1px solid rgba(0, 212, 255, 0.2)'
                    }}
                  >
                    <h3 className="display-4 fw-bold mb-2 gradient-text">{metric.value}</h3>
                    <p className="mb-0" style={{ color: '#8a8a8a' }}>{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-5 mt-5 mt-lg-0 animate-on-scroll">
            <div className="position-relative">
              <div 
                className="rounded-4 overflow-hidden glow-effect"
                style={{ 
                  border: '3px solid #00d4ff',
                  maxWidth: '400px',
                  margin: '0 auto'
                }}
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20software%20engineer%20portrait%20in%20modern%20office%20setting%2C%20confident%20senior%20developer%2C%20tech%20professional%20headshot%2C%20clean%20simple%20background%20with%20subtle%20tech%20elements%2C%20professional%20lighting%2C%20high%20quality%20corporate%20photography&width=400&height=500&seq=about-photo&orientation=portrait"
                  alt="Kisalka Rajapaksha - Senior Software Engineer"
                  className="img-fluid w-100"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="position-absolute" style={{ top: '-20px', right: '20px' }}>
                <div 
                  className="rounded-circle p-3 float-animation"
                  style={{ 
                    backgroundColor: '#1f1f1f',
                    border: '2px solid #00d4ff',
                    animationDelay: '0s'
                  }}
                >
                  <i className="fab fa-aws fa-2x" style={{ color: '#00d4ff' }}></i>
                </div>
              </div>
              
              <div className="position-absolute" style={{ bottom: '40px', left: '-20px' }}>
                <div 
                  className="rounded-circle p-3 float-animation"
                  style={{ 
                    backgroundColor: '#1f1f1f',
                    border: '2px solid #00ffcc',
                    animationDelay: '1s'
                  }}
                >
                  <i className="fab fa-laravel fa-2x" style={{ color: '#00ffcc' }}></i>
                </div>
              </div>
              
              <div className="position-absolute" style={{ top: '50%', right: '-30px' }}>
                <div 
                  className="rounded-circle p-3 float-animation"
                  style={{ 
                    backgroundColor: '#1f1f1f',
                    border: '2px solid #00d4ff',
                    animationDelay: '2s'
                  }}
                >
                  <i className="fab fa-php fa-2x" style={{ color: '#00d4ff' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
