import React from "react";
import Quote from "../layout/Quote";
import Projects from "../layout/Projects";
import Skills from "../layout/Skills";
import About from "../layout/About";

import Main from "../layout/Main";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

function Home() {
  return (
    <>
      <main>
        <Main />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
