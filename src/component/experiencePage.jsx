import React from 'react';
import './experiencePage.css';
import experienceImg from '../assets/bytech.jpeg';
const ExperiencePage = React.forwardRef((props, ref) => {
  return (
    <div className="experience-page" ref={ref}>
      <h3 className="experience-section-title">EXPERIENCE</h3>
      
      <div className="experience-layout">
        <div className="experience-image-section">
          <div className="experience-image-placeholder">
            <img src={experienceImg} alt="Work Experience" className="experience-image" />
          </div>
        </div>
        {/* القسم الأيسر - المعلومات */}
        <div className="experience-info">
          <div className="company-header">
            <h4 className="company-name">Bytech</h4>
            <p className="job-title">Fullstack Developer</p>
            <p className="job-period">Oct 2024 – Present</p>
          </div>

          <ul className="experience-list">
            <li>Worked on interactive LMS (Learning Management System) projects focused on user engagement and dynamic content.</li>
            <li>Good experience in .NET for backend development and API integration.</li>
            <li>Built modern and responsive frontend interfaces using the latest web technologies.</li>
            <li>Developed and maintained interactive and educational web systems with a focus on performance and usability.</li>
            <li>Collaborated on full project cycles — from database design to frontend interaction.</li>
            <li>Passionate about creating innovative, user-centered web solutions.</li>
            <li>Experienced with multiple frontend frameworks, with most projects built using React.js.</li>
          </ul>
        </div>

      </div>
    </div>
  );
});

export default ExperiencePage;