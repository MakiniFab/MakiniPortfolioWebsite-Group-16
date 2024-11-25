import React, { useState } from "react";

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
    <div>
      <nav>
        <button onClick={() => setCurrentTab("about")}>
          About Me
        </button>
        <button onClick={() => setCurrentTab("education")}>
          Educational Background
        </button>
        <button onClick={() => setCurrentTab("interests")}>
          Interests
        </button>
        <button onClick={() => setCurrentTab("projects")}>
          Projects
        </button>
        <button onClick={() => setCurrentTab("contact")}>
          Contact
        </button>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
};

const AboutMe = () => (
  <div>
    <h2>About Me</h2>
    <p>This is the About Me section.</p>
  </div>
);

const EducationalBackground = () => (
  <div>
    <h2>Educational Background</h2>
    <p>This is the Educational Background section.</p>
  </div>
);

const Interests = () => (
  <div>
    <h2>Interests</h2>
    <p>This is the Interests section.</p>
  </div>
);

export default Homepage;