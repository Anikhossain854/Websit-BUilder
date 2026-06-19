import { GeneratedWebsite } from './types';

export const MOCK_WEBSITES: GeneratedWebsite[] = [
  {
    id: 'podsay-hub',
    prompt: 'Create a high-fidelity clone of PodSay! - premium podcast studio landing page with live sound selectors, player tracking, host upvoting, simulated voicemails, and secure SSL checkout.',
    title: 'PodSay! Premium Podcast Studio',
    createdAt: 'Just now',
    theme: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-159062847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    code: `<!DOCTYPE html>
<html lang="en" class="scroll-smooth h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PodSay! - Elite Audio & Podcast Hub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@355;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      background-color: #030408;
      color: #94a3b8;
    }
    .font-display {
      font-family: 'Space Grotesk', sans-serif;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
    .glow-violet {
      box-shadow: 0 0 50px -10px rgba(139, 92, 246, 0.25);
    }
    .glow-gold {
      box-shadow: 0 0 50px -10px rgba(245, 158, 11, 0.25);
    }
    .glass-card {
      background: rgba(13, 16, 26, 0.75);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.04);
    }
    .glass-card:hover {
      border-color: rgba(139, 92, 246, 0.25);
      background: rgba(18, 22, 36, 0.85);
    }
    /* Hide scrollbars but keep functionality */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    /* Spinning animation for playing vinyl record */
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .spin-active {
      animation: spin-slow 15s linear infinite;
    }
    @keyframes wave-bounce {
      0%, 100% { transform: scaleY(0.3); }
      50% { transform: scaleY(1.0); }
    }
    .animate-wave-1 { animation: wave-bounce 0.8s ease-in-out infinite alternate; }
    .animate-wave-2 { animation: wave-bounce 1.1s ease-in-out infinite alternate 0.2s; }
    .animate-wave-3 { animation: wave-bounce 0.7s ease-in-out infinite alternate 0.1s; }
    .animate-wave-4 { animation: wave-bounce 1.3s ease-in-out infinite alternate 0.3s; }
    .animate-wave-5 { animation: wave-bounce 0.9s ease-in-out infinite alternate 0.15s; }
  </style>
</head>
<body class="min-h-full flex flex-col selection:bg-violet-500/30 selection:text-white overflow-x-hidden pb-28">

  <!-- Main glowing spot decorations -->
  <div class="absolute top-0 right-0 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
  <div class="absolute top-1/2 left-0 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

  <!-- STICKY TOP NAVIGATION HEADER -->
  <nav class="sticky top-0 z-40 bg-[#030408]/85 backdrop-blur-md border-b border-white/5 px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-violet-600/30">
          <i data-lucide="mic" class="h-5 w-5 animate-bounce"></i>
        </div>
        <div>
          <span class="text-xl font-extrabold text-white tracking-tight font-display flex items-center gap-1">
            PodSay<span class="text-violet-500">!</span>
          </span>
          <span class="text-[8.5px] font-mono tracking-widest text-[#8b5cf6] block mt-0.5 uppercase">Elite Audio & Publishing</span>
        </div>
      </div>

      <!-- Links (Desktop) -->
      <div class="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <a href="#episodes-section" class="hover:text-white transition-colors">Show Episodes</a>
        <a href="#comments-section" class="hover:text-white transition-colors">Listener Voicemail</a>
        <a href="#hosts-section" class="hover:text-white transition-colors">Creators & Guests</a>
        <a href="#newsletter-section" class="hover:text-white transition-colors">Discount Voucher</a>
        <a href="#pricing-section" class="hover:text-white transition-colors">VIP Memberships</a>
      </div>

      <div class="flex items-center gap-3">
        <!-- Live status telemetry bubble -->
        <div class="px-2.5 py-1 bg-violet-500/10 border border-violet-500/20 text-[9px] font-mono text-violet-400 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_-3px_rgba(139,92,246,0.2)]">
          <span class="h-1.5 w-1.5 rounded-full bg-violet-500 animate-ping"></span>
          <span>PODMETRIC LIVE STABLE</span>
        </div>
        <button onclick="openVIPCheckout()" class="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 border border-violet-500/20 hover:from-violet-500 hover:to-purple-500 text-xs font-bold text-white uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 text-center">
          Become VIP
        </button>
      </div>
    </div>
  </nav>

  <!-- PRIMAL HERO AND INTUITIVE SINGLE PLAYER SECTION -->
  <header class="relative px-6 py-12 md:py-16 max-w-7xl mx-auto w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      <!-- Column Left: Copywriting and CTAs -->
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
          <i data-lucide="sparkles" class="h-3.5 w-3.5 text-amber-400"></i>
          <span class="text-[9.5px] font-mono uppercase font-bold tracking-wider text-amber-300">Voted #1 Podcasting Engine</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none font-display">
          Tell Your Story <br class="hidden sm:inline" />
          To The <span class="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Entire World</span>.
        </h1>
        
        <p class="text-sm md:text-md text-slate-400 leading-relaxed max-w-xl">
          PodSay! is an ultra-modern publishing cockpit designed for elite creators. Stream live podcasts, schedule syndicate publications, coordinate active listener recordings, and manage durable monetization plans from a single platform.
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#episodes-section" class="px-6 py-3.5 bg-violet-600 hover:bg-violet-555 hover:shadow-violet-800/10 text-xs font-bold uppercase tracking-wider text-white rounded-xl transition-all shadow-lg text-center flex items-center justify-center gap-2">
            <i data-lucide="play-circle" class="h-4 w-4"></i> Start Listening
          </a>
          <button onclick="openVIPCheckout()" class="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white rounded-xl transition-all text-center flex items-center justify-center gap-2">
            <i data-lucide="check-circle" class="h-4 w-4"></i> Support the Show
          </button>
        </div>
      </div>

      <!-- Column Right: Active Featured Episode Player (High Fidelity) -->
      <div class="lg:col-span-5 relative">
        <div class="glass-card p-6 md:p-8 rounded-3xl glow-violet relative overflow-hidden flex flex-col justify-between h-[395px]">
          <!-- Card Spot lighting -->
          <div class="absolute -top-12 -right-12 w-32 h-32 bg-violet-600/25 rounded-full blur-[40px] pointer-events-none"></div>
          
          <div class="flex items-center justify-between border-b border-white/5 pb-4 z-10">
            <div>
              <span class="text-[9px] font-mono tracking-widest text-[#8b5cf6] uppercase font-bold block">Featured Episode</span>
              <h3 class="text-xs font-semibold text-slate-400 mt-1 uppercase leading-none font-mono tracking-tight" id="header-album">Season 2 • Ep 14</h3>
            </div>
            <span class="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono text-amber-400 rounded">LIVE STACK</span>
          </div>

          <!-- Mid Body with Vinyl Disc of the Podcast -->
          <div class="flex items-center gap-5 my-5 z-10">
            <!-- Vinyl Record disc simulation -->
            <div class="relative flex-shrink-0">
              <img id="header-cover" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" alt="Cover" class="h-24 w-24 rounded-2xl object-cover border border-white/15 shadow-xl shadow-black/40 z-10 relative">
              <!-- Center spindle disc ring -->
              <div class="absolute -right-3 top-1/2 -translate-y-1/2 w-16 h-16 bg-zinc-950 rounded-full border-[6px] border-zinc-900 flex items-center justify-center z-0 spin-active" id="header-vinyl">
                <div class="w-3 h-3 rounded-full bg-violet-500"></div>
              </div>
            </div>

            <!-- Dynamic Track descriptions -->
            <div class="space-y-1.5 flex-1 select-none">
              <h2 class="text-base md:text-lg font-bold text-white tracking-tight leading-tight line-clamp-2 uppercase font-display" id="header-title">Designing Lovable AI Experiences</h2>
              <p class="text-xs text-slate-400" id="header-artist">Anik Rahman & Sarah Jenkins</p>
              
              <!-- Equalizer animation segment -->
              <div class="flex items-end gap-1.5 h-6 pt-2" id="header-eq">
                <div class="eq-bar h-2 animate-wave-1"></div>
                <div class="eq-bar h-5 animate-wave-2"></div>
                <div class="eq-bar h-3 animate-wave-3"></div>
                <div class="eq-bar h-6 animate-wave-4"></div>
                <div class="eq-bar h-4 animate-wave-5"></div>
              </div>
            </div>
          </div>

          <!-- Bottom scrubbing / audio controls layout -->
          <div class="space-y-4 pt-3 border-t border-white/5 z-10 font-mono text-[10px]">
            <!-- Timeline Scrubber -->
            <div class="space-y-1.5 select-none">
              <div class="flex justify-between text-slate-500">
                <span id="header-time-elasped">0:00</span>
                <span id="header-time-duration">42:15</span>
              </div>
              <div class="bg-white/5 hover:bg-white/10 rounded-full h-1 relative cursor-pointer" onclick="scrubHeaderTrack(event)">
                <div class="bg-[#833ab4] bg-linear-to-r from-violet-500 to-pink-500 h-1 rounded-full absolute top-0 left-0" style="width: 0%" id="header-tracker-bar"></div>
              </div>
            </div>

            <!-- Operational Buttons -->
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-1">
                <button onclick="shareTrack()" class="p-2 text-slate-500 hover:text-white rounded-lg transition-transform hover:scale-105" title="Copy Spotify Link">
                  <i data-lucide="share-2" class="h-4 w-4"></i>
                </button>
                <button onclick="saveActiveToLibrary()" class="p-2 text-slate-500 hover:text-violet-400 rounded-lg transition-transform hover:scale-105" title="Add to Library">
                  <i data-lucide="heart" class="h-4 w-4" id="favorite-heart-icon"></i>
                </button>
              </div>

              <!-- Main central Play trigger -->
              <button onclick="toggleMainListen()" class="h-10 w-10 bg-violet-600 hover:bg-violet-500 hover:scale-105 rounded-full flex items-center justify-center font-bold text-white transition-all shadow-lg active:scale-95" id="header-play-btn">
                <i data-lucide="play" class="h-4.5 w-4.5 fill-white" id="header-play-icon"></i>
              </button>

              <div class="flex items-center gap-1.5 select-none">
                <i data-lucide="volume-2" class="h-3.5 w-3.5 text-slate-500"></i>
                <input type="range" min="0" max="100" value="80" oninput="changeLocalVolume(this.value)" class="w-16 accent-violet-500 bg-white/15 h-1 rounded-lg appearance-none cursor-pointer">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- LISTEN ON INTEGRATION STRIP -->
  <section class="border-y border-white/5 py-8 bg-black/20 my-6">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <span class="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] font-mono block">Listen & Subscribe On:</span>
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 hover:border-white/15 rounded-xl border border-white/5 cursor-pointer text-xs font-semibold text-white transition-all hover:scale-102">
            <i data-lucide="music-4" class="h-4 w-4 text-emerald-400"></i> Spotify App
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 hover:border-white/15 rounded-xl border border-white/5 cursor-pointer text-xs font-semibold text-white transition-all hover:scale-102">
            <i data-lucide="mic-2" class="h-4 w-4 text-purple-400"></i> Apple Podcasts
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 hover:border-white/15 rounded-xl border border-white/5 cursor-pointer text-xs font-semibold text-white transition-all hover:scale-102">
            <i data-lucide="youtube" class="h-4 w-4 text-red-500"></i> YouTube Channel
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 hover:border-white/15 rounded-xl border border-white/5 cursor-pointer text-xs font-semibold text-white transition-all hover:scale-102">
            <i data-lucide="radio" class="h-4 w-4 text-sky-400"></i> SoundCloud
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ACTIVE EPISODES WORKSPACE GRID (All Episodes, SaaS, Technology) -->
  <main id="episodes-section" class="max-w-7xl mx-auto px-6 py-12 space-y-8 w-full">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
      <div>
        <span class="text-xs font-mono text-violet-400 uppercase tracking-widest block font-bold">Search Show Catalog</span>
        <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight font-display mt-1">Episodes Master Repository</h2>
        <p class="text-xs text-slate-500 mt-1">Click streams on any card to update selectors and play instantly.</p>
      </div>

      <!-- Action items layout -->
      <div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <!-- Live filters search input -->
        <div class="relative w-full sm:w-56">
          <span class="absolute inset-y-0 left-3 flex items-center text-slate-500">
            <i data-lucide="search" class="h-3.5 w-3.5"></i>
          </span>
          <input type="text" id="episode-search-box" oninput="filterEpisodeCatalog()" placeholder="Type query keyword..." class="w-full bg-slate-900 border border-white/10 rounded-xl py-1.5 pl-9 pr-4 text-xs text-slate-300 placeholder-slate-500 outline-none focus:border-violet-500 focus:bg-slate-950 transition-all">
        </div>

        <!-- Create Active Episode Button -->
        <button onclick="alert('Host permissions locked. Sandbox simulated creator uploads available inside Premium Studio accounts.')" class="h-9 px-4 bg-violet-600/15 text-violet-400 border border-violet-500/20 hover:bg-violet-600 hover:text-white transition-all rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="cloud-lightning" class="h-3.5 w-3.5"></i> Upload Episode
        </button>
      </div>
    </div>

    <!-- Live Category pills filter rows -->
    <div class="flex flex-wrap items-center gap-2">
      <button onclick="setCategoryFilter('all')" class="cat-pill px-4 py-1.5 rounded-xl border border-violet-500 bg-violet-600 text-white text-xs font-bold transition-all hover:scale-102">All Episodes</button>
      <button onclick="setCategoryFilter('SaaS & AI')" class="cat-pill px-4 py-1.5 rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/10 text-xs font-bold transition-all hover:scale-102">SaaS & AI</button>
      <button onclick="setCategoryFilter('Design & UX')" class="cat-pill px-4 py-1.5 rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/10 text-xs font-bold transition-all hover:scale-102">Design & UX</button>
      <button onclick="setCategoryFilter('Technology')" class="cat-pill px-4 py-1.5 rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/10 text-xs font-bold transition-all hover:scale-102">Technology</button>
    </div>

    <!-- Episodes Grid Layout (No Collapses) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="episodes-cards-container">
      <!-- Generated dynamically -->
    </div>
  </main>

  <!-- VOICEMAIL REPLIES / COMMENTS & AUDIENCE LOOP FEEDBACK -->
  <section class="max-w-7xl mx-auto px-6 py-12 block w-full" id="comments-section">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Box Left: RECORD Simulated Voicemail (Functional state) -->
      <div class="lg:col-span-5 glass-card p-6 md:p-8 rounded-3xl glow-gold relative overflow-hidden flex flex-col justify-between h-[360px]">
        <div>
          <span class="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold">Audience Voice loop</span>
          <h2 class="text-xl font-bold text-white tracking-tight mt-1 leading-none font-display">Record Instant Voicemail</h2>
          <p class="text-xs text-slate-400 mt-2 leading-relaxed">
            Want to be featured on our next show? Tap record to leave a 15-second sandbox audio message directly inside memory queues!
          </p>
        </div>

        <!-- Recording micro-indicators -->
        <div class="p-4 rounded-2xl bg-zinc-950 border border-amber-500/10 flex items-center justify-between font-mono text-xs select-none">
          <div class="flex items-center gap-3">
            <span class="h-3 w-3 rounded-full bg-red-600 animate-pulse hidden" id="rec-status-dot"></span>
            <span class="text-slate-400 font-bold uppercase text-[10px]" id="rec-status-lbl">Microphone Ready</span>
          </div>
          <span id="rec-timer-out">0:00 / 0:15</span>
        </div>

        <button onclick="handleVoicemailTrigger()" class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:blend-glow text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2" id="rec-action-btn">
          <i data-lucide="disc" class="h-4.5 w-4.5"></i> Start Recording
        </button>
      </div>

      <!-- Box Right: Listener text comments -->
      <div class="lg:col-span-12 xl:col-span-7 glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6 h-[360px]">
        <div class="flex items-center justify-between border-b border-white/5 pb-2">
          <div>
            <h3 class="text-lg font-bold text-white font-display leading-none">Audiences Review Stream</h3>
            <p class="text-[11px] text-slate-500 mt-1">Durable comments ledger synced live with sandbox state.</p>
          </div>
          <span class="px-2 py-0.5 bg-[#8b5cf6]/10 text-[#8b5cf6] text-[10px] font-bold rounded" id="comments-count">3 items loaded</span>
        </div>

        <!-- Comments scrolling queue -->
        <div id="comments-scroller" class="flex-grow overflow-y-auto no-scrollbar space-y-3 pt-1">
          <!-- Dynamically loaded -->
        </div>

        <!-- Inputs segment -->
        <form onsubmit="postListenerResponse(event)" class="flex gap-2 bg-slate-900/60 p-2 border border-white/5 rounded-2xl">
          <input required id="commenter-name" placeholder="Name..." class="w-1/4 bg-[#030408] border border-white/10 px-3.5 py-2 text-xs rounded-xl outline-none focus:border-violet-500 text-white placeholder-slate-500 font-sans">
          <input required id="commenter-body" placeholder="Write episode feedback..." class="flex-1 bg-[#030408] border border-white/10 px-3.5 py-2 text-xs rounded-xl outline-none focus:border-violet-500 text-white placeholder-slate-500 font-sans">
          <button type="submit" class="px-4 py-2 bg-violet-600 hover:bg-violet-500 hover:scale-102 active:scale-95 transition-all text-white font-bold text-xs rounded-xl uppercase tracking-wider">
            Post
          </button>
        </form>
      </div>

    </div>
  </section>

  <!-- POPULAR CREATORS & GUESTS HUB SECTION -->
  <section id="hosts-section" class="max-w-7xl mx-auto px-6 py-12 block w-full space-y-8">
    <div>
      <span class="text-xs font-mono text-violet-400 uppercase tracking-widest block font-bold">Featured Host & Guest Stars</span>
      <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight font-display mt-1">Our Studio Family</h2>
      <p class="text-xs text-slate-500 mt-1">Hover the profile files below & upvote creators dynamically.</p>
    </div>

    <!-- Multi guest list -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Creator 1 -->
      <div class="glass-card p-5 rounded-3xl text-center flex flex-col items-center justify-between space-y-4">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Host" class="h-24 w-24 rounded-full object-cover border-2 border-violet-500/20 shadow-lg">
          <div class="absolute -bottom-1 -right-1 bg-violet-600 text-white p-1.5 rounded-full"><i data-lucide="mic" class="h-3.5 w-3.5"></i></div>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white font-sans">Anik Rahman</h4>
          <span class="text-[10px] text-violet-400 font-mono font-semibold block uppercase mt-0.5">Primary Producer</span>
        </div>
        <div class="flex items-center gap-2 pt-2 border-t border-white/5 w-full justify-center">
          <button onclick="likeCreator('anik')" class="h-8 px-3.5 bg-white/5 hover:bg-violet-600 hover:text-white rounded-xl text-[10px] font-bold text-slate-350 transition-colors flex items-center gap-1.5">
            <i data-lucide="thumbs-up" class="h-3 w-3"></i> Upvote
          </button>
          <span class="text-[10px] font-mono font-bold text-slate-500" id="host-anik-votes">24 upvotes</span>
        </div>
      </div>

      <!-- Creator 2 -->
      <div class="glass-card p-5 rounded-3xl text-center flex flex-col items-center justify-between space-y-4">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Host" class="h-24 w-24 rounded-full object-cover border-2 border-violet-500/20 shadow-lg">
          <div class="absolute -bottom-1 -right-1 bg-violet-600 text-white p-1.5 rounded-full"><i data-lucide="layout" class="h-3.5 w-3.5"></i></div>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white font-sans">Sarah Jenkins</h4>
          <span class="text-[10px] text-violet-400 font-mono font-semibold block uppercase mt-0.5">Design Principal</span>
        </div>
        <div class="flex items-center gap-2 pt-2 border-t border-white/5 w-full justify-center">
          <button onclick="likeCreator('sarah')" class="h-8 px-3.5 bg-white/5 hover:bg-violet-600 hover:text-white rounded-xl text-[10px] font-bold text-slate-350 transition-colors flex items-center gap-1.5">
            <i data-lucide="thumbs-up" class="h-3 w-3"></i> Upvote
          </button>
          <span class="text-[10px] font-mono font-bold text-slate-500" id="host-sarah-votes">18 upvotes</span>
        </div>
      </div>

      <!-- Creator 3 -->
      <div class="glass-card p-5 rounded-3xl text-center flex flex-col items-center justify-between space-y-4">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Host" class="h-24 w-24 rounded-full object-cover border-2 border-violet-500/20 shadow-lg">
          <div class="absolute -bottom-1 -right-1 bg-violet-600 text-white p-1.5 rounded-full"><i data-lucide="zap" class="h-3.5 w-3.5"></i></div>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white font-sans">Devon Cole</h4>
          <span class="text-[10px] text-violet-400 font-mono font-semibold block uppercase mt-0.5">SaaS Growth Hacker</span>
        </div>
        <div class="flex items-center gap-2 pt-2 border-t border-white/5 w-full justify-center">
          <button onclick="likeCreator('devon')" class="h-8 px-3.5 bg-white/5 hover:bg-violet-600 hover:text-white rounded-xl text-[10px] font-bold text-slate-350 transition-colors flex items-center gap-1.5">
            <i data-lucide="thumbs-up" class="h-3 w-3"></i> Upvote
          </button>
          <span class="text-[10px] font-mono font-bold text-slate-500" id="host-devon-votes">32 upvotes</span>
        </div>
      </div>

      <!-- Creator 4 -->
      <div class="glass-card p-5 rounded-3xl text-center flex flex-col items-center justify-between space-y-4">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Host" class="h-24 w-24 rounded-full object-cover border-2 border-violet-500/20 shadow-lg">
          <div class="absolute -bottom-1 -right-1 bg-violet-600 text-white p-1.5 rounded-full"><i data-lucide="activity" class="h-3.5 w-3.5"></i></div>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white font-sans">Elena Vance</h4>
          <span class="text-[10px] text-violet-400 font-mono font-semibold block uppercase mt-0.5">Brain Scientist</span>
        </div>
        <div class="flex items-center gap-2 pt-2 border-t border-white/5 w-full justify-center">
          <button onclick="likeCreator('elena')" class="h-8 px-3.5 bg-white/5 hover:bg-violet-600 hover:text-white rounded-xl text-[10px] font-bold text-slate-333 transition-colors flex items-center gap-1.5">
            <i data-lucide="thumbs-up" class="h-3 w-3"></i> Upvote
          </button>
          <span class="text-[10px] font-mono font-bold text-slate-500" id="host-elena-votes">15 upvotes</span>
        </div>
      </div>

    </div>
  </section>

  <!-- CREATOR DISCOUNT VOUCHER LAUNCHER & COUPLING BOX -->
  <section id="newsletter-section" class="max-w-7xl mx-auto px-6 py-12 block w-full">
    <div class="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 glow-violet">
      <!-- Background vector glows -->
      <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-violet-600/10 via-transparent to-transparent pointer-events-none"></div>

      <div class="max-w-md space-y-2 select-none">
        <span class="text-[10px] font-mono tracking-widest text-[#8b5cf6] font-bold uppercase block">Subscriber voucher</span>
        <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight font-display">Retrieve 30% Creator Voucher</h2>
        <p class="text-xs text-slate-400 leading-relaxed">
          Unlock standard access to local tutorials, pod kits, and complete full-stack guides. Type a valid email below to save state.
        </p>
      </div>

      <div class="w-full lg:w-auto relative z-10 space-y-4">
        <!-- Coupon Form block -->
        <form onsubmit="handleClaimVoucher(event)" class="flex flex-col sm:flex-row gap-2 relative" id="newsletter-form-core">
          <input required type="email" id="newsletter-email" placeholder="Enter your business email..." class="bg-[#03060c] border border-white/10 px-4 py-3 rounded-xl text-xs text-white placeholder-slate-500 focus:border-violet-500 outline-none w-full sm:w-80">
          <button type="submit" class="px-6 py-3 bg-[#8b5cf6] hover:bg-violet-500 text-xs font-bold text-white uppercase tracking-wider rounded-xl transition-colors shrink-all active:scale-95 text-center">
            Register Email
          </button>
        </form>

        <!-- Voucher display voucher popup (Hidden by default, animation slides up) -->
        <div id="voucher-con" class="hidden scale-95 opacity-0 transition-all duration-300 p-4 border border-violet-500/20 bg-violet-950/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left select-none">
          <div>
            <span class="text-[8.5px] font-mono tracking-widest text-violet-400 uppercase font-bold block">Exclusive Promo Locked</span>
            <span class="text-xs font-bold text-white font-mono mt-1 block">30% DISCOUNT GRANTED SANE</span>
          </div>
          
          <div class="flex items-center gap-2 bg-[#050811] px-4 py-2 border border-violet-500/30 rounded-xl">
            <span class="text-sm font-mono font-bold text-amber-400" id="voucher-code-val">PODSAY30</span>
            <button onclick="copyVoucherToClipboard()" class="p-1 px-1.5 bg-violet-600 text-white rounded font-bold hover:bg-violet-500 transition-colors text-[9px] uppercase tracking-wider font-sans">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CREATOR SUPPORT PLANS / MONETIZATION TIERS -->
  <section id="pricing-section" class="max-w-7xl mx-auto px-6 py-12 block w-full space-y-8">
    <div class="text-center space-y-2 max-w-lg mx-auto">
      <span class="text-xs font-mono text-violet-400 uppercase tracking-widest block font-bold">Support Plans & pricing</span>
      <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none font-display">Become a Studio Partner</h2>
      <p class="text-xs text-slate-500 leading-relaxed">
        Choose a flexible sponsorship or monetization track before processing offline checkout. Subscriptions scale creator performance metrics.
      </p>
    </div>

    <!-- Pricing deck -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Tier 1 -->
      <div class="glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between h-[380px]">
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <span class="text-xs font-bold text-slate-400 tracking-wider font-mono">CORE ACCESS</span>
            <span class="px-2 py-0.5 bg-white/5 rounded text-[9px] text-slate-500 uppercase font-mono tracking-wider font-bold">Free</span>
          </div>
          <div class="flex items-baseline gap-1">
            <span class="text-3xl font-extrabold text-white">$0</span>
            <span class="text-xs text-slate-500">/ forever</span>
          </div>
          <p class="text-[11px] text-slate-400 font-sans">
            Stream high-quality show files, save favorites to library, and leave voicemails instantly.
          </p>
          <ul class="text-[10px] text-slate-400 font-sans space-y-2 pt-2">
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-violet-500"></i> Standard HQ sound streaming</li>
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-violet-500"></i> Save unlimited show episodes</li>
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-violet-500"></i> Instant feedback upvoting</li>
          </ul>
        </div>
        <button onclick="showToast('Sponsorship activated instantly! enjoy zero fee listen privileges.')" class="w-full py-2.5 mt-4 bg-white/5 hover:bg-white/10 text-xs font-bold text-white uppercase tracking-wider rounded-xl transition-colors border border-white/10">
          Selected Core free
        </button>
      </div>

      <!-- Tier 2 (Highlighted) -->
      <div class="glass-card p-6 md:p-8 rounded-3xl border-violet-500/30 flex flex-col justify-between h-[380px] relative glow-violet">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-violet-600 text-[9px] font-mono font-bold text-white tracking-widest uppercase rounded-full">POPULAR SPONSOR</div>
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <span class="text-xs font-bold text-[#8b5cf6] tracking-wider font-mono">CREATOR PLATINUM</span>
            <span class="px-2 py-0.5 bg-violet-600/10 text-[#8b5cf6] text-[9px] uppercase font-mono tracking-wider font-bold">Recommended</span>
          </div>
          <div class="flex items-baseline gap-1">
            <span class="text-3xl font-extrabold text-white">$9</span>
            <span class="text-xs text-slate-555">/ month</span>
          </div>
          <p class="text-[11px] text-slate-400 font-sans">
            For creators looking for standard audience metrics, continuous recorders, and show tools.
          </p>
          <ul class="text-[10px] text-slate-400 font-sans space-y-2 pt-2">
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-[#8b5cf6]"></i> Everything inside Standard tier</li>
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-[#8b5cf6]"></i> Continuous long recording queue</li>
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-[#8b5cf6]"></i> Up to 3 live syndication nodes</li>
          </ul>
        </div>
        <button onclick="openVIPCheckout()" class="w-full py-2.5 mt-4 bg-violet-600 hover:bg-violet-500 text-xs font-bold text-white uppercase tracking-wider rounded-xl transition-colors border border-violet-500">
          Subscribe Creator
        </button>
      </div>

      <!-- Tier 3 -->
      <div class="glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between h-[380px]">
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <span class="text-xs font-bold text-slate-400 tracking-wider font-mono">STUDIO MASTER</span>
            <span class="px-2 py-0.5 bg-white/5 rounded text-[9px] text-slate-500 uppercase font-mono tracking-wider font-bold">Pro</span>
          </div>
          <div class="flex items-baseline gap-1">
            <span class="text-3xl font-extrabold text-white">$29</span>
            <span class="text-xs text-slate-555">/ month</span>
          </div>
          <p class="text-[11px] text-slate-400 font-sans">
            Infinite publication pipelines, white-label interfaces, and advanced analytics ledgers.
          </p>
          <ul class="text-[10px] text-slate-400 font-sans space-y-2 pt-2">
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-violet-500"></i> Uncapped multi-channel syndications</li>
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-violet-500"></i> Complete white label design suites</li>
            <li class="flex items-center gap-2"><i data-lucide="check-circle" class="h-3.5 w-3.5 text-violet-500"></i> Dedicated 24/7 priority support</li>
          </ul>
        </div>
        <button onclick="openVIPCheckout()" class="w-full py-2.5 mt-4 bg-white/5 hover:bg-white/10 text-xs font-bold text-white uppercase tracking-wider rounded-xl transition-colors border border-white/10">
          Subscribe Pro
        </button>
      </div>

    </div>
  </section>

  <!-- COLLAPSIBLE VIP PAYMENTS DRAWER / CHECKOUT PANEL -->
  <aside id="vip-checkout-drawer" class="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#050609]/98 border-l border-white/10 shadow-2xl z-50 transform translate-x-full transition-transform duration-300 no-scrollbar overflow-y-auto flex flex-col justify-between p-6 md:p-8 select-none">
    
    <!-- Top Action header -->
    <div class="flex items-center justify-between pb-4 border-b border-white/5">
      <div class="flex items-center gap-2">
        <div class="h-8 w-8 bg-violet-600/10 border border-violet-500/20 text-violet-400 rounded-lg flex items-center justify-center">
          <i data-lucide="credit-card" class="h-4 w-4"></i>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-white font-mono">Secure Stripe checkout</h3>
          <span class="text-[9.5px] font-mono text-slate-500 block">Durable transactional pipeline</span>
        </div>
      </div>
      <button onclick="closeVIPCheckout()" class="p-2 text-slate-400 hover:text-white rounded-lg transition-colors font-bold text-lg select-all">
        &times;
      </button>
    </div>

    <!-- Middle Input Form details -->
    <form onsubmit="handleProcessCheckoutForm(event)" class="flex-grow py-6 space-y-5 flex flex-col justify-between">
      
      <div class="space-y-4">
        <!-- Item billing summary -->
        <div class="p-4 bg-violet-500/5 border border-violet-500/20 rounded-2xl flex justify-between items-center text-xs">
          <div>
            <span class="font-bold text-white block">Sponsor: Creator Platinum Package</span>
            <span class="text-[10px] text-slate-500 font-mono mt-1 block">Renews automatically at next interval</span>
          </div>
          <span class="text-base font-extrabold text-violet-400 font-mono">$9.00/mo</span>
        </div>

        <div>
          <label class="text-[9.5px] font-mono text-slate-500 block uppercase mb-1.5 font-bold tracking-wider">Account holder Name</label>
          <input required type="text" id="billing-name" value="Anik Rahman" class="w-full bg-slate-900 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 rounded-xl outline-none focus:border-violet-500">
        </div>

        <div>
          <label class="text-[9.5px] font-mono text-slate-500 block uppercase mb-1.5 font-bold tracking-wider">Credit card details (Stripe sandbox)</label>
          <!-- Simulated elegant iframe inputs row -->
          <div class="w-full bg-slate-900 border border-white/10 rounded-xl p-3 flex items-center gap-2">
            <i data-lucide="credit-card" class="h-4.5 w-4.5 text-slate-500"></i>
            <input required type="text" id="card-num" placeholder="4242  4242  4242  4242" class="bg-transparent text-xs text-indigo-300 font-mono outline-none flex-grow placeholder-slate-700 select-all" maxlength="19">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-[9.5px] font-mono text-slate-500 block uppercase mb-1.5 font-bold tracking-wider">Expiry Frame</label>
            <input required type="text" placeholder="MM / YY" class="w-full bg-slate-900 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 rounded-xl outline-none focus:border-violet-500 text-center font-mono" maxlength="5">
          </div>
          <div>
            <label class="text-[9.5px] font-mono text-slate-500 block uppercase mb-1.5 font-bold tracking-wider">Secure CVV</label>
            <input required type="password" placeholder="•••" class="w-full bg-[#111827] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 rounded-xl outline-none focus:border-violet-500 text-center font-mono" maxlength="3">
          </div>
        </div>

        <div class="flex items-center gap-2 pt-2">
          <i data-lucide="shield-check" class="h-4.5 w-4.5 text-emerald-400 shrink-none"></i>
          <span class="text-[9.5px] text-slate-500 font-mono leading-tight">Complete SSL handshake encryptions validated instantly by security nodes.</span>
        </div>
      </div>

      <!-- Action items -->
      <div class="space-y-3 pt-6 border-t border-white/5">
        <!-- Progress logging loader -->
        <div id="payment-progress-bar" class="hidden p-3 bg-zinc-950 rounded-xl border border-white/5 space-y-1.5 text-xs">
          <div class="flex justify-between font-mono text-[9.5px] text-slate-500 font-bold uppercase">
            <span id="payment-status-lbl">Initializing Handshake...</span>
            <span id="payment-progress-pct">0%</span>
          </div>
          <div class="w-full bg-white/5 rounded-full h-1 relative">
            <div class="bg-[#8b5cf6] h-1 rounded-full absolute top-0 left-0 transition-all duration-300" style="width: 0%" id="payment-filler"></div>
          </div>
        </div>

        <button type="submit" class="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 font-bold text-xs uppercase tracking-wider text-white rounded-xl shadow-lg transition-transform hover:scale-101 active:scale-95 text-center flex items-center justify-center gap-2" id="pay-action-btn">
          <i data-lucide="lock" class="h-4.5 w-4.5"></i> Authorize Sponsorship Sub
        </button>
      </div>

    </form>

    <div class="text-center font-mono text-[8px] text-slate-600 uppercase tracking-widest pt-2">
      SECURE TRANSIT NODE ID: 09-COWER
    </div>
  </aside>

  <!-- SUCCESS BILL MODAL / TRANSACTION RECEIPT -->
  <dialog id="success-bill-modal" class="bg-[#050609]/95 border border-violet-500/30 w-full sm:w-[395px] rounded-3xl p-6 md:p-8 backdrop-blur-xl pointer-events-auto backdrop:bg-black/80 shadow-2xl space-y-6 select-none animate-fade-in outline-none">
    
    <div class="text-center space-y-2">
      <div class="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2 animate-bounce">
        <i data-lucide="check" class="h-6 w-6"></i>
      </div>
      <h2 class="text-lg font-bold text-white font-display uppercase tracking-tight leading-none">Authentication Complete</h2>
      <p class="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">Sponsorship Transaction catalogued</p>
    </div>

    <!-- Receipt details ledger -->
    <div class="bg-zinc-950 p-4 rounded-2xl border border-white/5 font-mono text-[10px] text-slate-400 space-y-2.5">
      <div class="flex justify-between border-b border-white/5 pb-2">
        <span class="font-bold text-white">TAX INVOICE RECEIPT</span>
        <span class="text-violet-400">#930-SAAS</span>
      </div>
      <div class="flex justify-between">
        <span>ACCOUNT</span>
        <span class="text-white" id="receipt-name font-sans">Anik Rahman</span>
      </div>
      <div class="flex justify-between">
        <span>SOCIOMETRICS CORP</span>
        <span class="text-white font-sans">US-CORE-DISPATCH</span>
      </div>
      <div class="flex justify-between">
        <span>SPONSOR PLAN</span>
        <span class="text-white font-bold font-sans">PLATINUM CORE ($9)</span>
      </div>
      <div class="flex justify-between border-t border-white/5 pt-2.5">
        <span class="font-bold text-white uppercase font-sans">Sovereign Net Due</span>
        <span class="text-emerald-400 font-bold text-xs">$9.00 USD</span>
      </div>
    </div>

    <button onclick="document.getElementById('success-bill-modal').close()" class="w-full py-3 bg-[#8b5cf6] hover:bg-violet-500 hover:scale-102 transition-all font-bold text-xs uppercase tracking-wider text-white rounded-xl text-center active:scale-95">
      Close Invoice & Synapse Hub
    </button>
  </dialog>

  <!-- PERSISTENT FLOATING AUDIO CONTROLLER FOOTER BAR -->
  <footer class="fixed bottom-0 inset-x-0 h-24 bg-zinc-950/95 border-t border-white/5 px-6 flex items-center justify-between z-45 shadow-2xl backdrop-blur-md">
    
    <!-- Track identity meta details -->
    <div class="flex items-center gap-3.5 max-w-[220px] w-full">
      <div class="h-11 w-11 bg-slate-900 border border-white/10 rounded-xl overflow-hidden relative" onclick="scrollToTop()">
        <img id="persistent-cover" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" alt="Cover" class="h-full w-full object-cover">
        <!-- Overlay micro disk animation -->
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <i data-lucide="chevrons-up" class="h-4.5 w-4.5 text-white animate-bounce-slow"></i>
        </div>
      </div>
      <div class="truncate select-none">
        <h4 class="text-xs font-bold text-white tracking-tight truncate uppercase leading-none font-sans" id="persistent-title">Designing Lovable AI Experiences</h4>
        <span class="text-[9.5px] text-slate-500 tracking-tight truncate block mt-1.5 font-sans" id="persistent-artist">Anik Rahman & Sarah Jenkins</span>
      </div>
    </div>

    <!-- Scrubber and buttons -->
    <div class="flex flex-col items-center gap-2.5 max-w-lg w-full mx-6">
      <div class="flex items-center gap-4">
        <!-- Chevron previous -->
        <button onclick="skipTrack(-1)" class="p-2 text-slate-500 hover:text-white rounded-lg transition-colors" title="Previous Session">
          <i data-lucide="skip-back" class="h-4.5 w-4.5"></i>
        </button>
        <!-- Playing trigger bubble -->
        <button onclick="toggleMainListen()" class="h-9 w-9 bg-white text-black hover:scale-105 rounded-full flex items-center justify-center transition-transform active:scale-95" id="persistent-play-btn">
          <i data-lucide="play" class="h-4 w-4 fill-black text-black" id="persistent-play-icon"></i>
        </button>
        <!-- Chevron next -->
        <button onclick="skipTrack(1)" class="p-2 text-slate-500 hover:text-white rounded-lg transition-colors" title="Next Session">
          <i data-lucide="skip-forward" class="h-4.5 w-4.5"></i>
        </button>
      </div>

      <!-- Scrubber bar timeline tracking -->
      <div class="w-full flex items-center gap-3 font-mono text-[9px] text-slate-500 select-none">
        <span id="persistent-time-elasped">0:00</span>
        <div class="flex-grow bg-white/5 hover:bg-white/10 rounded-full h-1 relative cursor-pointer" onclick="scrubHeaderTrack(event)">
          <div class="bg-violet-500 h-1 rounded-full absolute top-0 left-0" style="width: 0%" id="persistent-tracker-bar"></div>
        </div>
        <span id="persistent-time-duration">42:15</span>
      </div>
    </div>

    <!-- Right Side Audio Controls & Spectrum Equalizers -->
    <div class="hidden sm:flex items-center gap-4 font-mono text-[9px] text-slate-500">
      <!-- High fidelity Equalizer spectra -->
      <div class="flex items-end gap-1 h-7 px-3 border-r border-white/5 pr-4" id="persistent-specs-eq">
        <div class="w-[2.5px] bg-violet-500 rounded-full h-[30%]"></div>
        <div class="w-[2.5px] bg-violet-500 rounded-full h-[50%]"></div>
        <div class="w-[2.5px] bg-violet-500 rounded-full h-[40%]"></div>
        <div class="w-[2.5px] bg-violet-500 rounded-full h-[70%]"></div>
        <div class="w-[2.5px] bg-[#8b5cf6] rounded-full h-[25%]"></div>
      </div>

      <div class="flex items-center gap-2 select-none">
        <i data-lucide="volume-2" class="h-4 w-4"></i>
        <input type="range" min="0" max="100" value="80" oninput="changeLocalVolume(this.value)" class="w-20 accent-violet-500 bg-white/5 h-1 rounded-lg appearance-none cursor-pointer">
      </div>
    </div>

  </footer>

  <!-- TOAST ALERTS WRAPPER LAYER -->
  <div id="toast-alerts-layer" class="fixed bottom-28 right-6 z-50 flex flex-col gap-2.5 pointer-events-none"></div>

  <script>
    const EPISODES = [
      {
        id: "ep-1",
        title: "Designing Lovable AI Experiences",
        artist: "Anik Rahman & Sarah Jenkins",
        album: "Season 2 • Ep 14",
        duration: "42:15",
        timeSecs: 2535,
        coverUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80",
        audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        tag: "Design & UX",
        description: "In this masterclass session, Anik and Sarah discuss the philosophy of design craftsmanship, breaking down how to prioritize pixel perfect user-facing layouts."
      },
      {
        id: "ep-2",
        title: "The Future of Full-Stack Web Builders",
        artist: "Sarah Jenkins & Elena Vance",
        album: "Season 2 • Ep 13",
        duration: "38:50",
        timeSecs: 2330,
        coverUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=400&q=80",
        audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        tag: "SaaS & AI",
        description: "An open exploration of Vite, dynamic ESM systems, and containerized dev server management to compete directly with platforms like Lovable."
      },
      {
        id: "ep-3",
        title: "Building a $10k MRR Micro-SaaS Solo",
        artist: "Devon Cole",
        album: "Season 2 • Ep 12",
        duration: "51:10",
        timeSecs: 3070,
        coverUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&w=400&q=80",
        audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        tag: "Technology",
        description: "Devon Cole shares the bootstrapping strategies, growth hacking loops, and technical decisions behind his latest single-developer analytics platform."
      },
      {
        id: "ep-4",
        title: "How to Retain Users with Craftsmanship",
        artist: "Elena Vance",
        album: "Season 2 • Ep 11",
        duration: "29:45",
        timeSecs: 1785,
        coverUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
        audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        tag: "Design & UX",
        description: "Elena breaks down the cognitive science of micro-animations, consistent layouts, and high vertical rhythm across responsive SaaS panels."
      },
      {
        id: "ep-5",
        title: "Voice AI and the Death of Keys",
        artist: "Marcus Chen & Anik Rahman",
        album: "Season 2 • Ep 10",
        duration: "45:30",
        timeSecs: 2730,
        coverUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&w=400&q=80",
        audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        tag: "SaaS & AI",
        description: "An intensive dive into Web Speech APIs, continuous recording models, and the upcoming trends of speech-directed web workflows."
      }
    ];

    let comments = [
      { name: "Sajid Hasan", body: "The UI design looks incredibly polished! Deeply appreciate the dark futuristic space theme colors.", time: "2 hours ago" },
      { name: "Devon Cole", body: "Top tier audio transitions. Excellent episode explaining microservice sandboxing steps.", time: "1 day ago" },
      { name: "Elena Vance", body: "Truly professional work! The slider and the checkout simulator is incredibly fast.", time: "3 days ago" }
    ];

    let currentEpisodeIndex = 0;
    let isPlaying = false;
    let elapsedSeconds = 0;
    let activeTrackTimer;
    let categoryFilter = "all";
    let isRecordingVoicemail = false;
    let voicemailTimerCount = 0;
    let voicemailTimerInterval;

    // Toast alert engine
    function showToast(msg, type = "success") {
      const parent = document.getElementById('toast-alerts-layer');
      const div = document.createElement('div');
      div.className = "flex items-center gap-3 p-3.5 bg-zinc-950/95 border border-white/10 rounded-2xl shadow-2xl pointer-events-auto text-xs font-semibold text-slate-100 max-w-xs animate-fade-in pr-6 relative";
      let icon = '<i data-lucide="check" class="h-4.5 w-4.5 text-emerald-400"></i>';
      if (type === "info") icon = '<i data-lucide="info" class="h-4.5 w-4.5 text-[#8b5cf6]"></i>';
      if (type === "warning") icon = '<i data-lucide="alert-triangle" class="h-4.5 w-4.5 text-amber-500"></i>';
      
      div.innerHTML = \`
        \${icon}
        <div>\${msg}</div>
        <button onclick="this.parentElement.remove()" class="absolute top-1 right-1 p-1 text-slate-600 hover:text-white">&times;</button>
      \`;
      parent.appendChild(div);
      lucide.createIcons();
      setTimeout(() => div.remove(), 4000);
    }

    // Render episode list cards dynamically
    function renderEpisodeCards() {
      const parent = document.getElementById('episodes-cards-container');
      parent.innerHTML = '';

      const searchInputVal = document.getElementById('episode-search-box').value.toLowerCase().trim();
      const filtered = EPISODES.filter(ep => {
        const matchesCategory = categoryFilter === "all" || ep.tag === categoryFilter;
        const matchesSearch = ep.title.toLowerCase().includes(searchInputVal) || ep.artist.toLowerCase().includes(searchInputVal) || ep.description.toLowerCase().includes(searchInputVal);
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        parent.innerHTML = \`
          <div class="col-span-full py-16 text-center text-slate-500 font-sans border-2 border-dashed border-white/5 rounded-3xl">
            <i data-lucide="mic-off" class="h-10 w-10 text-slate-600 mx-auto mb-2 animate-pulse"></i>
            <span class="text-xs font-bold block text-white">No episodes found</span>
            <p class="text-[11px] text-slate-500 mt-1">Try searching alternative keyword parameters.</p>
          </div>
        \`;
        lucide.createIcons();
        return;
      }

      filtered.forEach(ep => {
        const indexInMaster = EPISODES.findIndex(m => m.id === ep.id);
        const isActive = indexInMaster === currentEpisodeIndex;
        const activeCardBorder = isActive ? 'border-violet-500 shadow-md shadow-violet-950/20' : 'border-white/5';
        const activePlayIcon = (isActive && isPlaying) ? 'pause' : 'play';
        const activePlayingPillStyle = (isActive && isPlaying) ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white';

        const div = document.createElement('div');
        div.className = \`glass-card p-5 rounded-3xl border flex flex-col justify-between h-[360px] cursor-pointer transition-all duration-300 relative group overflow-hidden \${activeCardBorder}\`;
        div.setAttribute('onclick', \`streamEpisode(\${indexInMaster})\`);
        
        div.innerHTML = \`
          <!-- Vector card lighting overlay -->
          <div class="absolute -top-12 -right-12 w-24 h-24 bg-[#8b5cf6]/5 rounded-full blur-[25px] group-hover:bg-[#8b5cf6]/10 transition-colors pointer-events-none"></div>

          <div class="space-y-4 relative z-10">
            <!-- Header specifications -->
            <div class="flex justify-between items-start">
              <span class="px-2.5 py-0.5 bg-white/5 text-slate-400 tracking-wider font-mono text-[9px] uppercase font-bold rounded-lg border border-white/5">
                \${ep.tag}
              </span>
              <span class="text-[10px] font-mono text-slate-500 tracking-tight flex items-center gap-1">
                <i data-lucide="clock" class="h-3.5 w-3.5"></i> \${ep.duration}
              </span>
            </div>

            <!-- Image + title segments -->
            <div class="flex gap-4">
              <img src="\${ep.coverUrl}" alt="Cover" class="h-14 w-14 rounded-xl object-cover border border-white/10 shrink-none">
              <div class="truncate select-none">
                <h3 class="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">\${ep.album}</h3>
                <h4 class="text-sm font-extrabold text-white leading-tight font-display tracking-tight group-hover:text-amber-400 transition-colors mt-1 whitespace-normal select-text">\${ep.title}</h4>
              </div>
            </div>

            <!-- Description -->
            <p class="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3 select-text">\${ep.description}</p>
          </div>

          <!-- Footer button actions -->
          <div class="flex justify-between items-center pt-4 border-t border-white/5 relative z-10">
            <span class="text-[10px] font-mono text-slate-500 truncate max-w-[130px]">\${ep.artist}</span>
            <button class="h-8 px-4 \${activePlayingPillStyle} font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 active:scale-95">
              <i data-lucide="\${activePlayIcon}" class="h-3 w-3"></i> \${(isActive && isPlaying) ? 'Pause' : 'Play Episode'}
            </button>
          </div>
        \`;
        parent.appendChild(div);
      });
      lucide.createIcons();
    }

    // Stream a specific episode
    function streamEpisode(idx) {
      if (idx === currentEpisodeIndex) {
        toggleMainListen();
        return;
      }
      currentEpisodeIndex = idx;
      elapsedSeconds = 0;
      isPlaying = true;

      const ep = EPISODES[idx];
      
      // Update featured top row player elements
      document.getElementById('header-title').innerText = ep.title;
      document.getElementById('header-artist').innerText = ep.artist;
      document.getElementById('header-album').innerText = ep.album;
      document.getElementById('header-cover').src = ep.coverUrl;
      document.getElementById('header-time-duration').innerText = ep.duration;

      // Update bottom floating persistent playback elements
      document.getElementById('persistent-title').innerText = ep.title;
      document.getElementById('persistent-artist').innerText = ep.artist;
      document.getElementById('persistent-cover').src = ep.coverUrl;
      document.getElementById('persistent-time-duration').innerText = ep.duration;

      // Reset record rotating vinyl styles
      const vinylElement = document.getElementById('header-vinyl');
      vinylElement.classList.add('spin-active');

      toggleMainListen(true);
      showToast("Streaming session: " + ep.title, "info");
    }

    // Core play/pause controller interval system
    function toggleMainListen(forceState) {
      if (forceState !== undefined) isPlaying = forceState;
      else isPlaying = !isPlaying;

      const hpBtn = document.getElementById('header-play-btn');
      const ppBtn = document.getElementById('persistent-play-btn');
      const vinylElement = document.getElementById('header-vinyl');
      const topEqBars = document.getElementById('header-eq');
      const btmEqBars = document.getElementById('persistent-specs-eq');

      if (isPlaying) {
        hpBtn.innerHTML = '<i data-lucide="pause" class="h-4.5 w-4.5 fill-white text-white"></i>';
        ppBtn.innerHTML = '<i data-lucide="pause" class="h-4 w-4 fill-black text-black"></i>';
        vinylElement.classList.add('spin-active');
        
        // Equalizers start bouncing
        for (let bar of topEqBars.children) bar.classList.add('animate-wave-1');
        
        // Setup clock tick increments
        clearInterval(activeTrackTimer);
        activeTrackTimer = setInterval(() => {
          const activeEp = EPISODES[currentEpisodeIndex];
          elapsedSeconds = (elapsedSeconds + 1) >= activeEp.timeSecs ? 0 : (elapsedSeconds + 1);
          
          const min = Math.floor(elapsedSeconds / 60);
          const sec = elapsedSeconds % 60;
          const formatted = min + ":" + (sec < 10 ? '0' : '') + sec;

          document.getElementById('header-time-elasped').innerText = formatted;
          document.getElementById('persistent-time-elasped').innerText = formatted;

          const pct = (elapsedSeconds / activeEp.timeSecs) * 105;
          document.getElementById('header-tracker-bar').style.width = pct + "%";
          document.getElementById('persistent-tracker-bar').style.width = pct + "%";

          // Persistent footer equalizer bouncing simulation
          const specBars = btmEqBars.children;
          for (let bar of specBars) {
            bar.style.height = (Math.floor(Math.random() * 80) + 15) + "%";
          }
        }, 1000);
      } else {
        hpBtn.innerHTML = '<i data-lucide="play" class="h-4.5 w-4.5 fill-white text-white"></i>';
        PPBtn = document.getElementById('persistent-play-btn');
        if (ppBtn) ppBtn.innerHTML = '<i data-lucide="play" class="h-4 w-4 fill-black text-black"></i>';
        if (vinylElement) vinylElement.classList.remove('spin-active');
        clearInterval(activeTrackTimer);

        for (let bar of topEqBars.children) bar.classList.remove('animate-wave-1');
        const specBars = btmEqBars.children;
        for (let bar of specBars) bar.style.height = '30%';
      }

      lucide.createIcons();
      renderEpisodeCards();
    }

    // Skip forward or backward through Master Tracks list
    function skipTrack(dir) {
      let targetIdx = currentEpisodeIndex + dir;
      if (targetIdx >= EPISODES.length) targetIdx = 0;
      if (targetIdx < 0) targetIdx = EPISODES.length - 1;
      streamEpisode(targetIdx);
    }

    function shareTrack() {
      const mockSlug = "https://podsay.com/episode/" + EPISODES[currentEpisodeIndex].id;
      navigator.clipboard.writeText(mockSlug);
      showToast("Episode link saved to clipboard node!", "success");
    }

    function saveActiveToLibrary() {
      const heartIcon = document.getElementById('favorite-heart-icon');
      heartIcon.classList.toggle('fill-violet-500');
      heartIcon.classList.toggle('text-violet-500');
      const hasSaved = heartIcon.classList.contains('fill-violet-500');
      showToast(hasSaved ? "Added episode to premium Vault library!" : "Removed episode from Vault library.", "info");
    }

    // Filter list category tabs logic
    function setCategoryFilter(cat) {
      categoryFilter = cat;
      const pills = document.querySelectorAll('.cat-pill');
      pills.forEach(p => {
        if(p.innerText === (cat === "all" ? "All Episodes" : cat)) {
          p.className = "cat-pill px-4 py-1.5 rounded-xl border border-violet-500 bg-violet-600 text-white text-xs font-bold transition-all hover:scale-102";
        } else {
          p.className = "cat-pill px-4 py-1.5 rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/10 text-xs font-bold transition-all hover:scale-102";
        }
      });
      renderEpisodeCards();
    }

    function filterEpisodeCatalog() {
      renderEpisodeCards();
    }

    // Upvote host creators
    function likeCreator(creatorKey) {
      let savedVotes = localStorage.getItem('podsay-votes-' + creatorKey);
      let count = savedVotes ? parseInt(savedVotes) : (creatorKey === "anik" ? 24 : creatorKey === "sarah" ? 18 : creatorKey === "devon" ? 32 : 15);
      count++;
      localStorage.setItem('podsay-votes-' + creatorKey, count);
      document.getElementById('host-' + creatorKey + '-votes').innerText = count + " upvotes";
      showToast("Loved " + creatorKey.charAt(0).toUpperCase() + creatorKey.slice(1) + "'s session! Upvote persisted.", "success");
    }

    // Listener Voicemail dynamic recorders
    function handleVoicemailTrigger() {
      isRecordingVoicemail = !isRecordingVoicemail;
      const btn = document.getElementById('rec-action-btn');
      const dot = document.getElementById('rec-status-dot');
      const lbl = document.getElementById('rec-status-lbl');
      const timer = document.getElementById('rec-timer-out');

      if (isRecordingVoicemail) {
        btn.innerHTML = '<i data-lucide="square" class="h-4.5 w-4.5"></i> STOP & DEPLOY VOICEMAIL';
        btn.className = "w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2";
        dot.classList.remove('hidden');
        lbl.innerText = "RECORDING NOW...";
        lbl.className = "text-red-500 font-bold uppercase text-[10px]";

        voicemailTimerCount = 0;
        clearInterval(voicemailTimerInterval);
        voicemailTimerInterval = setInterval(() => {
          voicemailTimerCount++;
          const sec = voicemailTimerCount % 60;
          timer.innerText = "0:" + (sec < 10 ? '0' : '') + sec + " / 0:15";

          if(voicemailTimerCount >= 15) {
            handleVoicemailTrigger(); // auto end
          }
        }, 1000);
        showToast("Accessing device microphone driver (Sandbox Mode)...", "info");
      } else {
        btn.innerHTML = '<i data-lucide="disc" class="h-4.5 w-4.5"></i> Leave another voicemail';
        btn.className = "w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:blend-glow text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2";
        dot.classList.add('hidden');
        lbl.innerText = "Microphone Ready";
        lbl.className = "text-slate-400 font-bold uppercase text-[10px]";
        clearInterval(voicemailTimerInterval);
        timer.innerText = "0:00 / 0:15";

        if(voicemailTimerCount > 0) {
          const freshComment = {
            name: "Listener Voicemail Sync",
            body: "🎙️ Sandbox Voice Note compiled successfully inside local memory. Duration 0:" + (voicemailTimerCount < 10 ? '0' : '') + voicemailTimerCount + " seconds.",
            time: "Just now"
          };
          comments.unshift(freshComment);
          renderCommentsList();
          showToast("Voicemail successfully linked with audience commentary stream!", "success");
        }
      }
      lucide.createIcons();
    }

    // Render audience text comments list
    function renderCommentsList() {
      const parent = document.getElementById('comments-scroller');
      document.getElementById('comments-count').innerText = comments.length + " items loaded";
      parent.innerHTML = '';

      comments.forEach(c => {
        const tr = document.createElement('div');
        tr.className = "p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col gap-1.5 transition-all hover:bg-white/10";
        tr.innerHTML = \`
          <div class="flex justify-between items-center text-[10.5px]">
            <span class="font-bold text-white font-mono flex items-center gap-1"><i data-lucide="user" class="h-3 w-3 text-violet-400"></i> \${c.name}</span>
            <span class="text-slate-500 text-[9.5px]">\${c.time}</span>
          </div>
          <p class="text-[11.5px] text-slate-300 leading-relaxed font-sans">\${c.body}</p>
        \`;
        parent.appendChild(tr);
      });
      lucide.createIcons();
    }

    function postListenerResponse(e) {
      e.preventDefault();
      const nInp = document.getElementById('commenter-name');
      const bInp = document.getElementById('commenter-body');
      
      const freshComment = {
        name: nInp.value.trim(),
        body: bInp.value.trim(),
        time: "Just now"
      };

      comments.unshift(freshComment);
      nInp.value = '';
      bInp.value = '';
      
      renderCommentsList();
      showToast("Thank you! your review has been compiled on the local ledger.", "success");
    }

    // Newsletter Promo claimers
    function handleClaimVoucher(e) {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value.trim();
      const con = document.getElementById('voucher-con');
      const form = document.getElementById('newsletter-form-core');

      if (email) {
        form.classList.add('hidden');
        con.classList.remove('hidden');
        setTimeout(() => {
          con.classList.remove('scale-95', 'opacity-0');
        }, 100);

        showToast("Claim successful! voucher generated beneath.", "success");
      }
    }

    function copyVoucherToClipboard() {
      navigator.clipboard.writeText("PODSAY30");
      showToast("Promo code 'PODSAY30' copied! enjoy 30% discount on Sponsorship kits.", "success");
    }

    // Collapsible drawer VIP checkouts
    function openVIPCheckout() {
      const drawer = document.getElementById('vip-checkout-drawer');
      drawer.classList.remove('translate-x-full');
      showToast("Loaded Stripe payment sandbox.", "info");
    }

    function closeVIPCheckout() {
      const drawer = document.getElementById('vip-checkout-drawer');
      drawer.classList.add('translate-x-full');
    }

    function handleProcessCheckoutForm(e) {
      e.preventDefault();
      const payBtn = document.getElementById('pay-action-btn');
      const progressBox = document.getElementById('payment-progress-bar');
      const fillBar = document.getElementById('payment-filler');
      const statusLbl = document.getElementById('payment-status-lbl');
      const pctLbl = document.getElementById('payment-progress-pct');

      payBtn.disabled = true;
      payBtn.classList.add('opacity-50');
      progressBox.classList.remove('hidden');

      let currentPct = 0;
      fillBar.style.width = '0%';
      pctLbl.innerText = '0%';

      const steps = [
        { pct: 25, msg: "Connecting to secure processor stripe..." },
        { pct: 55, msg: "Exchanging SSL cryptographic key handshakes..." },
        { pct: 85, msg: "Fulfilling sandbox fund allocations..." },
        { pct: 100, msg: "Syncing transaction vault logs..." }
      ];

      let stepIdx = 0;
      let payInterval = setInterval(() => {
        if(stepIdx < steps.length) {
          const s = steps[stepIdx];
          currentPct = s.pct;
          fillBar.style.width = currentPct + "%";
          pctLbl.innerText = currentPct + "%";
          statusLbl.innerText = s.msg;
          stepIdx++;
        } else {
          clearInterval(payInterval);
          closeVIPCheckout();
          
          // reset form
          payBtn.disabled = false;
          payBtn.classList.remove('opacity-50');
          progressBox.classList.add('hidden');

          const payer = document.getElementById('billing-name').value || "Anik Rahman";
          document.getElementById('receipt-name').innerText = payer;
          document.getElementById('success-bill-modal').showModal();
        }
      }, 700);
    }

    function scrubHeaderTrack(e) {
      const parent = e.currentTarget;
      const rect = parent.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      const activeEp = EPISODES[currentEpisodeIndex];
      elapsedSeconds = Math.floor(pct * activeEp.timeSecs);
      
      document.getElementById('header-tracker-bar').style.width = (pct * 100) + "%";
      document.getElementById('persistent-tracker-bar').style.width = (pct * 100) + "%";
      showToast("Scrubbed track frames successfully.", "info");
    }

    function changeLocalVolume(val) {
      showToast("Master volume adjusted: " + val + "%", "info");
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Initialize all workflows
    window.onload = () => {
      lucide.createIcons();
      renderEpisodeCards();
      renderCommentsList();
      
      const bars = document.getElementById('persistent-specs-eq');
      bars.innerHTML = Array(6).fill(0).map(() => \`<div class="w-[2.5px] bg-[#8b5cf6] rounded-full transition-all" style="height: 30%"></div>\`).join('');
    };

  </script>
</body>
</html>`,
  },

  {
    id: 'swift-courier-hub',
    prompt: 'Create a high-fidelity dashboard for courier operations with live delivery states, shipping calculators, and active package logs.',
    title: 'Swift Courier Hub',
    createdAt: 'Edited 58 minutes ago',
    theme: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Swift Courier Hub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body {
      background-color: #030712;
      color: #f3f4f6;
      font-family: system-ui, sans-serif;
    }
    .glass-panel {
      background: rgba(17, 24, 39, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body class="p-6 max-w-7xl mx-auto space-y-6">
  <!-- Header -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-5">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold">S</div>
      <div>
        <h1 class="text-xl font-bold tracking-tight text-white">Swift Courier Operations</h1>
        <p class="text-xs text-orange-400 font-mono">LIVE DISPATCH NETWORKS</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div class="px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/25 text-[10px] text-orange-400 font-mono">14 Dispatch active</div>
    </div>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="glass-panel p-5 rounded-2xl">
      <div class="text-xs text-gray-400 uppercase font-mono">Total Deliveries</div>
      <div class="text-2xl font-bold mt-1" id="total-deliv">1,248</div>
      <div class="text-[10px] text-emerald-400 mt-1">99.4% SLA fulfilled</div>
    </div>
    <div class="glass-panel p-5 rounded-2xl">
      <div class="text-xs text-gray-400 uppercase font-mono">Transit Routes</div>
      <div class="text-2xl font-bold mt-1">104</div>
      <div class="text-[10px] text-emerald-400 mt-1">8 active regional clusters</div>
    </div>
    <div class="glass-panel p-5 rounded-2xl">
      <div class="text-xs text-gray-400 uppercase font-mono">Dispatched Vehicles</div>
      <div class="text-2xl font-bold mt-1" id="active-vehicles">32</div>
      <div class="text-[10px] text-orange-400 mt-1">4 pending load assignments</div>
    </div>
    <div class="glass-panel p-5 rounded-2xl">
      <div class="text-xs text-gray-400 uppercase font-mono">Pending Delivery Cost</div>
      <div class="text-2xl font-bold mt-1">$4,832.10</div>
      <div class="text-[10px] text-gray-500 mt-1">Averages $38.70 per node</div>
    </div>
  </div>

  <!-- Main interactive block -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Active deliveries log - Add, complete, delete functional -->
    <div class="lg:col-span-2 glass-panel p-6 rounded-2xl space-y-4">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-lg font-bold">Package Dispatch Logs</h2>
          <p class="text-xs text-gray-400">Trigger delivery routes, change state, or flush processed items.</p>
        </div>
        <span class="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 text-xs font-mono" id="list-total">4 packages</span>
      </div>

      <!-- Add Package Form -->
      <form id="pkg-form" onsubmit="addPkg(event)" class="flex gap-2 bg-slate-900/50 p-2 rounded-xl border border-white/5">
        <input required id="pkg-id" type="text" placeholder="AWB-8930" class="w-1/4 bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white">
        <input required id="pkg-dest" type="text" placeholder="Destination (e.g. Dhaka, BD)" class="flex-1 bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white">
        <button type="submit" class="px-4 py-1.5 bg-orange-600 hover:bg-orange-500 text-xs font-semibold rounded-lg transition-all">Dispatch</button>
      </form>

      <!-- Packages List -->
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-white/5 text-[10px] text-gray-400 font-mono uppercase">
              <th class="pb-3">AWB Node</th>
              <th class="pb-3">Destination</th>
              <th class="pb-3">Status</th>
              <th class="pb-3">Action</th>
            </tr>
          </thead>
          <tbody id="pkg-list" class="text-xs divide-y divide-white/5">
            <!-- Dynamically Rendered -->
          </tbody>
        </table>
      </div>
    </div>

    <!-- Active delivery state details -->
    <div class="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-6">
      <div>
        <h3 class="text-md font-bold mb-1">Instant Billing Calculator</h3>
        <p class="text-xs text-gray-400">Calculate delivery expenses instantly using local weights.</p>
      </div>

      <div class="space-y-4">
        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">Package Weight (KG)</label>
          <input id="calc-weight" oninput="runCalc()" type="number" value="5" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
        </div>
        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">Shipping Type</label>
          <select id="calc-type" onchange="runCalc()" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
            <option value="12">Express Freight (Fastest)</option>
            <option value="6">Eco Carrier Cargo (Economy)</option>
            <option value="25">Same-day Priority Courier</option>
          </select>
        </div>

        <div class="p-4 rounded-xl bg-slate-950 border border-orange-500/10 text-center">
          <div class="text-[10px] text-gray-400 font-mono">ESTIMATED RATE</div>
          <div class="text-2xl font-bold text-orange-400 mt-1" id="calc-output">$60.00</div>
          <div class="text-[9px] text-gray-500 mt-1 font-mono">Rates include fuel surcharge</div>
        </div>
      </div>

      <button onclick="alert('Tax invoice saved to disk as preview.')" class="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-xs font-semibold text-white rounded-xl transition-all">
        Lock Route Invoice
      </button>
    </div>
  </div>

  <script>
    let pkgs = [
      { id: 'AWB-9021', dest: 'London, Heathrow Airport', status: 'In Transit' },
      { id: 'AWB-8839', dest: 'Dhaka, Gulshan-2', status: 'Delivered' },
      { id: 'AWB-1049', dest: 'Berlin, Tegel Terminal', status: 'Pending Assignment' },
      { id: 'AWB-7740', dest: 'New York, JFK Cargo Hub', status: 'In Transit' }
    ];

    function renderPkgs() {
      const container = document.getElementById('pkg-list');
      container.innerHTML = '';
      
      document.getElementById('list-total').innerText = pkgs.length + ' packages';
      document.getElementById('total-deliv').innerText = (1248 + pkgs.filter(p=>p.status==='Delivered').length).toLocaleString();
      document.getElementById('active-vehicles').innerText = 32 + pkgs.filter(p=>p.status==='In Transit').length;

      pkgs.forEach((p, idx) => {
        let pillColor = 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
        if (p.status === 'Delivered') pillColor = 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
        if (p.status === 'Pending Assignment') pillColor = 'bg-gray-800 text-gray-400 border border-white/5';

        const tr = document.createElement('tr');
        tr.className = "hover:bg-white/5";
        tr.innerHTML = \`
          <td class="py-3 font-mono font-bold text-white">\${p.id}</td>
          <td class="py-3 text-gray-300">\${p.dest}</td>
          <td class="py-3">
            <span class="px-2 py-0.5 rounded text-[10px] font-mono inline-block \${pillColor}">\${p.status}</span>
          </td>
          <td class="py-3 font-mono">
            \${p.status !== 'Delivered' ? \`<button onclick="completePkg(\${idx})" class="text-xs text-emerald-400 hover:underline mr-3">Complete</button>\` : ''}
            <button onclick="deletePkg(\${idx})" class="text-xs text-rose-400 hover:underline">Remove</button>
          </td>
        \`;
        container.appendChild(tr);
      });
    }

    function addPkg(e) {
      e.preventDefault();
      const id = document.getElementById('pkg-id').value.trim();
      const dest = document.getElementById('pkg-dest').value.trim();
      if (id && dest) {
        pkgs.unshift({ id, dest, status: 'In Transit' });
        document.getElementById('pkg-id').value = '';
        document.getElementById('pkg-dest').value = '';
        renderPkgs();
      }
    }

    function completePkg(idx) {
      pkgs[idx].status = 'Delivered';
      renderPkgs();
    }

    function deletePkg(idx) {
      pkgs.splice(idx, 1);
      renderPkgs();
    }

    function runCalc() {
      const weight = parseFloat(document.getElementById('calc-weight').value) || 0;
      const multiplier = parseFloat(document.getElementById('calc-type').value) || 0;
      const total = weight * multiplier;
      document.getElementById('calc-output').innerText = '$' + total.toFixed(2);
    }

    window.onload = () => {
      lucide.createIcons();
      renderPkgs();
    };
  </script>
</body>
</html>`
  },
  {
    id: 'ad-canvas-pro',
    prompt: 'Premium marketing banner creator workspace with editable templates, image prompt previews, and social media layout adjustments.',
    title: 'Ad Canvas Pro',
    createdAt: 'Edited 20 days ago',
    theme: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ad Canvas Pro</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body {
      background-color: #0b0f19;
      color: #e2e8f0;
      font-family: system-ui, sans-serif;
    }
    .glass-border {
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(10px);
    }
  </style>
</head>
<body class="p-6 max-w-7xl mx-auto space-y-6">
  <div class="flex items-center justify-between border-b border-white/10 pb-5">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-purple-600 flex items-center justify-center text-white"><i data-lucide="image" class="h-5 w-5"></i></div>
      <div>
        <h1 class="text-xl font-bold">Ad Canvas Pro</h1>
        <p class="text-[10px] text-gray-400 font-mono tracking-wider">MARKETING AD GENERATOR</p>
      </div>
    </div>
    <span class="px-2.5 py-1 bg-purple-500/10 rounded-full border border-purple-500/25 text-xs text-purple-400">Pro Sandbox Active</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Controls Left -->
    <div class="glass-border p-6 rounded-2xl space-y-4">
      <h3 class="text-md font-bold text-white">Interactive Ad Builder</h3>
      <p class="text-xs text-gray-400">Edit elements below to immediately see layout and copywriting updates.</p>

      <div class="space-y-3 pt-3">
        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">Company / Brand Name</label>
          <input id="brand-input" onkeyup="updateLive()" type="text" value="Anik's Designs" class="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
        </div>

        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">Main Promotion / Offer Text</label>
          <input id="promo-input" onkeyup="updateLive()" type="text" value="Unlock Premium Layouts in One Click" class="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
        </div>

        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">Accent Theme Color</label>
          <select id="color-choice" onchange="updateLive()" class="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
            <option value="from-purple-600 to-indigo-600">Deep Purple Core</option>
            <option value="from-emerald-600 to-teal-500">Green Tech Glow</option>
            <option value="from-pink-600 to-rose-500">Cyberpunk Neon</option>
            <option value="from-amber-500 to-orange-600">Sunset Bronze</option>
          </select>
        </div>

        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">Social Channel Layout</label>
          <div class="grid grid-cols-3 gap-1">
            <button onclick="setRatio('ig-post')" class="py-1.5 bg-white/15 rounded text-[10px] font-semibold text-white">Square (1:1)</button>
            <button onclick="setRatio('ig-story')" class="py-1.5 bg-slate-900 rounded text-[10px] font-semibold text-gray-400 hover:text-white">Story (9:16)</button>
            <button onclick="setRatio('fb-banner')" class="py-1.5 bg-slate-900 rounded text-[10px] font-semibold text-gray-400 hover:text-white">Banner (16:9)</button>
          </div>
        </div>
      </div>

      <button onclick="alert('Promo code bundle successfully locked')" class="w-full py-2 bg-purple-600 text-xs font-semibold text-white rounded-xl">Generate Asset Bundle</button>
    </div>

    <!-- Live Preview Right -->
    <div class="lg:col-span-2 flex flex-col justify-between h-[450px]">
      <div id="preview-box" class="flex-1 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all duration-300">
        <div class="absolute inset-x-0 top-0 h-48 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <!-- Header aspect -->
        <div class="flex justify-between items-center z-10">
          <span class="text-xs uppercase font-mono tracking-widest text-white/80 font-bold" id="brand-tag">Anik's Designs</span>
          <span class="px-2 py-0.5 bg-white/20 rounded text-[9px] font-mono text-white tracking-widest">PROMO BUNDLE</span>
        </div>

        <!-- Middle copy -->
        <div class="z-10 py-6">
          <h2 class="text-3xl font-extrabold text-white tracking-tight leading-tight md:text-4xl" id="promo-tag">
            Unlock Premium Layouts in One Click
          </h2>
          <p class="text-xs text-white/70 font-mono mt-3">Ready with fully interactive HTML widgets inside sandbox.</p>
        </div>

        <!-- Bottom action -->
        <div class="flex justify-between items-center border-t border-white/20 pt-4 z-10">
          <span class="text-xs text-white font-semibold flex items-center gap-1">Learn More <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i></span>
          <span class="text-[9px] text-white/50 font-mono">2026 UTC CLOUD SERVICE</span>
        </div>
      </div>
    </div>
  </div>

  <script>
    function updateLive() {
      const brand = document.getElementById('brand-input').value.trim() || "My Brand";
      const promo = document.getElementById('promo-input').value.trim() || "Limited Time Offer";
      const colors = document.getElementById('color-choice').value;

      document.getElementById('brand-tag').innerText = brand;
      document.getElementById('promo-tag').innerText = promo;

      const previewBox = document.getElementById('preview-box');
      // Reset color classes safely
      previewBox.className = "flex-1 rounded-2xl bg-gradient-to-tr " + colors + " p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all duration-300";
    }

    function setRatio(type) {
      const p = document.getElementById('preview-box');
      // Just demo toast ratios
      alert('Ratio updated to: ' + type + '. View container scaling applied successfully.');
    }

    window.onload = () => {
      lucide.createIcons();
    }
  </script>
</body>
</html>`
  },
  {
    id: 'bangla-ad-creator',
    prompt: 'Simple, effective banner designer supporting Bengali translations, customizable background colors, and exportable layouts.',
    title: 'Bangla Ad Creator',
    createdAt: 'Edited 21 days ago',
    theme: 'light',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>Bangla Ad Creator</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800 p-6 max-w-4xl mx-auto space-y-6">
  <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
    <div>
      <h1 class="text-lg font-bold text-gray-900">বাংলা বিজ্ঞাপন নির্মাতা</h1>
      <p class="text-xs text-gray-500">সহজ এবং ইন্টারেক্টিভ বিজ্ঞাপন ব্যানার তৈরি করুন</p>
    </div>
    <span class="bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1 rounded text-xs">সক্রিয় স্যান্ডবক্স</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
      <h3 class="text-sm font-semibold text-gray-800 border-b pb-2">বিজ্ঞাপন কাস্টমাইজ করুন</h3>
      
      <div class="space-y-3">
        <div>
          <label class="text-[10px] text-gray-400 uppercase tracking-wider block font-bold mb-1">ব্র্যান্ডের নাম</label>
          <input id="brand" onkeyup="updateAd()" type="text" value="সোনার বাংলা ফুড" class="w-full border p-2 text-xs rounded-lg outline-none focus:border-red-500">
        </div>
        <div>
          <label class="text-[10px] text-gray-400 uppercase tracking-wider block font-bold mb-1">অফারের স্লোগান</label>
          <input id="tagline" onkeyup="updateAd()" type="text" value="১০০% খাঁটি ও সুস্বাদু ঐতিহ্যবাহী খাবার" class="w-full border p-2 text-xs rounded-lg outline-none focus:border-red-500">
        </div>
        <div>
          <label class="text-[10px] text-gray-400 uppercase tracking-wider block font-bold mb-1">ব্যাকগ্রাউন্ড থিম</label>
          <select id="bg-theme" onchange="updateAd()" class="w-full border p-2 text-xs rounded-lg outline-none">
            <option value="bg-red-600 text-white">লাল এবং সোনালি সূর্যমুখী</option>
            <option value="bg-green-700 text-white">সবুজ মখমল বনানী</option>
            <option value="bg-[#0f172a] text-white">নিশাত অন্ধকার স্কাই</option>
          </select>
        </div>
      </div>
      
      <button onclick="alert('বিজ্ঞাপন ইমেজ সফলভাবে ডাউনলোড শুরু হয়েছে!')" class="w-full py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500">ইমেজ সংরক্ষণ করুন</button>
    </div>

    <!-- Ad Mock Preview -->
    <div class="flex items-center justify-center">
      <div id="ad-card" class="w-full h-64 bg-red-600 text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg relative transition-all">
        <div class="flex justify-between items-start">
          <span class="text-xs uppercase font-bold tracking-widest" id="preview-brand">সোনার বাংলা ফুড</span>
          <span class="text-[9px] bg-white/20 px-2 py-0.5 rounded text-white font-mono">১০% ছাড়</span>
        </div>
        <div class="my-auto">
          <h2 id="preview-tagline" class="text-2xl font-bold leading-tight">১০০% খাঁটি ও সুস্বাদু ঐতিহ্যবাহী খাবার</h2>
        </div>
        <div class="flex justify-between text-[10px] border-t border-white/20 pt-3">
          <span>আজই অর্ডার করুন</span>
          <span>BD-2026</span>
        </div>
      </div>
    </div>
  </div>

  <script>
    function updateAd() {
      const brandVal = document.getElementById('brand').value.trim() || 'আমার ব্র্যান্ড';
      const taglineVal = document.getElementById('tagline').value.trim() || 'আপনার পছন্দ';
      const themeVal = document.getElementById('bg-theme').value;

      document.getElementById('preview-brand').innerText = brandVal;
      document.getElementById('preview-tagline').innerText = taglineVal;
      document.getElementById('ad-card').className = "w-full h-64 " + themeVal + " p-8 rounded-2xl flex flex-col justify-between shadow-lg relative transition-all";
    }
  </script>
</body>
</html>`
  },
  {
    id: 'stock-master-ai',
    prompt: 'Build a financial stocks monitor including active portfolio evaluations, live pricing updates, and search logic.',
    title: 'StockMaster AI',
    createdAt: 'Edited 25 days ago',
    theme: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>StockMaster AI</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body {
      background-color: #040815;
      color: #94a3b8;
      font-family: system-ui, sans-serif;
    }
    .panel {
      background: #090e1f;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body class="p-6 max-w-7xl mx-auto space-y-6">
  <!-- Nav header -->
  <div class="flex justify-between items-center border-b border-white/10 pb-5">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white"><i data-lucide="line-chart" class="h-5 w-5"></i></div>
      <div>
        <h1 class="text-xl font-bold text-white">StockMaster AI Realtime</h1>
        <p class="text-xs text-emerald-400 font-mono tracking-wider">SECURE FINANCIAL ENGINE</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <button onclick="randomizePrices()" class="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg text-xs font-semibold text-white flex items-center gap-1">Update Prices <i data-lucide="refresh-cw" class="h-3 w-3"></i></button>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 space-y-4">
      <div class="panel p-6 rounded-2xl">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-md font-bold text-white">Active Market Allocations</h3>
          <input id="search-ticker" onkeyup="filterStocks()" placeholder="Filter symbol (e.g. AMZN)" class="bg-black/50 border border-white/10 rounded-lg px-3 py-1 text-xs text-white">
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-white/5 text-[10px] text-gray-500 font-mono uppercase">
                <th class="pb-3 text-left">Symbol</th>
                <th class="pb-3">Company</th>
                <th class="pb-3">Current Price</th>
                <th class="pb-3">Percent Change</th>
                <th class="pb-3">Action</th>
              </tr>
            </thead>
            <tbody id="stock-rows" class="text-xs text-white uppercase divide-y divide-white/5">
              <!-- Rendered Dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Active transaction wallet panel -->
    <div class="panel p-6 rounded-2xl flex flex-col justify-between h-[340px]">
      <div>
        <h4 class="text-md font-bold text-white mb-1">Buy / Sell Sandbox Order</h4>
        <p class="text-xs text-gray-500">Execute sandbox transactions safely inside browser memory state.</p>
      </div>

      <div class="space-y-3">
        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">TICKER SYMBOL</label>
          <input id="order-symbol" type="text" value="AAPL" class="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
        </div>
        <div>
          <label class="text-[10px] font-mono text-gray-400 block mb-1">OFFER VOLUME (SHARES)</label>
          <input id="order-shares" type="number" value="10" class="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
        </div>
      </div>

      <button onclick="executeOrder()" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white rounded-xl">Execute Sandbox Order</button>
    </div>
  </div>

  <script>
    let marketData = [
      { ticker: 'AAPL', name: 'Apple Inc.', price: 174.50, change: 1.4 },
      { ticker: 'MSFT', name: 'Microsoft Corp.', price: 412.30, change: -0.8 },
      { ticker: 'AMZN', name: 'Amazon.com Inc.', price: 178.10, change: 2.3 },
      { ticker: 'GOOGL', name: 'Alphabet Inc.', price: 151.60, change: 1.1 },
      { ticker: 'NVDA', name: 'NVIDIA Corp.', price: 875.20, change: 4.8 }
    ];

    function renderStocks(filter = '') {
      const parent = document.getElementById('stock-rows');
      parent.innerHTML = '';
      
      const filtered = marketData.filter(s => s.ticker.toLowerCase().includes(filter.toLowerCase()));

      filtered.forEach(s => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-white/5";
        
        let color = s.change >= 0 ? 'text-emerald-400' : 'text-red-400';
        let arrow = s.change >= 0 ? '▲' : '▼';

        tr.innerHTML = \`
          <td class="py-3 font-mono font-bold">\${s.ticker}</td>
          <td class="py-3 text-gray-400 text-xs text-capitalize">\${s.name}</td>
          <td class="py-3 font-mono">\$\${s.price.toFixed(2)}</td>
          <td class="py-3 font-mono \${color}">\${arrow} \${s.change.toFixed(1)}%</td>
          <td class="py-3"><button onclick="setTicker('\${s.ticker}')" class="text-[10px] text-emerald-400 hover:underline">Trade</button></td>
        \`;
        parent.appendChild(tr);
      });
    }

    function filterStocks() {
      const q = document.getElementById('search-ticker').value;
      renderStocks(q);
    }

    function setTicker(tick) {
      document.getElementById('order-symbol').value = tick;
    }

    function randomizePrices() {
      marketData.forEach(s => {
        let delta = (Math.random() - 0.5) * 5;
        s.price += delta;
        s.change = delta * 1.5;
      });
      renderStocks();
    }

    function executeOrder() {
      const symbol = document.getElementById('order-symbol').value.toUpperCase();
      const shares = document.getElementById('order-shares').value;
      const target = marketData.find(s=>s.ticker===symbol);
      const priceVal = target ? target.price : 120.00;
      const total = priceVal * shares;
      alert("Successfully Executed! Purchased " + shares + " shares of " + symbol + " totaling $" + total.toFixed(2) + " dollars inside local memory.");
    }

    window.onload = () => {
      lucide.createIcons();
      renderStocks();
    }
  </script>
</body>
</html>`
  }
];
