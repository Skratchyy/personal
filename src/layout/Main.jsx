import React from 'react'
import Button from "../components/Button";
import Dots from '../components/Dots';
function Main() {
  return (
    <section className="h-main">
        <div className="h-main-section-text">
          <h2>
            Skratchy is a <span>Software Developer</span>
          </h2>
          <p>
            Take a look and leave feedback by following my linked in page.{" "}
            <span>{"<3"}</span>
          </p>
          <Button>Contact Me !!</Button>
        </div>
        <div className="h-main-section-image">
          <div className="h-images">
            <Dots bottom={"30px"} right={"50px"}/>
            <img className="main-img" src="/main-image.png" alt="" />
            <img className="pattern-img" src="/background-pattern.png" alt="" />
            <div className="current-work">
              <p>
                <span className="block"></span>
                Currently Working on
                <span>&nbsp;TON</span>
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Main