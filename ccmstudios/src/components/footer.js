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
        <h3>
          <strong>Phone:</strong>
          (980) 279-9329
        </h3>
        <h3>
          <strong>Email: </strong> 
          ccmstudiosinc@gmail.com
        </h3>
        <br></br>
        <Social />
        <img src={Logo} alt="footer amped life" />
        <h4 className="text-muted">
          Website designed by RZN8 Publishing and CCM Studios LLC
        </h4>
      </div>
    );
  }
}

export default Footer;
