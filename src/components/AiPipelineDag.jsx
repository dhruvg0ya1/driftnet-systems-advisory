import React, { useState } from 'react';
import { Cpu, ArrowRight, CheckCircle2, Zap, Layers, Sparkles, Activity } from 'lucide-react';

const DAG_NODES = [
  {
    id: 'stage1',
    step: 'STAGE_01',
    name: 'Ingestion & AST Tokenization',
    lead: 'Dhruv Goyal',
    tech: 'Tree-sitter / Multi-source Stream',
    latency: '18ms',
    costDelta: '-15% Overhead',
    desc: 'Raw multi-source content ingestion with AST graph parsing and dynamic semantic chunking to preserve code/context integrity.'
  },
  {
    id: 'stage2',
    step: 'STAGE_02',
    name: 'Semantic Prompt Prefix Cache',
    lead: 'Dhruv Goyal',
    tech: 'KV-Cache Sharing / Prefix Distill',
    latency: '8ms (Cache Hit)',
    costDelta: '-32% Token Burn',
    desc: 'Eliminates repetitive system prompt re-evaluations across multi-turn reasoning cycles, achieving near-zero cache latency.'
  },
  {
    id: 'stage3',
    step: 'STAGE_03',
    name: 'Speculative Multi-Model Cascade',
    lead: 'Dhruv Goyal',
    tech: '13 Model APIs / Fallback Router',
    latency: '140ms',
    costDelta: '-58% Inference Bill',
    desc: 'Routes 70% of standard inferences through fast, specialized compact models, reserving heavyweight frontier LLMs for verified ambiguity.'
  },
  {
    id: 'stage4',
    step: 'STAGE_04',
    name: 'Multi-Agent Verification Loop',
    lead: 'Dhruv Goyal',
    tech: 'ReAct Agent / Tool Execution',
    latency: '85ms',
    costDelta: 'Zero Hallucination',
    desc: 'Deterministic evaluation loop checking output against strict factual constraints and AST syntax validity.'
  },
  {
    id: 'stage5',
    step: 'STAGE_05',
    name: 'Latent Diffusion Synthesis',
    lead: 'Dhruv Goyal',
    tech: 'TensorRT / GPU Virtualization',
    latency: '420ms',
    costDelta: '4x Speedup',
    desc: 'High-throughput visual frame generation optimized via FP16 TensorRT compilation and parallel pipeline staging.'
  },
  {
    id: 'stage6',
    step: 'STAGE_06',
    name: 'Neural TTS & Phoneme Align',
    lead: 'Dhruv Goyal',
    tech: 'Streaming Neural Vocoder',
    latency: '120ms',
    costDelta: 'Zero Artifacts',
    desc: 'Sub-second audio synthesis with precise phoneme timestamp alignment for downstream lip-synchronization.'
  },
  {
    id: 'stage7',
    step: 'STAGE_07',
    name: 'Sub-Minute Lip-Sync Output',
    lead: 'Dhruv Goyal',
    tech: 'Wav2Lip / Video Blender',
    latency: '850ms',
    costDelta: 'Zero Human Delay',
    desc: 'Compiles production-ready financial news video in under 60 seconds with flawless audio-visual sync.'
  }
];

export default function AiPipelineDag() {
  const [activeNode, setActiveNode] = useState(DAG_NODES[2]); // Default to 13-Model Cascade

  return (
    <section id="pipeline" className="py-20 relative bg-[#03060c] border-y border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 mb-3 clip-bracket">
            <Zap className="w-3.5 h-3.5" />
            <span>PROPRIETARY AI ARCHITECTURE · 7-STAGE DAG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            THE 58% COST-CUTTING ARCHITECTURE.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 font-mono leading-relaxed">
            Interactive Directed Acyclic Graph (DAG) of the production media & inference pipeline architected by Dhruv Goyal at The Economic Times (Times Internet).
          </p>
        </div>

        {/* DAG Horizontal / Wrap Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {DAG_NODES.map((node, idx) => {
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`p-3 text-left border transition-all cursor-pointer relative clip-bracket flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-[#060b16] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-cyan-400">
                    {node.step}
                  </span>
                  {idx < DAG_NODES.length - 1 && (
                    <span className="text-slate-600 hidden lg:inline">→</span>
                  )}
                </div>
                <div className="font-bold text-xs text-slate-100 my-1 line-clamp-2">
                  {node.name}
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-semibold">
                  {node.latency}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Node Detail Terminal Card */}
        <div className="bg-[#070d1a] border-2 border-cyan-500/40 p-6 sm:p-8 clip-chamfer relative tactical-corners">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-cyan-500 text-slate-950">
                  {activeNode.step} SELECTED
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Lead Architect: <strong className="text-white">{activeNode.lead}</strong>
                </span>
                <span className="text-xs font-mono text-amber-400 border border-amber-500/40 px-2 py-0.5 bg-amber-500/10">
                  {activeNode.tech}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading">
                {activeNode.name}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 font-mono leading-relaxed">
                {activeNode.desc}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#03060a] p-5 border border-cyan-500/40 space-y-3.5 font-mono text-xs sm:text-sm">
              <div className="flex justify-between pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Benchmark Latency:</span>
                <span className="text-cyan-400 font-bold">{activeNode.latency}</span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Cost Impact:</span>
                <span className="text-emerald-400 font-bold">{activeNode.costDelta}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Deployment State:</span>
                <span className="text-white font-bold">100% PRODUCTION VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
