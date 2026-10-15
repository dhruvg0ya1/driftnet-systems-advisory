import React, { useState } from 'react';
import { ExternalLink, Shield, Cpu, Code2, Award, BookOpen, Terminal, Sparkles, CheckCircle, Database, TrendingUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { FOUNDERS } from '../data/content';

const CODE_SAMPLES = {
  'Harsh-Mistry': `// Driftnet Anomaly Daemon (Go) - Packet Ingestion & Mahalanobis Evaluation
package daemon

import (
  "math"
  "gonum.org/v1/gonum/mat"
)

type AnomalyDetector struct {
  MeanVector     *mat.VecDense
  ShrunkCovInv   *mat.Dense
  AlertThreshold float64
}

// ComputeMahalanobisDistance computes D_M = sqrt((x - u)^T * Sigma^-1 * (x - u))
func (d *AnomalyDetector) EvaluateFlow(flowFeatures []float64) float64 {
  diff := mat.NewVecDense(len(flowFeatures), flowFeatures)
  diff.SubVec(diff, d.MeanVector)

  var intermediate mat.VecDense
  intermediate.MulVec(d.ShrunkCovInv, diff)
  return math.Sqrt(mat.Dot(diff, &intermediate))
}`,

  dhruvg0ya1: `# The Economic Times AI Video Engine (ETai) - Engine Registry & Batch Router
from dataclasses import dataclass
from typing import Dict, Any, List
import torch

@dataclass
class EngineRegistry:
    """Manages 43 model configurations across 13 providers behind 5 typed interfaces."""
    image_engines: Dict[str, Any]
    video_engines: Dict[str, Any]
    speech_engines: Dict[str, Any]
    lipsync_engines: Dict[str, Any]

    def execute_episode_pipeline(self, script_beats: List[Dict]):
        # Slashed production run costs from Rs 9,756 to Rs 5,960 per episode (-58%)
        # Routes via Gemini Batch API and ComfyUI self-hosted A100 GPU line
        keyframes = self.image_engines["gemini_batch"].generate(script_beats)
        voiceovers = self.speech_engines["whisper_aligned"].synthesize(script_beats)
        video_render = self.video_engines["comfy_a100_h3"].render(keyframes, voiceovers)
        return self.lipsync_engines["sync_dub"].align_4k(video_render)`,

  mayank2021264: `// Distributed Cloud Data Pipeline & CRM Synchronization Daemon (Node.js)
import { Pool } from 'pg';
import Redis from 'ioredis';

class DataPipelineSync {
  constructor() {
    this.pgPool = new Pool({ max: 50, idleTimeoutMillis: 10000 });
    this.redisCache = new Redis({ host: process.env.REDIS_HOST });
  }

  async ingestTransactionStream(event) {
    const client = await this.pgPool.connect();
    try {
      await client.query('BEGIN');
      const insertQuery = 'INSERT INTO crm_telemetry(org_id, payload, sync_ts) VALUES($1, $2, NOW()) RETURNING id';
      const res = await client.query(insertQuery, [event.orgId, event.data]);
      await this.redisCache.publish('pipeline:sync:realtime', JSON.stringify({ id: res.rows[0].id }));
      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
  }
}`,

  'Himansh-Harbola': `# Enterprise Product Analytics & Multi-Provider AI Workspace Telemetry
from dataclasses import dataclass
import json

@dataclass
class ProductEngagementMetric:
    workspace_id: str
    active_tokens: int
    prompt_efficiency_score: float
    retention_cohort: str

    def compute_enterprise_roi(self, baseline_cost_per_query: float) -> dict:
        """Audits compute expenditure reduction for executive board reviews."""
        capital_reclaimed = self.active_tokens * (baseline_cost_per_query - 0.00042)
        return {
            "workspace": self.workspace_id,
            "monthly_net_profit_delta_usd": round(capital_reclaimed, 2),
            "gtm_readiness_status": "ENTERPRISE_DEPLOYED"
        }`
};

export default function FoundersSection() {
  const [activeCodeTabs, setActiveCodeTabs] = useState({
    'Harsh-Mistry': false,
    dhruvg0ya1: false,
    mayank2021264: false,
    'Himansh-Harbola': false
  });

  const toggleCodeTab = (handle) => {
    setActiveCodeTabs((prev) => ({
      ...prev,
      [handle]: !prev[handle]
    }));
  };

  const THEMES = {
    'Harsh-Mistry': {
      border: 'border-amber-500/50 tactical-panel-amber',
      accent: 'text-amber-400',
      badgeBg: 'bg-amber-400',
      tagBg: 'bg-amber-950/30 border-amber-500/50',
      roleTag: 'DEFENSE & KERNEL'
    },
    dhruvg0ya1: {
      border: 'border-cyan-500/50 tactical-panel',
      accent: 'text-cyan-400',
      badgeBg: 'bg-cyan-400',
      tagBg: 'bg-cyan-950/30 border-cyan-500/50',
      roleTag: 'AI SYSTEMS & LLM'
    },
    mayank2021264: {
      border: 'border-emerald-500/50 tactical-panel',
      accent: 'text-emerald-400',
      badgeBg: 'bg-emerald-400',
      tagBg: 'bg-emerald-950/30 border-emerald-500/50',
      roleTag: 'DATA PLATFORMS'
    },
    'Himansh-Harbola': {
      border: 'border-purple-500/50 tactical-panel',
      accent: 'text-purple-400',
      badgeBg: 'bg-purple-400',
      tagBg: 'bg-purple-950/30 border-purple-500/50',
      roleTag: 'PRODUCT & GTM'
    }
  };

  return (
    <section id="team" className="py-24 relative bg-[#02050b] border-t border-cyan-500/20 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 border border-cyan-500/50 text-[11px] text-cyan-300 mb-4 clip-bracket">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL DOSSIER · LEADERSHIP & PRINCIPAL ARCHITECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            LEADERSHIP & ENGINEERING TEAM
          </h2>
          <p className="mt-3 text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Founded on direct execution: partners who break Linux kernels, deploy 92K LOC generative media systems, build distributed cloud data platforms, and execute enterprise commercial GTM roadmaps.
          </p>
        </div>

        {/* 4-Member Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUNDERS.map((founder) => {
            const theme = THEMES[founder.handle] || THEMES.dhruvg0ya1;
            const isCodeOpen = activeCodeTabs[founder.handle];
            const codeSample = CODE_SAMPLES[founder.handle] || '';

            return (
              <div
                key={founder.name}
                className={`bg-[#050912] border-2 p-6 sm:p-8 clip-chamfer relative shadow-2xl flex flex-col justify-between ${theme.border}`}
              >
                <div>
                  {/* Dossier Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800">
                    <div className="relative shrink-0">
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className="w-24 h-24 object-cover border-2 border-slate-700 filter grayscale contrast-125 hover:grayscale-0 transition-all"
                        onError={(e) => {
                          e.target.src = 'https://github.com/github.png';
                        }}
                      />
                      <span
                        className={`absolute -bottom-2 -right-2 text-[9px] font-mono font-black px-2 py-0.5 text-slate-950 uppercase ${theme.badgeBg}`}
                      >
                        {theme.roleTag}
                      </span>
                    </div>

                    <div className="flex-1 font-mono">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-white uppercase font-heading">
                          {founder.name}
                        </h3>
                        <a
                          href={founder.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white p-1.5 border border-slate-700 bg-slate-900 transition-colors"
                          title={`GitHub: ${founder.handle}`}
                          aria-label={`${founder.name}'s GitHub Profile`}
                        >
                          <GithubIcon className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </div>
                      <span className={`text-xs font-bold block mt-1 ${theme.accent}`}>
                        {founder.role}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {founder.institution} · {founder.degree}
                      </span>
                    </div>
                  </div>

                  {/* Clearance Badges */}
                  <div className="flex flex-wrap gap-1.5 py-4 font-mono">
                    {founder.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[11px] font-bold px-2.5 py-1 bg-black text-slate-200 border border-slate-700"
                      >
                        [{badge}]
                      </span>
                    ))}
                  </div>

                  {/* Bio narrative */}
                  <p className="text-sm text-slate-100 font-sans sm:font-mono leading-relaxed mt-3">
                    {founder.bio}
                  </p>

                  {/* Flagship Architecture Callout */}
                  <div className={`mt-6 p-4 border clip-bracket ${theme.tagBg}`}>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300 uppercase font-bold">FLAGSHIP FOCUS:</span>
                      <span className={`font-bold ${theme.accent}`}>
                        {founder.highlightProject.name}
                      </span>
                    </div>
                    <p className="text-sm text-white font-mono font-bold mt-1">
                      "{founder.highlightProject.tagline}"
                    </p>
                    <div className="mt-2 text-xs text-slate-300 font-mono">
                      [METRICS] {founder.highlightProject.stats}
                    </div>
                  </div>

                  {/* Technical Core Skills */}
                  <div className="mt-6">
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-mono font-bold block mb-2.5">
                      CORE SPECIALIZATIONS & EXECUTION:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-mono">
                      {founder.keySkills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-1.5 text-slate-200">
                          <span className={theme.accent}>[+]</span>
                          <span className="text-xs leading-snug">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified GitHub Repositories Grid */}
                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-mono font-bold block mb-3">
                      KEY CODE REPOSITORIES & SYSTEMS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                      {founder.topRepos.map((repo) => (
                        <div
                          key={repo.name}
                          className="bg-black p-3.5 border border-slate-700 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-white text-xs sm:text-sm">{repo.name}</span>
                              <span className="text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-200 font-bold">
                                {repo.stars}
                              </span>
                            </div>
                            <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                              {repo.desc}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {repo.tech.map((t) => (
                              <span key={t} className="text-[10px] text-slate-400 font-bold">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Code & Architecture Inspector */}
                <div className="mt-6 pt-4 border-t border-slate-800 font-mono">
                  <button
                    onClick={() => toggleCodeTab(founder.handle)}
                    className="w-full py-2.5 bg-black hover:bg-slate-900 border border-slate-700 flex items-center justify-between px-3 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>
                        {isCodeOpen ? 'COLLAPSE CODE ARCHITECTURE' : 'INSPECT PRODUCTION CODE SAMPLE'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {isCodeOpen ? '[-] HIDE' : '[+] VIEW'}
                    </span>
                  </button>

                  {isCodeOpen && (
                    <div className="mt-2 bg-[#020409] border border-cyan-500/30 p-3 overflow-x-auto text-[11px] text-cyan-300 font-mono">
                      <pre className="text-[11px] leading-relaxed whitespace-pre font-mono">
                        {codeSample}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
