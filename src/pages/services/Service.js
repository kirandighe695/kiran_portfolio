import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaReact, FaDatabase, FaCloud, FaGitlab } from "react-icons/fa";
import { SiFirebase, SiGoogleanalytics } from "react-icons/si";
import "../../styles/Service.scss";

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Build responsive and dynamic websites with cutting-edge technologies.",
      icon: <FaCode />,
    },
    {
      title: "App Development",
      description: "Create feature-rich mobile applications tailored to your needs.",
      icon: <FaMobileAlt />,
    },
    {
      title: "REST API Development",
      description: "Design and implement robust RESTful APIs for your applications.",
      icon: <FaServer />,
    },
    {
      title: "MERN Stack Development",
      description: "Expertise in MongoDB, Express.js, React, and Node.js for full-stack solutions.",
      icon: <FaReact />,
    },
    {
      title: "Database Management",
      description: "Efficiently design, maintain, and optimize databases for performance and scalability.",
      icon: <FaDatabase />,
    },
    {
      title: "Cloud Computing",
      description: "Leverage the power of cloud platforms to scale and manage your applications effectively.",
      icon: <FaCloud />,
    },
    {
      title: "GitLab",
      description: "Streamline your DevOps workflows using GitLab's powerful CI/CD features.",
      icon: <FaGitlab />,
    },
    {
      title: "Firebase",
      description: "Develop and scale mobile and web apps faster with Firebase's powerful tools.",
      icon: <SiFirebase />,
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand and reach new audiences with expert digital marketing strategies.",
      icon: <SiGoogleanalytics />,
    },
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
