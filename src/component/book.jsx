import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './book.css';

import Cover from './cover.jsx';
import Summary from './summary.jsx';
import EducationPage from './educationPage.jsx';
import ExperiencePage from './experiencePage.jsx';
import TrainingPage from './trainingPage.jsx';
import VolunteerPage from './volunteerPage.jsx';
import ProjectPage from './ProjectsPage.jsx';
import SoftSkills from './softskills.jsx';
import Technicalskills from './technicalskills.jsx';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            {props.children}
        </div>
    );
});

function Book() {
    return (
        <div className="book-viewport">
            <HTMLFlipBook 
                width={400} 
                height={550}
                showCover={true} 
                flippingTime={1000} 
                maxShadowOpacity={0.5} 
                className="flip-book" 
            >
                <Page number="1"><Cover /></Page>
                <Page number="2"><Summary /> </Page>
                <Page number="3"><EducationPage /> </Page>
                <Page number="4"><ExperiencePage /></Page>
                <Page number="5"><TrainingPage /></Page>
                <Page number="6"><VolunteerPage /></Page>
                <Page number="7"><ProjectPage /> </Page>
                <Page number="8"><SoftSkills /></Page>
                <Page number="9"><Technicalskills /> </Page>
                <Page number="10"><Cover /></Page>
            </HTMLFlipBook>
        </div>
    );
}

export default Book;
