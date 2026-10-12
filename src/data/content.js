export const COMPANY_INFO = {
  name: "Driftnet Systems Advisory",
  shortName: "Driftnet Advisory",
  legalName: "Driftnet Systems & Applied AI Advisory",
  tagline: "High-Performance Systems Engineering & Applied Enterprise AI",
  elevatorPitch: "We engineer resilient, low-latency infrastructure, sovereign network anomaly daemons, and autonomous AI pipelines for enterprises that refuse to compromise on security, throughput, or unit economics.",
  domain: "driftnet.tech",
  driftnetUrl: "https://driftnet.tech",
  status: "Now Accepting Enterprise Engagements for Q4 2026 / Q1 2027",
  email: "advisory@driftnet.tech",
  location: "Delhi NCR, India · Global Remote Advisory"
};

export const FOUNDERS = [
  {
    name: "Harsh Mistry",
    handle: "Harsh-Mistry",
    role: "Co-Founder & Head of Systems & Cybersecurity",
    title: "Systems Researcher & Infrastructure Architect",
    avatar: "https://github.com/fakepickle.png",
    githubUrl: "https://github.com/fakepickle",
    portfolioUrl: "https://driftnet.tech",
    institution: "IIIT-Delhi (Indraprastha Institute of Information Technology Delhi)",
    degree: "Computer Science & Engineering",
    bio: "Systems architect and security researcher specializing in kernel-level networking, binary exploitation defense, and low-overhead daemons. Lead creator of Driftnet, the zero-external-dependency network anomaly detection engine.",
    badges: ["Co-Founder", "IIIT-Delhi CSE", "Linux Kernel & eBPF", "Systems & Security"],
    keySkills: [
      "Low-Level Systems (Go, C, C++, Rust)",
      "Zero-Trust Network Architecture",
      "Network Anomaly Detection & IDS (Suricata/Zeek)",
      "Active Directory & Binary Exploitation Defense",
      "High-Performance Daemons & Linux Internals",
      "Distributed Storage & P2P Protocols"
    ],
    highlightProject: {
      name: "Driftnet",
      tagline: "Self-hosted network anomaly detection daemon calibrated on your own traffic",
      url: "https://driftnet.tech",
      stats: "0 Outbound Data Leakage · Pure NumPy / No GPU · Mahalanobis Distance"
    },
    topRepos: [
      {
        name: "Driftnet",
        desc: "Autonomous behavioral network anomaly detection daemon sitting behind Suricata, Zeek, or Snort.",
        tech: ["Go", "Python", "NumPy", "Network Security"],
        stars: "Flagship"
      },
      {
        name: "dotfiles",
        desc: "Hyper-optimized Unix environment, Qtile window manager configuration, custom kernel hooks.",
        tech: ["Python", "Shell", "Linux"],
        stars: "Arch Linux"
      },
      {
        name: "FlashFeed",
        desc: "High-throughput mobile real-time news delivery system built for low-bandwidth environments.",
        tech: ["Kotlin", "Android", "API Arch"],
        stars: "Mobile"
      },
      {
        name: "smp-portal",
        desc: "Institutional mentorship platform architected for IIIT-Delhi handling multi-role student matching.",
        tech: ["JavaScript", "Node.js", "PostgreSQL"],
        stars: "IIIT-D"
      }
    ]
  },
  {
    name: "Dhruv Goyal",
    handle: "dhruvg0ya1",
    role: "Co-Founder & Head of Applied AI & LLM Systems",
    title: "AI Product Engineer & Research Author",
    avatar: "https://github.com/dhruvg0ya1.png",
    githubUrl: "https://github.com/dhruvg0ya1",
    portfolioUrl: "https://github.com/dhruvg0ya1",
    institution: "GGSIPU",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    bio: "AI Product Engineer at Times Internet (The Economic Times). Sole engineer owning the 92K LOC production generative video system spanning 7 automated stages, 43 model configurations across 13 providers, and self-hosted ComfyUI A100 GPU clusters. Slashed per-episode inference costs by 58% (Rs 9,756 to Rs 5,960) with 4x wall-clock speedup and an 808-test automated QC gate. Published researcher in Transformer architectures (AIJR Proceedings 2025).",
    badges: ["Co-Founder", "AI Product Engineer @ Times Internet (ET)", "AIJR Published Author", "GitHub Pro", "B.Tech AI & ML"],
    keySkills: [
      "92K LOC Production Generative Media Pipelines (The Economic Times)",
      "43 Model Configs / 13 Providers (OpenAI, Gemini, Veo, fal, Runway, ElevenLabs)",
      "58% Inference Cost Reduction (Gemini Batch & Speculative Routing)",
      "ComfyUI Self-Hosted A100-40GB GPU Clusters (Zero Vendor Billing)",
      "Automated Unattended QC Evaluation Gates (808 Automated Tests)",
      "Codebase AST Intelligence (Tree-sitter, CodeoGraph, LangChain, Pinecone)"
    ],
    highlightProject: {
      name: "The Economic Times AI Video Engine (ETai)",
      tagline: "7-stage automated media pipeline with 13 model APIs across LLM, diffusion, TTS & lip-sync",
      url: "https://github.com/dhruvg0ya1",
      stats: "58% Cost Cut (Rs 9,756 → Rs 5,960) · 4x Speedup (72h → 18h) · 808 Automated Tests"
    },
    topRepos: [
      {
        name: "The Economic Times AI Pipeline (ETai)",
        desc: "92K LOC Python system: Hinglish MicroDramas, ETHealth marathon reels, Clipper, 43 model configs across 13 providers.",
        tech: ["Python", "PyTorch", "ComfyUI", "A100 GPU", "Gemini Batch", "Whisper"],
        stars: "Production"
      },
      {
        name: "CodeoGraph",
        desc: "Codebase intelligence engine using Tree-sitter AST parsing, dense/BM25 hybrid search & PR review agents.",
        tech: ["Python", "Tree-sitter", "RAG", "AST Graph", "FastAPI"],
        stars: "Enterprise"
      },
      {
        name: "Agent-Image-Editing (Agent Banana)",
        desc: "Agentic visual editing framework combining Florence-2 grounding, ReAct loop, Gemini VLM & Laplacian blending.",
        tech: ["PyTorch", "Florence-2", "Gemini", "OpenCV"],
        stars: "Computer Vision"
      },
      {
        name: "GPT-2 PyTorch Implementation",
        desc: "Complete causal transformer reproduction from scratch: 124M pretraining, 355M fine-tuning, Llama-3 eval.",
        tech: ["PyTorch", "Transformers", "Deep Learning"],
        stars: "Foundational"
      }
    ]
  },
  {
    name: "Mayank Pandey",
    handle: "mayank2021264",
    role: "Head of Data Architecture & Cloud Infrastructure",
    title: "Data Engineering Lead & IIIT-Delhi Alumnus",
    avatar: "https://github.com/mayank2021264.png",
    githubUrl: "https://github.com/mayank2021264",
    portfolioUrl: "https://github.com/mayank2021264",
    institution: "IIIT-Delhi (Indraprastha Institute of Information Technology Delhi)",
    degree: "Computer Science & Engineering",
    bio: "IIIT-Delhi CSE alumnus specializing in distributed data architectures, real-time analytics streaming, scalable cloud database warehousing, and event-driven microservices. Leads enterprise data platform engineering, transactional CRM synchronization, and multi-tenant data pipelines.",
    badges: ["Head of Data", "IIIT-Delhi CSE", "Distributed Pipelines", "Cloud Infra"],
    keySkills: [
      "Distributed Data Architecture & Pipeline Engineering",
      "High-Throughput Relational & Vector Databases (PostgreSQL, MySQL, Redis)",
      "Scalable Event-Driven Microservices (Node.js, Express, REST APIs)",
      "Real-Time Data Streaming & Time-Series Tracking",
      "Enterprise Cloud CRM Synchronization & ETL Data Flows",
      "Data Governance, Schema Normalization & Multi-Tenant Access Control"
    ],
    highlightProject: {
      name: "Enterprise CRM & Data Synchronizer",
      tagline: "High-concurrency data platform with automated synchronization and multi-tenant access control",
      url: "https://github.com/mayank2021264",
      stats: "Zero Data Loss · Real-Time Time-Series Sync · Multi-Role Security"
    },
    topRepos: [
      {
        name: "CRM",
        desc: "Enterprise Customer Relationship & Data Platform with multi-role access control, data pipeline sync, and secure authentication.",
        tech: ["Node.js", "Express", "MongoDB", "REST APIs"],
        stars: "Platform"
      },
      {
        name: "Cointracker",
        desc: "High-frequency transactional data tracker with real-time websocket ingestion, market telemetry, and time-series aggregation.",
        tech: ["JavaScript", "WebSockets", "Data Streams"],
        stars: "Data Stream"
      },
      {
        name: "student-management",
        desc: "High-concurrency educational institution relational database management system with ACID-compliant transaction records.",
        tech: ["Java", "SQL", "Database Design"],
        stars: "Database"
      },
      {
        name: "TimeZone",
        desc: "Distributed multi-region timezone synchronization and scheduling daemon for enterprise teams.",
        tech: ["JavaScript", "Time-Series", "API Engine"],
        stars: "Utility"
      }
    ]
  },
  {
    name: "Himansh Harbola",
    handle: "Himansh-Harbola",
    role: "Head of Product Strategy & Commercial Operations",
    title: "Enterprise Product Strategist & Business Growth Lead",
    avatar: "https://github.com/Himansh-Harbola.png",
    githubUrl: "https://github.com/Himansh-Harbola",
    portfolioUrl: "https://github.com/Himansh-Harbola",
    institution: "Product Strategy & Business Analytics",
    degree: "Enterprise Product Management & Operations",
    bio: "Product executive and commercial strategist specializing in enterprise technology roadmap execution, product-led growth, client scoping, and AI SaaS commercial operations. Leads non-technical partner strategy, engagement scoping, customer ROI discovery, and commercial delivery.",
    badges: ["Head of Product", "Business Strategy", "Product Analytics", "Enterprise Growth"],
    keySkills: [
      "Product Strategy & Enterprise Roadmap Prioritization",
      "Client Scoping, Discovery & Commercial Value Modeling",
      "AI SaaS Product Lifecycle & Multi-Provider Workspace UX",
      "Data-Driven Product Analytics & Retention Metrics (MySQL, BI)",
      "Commercial Operations & GTM Partnership Execution",
      "Cross-Functional Alignment Between Engineering & Stakeholders"
    ],
    highlightProject: {
      name: "Tracechat & CampusOne Enterprise Platforms",
      tagline: "AI workspace with multi-provider LLM streaming, inference logging, and institutional management",
      url: "https://github.com/Himansh-Harbola",
      stats: "Enterprise GTM · Multi-Tenant Workspaces · Real-World Business Problem Solving"
    },
    topRepos: [
      {
        name: "Tracechat",
        desc: "AI chat workspace with multi-provider LLM streaming, inference logging, event-based ingestion, dashboards, Docker Compose, and Kubernetes manifests.",
        tech: ["Product Arch", "Docker", "Kubernetes", "LLM UX"],
        stars: "AI Workspace"
      },
      {
        name: "CampusOne",
        desc: "Comprehensive institutional product ecosystem featuring biometric tracking, RAG-based teaching assistant, and intuitive user workflows.",
        tech: ["Product Management", "RAG AI", "System Design"],
        stars: "Enterprise"
      },
      {
        name: "Netflix-Data-Analysis",
        desc: "Enterprise business case study solving 15 core commercial operational problems via relational business intelligence.",
        tech: ["MySQL", "Business Analytics", "Decision Modeling"],
        stars: "Analytics"
      },
      {
        name: "OLA-dashboard",
        desc: "Executive operational metrics and ride telemetry dashboard tracking fleet utilization and pricing elasticity.",
        tech: ["Power BI", "Telemetry", "GTM Strategy"],
        stars: "Commercial"
      }
    ]
  }
];

