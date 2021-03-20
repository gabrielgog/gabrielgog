import React, { Nav,  Navbar} from "react-bootstrap"


function nav(){

    return  <div className="Nav">


<Navbar  expand="lg">
  <Navbar.Brand  className="logo" href="/">FrJatau</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="menu"  href="https://forms.gle/rvU6ayJPszZAcsd6A" target="_blank">Councelling</Nav.Link>
     
      <Nav.Link className="menu"  href="https://www.blog.frjatau.org/" target="_blank">Blog</Nav.Link>
      <Nav.Link className="menu"  href="#contact">Contact</Nav.Link>

      
    </Nav>

  </Navbar.Collapse>
</Navbar>




    </div>
   


}




export default nav;