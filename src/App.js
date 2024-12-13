import React from 'react';
import './App.css';
import Vishu01Image from './Image/Vishu01.jpg'; // Replace with the image you want to use

function App() {
  return (
    <div className="resume-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-section">
          <img src={Vishu01Image} alt="Profile" className="profile-image" />
          <h2 className="name">Aryan Saini</h2>
          <p className="contact">8534013439</p>
          <p className="contact">aryansaini853401@gmail.com</p>
          <p className="contact">LinkedIn</p>
        </div>
        <div className="skills-section">
          <h3>SKILLS</h3>
          <ul>
            <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, Node.js</li>
            <li><strong>Databases:</strong> MySQL</li>
            <li><strong>Tools:</strong> Git, Github</li>
            <li><strong>Others:</strong> Data Structures, Algorithms, Object-Oriented Programming</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <section className="objective">
          <h3>OBJECTIVE</h3>
          <p>
            Aspiring IT professional with a strong foundation in computer science and hands-on experience
            in software development through academic projects. Eager to contribute innovative solutions and
            grow in a dynamic tech environment.
          </p>
        </section>

        <section className="education">
          <h3>EDUCATION</h3>
          <p>
            <strong>BTech in Computer Science and Engineering</strong> <br />
            ABC Institute of Technology, New Delhi — Jun, 2019 - Jun, 2023 <br />
            Graduated with 8.5 CGPA
          </p>
        </section>

        <section className="certifications">
          <h3>CERTIFICATIONS</h3>
          <ul>
            <li>Java Script Programming Certification</li>
            <li>Web Development with React</li>
          </ul>
        </section>

        <section className="internships">
          <h3>INTERNSHIPS</h3>
          <p><strong>Software Development Intern</strong> at Okh Soft Solutions, Saharanpur — Apirl, 2024 - March, 2025git --version
</p>
          <ul>
            <li>Assisted in developing and testing a client project using Python and Django.</li>
            <li>Collaborated with a team of 5 to streamline the deployment process.</li>
          </ul>
        </section>

        <section className="projects">
          <h3>ACADEMIC PROJECTS</h3>
          <p><strong>Inventory Management System (Final Year Project)</strong></p>
          <ul>
            <li>Developed a web-based application to manage inventory for small businesses using Java and MySQL.</li>
            <li>Implemented features like product tracking, order management, and sales reporting.</li>
          </ul>
          <p><strong>Personal Blog Website</strong></p>
          <ul>
            <li>Designed and developed a personal blog using React and Node.js.</li>
            <li>Integrated a user-friendly CMS and implemented SEO best practices.</li>
          </ul>
        </section>

        <section className="activities">
          <h3>EXTRACURRICULAR ACTIVITIES</h3>
          <ul>
            <li>Member of the Computer Science Club, ABC Institute of Technology.</li>
            <li>Volunteered in 'Code for Good' event, developing software solutions for non-profits.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
