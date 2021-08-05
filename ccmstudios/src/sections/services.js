import React from "react";
import ServiceTabs from "../components/serviceTabs";

class Services extends React.Component {
  render() {
    return (
      <div id="services">
        <h1>SERVICES</h1>
        <br></br>
        <br></br>
        <h3>Click on the tab below to select a package</h3>
        <br></br>
        <br></br>
        <ServiceTabs />
      </div>
    );
  }
}

export default Services;
