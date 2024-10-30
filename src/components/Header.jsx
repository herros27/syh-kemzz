import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';
import { AnimatedSection } from './AnimatedSection';

export const Header = () => (
  <header className="shadow-lg min-h-screen flex flex-col justify-center items-center w-full bg-bg">
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Kemas Khairunsyah
      </h1>
      <AnimatedSection className="flex justify-center items-center">
        <img
          src="/profile.jpg" // Ganti dengan nama file yang sesuai
          alt="Foto Diri"
          className="rounded-full w-48 object-cover shadow-lg m-8"
        />
      </AnimatedSection>
      <p className="text-xl text-gray-500 m-6">
        A Technology Enthusiast
      </p>
      <AnimatedSection>
        <div className="flex space-x-4 mt-10 justify-center items-center">
          <a href="https://github.com/herros27" className="hover:text-gray-900">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/kemaskhairunsyah" className="text-gray-600 hover:text-gray-900">
            <LinkedInIcon />
          </a>
          <a href="mailto:khairunsyah8935@gmail.com" className="text-gray-600 hover:text-gray-900">
            <MailIcon />
          </a>
        </div>
      </AnimatedSection>
    </div>
  </header>
);
