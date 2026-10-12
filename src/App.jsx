import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TacticalHudBar from './components/TacticalHudBar';
import TacticalTerminal from './components/TacticalTerminal';
import AiPipelineDag from './components/AiPipelineDag';
import ServicesBento from './components/ServicesBento';
import DriftnetShowcase from './components/DriftnetShowcase';
import FoundersSection from './components/FoundersSection';
import RoiCalculator from './components/RoiCalculator';
import CaseStudies from './components/CaseStudies';
import EngagementModels from './components/EngagementModels';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('');
  const [crtEnabled, setCrtEnabled] = useState(false);

  const handleOpenContact = (interest = '') => {
    setSelectedInterest(interest);
    setContactModalOpen(true);
  };

  return (
    <div
      className={`bg-[#03060c] text-slate-200 min-h-screen selection:bg-cyan-500/30 selection:text-white relative ${
        crtEnabled ? 'crt-scanlines' : ''
      }`}
    >
      {/* Unified Fixed Navbar with Integrated Telemetry Strip & CRT Toggle */}
      <Navbar
        onOpenContact={handleOpenContact}
        crtEnabled={crtEnabled}
        setCrtEnabled={setCrtEnabled}
      />

      {/* Main Content with proper clearance for fixed navbar */}
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Live Telemetry Marquee Ticker */}
        <TacticalHudBar />

        {/* Embedded Interactive Tactical CLI Terminal */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-cyan-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
              <span>INTERACTIVE COMMAND LINE · SOVEREIGN SHELL</span>
            </span>
            <span className="text-[10px] text-slate-400">
              SESSION: TTY_0 · TYPE "help" OR "driftnet"
            </span>
          </div>
          <TacticalTerminal onOpenContact={handleOpenContact} />
        </section>

        {/* Practice Areas Bento Grid */}
        <ServicesBento onOpenContact={handleOpenContact} />

        {/* Flagship Product: Driftnet Showcase & Telemetry Simulator */}
        <DriftnetShowcase onOpenContact={handleOpenContact} />

        {/* Founders Dossier (Harsh Mistry & Dhruv Goyal) */}
        <FoundersSection />

        {/* Interactive 7-Stage DAG Visualizer (Dhruv Goyal Times Internet Pipeline) */}
        <AiPipelineDag />

        {/* Interactive Architecture & AI Cost ROI Calculator */}
        <section
          id="calculator"
          className="py-20 relative bg-[#020409] border-t border-cyan-500/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RoiCalculator onOpenContact={handleOpenContact} />
          </div>
        </section>

        {/* Empirical Case Studies */}
        <CaseStudies />

        {/* Engagement Models */}
        <EngagementModels onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact / Scoping Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultInterest={selectedInterest}
      />
    </div>
  );
}
