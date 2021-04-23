import React from "react";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechSkills() {
  return (
    <div className="tech-skills">
      <ul className="skills-list">
        {" "}
        <FontAwesomeIcon className="skill-icon" icon={faLaptopCode} size="3x" />
        <div className="skill-cat-header"> Software Engineering</div>
        <hr />
        <div className="skill-list-header"> Languages I Speak</div>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
        <li>SQL</li>
        <li>PHP</li>
        <li>HTML</li>
        <li>CSS</li>
        <div className="skill-list-header"> Libraries & Frameworks I Use</div>
        <li>React (& Redux)</li>
        <li>Express</li>
        <li>jQuery</li>
        <div className="skill-list-header"> Tools I Use</div>
        <li>VS Code</li>
        <li>Github</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Postman</li>
        <li>Node/NPM</li>
      </ul>
    </div>
  );
}
