import { useEffect, useState } from 'react';

export default function Hero() {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setTypingComplete(true), 3000);
  }, []);

  return (
    <section 
      id="hero" 
      className="d-flex align-items-center position-relative overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)',
        paddingTop: '80px'
      }}
    >
      {/* Animated Background Pattern */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(42, 42, 42, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(42, 42, 42, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.3
        }}
      />

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="mb-3">
              <span 
                className="typing-effect d-inline-block font-monospace"
                style={{ 
                  color: '#00ffcc',
                  fontSize: '1rem',
                  fontFamily: 'Fira Code, monospace'
                }}
              >
                &lt; Hello World /&gt;
              </span>
            </div>
            
            <h1 className="display-3 fw-bold mb-3" style={{ lineHeight: '1.2' }}>
              <span style={{ color: '#ffffff' }}>Senior Software</span>
              <br />
              <span className="gradient-text">Engineer</span>
            </h1>
            
            <p className="lead mb-4" style={{ color: '#8a8a8a', maxWidth: '600px', lineHeight: '1.8' }}>
              Architecting high-performance web applications with 7+ years of expertise in PHP, Laravel, and cloud platforms. Driving technical excellence through TDD, DDD, and SOLID principles.
            </p>
            
            <div className="d-flex flex-wrap gap-2 mb-4">
              {['PHP', 'Laravel', 'React', 'NodeJS', 'AWS'].map((tech) => (
                <span 
                  key={tech}
                  className="badge rounded-pill px-3 py-2"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid #00d4ff',
                    color: '#00d4ff',
                    fontSize: '0.9rem'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="d-flex flex-wrap gap-3">
              <a 
                href="#contact" 
                className="btn btn-lg px-4 py-3 rounded-3 fw-semibold border-0 text-dark"
                style={{ 
                  backgroundColor: '#00d4ff',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="btn btn-lg btn-outline-light px-4 py-3 rounded-3 fw-semibold"
                style={{ 
                  borderColor: '#ffffff',
                  color: '#ffffff',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="col-lg-5 d-none d-lg-block">
            <div className="float-animation">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20minimalist%203D%20isometric%20illustration%20of%20a%20dark%20themed%20code%20editor%20terminal%20window%20with%20glowing%20cyan%20and%20blue%20syntax%20highlighting%2C%20floating%20in%20space%20with%20geometric%20elements%2C%20tech%20aesthetic%2C%20professional%20software%20development%20workspace%20visualization%2C%20dark%20background&width=600&height=600&seq=hero-illustration&orientation=squarish"
                alt="Software Development Illustration"
                className="img-fluid rounded-4"
                style={{ 
                  filter: 'drop-shadow(0 20px 60px rgba(0, 212, 255, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
