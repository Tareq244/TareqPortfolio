import React from 'react';
import './volunteerPage.css';
import volunteerImg from '../assets/imman.jpeg';
const VolunteerPage = React.forwardRef((props, ref) => {
  return (
    <div className="volunteer-page" ref={ref}>
      <h3 className="volunteer-section-title">VOLUNTEER EXPERIENCE</h3>

      <div className="volunteer-content">
        <div className="volunteer-header">
          <div className="volunteer-icon">
            <span>💙</span>
          </div>
          <div className="volunteer-info">
            <h4 className="organization-name">Iman For Education and Vocational Training</h4>
            <p className="volunteer-role">Backend Developer (Volunteer)</p>
          </div>
        </div>

        <div className="volunteer-description">
          <p className="intro-text">
            Contributed as a volunteer backend developer to a charitable e-commerce platform, 
            enhancing API and C# skills while supporting a social mission.
          </p>

          <div className="responsibilities">
            <div className="responsibility-item">
              <div className="bullet-icon">⚡</div>
              <p>Developed and deployed backend services and RESTful APIs using .NET Core, Entity Framework Core, and SQL Server.</p>
            </div>
            <div className="responsibility-item">
              <div className="bullet-icon">⚡</div>
              <p>Managed database operations and ensured system performance, deploying services on Railway with Docker.</p>
            </div>
          </div>
        </div>

        {/* مكان الصورة */}
        <div className="volunteer-image-placeholder">
          <img src={volunteerImg} alt="Volunteer Work" className="volunteer-image" />
        </div>
      </div>
    </div>
  );
});

export default VolunteerPage;