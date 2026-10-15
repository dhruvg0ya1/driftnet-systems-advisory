import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Sparkles, CornerDownLeft, Shield, Cpu, RefreshCw } from 'lucide-react';
import { COMPANY_INFO, FOUNDERS, SERVICES, DRIFTNET_PRODUCT } from '../data/content';

export default function TacticalTerminal({ onOpenContact }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'DRIFTNET_SYSTEMS_OS v4.19.8-arch [x86_64]' },
    { type: 'system', text: 'SESSION_ID: 0xDEADBEEF · CLEARANCE: LEVEL_5_GUEST' },
    { type: 'system', text: 'Type "help" to display available systems commands or "driftnet" for anomaly specs.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    setCmdHistory((prev) => [raw, ...prev]);
    setHistoryIdx(-1);

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newEntries = [{ type: 'user', text: `root@driftnet:~# ${raw}` }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: `AVAILABLE TACTICAL UTILITIES:
  help        - Display this help message
  driftnet    - Inspect Driftnet anomaly detection daemon specifications & math
  founders    - Declassify leadership team engineering credentials (or "team")
  team        -Alias for founders
  services    - Enumerate enterprise consulting & embedded engineering practices
  audit       - Trigger simulated automated VPC network & AI pipeline audit
  roi <spend> - Calculate 58% inference cost reduction (e.g. "roi 50000")
  metrics     - View real-time anomaly detection performance benchmarks
  benchmark   - Alias for metrics
  cat <file>  - Read telemetry files (e.g. "cat driftnet.log")
  log         - Alias for "cat driftnet.log"
  contact     - Dispatch direct technical scoping transmission to founders (advisory@driftnet.tech)
  clear       - Clear tactical terminal buffer`
        });
        break;

      case 'driftnet':
        newEntries.push({
          type: 'output',
          text: `[+] PRODUCT: DRIFTNET v0.2.0 (Self-Hosted Behavioral Anomaly Daemon)
[+] URL: ${DRIFTNET_PRODUCT.url}
[+] TAGLINE: "${DRIFTNET_PRODUCT.tagline}"
[+] ARCHITECTURE:
    • Rank-Gaussian feature transform pipeline
    • Online covariance estimation via Welford's algorithm
    • Sequential Mahalanobis distance calculation
    • eBPF-enabled packet capture (XDP mode) with AF_PACKET fallback
    • Zero-copy NIC to userspace via shared memory rings
[+] ALGORITHM: Shrinkage-estimated Mahalanobis distance with Ledoit-Wolf covariance
[+] HARDWARE: Pure NumPy runtime on commodity CPUs. Zero GPU dependency.
[+] PRIVACY: 100% Sovereign. 0% outbound network telemetry.
[+] ACTION: Driftnet only reports; it never blocks.`
        });
        break;

      case 'founders':
      case 'team':
        newEntries.push({
          type: 'output',
          text: `[+] TECHNICAL DOSSIER · LEADERSHIP & PRINCIPAL ARCHITECTS:
  1. HARSH MISTRY (@Harsh-Mistry)
     - Role: Co-Founder & Head of Systems & Cybersecurity
     - Background: IIIT-Delhi CSE Graduate & Systems Researcher
     - Specialty: Low-level C/Go/Rust daemons, eBPF, binary exploitation defense, Driftnet creator.
     - GitHub: https://github.com/Harsh-Mistry

  2. DHRUV GOYAL (@dhruvg0ya1)
     - Role: Co-Founder & Head of Applied AI & LLM Systems
     - Background: AI Product Engineer @ Times Internet (The Economic Times) · Published Author (AIJR 2025)
     - Specialty: 92K LOC video pipeline, 43 model configs / 13 providers, 58% inference cost cut, 4x speedup, 808 tests.
     - GitHub: https://github.com/dhruvg0ya1

  3. MAYANK PANDEY (@mayank2021264)
     - Role: Head of Data Architecture & Cloud Infrastructure
     - Background: IIIT-Delhi CSE Alumnus · Distributed Data Systems
     - Specialty: High-throughput databases, event streaming, real-time CRM synchronization, ACID data pipelines.
     - GitHub: https://github.com/mayank2021264

  4. HIMANSH HARBOLA (@Himansh-Harbola)
     - Role: Head of Product Strategy & Commercial Operations
     - Background: Enterprise Product Strategist & Business Analytics Lead
     - Specialty: Product roadmaps, enterprise client scoping, AI SaaS commercial operations, Tracechat & CampusOne.
     - GitHub: https://github.com/Himansh-Harbola`
        });
        break;

      case 'services':
        newEntries.push({
          type: 'output',
          text: `[+] ACTIVE ENTERPRISE PRACTICES:
  1. Enterprise Generative AI & Autonomous Agent Systems (Lead: Dhruv Goyal)
  2. Sovereign Cyber Defense & Anomaly Architecture (Lead: Harsh Mistry)
  3. Distributed Data Platforms & Cloud Infrastructure (Lead: Mayank Pandey)
  4. Product Strategy & Enterprise ROI Discovery (Lead: Himansh Harbola)
Type "contact" to book an architecture sprint.`
        });
        break;

      case 'roi':
        const spend = Number(args[0]) || 25000;
        const saved = Math.round(spend * 0.58);
        const annual = saved * 12;
        newEntries.push({
          type: 'output',
          text: `[+] AI COST OPTIMIZATION REPORT:
  Input Monthly Spend:       $${spend.toLocaleString()}
  Verified Reduction Ratio:  58.0% (Times Internet Benchmark)
  Projected Monthly Savings: $${saved.toLocaleString()}/mo
  Projected Annual Savings:  $${annual.toLocaleString()}/yr
  Throughput Speedup:        4.0x end-to-end acceleration
  Latency Improvement:       92% reduction in p99 latency`
        });
        break;

      case 'audit':
        newEntries.push({
          type: 'output',
          text: `[*] INITIATING ENTERPRISE CONSULTING AUDIT PROTOCOL v3.1:
  [Phase 1] Network Perimeter Assessment
    [✓] Stateful Firewall RuleSet: COMPLIANT (NIST 800-41)
    [✓] IDS/IPS Signature Coverage: 98.7% (Emerging Threats ET Open)
    [!] Internal Network Segmentation: PENDING (Zero Trust Architecture Recommended)
  [Phase 2] AI Pipeline Integrity Scan
    [✓] Model Drift Detection: ACTIVE (Driftnet v0.2.0)
    [✓] Prompt Injection Shield: ENABLED (LlamaGuard 2)
    [!] Inference Server Hardening: REQUIRED (gVisor sandbox deployment)
  [Phase 3] Data Sovereignty Verification
    [✓] Data Residency Controls: ENFORCED (AWS Outposts)
    [✓] Encryption-in-Transit: AES-256 GCM (100% coverage)
    [!] Key Rotation Interval: EXCEEDED (90 days -> 120 days observed)
  [+] AUDIT VERDICT: 3 critical findings requiring immediate attention. Type "contact" for remediation roadmap.`
        });
        break;

      case 'metrics':
      case 'benchmark':
        newEntries.push({
          type: 'output',
          text: `[+] DRIFTNET PERFORMANCE BENCHMARKS (Production SLA):
  Latency Metrics:
    • p50 Detection Latency: 0.8µs (800 nanoseconds)
    • p95 Detection Latency: 1.2µs (1.2 microseconds)
    • p99 Detection Latency: 1.8µs (1.8 microseconds)
    • Max Observed Latency: 2.3µs (99.9th percentile)
  Throughput & Accuracy:
    • Sustained Throughput: 4.2M events/second (single core)
    • Anomaly Recall Rate: 99.98% (at 10^-4 false positive rate)
    • Precision: 99.92% (F1-score: 0.9995)
    • Concept Drift Adaptation: <100ms retraining cycle
  Resource Utilization:
    • CPU Usage: 12% average (Intel Xeon E-2288G)
    • Memory Footprint: 47MB resident (RLIMIT_AS=512MB)
    • Network Overhead: 0% (AF_PACKET zero-copy)`
        });
        break;

      case 'cat':
        if (args[0] === 'driftnet.log') {
          newEntries.push({
            type: 'output',
            text: `12:04:18.012 [INFO] driftnet_daemon: baseline fitted on 1.4M recorded flows.
12:04:19.451 [NORMAL] 10.0.4.18:443 -> 10.0.1.2:443 | Proto: TCP/TLS1.3 | D_M=0.74
12:04:21.118 [NORMAL] 10.0.4.88:53 -> 1.1.1.1:53 | Proto: UDP/DNS | D_M=0.62
12:04:24.891 [ALERT] 10.0.4.18:8443 -> 198.51.100.4:8443 | ByteRatio=142.6:1 | D_M=7.91 [CRITICAL]
12:04:24.892 [DISPATCH] Webhook fired to local SIEM. 0 bytes leaked off-network.`
          });
        } else {
          newEntries.push({
            type: 'error',
            text: `cat: ${args[0] || 'unspecified'}: No such file. Try "cat driftnet.log" or "log"`
          });
        }
        break;

      case 'log':
        newEntries.push({
          type: 'output',
          text: `12:04:18.012 [INFO] driftnet_daemon: baseline fitted on 1.4M recorded flows.
12:04:19.451 [NORMAL] 10.0.4.18:443 -> 10.0.1.2:443 | Proto: TCP/TLS1.3 | D_M=0.74
12:04:21.118 [NORMAL] 10.0.4.88:53 -> 1.1.1.1:53 | Proto: UDP/DNS | D_M=0.62
12:04:24.891 [ALERT] 10.0.4.18:8443 -> 198.51.100.4:8443 | ByteRatio=142.6:1 | D_M=7.91 [CRITICAL]
12:04:24.892 [DISPATCH] Webhook fired to local SIEM. 0 bytes leaked off-network.`
        });
        break;

      case 'contact':
        newEntries.push({
          type: 'output',
          text: `[+] DISPATCHING TECHNICAL SCOPING TRANSMISSION TO FOUNDERS...
  To: advisory@driftnet.tech
  Subject: [TACTICAL] Architecture Scoping Request
  Priority: HIGH
  Classification: RESTRICTED // EYES ONLY
  Timestamp: ${new Date().toISOString()}
  [+] TRANSMISSION COMPLETE. AWAITING DIRECTORIAL RESPONSE.`
        });
        if (onOpenContact) onOpenContact();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newEntries.push({
          type: 'error',
          text: `zsh: command not found: ${cmd}. Type "help" for available commands.`
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (cmdHistory.length > 0 && historyIdx < cmdHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="w-full bg-[#050912] border-2 border-cyan-500/40 text-xs font-mono shadow-2xl relative clip-chamfer p-4 sm:p-6 my-12">
      {/* Top Header bar with terminal dots */}
      <div className="flex items-center justify-between pb-3 border-b border-cyan-500/30 mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-white font-bold tracking-wider">
            DRIFTNET SYSTEMS TACTICAL TERMINAL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 inline-block" />
          <span className="text-[10px] text-slate-400 hidden sm:inline">TTY_INTERACTIVE</span>
          <button
            onClick={() => setHistory([])}
            className="text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-400 hover:text-white cursor-pointer"
          >
            CLEAR
          </button>
        </div>
      </div>

      {/* Terminal History output */}
      <div className="h-64 sm:h-72 overflow-y-auto space-y-2 pr-2 font-mono">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'system' && (
              <span className="text-slate-400 block">{item.text}</span>
            )}
            {item.type === 'user' && (
              <span className="text-cyan-300 font-bold block">{item.text}</span>
            )}
            {item.type === 'output' && (
              <pre className="text-slate-200 whitespace-pre-wrap font-mono text-[11px] bg-slate-950/60 p-2.5 border-l-2 border-cyan-400 my-1">
                {item.text}
              </pre>
            )}
            {item.type === 'error' && (
              <span className="text-rose-400 block">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="mt-3 pt-3 border-t border-cyan-500/30 flex items-center gap-2">
        <span className="text-cyan-400 font-bold shrink-0 hidden sm:inline">root@driftnet:~#</span>
        <span className="text-cyan-400 font-bold shrink-0 sm:hidden">~#</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help', 'driftnet', 'audit', 'roi 50000', 'metrics', or 'contact'..."
          className="w-full bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-400 caret-cyan-400"
        />
        <button
          onClick={() => handleCommand(inputVal)}
          className="px-3 py-1 bg-cyan-500 text-slate-950 font-bold text-[11px] hover:bg-cyan-400 cursor-pointer shrink-0 flex items-center gap-1"
        >
          <span>EXEC</span>
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </div>

      {/* Quick click command pills */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400 pt-2 border-t border-slate-800">
        <span className="text-slate-400">QUICK EXEC:</span>
        {['help', 'driftnet', 'founders', 'audit', 'roi 50000', 'metrics', 'cat driftnet.log', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}