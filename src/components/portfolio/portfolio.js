import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Carpark Python Application",
            description: "Final Assignment for Programming 1 Module in Year 1.1, utilised data.gov.sg Carpark Availability API, coded in Python",
            githubLink: "https://github.com/EdricYeo117/PRG1Sem1/tree/main"
        },
        {
            title: "Ice Cream Management System",
            description: "Final assignment for Programming 2 Module in Year 1.2, an Ice Cream Management System, coded in C#",
            githubLink: "https://github.com/EdricYeo117/T03_Group02_PRG2Assignment"
        },
        {
            title: "Back End API for Recipes Web Application",
            description: "Final assignment for Back End Development Module in Year 2.1, a back end API utilising Spoonacular API, coded in Node.js, utilising MongoDB and SQL",
            githubLink: "https://github.com/Koyonari/BED2024Apr_P03_T05"
        },
        {
            title: "SQL Database Project",
            description: "Final assignment for Databases Module in Year 2.1, a database architecture for a Condo Management System, utilising SQL",
            githubLink: "https://github.com/Ng-Kai-Huat-Jason/T03_Group1_Database"
        },
        {
            title: "Front End Development Project",
            description: "Final assignment for front End Development Module in Year 1.2, front end website for Genshin Impact, coded in HTML, CSS and JavaScript",
            githubLink: "https://github.com/Ng-Kai-Huat-Jason/FED_GenshinPromo_website"
        },
        {
            title: "Software Management Project",
            description: "Final assignment for Software Project Management Module in Year 2.1, utilising SCRUM Framework, coded in HTML, CSS and JavaScript",
            githubLink: "https://github.com/LiangDingxuan/SPM_Assignment_GroupA"
        },
        {
            title: "Software Analysis and Design Project",
            description: "Final assignment for Software Analysis and Design Module in Year 2.1, utilising Visual Paradigm, coded in C#",
            githubLink: "https://github.com/Ng-Kai-Huat-Jason/SWAD_P03_GroupE"
        },
        {
            title: "Mobile Applications Development Project",
            description: "Final assignment for Mobile Applications Development  Module in Year 2.1, utilising Android Studio, coded in Java",
            githubLink: "https://github.com/enjiawu/MAD24_P02_Team1"
        },

    ];

    return (
        <section id="portfolio">
            <span className="portfolioTitle">Portfolio</span>
            <div className="portfolioGrid">
                {projects.map((project, index) => (
                    <div className="portfolioCard" key={index}>
                        {/* <div className="portfolioCardImgContainer">
                            <img src={project.image} alt={project.title} className="portfolioCardImg"/>
                        </div> */}
                        <div className="portfolioCardText">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <button className="portfolioButton">View on GitHub</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
