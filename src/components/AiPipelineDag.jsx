import React, { useState } from 'react';
import { Cpu, ArrowRight, CheckCircle2, Zap, Layers, Sparkles, Activity, Monitor } from 'lucide-react';

const DAG_NODES = [
  {
    id: 'stage1',
    step: 'STAGE_01',
    name: 'Script / Beats Ingestion',
    lead: 'Dhruv Goyal',
    tech: 'Tree-sitter / Multi-source Stream',
    latency: '18ms',
    gpuVram: '0 GB',
    model: 'Gemini 2.5 Flash',
    api: 'Gemini Batch API',
    costDelta: '-15% Overhead',
    desc: 'Raw multi-source content ingestion with AST graph parsing and dynamic semantic chunking to preserve code/context integrity.'
  },
  {
    id: 'stage2',
    step: 'STAGE_02',
    name: 'Image Gen (ComfyUI)',
    lead: 'Dhruv Goyal',
    tech: 'TensorRT / A100 Cluster',
    latency: '420ms',
    gpuVram: '24 GB / A100',
    model: 'ComfyUI + Flux',
    api: 'ComfyUI A100 Cluster',
    costDelta: '4x Speedup',
    desc: 'High-throughput visual frame generation optimized via FP16 TensorRT compilation and parallel pipeline staging on A100 nodes.'
  },
  {
    id: 'stage3',
    step: 'STAGE_03',
    name: 'TTS (Whisper Aligned)',
    lead: 'Dhruv Goyal',
    tech: 'Streaming Neural Vocoder / Whisper',
    latency: '120ms',
    gpuVram: '8 GB',
    model: 'Whisper Aligned',
    api: 'OpenAI Whisper + Neural TTS',
    costDelta: 'Zero Artifacts',
    desc: 'Sub-second audio synthesis with precise phoneme timestamp alignment for downstream lip-synchronization using Whisper-aligned vocoder.'
  },
  {
    id: 'stage4',
    step: 'STAGE_04',
    name: 'Video Diffusion',
    lead: 'Dhruv Goyal',
    tech: 'ComfyUI / Diffusers',
    latency: '850ms',
    gpuVram: '40 GB / 2x A100',
    model: 'Stable Video Diffusion',
    api: 'ComfyUI A100 Cluster',
    costDelta: '-58% Inference Bill',
    desc: 'Latent diffusion synthesis of video frames with temporal consistency enforced across multi-frame batches.'
  },
  {
    id: 'stage5',
    step: 'STAGE_05',
    name: 'Audio Mix',
    lead: 'Dhruv Goyal',
    tech: 'ReAct Agent / Tool Execution',
    latency: '85ms',
    gpuVram: '2 GB',
    model: 'Gemini 2.5 Flash (QC)',
    api: 'Gemini Batch API',
    costDelta: 'Zero Hallucination',
    desc: 'Deterministic multi-track audio mix with loudness normalization and Broadcast WAV compliance.'
  },
  {
    id: 'stage6',
    step: 'STAGE_06',
    name: 'Auto-QC (Gemini Batch)',
    lead: 'Dhruv Goyal',
    tech: 'Gemini Batch API / Evaluation',
    latency: '140ms',
    gpuVram: '16 GB',
    model: 'Gemini 2.5 Flash',
    api: 'Gemini Batch API',
    costDelta: '-32% Token Burn',
    desc: 'Batch-level quality control using Gemini 2.5 Flash for content verification, AST validity, and factual constraint checking.'
  },
  {
    id: 'stage7',
    step: 'STAGE_07',
    name: 'Master Export',
    lead: 'Dhruv Goyal',
    tech: 'Wav2Lip / Video Blender',
    latency: '8ms (Cache Hit)',
    gpuVram: '4 GB',
    model: 'Gemini 2.5 Flash (final token)',
    api: 'Gemini Batch API',
    costDelta: '-15% Overhead',
    desc: 'Compiles production-ready financial news video in under 60 seconds with flawless audio-visual sync and master-grade encoding.'
  }
];

