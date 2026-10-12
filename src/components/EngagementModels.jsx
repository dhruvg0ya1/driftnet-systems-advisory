import React from 'react';
import { Calendar, Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { ENGAGEMENT_MODELS } from '../data/content';

export default function EngagementModels({ onOpenContact }) {
  return (
    <section id="engagement" className="py-24 relative bg-[#03060c] border-t border-cyan-500/20 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 border border-cyan-500/50 text-[11px] text-cyan-400 mb-3 clip-bracket">
            <Calendar className="w-3.5 h-3.5" />
            <span>PARTNERSHIP STRUCTURES · ENGAGEMENT TIERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            ENGAGEMENT MODELS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200">
            High-velocity, founder-led engagements with direct code delivery and architectural accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.tier}
              className={`p-6 sm:p-8 border-2 flex flex-col justify-between transition-all duration-300 relative clip-chamfer ${
                model.popular
                  ? 'bg-[#060b16] border-cyan-400 shadow-2xl shadow-cyan-500/20'
                  : 'bg-[#040810] border-slate-700 hover:border-slate-500'
              }`}
            >
              {model.popular && (
                <div className="absolute top-0 right-0 bg-cyan-400 text-slate-950 font-black text-[10px] px-3.5 py-1 uppercase tracking-wider">
                  MOST REQUESTED ENGAGEMENT
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-white uppercase font-heading">{model.tier}</h3>
                  <span className="text-[11px] font-bold px-2.5 py-1 bg-black border border-slate-700 text-cyan-300">
                    {model.timeline}
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-2.5 min-h-[36px] font-medium leading-relaxed">{model.idealFor}</p>

                <p className="text-sm text-slate-200 mt-4 leading-relaxed">
                  {model.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    SCOPE INCLUSIONS:
                  </span>
                  {model.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100">
                      <span className="text-cyan-400 font-bold shrink-0">[+]</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenContact && onOpenContact(model.tier)}
                  className={`w-full py-3.5 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer clip-bracket ${
                    model.popular
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400'
                  }`}
                >
                  <span>INQUIRE FOR {model.tier}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
