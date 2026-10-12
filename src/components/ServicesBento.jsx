import React, { useState } from 'react';
import { Bot, Shield, Terminal, Database, TrendingUp, ArrowRight, Check, X, Sparkles, Layers } from 'lucide-react';
import { SERVICES } from '../data/content';

const SERVICE_ICONS = {
  'ai-systems': Bot,
  'cyber-defense': Shield,
  'data-cloud': Database,
  'product-strategy': TrendingUp
};

const PRACTICE_THEMES = {
  'ai-systems': {
    border: 'border-cyan-500/40 tactical-panel hover:border-cyan-400',
    iconBorder: 'border-cyan-400 bg-cyan-500/10 text-cyan-400',
    accentText: 'text-cyan-400',
    checkColor: 'text-cyan-400',
    badgeText: 'text-cyan-300'
  },
  'cyber-defense': {
    border: 'border-amber-500/50 tactical-panel-amber hover:border-amber-400',
    iconBorder: 'border-amber-500 bg-amber-500/10 text-amber-400',
    accentText: 'text-amber-400',
    checkColor: 'text-amber-400',
    badgeText: 'text-amber-300'
  },
  'data-cloud': {
    border: 'border-emerald-500/50 tactical-panel hover:border-emerald-400',
    iconBorder: 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
    accentText: 'text-emerald-400',
    checkColor: 'text-emerald-400',
    badgeText: 'text-emerald-300'
  },
  'product-strategy': {
    border: 'border-purple-500/50 tactical-panel hover:border-purple-400',
    iconBorder: 'border-purple-500 bg-purple-500/10 text-purple-400',
    accentText: 'text-purple-400',
    checkColor: 'text-purple-400',
    badgeText: 'text-purple-300'
  }
};

export default function ServicesBento({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 relative bg-[#03060c] border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 font-mono">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 border border-cyan-500/50 text-[11px] text-cyan-400 mb-3 clip-bracket">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE PRACTICE MATRIX · 4 DOMAINS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            DEEP TECHNICAL ADVISORY & EXECUTION
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
            No generic management consulting slides. We engineer sovereign AI pipelines, self-calibrated network security daemons, distributed cloud data warehouses, and executive GTM commercial frameworks.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Sparkles;
            const theme = PRACTICE_THEMES[service.id] || PRACTICE_THEMES['ai-systems'];

            return (
              <div
                key={service.id}
                className={`bg-[#050912] border-2 p-6 sm:p-8 clip-chamfer relative shadow-2xl flex flex-col justify-between group transition-colors ${theme.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 border flex items-center justify-center ${theme.iconBorder}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-black border border-slate-700 text-slate-200">
                      [{service.stats || 'VERIFIED CAPABILITY'}]
                    </span>
                  </div>

                  <span className={`text-xs font-bold block mb-1 uppercase tracking-wider ${theme.accentText}`}>
                    PRACTICE LEAD: {service.lead.toUpperCase()}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading uppercase tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-200 mt-4 leading-relaxed font-sans sm:font-mono">
                    {service.description || service.summary}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="mt-6 space-y-2.5">
                    <span className="text-[11px] uppercase text-slate-400 tracking-wider font-bold block">
                      ENGINEERING DELIVERABLES:
                    </span>
                    {(service.deliverables || []).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100">
                        <span className={`font-bold shrink-0 mt-0.5 ${theme.checkColor}`}>
                          [✓]
                        </span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {(service.techStack || []).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 bg-black border border-slate-700 text-slate-300 font-bold hover:text-white hover:border-slate-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 cursor-pointer font-bold uppercase tracking-wider"
                  >
                    <span>[VIEW FULL ROADMAP]</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenContact && onOpenContact(service.id)}
                    className="text-xs font-bold px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    ENGAGE PRACTICE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sharp Tactical Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#050912] border-2 border-cyan-400 p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative clip-chamfer font-mono max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 border border-slate-700 bg-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs text-cyan-400 font-bold block mb-1">
              PRACTICE LEAD: {selectedService.lead.toUpperCase()}
            </span>
            <h3 className="text-2xl font-black text-white font-heading uppercase">
              {selectedService.title}
            </h3>
            <p className="text-sm text-slate-200 mt-2 leading-relaxed">{selectedService.description || selectedService.summary}</p>

            <div className="mt-6">
              <div className="text-[11px] text-slate-300 uppercase tracking-wider mb-2 font-bold">
                VERIFIED DELIVERABLES ROADMAP:
              </div>
              <div className="space-y-2.5">
                {(selectedService.deliverables || []).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 bg-black border border-slate-800 text-xs sm:text-sm text-slate-100"
                  >
                    <span className="text-cyan-400 font-bold shrink-0">[0{idx + 1}]</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setSelectedService(null);
                  if (onOpenContact) onOpenContact(selectedService.id);
                }}
                className="w-full py-3.5 bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-cyan-300 cursor-pointer clip-bracket"
              >
                SCHEDULE ARCHITECTURAL SCOPE REVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
