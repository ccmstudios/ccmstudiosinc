import React from "react";
import Banner from "./banner";
import Navbar from './navbar'

const Subheader = () => {
  return (
    <header id="subHeader">
      <h3>Creative Concepts Manifested</h3>
      {/* <Navbar/> */}
      <Banner/>
    </header>
  );
};

export default Subheader;
