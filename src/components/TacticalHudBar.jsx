import React from 'react';

export default function TacticalHudBar() {
  return (
    <div className="w-full bg-[#020408] border-y border-cyan-500/20 py-2 overflow-hidden select-none font-mono">
      <div className="animate-marquee whitespace-nowrap text-[11px] text-slate-400 flex gap-10">
        <span className="text-amber-400 font-bold">
          [+] FLAGSHIP PRODUCT: DRIFTNET v0.2.0 · SELF-HOSTED ANOMALY ENGINE LIVE AT driftnet.tech
        </span>
        <span className="text-cyan-400 font-bold">
          [+] VERIFIED ENTERPRISE AI: TIMES INTERNET 7-STAGE PIPELINE · 58% INFERENCE REDUCTION · 4X THROUGHPUT
        </span>
        <span className="text-emerald-400 font-bold">
          [+] SOVEREIGN PROTOCOL: 0% OUTBOUND TELEMETRY LEAKAGE · SHRINKAGE MAHALANOBIS DISTANCE CALIBRATED
        </span>
        <span className="text-slate-300 font-bold">
          [+] ARCHITECTS: HARSH MISTRY (IIIT-DELHI SYSTEMS/SEC) · DHRUV GOYAL (TIMES INTERNET AI PRODUCT ENG)
        </span>
        <span className="text-amber-400 font-bold">
          [+] CODEOGRAPH: TREE-SITTER AST REPO INDEXING & AUTOMATED PR AGENTS OPERATIONAL
        </span>
        <span className="text-cyan-400 font-bold">
          [+] NOW BOOKING: Q4 2026 / Q1 2027 ENTERPRISE ADVISORY & EMBEDDED ENGINEERING SPRINTS
        </span>

        {/* Repeat for seamless infinite marquee loop */}
        <span className="text-amber-400 font-bold">
          [+] FLAGSHIP PRODUCT: DRIFTNET v0.2.0 · SELF-HOSTED ANOMALY ENGINE LIVE AT driftnet.tech
        </span>
        <span className="text-cyan-400 font-bold">
          [+] VERIFIED ENTERPRISE AI: TIMES INTERNET 7-STAGE PIPELINE · 58% INFERENCE REDUCTION · 4X THROUGHPUT
        </span>
        <span className="text-emerald-400 font-bold">
          [+] SOVEREIGN PROTOCOL: 0% OUTBOUND TELEMETRY LEAKAGE · SHRINKAGE MAHALANOBIS DISTANCE CALIBRATED
        </span>
        <span className="text-slate-300 font-bold">
          [+] ARCHITECTS: HARSH MISTRY (IIIT-DELHI SYSTEMS/SEC) · DHRUV GOYAL (TIMES INTERNET AI PRODUCT ENG)
        </span>
        <span className="text-amber-400 font-bold">
          [+] CODEOGRAPH: TREE-SITTER AST REPO INDEXING & AUTOMATED PR AGENTS OPERATIONAL
        </span>
        <span className="text-cyan-400 font-bold">
          [+] NOW BOOKING: Q4 2026 / Q1 2027 ENTERPRISE ADVISORY & EMBEDDED ENGINEERING SPRINTS
        </span>
      </div>
    </div>
  );
}
