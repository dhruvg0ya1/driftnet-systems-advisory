import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, Clock, Eye, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Navbar({ onOpenContact, crtEnabled, setCrtEnabled }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-mono transition-all">
      {/* Top Telemetry Strip */}
      <div className="bg-[#020409] border-b border-cyan-500/20 text-[10px] text-cyan-400 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          {/* Left Status Grid */}
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 bg-emerald-400 animate-ping inline-block" />
              <span>DEFENSE GRID ONLINE</span>
            </span>

            <span className="text-slate-800 hidden sm:inline">|</span>

            <span className="text-slate-400 hidden sm:flex items-center gap-1">
              <span>NODE:</span>
              <span className="text-slate-200 font-semibold">DELHI NCR [28.5°N, 77.3°E]</span>
            </span>

            <span className="text-slate-800 hidden md:inline">|</span>

            <span className="text-slate-400 hidden md:flex items-center gap-1">
              <span>UPTIME:</span>
              <span className="text-emerald-400 font-bold">99.99%</span>
            </span>
          </div>

          {/* Right Live Clock & CRT Shader Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span className="font-semibold">{timeStr || 'SYNCHRONIZING...'}</span>
            </div>

            {setCrtEnabled && (
              <button
                onClick={() => setCrtEnabled(!crtEnabled)}
                className={`px-2.5 py-1 text-[9px] font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  crtEnabled
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
                title="Toggle CRT Screen Scanlines FX"
              >
                <Eye className="w-2.5 h-2.5" />
                <span>CRT [{crtEnabled ? 'ON' : 'OFF'}]</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-[#03060c]/95 border-b border-cyan-500/30 backdrop-blur-md transition-all ${
          isScrolled ? 'py-2.5 shadow-2xl' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 bg-black border-2 border-cyan-400 flex items-center justify-center font-bold text-white clip-bracket group-hover:border-amber-400 transition-colors">
                <span className="text-white text-xs">D</span>
                <span className="text-amber-400 text-xs">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-white tracking-wider font-heading leading-tight group-hover:text-cyan-400 uppercase">
                  DRIFTNET
                </span>
                <span className="text-[9px] text-slate-400 tracking-widest uppercase font-mono -mt-0.5">
                  SYSTEMS & ADVISORY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono text-slate-300">
              <a
                href="#services"
                className="hover:text-cyan-400 transition-colors uppercase tracking-wider py-1"
              >
                Practices
              </a>

              <a
                href="#driftnet"
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider py-1"
              >
                <span>Driftnet</span>
                <span className="text-[9px] px-1 py-0.2 bg-amber-500 text-slate-950 font-black">
                  PRODUCT
                </span>
              </a>

              <a
                href="#team"
                className="hover:text-cyan-400 transition-colors uppercase tracking-wider py-1"
              >
                Team
              </a>

              <a
                href="#pipeline"
                className="hover:text-cyan-400 transition-colors uppercase tracking-wider py-1"
              >
                AI Pipeline
              </a>

              <a
                href="#calculator"
                className="hover:text-cyan-400 transition-colors uppercase tracking-wider py-1"
              >
                ROI Calculator
              </a>

              <a
                href="#engagement"
                className="hover:text-cyan-400 transition-colors uppercase tracking-wider py-1"
              >
                Engagement
              </a>
            </nav>

            {/* Header Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={COMPANY_INFO.driftnetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3.5 py-2 bg-black text-amber-300 border border-amber-500/50 hover:bg-slate-900 transition-all font-mono"
              >
                <span>Driftnet Sandbox</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </a>

              <button
                onClick={() => onOpenContact && onOpenContact()}
                className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all cursor-pointer clip-bracket shadow-md shadow-cyan-500/20"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenContact && onOpenContact()}
                className="sm:hidden text-xs font-bold px-3 py-1.5 bg-cyan-400 text-slate-950 cursor-pointer"
              >
                Inquire
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-400 hover:text-white p-2 border border-slate-800 bg-black cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 p-4 bg-[#050912] border border-cyan-500/40 text-xs space-y-3 shadow-2xl font-mono">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 py-1.5 border-b border-slate-900"
              >
                Practices & Capabilities
              </a>

              <a
                href="#driftnet"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-amber-400 font-bold py-1.5 border-b border-slate-900"
              >
                Driftnet Network Anomaly Engine
              </a>

              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 py-1.5 border-b border-slate-900"
              >
                Leadership & Engineering Team
              </a>

              <a
                href="#pipeline"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 py-1.5 border-b border-slate-900"
              >
                7-Stage Generative AI DAG Pipeline
              </a>

              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 py-1.5 border-b border-slate-900"
              >
                AI Compute ROI Calculator
              </a>

              <a
                href="#engagement"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 py-1.5"
              >
                Engagement Models
              </a>

              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={COMPANY_INFO.driftnetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-amber-400 font-bold"
                >
                  <span>Visit Driftnet Sandbox</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="w-full py-2.5 bg-cyan-400 text-slate-950 font-black text-xs uppercase text-center cursor-pointer"
                >
                  Book Scoping Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
