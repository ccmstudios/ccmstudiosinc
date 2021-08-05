import React from "react";
import { HashLink as Link } from "react-router-hash-link";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul id="navbar">
          <li>
            <Link smooth to="#about">About</Link>
          </li>
          <li>
            <Link smooth to="#servicetabs">DIY Web Design</Link>
          </li>
          <li>
            <Link smooth to="#servicetabs">Web Design Only</Link>
          </li>
          <li>
            <Link smooth to="#servicetabs">Complete Web Design Package</Link>
          </li>
      
        </ul>
      </div>
    );
  }
}

export default Navbar;
