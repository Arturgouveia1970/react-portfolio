import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "JavaScrip Developer",
          "Ruby "
          "Deep Learning Engineer",
          "Full Stack Developer",
          "Machine learning and algorithms",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
