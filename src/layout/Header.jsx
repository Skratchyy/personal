import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Language from "../components/Language";
import language from "../language/language.json";
import { useSelector } from "react-redux";
export default function Header() {
  const currentLanguage = useSelector((state) => state.lang.language);
  const langData = language[currentLanguage];
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <img src="/logo.png" alt="Logo" />
            <span>Skratchy</span>
          </div>
          <div>
            <NavLink to={"/"}>
              <span>#</span>
              {langData.home}
            </NavLink>
            <NavLink to={"/work"}>
              <span>#</span>
              {langData.work}
            </NavLink>
            <NavLink to={"/about"}>
              <span>#</span>
              {langData.about}
            </NavLink>
            <NavLink to={"/contacts"}>
              <span>#</span>
              {langData.contacts}
            </NavLink>
            <Language />
          </div>
          <div className="side">
            <div id="hr" />
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
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
