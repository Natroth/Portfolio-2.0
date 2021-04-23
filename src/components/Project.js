import React from "react";

export default function Project(props) {
  return (
    <div className="project-wrapper">
      <img className="projectImg" src={props.imgSrc} />
      <div className="project-info">
        <div className="project-title">{props.title}</div>
        <div className="project-desc">{props.subTitle}</div>
        <div className="project-links">
          <a href={props.link} target="_blank" style={{ paddingRight: "15px" }}>
            View Project
          </a>
          <a href={props.codeLink} target="_blank">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
