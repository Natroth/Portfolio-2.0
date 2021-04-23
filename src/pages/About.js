import React from "react";
import Intro from "../components/Intro.js";
import WaveImg from "../images/waving-stick-fig.jpg";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="sayHello">
        <Fade>
          {" "}
          <img src={WaveImg} className="waveImg" />{" "}
        </Fade>

        <Fade>
          {" "}
          <Intro />{" "}
        </Fade>
      </div>
    </div>
  );
}
