import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Header() {
  function goToPage(loc) {
    scroller.scrollTo(loc, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -40,
    });
  }

  return (
    <Navbar className="header" expand="lg">
      <p className="logo">NR</p>
      <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto header-links">
          <a className="nav-link" onClick={() => goToPage("projectsElement")}>
            Projects
          </a>
          <a className="nav-link" onClick={() => goToPage("skillsElement")}>
            Skills
          </a>
          <a className="nav-link" onClick={() => goToPage("contactElement")}>
            Social
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
