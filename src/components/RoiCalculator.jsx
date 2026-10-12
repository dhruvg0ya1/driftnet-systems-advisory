import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Zap, ArrowRight, CheckSquare, Square } from 'lucide-react';

export default function RoiCalculator({ onOpenContact }) {
  const [monthlySpend, setMonthlySpend] = useState(25000);
  const [enablePromptCache, setEnablePromptCache] = useState(true);
  const [enableModelRouting, setEnableModelRouting] = useState(true);
  const [enableLowLevelDaemons, setEnableLowLevelDaemons] = useState(true);

  let savingsRatio = 0.20;
  if (enablePromptCache) savingsRatio += 0.18;
  if (enableModelRouting) savingsRatio += 0.12;
  if (enableLowLevelDaemons) savingsRatio += 0.08;

  const monthlySavings = Math.round(monthlySpend * savingsRatio);
  const annualSavings = monthlySavings * 12;
  const newMonthlyCost = monthlySpend - monthlySavings;

  return (
    <div className="bg-[#050912] border-2 border-cyan-500/40 p-6 lg:p-10 clip-chamfer relative shadow-2xl font-mono tactical-corners">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Input controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>AI INFERENCE UNIT ECONOMICS · SIMULATOR</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase">
              QUANTIFY COMPUTE & PIPELINE SAVINGS
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed">
              Based on Dhruv Goyal's benchmarked 58% inference cost reduction at The Economic Times and Harsh Mistry's ultra-low-overhead Go/Rust daemon engineering.
            </p>
          </div>

          {/* Monthly Spend Slider */}
          <div className="bg-black p-5 border border-cyan-500/40 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-200 font-bold">
                MONTHLY AI / CLOUD INFERENCE EXPENDITURE:
              </span>
              <span className="text-xl sm:text-2xl font-black text-cyan-400 glow-text-cyan">
                ${monthlySpend.toLocaleString()} / MO
              </span>
            </div>

            <input
              type="range"
              min="3000"
              max="150000"
              step="1000"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 appearance-none cursor-pointer accent-cyan-400"
            />

            <div className="flex justify-between text-xs text-slate-400 font-bold">
              <span>$3,000/MO</span>
              <span>$50,000/MO</span>
              <span>$100,000/MO</span>
              <span>$150,000/MO</span>
            </div>
          </div>

          {/* Toggle Levers */}
          <div className="space-y-2">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">
              TOGGLE ARCHITECTURAL LEVERS:
            </div>

            <button
              onClick={() => setEnablePromptCache(!enablePromptCache)}
              className={`w-full flex items-center justify-between p-3 border text-left text-xs transition-all cursor-pointer ${
                enablePromptCache
                  ? 'bg-cyan-950/60 border-cyan-400 text-white'
                  : 'bg-black border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {enablePromptCache ? (
                  <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500 shrink-0" />
                )}
                <div>
                  <span className="font-bold block text-slate-100">
                    Semantic Prompt Caching & Token Compression
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Eliminates redundant prefix token re-evaluations across multi-turn reasoning.
                  </span>
                </div>
              </div>
              <span className="text-cyan-400 font-bold shrink-0">[+18% CUT]</span>
            </button>

            <button
              onClick={() => setEnableModelRouting(!enableModelRouting)}
              className={`w-full flex items-center justify-between p-3 border text-left text-xs transition-all cursor-pointer ${
                enableModelRouting
                  ? 'bg-cyan-950/60 border-cyan-400 text-white'
                  : 'bg-black border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {enableModelRouting ? (
                  <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500 shrink-0" />
                )}
                <div>
                  <span className="font-bold block text-slate-100">
                    Dynamic 13-Model Cascade & Fallback Routing
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Routes 70% of standard queries to specialized compact models.
                  </span>
                </div>
              </div>
              <span className="text-cyan-400 font-bold shrink-0">[+12% CUT]</span>
            </button>

            <button
              onClick={() => setEnableLowLevelDaemons(!enableLowLevelDaemons)}
              className={`w-full flex items-center justify-between p-3 border text-left text-xs transition-all cursor-pointer ${
                enableLowLevelDaemons
                  ? 'bg-cyan-950/60 border-cyan-400 text-white'
                  : 'bg-black border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {enableLowLevelDaemons ? (
                  <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500 shrink-0" />
                )}
                <div>
                  <span className="font-bold block text-slate-100">
                    Native Go/Rust Daemon Offloading (Driftnet Style)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Replaces heavy Python/Node middleware with zero-runtime compiled daemons.
                  </span>
                </div>
              </div>
              <span className="text-cyan-400 font-bold shrink-0">[+8% CUT]</span>
            </button>
          </div>
        </div>

        {/* Right Computed Ledger */}
        <div className="lg:col-span-5">
          <div className="bg-black border-2 border-cyan-400 p-6 sm:p-8 clip-chamfer relative shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/30">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                AUDITED PROJECTION LEDGER
              </span>
              <span className="px-2 py-0.5 bg-cyan-400 text-slate-950 font-black text-[10px]">
                {Math.round(savingsRatio * 100)}% COST SLICE
              </span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 block uppercase">
                PROJECTED ANNUAL CAPITAL RECLAIMED:
              </span>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 glow-text-green font-mono mt-1">
                ${annualSavings.toLocaleString()}
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                Direct net profit addition to your company's balance sheet.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800">
              <div className="bg-[#05080e] p-3 border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-semibold">NEW MONTHLY BILL</span>
                <span className="text-base font-bold text-white mt-0.5 block">
                  ${newMonthlyCost.toLocaleString()}/mo
                </span>
                <span className="text-[10px] text-emerald-400">
                  Save ${monthlySavings.toLocaleString()}/mo
                </span>
              </div>

              <div className="bg-[#05080e] p-3 border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-semibold">THROUGHPUT SPEEDUP</span>
                <span className="text-base font-bold text-cyan-400 mt-0.5 block">
                  4.0X THROUGHPUT
                </span>
                <span className="text-[10px] text-slate-400">
                  Sub-second p99
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenContact && onOpenContact('cost-audit')}
              className="w-full py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-widest transition-all cursor-pointer clip-bracket shadow-lg shadow-cyan-500/20"
            >
              BOOK ARCHITECTURE AUDIT SPRINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
