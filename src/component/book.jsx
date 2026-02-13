import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Cover from "./cover.jsx";
import Summary from "./summary.jsx";
import EducationPage from "./educationPage.jsx";
import ExperiencePage from "./experiencePage.jsx";
import TrainingPage from "./trainingPage.jsx";
import VolunteerPage from "./volunteerPage.jsx";
import ProjectPage from "./ProjectsPage.jsx";
import SoftSkills from "./softskills.jsx";
import Technicalskills from "./technicalskills.jsx";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {props.children}
    </div>
  );
});

function Book() {
  const bookRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="book-viewport">
      {!isMobile && (
      <button onClick={prevPage} className="nav-btn left">
        <ChevronLeft size={28} />
      </button>)}
      <HTMLFlipBook
        ref={bookRef}
        width={isMobile ? 280 : 400}
        height={isMobile ? 400 : 550}
        showCover={true}
        flippingTime={1000}
        maxShadowOpacity={0.5}
        startPage={0}
        disableFlipByClick={true}
        className="flip-book"
      >
        <Page>
          <Cover />
        </Page>
        <Page>
          <Summary />
        </Page>
        <Page>
          <EducationPage />
        </Page>
        <Page>
          <ExperiencePage />
        </Page>
        <Page>
          <TrainingPage />
        </Page>
        <Page>
          <VolunteerPage />
        </Page>
        <Page>
          <ProjectPage />
        </Page>
        <Page>
          <SoftSkills />
        </Page>
        <Page>
          <Technicalskills />
        </Page>
        <Page>
          <Cover />
        </Page>
      </HTMLFlipBook>
      {!isMobile &&(
      <button onClick={nextPage} className="nav-btn right">
        <ChevronRight size={28} />
      </button>)}
    </div>
  );
}

export default Book;
