import { GeneratedWebsite } from './types';

export interface AgentTemplate {
  id: string;
  title: string;
  description: string;
  category: 'workflow' | 'document' | 'analytics' | 'creative';
  agentStack: string[];
  metrics: { label: string; value: string }[];
  accentColor: 'indigo' | 'emerald' | 'amber' | 'purple' | 'rose';
  icon: string;
  prompt: string;
  code: string;
  popularity: string;
  estimatedTokens: string;
}

export const AGENT_TEMPLATES: AgentTemplate[] = [
  {
    id: 'agent-coding-supervisor',
    title: 'Multi-Agent Coding Supervisor',
    description: 'Devises complete software modules using coordinated Planner, Coder, and Auditing agents. Automatically lints and runs tests inside a secure sandbox.',
    category: 'workflow',
    agentStack: ['System Planner Agent', 'TS Code Generator Agent', 'Security Auditor Agent'],
    metrics: [
      { label: 'SLA Score', value: '99.8%' },
      { label: 'Success Rate', value: '98.2%' },
      { label: 'Inference Speed', value: '1.2s' }
    ],
    accentColor: 'indigo',
    icon: 'Terminal',
    popularity: '⭐ 4.9 (24.5k uses)',
    estimatedTokens: '18,500 total',
    prompt: 'Create a high-fidelity dashboard for multi-agent software engineering coordination with live log outputs, file explorers, and code syntax highlighter.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agent-Coding Platform</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body { background-color: #020617; color: #f1f5f9; font-family: system-ui, sans-serif; }
    .glass-card { background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(8px); border: 1px solid rgba(99, 102, 241, 0.15); }
    .terminal-scrollbar::-webkit-scrollbar { width: 4px; }
    .terminal-scrollbar::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 2px; }
  </style>
</head>
<body class="p-6 max-w-7xl mx-auto space-y-6">
  <!-- Nav banner -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-indigo-500/20 pb-5">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white"><i data-lucide="terminal" class="h-5 w-5"></i></div>
      <div>
        <h1 class="text-xl font-bold tracking-tight text-white leading-none">Anik's Coding Agent Supervisor</h1>
        <p class="text-[10px] text-indigo-400 font-mono tracking-widest mt-1 uppercase">SANDBOX NODE 104 - DEPLOYED LIVE</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400 font-mono">3 agents online</span>
      <button onclick="runBuild()" class="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-lg text-white font-sans transition-all shadow-lg shadow-indigo-600/10">Run Workflow</button>
    </div>
  </div>

  <!-- Agent stats grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="glass-card p-5 rounded-2xl flex items-start justify-between">
      <div>
        <div class="text-[10px] text-gray-400 uppercase tracking-wider font-mono">Planner Agent</div>
        <div class="text-xl font-bold text-white mt-1">Generating Structure...</div>
        <p class="text-[10px] text-indigo-400 mt-1 font-mono">Task: "budget_tracker.py"</p>
      </div>
      <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
    </div>

    <div class="glass-card p-5 rounded-2xl flex items-start justify-between">
      <div>
        <div class="text-[10px] text-gray-400 uppercase tracking-wider font-mono">Coder Agent</div>
        <div class="text-xl font-bold text-white mt-1" id="coder-state">Idle</div>
        <p class="text-[10px] text-gray-500 mt-1 font-mono">Awaiting planner strategy</p>
      </div>
      <span class="h-2 w-2 rounded-full bg-gray-500" id="coder-dot"></span>
    </div>

    <div class="glass-card p-5 rounded-2xl flex items-start justify-between">
      <div>
        <div class="text-[10px] text-gray-400 uppercase tracking-wider font-mono">Syntax Auditor Agent</div>
        <div class="text-xl font-bold text-white mt-1" id="auditor-state">Sane</div>
        <p class="text-[10px] text-emerald-400 mt-1 font-mono">0 security vulnerabilities flag</p>
      </div>
      <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
    </div>
  </div>

  <!-- Code and logs split -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="glass-card p-6 rounded-2xl space-y-4">
      <div class="flex justify-between items-center border-b border-indigo-500/10 pb-3">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
          <i data-lucide="file-code" class="h-4 w-4 text-indigo-400"></i>
          Generated Software Payload
        </h3>
        <span class="text-[10px] text-indigo-400 font-mono">python • 1,200 lines</span>
      </div>
      
      <pre class="bg-[#030712] p-4 rounded-xl border border-white/5 font-mono text-[11px] h-64 overflow-y-auto text-indigo-300 select-all" id="code-box">
# Awaiting agent workflow init...
# Click "Run Workflow" above to bootstrap pipeline</pre>
    </div>

    <div class="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
      <div class="flex justify-between items-center border-b border-indigo-500/10 pb-3">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
          <i data-lucide="terminal" class="h-4 w-4 text-violet-400"></i>
          Audit System Console Logs
        </h3>
        <button onclick="clearLogs()" class="text-[10px] text-slate-500 hover:text-white uppercase font-mono">Clear</button>
      </div>

      <div class="bg-[#010409] p-4 rounded-xl border border-white/5 font-mono text-[10px] text-emerald-400 h-52 overflow-y-auto terminal-scrollbar space-y-2.5" id="log-box">
        <div>[SYSTEM] supervisor online. node ready.</div>
      </div>

      <div class="flex gap-2">
        <input id="prompt-ext" placeholder="Extend payload module with feature..." class="flex-1 bg-slate-950 border border-indigo-500/20 text-xs rounded-lg px-3 py-1.5 focus:border-indigo-500 outline-none">
        <button onclick="injectFeature()" class="px-4 py-1.5 bg-indigo-600/25 text-indigo-400 border border-indigo-500/30 font-semibold text-xs rounded-lg hover:bg-indigo-600/40 transition-colors">Inject</button>
      </div>
    </div>
  </div>

  <script>
    const LOGS = [
      "[SYSTEM] starting dynamic planner execution...",
      "[PLANNER] analyzing boilerplate dependencies...",
      "[PLANNER] layout mapped successfully. transferring stack token control.",
      "[CODER] received blueprint payload from compiler.",
      "[CODER] drafting import headers...",
      "[CODER] compiling core abstract state machines...",
      "[CODER] code generation complete. dispatching to Security Auditor.",
      "[AUDITOR] parsing AST modules...",
      "[AUDITOR] verifying SQL queries against injection filters...",
      "[AUDITOR] 100% test suites compiled green.",
      "[SYSTEM] workspace deployed to preview node node-104."
    ];

    const PYTHON_CODE = \`import sys
import os

class StateMachine:
    def __init__(self, budget_limit=1000):
        self.limit = budget_limit
        self.history = []

    def log_transaction(self, amount, vendor):
        if amount > self.limit:
            print(f"[WARN] Limit of {self.limit} exceeded for {vendor}!")
        self.history.append((vendor, amount))
        return True

planner = StateMachine()
planner.log_transaction(1200, "CloudServer node")\`;

    function runBuild() {
      let logBox = document.getElementById('log-box');
      let codeBox = document.getElementById('code-box');
      let coderState = document.getElementById('coder-state');
      let coderDot = document.getElementById('coder-dot');

      coderState.innerText = "Compiling modules...";
      coderDot.className = "h-2 w-2 rounded-full bg-amber-400 animate-pulse";
      
      let index = 0;
      let timer = setInterval(() => {
        if(index < LOGS.length) {
          let div = document.createElement('div');
          div.className = "transition-all p-0.5";
          div.innerText = LOGS[index];
          logBox.appendChild(div);
          logBox.scrollTop = logBox.scrollHeight;
          index++;
        } else {
          clearInterval(timer);
          codeBox.innerText = PYTHON_CODE;
          coderState.innerText = "Perfect Execution";
          coderDot.className = "h-2 w-2 rounded-full bg-emerald-400";
        }
      }, 500);
    }

    function clearLogs() {
      document.getElementById('log-box').innerHTML = '<div>[SYSTEM] console refreshed.</div>';
    }

    function injectFeature() {
      let text = document.getElementById('prompt-ext').value.trim();
      if(!text) return;
      
      let logBox = document.getElementById('log-box');
      let div = document.createElement('div');
      div.className = "text-indigo-400 font-semibold";
      div.innerText = "[INJECT] adding custom enhancement instruction: \\"" + text + "\\"";
      logBox.appendChild(div);
      logBox.scrollTop = logBox.scrollHeight;
      document.getElementById('prompt-ext').value = '';
    }

    window.onload = () => {
      lucide.createIcons();
    }
  </script>
</body>
</html>`
  },
  {
    id: 'agent-customer-support',
    title: 'Support Routing & Grounding Agent',
    description: 'Intercepts incoming customer tickets, verifies system databases using retrieval grounded search patterns, and crafts polite custom responses.',
    category: 'workflow',
    agentStack: ['Ticket Grounding Classifier', 'Knowledge Base Searcher', 'Politeness Auto-grader'],
    metrics: [
      { label: 'Deflection Rate', value: '42%' },
      { label: 'CSAT Gained', value: '+1.5pts' },
      { label: 'Latency', value: '0.8s' }
    ],
    accentColor: 'rose',
    icon: 'MessageSquare',
    popularity: '⭐ 4.8 (19.1k uses)',
    estimatedTokens: '12,200 total',
    prompt: 'Create a ticket router customer service dashboard with grounded database querying, tone regulators, and live feedback loops.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Support Routing System</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body { background-color: #0b0f19; color: #f3f4f6; }
    .glass { background: rgba(17,24,39,0.85); border: 1px solid rgba(244,63,94,0.15); }
  </style>
</head>
<body class="p-6 max-w-7xl mx-auto space-y-6">
  
  <div class="flex justify-between items-center pb-5 border-b border-rose-500/10">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-rose-600 flex items-center justify-center text-white"><i data-lucide="message-square" class="h-5 w-5"></i></div>
      <div>
        <h1 class="text-xl font-bold tracking-tight">AI Grounded Ticket Router</h1>
        <p class="text-[10px] text-rose-400 font-mono tracking-wider">RETRIEVAL AUGMENTED SERVICE PORTAL</p>
      </div>
    </div>
    <span class="px-2.5 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-semibold">CSAT Goal: 99.1%</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="md:col-span-1 border border-white/5 bg-slate-900/50 p-5 rounded-2xl space-y-4">
      <h3 class="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">Configure Grounding Database</h3>
      <p class="text-xs text-slate-400 leading-relaxed">Agent uses grounded database inputs before formulating responses to prevent hallucination cycles.</p>
      
      <div class="space-y-3">
        <div>
          <label class="text-[10px] text-gray-500 font-mono block mb-1">Company Refund Policy</label>
          <textarea id="policy-text" class="w-full bg-[#030712] border border-white/10 rounded-xl p-3 text-xs outline-none focus:border-rose-500 h-24 text-white">Full refunds issued within 30 days of purchase only, if product is unused. Digital products are subject to 5% flat processing surcharges.</textarea>
        </div>
        <div>
          <label class="text-[10px] text-gray-500 font-mono block mb-1 font-bold">Target Politeness Level</label>
          <select id="tone-set" class="w-full bg-[#030712] border border-white/10 rounded-xl p-2 text-xs text-white">
            <option value="highly-polite">Highly Polite & Empathetic</option>
            <option value="direct">Direct & Professional</option>
            <option value="casual">Casual & Tech-friendly</option>
          </select>
        </div>
      </div>
    </div>

    <div class="md:col-span-2 glass p-6 rounded-2xl flex flex-col justify-between space-y-6">
      <div class="flex justify-between items-center pb-2 border-b border-rose-500/10">
        <div>
          <h2 class="text-md font-bold">Live Ticket Interaction SandBox</h2>
          <p class="text-xs text-slate-400">Submit a query to verify tone analysis and database alignment metrics instantly.</p>
        </div>
      </div>

      <div class="space-y-4">
        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1 uppercase">Customer Email / Incoming Query</label>
          <input id="user-ticket" type="text" value="I bought this 5 days ago and it is broken. I want my money back." class="w-full bg-[#03060f] border border-white/10 rounded-xl p-3 text-xs text-white">
        </div>

        <button onclick="routerWorkflow()" class="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white rounded-xl transition-all shadow-lg shadow-rose-600/10">
          Activate Auto-responder Pipeline
        </button>

        <div class="p-4 rounded-xl bg-slate-950 border border-rose-500/10">
          <div class="flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>FORMULATED AI RESPONSE PREVIEW:</span>
            <span class="text-rose-400 font-bold" id="tone-badge">Awaiting Pipeline...</span>
          </div>
          <p class="text-xs text-white mt-2 leading-relaxed" id="reply-box">Please run ticket pipeline to generate empathetic reply.</p>
        </div>
      </div>
    </div>
  </div>

  <script>
    function routerWorkflow() {
      const policyVal = document.getElementById('policy-text').value;
      const ticketVal = document.getElementById('user-ticket').value;
      const toneVal = document.getElementById('tone-set').value;

      document.getElementById('tone-badge').innerText = "Analyzing Context...";
      
      setTimeout(() => {
        let text = "";
        if(/money|refund/i.test(ticketVal)) {
          text = "Thank you for reaching out! Since you purchased 5 days ago, you are within our 30-day window. We will gladly coordinate a 100% hassle-free refund process for you. Let us know if there is anything else.";
        } else {
          text = "Hi customer, thank you for contacting support! Our automated system is reading your query. We will consult our grounded workspace policy to resolve this instantly.";
        }

        if(toneVal === 'direct') {
          text = "Refund query evaluated within 30-day scope. Processing has started. Expect funds in 3 business days.";
        } else if (toneVal === 'casual') {
          text = "Hey there! Checked our database and saw you're totally within the 30-day window! Let's get that refund process rolling. Catch you soon!";
        }

        document.getElementById('reply-box').innerText = text;
        document.getElementById('tone-badge').innerText = "✓ POLITE & GROUNDED";
      }, 700);
    }

    window.onload = () => {
      lucide.createIcons();
    }
  </script>
</body>
</html>`
  },
  {
    id: 'agent-deep-financial',
    title: 'Financial Document Research Extractors',
    description: 'Searches company filings, parses quarterly PDF pipelines, and tabulates analytical data maps. Includes live metric filters.',
    category: 'analytics',
    agentStack: ['PDF Pipeline Parser', 'Filings Retrieval Agent', 'Quant Model Tabulator'],
    metrics: [
      { label: 'Time Saved', value: '40 hrs/wk' },
      { label: 'Confidence Floor', value: '99.5%' },
      { label: 'Files Scanned', value: '1,500+' }
    ],
    accentColor: 'amber',
    icon: 'BarChart2',
    popularity: '⭐ 4.9 (15.5k uses)',
    estimatedTokens: '21,000 total',
    prompt: 'Create a high-fidelity quantitative financial research dashboard with live trend graphs, filings classifiers, and target rate evaluations.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Deep Financial Intelligence Research</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body { background-color: #0c0a09; color: #d6d3d1; font-family: system-ui, sans-serif; }
    .glass { background: rgba(28, 25, 23, 0.7); border: 1px solid rgba(217, 119, 6, 0.15); }
  </style>
</head>
<body class="p-6 max-w-7xl mx-auto space-y-6">
  
  <div class="flex justify-between items-center pb-5 border-b border-amber-500/15">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-amber-600 flex items-center justify-center text-white"><i data-lucide="bar-chart-2" class="h-5 w-5"></i></div>
      <div>
        <h1 class="text-xl font-bold text-white tracking-tight leading-none font-sans">Anik's Financial Extraction Engine</h1>
        <p class="text-[9px] text-amber-500 font-mono mt-1 font-bold uppercase tracking-widest">Model: Deep Research Agent v3</p>
      </div>
    </div>
    <div class="px-2 py-0.5 rounded bg-amber-500/5 border border-amber-500/20 text-amber-400 font-mono text-[10px]">Secure Vault</div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="glass p-5 rounded-2xl flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-white text-sm font-bold font-sans">Document Source Selection</h3>
        <p class="text-[11px] text-gray-400 mt-1">Pick a filing target and extract quantitative statistics.</p>
      </div>

      <div class="space-y-3">
        <div>
          <label class="text-[10px] text-stone-500 block mb-1 font-mono uppercase">Target Stock Symbol</label>
          <select id="sym-choice" class="w-full border border-white/10 bg-stone-950 p-2 rounded-xl text-xs text-white">
            <option value="AMZN">Amazon (AMZN) - Q4 Filing 10-K</option>
            <option value="NVDA">Nvidia (NVDA) - Annual PDF Report</option>
            <option value="GOOGL">Alphabet Inc (GOOGL) - Fiscal filings</option>
          </select>
        </div>

        <div>
          <label class="text-[10px] text-stone-500 block mb-1 font-mono uppercase">Quantitative Matrix KPI</label>
          <select id="kpi-choice" class="w-full border border-white/10 bg-stone-950 p-2 rounded-xl text-xs text-white">
            <option value="rev">Gross Revenue Expansion %</option>
            <option value="margin">Operation Squeeze SLA Margin</option>
          </select>
        </div>
      </div>

      <button onclick="testExtract()" class="w-full py-2 bg-amber-600 text-white font-semibold text-xs rounded-xl hover:bg-amber-500">Run SEC Extractor</button>
    </div>

    <div class="md:col-span-2 glass p-6 rounded-2xl space-y-4">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-md font-bold text-white">System Document Analysis Summary</h3>
          <p class="text-xs text-stone-400">Grounded analysis results mapped on simulated visual matrices.</p>
        </div>
        <span id="extraction-badge" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/15">Node Sane</span>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-black/40 p-4 border border-white/5 rounded-xl text-center">
          <div class="text-[9px] text-stone-500 uppercase font-mono">EXTRACTED CORE CAP</div>
          <p class="text-xl font-bold text-white mt-1" id="val-cap">$148.5B</p>
        </div>
        <div class="bg-black/40 p-4 border border-white/5 rounded-xl text-center">
          <div class="text-[9px] text-stone-500 uppercase font-mono">GROWTH VALUE CORRELATION</div>
          <p class="text-xl font-bold text-emerald-400 mt-1" id="val-growth">+14.2%</p>
        </div>
        <div class="bg-black/40 p-4 border border-white/5 rounded-xl col-span-2 md:col-span-1 text-center">
          <div class="text-[9px] text-stone-500 uppercase font-mono">CONFIDENCE INTERVAL</div>
          <p class="text-xl font-bold text-amber-500 mt-1">99.87%</p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-stone-950/70 border border-stone-800">
        <label class="text-[10px] font-bold text-stone-500 font-mono tracking-wide uppercase">Deduplicated Extraction Summary</label>
        <p class="text-xs text-stone-300 italic mt-1 leading-relaxed" id="report-text">"Click SEC Extractor to parse structured quarter filings details automatically from secure workspace memory pools."</p>
      </div>
    </div>
  </div>

  <script>
    function testExtract() {
      const sym = document.getElementById('sym-choice').value;
      const kpi = document.getElementById('kpi-choice').value;
      const eb = document.getElementById('report-text');

      document.getElementById('extraction-badge').innerText = "Processing File...";
      document.getElementById('extraction-badge').className = "px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-500 font-mono border border-amber-500/15 animate-pulse";

      setTimeout(() => {
        document.getElementById('extraction-badge').innerText = "✓ EXTRACTED SECURE";
        document.getElementById('extraction-badge').className = "px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/15";

        if(sym === 'AMZN') {
          document.getElementById('val-cap').innerText = "$148.5B";
          document.getElementById('val-growth').innerText = kpi === 'rev' ? "+16.8%" : "35.2% Margin";
          eb.innerText = "Secured Amazon 10-K extraction completed. Evaluated cloud sector elasticity with robust operating capacity. Zero structural risks found.";
        } else if(sym === 'NVDA') {
          document.getElementById('val-cap').innerText = "$220.1B";
          document.getElementById('val-growth').innerText = kpi === 'rev' ? "+41.2%" : "58.4% Margin";
          eb.innerText = "NVIDIA corporate layout analyzed. Semi-conductor expansion matrices conform exactly with high-fidelity performance forecasts.";
        } else {
          document.getElementById('val-cap').innerText = "$92.4B";
          document.getElementById('val-growth').innerText = kpi === 'rev' ? "+11.4%" : "19.8% Margin";
          eb.innerText = "Alphabet Q4 filing spreadsheet extracted successfully. Found steady advertisement performance coupled with persistent machine learning investments.";
        }
      }, 600);
    }

    window.onload = () => {
      lucide.createIcons();
    }
  </script>
</body>
</html>`
  },
  {
    id: 'agent-marketing-campaign',
    title: 'AI Social Banner Orchestrator',
    description: 'Deploys localized copywriters, theme coordinators, and layout customizers to formulate eye-safe digital banners automatically.',
    category: 'creative',
    agentStack: ['Copywriter Copy Agent', 'CSS Palette Coordinator', 'Asset Scale Validator'],
    metrics: [
      { label: 'ROAS Gained', value: '3.2x' },
      { label: 'Variants Made', value: '25+/sec' },
      { label: 'CTR Exp', value: '+18.5%' }
    ],
    accentColor: 'purple',
    icon: 'Sparkles',
    popularity: '⭐ 4.7 (12.4k uses)',
    estimatedTokens: '14,800 total',
    prompt: 'Create an organic layout marketing publisher with auto-generated copywriting cards and visual responsive sizing grids.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Marketing campaign sandbox</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #05050e; color: #dadbe6; }
    .premium-panel { background: rgba(18,18,36,0.85); border: 1px solid rgba(139,92,246,0.22); }
  </style>
</head>
<body class="p-6 max-w-7xl mx-auto space-y-6">
  
  <div class="flex items-center justify-between border-b border-purple-500/20 pb-5">
    <div class="flex items-center gap-2">
      <div class="h-10 w-10 bg-purple-600 rounded-xl flex items-center justify-center font-bold text-white">✨</div>
      <div>
        <h1 class="text-xl font-bold text-white leading-none">Anik's Ad Campaign Orchestrator</h1>
        <p class="text-[10px] text-purple-400 font-mono tracking-wider mt-1.5 uppercase">Visual Ad Canvas Engine</p>
      </div>
    </div>
    <span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs font-mono font-semibold">Asset Node Active</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="premium-panel p-5 rounded-2xl flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-sm font-semibold text-white">Campaign Slogan Generator</h3>
        <p class="text-xs text-gray-400">Trigger localized agency agents to compose copy styles instantly.</p>
      </div>

      <div class="space-y-3">
        <div>
          <label class="text-[10px] text-gray-500 font-mono block mb-1">Product Sector / Theme</label>
          <select id="sector" class="w-full bg-slate-950 border border-white/10 rounded-xl p-2.5 text-xs text-white">
            <option value="saas">SaaS Automation Platform</option>
            <option value="crypto">Decentralized Web3 Wallet</option>
            <option value="fitness">Mindfulness & Yoga Studio</option>
          </select>
        </div>
      </div>

      <button onclick="composeCampaign()" class="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-purple-600/10">Compose Banner Copy</button>
    </div>

    <div class="md:col-span-2 flex items-center justify-center">
      <div id="card-payload" class="w-full h-64 rounded-2xl bg-gradient-to-tr from-purple-800 to-indigo-900 p-8 flex flex-col justify-between shadow-2xl relative transition-all">
        <div class="flex justify-between items-start font-mono text-[10px] text-white/70">
          <span>COWORK INTUITIVE BANNERS</span>
          <span class="px-2 py-0.5 bg-white/10 rounded">VARIANT A</span>
        </div>

        <div class="my-auto">
          <h2 id="copy-title" class="text-2xl font-bold text-white tracking-tight leading-tight">Click Compose to coordinate Copywriter Agents.</h2>
        </div>

        <div class="flex justify-between items-center text-[10px] text-white/50 border-t border-white/20 pt-4">
          <span>Click to scale responsive variants</span>
          <span>SAAS-2026</span>
        </div>
      </div>
    </div>
  </div>

  <script>
    function composeCampaign() {
      const sector = document.getElementById('sector').value;
      const title = document.getElementById('copy-title');
      const container = document.getElementById('card-payload');

      if(sector === 'saas') {
        title.innerText = "Coordinate workflows 100x faster with secure sandbox agents.";
        container.className = "w-full h-64 rounded-2xl bg-gradient-to-tr from-purple-800 to-indigo-900 p-8 flex flex-col justify-between shadow-2xl relative transition-all";
      } else if (sector === 'crypto') {
        title.innerText = "Transact globally in 0.2s with zero fee multi-chain gas rails.";
        container.className = "w-full h-64 rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-900 p-8 flex flex-col justify-between shadow-2xl relative transition-all";
      } else {
        title.innerText = "Calm your mind loops with interactive daily breathing guides.";
        container.className = "w-full h-64 rounded-2xl bg-gradient-to-tr from-amber-700 to-orange-850 p-8 flex flex-col justify-between shadow-2xl relative transition-all";
      }
    }
  </script>
</body>
</html>`
  }
];
