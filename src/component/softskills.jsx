import React from 'react';
import './trainingPage.css';
// import trainingImg from '../assets/api.png';

const SoftSkills = React.forwardRef((props, ref) => {
  const courses = [
    { name: "Communication" },
    { name: "Time management" },
    { name: "Program Languages" },
    { name: "Fast learning" },
    { name: "Flexiblity" },
    { name: "Problem Solving" },
    { name: "Research" },
    { name: "Analytical thinking" },
    { name: "Computer Skills" }
  ];

  return (
    <div className="training-page" ref={ref}>
      {/* <div className="training-image-placeholder">
        <img src={trainingImg} alt="Training Courses" className="training-image" />
      </div> */}

      <h3 className="training-section-title">SOFT SKILLS</h3>
      
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-number">{index + 1}</div>
            <div className="course-details">
              <h4 className="course-name">{course.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default SoftSkills;