import React from "react";
import "./Participations.css";
import { useState, useEffect } from "react";

const Display = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    var response = await fetch("https://backendportfolio.adaptable.app//participations", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setData(response);
   
  };
  const title1={fontWeight: 'bold'};
  const title2={fontSize: '2rem'}

  return (
    <>
      <div className="home-container">
        <div className="serv">
          <ul>
            {data.map((item, idx) => {
              return (
                <>
                  <li key={idx}><center style={{color:'#1d0e54',...title1,...title2}}>{item.name}</center>

                    <br/>
                    {item.participation}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Display;
