import React from "react";
import {
  FaShoppingCart,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaBuilding,
  FaDatabase,
  FaTasks,
  FaTicketAlt,
  FaLongArrowAltRight,
} from "react-icons/fa";
import "../../styles/Project.scss";

function Projects() {
  const projectData = [
    {
      title: "Baap E-commerce Platform",
      description: "A scalable and user-friendly e-commerce platform designed for both small businesses and enterprises, offering advanced features like secure payments, inventory management, and analytics.",
      icon: <FaShoppingCart className="project-icon" />,
      link: "https://commerce-dev.baap.market/"
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
      title: "Simplify VMS",
      description: "An efficient Visitor Management System (VMS) for tracking, registering, and managing visitor records seamlessly.",
      icon: <FaBuilding className="project-icon" />,
      link: "https://dev-account.simplifysandbox.net"
    },
    {
      title: "Simplify DSaaS Web",
      description: "A cloud-based Data-as-a-Service (DSaaS) platform enabling efficient data management, storage, and analytics for modern businesses.",
      icon: <FaDatabase className="project-icon" />,
      link: "https://keycloak.ingress-qa.simplifyvmsapp.com/auth/realms/dsaas-qa/protocol/openid-connect/auth?client_id=dsaas-enterprise-web&redirect_uri=https%3A%2F%2Fqa-enterprise-dsaas.simplifysandbox.net%2Fenterprise%2Fmy-candidate&state=54a3340c-dae1-4242-ad81-fa30bc6fd982&response_mode=fragment&response_type=code&scope=openid&nonce=1bd90397-5b17-4590-8330-772a63a672d1"
    },
    {
      title: "To-Do List Application",
      description: "A simple and sleek application to manage daily tasks with ease, featuring task prioritization, reminders, and progress tracking.",
      icon: <FaTasks className="project-icon" />,
      link: "https://daily-task-management-a90ad.firebaseapp.com/",
    },
    {
      title: "Event Ticketing Application",
      description: "Events ticketing tools are systems that manage customer service and events tracking.",
      icon: <FaTicketAlt className="project-icon" />,
      link: "https://website-d45a5.firebaseapp.com/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon-wrapper">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow">
                <FaLongArrowAltRight className="arrow-icon" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
