import React, { Nav,  Navbar} from "react-bootstrap"


function nav(){

    return  <div className="Nav">


<Navbar  expand="lg">
  <Navbar.Brand  className="logo" href="#home">GabrielgoG</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="menu"  href="#link">Projects</Nav.Link>
      <Nav.Link className="menu"  href="#link">Blog</Nav.Link>

      <Nav.Link className="menu"  href="#link">About</Nav.Link>
      <Nav.Link className="menu"  href="#link">Contact</Nav.Link>

      
    </Nav>

  </Navbar.Collapse>
</Navbar>




    </div>
   


}




export default nav;