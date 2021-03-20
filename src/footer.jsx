import React from "react";

function footer() {
  let date = new Date().getFullYear();

  return (
    <div className="footer" id="contact">
      

      <h1>Get in touch!</h1>

      <form  action="https://getsimpleform.com/messages?form_api_token=2a4e61d8aa2fb0a9afe005fa6c6c784a" method="post">

        <input name="content"  className="name" type="text" placeholder="Name" color="white"required /> <br />
        <input name="content" className="email" type="email" placeholder="Email address" required />
        <br />
        <textarea className="message"
          placeholder="Enter your message"
          name="message" required
          id=""
          cols="30"
          rows="10"
        ></textarea>{" "}
        <br />
        <button className="" type="submit">Send</button>
      </form>

      <a className="social-l" href="https://www.linkedin.com/in/fr-michael-jatau-9b03591b4/?originalSubdomain=de" target="_blank"><img src="/linkedin.png"/></a>
<a className="social-l" href="https://web.facebook.com/frjatau" target="_blank"><img src="/facebook.png"/></a>
<a className="social-l" href="https://twitter.com/frjataum" target="_blank"><img src="/twitter.png"/></a>


      <p className="copy">&copy; FrJatau {date}</p>




    </div>
  );
}

export default footer;
