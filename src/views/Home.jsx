import React from "react";
import Quote from "../layout/Quote";
import Projects from "../layout/Projects";
import Skills from "../layout/Skills"
import About from "../layout/About";
import Button from "../components/Button";
import Main from "../layout/Main";

function Home() {
  return (
    <main>
      <Main/>
      <Quote />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}

export default Home;
