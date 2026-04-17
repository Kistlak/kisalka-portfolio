import p1 from '../../../assets/images/projects/P1.PNG';
import p2 from '../../../assets/images/projects/P2.PNG';
import p3 from '../../../assets/images/projects/P3.PNG';
import p4 from '../../../assets/images/projects/P4.PNG';
import p5 from '../../../assets/images/projects/P5.PNG';
import p6 from '../../../assets/images/projects/P6.PNG';
import p7 from '../../../assets/images/projects/P7.PNG';

export default function Projects() {
  const projects = [
    {
      title: 'Story of Glory - Wedding & Preshoot Photography',
      description: 'An elegant website for a UK-based wedding and pre-shoot photography brand, designed to showcase their portfolio and let couples easily explore packages and book sessions. Built with a clean, gallery-focused layout that puts the imagery front and center.',
      image: p1,
      technologies: ['Laravel', 'Laravel Backpack', 'Redis', 'MySQL', 'AWS'],
      github: 'https://github.com/Kistlak/story-of-glory',
      demo: 'https://www.storyofglory.co.uk/'
    },
    {
      title: 'My Own Portfolio : Yes, this site',
      description: 'A responsive personal portfolio showcasing my work, skills, and experience as a software engineer. Built with React and deployed on Netlify, featuring a clean, modern design that highlights projects and makes it easy for visitors to get in touch.',
      image: p2,
      technologies: ['React', 'Netlify', 'Formspree'],
      github: 'https://github.com/Kistlak/kisalka-portfolio',
      demo: 'https://kisalka-portfolio.netlify.app/'
    },
    {
      title: 'Bandula Sale Center - Ecommerce web site with Laravel and MySql',
      description: 'An e-commerce website built for a retail business, allowing customers to browse products, manage carts, and place orders online. Developed with Laravel and MySQL, featuring a clean storefront and an admin dashboard for managing inventory and orders.',
      image: p3,
      technologies: ['Laravel', 'Docker', 'Redis', 'MySQL', 'DigitalOcean'],
      github: 'https://github.com/Kistlak/bandula-sale-center',
      demo: '#'
    },
    {
      title: 'Air Ticket Reservation - Admin Dashboard',
      description: 'An admin dashboard for managing an air ticket reservation and booking system, enabling staff to handle flights, bookings, and customer data efficiently. Built with Laravel, Angular 8, and MySQL, with a focus on streamlined workflows and real-time data management.',
      image: p4,
      technologies: ['Laravel', 'Angular 8', 'MySQL', 'AWS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Sri Lankan Train Schedules Finder',
      description: 'A web application that helps users quickly search and view train schedules across Sri Lanka, making travel planning simple and accessible. Built with Laravel and MySQL, and integrated with REST APIs to deliver accurate, up-to-date schedule information.',
      image: p5,
      technologies: ['Laravel', 'MySQL'],
      github: 'https://github.com/Kistlak/SLRailway',
      demo: '#'
    },
    {
      title: 'Lawyer Norman',
      description: 'A professional website for a legal practice, showcasing services, expertise, and contact details to help potential clients connect easily. Built with Angular 9 and integrated with an email REST API to handle client inquiries directly through the site.',
      image: p6,
      technologies: ['Laravel', 'MySQL', 'Formspree'],
      github: 'https://github.com/Kistlak/LawyerNorman',
      demo: '#'
    },
    {
      title: 'Air Ticket Reservation & Booking System',
      description: "A full-featured flight booking platform that lets users search flights, compare fares, and complete reservations online. Built with Laravel and MySQL, and integrated with Sabre & Amadeus REST and SOAP APIs to deliver real-time flight data and secure booking functionality.",
      image: p7,
      technologies: ['Laravel', 'MySQL', 'Redis', 'MySQL'],
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
          {projects.map((project, index) => (
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
                    src={project.image}
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
                    {(project.github !== '#' && project.github !== '') &&
                      <a
                        href={project.github}
                        className="text-decoration-none d-flex align-items-center gap-2"
                        style={{ color: '#00d4ff', fontSize: '0.95rem' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#00ffcc'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#00d4ff'}
                        target='_blank'
                      >
                        <i className="fab fa-github"></i>
                        <span>Code</span>
                      </a>
                    }

                    {(project.demo !== '#' && project.demo !== '') &&
                      <a
                        href={project.demo}
                        className="text-decoration-none d-flex align-items-center gap-2"
                        style={{ color: '#00d4ff', fontSize: '0.95rem' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#00ffcc'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#00d4ff'}
                        target='_blank'
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    }

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
