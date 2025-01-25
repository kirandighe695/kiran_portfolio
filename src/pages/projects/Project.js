import React from "react";
import { FaShoppingCart, FaChalkboardTeacher, FaProjectDiagram, FaUsers, FaBuilding, FaDatabase, FaTasks } from "react-icons/fa";
import "../../styles/Project.scss";

function Projects() {
  const projectData = [
    {
      title: "Baap E-commerce Platform",
      description: "A scalable and user-friendly e-commerce platform designed for both small businesses and enterprises, offering advanced features like secure payments, inventory management, and analytics.",
      icon: <FaShoppingCart className="project-icon" />,
    },
    {
      title: "Learning Management System",
      description: "A comprehensive platform to manage and deliver online courses, track learner progress, and enable interactive learning experiences.",
      icon: <FaChalkboardTeacher className="project-icon" />,
    },
    {
      title: "Baap React Schema App",
      description: "A schema-based application built using React, designed for flexibility and adaptability in creating custom solutions.",
      icon: <FaProjectDiagram className="project-icon" />,
    },
    {
      title: "Customer Relationship Management",
      description: "A CRM system to streamline customer interactions, manage sales pipelines, and enhance team collaboration for better customer relationships.",
      icon: <FaUsers className="project-icon" />,
    },
    {
      title: "Simplify VMS",
      description: "An efficient Visitor Management System (VMS) for tracking, registering, and managing visitor records seamlessly.",
      icon: <FaBuilding className="project-icon" />,
    },
    {
      title: "Simplify DSaaS Web",
      description: "A cloud-based Data-as-a-Service (DSaaS) platform enabling efficient data management, storage, and analytics for modern businesses.",
      icon: <FaDatabase className="project-icon" />,
    },
    {
      title: "To-Do List Application",
      description: "A simple and sleek application to manage daily tasks with ease, featuring task prioritization, reminders, and progress tracking.",
      icon: <FaTasks className="project-icon" />,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon-wrapper">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
