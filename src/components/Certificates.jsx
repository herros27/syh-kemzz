import React from 'react';
import { CertificatesCard } from './CertificatesCard';
import { AnimatedSection } from './AnimatedSection';

export const Certificates = ({ certificates }) => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Certificates</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {certificates.map((certificate, index) => (
          <CertificatesCard key={index} certificate={certificate} />
        ))}
      </div>

      
    </div>
  </section>
);