import React from "react";
import UseLottieAnimations from "./UselottieAnimations";

const LottieAnimation = ({ animationData }) => {
  const { containerRef, playAnimation, stopAnimation } =
    UseLottieAnimations(animationData);

  return (
    <div
      ref={containerRef}
      onmouseenter={playAnimation}
      onmouseleave={stopAnimation}
    />
  );
};

export default LottieAnimation;
