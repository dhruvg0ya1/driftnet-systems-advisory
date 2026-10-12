import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Terminal, Mail, Building, User, Sparkles, Shield, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/content';

export default function ContactModal({ isOpen, onClose, defaultInterest = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Enterprise AI & Multi-Agent Systems',
    budget: '$10k - $25k',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultInterest) {
      if (defaultInterest.includes('driftnet')) {
        setFormData((prev) => ({ ...prev, interest: 'Driftnet Network Anomaly Deployment' }));
      } else if (defaultInterest.includes('ai') || defaultInterest.includes('cost-audit')) {
        setFormData((prev) => ({ ...prev, interest: 'Enterprise AI & Multi-Agent Systems' }));
      } else if (defaultInterest.includes('cyber')) {
        setFormData((prev) => ({ ...prev, interest: 'Cyber Defense & Anomaly Architecture' }));
      } else if (defaultInterest.includes('code')) {
        setFormData((prev) => ({ ...prev, interest: 'Automated Code Intelligence (CodeoGraph)' }));
      }
    }
  }, [defaultInterest]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti with tactical neon colors
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#f59e0b', '#00ff66', '#ff0055']
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto font-mono">
      <div className="bg-[#050912] border-2 border-cyan-400 max-w-xl w-full shadow-2xl relative my-8 clip-chamfer tactical-corners">
        {/* Top telemetry banner */}
        <div className="bg-black px-5 py-2.5 border-b border-cyan-500/40 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-bold uppercase tracking-wider">
              ENCRYPTED TRANSMISSION CHANNEL
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-cyan-400 p-1 border border-slate-800 hover:border-cyan-400 bg-black cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-wider mb-2 font-bold">
                <span>[DIRECT ACCESS] PRINCIPAL ARCHITECTS & ADVISORS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase tracking-tight">
                INITIATE TECHNICAL CONSULTATION
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                Connect directly with the architects. We review system requirements, compute footprints, cloud data architectures, or eBPF deployment topology within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                      OPERATOR_NAME *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-black border border-slate-700 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                      COMM_CHANNEL (EMAIL) *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full bg-black border border-slate-700 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                    ORGANIZATION / PROTOCOL / ENTITY
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tier-1 Bank / Series B AI Startup"
                      className="w-full bg-black border border-slate-700 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                      TECHNICAL_FOCUS
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-black border border-slate-700 py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>Enterprise AI & Multi-Agent Systems</option>
                      <option>Driftnet Network Anomaly Deployment</option>
                      <option>Cyber Defense & Anomaly Architecture</option>
                      <option>Distributed Data Platforms & Cloud Infra</option>
                      <option>Product Strategy & Enterprise ROI Discovery</option>
                      <option>2-Week Architecture Sprint Audit</option>
                      <option>Embedded Principal Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                      CAPITAL_ALLOCATION
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-black border border-slate-700 py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>$5k - $15k (Sprint Audit)</option>
                      <option>$15k - $40k (Embedded Engineering)</option>
                      <option>$40k+ (Enterprise Sovereign Deployment)</option>
                      <option>Exploratory / Advisory Scoping</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                    SYSTEM_PROBLEM_STATEMENT / BOTTLENECKS
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architecture: e.g. 'We need to cut 45% of our LLM inference bill across 12 APIs' or 'We need Driftnet deployed on 50 bare-metal cluster nodes'."
                    className="w-full bg-black border border-slate-700 py-2 px-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/25 disabled:opacity-60 clip-bracket"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'TRANSMITTING TELEMETRY...' : 'DISPATCH SCOPE TRANSMISSION'}</span>
                </button>

                <div className="text-[10px] text-center text-slate-500 mt-2">
                  DIRECT WIRE: <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline">{COMPANY_INFO.email}</a>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-950 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4 clip-bracket">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-black text-white font-heading uppercase">
                PACKET INGESTION CONFIRMED
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto mt-2 leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.name}</span>. Harsh Mistry and Dhruv Goyal have received your transmission regarding <span className="text-cyan-400 font-bold">{formData.interest}</span>.
              </p>

              <div className="mt-6 p-4 bg-black border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">ROUTING TARGET:</span>
                  <span className="text-amber-400 font-bold">Harsh & Dhruv [FOUNDER INBOX]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">DISPATCHED EMAIL:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SLA GUARANTEE:</span>
                  <span className="text-emerald-400 font-bold">&lt; 24 BUSINESS HOURS</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 transition-all cursor-pointer clip-bracket"
              >
                RETURN TO SYSTEM CONSOLE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
