import React from "react";
import Button from "../components/Button";
import Dots from "../components/Dots";
import language from "../language/language.json";
function Main({ currentLanguage }) {
  const langData = language[currentLanguage];

  return (
    <section className="h-main">
      <div className="h-main-section-text">
        <h2 dangerouslySetInnerHTML={{ __html: langData.header }} />
        <p dangerouslySetInnerHTML={{ __html: langData.description }} />
        <Button>{langData.contact}</Button>
      </div>
      <div className="h-main-section-image">
        <div className="h-images">
          <Dots bottom={"30px"} right={"50px"} />
          <img className="main-img" src="/main-image.png" alt="" />
          <img
            className="pattern-img"
            src="src\assets\background-pattern.png"
            alt=""
          />
          <div className="current-work">
            <p>
              <span className="block"></span>
              {langData.currentWorkPrefix}
              <span>&nbsp;TON</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