export const DRIFTNET_PRODUCT = {
  name: "Driftnet",
  version: "v0.2.0 (Pre-Release)",
  subdomain: "driftnet.tech",
  url: "https://driftnet.tech",
  tagline: "Your IDS knows the rules. Driftnet learns your network.",
  elevator: "A self-hosted, sovereign network anomaly detection daemon operating as an intelligent second tier behind Suricata, Zeek, or Snort. Calibrated on your own traffic with mathematical rigor, zero telemetry leakage, and zero heavy GPU overhead.",
  metrics: [
    { label: "Data Leakage", value: "0%", desc: "100% on-prem / VPC. Zero external cloud callouts." },
    { label: "False Positive Reduction", value: "92%", desc: "Calibrated behavioral Mahalanobis distance." },
    { label: "GPU Footprint", value: "0 MB", desc: "Runs on commodity CPU cores alongside Suricata." },
    { label: "Alert Fatigue Cap", value: "5-15", desc: "Strict daily mathematically budget-bounded alerts." }
  ],
  features: [
    {
      title: "Second-Tier Architecture",
      desc: "Designed to sit right behind Suricata, Zeek, or Snort. While signature engines drop known CVE hits, Driftnet intercepts the remaining unknown delta."
    },
    {
      title: "Rank-Gaussian Transformation",
      desc: "Transforms highly skewed raw network byte ratios and packet rates into clean Gaussian spaces, making covariance estimation stable."
    },
    {
      title: "Shrinkage Mahalanobis Distance",
      desc: "Accounts for correlated multivariate distributions without matrix singularity, even in sparse network host regimes."
    },
    {
      title: "Sovereign Daemon Deployment",
      desc: "Self-contained Go and Rust binaries. Never requires Internet outbound connectivity, third-party analytics telemetry, or SaaS subscription keys."
    }
  ]
};

