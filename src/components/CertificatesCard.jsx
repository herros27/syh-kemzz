import React from "react";
import { GitHubIcon } from "./icons/icons";
import { DicodingIcon } from "./icons/icons";
import { AnimatedSection } from "./AnimatedSection";
import { AnimatedImage } from "./AnimatedImage";
// import "../components/style/styling.css";
export const CertificatesCard = ({ certificate }) => (
  <AnimatedSection>
    <div className="bg-card rounded-lg shadow-md p-6">
      {/* Menambahkan gambar sertifikat */}
      {certificate.image && (
        <AnimatedImage
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-42 object-cover rounded-lg mb-4"
          animation="rotate-in"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
      <p className="text-gray-600 mb-4">{certificate.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {certificate.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="bg-tag text-white text-sm px-3 py-1 rounded-full flip-hover"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={certificate.github}
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        {/* <GitHubIcon /> <span className="ml-2">View on GitHub</span> */}
        <DicodingIcon /> <span className="ml-2">View on Dicoding</span>
      </a>
    </div>
  </AnimatedSection>
);
