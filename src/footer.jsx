import React from "react";

function footer() {
  let date = new Date().getFullYear();

  return (
    <div className="footer" id="contact">
      

      <h1>Contact Me</h1>

      <form  action="https://getsimpleform.com/messages?form_api_token=a0938af2f3f9e284c261f97ca01974c0" method="post">

        <input className="name" type="text" placeholder="Name" color="white"required /> <br />
        <input className="email" type="email" placeholder="Email address" required />
        <br />
        <textarea className="message"
          placeholder="Enter your message"
          name="message" required
          id=""
          cols="30"
          rows="10"
        ></textarea>{" "}
        <br />
        <button className="submit" type="submit">Send</button>
      </form>

      <a className="social-l" href="https://www.linkedin.com/in/gabrielgog/" target="_blank"><img src="/linkedin.png"/></a>
<a className="social-l" href="https://gabrielgog.medium.com/" target="_blank"><img src="/medium.png"/></a>
<a className="social-l" href="https://twitter.com/gabrielg0g" target="_blank"><img src="/twitter.png"/></a>
<a className="social-l" href="https://github.com/gabrielgog" target="_blank"><img src="/github.png"/></a>


      <p className="copy">&copy; GabrielgoG {date}</p>




    </div>
  );
}

export default footer;
