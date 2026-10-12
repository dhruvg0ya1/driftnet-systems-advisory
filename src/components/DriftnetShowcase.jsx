import React from 'react';
import { ShieldCheck, Cpu, Terminal, ArrowUpRight, Activity, Server, Zap, CheckCircle2, Lock } from 'lucide-react';
import { DRIFTNET_PRODUCT } from '../data/content';
import DriftnetSimulator from './DriftnetSimulator';

export default function DriftnetShowcase({ onOpenContact }) {
  return (
    <section id="driftnet" className="py-24 relative bg-[#02050b] border-t-2 border-amber-500/30 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge & Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950 border border-amber-500/50 text-[11px] text-amber-400 mb-4 clip-bracket">
            <span className="w-2 h-2 bg-amber-400 animate-ping inline-block" />
            <span>FLAGSHIP PRODUCT · {DRIFTNET_PRODUCT.subdomain.toUpperCase()}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            MEET DRIFTNET.
            <span className="block text-amber-400 glow-text-amber mt-2">
              ANOMALY DETECTION CALIBRATED ON YOUR TRAFFIC.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
            "{DRIFTNET_PRODUCT.tagline}" Architected by co-founder Harsh Mistry, Driftnet acts as a sovereign, self-hosted second tier behind Suricata, Zeek, or Snort.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={DRIFTNET_PRODUCT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all cursor-pointer clip-chamfer shadow-lg shadow-amber-500/25"
            >
              <span>EXPLORE PRODUCT SITE ({DRIFTNET_PRODUCT.subdomain})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenContact && onOpenContact('driftnet-deployment')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs uppercase border border-amber-500/40 transition-all cursor-pointer"
            >
              <Server className="w-4 h-4 text-amber-400" />
              <span>REQUEST ENTERPRISE INTEGRATION</span>
            </button>
          </div>
        </div>

        {/* 4 Sovereign Metrics Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {DRIFTNET_PRODUCT.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#05080f] p-5 border border-amber-500/40 text-center flex flex-col justify-between clip-bracket shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase">{metric.label}</div>
              <div className="text-[11px] text-slate-300 mt-1">{metric.desc}</div>
            </div>
          ))}
        </div>

        {/* Live Simulator Demonstration */}
        <div className="mb-20">
          <DriftnetSimulator />
        </div>

        {/* Architecture Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8 border-t border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 uppercase font-bold mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>THE SIGNATURE BLINDSPOT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase">
              WHY STATIC SIGNATURES FAIL AGAINST ADVERSARIES
            </h3>
            <p className="mt-4 text-sm text-slate-200 leading-relaxed">
              Suricata and Snort only catch known signatures. Attackers living off the land, conducting lateral scans, or leaking data over standard protocols leave signature engines silent.
            </p>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">
              Driftnet learns the behavioral baseline of your network from raw PCAPs. When a host exhibits uncharacteristic byte ratios or fan-outs, Driftnet flags it with mathematical explainability—without sending a single byte off your network.
            </p>

            <div className="mt-6 space-y-3">
              {DRIFTNET_PRODUCT.features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 text-xs bg-[#05080f] p-3.5 border border-slate-700">
                  <span className="text-amber-400 font-bold shrink-0 mt-0.5">[+]</span>
                  <div>
                    <span className="font-bold text-white text-xs sm:text-sm uppercase block">
                      {feature.title}
                    </span>
                    <span className="text-xs text-slate-300 block mt-1 leading-relaxed">
                      {feature.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Spec Card */}
          <div className="bg-black border-2 border-amber-500/40 p-6 sm:p-8 clip-chamfer font-mono text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/30">
              <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>DRIFTNET PIPELINE ARCHITECTURE</span>
              </span>
              <span className="text-[10px] text-slate-400">DAEMON EXECUTION</span>
            </div>

            <div className="p-3.5 bg-[#060912] border border-slate-700">
              <span className="text-[11px] text-amber-400 font-bold block">STAGE 01: INGESTION</span>
              <span className="text-white font-bold text-sm block mt-0.5">Raw Sockets / PCAP / Zeek / Suricata</span>
              <span className="text-xs text-slate-300 mt-1 block">Zero packet drops; raw socket or log tail stream</span>
            </div>

            <div className="text-center text-amber-400 text-xs font-bold">
              ↓ [RANK-GAUSSIAN FEATURE TRANSFORM]
            </div>

            <div className="p-3.5 bg-[#060912] border border-amber-500/60 shadow-md">
              <span className="text-[11px] text-amber-400 font-bold block">STAGE 02: ALGORITHMIC EVALUATION</span>
              <span className="text-white font-bold text-sm block mt-0.5">Shrinkage Mahalanobis Distance (D_M)</span>
              <span className="text-xs text-slate-300 mt-1 block">Contextual protocol peer comparison + compact autoencoder loss</span>
            </div>

            <div className="text-center text-amber-400 text-xs font-bold">
              ↓ [CALIBRATED DAILY ALERT BUDGET]
            </div>

            <div className="p-3.5 bg-[#060912] border border-slate-700">
              <span className="text-[11px] text-amber-400 font-bold block">STAGE 03: ADVISORY DISPATCH</span>
              <span className="text-white font-bold text-sm block mt-0.5">Local JSON / Webhook / SIEM Integration</span>
              <span className="text-xs text-emerald-400 mt-1 block font-bold">Driftnet only reports; it never blocks. 0% Exfiltration.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
