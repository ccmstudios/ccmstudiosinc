import React from "react";
import Logo from "../assets/images/logo.jpg";
import Social from "./social";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <br></br>
        <br></br>
        <h1>CCM Studios LLC</h1>
        <h4 className="text-muted">
          We are a proud Black Owned Company
        </h4>
        <h3>
          <strong>Text:</strong>
          (980) 552-1590
        </h3>
        <h3>
          <strong>Email: </strong> 
          CCMSTUDIOSINC@GMAIL.COM
        </h3>
        <br></br>
        {/* <Social /> */}
        <h4 className="text-muted">
          Website designed by RZN8 Publishing and CCM Studios LLC
        </h4>
      </div>
    );
  }
}

export default Footer;
