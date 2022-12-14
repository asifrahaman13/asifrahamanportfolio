import React from "react";
import "./Footer.css";

const Footer = () => {
  const images = [
    {
      handle: "images/linkedin.png",
      link: "https://www.linkedin.com/in/asif-rahaman-110099229/",
    },
    {
      handle: "images/telegram.png",
      link: "https://telegram.me/asifrahaman_13",
    },
    {
      handle: "images/discord.png",
      link: "http://discordapp.com/users/1025373541056647248",
    },
    {
      handle: "images/gmail.png",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=asifrahaman162@gmail.com",
    },
    {
      handle: "images/github.png",
      link: "https://github.com/asifrahaman13",
    },
  ];

  const footerstyle1 = {
    backgroundSize: "100% 100%",
  };

  return (
    <>
      <div className="footer-container">
        <ul className="footer-ul-first">CONTACT ME HERE</ul>
        <ul className="footer-ul-second">
          {images.map((item, idx) => {
            return (
              <>
                <a href={item.link}>
                  <li
                    style={{ backgroundImage: `url(${item.handle})`, ...footerstyle1 }}
                  >
                    {" "}
                  </li>
                </a>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Footer;
