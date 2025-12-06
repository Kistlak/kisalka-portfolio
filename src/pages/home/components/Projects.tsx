export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Microservices Platform',
      description: 'Scalable microservices architecture handling 100K+ daily transactions with real-time inventory management and payment processing.',
      image: 'modern e-commerce platform dashboard interface with clean design, shopping cart analytics, product management system, dark theme with cyan accents, professional web application screenshot, high quality UI design',
      technologies: ['Laravel', 'AWS', 'Docker', 'Redis', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated deployment pipeline and infrastructure management system reducing deployment time by 60% using CI/CD best practices.',
      image: 'cloud infrastructure dashboard with server monitoring, deployment pipelines, DevOps automation interface, dark theme with blue and cyan elements, modern tech visualization, professional software',
      technologies: ['AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'High-performance analytics platform processing millions of events daily with real-time data visualization and reporting.',
      image: 'analytics dashboard with real-time charts and graphs, data visualization interface, modern business intelligence platform, dark theme with vibrant data displays, professional dashboard design',
      technologies: ['Laravel', 'Vue.js', 'Redis', 'PostgreSQL', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'API Gateway & Management System',
      description: 'Centralized API gateway managing authentication, rate limiting, and routing for multiple microservices with 99.9% uptime.',
      image: 'API management interface showing endpoints, authentication flows, rate limiting dashboard, modern developer tools interface, dark theme with technical elements, professional software design',
      technologies: ['Laravel', 'Redis', 'OAuth2', 'Docker', 'Nginx'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Multi-Tenant SaaS Application',
      description: 'Scalable SaaS platform serving 500+ organizations with isolated data, custom branding, and role-based access control.',
      image: 'SaaS application dashboard with multi-tenant features, user management interface, subscription billing system, modern cloud software, dark theme with professional design elements',
      technologies: ['Laravel', 'MySQL', 'Azure', 'Stripe', 'Vue.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Automated Testing Framework',
      description: 'Comprehensive testing suite achieving 85% code coverage with automated integration and unit tests for enterprise applications.',
      image: 'testing framework dashboard showing test results, code coverage reports, continuous integration interface, developer tools, dark theme with green success indicators, professional testing platform',
      technologies: ['PHPUnit', 'Laravel', 'Selenium', 'Jenkins', 'Docker'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5 animate-on-scroll">
          <div>
            <h2 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
              Featured Projects
            </h2>
            <div 
              style={{ 
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #00d4ff, #00ffcc)',
                borderRadius: '2px'
              }}
            />
          </div>
        </div>

        <div className="row g-4">
          Coming Soon
          {/* {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 animate-on-scroll">
              <div 
                className="rounded-4 overflow-hidden h-100 d-flex flex-column"
                style={{ 
                  backgroundColor: '#1f1f1f',
                  border: '1px solid rgba(0, 212, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderBottomColor = '#00d4ff';
                  e.currentTarget.style.borderBottomWidth = '3px';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderBottomColor = 'rgba(0, 212, 255, 0.1)';
                  e.currentTarget.style.borderBottomWidth = '1px';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Bproject.image%7D&width=400&height=220&seq=project-${index}&orientation=landscape`}
                    alt={project.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <span 
                      className="btn btn-sm px-4 py-2 rounded-pill fw-semibold"
                      style={{ 
                        backgroundColor: '#00d4ff',
                        color: '#000000',
                        border: 'none'
                      }}
                    >
                      View Project
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                    {project.title}
                  </h4>
                  <p className="mb-3 flex-grow-1" style={{ color: '#b0b0b0', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    {project.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="badge rounded-pill px-2 py-1"
                        style={{ 
                          backgroundColor: 'rgba(0, 212, 255, 0.1)',
                          color: '#00d4ff',
                          fontSize: '0.8rem',
                          border: '1px solid rgba(0, 212, 255, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-3 mt-auto">
                    <a 
                      href={project.github}
                      className="text-decoration-none d-flex align-items-center gap-2"
                      style={{ color: '#00d4ff', fontSize: '0.95rem' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00ffcc'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#00d4ff'}
                    >
                      <i className="fab fa-github"></i>
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="text-decoration-none d-flex align-items-center gap-2"
                      style={{ color: '#00d4ff', fontSize: '0.95rem' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00ffcc'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#00d4ff'}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
