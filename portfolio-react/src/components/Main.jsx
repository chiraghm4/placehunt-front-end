import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedin, FaGithub, FaLink } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1606918801925-e2c914c4b503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        className="w-full h-screen object-cover"
        alt="mt.fuji"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div>
          <h1>Hi I'm Chirag Maski</h1>
          <h2>
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1000,
                "Student",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "8px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div>
            <FaTwitter size={20} className="cursor-pointer"/>
            <FaLinkedin size={20} className="cursor-pointer"/>
            <FaGithub size={20} className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
