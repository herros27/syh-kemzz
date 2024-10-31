import React from "react";
import { AnimatedSection } from "./AnimatedSection";

export const SkillCard = ({ skill }) => (
  <AnimatedSection>
    <div className="bg-card rounded-lg shadow-md p-6 text-center flex flex-col items-center min-h-[12rem] max-h-[14rem] min-w-[16rem] max-w-[18rem] sm:min-w-[12rem] sm:max-w-[14rem] md:min-w-[20rem] md:max-w-[24rem]">
      {/* Display the skill image */}
      {skill.image && (
        <img
          src={skill.image}
          alt={skill.name}
          className="w-20 object-cover mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </div>
  </AnimatedSection>
);
