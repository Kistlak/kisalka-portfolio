interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        scrolled ? 'bg-dark bg-opacity-95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
      style={{ 
        backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #00d4ff' : 'none'
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#hero">
          <img 
            src="" 
            alt="Kisalka Rajapaksha Logo" 
            style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '8px' }}
            className="me-2"
          />
          <span className="fw-bold" style={{ color: '#00d4ff', fontSize: '1.2rem' }}>KR</span>
        </a>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ color: '#00d4ff' }}
        >
          <i className="fas fa-bars" style={{ color: '#00d4ff' }}></i>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link px-3 transition-all" 
                  href={`#${item.toLowerCase()}`}
                  style={{ color: '#b0b0b0' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00ffcc'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#b0b0b0'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
