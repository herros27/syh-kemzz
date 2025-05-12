import React from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons/icons";
import { AnimatedSection } from "./AnimatedSection";
import Typewriter from "typewriter-effect";

export const Header = () => (
  <header
    className="shadow-lg min-h-screen flex flex-col items-center w-full bg-text-tag"
    id="header"
  >
    <div className="container max-w-screen-lg bg-bg mx-auto px-6 py-16 text-center md:text-left flex flex-col md:flex-row md:justify-between">
      <div className="container md:max-w-screen-lg mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left section: Text */}
        <div className="md:w-1/2 md:pr-8 flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100, // kecepatan mengetik (ms per karakter)
                deleteSpeed: 50, // kecepatan menghapus
                pauseFor: 2000, // jeda sebelum menghapus (ms)
                strings: [
                  "Kemas Khairunsyah",
                  "Front-End and Back-End Developer",
                  "Web, Mobile, and AI Enthusiast",
                ],
              }}
            />
          </h1>
          <AnimatedSection>
            <p className="text-xl text-silver mb-6">Hawoo 🖐️😁🖐️</p>
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

    <section className="container max-w-screen-lg bg-metal mx-auto px-6 py-6 text-center md:text-left">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <AnimatedSection>
        <p className="text-lg leading-relaxed text-bg">
          Hello! My name is Kemas Khairunsyah, and I'm from Belitung. Currently,
          I am pursuing a bachelor's degree in Informatics at Ahmad Dahlan
          University. Technology has always been my passion, and I am deeply
          enthusiastic about exploring and creating impactful solutions in this
          field.🍂
          <br />
          <br />
          I’m a distinction graduate of the Mobile Development Cohort at Bangkit
          Academy, Batch 2 of 2024, where I’m expanding my skills in Android
          development and mobile applications. I believe that technology has the
          power to solve real-world problems, and I’m excited to continue
          learning and growing in this ever-evolving field. Thank you for
          visiting my portfolio, and I look forward to sharing my
          journey with you!🐦‍🔥 .
        </p>
      </AnimatedSection>
    </section>
  </header>
);
