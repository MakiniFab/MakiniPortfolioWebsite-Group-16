import React from 'react';
import eCommerce from "../assets/e-com.png";
import noteBook from "../assets/notebook.png";
import Bobby from "../assets/bobby.png";
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Uni-Mall',
      description: 'This modern e-commerce platform delivers a seamless online shopping experience by combining cutting-edge technology with user-centric design. Built with a Flask-powered backend and a React front end, the app is secure, scalable, and feature-rich. It allows new users to sign up and registered users to log in or log out, with all authentication secured using JSON Web Tokens (JWT) for enhanced safety. PostgreSQL is used to store essential data, including user information, product details, payment records, and order history, ensuring reliability and scalability. The app integrates the M-Pesa Daraja API, enabling users to make and verify secure payments with ease. Its responsive design, created with React and styled using CSS, ensures compatibility across multiple screen sizes, delivering a consistent and intuitive experience on desktops, tablets, and mobile devices. Additionally, email integration is in progress, which will provide users with notifications about orders, payments, and other updates. This platform is a robust and reliable solution, showcasing the effective combination of Flask, React, and PostgreSQL to meet modern e-commerce needs.',
      imageUrl: eCommerce, 
      projectLink: 'https://unimall.onrender.com/', 
    },
    {
      title: 'Notebook App',
      description: 'This notebook app is a simple yet powerful tool for managing notes and staying inspired. Users can easily add new notes to organize their thoughts, tasks, or ideas. Existing notes can be edited or deleted, providing flexibility and control over their content. To make the experience even more engaging, the app displays a daily motivational quote to inspire users and help them stay focused and positive. With its intuitive interface and practical functionality, this app is the perfect companion for productivity and personal growth.',
      imageUrl: noteBook,
      projectLink: 'https://notebook-kg6w.onrender.com/',
    },
    {
      title: 'Bobby Gaming Site',
      description: 'This gaming site offers an exciting and secure platform for users to engage in competitive fun while staking and winning real rewards. Users can sign up, log in, and log out, with all authentication protected by JSON Web Tokens (JWT) to ensure account security. The site features an innovative pairing system that matches players based on their staked amounts. Once paired, players compete by clicking a spinning wheel, and the first to act determines the outcome. The winner receives double the amount they staked, making each game thrilling and rewarding. With its engaging gameplay and secure design, this gaming site delivers an immersive and safe competitive experience.',
      imageUrl: Bobby,
      projectLink: 'https://example.com/gaming', 
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <p>{project.description}</p>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
