import React from "react";
import Image from "next/image";

const HomeText = () => {
  return (
    <div className="home-container">
      <div className="ai-drawing">
        <div className="circle"></div>
        <Image
          src="/../public/images/meAiDrawing.jpg"
          className="ai-drawing-image"
          alt="an ai drawing of yours truly"
          width={175}
          height={175}
        />
      </div>
      <div className="short-text">
        <div className="home-title">
          Hi! My name is <span className="my-name">Robin</span>
        </div>
        <div className="mini-about-me">
          <p>
            I am a full stack Web Developer based out of Kentucky and I love
            soccer, basketball, and classical music. Take a look at my portfolio
            and join me in breaking the bounds of the digital space. Let’s build
            something awesome!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
