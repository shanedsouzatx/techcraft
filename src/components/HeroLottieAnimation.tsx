import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const HeroLottieAnimation: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement

  useEffect(() => {
    if (!animationContainer.current) {
      console.error("Animation container is not defined");
      return;
    }

    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current as Element, // Asserting the type here
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/Animation1.json", // Ensure this path is correct
    });

    // Cleanup function to destroy the animation instance when the component unmounts
    return () => {
      if (animationInstance) {
        animationInstance.destroy(); // Destroy the animation instance
      }
    };
  }, []);

  return <div ref={animationContainer} className="w-full h-full"></div>;
};

export default HeroLottieAnimation;
