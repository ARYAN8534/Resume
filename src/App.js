import React from 'react';
import './App.css';
import Vishu02Image from './Image/Vishu02.jpg'; // Replace with the image you want to use

function App() {
  return (
    <div className="resume-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-section">
          <img src={Vishu02Image} alt="Profile" className="profile-image" />
          <h2 className="name">Aryan Saini</h2>
          <p className="contact">Mobile No: 8534013439</p>
          <p className="contact">Email Id: aryansaini853401@gmail.com</p>
          
        </div>
        <div className="skills-section">
          <h3>SKILLS</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVA SCRIPT</li>
            <li>JQUERY</li>
            <li>REACT</li>
            <li>AJAX</li>
            <li>MYSQL</li>
            <li>NODE.JS</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
      <section className="objective">
  <h3>OBJECTIVE</h3>
  <p>
 
    I am an aspiring IT professional with a strong background in computer science. I have worked on software development through academic projects and am eager to apply my skills in a real-world setting. I enjoy building websites that are easy to use and work well on different devices. I am excited to keep learning and improving my skills in web development.
  

  </p>
</section>


        <section className="education">
          <h3>EDUCATION</h3>
          <p>
            <strong>Bachelor of Computer Applications (BCA)</strong> <br />
            Mangalayatan University - Current, Aligarh — Jan, 2023 - Jun, 2026 <br />
            Graduated with 8.0 CGPA <br /><br />
            <strong>12th Grade - UP Board</strong> <br />
            NJI College, Saharanpur — 2020, 66.33% <br /><br />
            <strong>10th Grade - UP Board</strong> <br />
            NJI College, Saharanpur — 2018, 77.33%
          </p>
        </section>

        <section className="certifications">
          <h3>CERTIFICATIONS</h3>
          <ul>
            <li>Java Script Programming Certification</li>
            <li>Web Development with React</li>
            <li>Certified in MySQL Database Management</li>
            <li>Full Stack Web Development Bootcamp</li>
          </ul>
        </section>

        <section className="internships">
          <h3>INTERNSHIPS</h3>
          <p><strong>Software Development Intern</strong> at Ok Soft Solution, Saharanpur — Apirl, 2024 - March, 2025</p>
          <ul>
            <li>Developed and maintained web applications using React.js, HTML, CSS, and JavaScript during training at OK Soft Solutions.</li>
            <li>Collaborated with peers to build interactive and responsive UI components, ensuring seamless user experience.</li>
            <li>Worked on integrating dynamic features like form handling, routing, and state management to improve functionality.</li>
          </ul>
        </section>

        <section className="projects">
  <h3>ACADEMIC PROJECTS</h3>

  <p><strong>Chess Game</strong></p>
  <ul>
    <li>Developed a fully functional chess game using JavaScript and HTML5 Canvas.</li>
    <li>Implemented game logic, player turns, and a user-friendly interface for playing the game.</li>
  </ul>

  <p><strong>Memory Matching Game</strong></p>
  <ul>
    <li>Created a memory matching game using JavaScript, HTML, and CSS for a fun and interactive user experience.</li>
    <li>Designed the game layout with cards that flip upon interaction, requiring players to match pairs.</li>
  </ul>

  <p><strong>Typing Speed Project</strong></p>
  <ul>
    <li>Implemented features to display words per minute (WPM), errors, and time taken to type.</li>
    <li>Introduced a random key typing feature to further test and improve typing speed and accuracy.</li>
  </ul>
</section>


       
      </div>
    </div>
  );
}

export default App;
