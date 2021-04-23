import React from "react";
import Header from "../components/Header.js";
import FadeIn from "react-fade-in";

import codeSnip1 from "../images/codeSnip1.png";
import facePic from "../images/face-pic.jpeg";

export default function Welcome() {
  return (
    <div className="welcomePage">
      <FadeIn transitionDuration={2000} delay={100}>
        <Header />
        <div className="sideImages">
          <img
            src={codeSnip1}
            className="inner-side-image"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          />

          <img
            src={facePic}
            className="inner-side-image"
            style={{ borderRadius: "0 10px 10px 0" }}
          />
        </div>
        <h1 className="tagLine">Artistry and Engineering</h1>
        <FadeIn transitionDuration={2000} delay={1000}>
          <h2 className="tagLine secondTag">
            I write music and code. And I love both.
          </h2>
        </FadeIn>
      </FadeIn>
    </div>
  );
}
