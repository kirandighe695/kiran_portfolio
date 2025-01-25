import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Service from './pages/services/Service';
import Projects from './pages/projects/Project';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="/">
          <Home />
        </section>
        <section id="service">
          <Service />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
