import React from 'react';
import { UseScrollAnimation } from '../hooks/UseScrollAnimation';

export const AnimatedSection = ({ children, className = "" }) => {
  const [setRef, visibleIndex] = UseScrollAnimation();

  return (
    <div
      ref={setRef}
      className={`transition-all duration-1000 transform ${
        visibleIndex 
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};
