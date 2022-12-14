import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Participations from "../Participations/Participations";
import Skills from "../Skills/Skills";
import Proficiency from "../Proficiency/Proficiency";
import Projects from "../Projects/Projects";
import Banner from "../Banner/Banner";
import Bouncing from "../Bouncing/Bouncing";
import Credits from "../Credits/Credits";

const Home = () => {
  return (
    <>
      <Banner />
      <Header />
      <Bouncing />
      <center>
        <h2 className="skill" id="about">
          <a href="#scroll" id="participations">
            PARTICIPATIONS
          </a>
        </h2>
        <br />
        <br />
        <br />
      </center>
      <Participations />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <center>
        <h2 className="skill" id="projects">
          <a href="#scroll">PROJECTS</a>
        </h2>
      </center>
      <br />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2 className="skill" id="skills">
          <a href="#scroll">MY SKILLS</a>
        </h2>
      </center>

      <Skills />
      <Proficiency />
      <Credits/>
    </>
  );
};

export default Home;
