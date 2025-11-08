import React from 'react';
import './educationPage.css';
import universityImg from '../assets/wise.png';
const EducationPage = React.forwardRef((props, ref) => {
  return (
    <div className="education-page" ref={ref}>
      <div className="education-image-placeholder">
        <img src={universityImg} alt="University" className="education-image" />
      </div>

      <div className="education-content">
        <h3 className="education-section-title">EDUCATION</h3>
        
        <div className="education-item">
          <h4 className="university-name">WISE University</h4>
          <p className="degree">Bachelor of Computer Science</p>
          <p className="years">2020 - 2024</p>
        </div>

        <div className="education-description">
          <p>
            "I graduated with a Bachelor's degree in Computer Science. During my studies, I gained strong foundations in programming, including object-oriented programming (OOP) concepts, which allowed me to design modular and maintainable software solutions. I am proficient in languages such as C#, Java, and JavaScript, and have hands-on experience in building interactive web applications using HTML, CSS, and modern frameworks. My education and training have equipped me with problem-solving skills, logical thinking, and the ability to develop efficient and scalable software systems."
          </p>
        </div>
      </div>
    </div>
  );
});

export default EducationPage;