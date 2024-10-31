import React from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { AnimatedSection } from "./AnimatedSection";

export const Header = () => (
  <header className="shadow-lg min-h-screen flex flex-col items-center w-full bg-bg">
    <div className="container max-w-screen-lg mx-auto px-6 py-16 text-center md:text-left flex flex-col md:flex-row md:justify-between">
      <div className="container md:max-w-screen-lg mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left section: Text */}
        <div className="md:w-1/2 md:pr-8 flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Kemas Khairunsyah
          </h1>
          <AnimatedSection>
            <p className="text-xl text-gray-500 mb-6">
              A Technology Enthusiast
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <a
                href="https://github.com/herros27"
                className="hover:text-gray-900"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/kemaskhairunsyah"
                className="text-gray-600 hover:text-gray-900"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:khairunsyah8935@gmail.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <MailIcon />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection className="md:w-1/2 flex justify-center md:justify-center">
        <img
          src="/profile.jpg"
          alt="Foto Diri"
          className="rounded-full object-cover shadow-lg m-8"
          style={{ width: "20rem", height: "20rem" }} // More appropriate size
        />
      </AnimatedSection>
    </div>

    <section className="container max-w-screen-lg mx-auto px-6 py-10 text-center md:text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
      <AnimatedSection>
        <p className="text-lg leading-relaxed text-gray-600">
          Hello! My name is Kemas Khairunsyah, and I'm from Belitung. Currently,
          I am pursuing a bachelor's degree in Informatics at Ahmad Dahlan
          University. Technology has always been my passion, and I am deeply
          enthusiastic about exploring and creating impactful solutions in this
          field.🍂
          <br />
          <br />
          I’m a part of the Mobile Development Cohort at Bangkit Academy, Batch
          2 of 2024, where I’m expanding my skills in Android development and
          mobile applications. I believe that technology has the power to solve
          real-world problems, and I’m excited to continue learning and growing
          in this ever-evolving field. Thank you for visiting my portfolio, and
          I look forward to sharing my journey with you!🐦‍🔥 .
        </p>
      </AnimatedSection>
    </section>
  </header>
);
