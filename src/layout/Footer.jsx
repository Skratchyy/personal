import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import language from "../language/language.json";
function Footer({ currentLanguage }) {
  const langData = language[currentLanguage];
  return (
    <footer>
      <section className="f-main">
        <div className="f-1">
          <div className="ct">
            <img src="/logo.png" alt="" />
            <p>skratchy</p>
            <a href="#">gabichvadzezura@gmail.com</a>
          </div>
          <p>{langData.proffesion}</p>
        </div>
        <div className="f-2">
          <h3>{langData.media}</h3>
          <div className="media">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </section>
      <p>{langData.copyRight}</p>
    </footer>
  );
}

export default Footer;
