import React from "react";
import "./projectsPage.css";

const ProjectsPage = React.forwardRef((props, ref) => {
  const projects = [
    {
      name: "E-Commerce",
      details: [
        "Dashboard using MVC",
        "Backend using ASP.NET APIs",
        "Frontend using Angular 20",
      ],
    },
    {
      name: "petite-prix",
      link: true,
    },
    {
      name: "Mindful",
      link: true,
    },
    {
      name: "livefeed",
      link: true,
    },
  ];

  return (
    <div className="projects-page" ref={ref}>
      <h3 className="projects-section-title">PROJECTS</h3>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-icon">🚀</div>
              <h4 className="project-name">{project.name}</h4>
            </div>

            {project.details ? (
              <div className="project-details">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="project-detail-item">
                    <span className="detail-dot">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            ) : (
              <a
                href="https://github.com/Tareq244"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-links"
              >
                <div className="project-link-indicator">
                  <span className="link-icon">🔗</span>
                  <span className="link-text">Web Application</span>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProjectsPage;
