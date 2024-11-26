import React, { useState } from "react";
import myImage from "../assets/me.png";
import python from "../assets/python.jpg";
import js from "../assets/javascript.png";
import reactimg from "../assets/react.jpg";
import flaskimg from "../assets/flask.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import mySql from "../assets/mysql.png";
import sqLite from "../assets/sqlite.jpg";
import renderImg from "../assets/render.png";
import Projects from "./Projects";
import Contact from "./Contact"
import "./Homepage.css"

const Homepage = () => {
  const [currentTab, setCurrentTab] = useState("about");
  const renderContent = () => {
    switch (currentTab) {
      case "about":
        return <AboutMe />;
      case "education":
        return <EducationalBackground />;
      case "interests":
        return <Interests />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="homepage-div" >
      <img className="homepage-img" src={myImage} alt="MyImage"/>
      <p className="homepage-name" >Farbean Makini</p>
      <nav className="homepage-nav" >
        <button className="homepage-btn" onClick={() => setCurrentTab("about")}>
          About Me
        </button>
        <button className="homepage-btn" onClick={() => setCurrentTab("education")}>
          Educational Background
        </button>
        <button className="homepage-btn" onClick={() => setCurrentTab("interests")}>
          Interests
        </button>
        <button className="homepage-btn" onClick={() => setCurrentTab("projects")}>
          Projects
        </button>
        <button className="homepage-btn" onClick={() => setCurrentTab("contact")}>
          Contact
        </button>
      </nav>
      <div className="homepage-nav-content" >{renderContent()}</div>
    </div>
  );
};

const AboutMe = () => (
  <div>
    <h2>About Me</h2>
    <p> I’m an aspiring full-stack software developer with a strong foundation in Python and JavaScript. I specialize in building modern, functional, and user-friendly web applications, leveraging Flask for backend development and React for crafting intuitive front-end interfaces. As a beginner in the field, I am driven by a deep passion for learning and continually improving my skills to stay at the forefront of technology.
    I am fascinated by the power of software development to solve real-world problems and make a positive impact on society. Whether it's designing sleek and responsive websites, creating robust backend systems, or integrating cutting-edge APIs, I thrive on challenges and opportunities to bring ideas to life.
    My journey so far has helped me cultivate not only technical expertise but also valuable soft skills. I excel in effective communication, teamwork, and problem-solving, which enable me to work collaboratively and adapt to diverse project environments. I believe that a strong team and clear communication are as crucial as code in building impactful software.
    Beyond my technical and collaborative skills, I am passionate about exploring new technologies and frameworks, constantly seeking opportunities to learn and innovate. My interests extend to enhancing application security, creating scalable solutions, and leveraging technology to address global challenges.
    As I continue my journey in software development, I am excited to collaborate with like-minded individuals, contribute to meaningful projects, and make a lasting impact in the tech world.</p>
    <div className="skills-container">
      <div className="skill-item">
        <img src={python} alt="python-icon" />
        <p>Python</p>
      </div>
      <div className="skill-item">
        <img src={js} alt="javascript-icon" />
        <p>JavaScript</p>
      </div>
      <div className="skill-item">
        <img src={reactimg} alt="react-icon" />
        <p>React</p>
      </div>
      <div className="skill-item">
        <img src={flaskimg} alt="flask-icon" />
        <p>Flask</p>
      </div>
      <div className="skill-item">
        <img src={htmlImg} alt="html-icon" />
        <p>HTML</p>
      </div>
      <div className="skill-item">
        <img src={cssImg} alt="css-icon" />
        <p>CSS</p>
      </div>
      <div className="skill-item">
        <img src={sqLite} alt="sqlite-icon" />
        <p>SQLite</p>
      </div>
      <div className="skill-item">
        <img src={mySql} alt="mysql-icon" />
        <p>MySQL</p>
      </div>
      <div className="skill-item">
        <img src={renderImg} alt="render-icon" />
        <p>Render Hosting</p>
      </div>
    </div>
  </div>
);

const EducationalBackground = () => (
  <div>
    <h2>Educational Background</h2>
    <p>I began my journey in software development at Moringa School, where I gained foundational knowledge in building modern websites using Python, Flask, JavaScript, HTML, and CSS. In 2024, I proudly earned my certification as a software engineer, completing numerous projects and expanding my skills through hands-on learning. To further enhance my expertise, I joined PLP Academy, where I am currently deepening my knowledge of software engineering by exploring new technologies and languages like Flutter and Dart to build mobile applications. My learning journey is ongoing, and I am excited to continue growing as a developer.</p>
    <a id="cv-link" href="path-to-your-cv/cv.pdf" download="YourName_CV" class="download-btn">Download My CV</a>
    <div class="experience-container">
      <div class="experience-item">
        <p>
          <strong>1+</strong><br />
          year's experience
        </p>
      </div>
      <div class="experience-item">
        <p>
          <strong>2</strong><br />
          completed projects
        </p>
      </div>
    </div>
  </div>
);

const Interests = () => (
  <div class="interests-section">
    <h2 class="interests-heading">Interests</h2>
    <p class="interests-intro">
      I have a deep passion for computer-related activities, especially coding, gaming, and studying the latest technological advancements. Whether I’m writing code to solve complex problems or immersing myself in a thrilling game, I find excitement and inspiration in the digital world.
    </p>
    <p class="interests-intro">
      In addition to my love for technology, I enjoy traveling to new places to explore different cultures and broaden my perspective. When I’m not coding or traveling, you’ll likely find me on the tennis court, enjoying the sport and staying active.
    </p>
    <ul class="hobbies-list">
      <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/></svg><br/>
        Coding</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z"/></svg><br/>
        Gaming</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m590-488 160-92-160-92-160 92 160 92Zm0 122 110-64v-84l-110 64-110-64v84l110 64ZM480-480Zm320 320H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm-720 0v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Z"/></svg><br/>
        Exploring new technologies</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v80Zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380q0-75 52.5-127.5T620-560q75 0 127.5 52.5T800-380q0 27-8 51t-20 45l128 128-56 56ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/></svg><br/>
        Traveling</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m137-160-57-56 164-164q31-31 42.5-77.5T298-600q0-58 26-114t74-104q91-91 201-103t181 61q72 72 60 182T738-478q-48 48-104 74t-114 26q-97 0-142 11t-77 43L137-160Zm275-334q47 46 127 34t143-75q64-64 76.5-143.5T724-803q-48-48-125.5-36T456-763q-63 63-76.5 142.5T412-494ZM720-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T720-40Zm0-80q33 0 56.5-23.5T800-200q0-33-23.5-56.5T720-280q-33 0-56.5 23.5T640-200q0 33 23.5 56.5T720-120Zm0-80Z"/></svg><br/>
        Tennis</li>
    </ul>
  </div>
);

export default Homepage;