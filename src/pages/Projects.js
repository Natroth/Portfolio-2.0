import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Project from "../components/Project";

import onelookin_logo from "../images/onelookinlogo3.png";
import ecapsule_logo from "../images/logoposs.png";
import knifes_logo from "../images/knifes.png";
import yayornay_logo from "../images/yay_or_nay.png";
import soundslike_logo from "../images/soundslike_logo.png";

import { Element } from "react-scroll";

export default function Projects() {
  const projectsInfo = [
    {
      id: 0,
      title: "SoundsLike",
      subTitle:
        "A Song recommendation website. Built with React, Redux, CSS, JS and the Shazam API.",
      imgSrc: soundslike_logo,
      link: "https://soundslike.lynxic.com/",
      codeLink: "https://github.com/Natroth/SoundsLike",
      selected: false,
    },
    {
      id: 1,
      title: "One Look In",
      subTitle:
        "A streaming service where independent musicians can post music to a desktop site where it will be available for listening by the public on their mobile devices. Built primarily with HTML, CSS, JS, PHP and MySql.",
      imgSrc: onelookin_logo,
      link: "https://onelookin.com/",
      codeLink: "https://github.com/Natroth/OneLookIn",
      selected: false,
    },
    {
      id: 2,
      title: "Pantry Chef",
      subTitle:
        "A recipe lookup application. Built primarily using React, CSS, JS and Edamam API.",
      imgSrc: knifes_logo,
      link: "https://pantrychef.lynxic.com/",
      codeLink: "https://github.com/Natroth/recipe-app",
      selected: false,
    },

    {
      id: 3,
      title: "Yay Or Nay",
      subTitle:
        "A movie rating game. Built primarily with React, CSS, JS and the TMDb API.",
      imgSrc: yayornay_logo,
      link: "https://yayornay.lynxic.com/",
      codeLink: "https://github.com/Natroth/yay-or-nay",
      selected: false,
    },
    {
      id: 4,
      title: "eCapsule",
      subTitle:
        "A communal online time capsule that currently has amassed over 150 posts. Built primarily with HTML, CSS, JS, PHP and MySql.",
      imgSrc: ecapsule_logo,
      link: "https://ecapsule.us/",
      codeLink: "https://github.com/Natroth/eCapsule",
      selected: false,
    },
  ];
  return (
    <div className="projectsPage">
      <Element name="projectsElement"></Element>

      <Fade>
        <h1 className="secondTag intro-to-projects">Some of my Projects</h1>
        <div className="projects-wrap">
          {projectsInfo.map((item) => {
            return (
              <Project
                title={item.title}
                subTitle={item.subTitle}
                imgSrc={item.imgSrc}
                link={item.link}
                codeLink={item.codeLink}
              />
            );
          })}
        </div>
      </Fade>
    </div>
  );
}
