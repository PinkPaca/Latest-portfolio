import React = require('react');
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-basic-color container mx-auto px=12 py-4">
      <div className="container mt-12">
        <HeroSection />
      </div>
    </main>
  );
}
