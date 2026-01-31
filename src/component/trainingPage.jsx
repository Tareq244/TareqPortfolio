import React from "react";
import "./trainingPage.css";
import trainingImg from "../assets/api.png";

const TrainingPage = React.forwardRef((props, ref) => {
  const courses = [
    { name: "ASP.NET", provider: "The Hope", pdf: "/certificate_Asp.Net.pdf" },
    { name: "Angular Course", provider: "Maaref Platform" },
    {
      name: "Flutter Course",
      provider: "Efe organization",
      pdf: "/efe-Flutter.jpg",
    },
    {
      name: "Build 20 Frontend Websites (HTML, CSS, JavaScript)",
      provider: "Udemy",
      pdf: "/WebProject.pdf",
    },
    { name: "React.js Course", provider: "Maaref Platform" },
    { name: "SQL Server Course", provider: "YouTube" },
    {
      name: "HTML5, CSS, JavaScript",
      provider: "Orange academy",
      pdf: "/orange.pdf",
    },
    {
      name: "OWASP",
      provider: "EMAN",
      pdf: "Security.pdf",
    },
    { name: "Backend Developer", provider: "EMAN", pdf: "voulnteer.pdf" },
    { name: "Machine Learning", provider: "The Hope" },
    { name: "Java script", provider: "Udemy" },
    { name: "Communication", provider: "Accenture", pdf: "/Communication.pdf"},
    { name: "Be Digital", provider: "Accenture", pdf: "/Be-Digital.pdf"},
    { name: "Ilhame", provider: "EFE", pdf: "/efe-Ilhame.jpg"},
  ];

  return (
    <div className="training-page" ref={ref}>
      <div className="training-image-placeholder">
        <img
          src={trainingImg}
          alt="Training Courses"
          className="training-image"
        />
      </div>

      <h3 className="training-section-title">
        TRAINING COURSES
        <span
          style={{
            fontSize: "10px",
            fontWeight: "normal",
            color: "gray",
            textTransform: "lowercase",
            paddingBottom: "5px",
            paddingLeft: "5px",
            letterSpacing: "0px",
            fontFamily: "inherit",
          }}
        >
          (Click card to download the certificate)
        </span>
      </h3>

      <div className="courses-grid">
        {courses.map((course, index) => {
          const content = (
            <>
              <div className="course-number">{index + 1}</div>
              <div className="course-details">
                <h4 className="course-name">{course.name}</h4>
                <p className="course-provider">{course.provider}</p>
                {!course.pdf && <span className="no-cert">No Certificate</span>}
              </div>
            </>
          );

          return course.pdf ? (
            <a
              key={index}
              href={course.pdf}
              download
              className="course-card clickable"
            >
              {content}
            </a>
          ) : (
            <div key={index} className="course-card disabled">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default TrainingPage;
