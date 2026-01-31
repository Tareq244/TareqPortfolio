import React from "react";
import "./projectsPage.css";
import { href } from "react-router-dom";

const ProjectsPage = React.forwardRef((props, ref) => {
  const projects = [
    {
      name: "E-Commerce",
      details: [
        "Dashboard using MVC",
        "Backend using ASP.NET APIs",
        "Frontend using Angular 20",
        "Database using SQL Server",
      ],
      link: true,
      href: "https://github.com/Tareq244/E-commerce"
    },
    {
      name: "petite-prix",
      details: [
        "React 19 Vite",
        "Turning stories into interactive web projects",
        "Deployed and accessible via LMS System",
      ],
      link: true,
      href: "https://petite-pre.vercel.app/"
    },
    {
      name: "Mindful",
      details: [
        "React 19 Vite",
        "Turning Videos into interactive web projects",
        "Deployed and accessible via LMS System",
      ],
      link: true,
      href: "#"
    },
    {
      name: "livefeed",
      details: [
        "WinForms application",
        "Connecting phone camera to the system for live streaming",
        "Real-time feed integrated into desktop interface",
      ],
      link: true,
      href: "https://github.com/Tareq244/LiveFeed"
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

            {project.details && (
  <div className="project-details">
    {project.details.map((detail, idx) => (
      <div key={idx} className="project-detail-item">
        <span className="detail-dot">•</span>
        <span>{detail}</span>
      </div>
    ))}
  </div>
)}

{project.href && (
  <a
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    className="cv-links"
  >
    <div className="project-link-indicator">
      <span className="link-icon">🔗</span>
      <span className="link-text">View Project</span>
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
