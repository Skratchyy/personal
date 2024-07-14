import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { languageActions } from "../store/language-slice";

function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = useRef();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.lang.language);
  let oppositeLanguage;
  useEffect(() => {
    if (isOpen) {
      oppositeLanguage = currentLanguage.current.textContent;
    }
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = () => {
    dispatch(languageActions.changeLanguage(oppositeLanguage));
    setIsOpen(!isOpen);
  };

  return (
    <div className="language">
      <button type="button" className="button" onClick={toggleModal}>
        {language}
      </button>
      {isOpen && (
        <div className="lang-list">
          <button
            type="button"
            className="list-btn active"
            onClick={toggleModal}
          >
            {language}
          </button>
          <button
            type="button"
            className="list-btn"
            ref={currentLanguage}
            onClick={changeLanguage}
          >
            {language === "EN" ? "GE" : "EN"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Language;
