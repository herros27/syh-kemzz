import React from "react";
import { SkillCard } from "./SkillCard";
import { AnimatedSection } from "./AnimatedSection";
import skillsData  from "../data/skill.json";
export const Skills = () => (
  <section className="bg-midnight py-16" id="skills">
    <AnimatedSection className="container  mx-auto px-6">
      <h3 className="text-3xl font-bold text-white ml-4 mb-8">Skills:</h3>
      <section className="py-16 flex justify-center items-center min-h-screen">
        <AnimatedSection className="container bg-metal rounded-xl mx-auto px-6 p-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </AnimatedSection>
  </section>
);
