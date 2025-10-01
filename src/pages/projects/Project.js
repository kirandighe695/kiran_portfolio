import {
  FaShoppingCart,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaNetworkWired,
  FaTasks,
  FaTicketAlt,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
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
      title: "Baap Dairy Management",
      description: "A robust dairy management system that streamlines operations, from milk production tracking to inventory and sales management.",
      icon: <GiMilkCarton className="project-icon" />,
    },
    {
      title: "Enterprise Resource Planning",
      description: "An integrated ERP solution that helps businesses manage core processes, including finance, HR, supply chain, and customer relations, all in one platform.",
      icon: <FaNetworkWired className="project-icon" />,
      link: "https://platform.baap.company/"
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
