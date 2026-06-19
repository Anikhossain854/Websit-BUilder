import { Sparkles, Cpu, Layers, BarChart3, Coins, ExternalLink, HelpCircle } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  geminiStatus: string;
  onUpgradeClick: () => void;
  onAuthClick: () => void;
}

export default function Navbar({
  currentTab,
  setCurrentTab,
  geminiStatus,
  onUpgradeClick,
  onAuthClick,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div 
          onClick={() => setCurrentTab('landing')}
          className="flex cursor-pointer items-center space-x-2.5 group"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-md shadow-indigo-500/20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
            <Cpu className="h-5 w-5 text-white" />
            <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 blur-sm opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:blur-md" />
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-white">
            Synapse <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 font-normal">AI</span>
          </span>
        </div>

        {/* Tab Navigation */}
        <nav className="hidden md:flex space-x-1.5 rounded-full bg-slate-900/50 p-1 border border-slate-800/60">
          <button
            onClick={() => setCurrentTab('landing')}
            className={`flex items-center space-x-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              currentTab === 'landing'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/10'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Product</span>
          </button>
          <button
            onClick={() => setCurrentTab('dashboard')}
            className={`flex items-center space-x-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              currentTab === 'dashboard'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/10'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setCurrentTab('editor')}
            className={`flex items-center space-x-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              currentTab === 'editor'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/10'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Workflow Workspace</span>
          </button>
          <button
            onClick={() => setCurrentTab('pricing')}
            className={`flex items-center space-x-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              currentTab === 'pricing'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/10'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <Coins className="h-3.5 w-3.5" />
            <span>Pricing</span>
          </button>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-3.5">
          {/* Live Status indicator */}
          <div className="flex items-center space-x-1.5 rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1">
            <span className={`relative flex h-2 w-2`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                geminiStatus === 'live_api_active' ? 'bg-emerald-400' : 'bg-amber-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                geminiStatus === 'live_api_active' ? 'bg-emerald-500' : 'bg-amber-500'
              }`} />
            </span>
            <span className="font-mono text-[10px] tracking-wide text-slate-300">
              {geminiStatus === 'live_api_active' ? 'Gemini 3.5 Live' : 'SaaS Preview (Sandbox)'}
            </span>
          </div>

          <button
            onClick={onUpgradeClick}
            className="hidden sm:inline-flex relative h-8 items-center justify-center rounded-lg px-3.5 text-xs font-semibold text-white transition-all before:absolute before:inset-0 before:rounded-lg before:border before:border-indigo-500/30 before:bg-gradient-to-b before:from-indigo-600 before:to-purple-700 before:transition-all hover:before:brightness-110 active:before:scale-95 shadow-md shadow-indigo-500/10"
          >
            <span className="relative z-10">Premium Plan</span>
          </button>

          <button
            onClick={onAuthClick}
            className="rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 hover:bg-slate-800/80 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-all cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
