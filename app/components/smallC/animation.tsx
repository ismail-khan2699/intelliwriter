'use client'
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimationData {
  id: number;
  afters: string;
  befores: string;
  duration: string;
}

interface ScrollAnimationProps {
  animationData: AnimationData;
  children: React.ReactNode;
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animationData,
  delay = 0,
}) => {
  const [inViewRef, inView] = useInView({ threshold: 0.1 }); // Adjust the threshold as needed
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      // If the element is in view, set isVisible to true after the specified delay
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);

           return () => clearTimeout(timeoutId);
    }
  }, [inView, delay]);


  return (
    <div
      ref={inViewRef}
      className={`transition-all overflow-hidden  ${animationData.duration} ${
        isVisible ? animationData.afters : animationData.befores
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

