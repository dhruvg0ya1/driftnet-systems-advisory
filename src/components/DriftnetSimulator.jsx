import React, { useState, useEffect } from 'react';
import { ShieldCheck, ShieldAlert, Activity, RefreshCw, Terminal, ExternalLink, Zap, AlertTriangle, Radio } from 'lucide-react';
import { DRIFTNET_PRODUCT } from '../data/content';

const PROFILES = [
  {
    id: 'normal',
    name: 'NORMAL_BASELINE',
    desc: '443/TCP TLS 1.3 · Regular web queries; shrinkage Mahalanobis vector strictly nominal.',
    severity: 'NOMINAL',
    mahalanobis: 0.84,
    autoencoderLoss: 0.021,
    hex: '45 00 00 3c 1a 2b 40 00 40 06 b8 1f 0a 00 04 12 0a 00 01 02 01 bb 01 bb'
  },
  {
    id: 'sweep',
    name: 'LATERAL_RECON_SWEEP',
    desc: '445/TCP & 135/TCP · Fan-out across /24 subnet; 60s host aggregation flag breached.',
    severity: 'SUSPICIOUS',
    mahalanobis: 3.42,
    autoencoderLoss: 0.185,
    hex: '45 00 00 3c 9f 11 40 00 40 06 33 aa 0a 00 04 12 0a 00 02 54 01 bd 00 87'
  },
  {
    id: 'exfil',
    name: 'DATA_EXFILTRATION_SPIKE',
    desc: '8443/TCP · Up/Down byte ratio 142.6:1 · Extreme-value distribution tail anomaly.',
    severity: 'CRITICAL',
    mahalanobis: 7.91,
    autoencoderLoss: 0.492,
    hex: '45 00 05 dc 7c 33 40 00 40 06 12 88 0a 00 04 12 c6 33 64 04 20 fb 01 bb'
  },
  {
    id: 'unseen',
    name: 'UNSEEN_PORT_BINDING',
    desc: '50051/gRPC · First-time interaction with ephemeral port unobserved during baseline.',
    severity: 'MEDIUM',
    mahalanobis: 2.15,
    autoencoderLoss: 0.094,
    hex: '45 00 00 54 3a 4f 40 00 40 06 8e 21 0a 00 04 12 0a 00 01 0e c3 83 1f 90'
  }
];

