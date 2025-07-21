// AnimatedImage.jsx
import React, { useEffect, useRef, useState } from "react";
import "../components/style/styling.css";

export const AnimatedImage = ({
  src,
  alt,
  className,
  animation = "rotate-in ",
}) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // hanya animasi sekali
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${animation} ${isVisible ? "animate" : ""} ${className}`}
    />
  );
};
