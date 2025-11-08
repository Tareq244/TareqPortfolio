import React from 'react';
import './trainingPage.css';
import trainingImg from '../assets/api.png';

const TrainingPage = React.forwardRef((props, ref) => {
  const courses = [
    { name: "ASP.NET", provider: "The Hope" },
    { name: "Angular Course", provider: "Maaref Platform" },
    { name: "Flutter Course", provider: "Efe organization" },
    { name: "Build 20 Frontend Websites (HTML, CSS, JavaScript)", provider: "Udemy" },
    { name: "React.js Course", provider: "Maaref Platform" },
    { name: "SQL Server Course", provider: "YouTube" },
    { name: "HTML5, CSS, JavaScript", provider: "Orange academy" }
  ];

  return (
    <div className="training-page" ref={ref}>
      <div className="training-image-placeholder">
        <img src={trainingImg} alt="Training Courses" className="training-image" />
      </div>

      <h3 className="training-section-title">TRAINING COURSES</h3>
      
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-number">{index + 1}</div>
            <div className="course-details">
              <h4 className="course-name">{course.name}</h4>
              <p className="course-provider">{course.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TrainingPage;