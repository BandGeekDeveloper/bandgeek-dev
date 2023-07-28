import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

const UseLottieAnimations = ({ animationData }) => {
  const containerRef = useRef(null);
  let animRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        loop: false,
        autoplay: false,
      });
    }
    return () => {
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, [animationData]);

  const playAnimation = () => {
    if (animRef.current) {
      animRef.current.play();
    }
  };

  const stopAnimation = () => {
    if (animRef.current) {
      animRef.current.goToAndStop(0);
    }
  };

  return { containerRef, playAnimation, stopAnimation };
};

export default UseLottieAnimations;
