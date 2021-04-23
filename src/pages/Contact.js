import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WaveImg from "../images/waving-stick-fig.jpg";
import Fade from "react-reveal/Fade";

import { Element } from "react-scroll";

export default function Contact() {
  return (
    <div className="contact-page">
      <Element name="contactElement"></Element>

      <Fade>
        <h1 className="intro-to-projects secondTag">Feel Free to Reach Out!</h1>
        <br />
        <div className="introPg" style={{ color: "#09bcf4" }}>
          Now that you know who I am, I'd like to get to know you too! Drop me a
          line if you'd like to talk about software development, music or
          anything in between.
        </div>
        <div className="social-icons-wrap">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nathan-roth-260b31187/"
          >
            {" "}
            <FontAwesomeIcon
              className="skill-icon social-icon"
              icon={faLinkedin}
              size="3x"
            />
          </a>
          <a target="_blank" href="https://github.com/Natroth">
            {" "}
            <FontAwesomeIcon
              className="skill-icon social-icon"
              icon={faGithub}
              size="3x"
            />
          </a>
          <a target="_blank" href="mailto: nathanrth15@gmail.com">
            {" "}
            <FontAwesomeIcon
              className="skill-icon social-icon"
              icon={faEnvelope}
              size="3x"
            />
          </a>
        </div>
      </Fade>
      <Fade>
        <img src={WaveImg} className="bye-wave" />{" "}
      </Fade>
    </div>
  );
}
