import React from "react";

function footer() {
  let date = new Date().getFullYear();

  return (
    <div className="footer" id="contact">
      <a className="social-link" href="mailto:gabriel@gabrielgog.dev">
        Email: gabriel@gabrielgog.dev
      </a> <br/>
      <a className="social-link" href="tel: 07038521460"> Phone:
        {" "}
        07038521469
      </a>
      

      <h1>Contact Me</h1>

      <form action="mailto:gabriel@gabrielgog.dev">
        <input className="name" type="text" placeholder="Name" color="white" /> <br />
        <input className="email" type="email" placeholder="Email address" />
        <br />
        <textarea className="message"
          placeholder="Enter your message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>{" "}
        <br />
        <button className="submit" type="submit">Send</button>
      </form>

      <a className="social-l" href="https://www.linkedin.com/in/gabrielgog/"><img src="/linkedin.png"/></a>
<a className="social-l" href="https://gabrielgog.medium.com/"><img src="/medium.png"/></a>
<a className="social-l" href="https://twitter.com/gabrielg0g"><img src="/twitter.png"/></a>
<a className="social-l" href="https://github.com/gabrielgog"><img src="/github.png"/></a>


      <p className="copy">&copy; GabrielgoG {date}</p>




    </div>
  );
}

export default footer;
