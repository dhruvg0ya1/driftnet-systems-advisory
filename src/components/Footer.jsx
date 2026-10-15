import React from 'react';
import { ExternalLink, Shield, Cpu, Mail, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { COMPANY_INFO, FOUNDERS } from '../data/content';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#020408] border-t-2 border-cyan-500/30 pt-16 pb-12 text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black border-2 border-cyan-400 flex items-center justify-center font-bold text-xs text-white clip-bracket">
                <span className="text-white">D</span>
                <span className="text-amber-400">A</span>
              </div>
              <span className="text-base font-black text-white font-heading uppercase tracking-wider">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              {COMPANY_INFO.elevatorPitch}
            </p>

            <div className="p-3 bg-black border border-slate-800 text-xs space-y-1.5 clip-bracket">
              <div className="text-slate-300">
                ROOT DOMAIN: <span className="text-cyan-400 font-bold">{COMPANY_INFO.domain}</span>
              </div>
              <div className="text-slate-300">
                FLAGSHIP PRODUCT:{' '}
                <a
                  href={COMPANY_INFO.driftnetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold"
                >
                  driftnet.tech [↗]
                </a>
              </div>
            </div>
          </div>

          {/* Practices Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-black mb-4">
              PRACTICES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  [+] Enterprise AI & Agents
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  [+] Cyber Defense & Anomaly IDS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  [+] Distributed Data & Cloud Infra
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  [+] Product Strategy & Enterprise ROI
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-cyan-400 transition-colors">
                  [+] 7-Stage Generative AI DAG
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  [+] AI Pipeline ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Proprietary Product */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-black mb-4 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>FLAGSHIP PRODUCT</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={COMPANY_INFO.driftnetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-white flex items-center gap-1 transition-colors font-bold"
                >
                  <span>Driftnet Network IDS</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#driftnet" className="hover:text-amber-400 transition-colors">
                  [+] Telemetry Sandbox
                </a>
              </li>
              <li>
                <a href="#driftnet" className="hover:text-amber-400 transition-colors">
                  [+] Mahalanobis Math
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact && onOpenContact('driftnet-deployment')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  [+] Request VPC Tuning
                </button>
              </li>
            </ul>
          </div>

          {/* Founders & Leadership */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-black mb-4">
              LEADERSHIP DOSSIER
            </h4>
            <ul className="space-y-2 text-xs">
              {FOUNDERS.map((founder) => (
                <li key={founder.name}>
                  <a
                    href={founder.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                    aria-label={`${founder.name}'s GitHub Profile`}
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    <span>{founder.name} (@{founder.handle})</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-bold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. ZERO_BORDER_RADIUS_ENFORCED.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyan-400">NODE_STATUS: ALL_SYSTEMS_OPERATIONAL</span>
            <span>·</span>
            <span>LOCATION: {COMPANY_INFO.location.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
