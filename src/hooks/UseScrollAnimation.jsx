// src/hooks/useScrollAnimation.js
import { useState, useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Ketika elemen memasuki viewport
          setIsVisible(true);
        } else {
          // Ketika elemen keluar dari viewport
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(ref);
    
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold]);

  return [setRef, isVisible];
};
