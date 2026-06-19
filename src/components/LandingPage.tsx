import { motion } from 'motion/react';
import { ArrowRight, Cpu, Layers, Sparkles, Terminal, Shield, Zap, Flame, Code } from 'lucide-react';

interface LandingPageProps {
  onStartDesigning: () => void;
  setCurrentTab: (tab: string) => void;
}

export default function LandingPage({ onStartDesigning, setCurrentTab }: LandingPageProps) {
  // Cascading stagger variants for the Hero elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  // Bento grids staggered entry
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 14 }
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-[#030712] min-h-[calc(100vh-4rem)]">
      {/* Radial grid pattern background matching Immersive UI */}
      <div 
        className="absolute inset-0 -z-10 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(#6366f1 0.8px, transparent 0.8px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Glowing backdrop elements with slow hover / breath pulse */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-1/2 top-40 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute right-[10%] bottom-20 -z-10 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[100px]" 
      />

      {/* Hero Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6"
        >
          <Sparkles className="h-3 w-3 text-indigo-400 animate-pulse" />
          <span>Powered by Gemini 3.5 & Multitask Chain Architectures</span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight max-w-5xl mx-auto font-sans"
        >
          Chain Autonomous Agents.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            Build Infinite SaaS Workflows.
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Design, link, configure, and execute multi-agent pipelines with live visual node builders. Optimize prompts and analyze real-time execution tokens with Google Gemini API proxy channels.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartDesigning}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 cursor-pointer"
          >
            <span>Launch Visual Workspace</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setCurrentTab('dashboard')}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-805 bg-slate-900/60 hover:bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all cursor-pointer"
          >
            <Terminal className="h-4 w-4 text-indigo-400" />
            <span>Interactive Logs & Dashboard</span>
          </motion.button>
        </motion.div>

        {/* Visual Workflow Preview / Interactive Widget with framer entry */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 rounded-2xl border border-slate-800/80 bg-[#090e1a]/95 p-2 shadow-2xl shadow-indigo-500/5 relative group max-w-5xl mx-auto overflow-hidden text-left"
        >
          {/* Chrome style decoration dots */}
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-800/60 bg-slate-950/50">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-[10px] text-slate-500 font-mono ml-4">synapse-designer-v2.0 // autonomous_flow_campaign</span>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 bg-slate-950/40 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="h-5 w-5 text-indigo-400" />
                Live Multitask Chaining Demonstration
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Watch how standard workflows turn into cognitive pipelines. An initial input triggers an analytical academic investigator, which structures detailed briefs. Downstream copywriting engines then craft the final campaign copy automatically.
              </p>
              
              {/* Dynamic steps indicator inside motion stagger */}
              <div className="space-y-2 pt-2">
                {[
                  { num: 1, title: "Input Trigger:", val: '"Launch a premium multi-agent builder product"', highlight: true },
                  { num: 2, title: "Academic Researcher:", val: "Analyze competitors and synthesize deep niche angles", highlight: false },
                  { num: 3, title: "SEO Copywriter:", val: "Extract angles and outputs clean optimized drafts", highlight: false },
                ].map((step, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.15, type: 'spring' }}
                    key={step.num}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs ${
                      step.highlight 
                        ? 'border-indigo-500/20 bg-indigo-950/20' 
                        : 'border-slate-800 bg-slate-900/40 text-slate-400'
                    }`}
                  >
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold font-mono ${
                      step.highlight ? 'bg-indigo-500/30 text-indigo-300' : 'bg-slate-800 text-slate-500'
                    }`}>{step.num}</div>
                    <span className={step.highlight ? 'text-slate-300 font-medium' : 'text-slate-450'}>{step.title}</span>
                    <span className={step.highlight ? 'text-slate-450 italic' : 'text-slate-450'}>{step.val}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.015 }}
              className="lg:col-span-5 bg-gradient-to-tr from-slate-900/80 to-slate-950 border border-slate-800/80 rounded-xl p-5 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-1.5 bg-indigo-600/10 text-indigo-400 text-[10px] font-mono border-bl border-slate-800 uppercase rounded-bl-lg">
                OUTPUT SPECTROGRAM
              </div>
              
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-900">
                  <span>API LATENCY: 34ms</span>
                  <span className="text-emerald-400">STATUS: READY</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-slate-400 text-[11px]">/* SIMULATED INFERENCE STREAMS */</div>
                  <div className="text-indigo-400">{"{"}</div>
                  <div className="pl-4 text-slate-300">"agentRole": "Academic Researcher",</div>
                  <div className="pl-4 text-emerald-400">"estimatedTokens": 412,</div>
                  <div className="pl-4 text-pink-400">"averageCostUSD": 0.00006,</div>
                  <div className="pl-4 text-slate-300">"currentOutput": "Chained analytics ready..."</div>
                  <div className="text-indigo-400">{"}"}</div>
                </div>

                <div className="pt-2">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onStartDesigning}
                    className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-white rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Code className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Test This In Workspace</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Grid Highlights Section with Scroll Motion */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Topological Pipelines */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.025, 
              borderColor: 'rgba(99, 102, 241, 0.4)',
              backgroundColor: 'rgba(15, 23, 42, 0.4)'
            }}
            className="bg-slate-950/30 p-8 rounded-2xl border border-slate-850/60 transition-colors duration-300 text-left"
          >
            <div className="h-10 w-10 flex items-center justify-center bg-indigo-600/10 text-indigo-400 rounded-xl border border-indigo-500/20 mb-5">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Topological Pipelines</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Order execution flows geometrically. Map ports to variables to build a sequential computational trace utilizing live outputs from past steps.
            </p>
          </motion.div>

          {/* Card 2: Live Proxy Gateway */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.025, 
              borderColor: 'rgba(168, 85, 247, 0.4)',
              backgroundColor: 'rgba(15, 23, 42, 0.4)'
            }}
            className="bg-slate-950/30 p-8 rounded-2xl border border-slate-850/60 transition-colors duration-300 text-left"
          >
            <div className="h-10 w-10 flex items-center justify-center bg-purple-600/10 text-purple-400 rounded-xl border border-purple-500/20 mb-5">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Live Proxy Gateway</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Pass system tokens securely. Workflows call the live Google Gemini API backend routes using developer secret keys, or simulate beautiful outcomes smoothly.
            </p>
          </motion.div>

          {/* Card 3: Cost & Limit Trackers */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.025, 
              borderColor: 'rgba(236, 72, 153, 0.4)',
              backgroundColor: 'rgba(15, 23, 42, 0.4)'
            }}
            className="bg-slate-950/30 p-8 rounded-2xl border border-slate-850/60 transition-colors duration-300 text-left"
          >
            <div className="h-10 w-10 flex items-center justify-center bg-pink-600/10 text-pink-400 rounded-xl border border-pink-500/20 mb-5">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Cost & Limit Trackers</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Maintain full insight over workspace overhead. Live monitors dynamically parse execution runs, trace logs, latencies, token consumption, and budget metrics.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Trust / Tech specs Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-indigo-400" />
            <span>SYNAPSE MULTI-AGENT DESIGN PROTOCOL v2.4</span>
          </div>
          <div>
            <span>LATENCY: <span className="text-emerald-400">14ms</span></span>
            <span className="mx-3">|</span>
            <span>ENV: <span className="text-indigo-400">STAGING</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
