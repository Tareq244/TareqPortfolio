import React from 'react';
import './trainingPage.css';
// import trainingImg from '../assets/api.png';

const Technicalskills = React.forwardRef((props, ref) => {
  const courses = [
    { name: "C#" },
    { name: "HTML5" },
    { name: "CSS" },
    { name: "ASP.NET"},
    { name: "Angular" },
    { name: "Javascript" },
    { name: "MS SQL Server"},
    { name: "Flutter" },
    { name: "Docker" },
    { name: "Framworks" },
  ];

  return (
    <div className="training-page" ref={ref}>
      {/* <div className="training-image-placeholder">
        <img src={trainingImg} alt="Training Courses" className="training-image" />
      </div> */}

      <h3 className="training-section-title">TRAINING COURSES</h3>
      
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-number">{index + 1}</div>
            <div className="course-details">
              <h4 className="course-name">{course.name}</h4>
              {/* <p className="course-provider">{course.provider}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Technicalskills;