import React from 'react';
import { SkillCard } from './SkillCard';
import { AnimatedSection } from './AnimatedSection';

export const About = ({ skills }) => (
  <section className="py-16">
    <AnimatedSection className="container mx-auto px-6">
      <h3 className="text-3xl font-bold text-gray-800 ml-4 mb-8">Skills:</h3>
      <section className="py-16 flex justify-center items-center min-h-screen">
        <AnimatedSection className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </AnimatedSection>
  </section>
);
