import React from "react";
import Typed from "react-typed";

const header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed
          className="typed-text"
          strings={[
            "Reactjs",
            "Nodejs",
            "Mysql",
            "Bootstrap",
            "Tailwind",
            "Javascript",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default header;
