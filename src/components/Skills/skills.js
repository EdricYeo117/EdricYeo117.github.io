import React from 'react';
import './skills.css';
import FrontEnd from "../../assets/frontend.png";
import BackEnd from "../../assets/backend.png";
import Database from "../../assets/database-storage.png";
import Scrum from "../../assets/scrum.png";

const Skills = () => {
    const skills = [
        {
            title: "Front End Development",
            description: "Proficient in HTML & CSS, utilizing React.js framework",
            image: FrontEnd,
            alt: "Front End Dev"
        },
        {
            title: "Back End Development",
            description: "Proficient in node.js for Back End Web-APIs and Database Queries",
            image: BackEnd,
            alt: "Back End Dev"
        },
        {
            title: "NoSQL and SQL Databases",
            description: "Proficient in MSSQL and MongoDB",
            image: Database,
            alt: "Databases (NoSQL & SQL)"
        },
        {
            title: "SCRUM Master",
            description: "PSM1 Professional Scrum Master",
            image: Scrum,
            alt: "AGILE Framework"
        }
    ];

    return (
        <section id="skills">
            <span className="skillTitle">Skillsets</span>
            <span className="skillDesc">I am a full-stack developer with experience in programming in various languages</span>
            <div className="skillBars">
                {skills.map((skill, index) => (
                    <div className="skillBar" key={index}>
                        <div className="skillBarImgContainer">
                            <img src={skill.image} alt={skill.alt} className="skillBarImg"/>
                        </div>
                        <div className="skillBarText">
                            <h2>{skill.title}</h2>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
