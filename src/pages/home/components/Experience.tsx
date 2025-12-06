export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'GTECH Information Technology - Dubai',
      duration: 'Jan 2022 - Present',
      achievements: [
        'Led a team of 8 developers in architecting and delivering a microservices-based e-commerce platform serving 100K+ daily users',
        'Reduced system latency by 45% through optimization of database queries and implementation of Redis caching strategies',
        'Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews to maintain high code quality standards'
      ],
      technologies: ['PHP', 'Laravel', 'AWS', 'Docker', 'Redis', 'MySQL']
    },
    {
      title: 'Software Engineer',
      company: 'ION Groups (PVT) Ltd - Sri Lanka',
      duration: 'Feb 2021 - Jan 2022',
      achievements: [
        'Developed and maintained RESTful APIs serving mobile and web applications with 99.9% uptime',
        'Migrated legacy monolithic application to modern Laravel framework, improving maintainability and performance',
        'Implemented automated testing suite achieving 85% code coverage using PHPUnit',
        'Collaborated with cross-functional teams to deliver features on time and within budget'
      ],
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Azure', 'Git']
    },
    {
      title: 'Software Engineer',
      company: 'Buk Flights (PVT) Ltd – Sri Lanka',
      duration: 'June 2018 - Feb 2021',
      achievements: [
        'Built scalable web applications using PHP and Laravel framework from ground up',
        'Integrated third-party APIs including payment gateways, social media platforms, and analytics tools',
        'Optimized database performance through proper indexing and query optimization',
        'Participated in agile development processes and daily stand-ups'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
            Professional Journey
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
          <p className="lead" style={{ color: '#8a8a8a', maxWidth: '700px', margin: '0 auto' }}>
            A track record of delivering excellence and driving innovation
          </p>
        </div>

        <div className="position-relative">
          {/* Timeline Line */}
          <div 
            className="position-absolute d-none d-md-block"
            style={{ 
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, #00d4ff, #00ffcc)',
              transform: 'translateX(-50%)'
            }}
          />

          {experiences.map((exp, index) => (
            <div key={index} className="row mb-5 animate-on-scroll">
              <div className={`col-md-6 ${index % 2 === 0 ? 'text-md-end' : 'order-md-2'}`}>
                <div 
                  className="p-4 rounded-4 position-relative"
                  style={{ 
                    backgroundColor: '#1f1f1f',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Company Logo Placeholder */}
                  <div 
                    className={`d-inline-flex align-items-center justify-content-center rounded-3 mb-3 ${index % 2 === 0 ? 'float-md-end ms-md-3' : 'float-md-start me-md-3'}`}
                    style={{ 
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 255, 204, 0.2))',
                      border: '2px solid #00d4ff'
                    }}
                  >
                    <i className="fas fa-building fa-2x" style={{ color: '#00d4ff' }}></i>
                  </div>

                  <h3 className="h4 fw-bold mb-2" style={{ color: '#ffffff' }}>
                    {exp.title}
                  </h3>
                  <div className="mb-3">
                    <span className="fw-semibold" style={{ color: '#00d4ff' }}>{exp.company}</span>
                    <span className="mx-2" style={{ color: '#8a8a8a' }}>•</span>
                    <span style={{ color: '#8a8a8a' }}>{exp.duration}</span>
                  </div>

                  <ul className={`mb-3 ${index % 2 === 0 ? 'text-md-start' : ''}`} style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="mb-2">{achievement}</li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="badge rounded-pill px-3 py-2"
                        style={{ 
                          backgroundColor: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.3)',
                          color: '#00d4ff',
                          fontSize: '0.85rem'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                <div 
                  className="rounded-circle glow-effect"
                  style={{ 
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#00d4ff',
                    border: '4px solid #1a1a1a',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
