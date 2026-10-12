# PickleTech Advisory — Enterprise Systems & Applied AI Consulting

The official primary website for **PickleTech Advisory** (`fakepickle.tech`), an elite systems engineering, cybersecurity, and applied artificial intelligence consultancy co-founded by **Harsh Mistry** and **Dhruv Goyal**.

Features full integration with flagship proprietary product: **[Driftnet](https://driftnet.fakepickle.tech)** (`driftnet.fakepickle.tech`).

---

## Co-Founders & Architectural Leadership

* **Harsh Mistry** ([@FakePickle](https://github.com/fakepickle))
  * *Role:* Co-Founder & Head of Systems Security
  * *Affiliation:* IIIT-Delhi CSE Graduate & Systems Researcher
  * *Expertise:* Low-level kernel systems (Go, C, C++, Rust), binary exploitation defense, self-hosted anomaly detection daemons, network infrastructure.
  * *Flagship Work:* Creator of [Driftnet](https://driftnet.fakepickle.tech) — autonomous network anomaly detection daemon.

* **Dhruv Goyal** ([@dhruvg0ya1](https://github.com/dhruvg0ya1))
  * *Role:* Co-Founder & Head of Applied AI & LLM Systems
  * *Affiliation:* AI Product Engineer @ Times Internet · B.Tech AI & ML · Published Author (*AIJR Proceedings 2025*)
  * *Expertise:* High-throughput generative AI pipelines (7-stage production media pipeline, 13 model APIs, 58% inference cost reduction, 4x speedup), AST codebase intelligence (CodeoGraph), multimodal vision agents.
  * *Flagship Work:* The Economic Times automated video synthesis architecture & CodeoGraph.

---

## Core Website Features & Motion Architecture

1. **Interactive Network Topology Canvas (`NetworkCanvas.jsx`)**:
   * Dynamic particle/node graph in the hero section simulating network flows, IDS nodes, and AI agents.
   * Real-time cursor repulsion and dynamic laser pulse packets traversing edges in amber (`#e8a33d`), cyan (`#06b6d4`), and emerald (`#10b981`).
2. **Flagship Product Showcase: Driftnet (`DriftnetShowcase.jsx` & `DriftnetSimulator.jsx`)**:
   * Complete product section spotlighting `driftnet.fakepickle.tech`.
   * **Live Interactive Telemetry Simulator**: Visitors can toggle traffic streams (*Normal Office Baseline*, *Lateral Sweep*, *High-Entropy Exfiltration*, *Unseen Service Interaction*), observe real-time Mahalanobis distance scores ($D_M$), extreme-value autoencoder losses, and live simulated packet logs.
   * Direct deep-links to `https://driftnet.fakepickle.tech`.
3. **Interactive AI & Infrastructure Cost/ROI Calculator (`RoiCalculator.jsx`)**:
   * Dynamic slider for monthly AI/cloud compute spend ($3k–$150k/mo).
   * Interactive toggles for architectural levers (Semantic Prompt Caching, Dynamic Multi-Model Cascading, Low-Level Go/Rust Daemon offloading).
   * Calculates projected monthly & annual savings (benchmarked against Dhruv's verified 58% cost cut) and latency reduction.
4. **Interactive Bento Grid of Core Consulting Practices (`ServicesBento.jsx`)**:
   * Enterprise AI & Multi-Agent Systems
   * Cyber Defense & Network Anomaly Architecture
   * High-Performance Systems & Native Daemons
   * Automated Code Intelligence & DevSecOps (AST / CodeoGraph)
   * Deep-dive modal with technical deliverables and scoping roadmap.
5. **Architects & Co-Founders Dossier (`FoundersSection.jsx`)**:
   * Side-by-side technical dossiers for Harsh Mistry and Dhruv Goyal with verified badges, institutions, key skills, and interactive links to verified GitHub repositories.
6. **Empirical Track Record & Case Studies (`CaseStudies.jsx`)**:
   * 58% inference cost reduction & 4x throughput at Times Internet.
   * Zero-exfiltration sovereign network IDS deployment (Driftnet).
   * 99.4% AST parse accuracy & 85% review bottleneck reduction (CodeoGraph).
7. **Interactive Scoping & Consultation Modal (`ContactModal.jsx`)**:
   * Interactive consultation booking flow with project focus selector, budget tiers, and celebratory confetti via `canvas-confetti`.

---

## Project Structure

```
pickletech-consulting/
├── dist/                   # Production-ready optimized static build
├── public/                 # Static assets & icons
├── src/
│   ├── components/
│   │   ├── CaseStudies.jsx        # Verified case studies & empirical metrics
│   │   ├── ContactModal.jsx       # Scoping inquiry modal with confetti
│   │   ├── DriftnetShowcase.jsx   # Flagship product section
│   │   ├── DriftnetSimulator.jsx  # Interactive live packet & anomaly sandbox
│   │   ├── EngagementModels.jsx   # 3 partnership tiers (Sprint, Embedded, Enterprise)
│   │   ├── Footer.jsx             # Global footer with domain links & credentials
│   │   ├── FoundersSection.jsx    # Harsh Mistry & Dhruv Goyal dossiers
│   │   ├── Hero.jsx               # High-converting hero with metrics
│   │   ├── Icons.jsx              # Custom pixel-perfect SVG icons
│   │   ├── Navbar.jsx             # Floating glassmorphic navbar
│   │   ├── NetworkCanvas.jsx      # Interactive HTML5 particle/network canvas
│   │   ├── RoiCalculator.jsx      # Interactive cost & throughput calculator
│   │   └── ServicesBento.jsx      # 4 core practices bento grid with modal
│   ├── data/
│   │   └── content.js             # Centralized technical content, metrics, copy
│   ├── App.jsx                    # Root composition
│   ├── index.css                  # Tailwind CSS v4 styling & custom tokens
│   └── main.jsx                   # React 19 entry point
├── index.html              # HTML shell with Google Fonts & dark theme meta
├── package.json            # Vite 8, React 19, Tailwind v4, Lucide, Framer Motion
├── vite.config.js          # Vite config with @tailwindcss/vite
└── README.md
```

---

## Local Development & Deployment

### Run in Development Mode
```bash
npm run dev
# Starts server at http://localhost:3000
```

### Build for Production
```bash
npm run build
# Compiles optimized static assets to ./dist
```

### Preview Production Build
```bash
npm run preview
# Serves ./dist locally at http://localhost:4173
```

### Deploy to Hosting
* **Vercel / Cloudflare Pages / Netlify**: Connect repository or deploy `dist/` directly with zero configuration needed.
* **Nginx / VPS**: Point the root to `/home/dhruv/Documents/pickletech-consulting/dist`.
