
import React from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"


function project(){


    return <div id="projects">


      <h1>Projects</h1>



<Container >
    <Row>

      <div>


      <Col sm={12}>


<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="/ankel.png" />
<Card.Body>
<Card.Title>Ankel</Card.Title>
<Card.Text>

    Website for a consullting Firm that provides strategic reforms and entreprise services

</Card.Text>
 <a href="https://www.ankelconsulting.org/"><Button  variant="primary">View</Button></a>
</Card.Body>
</Card>

</Col>


      </div>
        


        <div>


        <Col sm={12}>
      
      <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="button.png" />
  <Card.Body>
    <Card.Title>Button</Card.Title>
    <Card.Text>
       Web Design and Development for a social entreprise that provides safe water
    </Card.Text>
     <a href="https://www.buttonhq.net/"><Button variant="primary">View</Button></a>
  </Card.Body>
</Card>
      
      
      </Col>




        </div>
        
        
     

     
    </Row>



    <Row>


        <div>


        <Col sm={12}>

<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="/farm365.png" />
<Card.Body>
<Card.Title>FArm365</Card.Title>
<Card.Text>
  Built on React after several iterations of farm produce system. Worked on front page and sent other parts of the website to new development team
</Card.Text>
 <a href="https://farm365.farm/"><Button variant="primary">View</Button></a>
</Card.Body>
</Card>


</Col>





        </div>



        <div>


        <Col sm={12}>
    
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="drum.png" />
  <Card.Body>
    <Card.Title>Drum</Card.Title>
    <Card.Text>
      In an effort to practicing Vanilla JS, I built a drum system that works both on key or screen strike
    </Card.Text>
    <a href="https://github.com/gabrielgog/drum">  <Button variant="primary">View</Button></a>
  </Card.Body>
</Card>
    
    </Col>


        </div>

   
   

   
    </Row>

     <a href="https://github.com/gabrielgog"><Button className="variant">See the Rest on Github</Button></a>
  </Container>




    </div>
    
    
    



}



export default project;