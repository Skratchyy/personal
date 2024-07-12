import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <section className="f-main">
        <div className="f-1">
          <div className="ct">
            <img src="/logo.png" alt="" />
            <p>skratchy</p>
            <a href="#">gabichvadzezura@gmail.com</a>
          </div>
          <p>Software Developer</p>
        </div>
        <div className="f-2">
          <h3>Media</h3>
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
      <p>© Copyright 2022. Made by Skratchy</p>
    </footer>
  );
}

export default Footer;
