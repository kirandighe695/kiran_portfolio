import React from "react";
import "../../styles/Resume.scss";

function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="resume-container">
                <div className="resume-intro">
                    <h2>My Resume</h2>
                    <p>
                        Here’s a brief overview of my background, skills, and experiences. You can download my full resume for more details.
                    </p>
                    <a href="/path-to-your-resume.pdf" download className="download-btn">
                        Download Resume
                    </a>
                </div>

                <div className="resume-section">
                    <h3>Skills</h3><hr />
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>HTML & CSS</li>
                        <li>Firebase</li>
                        <li>Git & GitHub</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>

                <div className="resume-section">
                    <h3>Experience</h3><hr />
                    <div className="experience-item">
                        <h4>Frontend Developer</h4>
                        <p>The BAAP Company | Jan 2022 - Present</p>
                        <ul>
                            <li>Developed and maintained scalable React applications.</li>
                            <li>Collaborated with designers to create responsive UI designs.</li>
                            <li>Implemented efficient state management using Redux.</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h4>Web Development Intern</h4>
                        <p>The BAAP company | Aug 2022 - Jan 2023</p>
                        <ul>
                            <li>Created responsive landing pages using HTML, CSS, and JavaScript.</li>
                            <li>Assisted in integrating APIs with frontend applications.</li>
                        </ul>
                    </div>
                </div>

                <div className="resume-section">
                    <h3>Education</h3><hr />
                    <div className="education-item">
                        <h4>Bachelor of Technology in Computer Science</h4>
                        <p>University of Mysure | 2022 - 2026</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
