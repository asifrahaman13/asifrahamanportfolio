import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [credential, setCredential] = useState({
    email: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://backendportfolio.adaptable.app//contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        name: credential.name,
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <center>
        <contact className="contact-header" id="contact-me">
          CONTACT ME
        </contact>
        <div className="contact-container">
          <div className="contact-me">
            <form onSubmit={handleSubmit}>
              <label htmlFor="" className="contact-label">
                Enter the name
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your name e.g Captain Price"
                name="name"
                value={credential.name}
                onChange={onChange}
              />
              <label htmlFor="" className="contact-label">
                Enter your email address
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your profession e.g Student"
                name="email"
                value={credential.email}
                onChange={onChange}
              />
              <label htmlFor="" className="contact-label">
                Enter your profession
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your age e.g age"
              />
              <label htmlFor="" className="contact-label">
                Enter your age
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your profession e.g Student"
              />
              <label htmlFor="" className="contact-label">
                Enter your concern
              </label>
              <textarea
                name="textarea-contact"
                cols="80"
                rows="10"
                className="textarea-contact"
                id="textarea-contact"
                placeholder="Enter your concern e.g Hello can you please.... "
              ></textarea>
              <center>
                <button className="btn-submit">Submit</button>
              </center>
            </form>
          </div>
        </div>
      </center>
    </>
  );
};

export default Contact;
