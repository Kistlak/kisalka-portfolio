import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: 'fa-code',
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'Laravel', level: 95 },
        { name: 'React', level: 70 },
        { name: 'RESTful APIs', level: 90 }
      ]
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Azure', level: 75 },
        { name: 'DigitalOcean', level: 85 },
        { name: 'Docker', level: 85 }
      ]
    },
    {
      icon: 'fa-database',
      title: 'Database & Architecture',
      skills: [
        { name: 'MySQL', level: 95 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 85 },
        { name: 'System Design', level: 90 }
      ]
    },
    {
      icon: 'fa-cogs',
      title: 'Best Practices',
      skills: [
        { name: 'Test Driven Development', level: 90 },
        { name: 'Domain Driven Design', level: 90 },
        { name: 'SOLID Principles', level: 90 },
        { name: 'CI/CD', level: 85 }
      ]
    },
    {
      icon: 'fa-users',
      title: 'Leadership & Collaboration',
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Code Review', level: 90 },
        { name: 'Mentoring', level: 90 }
      ]
    },
    {
      icon: 'fa-tools',
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Asana', level: 95 },
        { name: 'Monitoring', level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ 
        backgroundColor: '#0f0f0f',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)'
      }}
    >
      <div className="container">
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
            Technical Expertise
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
            A comprehensive skill set built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 animate-on-scroll">
              <div 
                className="p-4 rounded-4 h-100 position-relative overflow-hidden"
                style={{ 
                  backgroundColor: '#1f1f1f',
                  border: '1px solid rgba(0, 212, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.1)';
                }}
              >
                <div className="text-center mb-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 255, 204, 0.2))',
                      border: '2px solid #00d4ff'
                    }}
                  >
                    <i className={`fas ${category.icon} fa-2x`} style={{ color: '#00d4ff' }}></i>
                  </div>
                  <h4 className="fw-bold mb-0" style={{ color: '#ffffff' }}>{category.title}</h4>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>{skill.name}</span>
                        <span style={{ color: '#00d4ff', fontSize: '0.95rem', fontWeight: '600' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div 
                        className="rounded-pill overflow-hidden"
                        style={{ 
                          height: '8px',
                          backgroundColor: '#2a2a2a'
                        }}
                      >
                        <div 
                          className="h-100 rounded-pill"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            background: 'linear-gradient(90deg, #00d4ff, #00ffcc)',
                            transition: 'width 1.5s ease-out',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
