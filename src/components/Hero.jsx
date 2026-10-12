import React from 'react';
import { ArrowRight, ArrowUpRight, Shield, Cpu, Terminal, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';
import { COMPANY_INFO } from '../data/content';

export default function Hero({ onOpenContact, onFocusTerminal }) {
  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 flex items-center justify-center overflow-hidden radar-grid">
      {/* Tactical Canvas Background */}
      <NetworkCanvas />

      {/* Cyberpunk gradient scan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-amber-500/10 via-cyan-500/15 to-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Tactical Status Tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1 bg-[#060b14] border border-cyan-400/50 text-xs font-mono text-cyan-300 mb-8 shadow-xl clip-bracket">
          <span className="w-2 h-2 bg-emerald-400 animate-ping inline-block" />
          <span className="text-emerald-400 font-bold uppercase tracking-wider">
            SYSTEM STATUS: ACCEPTING Q4/Q1 ENGAGEMENTS
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">DEFENSE & AI ARCHITECTURE</span>
        </div>

        {/* Primary Brutalist Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tighter max-w-5xl mx-auto leading-[1.05] uppercase">
          HIGH-PERFORMANCE SYSTEMS &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 glow-text-cyan">
            SOVEREIGN ENTERPRISE AI.
          </span>
        </h1>

        {/* Subtitle with Founder Attribution */}
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-200 max-w-4xl mx-auto font-mono leading-relaxed">
          Elite engineering advisory co-founded by <strong className="text-white underline decoration-amber-500 underline-offset-4">Harsh Mistry</strong> (IIIT-Delhi Systems & Cybersecurity Researcher) and <strong className="text-white underline decoration-cyan-400 underline-offset-4">Dhruv Goyal</strong> (The Economic Times AI Product Engineer & Published Author), with <strong className="text-white underline decoration-emerald-400 underline-offset-4">Mayank Pandey</strong> (Distributed Data Architecture) and <strong className="text-white underline decoration-purple-400 underline-offset-4">Himansh Harbola</strong> (Enterprise Product Strategy).
        </p>

        {/* Flagship Product Banner Pill */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-[#090e1c] border-2 border-amber-500/60 text-xs font-mono text-amber-300 max-w-2xl mx-auto clip-chamfer">
          <span className="font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            FLAGSHIP PRODUCT:
          </span>
          <span>Driftnet — Autonomous Behavioral Anomaly Daemon</span>
          <a
            href={COMPANY_INFO.driftnetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-amber-400 hover:text-white font-bold underline underline-offset-2 ml-1"
          >
            <span>driftnet.tech</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tactical Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono">
          <button
            onClick={() => onOpenContact && onOpenContact()}
            className="flex items-center gap-2 px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-widest transition-all cursor-pointer clip-chamfer shadow-lg shadow-cyan-500/25"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>BOOK CONSULTATION</span>
          </button>

          <a
            href="#driftnet"
            className="flex items-center gap-2 px-6 py-4 bg-[#0a101f] hover:bg-[#111a33] text-amber-300 font-bold text-xs uppercase tracking-widest border border-amber-500/50 transition-all clip-bracket"
          >
            <Shield className="w-4 h-4 text-amber-400" />
            <span>EXPLORE DRIFTNET</span>
          </a>

          <a
            href="#services"
            className="flex items-center gap-2 px-6 py-4 bg-transparent hover:bg-slate-900/60 text-slate-300 hover:text-white text-xs uppercase tracking-wider border border-slate-700 transition-all"
          >
            <span>VIEW PRACTICES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Sharp Tactical Metric Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto font-mono">
          <div className="bg-[#050a14] border border-cyan-500/40 p-4 sm:p-5 text-center clip-bracket tactical-corners shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 glow-text-cyan">58% CUT</div>
            <div className="text-xs text-slate-100 uppercase font-bold mt-1.5">Inference Cost Reduction</div>
            <div className="text-[11px] text-slate-400 mt-0.5">The Economic Times Benchmark</div>
          </div>

          <div className="bg-[#050a14] border border-emerald-500/40 p-4 sm:p-5 text-center clip-bracket tactical-corners shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 glow-text-green">4X SPEED</div>
            <div className="text-xs text-slate-100 uppercase font-bold mt-1.5">End-to-End Throughput</div>
            <div className="text-[11px] text-slate-400 mt-0.5">13 Model API Cascade</div>
          </div>

          <div className="bg-[#050a14] border border-amber-500/40 p-4 sm:p-5 text-center clip-bracket tactical-corners-amber shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-amber-400 glow-text-amber">0% LEAK</div>
            <div className="text-xs text-slate-100 uppercase font-bold mt-1.5">Air-Gapped Telemetry</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Driftnet Security Guarantee</div>
          </div>

          <div className="bg-[#050a14] border border-slate-700 p-4 sm:p-5 text-center clip-bracket shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-white">100% CODE</div>
            <div className="text-xs text-slate-100 uppercase font-bold mt-1.5">Direct Founder Commits</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Zero Junior Delegation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
