import React from "react";
import "./technologystack.css"; // Create a CSS file for styling
import ReactLogo from '../../assets/react.png';
import NodejsLogo from '../../assets/nodejs.png';
import MongodbLogo from '../../assets/mongodb.png';
import SqlLogo from '../../assets/sql.png';
import PythonLogo from '../../assets/python.png';
import CSharpLogo from '../../assets/csharp.png';
import JavaLogo from '../../assets/java.png';
import AndroidStudioLogo from '../../assets/androidstudio.png';
import CPlusPlusLogo from '../../assets/cplusplus.png';
import JavaScriptLogo from '../../assets/javascript.png';
import HtmlLogo from '../../assets/html.png';
import CssLogo from '../../assets/css.png';

export const technologyStack = [
    {
        name: "HTML",
        description: "The standard markup language for documents designed to be displayed in a web browser.",
        logo: HtmlLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "CSS",
        description: "A style sheet language used for describing the presentation of a document written in a markup language.",
        logo: CssLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        name: "JavaScript",
        description: "A programming language that conforms to the ECMAScript specification.",
        logo: JavaScriptLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "React.js",
        description: "A JavaScript library for building user interfaces.",
        logo: ReactLogo,
        link: "https://reactjs.org/docs/getting-started.html"
    },
    {
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        logo: NodejsLogo,
        link: "https://nodejs.org/en/docs/"
    },
    {
        name: "MongoDB",
        description: "A NoSQL database that stores data in JSON-like documents.",
        logo: MongodbLogo,
        link: "https://docs.mongodb.com/"
    },
    {
        name: "SQL",
        description: "A domain-specific language used in programming for managing data in a relational database.",
        logo: SqlLogo,
        link: "https://dev.mysql.com/doc/"
    },
    {
        name: "Python",
        description: "A high-level, general-purpose programming language.",
        logo: PythonLogo,
        link: "https://docs.python.org/3/"
    },
    {
        name: "C#",
        description: "A multi-paradigm programming language developed by Microsoft.",
        logo: CSharpLogo,
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        name: "Java",
        description: "A high-level, class-based, object-oriented programming language.",
        logo: JavaLogo,
        link: "https://docs.oracle.com/en/java/"
    },
    {
        name: "Android Studio",
        description: "The official integrated development environment (IDE) for Android development.",
        logo: AndroidStudioLogo,
        link: "https://developer.android.com/studio"
    },
    {
        name: "C++",
        description: "A general-purpose programming language created as an extension of C. Currently learning for Year 2.2.",
        logo: CPlusPlusLogo,
        link: "https://cplusplus.com/doc/tutorial/"
    },
];

const TechnologyStack = () => {
    return (
        <section id="technologyStack">
            <span className="techStackTitle">Technology Stack</span>
            <div className="techStackGrid">
                {technologyStack.map((tech, index) => (
                    <a href={tech.link} target="_blank" rel="noopener noreferrer" className="techStackCardLink" key={index}>
                        <div className="techStackCard">
                            <div className="techStackCardImgContainer">
                                <img src={tech.logo} alt={tech.name} className="techStackCardImg" />
                            </div>
                            <div className="techStackCardText">
                                <div class="techNameContainer">
                                    <h2>{tech.name}</h2>
                                </div>
                                <p>{tech.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
export default TechnologyStack;
