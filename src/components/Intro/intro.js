import React from 'react';
import './intro.css';
import resume from "../../assets/resume.pdf"; 
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Jin Rong</span> <br /> Full Stack Developer
                </span>
                <p className="introPara">
                    I am an aspiring Full Stack Developer currently studying at Ngee Ann Polytechnic. <br /> Specializing in Software Engineering in Year 2
                </p>
                <div className="ctaButtons">
                    <Link to="portfolio" smooth={true} duration={500}>
                        <button className="btn">
                   View Portfolio
                        </button>
                    </Link>
                    <a href={resume} download="Jin_Rong_Resume.pdf" className="btn resumeBtn">
                        View Resume
                    </a>
                </div>
                <div className="socialLinks">
                    <a href="https://www.linkedin.com/in/jin-rong-yeo-83996b272/" target="_blank" rel="noopener noreferrer" className="socialIcon">
                        LinkedIn
                    </a>
                    <a href="https://github.com/EdricYeo117" target="_blank" rel="noopener noreferrer" className="socialIcon">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Intro;
