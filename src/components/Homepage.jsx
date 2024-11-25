import React, { useState } from "react";
import myImage from "../assets/me.png";
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
      <img className="homepage-img" src={myImage} alt="MyImage" style={{ width: "150px" }}/>
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
    As I continue my journey in software development, I am excited to collaborate with like-minded individuals, contribute to meaningful projects, and make a lasting impact in the tech world. Let’s build something amazing together!</p>
  </div>
);

const EducationalBackground = () => (
  <div>
    <h2>Educational Background</h2>
    <p>I began my educational journey at Starehe Boys Centre and School, where I built a strong foundation for my academic and personal growth. After completing my secondary education, I joined Moi University, where I am currently pursuing a Bachelor of Science (BSc), focusing on expanding my knowledge in technology and software development.
    In 2023, I took my passion for coding to the next level by enrolling at Moringa School, where I became a certified software engineer. During my time there, I honed my skills in full-stack development, working with technologies such as Python, JavaScript, Flask, and React. This training solidified my commitment to building impactful software solutions.
    Currently, I am studying with PLP Africa Community Group, where I am continuing to develop and refine my software development skills. This ongoing education allows me to stay current with industry trends and further my goal of becoming a proficient and versatile software developer.</p>
    <p>Link to my cv</p>
  </div>
);

const Interests = () => (
  <div>
    <h2>Interests</h2>
    <p>
    I have a deep passion for computer-related activities, especially coding, gaming, and studying the latest technological advancements. Whether I’m writing code to solve complex problems or immersing myself in a thrilling game, I find excitement and inspiration in the digital world. In addition to my love for technology, I enjoy traveling to new places to explore different cultures and broaden my perspective. When I’m not coding or traveling, you’ll likely find me on the tennis court, enjoying the sport and staying active. These hobbies not only keep me balanced but also fuel my creativity and drive in both my personal and professional life.</p>
  </div>
);

export default Homepage;