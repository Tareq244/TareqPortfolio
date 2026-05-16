import React from 'react';
import './experiencePage.css';
import experienceImg from '../assets/gs1.jpg';
const ExperiencePage1 = React.forwardRef((props, ref) => {
  return (
    <div className="experience-page" ref={ref}>
      <h3 className="experience-section-title">EXPERIENCE</h3>
      
      <div className="experience-layout">
        <div className="experience-image-section">
          <div className="experience-image-placeholder">
            <img src={experienceImg} alt="Work Experience" className="experience1-image" />
          </div>
        </div>
        {/* القسم الأيسر - المعلومات */}
        <div className="experience-info">
          <div className="company-header">
            <h4 className="company-name">GS1</h4>
            <p className="job-title">.NET Developer</p>
            <p className="job-period">April 2026 – Present</p>
          </div>

          <ul className="experience-list">
            <li>Gained hands-on experience at GS1, specializing in barcode standardization and numbering systems.</li>
            <li>Learned about different types of barcodes and their calculation methods.</li>
            <li>Worked on complex and data-intensive processes.</li>
            <li>Contributed to developing applications using ASP.NET MVC.</li>
            <li>Integrated applications with the global numbering system to ensure smooth and accurate operations.</li>
            <li>Worked extensively with Microsoft SQL Server in an internal server environment.</li>
            <li>Helped maintain data security and integrity.</li>
            <li>Focused on accuracy and precision due to the high volume and sensitivity of data.</li>
          </ul>
        </div>

      </div>
    </div>
  );
});

export default ExperiencePage1;