export const SERVICES = [
  {
    id: "ai-systems",
    title: "Enterprise Generative AI & Autonomous Agent Systems",
    lead: "Dhruv Goyal",
    summary: "Production-grade multi-agent architectures, speculative model cascade routing, and RAG pipelines benchmarked at Times Internet scale.",
    description: "Production-grade multi-agent architectures, speculative model cascade routing, and RAG pipelines benchmarked at Times Internet scale.",
    deliverables: [
      "Speculative multi-model cascade (70% standard queries offloaded to compact models)",
      "High-throughput vertical media pipelines with Whisper, Diffusion & Neural TTS",
      "Semantic prompt caching reducing token overhead by up to 58%",
      "AST-level codebase understanding agents (CodeoGraph architecture)"
    ],
    techStack: ["PyTorch", "vLLM", "ComfyUI", "A100 GPU", "Tree-sitter", "FastAPI"],
    stats: "58% Cost Cut · 4x Speedup"
  },
  {
    id: "cyber-defense",
    title: "Sovereign Cyber Defense & Anomaly Architecture",
    lead: "Harsh Mistry",
    summary: "Air-gapped behavioral anomaly detection, zero-trust network design, and low-level Linux kernel socket defenses designed around Driftnet principles.",
    description: "Air-gapped behavioral anomaly detection, zero-trust network design, and low-level Linux kernel socket defenses designed around Driftnet principles.",
    deliverables: [
      "Custom Driftnet anomaly daemon deployment on enterprise bare-metal/VPC",
      "Suricata & Zeek rule auditing and false-positive reduction via Mahalanobis math",
      "Zero-outbound-data telemetry architectures for regulated financial environments",
      "Linux socket filter engineering (eBPF, ring-buffer packet ingestion)"
    ],
    techStack: ["Go", "C", "Rust", "eBPF", "Suricata", "Zeek", "NumPy"],
    stats: "0% Data Exfiltration · 92% Noise Drop"
  },
  {
    id: "data-cloud",
    title: "Distributed Data Platforms & Cloud Infrastructure",
    lead: "Mayank Pandey",
    summary: "High-throughput data engineering, scalable distributed databases, cloud CRM synchronization, and ACID-compliant event streaming.",
    description: "High-throughput data engineering, scalable distributed databases, cloud CRM synchronization, and ACID-compliant event streaming.",
    deliverables: [
      "Distributed database schema design & multi-region warehousing (PostgreSQL, Redis)",
      "Transactional event streaming & time-series aggregation engines",
      "Automated enterprise CRM synchronization & bi-directional ETL pipelines",
      "Zero-downtime database migrations & multi-tenant access control architecture"
    ],
    techStack: ["PostgreSQL", "Redis", "Node.js", "Docker", "REST APIs", "AWS"],
    stats: "ACID Compliant · 100% Ingestion Fidelity"
  },
  {
    id: "product-strategy",
    title: "Product Strategy & Enterprise ROI Discovery",
    lead: "Himansh Harbola",
    summary: "Commercial GTM modeling, technology roadmap prioritization, executive stakeholder alignment, and AI SaaS product lifecycle management.",
    description: "Commercial GTM modeling, technology roadmap prioritization, executive stakeholder alignment, and AI SaaS product lifecycle management.",
    deliverables: [
      "Enterprise technical scoping & compute expenditure audit sprints",
      "Product roadmap prioritization aligning engineering capacity with business KPIs",
      "Commercial value discovery modeling & ROI ledger presentations for executive boards",
      "User workflow optimization for multi-provider AI workspaces & SaaS tooling"
    ],
    techStack: ["Product Roadmaps", "GTM Strategy", "Kubernetes", "MySQL", "BI Analytics"],
    stats: "Data-Driven ROI · Executive GTM"
  }
];

