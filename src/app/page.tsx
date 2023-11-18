import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-basic-color container mx-auto px-12 py-4">
      <div className="container mt-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
