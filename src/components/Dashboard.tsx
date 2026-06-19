import { TEMPLATES } from '../mockData';
import { WorkflowTemplate, ExecutionRun } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Play, 
  CheckCircle, 
  XCircle, 
  Loader2, 
  Cpu, 
  Coins, 
  History, 
  Flame, 
  BarChart3, 
  ArrowRight,
  TrendingUp,
  Clock
} from 'lucide-react';

interface DashboardProps {
  executionHistory: ExecutionRun[];
  onSelectTemplate: (template: WorkflowTemplate) => void;
  onTriggerRun: (template: WorkflowTemplate) => void;
  currentRunningId?: string;
}

export default function Dashboard({ 
  executionHistory, 
  onSelectTemplate, 
  onTriggerRun,
  currentRunningId
}: DashboardProps) {

  // Calculate high-level metrics
  const totalRuns = executionHistory.length;
  const successfulRuns = executionHistory.filter(h => h.status === 'completed').length;
  const failedRuns = executionHistory.filter(h => h.status === 'failed').length;
  const totalTokens = executionHistory.reduce((acc, current) => acc + (current.totalTokens || 0), 0);
  const totalCost = executionHistory.reduce((acc, current) => acc + (current.totalCost || 0), 0);

  // Framer Motion layout transition variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 95, damping: 14 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8 min-h-[calc(100vh-4rem)] bg-[#030712] relative overflow-hidden"
    >
      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-[300px] w-[500px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      {/* Top Welcome Title */}
      <motion.div 
        variants={itemVariants} 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left"
      >
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-sans sm:text-4xl">
            SaaS Console & Agent Analytics
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Evaluate topological runs, view cognitive metrics, and launch template schemas instantly.
          </p>
        </div>
        
        {/* Rapid summary badge */}
        <div className="flex items-center gap-2.5 rounded-xl border border-slate-805 bg-[#090e1a] px-4 py-2 text-xs font-mono">
          <Clock className="h-4 w-4 text-indigo-400" />
          <span className="text-slate-400">SESSION TIME:</span>
          <span className="text-white font-semibold">2026-06-11 UTC</span>
        </div>
      </motion.div>

      {/* Numerical Bento Metrics Grid with stagger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Active Presets */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.025, borderColor: 'rgba(99,102,241,0.3)', backgroundColor: 'rgba(9,14,26,0.95)' }}
          className="rounded-xl border border-slate-800 bg-[#090e1a]/85 p-5 relative overflow-hidden group transition-all duration-200 text-left cursor-default"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">PRESETS AVAILABLE</span>
            <Layers className="h-5 w-5 text-indigo-400" />
          </div>
          <p className="mt-4 text-3xl font-bold text-white tracking-tight">{TEMPLATES.length}</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-indigo-300">
            <span className="font-mono bg-indigo-950/40 px-1.5 py-0.5 rounded border border-indigo-500/10">100% Core Coverage</span>
          </div>
        </motion.div>

        {/* Card 2: Runs Orchestrated */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.025, borderColor: 'rgba(168,85,247,0.3)', backgroundColor: 'rgba(9,14,26,0.95)' }}
          className="rounded-xl border border-slate-800 bg-[#090e1a]/85 p-5 relative overflow-hidden group transition-all duration-200 text-left cursor-default"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">TOTAL EXECUTIONS</span>
            <History className="h-5 w-5 text-purple-400" />
          </div>
          <p className="mt-4 text-3xl font-bold text-white tracking-tight">{totalRuns}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
            <span className="text-emerald-400 font-semibold">{successfulRuns} Success</span>
            <span>•</span>
            <span className="text-rose-400 font-semibold">{failedRuns} Failed</span>
          </div>
        </motion.div>

        {/* Card 3: Token Consumption */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.025, borderColor: 'rgba(236,72,153,0.3)', backgroundColor: 'rgba(9,14,26,0.95)' }}
          className="rounded-xl border border-slate-800 bg-[#090e1a]/85 p-5 relative overflow-hidden group transition-all duration-200 text-left cursor-default"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">TOTAL TOKENS TRACED</span>
            <Cpu className="h-5 w-5 text-pink-400" />
          </div>
          <p className="mt-4 text-3xl font-bold text-white tracking-tight">
            {totalTokens.toLocaleString()}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-pink-300">
            <TrendingUp className="h-3 w-3" />
            <span>Avg {totalRuns > 0 ? Math.floor(totalTokens / totalRuns) : 0} per run</span>
          </div>
        </motion.div>

        {/* Card 4: Accumulated Cost */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.025, borderColor: 'rgba(16,185,129,0.3)', backgroundColor: 'rgba(9,14,26,0.95)' }}
          className="rounded-xl border border-slate-800 bg-[#090e1a]/85 p-5 relative overflow-hidden group transition-all duration-200 text-left cursor-default"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">ESTIMATED COMPUTE BUDGET</span>
            <Coins className="h-5 w-5 text-emerald-400" />
          </div>
          <p className="mt-4 text-3xl font-bold text-white tracking-tight">
            ${totalCost.toFixed(5)}
          </p>
          <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-400">
            <span>Live Pricing Applied</span>
          </div>
        </motion.div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Launch Templates */}
        <div className="lg:col-span-6 space-y-5">
          <motion.div variants={itemVariants} className="flex items-center justify-between text-left">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Flame className="h-5 w-5 text-amber-500" />
              Startup Agent Templates
            </h2>
            <span className="text-xs text-indigo-400 font-semibold">Click to open & refine</span>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-4" layout>
            {TEMPLATES.map((template) => {
              const isCurrentlyRunning = currentRunningId === template.id;
              
              return (
                <motion.div 
                  layout
                  variants={itemVariants}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.012, 
                    borderColor: 'rgba(99,102,241,0.25)',
                    backgroundColor: 'rgba(9,14,26,0.95)'
                  }}
                  key={template.id}
                  className="rounded-xl border border-slate-800 bg-[#090e1a]/80 p-5 transition-colors duration-200 text-left relative group overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded bg-indigo-950/60 text-[10px] uppercase font-bold text-indigo-400 border border-indigo-500/10">
                          {template.category}
                        </span>
                        <span className="text-xs text-slate-500">
                          {template.nodes.length} agent nodes
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {template.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        onClick={() => onSelectTemplate(template)}
                        className="py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-medium transition-all cursor-pointer"
                      >
                        Customize Workspace
                      </button>
                      
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onTriggerRun(template)}
                        disabled={isCurrentlyRunning}
                        className="py-1.5 px-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-xs text-white font-semibold shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50"
                      >
                        {isCurrentlyRunning ? (
                          <>
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>Tracing...</span>
                          </>
                        ) : (
                          <>
                            <Play className="h-3 w-3 fill-current text-white" />
                            <span>Quick Run</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side: Active trace stream history */}
        <div className="lg:col-span-6 space-y-5">
          <motion.div variants={itemVariants} className="flex items-center justify-between text-left">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-indigo-400" />
              Live Execution Telemetry
            </h2>
            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
              REAL-TIME UPDATE
            </span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="rounded-xl border border-slate-800 bg-[#090e1a]/85 p-5 min-h-[400px] max-h-[500px] overflow-y-auto space-y-4"
          >
            {executionHistory.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 text-slate-500 space-y-3">
                <History className="h-10 w-10 text-slate-600 animate-pulse" />
                <p className="text-xs">No active runs recorded.</p>
                <p className="text-[11px] max-w-xs leading-relaxed">
                  Choose a Multi-Agent Template to launch your very first automated trace logs.
                </p>
              </div>
            ) : (
              <AnimatePresence initial={false}>
                {[...executionHistory].reverse().map((run) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 25, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, x: -25, height: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    key={run.id}
                    className="p-4 rounded-xl border border-slate-850 bg-slate-950/40 hover:bg-slate-950/80 transition-all duration-200 space-y-3.5 text-left overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">
                          ID: {run.id.slice(0, 8)}
                        </span>
                        <h4 className="text-xs font-bold text-slate-200">
                          {run.workflowName}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono">
                        {run.status === 'running' && (
                          <div className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5 animate-pulse">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>COMPILING</span>
                          </div>
                        )}
                        {run.status === 'completed' && (
                          <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            <span>SUCCESS</span>
                          </div>
                        )}
                        {run.status === 'failed' && (
                          <div className="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center gap-1">
                            <XCircle className="h-3 w-3" />
                            <span>FAILED</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Interconnected agent run steps */}
                    <div className="pl-2 border-l border-slate-800 space-y-3">
                      {run.steps.map((step, idx) => (
                        <div key={idx} className="text-xs space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-300 font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 inline-block" />
                              {step.nodeTitle}
                            </span>
                            <span className="font-mono text-slate-500">
                              {step.tokensUsed ? `${step.tokensUsed} tokens` : 'queued'}
                            </span>
                          </div>
                          {step.status === 'running' && (
                            <div className="text-[10px] text-indigo-400 italic font-mono pl-2.5">
                              Processing live generative content...
                            </div>
                          )}
                          {step.status === 'completed' && step.outputProduced && (
                            <p className="text-[11px] text-slate-400 bg-slate-900/40 p-2 rounded border border-slate-850 font-mono leading-relaxed max-h-24 overflow-y-auto whitespace-pre-wrap">
                              {step.outputProduced}
                            </p>
                          )}
                          {step.status === 'failed' && step.error && (
                            <p className="text-[10px] text-rose-400 font-semibold bg-rose-950/10 p-2 rounded border border-rose-900/30 font-mono">
                              ERROR: {step.error}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Summary row */}
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono pt-2 border-t border-slate-900">
                      <span>started: {run.startedAt ? new Date(run.startedAt).toLocaleTimeString() : 'Pending'}</span>
                      <div className="flex items-center gap-3">
                        <span>Tokens: <strong className="text-indigo-400">{run.totalTokens}</strong></span>
                        <span>Budget: <strong className="text-emerald-400">${run.totalCost.toFixed(5)}</strong></span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </motion.div>
        </div>

      </div>

    </motion.div>
  );
}
