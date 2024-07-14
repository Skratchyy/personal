import React from "react";
import Quote from "../layout/Quote";
import Projects from "../layout/Projects";
import Skills from "../layout/Skills";
import About from "../layout/About";

import Main from "../layout/Main";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import { useSelector } from "react-redux";
function Home() {
  const currentLanguage = useSelector((state) => state.lang.language);
  return (
    <>
      <main>
        <Main currentLanguage={currentLanguage} />
        <Quote currentLanguage={currentLanguage} />
        <Projects currentLanguage={currentLanguage} />
        <Skills currentLanguage={currentLanguage} />
        <About currentLanguage={currentLanguage} />
        <Contact currentLanguage={currentLanguage} />
      </main>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
}

export default Home;
