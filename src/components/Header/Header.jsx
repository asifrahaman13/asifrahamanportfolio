import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <br />
      <br />
      <div className="scroll-view" id="scroll">
        <div className="scroll-child">
      <li>
        <a href="#participations">Participations</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">My Skills</a>
      </li>
      <li>
        <a href="#proficiency">Proficiency</a>
      </li>
      <li>
        <a href="#credits">Credits</a>
      </li>
      </div>
      </div>
      <aboutme>
        <center>
          <h2 className="skill" id="about">
            <a href="#nav">MY HOBBIES</a>
          </h2>
          <br />
          <br />
          <center>

            <h3 className="txt">
              I am a coding geek and a keen learner. I love exploring about new technologies. Apart from that I also spend my time in reading books every day.Ocassionally I listen to sunday suspense....
            </h3></center>
        </center>
        <div className="images">
          <div className="imageclass">
            <div className="first-image"></div>
            <div className="second-image"></div>
            <div className="third-image"></div>
          </div>
        </div>
      </aboutme>
    </>
  );
};

export default Header;
