import React from 'react';
import './summary.css';

const Summary = React.forwardRef((props, ref) => {
  return (
    <div className="cv-page" ref={ref}>
      <div className="cv-header">
        <h1 className="cv-name">TAREQ RIAD ALSADAQA</h1>
        <h2 className="cv-title">SOFTWARE DEVELOPER</h2>
      </div>

      <div className="cv-contact">
        <p>Amman - Jordan</p>
        <p>+962 799297788</p>
        <p>tareq.alsadaqa1@gmail.com</p>
        <div className="cv-links">
          <a href="https://www.linkedin.com/in/tareq-alsadaqa-52098032a/" target="_blank">LinkedIn</a>
          <span>||</span>
          <a href="https://github.com/Tareq244" target="_blank">GitHub</a>
          <span>||</span>
          <a href="#" target="_blank">Portfolio</a>
        </div>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">PROFESSIONAL SUMMARY</h3>
        <p className="cv-text">
          Motivated and detail-oriented Junior Software Developer with a solid foundation in software development
          and problem-solving. Experienced in designing, developing, and testing interactive and modern web
          applications. Skilled in working with multiple technologies and passionate about building engaging digital
          solutions. Quick learner with strong teamwork, analytical, and communication skills, eager to grow within a
          collaborative and forward-thinking development team.
        </p>
      </div>
    </div>
  );
});

export default Summary;