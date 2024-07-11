import React from "react";
import Title from "../components/Title";
import Dots from "../components/Dots";
import Button from "../components/Button"
function About() {
    return (
        <section className="h-about">
            <Title title={"about-me"} width={"300px"} />
            <div className="content">
                <div className="desc">
                    <p>Hello, I'm Skratchy!</p>
                    <p>I'm a self-taught Software Developer based in Tbilisi, Georgia.
                    I can develop responsive websites from scratch and raise them into 
                    modern user-friendly web experiences.</p>
                    <p>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. 
                    I have been helping various clients to establish their presence online. 
                    I always strive to learn about the newest technologies and frameworks.</p>
                    <Button>Find Out More</Button>
                </div>
                <div className="image">
                    <Dots top={"30px"} />
                    <Dots bottom={"40px"} right={"60px"} />
                    <img src="/sec-image.png" alt="" />
                </div>
            </div>

        </section>
    );
}

export default About;
