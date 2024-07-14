import React from "react";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import language from "../language/language.json";
function Contact({ currentLanguage }) {
  const langData = language[currentLanguage];
  return (
    <section className="h-contact">
      <Title title={langData.contact} width={"300px"} />
      <div className="content">
        <div className="desc">
          <p>
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me
          </p>
        </div>
        <div className="links">
          <div className="container">
            <p>{langData.message}</p>
            <div className="url">
              <a href="#">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <p>{langData.discord}</p>
            </div>
            <div className="url">
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <p>{langData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
