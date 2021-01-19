import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "./nav";
import Body from "./body_sec";
import Project from "./projects";
import Footer from "./footer";

function home() {
  return (
    <div>
      <Nav />
      <Body />
      <Project />

      <Footer />
    </div>
  );
}

export default home;
