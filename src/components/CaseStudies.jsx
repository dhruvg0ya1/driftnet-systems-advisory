import React from 'react';
import { Award, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative bg-[#020409] border-t border-cyan-500/20 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 border border-emerald-500/50 text-[11px] text-emerald-400 mb-3 clip-bracket">
            <Award className="w-3.5 h-3.5" />
            <span>EMPIRICAL TRACK RECORD · VERIFIED METRICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            PROVEN AT PRODUCTION SCALE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200">
            Real enterprise systems benchmarked, deployed, and operated by Harsh Mistry, Dhruv Goyal, Mayank Pandey, and Himansh Harbola.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.scope}
              className="bg-[#050912] border-2 border-slate-700 hover:border-cyan-400 p-6 sm:p-8 clip-chamfer flex flex-col justify-between transition-all shadow-xl relative"
            >
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-bold">
                  CLIENT ENVIRONMENT:
                </div>
                <h3 className="text-lg font-black text-white uppercase font-heading">
                  {study.client}
                </h3>
                <span className="text-xs text-cyan-400 font-bold block mt-1">
                  SCOPE: {study.scope}
                </span>
                <span className="text-xs text-slate-300 block mt-0.5">
                  LEAD: {study.architect.toUpperCase()}
                </span>

                {/* Key Metrics Duo */}
                <div className="grid grid-cols-2 gap-3 my-6 pt-4 border-t border-slate-800">
                  <div className="bg-black p-3.5 border border-slate-700">
                    <div className="text-3xl font-black text-emerald-400 glow-text-green">
                      {study.metric1}
                    </div>
                    <div className="text-[11px] text-slate-300 uppercase mt-0.5 font-bold">
                      {study.metric1Label}
                    </div>
                  </div>

                  <div className="bg-black p-3.5 border border-slate-700">
                    <div className="text-3xl font-black text-cyan-400 glow-text-cyan">
                      {study.metric2}
                    </div>
                    <div className="text-[11px] text-slate-300 uppercase mt-0.5 font-bold">
                      {study.metric2Label}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {study.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="text-xs font-bold text-emerald-400">[VERIFIED IN PRODUCTION]</span>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
