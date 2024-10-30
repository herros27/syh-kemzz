import React from 'react';
import { GitHubIcon } from './icons';
import { AnimatedSection } from './AnimatedSection';

export const ProjectCard = ({ project }) => (
  <AnimatedSection>
    <div className="bg-card rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="bg-tag text-white text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <GitHubIcon /> <span className="ml-2">View on GitHub</span>
      </a>
    </div>
  </AnimatedSection>
);