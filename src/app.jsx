import React from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./nav";

import Body from "./body_sec";

function app() {
  return (
    <div>
      <Nav />

      <Body />
    </div>
  );
}

export default app;