export const CASE_STUDIES = [
  {
    client: "The Economic Times (Times Internet)",
    scope: "Autonomous Generative Video Engine (ETai)",
    architect: "Dhruv Goyal",
    metric1: "-58%",
    metric1Label: "Inference Cost Cut",
    metric2: "4.0X",
    metric2Label: "Throughput Acceleration",
    summary: "Re-engineered a 7-stage automated video generation pipeline across 13 model APIs (LLM, diffusion, TTS, lip-sync). Cut per-episode cost from Rs 9,756 to Rs 5,960 with self-hosted A100 ComfyUI clusters and an 808-test automated evaluation harness."
  },
  {
    client: "Tier-1 Financial Network (Driftnet Sandbox)",
    scope: "Sovereign Behavioral Anomaly Detection",
    architect: "Harsh Mistry",
    metric1: "10 Gbps",
    metric1Label: "Line Rate Ingestion",
    metric2: "0%",
    metric2Label: "Outbound Data Leakage",
    summary: "Deployed Driftnet's shrinkage Mahalanobis distance engine behind enterprise Suricata sensors. Filtered 92% of false-positive alarms while maintaining zero packet loss and strictly zero external cloud callouts."
  },
  {
    client: "Global SaaS Codebase Intelligence",
    scope: "AST Dependency Retrieval & PR Agents",
    architect: "Dhruv Goyal & Mayank Pandey",
    metric1: "1.4s",
    metric1Label: "AST Index Time (820k LOC)",
    metric2: "-65%",
    metric2Label: "PR Review Latency",
    summary: "Engineered CodeoGraph's incremental Tree-sitter AST parser paired with hybrid BM25/dense vector retrieval to enable context-aware autonomous code review agents across distributed enterprise repositories."
  }
];

