import React from "react";
import { AnimatedSection } from "./AnimatedSection";
import { AnimatedImage } from "./AnimatedImage";
export const SkillCard = ({ skill }) => (
  <AnimatedSection>
    <div className="bg-card rounded-lg shadow-md p-6 text-center flex flex-col items-center min-h-[16rem] max-h-[16rem] min-w-[18rem] max-w-[18rem] sm:min-w-[14rem] sm:max-w-[14rem] md:min-w-[20rem] md:max-w-[24rem]">
      {/* Display the skill image */}
      {skill.image && (
        <AnimatedImage
          src={skill.image}
          alt={skill.name}
          className="w-20 object-cover mb-4"
          animation="rotate-up flip-hover"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </div>
  </AnimatedSection>
);
