import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENT_TEMPLATES, AgentTemplate } from '../mockTemplates';
import { 
  Terminal, 
  MessageSquare, 
  BarChart2, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Search, 
  Check, 
  Cpu, 
  Info,
  Clock,
  LayoutGrid
} from 'lucide-react';

import { GeneratedWebsite } from '../types';

interface TemplateGalleryProps {
  onBootstrap: (template: AgentTemplate) => void;
  customWebsites?: GeneratedWebsite[];
}

const iconMap: { [key: string]: any } = {
  Terminal: Terminal,
  MessageSquare: MessageSquare,
  BarChart2: BarChart2,
  Sparkles: Sparkles
};

export default function TemplateGallery({ onBootstrap, customWebsites = [] }: TemplateGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [query, setQuery] = useState<string>('');
  const [bootstrappingId, setBootstrappingId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All blueprints' },
    { id: 'custom', label: "Anik's Projects (Real Layouts)" },
    { id: 'workflow', label: 'Orchestrations' },
    { id: 'analytics', label: 'Intelligence' },
    { id: 'creative', label: 'Advertising' },
    { id: 'document', label: 'Grounded' }
  ];

  // Map user's actual generated custom projects into first-class blueprints
  const mappedCustomTemplates: AgentTemplate[] = customWebsites.map((site, index) => {
    return {
      id: site.id,
      title: site.title,
      description: `Target layout generated and edited dynamically in your workspace. Prompt: "${site.prompt || 'Custom UI components flow'}"`,
      category: 'custom' as any,
      agentStack: ['Design Customizer Agent', 'DOM Layout Compiler', 'Browser Testing Agent'],
      metrics: [
        { label: 'File Size', value: `${(site.code.length / 1024).toFixed(1)} KB` },
        { label: 'State Sane', value: '100% Sane' },
        { label: 'Modified', value: site.createdAt || 'Active' }
      ],
      accentColor: index % 5 === 0 ? 'emerald' : index % 5 === 1 ? 'indigo' : index % 5 === 2 ? 'amber' : index % 5 === 3 ? 'purple' : 'rose',
      icon: 'Sparkles',
      prompt: site.prompt || '',
      code: site.code,
      popularity: `⭐ 5.0 (Anik's Own)`,
      estimatedTokens: 'Live code payload'
    };
  });

  const allTemplates = [...mappedCustomTemplates, ...AGENT_TEMPLATES];

  // Filter templates
  const filteredTemplates = allTemplates.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.agentStack.some(agent => agent.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const handleSelectTemplate = (template: AgentTemplate) => {
    setBootstrappingId(template.id);
    setTimeout(() => {
      onBootstrap(template);
      setBootstrappingId(null);
    }, 1800); // 1.8s high-fidelity loading logs simulation
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 110,
        damping: 14
      } 
    }
  };

  const borderGlowMap = {
    indigo: 'hover:border-indigo-500/40 hover:shadow-indigo-950/20',
    emerald: 'hover:border-emerald-500/40 hover:shadow-emerald-950/20',
    amber: 'hover:border-amber-500/40 hover:shadow-amber-950/20',
    purple: 'hover:border-purple-500/40 hover:shadow-purple-950/20',
    rose: 'hover:border-rose-500/40 hover:shadow-rose-950/20'
  };

  const colorBadgeMap = {
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/15',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/15',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/15',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/15',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/15'
  };

  const colorBgMap = {
    indigo: 'bg-indigo-600',
    emerald: 'bg-emerald-600',
    amber: 'bg-amber-600',
    purple: 'bg-purple-600',
    rose: 'bg-rose-600'
  };

  const textGradMap = {
    indigo: 'from-indigo-400 to-indigo-200',
    emerald: 'from-emerald-400 to-emerald-200',
    amber: 'from-amber-400 to-amber-200',
    purple: 'from-purple-400 to-purple-200',
    rose: 'from-rose-400 to-rose-200'
  };

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10 z-20 relative">
      
      {/* Dynamic Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header and Callout block */}
      <div className="text-center space-y-4 max-w-xl mx-auto">
        <div className="inline-block px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono tracking-widest uppercase rounded-full">
          ✨ Preset AI Workspaces
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-none">
          AI Agent Template Gallery
        </h2>
        <p className="text-xs text-slate-400">
          Curated pipeline configurations optimized for Anik's core Multi-Agent Sandbox. Deploy structured model routing systems inside your memory pool in minutes.
        </p>
      </div>

      {/* Filters & Search controller card */}
      <div className="bg-[#090e1a]/80 backdrop-blur-md p-4 rounded-2xl border border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                selectedCategory === cat.id 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/10' 
                  : 'bg-black/20 border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Search input */}
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
            <Search className="h-3.5 w-3.5" />
          </span>
          <input
            type="text"
            placeholder="Search stack, templates, agents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-black/40 border border-slate-900 rounded-xl py-1.5 pl-9 pr-4 text-xs text-slate-300 placeholder-slate-500 outline-none focus:border-indigo-500/40 focus:bg-slate-950/60 transition-all font-sans"
          />
        </div>

      </div>

      {/* Embedded High-Fidelity Alert */}
      <div className="bg-[#070b13] border border-indigo-500/10 rounded-xl p-4 flex items-start gap-3">
        <Info className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-xs font-bold text-white tracking-tight">Zero-Install Orchestration Sandbox</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
            Each template compiles fully functional sandbox elements locally within the browser memory state. No API keys or extra server installations are required to test, edit, and evaluate layouts in active preview grids.
          </p>
        </div>
      </div>

      {/* Grid wrapper */}
      <AnimatePresence mode="popLayout">
        {filteredTemplates.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredTemplates.map((item) => {
              const DynamicIcon = iconMap[item.icon] || Layers;
              const isBootstrapping = bootstrappingId === item.id;

              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`bg-[#060a12]/70 backdrop-blur-sm p-6 rounded-3xl border border-slate-900 flex flex-col justify-between space-y-6 shadow-xl transition-all duration-300 relative ${borderGlowMap[item.accentColor]}`}
                >
                  <div className="space-y-4">
                    {/* Header elements */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-white ${colorBgMap[item.accentColor]} shadow-md`}>
                          <DynamicIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white leading-tight font-sans">
                            {item.title}
                          </h3>
                          <span className="text-[9px] text-slate-500 font-mono uppercase tracking-widest mt-1 block">
                            Platform Blueprint
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 tracking-tight bg-slate-900 border border-slate-900 px-2 py-0.5 rounded font-semibold">
                        {item.popularity}
                      </span>
                    </div>

                    {/* Description text */}
                    <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[40px]">
                      {item.description}
                    </p>

                    {/* Agent stack section */}
                    <div className="space-y-2 pt-2 border-t border-slate-900/60">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-3 w-3 text-slate-500" />
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                          Structured Agent Pipeline ({item.agentStack.length})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.agentStack.map((agent, index) => (
                          <span 
                            key={index} 
                            className="bg-slate-950/80 border border-slate-900 rounded-lg px-2 py-1 text-[10px] text-slate-400 font-sans"
                          >
                            👤 {agent}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metric metrics indicators */}
                    <div className="grid grid-cols-3 gap-2 bg-black/35 border border-slate-900/60 p-3 rounded-xl">
                      {item.metrics.map((metric, index) => (
                        <div key={index} className="text-center font-mono">
                          <span className="text-[9px] text-slate-500 block uppercase font-bold">
                            {metric.label}
                          </span>
                          <span className={`text-xs font-bold bg-gradient-to-r tracking-tight ${textGradMap[item.accentColor]} inline-block bg-clip-text text-transparent mt-0.5`}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Pre-configured Topological Node-Flow Diagram (Hover Zoom-Animated) */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/45 p-3.5 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono tracking-wider font-bold text-slate-500 uppercase">Live Pipeline Blueprint</span>
                        <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 text-[8px] font-mono font-bold rounded uppercase animate-pulse">flow active</span>
                      </div>
                      
                      <motion.div 
                        className="relative flex items-center justify-between py-2 px-1 fill-mode-forwards"
                        variants={{
                          hover: { 
                            scale: 1.08, 
                            y: -2,
                            transition: { type: "spring", stiffness: 180, damping: 12 }
                          }
                        }}
                      >
                        {/* Connecting dashed tracks */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 border-t border-dashed border-slate-800 z-0"></div>
                        
                        {/* Input prompt bubble */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="h-7 w-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs shadow-md">
                            ⌨️
                          </div>
                          <span className="text-[7px] text-slate-500 mt-1 font-mono uppercase tracking-tight">Prompt</span>
                        </div>

                        {/* Pipeline nodes map */}
                        {item.agentStack.map((agent, aIdx) => (
                          <div key={aIdx} className="relative z-10 flex flex-col items-center">
                            <div className="h-8 w-8 rounded-full bg-slate-950 border border-slate-850 flex items-center justify-center text-xs shadow-lg relative group">
                              {/* Pulse ring indicator */}
                              <div className="absolute inset-0 rounded-full border border-indigo-400/20 animate-ping opacity-30"></div>
                              <span className="text-slate-300 font-mono text-[10px] font-bold">A{aIdx + 1}</span>
                            </div>
                            <span className="text-[7.5px] text-slate-400 mt-1 font-mono tracking-tight text-center max-w-[65px] truncate block" title={agent}>
                              {agent.split(' ')[0]}
                            </span>
                          </div>
                        ))}

                        {/* Rendering output node */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs shadow-md">
                            🌐
                          </div>
                          <span className="text-[7px] text-indigo-400 font-bold mt-1 font-mono uppercase tracking-tight">Render</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Actions bar at bottom of card */}
                  <div className="flex justify-between items-center pt-3 border-t border-slate-900/60 z-10">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="h-3 w-3" />
                      <span className="text-[10px] font-mono tracking-tight">{item.estimatedTokens}</span>
                    </div>

                    <button
                      onClick={() => handleSelectTemplate(item)}
                      disabled={bootstrappingId !== null}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold select-none flex items-center gap-2 cursor-pointer border hover:shadow-lg transition-all ${
                        isBootstrapping
                          ? 'bg-slate-950 border-slate-900 text-slate-400 cursor-not-allowed'
                          : bootstrappingId !== null
                          ? 'bg-slate-950 border-slate-900 text-slate-500 cursor-not-allowed'
                          : `bg-${item.accentColor}-600/10 text-${item.accentColor}-400 border-${item.accentColor}-500/20 hover:bg-${item.accentColor}-600 hover:text-white hover:border-${item.accentColor}-500`
                      }`}
                    >
                      {isBootstrapping ? (
                        <>
                          <div className="h-3 w-3 rounded-full border border-slate-500 border-t-transparent animate-spin" />
                          <span>Hydrating Local Workspace...</span>
                        </>
                      ) : (
                        <>
                          <span>Bootstrap Workspace</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 text-center bg-[#070b13] border border-slate-900 rounded-3xl"
          >
            <LayoutGrid className="mx-auto h-12 w-12 text-slate-500 mb-3" />
            <span className="text-sm font-semibold text-white block">No workflow presets matched</span>
            <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1 leading-relaxed">
              We couldn't locate templates matching "{query}". Please test alternative tags or parameters.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