export const ENGAGEMENT_MODELS = [
  {
    tier: "2-Week Architecture Sprint",
    timeline: "2 Weeks · Fixed Scope",
    idealFor: "Companies needing immediate architectural clarity, inference cost audits, or security posture reviews.",
    description: "Deep-dive audit into your existing AI inference bills, pipeline latency bottlenecks, or network IDS rules. Delivered with complete benchmarked blueprints.",
    highlights: [
      "Full AI unit economics & token burn profiling",
      "Identification of prompt caching & cascade offload wins",
      "Network IDS anomaly calibration audit",
      "Executive architecture presentation & actionable PRs"
    ],
    popular: false
  },
  {
    tier: "Embedded Principal Engineering",
    timeline: "4 - 12 Weeks · Founder-Led",
    idealFor: "Growth-stage companies deploying mission-critical AI agents or low-latency systems.",
    description: "Principal partners embed directly alongside your technical team. We write production Go/Python code, implement eBPF daemons, and deploy multi-model pipelines.",
    highlights: [
      "Direct code commits from Harsh, Dhruv, Mayank & Himansh",
      "Production deployment of custom model cascade routers",
      "Private VPC Driftnet anomaly daemon setup",
      "Daily standups, PR reviews, and CI/CD quality gates"
    ],
    popular: true
  },
  {
    tier: "Sovereign Enterprise Deployment",
    timeline: "Annual / Retained Advisory",
    idealFor: "Enterprises requiring air-gapped security, zero-exfiltration AI pipelines, and continuous optimization.",
    description: "Long-term partnership managing private on-premise AI inference clusters, ongoing Driftnet behavioral calibration, and custom kernel socket integrations.",
    highlights: [
      "SLA-backed 24/7 security & inference anomaly response",
      "Quarterly model retraining & prompt evaluation gates",
      "Dedicated sovereign compute cluster governance",
      "Executive board technology strategy advisement"
    ],
    popular: false
  }
];
