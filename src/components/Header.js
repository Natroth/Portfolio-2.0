import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Container from "react-bootstrap/Container";

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
    <Container className="p-0" fluid={true}>
      <Navbar className="header" expand="lg">
        <Navbar.Brand>
          {" "}
          <p className="logo">NR</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto" style={{ fontSize: "25px" }}>
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
    </Container>
  );
}
