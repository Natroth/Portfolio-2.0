import React from "react";
import TechSkills from "../components/TechSkills";
import MusicSkills from "../components/MusicSkills";
import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <div className="skillsPage">
      <div className="intro-to-skills">
        {" "}
        <Fade>
          <h1 className="secondTag intro-to-projects" style={{ color: "#fff" }}>
            Some of my Skills
          </h1>{" "}
        </Fade>
        <Fade>
          <p style={{ width: "87%", margin: "auto" }}>
            I believe that my interests in software engineering and music
            production are inherentley intertwined. Both allow me to create and
            possibly reach others in an artistic fashion. I also really enjoy
            trying out many different tools, technologies and instruments to see
            what works best for me.
          </p>
        </Fade>
      </div>
      <Fade>
        <div className="skills-columns">
          <TechSkills />
          <MusicSkills />
        </div>
      </Fade>
    </div>
  );
}
