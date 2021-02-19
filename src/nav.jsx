import React, { Nav,  Navbar} from "react-bootstrap"


function nav(){

    return  <div className="Nav">


<Navbar  expand="lg">
  <Navbar.Brand  className="logo" href="/">GabrielgoG</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="menu"  href="#projects">Projects</Nav.Link>
      <Nav.Link className="menu"  href="https://blog.gabrielgog.dev" target="_blank">Blog</Nav.Link>

      <Nav.Link className="menu"  href="/about">About</Nav.Link>
      <Nav.Link className="menu"  href="#contact">Contact</Nav.Link>

      
    </Nav>

  </Navbar.Collapse>
</Navbar>




    </div>
   


}




export default nav;