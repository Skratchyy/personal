import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <img src="/logo.png" alt="Logo" />
            <span>Skratchy</span>
          </div>
          <div>
            <NavLink to={"/"}><span>#</span>home</NavLink>
            <NavLink to={"/portfolio"}><span>#</span>works</NavLink>
            <NavLink to={"/order"}><span>#</span>about-me</NavLink>
            <NavLink to={"/contact"}><span>#</span>contacts</NavLink>
          </div>
          <div className="side">
            <div id="hr" />
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

          </div>

        </div>
      </header>
      <Outlet />
    </>
  );
}