import React from "react"

import ProgressBar from 'react-bootstrap/ProgressBar'

function about_d(){


    return( <div className="about-page">

    <img src="gab_about.jpeg"/>
  <p>
   My Name is Gabriel ofu Godwin(GOG). I am a software engineer with a strong interest in  using technology to solve real world problems. I build this interest by joining the most availabe communities and also partner with like minds including startup communinties to leverage available tools and drive impact. 

   While driving towards mastery in the latest technological tools I have a full subscription on <a href="frontendmasters.com">FrontEndMasters</a> to keep my skills abreast and learn newer ones. <br/><br/>Both startups and large businesses have something in common; for me the commonality is to solve a problem. However, for many of these problem solvers there are no available resources like the right data; which is why I decided to pursue Data Science to gain
   more  understanding of emerging technologies, statistical analysis and computational techniques to drive oranizational goals from <a href="london.ac.uk">GoldSmith Universty of London</a> <br/><br/> When I'm not solving computer problems, I am reading a very inresting book. I read alot, it's the only thing that fascinates me apart from community builing and programming. 
  </p>  


  <h1>Technologies and programming languages I know how to use</h1>


      <label>JavaScript</label>
  <ProgressBar className="progress" animated now={45} />


  <label>Python</label>
  <ProgressBar animated now={35} />


  <label>HTML</label>
  <ProgressBar animated now={100} />

  <label>CSS</label>
  <ProgressBar animated now={90} />

  <label>Unix Terminal</label>

  <ProgressBar animated now={90} />
  <label>Nodejs</label>

<ProgressBar animated now={30} />

<label>React</label>

<ProgressBar animated now={30} />
<label>EJS</label>

<ProgressBar animated now={30} />
<label>VSCode</label>

<ProgressBar animated now={80} />

<label>Bootstrap</label>

<ProgressBar animated now={90} />

<label>Git && GitHub</label>

<ProgressBar animated now={90} />





 

 
</div>

    )

}


export default about_d;