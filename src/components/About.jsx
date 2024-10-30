import React from 'react';
import { SkillCard } from './SkillCard';
import { AnimatedSection } from './AnimatedSection';

export const About = ({skills}) => (
  <section className="py-16">
    <AnimatedSection className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
      <div className="grid lg:grid-cols-2 item-center mx-auto">
        {/* Bagian Kanan: Deskripsi Diri */}
        <AnimatedSection>
          <p className="leading-tight text-center">
            Hello all 🖐️, my name is Kemas Khairunsyah. I am from Tanjung Pandan, Belitung. I am currently pursuing a bachelor's degree in informatics at Ahmad Dahlan University.
            At this moment I am part of Mobile Development Cohort at Bangkit Academy Batch 2 2024.
          </p>
        </AnimatedSection>
      </div>

      {/* Bagian Keahlian */}
      <AnimatedSection>
        <h3 className="text-xl font-semibold m-2">Skills:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </AnimatedSection>
    </AnimatedSection>
  </section>
);
