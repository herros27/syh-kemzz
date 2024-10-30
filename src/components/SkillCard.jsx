import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const SkillCard = ({ skill }) => (
  <AnimatedSection>
    <div className="bg-card rounded-lg shadow-md p-6 text-center flex flex-col items-center">
      {/* Display the skill image */}
      {skill.image && (
        <img
          src={skill.image}
          alt={skill.name}
          className="w-20 object-cover  mb-4 mx-auto"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </div>
  </AnimatedSection>
);
