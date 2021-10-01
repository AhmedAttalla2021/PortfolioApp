import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div class="wrapper">
      <div class="main">
        <h1>Portfolio App </h1>
        <Typed
          className="typed-text"
          strings={["Frontend Developer", "React Developer", "Web Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
