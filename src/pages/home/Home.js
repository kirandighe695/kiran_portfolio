import React, { useRef, useEffect } from "react";
import "../../styles/Home.scss";
import student from "../../styles/assets/kiran2.png";
import Typed from "typed.js";

function Home() {
  const roles = ["Full-Stack Developer", "Freelancer", "MERN Stack Developer", "Software Engineer", "Tech Enthusiast"];
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: roles,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: ' ',
    };
    typedRef.current = new Typed(".typed-text", options);
    return () => {
      typedRef.current.destroy();
    };
  });

  return (
    <section id="home" className="home">
      <div className="row">
        <div className="column col-6 text-container">
          <div><h1><b>Hi, I'm Kiran Dighe work</b> <br /> as a <span className="typed-text"></span></h1></div>
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
