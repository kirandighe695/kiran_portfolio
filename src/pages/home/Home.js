import React from "react";
import "../../styles/Home.scss";
import student from "../../styles/assets/kiran1.png";

function Home() {
  return (
    <section id="home" className="home">
      <div className="row">
        <div className="column col-6 text-container">
          <h1 className="typewriter">Hi, I'm Kiran Dighe</h1>
          <h4>Full-Stack Developer</h4>
          <p>
            I am a passionate full-stack developer with 2 years of professional experience,
            currently working at BAAP Company. I am also in my third year, pursuing a BCA degree
            at Mysore University. My skill set includes React, Node.js, Express, Fastify, MongoDB,
            MySQL, Git, GitLab, GitHub, and digital marketing. I have a strong background in creating
            efficient and scalable applications. I am always eager to learn and adapt to new technologies
            to deliver the best solutions.
          </p>
        </div>
        <div className="column col-6">
          <img src={student} alt="Kiran Dighe" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