export default function DriftnetSimulator() {
  const [activeProfile, setActiveProfile] = useState(PROFILES[0]);
  const [logs, setLogs] = useState([
    { id: 1, time: '12:04:18.012', src: '10.0.4.18', dst: '10.0.1.2', proto: 'TCP/443', score: 0.72, status: 'NOMINAL' },
    { id: 2, time: '12:04:19.451', src: '10.0.4.88', dst: '1.1.1.1', proto: 'UDP/53', score: 0.65, status: 'NOMINAL' },
    { id: 3, time: '12:04:21.118', src: '10.0.4.18', dst: '10.0.2.14', proto: 'TCP/443', score: 0.84, status: 'NOMINAL' }
  ]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      const jitter = (Math.random() - 0.5) * 0.25;
      const currentScore = Math.max(0.1, Number((activeProfile.mahalanobis + jitter).toFixed(2)));

      const newLog = {
        id: Date.now(),
        time: timeStr,
        src: activeProfile.id === 'sweep' ? `10.0.4.${Math.floor(Math.random() * 250)}` : '10.0.4.18',
        dst: activeProfile.id === 'sweep' ? `10.0.1.${Math.floor(Math.random() * 250)}` : '198.51.100.4',
        proto: activeProfile.id === 'exfil' ? 'TCP/8443' : activeProfile.id === 'unseen' ? 'TCP/50051' : 'TCP/443',
        score: currentScore,
        status: activeProfile.severity
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    }, 2400);

    return () => clearInterval(timer);
  }, [activeProfile]);

  const handleInject = () => {
    setIsGlitching(true);
    setActiveProfile(PROFILES[2]); // Trigger critical anomaly
    setTimeout(() => {
      setIsGlitching(false);
    }, 800);
  };

  return (
    <div
      className={`tactical-panel-amber border-2 border-amber-500/50 p-6 lg:p-8 clip-chamfer relative shadow-2xl ${
        isGlitching ? 'glitch-hover' : ''
      }`}
    >
      {/* Tactical Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-amber-500/30 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-amber-400 inline-block animate-ping" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              DRIFTNET DAEMON v0.2.0 · TELEMETRY SANDBOX
            </span>
          </div>
          <h3 className="text-2xl font-black text-white font-heading mt-1 uppercase tracking-tight">
            BEHAVIORAL NETWORK ANOMALY INSPECTOR
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Calibrated on recorded site PCAP traffic · Rank-Gaussian transform & shrinkage Mahalanobis math.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleInject}
            className="flex items-center gap-2 text-xs font-mono font-bold px-4 py-2.5 bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all cursor-pointer clip-bracket"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>INJECT ROGUE PACKET</span>
          </button>
          <a
            href={DRIFTNET_PRODUCT.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2.5 bg-slate-900 text-amber-300 border border-amber-500/40 hover:bg-slate-800 transition-all"
          >
            <span>LIVE_PRODUCT ↗</span>
          </a>
        </div>
      </div>

      {/* Profile Selectors */}
      <div className="mt-6">
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
          SELECT STREAM PROFILE:
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {PROFILES.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActiveProfile(profile)}
              className={`text-left p-3 border transition-all cursor-pointer clip-bracket ${
                activeProfile.id === profile.id
                  ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                  : 'bg-[#060910] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-white font-mono">{profile.name}</span>
                <span
                  className={`text-[9px] font-mono px-1 py-0.2 font-bold ${
                    profile.severity === 'NOMINAL'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                      : profile.severity === 'MEDIUM'
                      ? 'bg-cyan-950 text-cyan-400 border border-cyan-500'
                      : profile.severity === 'SUSPICIOUS'
                      ? 'bg-amber-950 text-amber-400 border border-amber-500'
                      : 'bg-rose-950 text-rose-400 border border-rose-500'
                  }`}
                >
                  {profile.severity}
                </span>
              </div>
              <p className="line-clamp-2 text-[10px] text-slate-400 font-mono mt-1">
                {profile.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        {/* Mahalanobis distance */}
        <div className="bg-[#05080f] p-4 border border-amber-500/30">
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>MAHALANOBIS DISTANCE (D_M)</span>
            <span className="text-slate-500">NOMINAL &lt; 1.50</span>
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span
              className={`text-3xl font-black font-mono ${
                activeProfile.mahalanobis > 4
                  ? 'text-rose-400 glow-text-amber'
                  : activeProfile.mahalanobis > 2
                  ? 'text-amber-400'
                  : 'text-emerald-400'
              }`}
            >
              {activeProfile.mahalanobis.toFixed(2)}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {activeProfile.mahalanobis > 4
                ? 'OUTLIER DETECTED'
                : activeProfile.mahalanobis > 2
                ? 'ELEVATED DEVIATION'
                : 'BASELINE VALID'}
            </span>
          </div>
          {/* Sharp segmented meter */}
          <div className="w-full bg-slate-900 h-2 mt-3 flex gap-0.5">
            {Array.from({ length: 16 }).map((_, i) => {
              const activeCount = Math.floor((activeProfile.mahalanobis / 8) * 16);
              return (
                <div
                  key={i}
                  className={`h-full flex-1 ${
                    i <= activeCount
                      ? activeProfile.mahalanobis > 4
                        ? 'bg-rose-500'
                        : activeProfile.mahalanobis > 2
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                      : 'bg-slate-800'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Autoencoder Loss */}
        <div className="bg-[#05080f] p-4 border border-amber-500/30">
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>EXTREME-VALUE TAIL LOSS</span>
            <span className="text-slate-500">MAX: 0.150</span>
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span
              className={`text-3xl font-black font-mono ${
                activeProfile.autoencoderLoss > 0.2
                  ? 'text-rose-400'
                  : activeProfile.autoencoderLoss > 0.08
                  ? 'text-amber-400'
                  : 'text-emerald-400'
              }`}
            >
              {activeProfile.autoencoderLoss.toFixed(3)}
            </span>
            <span className="text-xs font-mono text-slate-400">RECONSTRUCTION ERR</span>
          </div>
          {/* Sharp segmented meter */}
          <div className="w-full bg-slate-900 h-2 mt-3 flex gap-0.5">
            {Array.from({ length: 16 }).map((_, i) => {
              const activeCount = Math.floor((activeProfile.autoencoderLoss / 0.5) * 16);
              return (
                <div
                  key={i}
                  className={`h-full flex-1 ${
                    i <= activeCount
                      ? activeProfile.autoencoderLoss > 0.2
                        ? 'bg-rose-500'
                        : activeProfile.autoencoderLoss > 0.08
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                      : 'bg-slate-800'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Raw Hex Disassembler View */}
        <div className="bg-[#05080f] p-4 border border-amber-500/30 font-mono text-[11px]">
          <div className="flex justify-between text-slate-400 mb-1">
            <span>RAW_SOCKET_HEX_DUMP</span>
            <span className="text-emerald-400">0% DATA LEAK</span>
          </div>
          <div className="bg-black p-2 border border-slate-800 text-amber-300/90 break-all leading-tight">
            {activeProfile.hex}
          </div>
        </div>
      </div>

      {/* Terminal Tail Stream */}
      <div className="mt-4 bg-black border border-amber-500/40 p-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2 text-slate-400 text-[11px]">
          <span className="text-amber-400 font-bold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>driftnet.log · eBPF KERNEL SOCKET STREAM</span>
          </span>
          <span className="text-slate-500">SELF-HOSTED DAEMON</span>
        </div>

        <div className="space-y-1 overflow-x-auto text-[11px]">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between gap-4 py-0.5 px-2 hover:bg-slate-900 transition-colors"
            >
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-slate-600">{log.time}</span>
                <span className="text-slate-300 font-bold">{log.src}</span>
                <span className="text-amber-500">→</span>
                <span className="text-slate-300 font-bold">{log.dst}</span>
                <span className="text-amber-400">[{log.proto}]</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-slate-400">D_M={log.score}</span>
                <span
                  className={`px-1.5 py-0.2 font-mono text-[10px] font-bold ${
                    log.status === 'NOMINAL'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                      : log.status === 'MEDIUM'
                      ? 'bg-cyan-950 text-cyan-400 border border-cyan-500'
                      : log.status === 'SUSPICIOUS'
                      ? 'bg-amber-950 text-amber-400 border border-amber-500'
                      : 'bg-rose-950 text-rose-400 border border-rose-500'
                  }`}
                >
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