export default function AiPipelineDag() {
  const [activeNode, setActiveNode] = useState(DAG_NODES[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (node) => {
    setActiveNode(node);
    setIsModalOpen(true);
  };

  return (
    <section id="pipeline" className="py-20 relative bg-[#03060c] border-y border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 mb-3 clip-bracket">
            <Zap className="w-3.5 h-3.5" />
            <span>PRODUCTION DAG · 7-STAGE ET AI ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            SCRIPT / BEATS → IMAGE GEN → TTS → VIDEO DIFFUSION → AUDIO MIX → AUTO-QC → MASTER EXPORT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 font-mono leading-relaxed">
            Directed Acyclic Graph (DAG) of the production media & inference pipeline. Click any stage to inspect telemetry (latency, GPU VRAM, models, APIs).
          </p>
        </div>

        {/* DAG Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {DAG_NODES.map((node, idx) => {
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => openModal(node)}
                className={`p-3 text-left border transition-all cursor-pointer relative clip-bracket flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-[#060b16] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-cyan-400">{node.step}</span>
                  {idx < DAG_NODES.length - 1 && (
                    <span className="text-slate-600 hidden lg:inline">→</span>
                  )}
                </div>
                <div className="font-bold text-xs text-slate-100 my-1 line-clamp-2">{node.name}</div>
                <div className="text-[10px] font-mono text-emerald-400 font-semibold">{node.latency}</div>
                <div className="text-[9px] font-mono text-amber-400">{node.model}</div>
              </button>
            );
          })}
        </div>

        {/* Active Node Detail Card */}
        <div className="bg-[#070d1a] border-2 border-cyan-500/40 p-6 sm:p-8 clip-chamfer relative tactical-corners">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-cyan-500 text-slate-950">{activeNode.step} SELECTED</span>
                <span className="text-xs font-mono text-slate-400">Lead Architect: <strong className="text-white">{activeNode.lead}</strong></span>
                <span className="text-xs font-mono text-amber-400 border border-amber-500/40 px-2 py-0.5 bg-amber-500/10">{activeNode.tech}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">{activeNode.name}</h3>
              <p className="text-sm sm:text-base text-slate-200 font-mono leading-relaxed">{activeNode.desc}</p>
            </div>
            <div className="lg:col-span-5 bg-[#03060a] p-5 border border-cyan-500/40 space-y-3.5 font-mono text-xs sm:text-sm">
              <div className="flex justify-between pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Benchmark Latency:</span>
                <span className="text-cyan-400 font-bold">{activeNode.latency}</span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">GPU VRAM:</span>
                <span className="text-amber-400 font-bold">{activeNode.gpuVram}</span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Model / API:</span>
                <span className="text-white font-bold">{activeNode.model}</span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Deployment API:</span>
                <span className="text-cyan-300 font-bold">{activeNode.api}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cost Impact:</span>
                <span className="text-emerald-400 font-bold">{activeNode.costDelta}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Inspector Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#04070d] border-2 border-cyan-500/60 p-6 sm:p-8 max-w-2xl w-full clip-chamfer shadow-2xl shadow-cyan-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-black text-white font-heading">STAGE TELEMETRY — {activeNode.step}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-xs font-mono font-bold px-2 py-1 bg-rose-950 text-rose-400 border border-rose-500/40 hover:bg-rose-900 transition-all cursor-pointer clip-bracket"
              >
                CLOSE
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs sm:text-sm mb-5">
              <div className="bg-[#03060a] border border-cyan-500/30 p-3">
                <span className="text-slate-400">Stage Name:</span>
                <div className="text-white font-bold">{activeNode.name}</div>
              </div>
              <div className="bg-[#03060a] border border-cyan-500/30 p-3">
                <span className="text-slate-400">Lead Architect:</span>
                <div className="text-amber-300 font-bold">{activeNode.lead}</div>
              </div>
              <div className="bg-[#03060a] border border-cyan-500/30 p-3">
                <span className="text-slate-400">Latency:</span>
                <div className="text-cyan-400 font-bold">{activeNode.latency}</div>
              </div>
              <div className="bg-[#03060a] border border-cyan-500/30 p-3">
                <span className="text-slate-400">GPU VRAM:</span>
                <div className="text-rose-400 font-bold">{activeNode.gpuVram}</div>
              </div>
              <div className="bg-[#03060a] border border-cyan-500/30 p-3">
                <span className="text-slate-400">Model:</span>
                <div className="text-emerald-400 font-bold">{activeNode.model}</div>
              </div>
              <div className="bg-[#03060a] border border-cyan-500/30 p-3">
                <span className="text-slate-400">Deployment API:</span>
                <div className="text-cyan-300 font-bold">{activeNode.api}</div>
              </div>
              <div className="bg-[#03060a] border border-cyan-500/30 p-3 sm:col-span-2">
                <span className="text-slate-400">Description:</span>
                <div className="text-slate-200">{activeNode.desc}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 border-t border-slate-800 pt-3">
              <Monitor className="w-4 h-4" />
              <span>Click stage cards to inspect telemetry. All specs derived from ETai architecture (Gemini 2.5 Flash, Gemini Batch API, Whisper Aligned, ComfyUI A100 cluster).</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
