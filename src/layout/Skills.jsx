import React from "react";
import Title from "../components/Title";
import Card from "../components/Card"
function Projects() {
    return (
        <section className="h-skills">
            <Title title={"skills"} width={"300px"} />
            <div className="content">
                <div className="patterns">
                    <img src="/skill-pattern.png" alt="" />
                </div>
                <div className="skill">
                    <Card title={"Languages"} desc={"Typescript Solidity Javascript"} />
                    <Card title={"Tools"} desc={"Typescript Solidity Javascript"} />
                    <Card title={"Databases"} desc={"Typescript Solidity Javascript"} />
                    <Card title={"Other"} desc={"Typescript Solidity Javascript"} />
                    <Card title={"Frameworks"} desc={"Typescript Solidity Javascript"} />
                </div>
            </div>

        </section>
    );
}

export default Projects;
