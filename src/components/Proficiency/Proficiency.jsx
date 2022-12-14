import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Proficiency.css";


const Proficiency = () => {
  const [skillsets, setSkillsets] = useState([]);
  useEffect(() => {
    getSkills();
  });

  const getSkills = async () => {
    var response = await fetch("https://backendportfolio.adaptable.app//skills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setSkillsets(response);
  };

  return (
    <>
      <center>
        <h2 className="skill" id="proficiency">
          <a href="#scroll">PROFICIENCY</a>
        </h2>
      </center>
      <br />
      <div className="project-home-container">
        <div className="server">
          <ul>
            {skillsets.map((item, idx) => {
              return (
                <>
                  <li>{item.skill}</li>
                  <li>{item.proficiency}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Proficiency;
