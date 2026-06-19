function cleanWordsForNoun(prompt: string): string {
  const cleanWords = prompt.trim()
    .replace(/create|build|make|clone|website|page|simple|interactive|high-fidelity|premium|shop|store|boutique|hub|online/gi, '')
    .split(/\s+/)
    .filter(w => w.length > 2 && !/the|and|for|with|mode/i.test(w));
  return cleanWords[cleanWords.length - 1] || 'Asset';
}

function getMarketplaceConfig(prompt: string, title: string) {
  const promptLower = prompt.toLowerCase();
  
  // Custom brand name from Title or Prompt
  let brandName = title || 'Aura Boutique';
  brandName = brandName.replace(/['"]/g, '').replace(/[\(\)]/g, '').trim();
  if (brandName.toLowerCase() === 'custom interactive space' || brandName.toLowerCase() === 'custom website' || brandName.length < 3) {
    const cleanWords = prompt.trim()
      .replace(/create|build|make|clone|website|page|simple|interactive|high-fidelity|premium/gi, '')
      .split(/\s+/)
      .filter(w => w.length > 2 && !/the|and|for|with|mode|details/i.test(w));
    if (cleanWords.length > 0) {
      brandName = cleanWords.slice(0, 2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' Hub';
    } else {
      brandName = 'Slick ShopO';
    }
  }

  let subject = 'product';
  let category1 = 'Apparel';
  let category2 = 'Electronics';
  let category3 = 'Accessories';
  
  let items = [
    { id: 'item-1', title: 'Carbon Matrix Pro Sneakers', price: 145.00, cat: 'apparel', desc: 'Slick high-fidelity foam, styled visually with charcoal black outlines.', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80' },
    { id: 'item-2', title: 'Cyberpunk Windbreaker Hoodie', price: 85.00, cat: 'apparel', desc: 'Premium waterproof fabric, fitted with glowing amber highlights.', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=300&q=80' },
    { id: 'item-3', title: 'Vanguard Smart watch Core', price: 299.00, cat: 'electronics', desc: 'High speed pipeline processor, calibrated for rapid WebSocket routing.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80' },
    { id: 'item-4', title: 'Premium Multi-Driver Headphones', price: 180.00, cat: 'electronics', desc: 'Compact dual-channel arrays supporting active noise block filters.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80' },
    { id: 'item-5', title: 'Minimalist Slate Office Glass', price: 45.00, cat: 'accessories', desc: 'Slick sandblasted frame finish under hard sapphire protective glass.', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&q=80' }
  ];

  if (/coffee|cafe|brew|bakery|restaurant|food|pastry|cake|cookie|cupcake|doughnut/i.test(promptLower)) {
    subject = 'cafe';
    category1 = 'Brews';
    category2 = 'Bakeries';
    category3 = 'Delights';
    items = [
      { id: 'cafe-1', title: 'Signature Espresso Macchiato', price: 4.50, cat: 'brews', desc: 'Bold ristretto shot layered with velvety dense microfoam.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80' },
      { id: 'cafe-2', title: 'Cold-Brew Vanilla Nitro', price: 5.20, cat: 'brews', desc: 'Injected with pure nitrogen for a super-smooth cascade pour cascade.', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80' },
      { id: 'cafe-3', title: 'Double Butter Croissant', price: 3.50, cat: 'bakeries', desc: 'Flaky layers crafted beautifully with premium Normandy high-fat butter.', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80' },
      { id: 'cafe-4', title: 'Glazed Cinnamon Cardamom Scone', price: 4.80, cat: 'bakeries', desc: 'Infused with organic cardamom pods and raw honey glaze drizzle.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80' },
      { id: 'cafe-5', title: 'Avo Toast on Rye Sourdough', price: 11.50, cat: 'delights', desc: 'Crushed ripe avocado, watermelon radish, dynamic microgreens and sea salt.', img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=300&q=80' }
    ];
  } else if (/shoe|sneakers|footwear|boots|boot|nike|puma|adidas|runner|walk/i.test(promptLower)) {
    subject = 'shoes';
    category1 = 'Athletic';
    category2 = 'Lifestyle';
    category3 = 'Outdoor';
    items = [
      { id: 'shoe-1', title: 'Apex Matrix Carbon Runner', price: 185.00, cat: 'athletic', desc: 'High-propulsion carbon plates enveloped in hyper-responsive foam.', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80' },
      { id: 'shoe-2', title: 'Phantom Single-Knit Trainer', price: 140.00, cat: 'athletic', desc: 'Breathable elastic single-weave outline optimized for urban tempo.', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=300&q=80' },
      { id: 'shoe-3', title: 'Heritage Suede Court Master', price: 115.00, cat: 'lifestyle', desc: 'Buttery pre-aged leather panels fitted onto vulcanized rubber soles.', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=300&q=80' },
      { id: 'shoe-4', title: 'AeroStep Air Cushion Sneaker', price: 95.00, cat: 'lifestyle', desc: 'Ultra-light responsive platform keeping feet fresh on high steps.', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=300&q=80' },
      { id: 'shoe-5', title: 'All-Terrain Hydrophobic Boot', price: 210.00, cat: 'outdoor', desc: 'Triple sealed ripstop membrane with deep-lugs traction profile.', img: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=300&q=80' }
    ];
  } else if (/watch|smartwatch|watches|wearable|horology|clock/i.test(promptLower)) {
    subject = 'watches';
    category1 = 'Mechanical';
    category2 = 'Digital';
    category3 = 'Exotic';
    items = [
      { id: 'watch-1', title: 'Vanguard Chronograph Elite', price: 795.00, cat: 'mechanical', desc: 'Self-winding automatic skeleton dial with elegant leather straps.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80' },
      { id: 'watch-2', title: 'minimalist Steel-Mesh Slate', price: 195.00, cat: 'digital', desc: 'Sandblasted dark bezel cover mounted under hard sapphire face glass.', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=300&q=80' },
      { id: 'watch-3', title: 'Aura Sport OLED Smartwatch', price: 340.05, cat: 'digital', desc: 'Bezel-less crisp display panel with real-time biometric tracking feeds.', img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=300&q=80' },
      { id: 'watch-4', title: 'Horology Tourbillon Rose Gold', price: 1450.00, cat: 'mechanical', desc: 'Precision balance-wheel kinetic masterpiece with 22k gold accents.', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=300&q=80' },
      { id: 'watch-5', title: 'Command Carbon Tactical', price: 420.00, cat: 'exotic', desc: 'Shockproof polymer shell with helium release valve and dive bezel.', img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=300&q=80' }
    ];
  } else if (/perfume|perfumance|fragrance|scent|aroma|atar|oud|sandalwood|আতর|সুগন্ধি|ঈদ|eid/i.test(promptLower)) {
    subject = 'fragrance';
    brandName = 'PERFUMANCE (ঈদ স্পেশাল আতর)';
    category1 = 'luxury-atar';
    category2 = 'arabian-scent';
    category3 = 'floral-sweet';
    items = [
      { id: 'atar-1', title: 'সামুদ্রিক চন্দন (Premium Sandalwood)', price: 350.00, cat: 'luxury-atar', desc: 'উন্নত মানের চন্দন কাঠ থেকে আহরিত শান্ত ও মনমুগ্ধকর রাজকীয় সুবাস।', img: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=300&q=80' },
      { id: 'atar-2', title: 'রাজকীয় সাত রিদমত (Classic Aromatic Oud)', price: 420.00, cat: 'luxury-atar', desc: 'অভিজাত ও দীর্ঘস্থায়ী রাজকীয় সুবাস যা আপনাকে দিনভর রাখবে সতেজ ও প্রাণবন্ত।', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=300&q=80' },
      { id: 'atar-3', title: 'মিষ্টি সুবাস (Sweet Rose Scent)', price: 280.00, cat: 'floral-sweet', desc: 'তাজা গোলাপ ও মধুর সংমিশ্রণে তৈরি অত্যন্ত মিষ্টি ও ধর্মপ্রাণ রুচির সুবাস।', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=300&q=80' },
      { id: 'atar-4', title: 'অ্যারাবিয়ান চকলেট (Arabian Chocolate Aroma)', price: 390.00, cat: 'arabian-scent', desc: 'চকলেট, কফি ও খাঁটি ভ্যানিলার অ্যারাবিয়ান ট্র্যাডিশনাল মিষ্টি মেলবন্ধন।', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=300&q=80' },
      { id: 'atar-5', title: 'ফুলের সুবাস (Signature Floral Petals)', price: 480.00, cat: 'floral-sweet', desc: 'হাসনাহেনা, বেলি ও চামেলী ফুলের মোহনীয় সুবাসের রাজকীয় মেলবন্ধন।', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80' }
    ];
  } else {
    const cleanWords = prompt.trim()
      .replace(/create|build|make|clone|website|page|simple|interactive|high-fidelity|premium/gi, '')
      .split(/\s+/)
      .filter(w => w.length > 2 && !/the|and|for|with|mode/i.test(w));
    const matchedNoun = cleanWords[cleanWords.length - 1] || 'Asset';
    subject = matchedNoun;
    category1 = 'Premium';
    category2 = 'Standard';
    category3 = 'Essentials';
    items = [
      { id: 'gen-1', title: `Signature Elite ${matchedNoun}`, price: 199.00, cat: 'premium', desc: `Elite artisanal design, handcrafted with a premium tactile finish.`, img: `https://images.unsplash.com/featured/300x300/?${matchedNoun},modern` },
      { id: 'gen-2', title: `Pro Version ${matchedNoun}`, price: 120.00, cat: 'premium', desc: `Optimized model fitted with advanced configurations for professional use.`, img: `https://images.unsplash.com/featured/300x300/?${matchedNoun},minimal` },
      { id: 'gen-3', title: `Classic Standard ${matchedNoun}`, price: 65.00, cat: 'standard', desc: `Timeless structural outline crafted cleanly with everyday reliability.`, img: `https://images.unsplash.com/featured/300x300/?${matchedNoun},vintage` },
      { id: 'gen-4', title: `Aether Minimalist ${matchedNoun}`, price: 45.00, cat: 'essentials', desc: `Streamlined functional structure displaying beautiful, organic symmetry.`, img: `https://images.unsplash.com/featured/300x300/?${matchedNoun},clean` },
      { id: 'gen-5', title: `Deluxe Golden ${matchedNoun}`, price: 499.00, cat: 'premium', desc: `Exclusive limited-run masterwork with custom engravings and certificate.`, img: `https://images.unsplash.com/featured/300x300/?${matchedNoun},luxury` }
    ];
  }

  // Determine dynamic colors Based on prompt
  let colorTheme = {
    primaryBg: '#090a10',
    headerBg: '#131521',
    cardBg: '#1a1d30',
    borderColor: 'border-indigo-500/10',
    primaryAccent: 'indigo-500',
    hoverAccent: 'indigo-400',
    textAccent: 'text-indigo-400',
    accentClass: 'indigo',
    lucideColor: '#6366f1'
  };

  if (/amber|gold|orange|yellow|pizza|coffee|cafe|bakery/i.test(promptLower)) {
    colorTheme = {
      primaryBg: '#0a0903',
      headerBg: '#151206',
      cardBg: '#211c0b',
      borderColor: 'border-amber-500/15',
      primaryAccent: 'amber-500',
      hoverAccent: 'amber-400',
      textAccent: 'text-amber-400',
      accentClass: 'amber',
      lucideColor: '#f59e0b'
    };
  } else if (/emerald|green|lime|nature|organic|perfume|perfumance|fragrance|scent|aroma|atar|oud|sandalwood|আতর|সুগন্ধি|ঈদ|eid/i.test(promptLower)) {
    colorTheme = {
      primaryBg: '#030a05',
      headerBg: '#06150a',
      cardBg: '#0b2111',
      borderColor: 'border-emerald-500/15',
      primaryAccent: 'emerald-500',
      hoverAccent: 'emerald-400',
      textAccent: 'text-emerald-400',
      accentClass: 'emerald',
      lucideColor: '#10b981'
    };
  } else if (/rose|red|pink|ruby|love|heart/i.test(promptLower)) {
    colorTheme = {
      primaryBg: '#0a0304',
      headerBg: '#150609',
      cardBg: '#210b0f',
      borderColor: 'border-rose-500/15',
      primaryAccent: 'rose-500',
      hoverAccent: 'rose-400',
      textAccent: 'text-rose-400',
      accentClass: 'rose',
      lucideColor: '#f43f5e'
    };
  } else if (/blue|cyan|sky|cyber/i.test(promptLower)) {
    colorTheme = {
      primaryBg: '#030712',
      headerBg: '#0b162f',
      cardBg: '#0f2043',
      borderColor: 'border-blue-500/15',
      primaryAccent: 'blue-500',
      hoverAccent: 'blue-400',
      textAccent: 'text-blue-400',
      accentClass: 'blue',
      lucideColor: '#3b82f6'
    };
  } else if (/violet|purple|fuchsia|lavender/i.test(promptLower)) {
    colorTheme = {
      primaryBg: '#06030a',
      headerBg: '#130424',
      cardBg: '#1e0839',
      borderColor: 'border-purple-500/15',
      primaryAccent: 'purple-500',
      hoverAccent: 'purple-400',
      textAccent: 'text-purple-400',
      accentClass: 'purple',
      lucideColor: '#a855f7'
    };
  } else if (/teal|mint/i.test(promptLower)) {
    colorTheme = {
      primaryBg: '#030a0a',
      headerBg: '#061414',
      cardBg: '#0b2020',
      borderColor: 'border-teal-500/15',
      primaryAccent: 'teal-500',
      hoverAccent: 'teal-400',
      textAccent: 'text-teal-400',
      accentClass: 'teal',
      lucideColor: '#0d9488'
    };
  }

  return { brandName, category1, category2, category3, items, colorTheme, subject };
}

export function getFallbackHTML(prompt: string, title: string): string {
  const isFinance = /finance|bank|money|budget|gold|pay|ledger|wallet|stocks/i.test(prompt);
  const isSaaS = /saas|platform|service|cloud|ai|dashboard|admin|panel/i.test(prompt);
  const isPortfolio = /portfolio|resume|developer|designer|cv|agency|biography|about/i.test(prompt);
  const isEcommerce = /shop|store|e-commerce|buy|sell|product|coffee|bakery|restaurant|food|apparel|shoe|watch|shopo/i.test(prompt);
  const isSocial = /social|community|meet|forum|feed|post/i.test(prompt);
  const isWhatsApp = /chat|whatsapp|messenger|telegram|discord|slack|message/i.test(prompt);
  const isNetflix = /netflix|movie|cinema|video|stream|show|youtube|film|trailer/i.test(prompt);
  const isSpotify = /spotify|music|song|playlist|artist|audio|sound|player/i.test(prompt);
  const isPodcast = /podcast|podsay|podzay|audio-show|host/i.test(prompt);
  const isCalculator = /calculator|calc|math|algebra|percentage/i.test(prompt);
  const isWeather = /weather|forecast|temp|temperature|rain|wind|humidity|climate/i.test(prompt);
  const isLanguageOrVocab = /vocab|word|dictionary|vocabulary|bengali|language|learn|translate|bangle/i.test(prompt);
  const isTaskManager = /task|board|kanban|todo|to-do|project|trello|jira|checklist/i.test(prompt);
  const isClockOrCalendar = /clock|time|timezone|timer|calendar|meeting|scheduler/i.test(prompt);

  let siteTitle = title || 'Custom Interactive Space';
  siteTitle = siteTitle.replace(/['"]/g, '');

  // A. SCIENTIFIC & INTERACTIVE CALCULATOR
  if (isCalculator) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;550;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Space Grotesk', sans-serif; background-color: #030712; }
    .mono-font { font-family: 'JetBrains Mono', monospace; }
    .glass-btn { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
    .glass-btn:active { transform: scale(0.92); }
  </style>
</head>
<body class="h-full flex flex-col items-center justify-center p-4 bg-[#030712] text-slate-100 selection:bg-indigo-500/30">
  <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#090f1d] border border-slate-800/80 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
    <!-- Glow element -->
    <div class="absolute -top-24 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

    <!-- Left & Center: Calculator Core -->
    <div class="md:col-span-2 space-y-4 relative z-10">
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow shadow-indigo-650"><i data-lucide="calculator" class="h-4 w-4"></i></div>
          <div>
            <h1 class="text-sm font-bold uppercase tracking-wider text-slate-200">Anik precision calc</h1>
            <p class="text-[9px] text-slate-500 font-mono">SANDBOX CALIBRATED</p>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] text-emerald-400 font-mono flex items-center gap-1">
          <span class="h-1 w-1 rounded-full bg-emerald-400"></span> Stable Node
        </span>
      </div>

      <!-- Display -->
      <div class="bg-black/85 rounded-2xl p-5 border border-slate-800 flex flex-col justify-end items-end h-32 relative shadow-inner overflow-hidden">
        <div id="calc-formula" class="text-xs text-slate-500 font-mono tracking-wide h-6 overflow-hidden truncate max-w-full"></div>
        <div id="calc-display" class="text-3xl font-bold font-mono tracking-tight text-white mt-1 select-all truncate max-w-full">0</div>
        <div class="absolute top-2 left-3 text-[8px] font-mono text-indigo-550 opacity-40">CALCULATION ENGINE</div>
      </div>

      <!-- Keypad -->
      <div class="grid grid-cols-4 gap-2 text-sm">
        <!-- Row 1 -->
        <button onclick="clearCalc()" class="glass-btn py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-rose-450 border border-slate-800 font-bold col-span-2">AC</button>
        <button onclick="backspace()" class="glass-btn py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 flex items-center justify-center"><i data-lucide="delete" class="h-4 w-4"></i></button>
        <button onclick="inputOp('/')" class="glass-btn py-3 rounded-xl bg-indigo-950/40 text-indigo-400 hover:bg-indigo-900/40 border border-indigo-950 font-bold text-center">&#247;</button>

        <!-- Row 2 -->
        <button onclick="inputNum('7')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">7</button>
        <button onclick="inputNum('8')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">8</button>
        <button onclick="inputNum('9')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">9</button>
        <button onclick="inputOp('*')" class="glass-btn py-3 rounded-xl bg-indigo-950/40 text-indigo-400 hover:bg-indigo-900/40 border border-indigo-950 font-bold text-center">&times;</button>

        <!-- Row 3 -->
        <button onclick="inputNum('4')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">4</button>
        <button onclick="inputNum('5')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">5</button>
        <button onclick="inputNum('6')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">6</button>
        <button onclick="inputOp('-')" class="glass-btn py-3 rounded-xl bg-indigo-950/40 text-indigo-400 hover:bg-indigo-900/40 border border-indigo-950 font-bold text-center">&minus;</button>

        <!-- Row 4 -->
        <button onclick="inputNum('1')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">1</button>
        <button onclick="inputNum('2')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">2</button>
        <button onclick="inputNum('3')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">3</button>
        <button onclick="inputOp('+')" class="glass-btn py-3 rounded-xl bg-indigo-950/40 text-indigo-400 hover:bg-indigo-900/40 border border-indigo-950 font-bold text-center">&plus;</button>

        <!-- Row 5 -->
        <button onclick="inputNum('0')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">0</button>
        <button onclick="inputNum('.')" class="glass-btn py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-250 border border-slate-800/50 hover:text-white font-medium">.</button>
        <button onclick="calculate()" class="glass-btn py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold col-span-2 shadow-lg shadow-indigo-600/15 border border-indigo-500">=</button>
      </div>
    </div>

    <!-- Right: Calculation History & Tools -->
    <div class="border-t md:border-t-0 md:border-l border-slate-800/80 pt-5 md:pt-0 md:pl-6 space-y-4 relative z-10 flex flex-col justify-between">
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1"><i data-lucide="history" class="h-3.5 w-3.5 text-indigo-400"></i> Operation Logs</h3>
        <p class="text-[10px] text-slate-500 mt-1">Check previous sandbox calculations below.</p>
        
        <div id="calc-history" class="mt-3 bg-black/40 rounded-xl border border-slate-800/80 p-3 h-64 overflow-y-auto space-y-2 text-xs font-mono scrollbar-none">
          <div class="text-slate-500 text-[10px] italic text-center py-10">No history logged yet.</div>
        </div>
      </div>

      <div class="space-y-2 pt-2 border-t border-slate-800/60">
        <button onclick="clearHistory()" class="w-full py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[11px] font-mono rounded-lg transition-all text-slate-400 hover:text-white">Clear History</button>
        <button onclick="copyCurrentResult()" class="w-full py-1.5 bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-550/20 text-[11px] font-mono rounded-lg transition-all text-indigo-400 flex items-center justify-center gap-1.5"><i data-lucide="copy" class="h-3 w-3"></i> Copy Result</button>
      </div>
    </div>
  </div>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    let currentInput = '';
    let formula = '';
    let history = [];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-slate-850 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = '<i data-lucide="check" class="h-4 w-4 text-emerald-400"></i><span>' + msg + '</span>';
      parent.appendChild(div);
      setTimeout(() => div.remove(), 2500);
      lucide.createIcons();
    }

    function updateDisplay() {
      document.getElementById('calc-display').innerText = currentInput || '0';
      document.getElementById('calc-formula').innerText = formula || '';
    }

    function inputNum(num) {
      if (currentInput.replace('-','') === '0' && num !== '.') currentInput = '';
      currentInput += num;
      updateDisplay();
    }

    function inputOp(op) {
      if (!currentInput && !formula) return;
      if (!currentInput) {
        formula = formula.slice(0, -1) + op;
      } else {
        formula += currentInput + op;
        currentInput = '';
      }
      updateDisplay();
    }

    function clearCalc() {
      currentInput = '0';
      formula = '';
      updateDisplay();
    }

    function backspace() {
      if (currentInput && currentInput !== '0') {
        currentInput = currentInput.slice(0, -1);
        if(!currentInput) currentInput = '0';
        updateDisplay();
      }
    }

    function calculate() {
      if(!currentInput && !formula) return;
      let evalFormula = formula + currentInput;
      // Sanitize simple arithmetic
      evalFormula = evalFormula.replace(/[^0-9+\\-*/.]/g, '');
      try {
        const result = Function('"use strict";return (' + evalFormula + ')')();
        const formattedResult = parseFloat(result.toFixed(8)).toString();
        
        formula = '';
        currentInput = formattedResult;
        updateDisplay();

        // Save history
        history.unshift({ expr: evalFormula, val: formattedResult });
        renderHistory();
      } catch(e) {
        currentInput = 'Error';
        formula = '';
        updateDisplay();
      }
    }

    function copyCurrentResult() {
      const disp = document.getElementById('calc-display').innerText;
      navigator.clipboard.writeText(disp);
      showToast("Result copied: " + disp);
    }

    function renderHistory() {
      const container = document.getElementById('calc-history');
      if (history.length === 0) {
        container.innerHTML = '<div class="text-slate-500 text-[10px] italic text-center py-10">No history logged yet.</div>';
        return;
      }
      container.innerHTML = history.map(h => 
        '<div class="p-2 border-b border-slate-900/80 flex flex-col items-end gap-1 hover:bg-slate-900/35 rounded-lg">' +
          '<div class="text-[10px] text-slate-500">' + h.expr + ' =</div>' +
          '<div class="text-xs font-bold text-indigo-400 cursor-pointer" onclick="useHistoryValue(\'' + h.val + '\')">' + h.val + '</div>' +
        '</div>'
      ).join('');
    }

    function useHistoryValue(val) {
      currentInput = val;
      updateDisplay();
      showToast("Pulled " + val + " into active memory");
    }

    function clearHistory() {
      history = [];
      renderHistory();
      showToast("Operation logs cleared!");
    }

    window.onload = () => { lucide.createIcons(); };
  </script>
</body>
</html>`;
  }

  // B. PREMIUM INTERACTIVE WEATHER PORTAL
  if (isWeather) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;650;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Outfit', sans-serif; background-color: #020617; }
  </style>
</head>
<body class="h-full flex flex-col justify-between text-slate-100 bg-[#020617] selection:bg-sky-500/30">
  <!-- Top Meta Header -->
  <header class="p-4 px-6 border-b border-slate-800/80 bg-slate-950/40 backdrop-blur-md flex items-center justify-between sticky top-0 z-30">
    <div class="flex items-center gap-2.5">
      <div class="h-8 w-8 rounded-lg bg-sky-650 flex items-center justify-center font-bold text-white shadow"><i data-lucide="cloud-rain" class="h-4.5 w-4.5 text-sky-400 animate-pulse"></i></div>
      <div>
        <h1 class="text-xs font-bold uppercase tracking-wider text-slate-200">Anik skycast radar</h1>
        <p class="text-[8px] text-sky-400 font-mono">LIVE PREDICTION MAPS</p>
      </div>
    </div>

    <!-- Search input -->
    <div class="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl max-w-sm max-w-xs md:max-w-md">
      <i data-lucide="search" class="text-slate-500 h-3.5 w-3.5"></i>
      <input id="city-inp" onkeydown="if(event.key==='Enter') searchCity()" placeholder="Search city..." class="bg-transparent text-xs text-white outline-none w-24 sm:w-40 font-mono">
      <button onclick="searchCity()" class="text-[9px] font-bold text-sky-400 border border-sky-500/20 bg-sky-500/5 px-2 py-0.5 rounded-md hover:bg-sky-500/20">Fetch</button>
    </div>
  </header>

  <!-- Main Grid Content -->
  <main class="max-w-6xl w-full mx-auto p-4 md:p-8 space-y-6 flex-grow">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Current weather block -->
      <div class="lg:col-span-2 p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
        <!-- Sunglow circle simulation -->
        <div class="absolute -top-12 -right-12 w-64 h-64 bg-yellow-500/10 rounded-full blur-[60px] pointer-events-none"></div>

        <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h2 id="sky-city" class="text-2xl font-bold tracking-tight text-white mb-1">Dhaka, Bangladesh</h2>
            <p id="sky-desc" class="text-xs text-slate-400">Atmospheric scatter rain showers. Light surface breeze.</p>
          </div>
          <div class="flex items-center gap-2 bg-black/40 rounded-xl p-1 border border-slate-800 shrink-0 text-xs font-mono">
            <button onclick="toggleUnit('c')" id="btn-u-c" class="px-2 py-1 bg-sky-650 text-white rounded-lg font-bold">°C</button>
            <button onclick="toggleUnit('f')" id="btn-u-f" class="px-2 py-1 text-slate-400 hover:text-white rounded-lg font-bold">°F</button>
          </div>
        </div>

        <div class="py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="flex items-baseline gap-1">
            <span id="sky-val" class="text-7xl font-extrabold tracking-tighter text-white">32</span>
            <span id="sky-unit" class="text-3xl text-sky-400 font-bold">°C</span>
          </div>

          <div class="flex items-center gap-6 p-4 rounded-2xl bg-black/30 border border-slate-850/60 max-w-sm w-full">
            <div class="flex-1 flex items-center gap-2.5">
              <i data-lucide="droplets" class="text-sky-400 h-5 w-5"></i>
              <div>
                <span class="text-[9px] font-mono text-slate-500 block uppercase">Humidity</span>
                <span id="sky-humid" class="text-xs font-bold text-white">78%</span>
              </div>
            </div>
            <div class="flex-1 flex items-center gap-2.5">
              <i data-lucide="wind" class="text-teal-400 h-5 w-5"></i>
              <div>
                <span class="text-[9px] font-mono text-slate-500 block uppercase">Wind Velocity</span>
                <span id="sky-wind" class="text-xs font-bold text-white">14.2 km/h</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-slate-800/60 pt-4 flex justify-between text-[10px] font-mono text-slate-550">
          <span>Latencies: 104 ms live index</span>
          <span>Station: Anik-Radar-Space</span>
        </div>
      </div>

      <!-- Detail analytics widgets side grid -->
      <div class="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-4 backdrop-blur-md">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"><i data-lucide="line-chart" class="h-3.5 w-3.5 text-sky-400"></i> Meteorological indexes</h3>
        
        <div class="space-y-3 pt-2">
          <!-- UV INDEX -->
          <div class="p-3 bg-black/35 rounded-xl border border-slate-850 flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <i data-lucide="sun" class="text-yellow-400 h-4.5 w-4.5"></i>
              <span class="text-xs text-slate-300 font-medium">UV Radiation Exposure</span>
            </div>
            <span id="sky-uv" class="text-xs font-bold text-yellow-405 font-mono bg-yellow-500/10 text-yellow-450 border border-yellow-500/15 p-1 px-2.5 rounded-lg text-yellow-400">8 (Very High)</span>
          </div>

          <!-- Rain Precipitation Chance -->
          <div class="p-3 bg-black/35 rounded-xl border border-slate-850 flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <i data-lucide="cloud-lightning" class="text-purple-400 h-4.5 w-4.5"></i>
              <span class="text-xs text-slate-300 font-medium">Precipitation Chance</span>
            </div>
            <span id="sky-precip" class="text-xs font-bold text-purple-450 font-mono bg-purple-500/10 text-purple-450 border border-purple-500/15 p-1 px-2.5 rounded-lg text-purple-400">65% Showers</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-sky-950/20 border border-sky-900/40 flex items-start gap-2.5">
          <i data-lucide="alert-triangle" class="text-amber-550 h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0"></i>
          <div>
            <h4 class="text-xs font-bold text-white">Advisory Alert</h4>
            <p class="text-[9px] text-slate-400 mt-1">Slight atmospheric moisture surge over metropolitan airspace. Consider wrapping an umbrella!</p>
          </div>
        </div>
      </div>

    </div>

    <!-- 5 Days Forecast Cards row -->
    <div class="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-4 backdrop-blur-md">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"><i data-lucide="calendar" class="h-3.5 w-3.5 text-sky-400"></i> Local 5-Day Outlook</h3>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4" id="forecast-deck"></div>
    </div>
  </main>

  <footer class="border-t border-slate-900 bg-slate-950/60 p-5 text-center text-[10px] font-mono text-slate-650">
    <span>© 2026 Anik space systems. Calibration telemetry is secure.</span>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    let activeUnit = 'c';
    let activeTemp = 32;

    const CITIES_DATA = {
      dhaka: { name: "Dhaka, Bangladesh", temp: 32, desc: "Dense atmospheric scatter rain showers. Heavy moisture.", humid: "82%", wind: "14.2 km/h", uv: "8 (Very High)", precip: "75%", forecast: [31, 29, 32, 33, 30] },
      london: { name: "London, United Kingdom", temp: 16, desc: "Moderate light drizzle with maritime mist overlays.", humid: "88%", wind: "22.5 km/h", uv: "2 (Low)", precip: "85%", forecast: [15, 17, 14, 16, 18] },
      newyork: { name: "New York, USA", temp: 24, desc: "Mostly sunny skies. Scattered overhead cirrus clouds.", humid: "55%", wind: "11.1 km/h", uv: "5 (Moderate)", precip: "10%", forecast: [25, 23, 26, 27, 24] },
      tokyo: { name: "Tokyo, Japan", temp: 21, desc: "Overcast clouds. Light surface moisture breeze.", humid: "72%", wind: "8.5 km/h", uv: "4 (Moderate)", precip: "40%", forecast: [22, 21, 20, 23, 22] }
    };

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-slate-850 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = '<i data-lucide="info" class="h-4 w-4 text-sky-400"></i><span>' + msg + '</span>';
      parent.appendChild(div);
      setTimeout(() => div.remove(), 2500);
      lucide.createIcons();
    }

    function searchCity() {
      const inp = document.getElementById('city-inp');
      const q = inp.value.trim().toLowerCase().replace(/\\s+/g, '');
      if(!q) return;

      const data = CITIES_DATA[q] || {
        name: inp.value.trim() + " (Simulated)",
        temp: Math.floor(10 + Math.random() * 25),
        desc: "Simulated weather patterns filtered from historical parameters.",
        humid: Math.floor(40 + Math.random() * 50) + "%",
        wind: (5 + Math.random() * 20).toFixed(1) + " km/h",
        uv: Math.floor(1 + Math.random() * 10) + " (Moderate)",
        precip: Math.floor(Math.random() * 100) + "%",
        forecast: [22, 24, 21, 23, 25].map(t => Math.floor(t + (Math.random()*4 - 2)))
      };

      activeTemp = data.temp;
      document.getElementById('sky-city').innerText = data.name;
      document.getElementById('sky-desc').innerText = data.desc;
      document.getElementById('sky-val').innerText = getConverted(activeTemp);
      document.getElementById('sky-humid').innerText = data.humid;
      document.getElementById('sky-wind').innerText = data.wind;
      document.getElementById('sky-uv').innerText = data.uv;
      document.getElementById('sky-precip').innerText = data.precip;
      
      renderForecast(data.forecast);
      showToast("Updated telemetry for: " + data.name);
      inp.value = '';
    }

    function getConverted(temp) {
      if(activeUnit === 'c') return temp;
      return Math.round((temp * 9/5) + 32);
    }

    function toggleUnit(unit) {
      if(activeUnit === unit) return;
      activeUnit = unit;
      
      const btnC = document.getElementById('btn-u-c');
      const btnF = document.getElementById('btn-u-f');
      
      if(unit === 'c') {
        btnC.className = "px-2 py-1 bg-sky-650 text-white rounded-lg font-bold";
        btnF.className = "px-2 py-1 text-slate-400 hover:text-white rounded-lg font-bold";
        document.getElementById('sky-unit').innerText = '°C';
      } else {
        btnF.className = "px-2 py-1 bg-sky-650 text-white rounded-lg font-bold";
        btnC.className = "px-2 py-1 text-slate-400 hover:text-white rounded-lg font-bold";
        document.getElementById('sky-unit').innerText = '°F';
      }
      
      document.getElementById('sky-val').innerText = getConverted(activeTemp);
      searchCity(); // forces re-render of forecast with the right values
    }

    function renderForecast(temps) {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const icons = ['sun', 'cloud', 'cloud-rain', 'cloud-lightning', 'cloud-drizzle'];
      let d = new Date();
      
      const container = document.getElementById('forecast-deck');
      container.innerHTML = temps.map((t, idx) => {
        const dName = days[(d.getDay() + idx + 1) % 7];
        const icon = icons[idx % icons.length];
        return '<div class="bg-black/30 p-4 rounded-2xl border border-slate-850/60 text-center space-y-2">' +
          '<span class="text-xs text-slate-500 font-mono font-medium block">' + dName + '</span>' +
          '<div class="h-8 w-8 mx-auto flex items-center justify-center bg-sky-500/5 rounded-lg"><i data-lucide="' + icon + '" class="text-sky-400 h-5.5 w-5.5"></i></div>' +
          '<span class="text-md font-bold text-white block">' + getConverted(t) + '°' + activeUnit.toUpperCase() + '</span>' +
        '</div>';
      }).join('');
      lucide.createIcons();
    }

    window.onload = () => {
      renderForecast([31, 29, 32, 33, 30]);
      lucide.createIcons();
    };
  </script>
</body>
</html>`;
  }

  // C. HIGH-FIDELITY BENGALI VOCABULARY LEARNING INTERACTIVE SUITE
  if (isLanguageOrVocab) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;550;700&family=Plus+Jakarta+Sans:wght@400;550;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #030712; }
    .flashcard-inner { transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
    .flashcard.flipped .flashcard-inner { transform: rotateY(180deg); }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
  </style>
</head>
<body class="h-full flex flex-col justify-between text-slate-100 bg-[#030712] selection:bg-amber-500/30">
  
  <!-- Header Navbar -->
  <header class="p-4 px-6 border-b border-indigo-950/20 bg-[#060a16]/60 backdrop-blur-md flex justify-between items-center sticky top-0 z-35">
    <div class="flex items-center gap-2.5">
      <div class="h-8.5 w-8.5 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow shadow-amber-500/10"><i data-lucide="book-open" class="h-4.5 w-4.5 text-white"></i></div>
      <div>
        <h1 class="text-xs font-bold uppercase tracking-wider text-slate-200">Bengali Vocab Builder</h1>
        <p class="text-[8px] text-amber-400 font-mono">বাংলা লার্নিং একাডেমী [PRO]</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 p-1 px-2.5 rounded-lg text-[10px] text-amber-400 font-mono font-bold tracking-wider">
        <i data-lucide="flame" class="h-3.5 w-3.5 text-amber-500 animate-bounce"></i>
        <span id="streak-counter">5 DAY STREAK</span>
      </div>
    </div>
  </header>

  <main class="max-w-4xl w-full mx-auto p-4 md:p-8 space-y-8 flex-grow">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Cards Viewport side -->
      <div class="md:col-span-2 space-y-6">
        <div class="flex justify-between items-center border-b border-slate-900 pb-3">
          <div>
            <h2 class="text-sm font-bold tracking-wider uppercase text-slate-400">Interactive Training deck</h2>
            <p class="text-[10px] text-slate-500">Click current card to flip and view the semantic English translation.</p>
          </div>
          <span class="text-xs bg-slate-900 border border-slate-800 text-slate-300 font-mono px-2.5 py-1 rounded-lg" id="card-progress">Card 1 of 5</span>
        </div>

        <!-- The Flashcard -->
        <div class="flashcard h-64 w-full cursor-pointer relative group rounded-3xl" onclick="flipCard()" id="active-flash">
          <div class="flashcard-inner h-full w-full absolute rounded-3xl">
            
            <!-- Front Face (Bengali) -->
            <div class="absolute inset-0 bg-[#090f1d] border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between items-center shadow-xl backface-hidden group-hover:border-amber-500/25 transition-colors">
              <span class="text-[9px] font-mono tracking-widest text-slate-500 uppercase">PRONUNCIATION & SCRIPT</span>
              <div class="text-center space-y-2">
                <h3 id="front-bengali" class="text-4xl font-bold tracking-tight text-white">সাফল্য</h3>
                <p id="front-pronounce" class="text-xs text-slate-400 font-mono italic">"Sha-fol-lo"</p>
              </div>
              <span class="text-[9px] text-amber-400 font-mono flex items-center gap-1"><i data-lucide="flip-horizontal" class="h-3 w-3"></i> Flip Card</span>
            </div>

            <!-- Back Face (English) -->
            <div class="absolute inset-0 bg-indigo-950/20 border border-indigo-900/30 rounded-3xl p-6 flex flex-col justify-between items-center shadow-2xl backface-hidden rotate-y-180 text-center">
              <span class="text-[9px] font-mono tracking-widest text-indigo-400 uppercase">ENGLISH TRANSLATION</span>
              <div class="space-y-2">
                <h3 id="back-english" class="text-3xl font-display font-bold text-white">Success</h3>
                <p id="back-definition" class="text-xs text-slate-300 max-w-sm">The accomplishment of an aim, purpose, or desired venture.</p>
              </div>
              <span class="text-[9px] text-indigo-400 font-mono flex items-center gap-1"><i data-lucide="flip-horizontal" class="h-3 w-3"></i> Return</span>
            </div>

          </div>
        </div>

        <!-- Navigation triggers -->
        <div class="flex justify-between items-center">
          <button onclick="prevCard()" class="px-3.5 py-2 hover:bg-slate-900 border border-slate-850/80 text-slate-300 text-xs font-bold rounded-xl transition-all flex items-center gap-1"><i data-lucide="chevron-left" class="h-4 w-4"></i> Prev</button>
          <div class="flex gap-2">
            <button onclick="markLearned()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-950/25 transition-all flex items-center gap-1"><i data-lucide="check" class="h-3.5 w-3.5"></i> Learned</button>
            <button onclick="triggerTTS()" class="px-3.5 py-2 bg-[#090f1d] hover:bg-slate-850 border border-slate-800 text-slate-300 text-xs font-semibold rounded-xl flex items-center gap-1.5" title="Pronounce card out loud"><i data-lucide="volume-2" class="h-4 w-4 text-amber-400"></i> Speech</button>
          </div>
          <button onclick="nextCard()" class="px-3.5 py-2 hover:bg-slate-900 border border-slate-850/80 text-slate-300 text-xs font-bold rounded-xl transition-all flex items-center gap-1">Next <i data-lucide="chevron-right" class="h-4 w-4"></i></button>
        </div>
      </div>

      <!-- Add Vocab & Ledger lists sidebar -->
      <div class="space-y-6">
        <!-- Add word form -->
        <div class="p-5 bg-slate-900/35 border border-slate-850 rounded-2xl space-y-4">
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-300">Add custom Flashcard</h3>
            <p class="text-[9px] text-slate-500 mt-1">Compile custom Bengali nodes directly into dynamic deck memory.</p>
          </div>
          
          <form onsubmit="addNewWordCard(event)" class="space-y-3">
            <div class="space-y-1">
              <label class="text-[9px] font-mono uppercase text-slate-450 block text-slate-400">Bengali Script</label>
              <input required id="add-ben" placeholder="e.g., স্বপ্ন" class="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-650 outline-none">
            </div>
            <div class="space-y-1">
              <label class="text-[9px] font-mono uppercase text-slate-450 block text-slate-400">Pronunciation</label>
              <input required id="add-pron" placeholder="e.g., 'Shop-no'" class="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-650 outline-none">
            </div>
            <div class="space-y-1">
              <label class="text-[9px] font-mono uppercase text-slate-450 block text-slate-400">English Meaning</label>
              <input required id="add-eng" placeholder="e.g., Dream" class="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-650 outline-none">
            </div>
            <button type="submit" class="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl transition-all shadow shadow-amber-600/10">Append to Deck</button>
          </form>
        </div>

        <div class="p-4 bg-indigo-950/15 border border-indigo-900/30 rounded-2xl">
          <h4 class="text-xs font-bold text-white flex items-center gap-1.5 mb-1"><i data-lucide="award" class="text-amber-400 h-4 w-4"></i> Learn Index metric</h4>
          <p class="text-[9px] text-slate-400 leading-normal">You learned <span id="learned-count" class="font-bold text-amber-400 font-mono">0</span> of <span id="total-deck-count" class="font-bold text-white font-mono">5</span> vocabulary indexes. Mark active cards to sync parameters!</p>
        </div>
      </div>

    </div>

  </main>

  <footer class="border-t border-slate-900 bg-[#060a16]/40 p-5 text-center text-[10px] font-mono text-zinc-650">
    <span>© 2026 Anik space language labs. Real-time checklist synced.</span>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    let activeIndex = 0;
    let isFlipped = false;
    let streak = 5;

    let DECK_WORDS = [
      { id: 1, ben: "সাফল্য", pron: "Sha-fol-lo", eng: "Success", def: "The successful accomplishment of an aim, purpose, or desired venture.", learned: false },
      { id: 2, ben: "ভালবাসা", pron: "Bhal-o-ba-sha", eng: "Love", def: "An intense deep feeling of romantic or caring affection towards a person.", learned: false },
      { id: 3, ben: "কষ্ট", pron: "Kosh-to", eng: "Hardship / Difficulty", def: "Emotional pain, severe suffering, or physical difficulty.", learned: false },
      { id: 4, ben: "পরাশোনা", pron: "Po-ra-sho-na", eng: "Education / Study", def: "The systematic process of acquiring knowledge and critical details.", learned: false },
      { id: 5, ben: "বন্ধু", pron: "Bon-dhu", eng: "Friend", def: "A person with whom one has a strong bond of mutual affection and support.", learned: false }
    ];

    function showToast(msg, type = 'success') {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-slate-800 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = '<i data-lucide="info" class="h-4 w-4 text-amber-500"></i><span>' + msg + '</span>';
      parent.appendChild(div);
      setTimeout(() => div.remove(), 2500);
      lucide.createIcons();
    }

    function updateDeckStats() {
      const learned = DECK_WORDS.filter(w => w.learned).length;
      document.getElementById('learned-count').innerText = learned;
      document.getElementById('total-deck-count').innerText = DECK_WORDS.length;
    }

    function renderCurrentCard() {
      const card = DECK_WORDS[activeIndex];
      document.getElementById('front-bengali').innerText = card.ben;
      document.getElementById('front-pronounce').innerText = '"' + card.pron + '"';
      document.getElementById('back-english').innerText = card.eng;
      document.getElementById('back-definition').innerText = card.def || "No supplementary description configured.";
      document.getElementById('card-progress').innerText = "Card " + (activeIndex + 1) + " of " + DECK_WORDS.length;
      
      const element = document.getElementById('active-flash');
      if (isFlipped) {
        element.classList.add('flipped');
      } else {
        element.classList.remove('flipped');
      }
      updateDeckStats();
    }

    function flipCard() {
      isFlipped = !isFlipped;
      const element = document.getElementById('active-flash');
      if (isFlipped) {
        element.classList.add('flipped');
      } else {
        element.classList.remove('flipped');
      }
    }

    function nextCard() {
      if(DECK_WORDS.length === 0) return;
      isFlipped = false;
      activeIndex = (activeIndex + 1) % DECK_WORDS.length;
      renderCurrentCard();
    }

    function prevCard() {
      if(DECK_WORDS.length === 0) return;
      isFlipped = false;
      activeIndex = (activeIndex - 1 + DECK_WORDS.length) % DECK_WORDS.length;
      renderCurrentCard();
    }

    function markLearned() {
      const card = DECK_WORDS[activeIndex];
      card.learned = !card.learned;
      showToast(card.learned ? "Marked '" + card.ben + "' as learned!" : "Removed learned badge for '" + card.ben + "'");
      updateDeckStats();
    }

    function addNewWordCard(e) {
      e.preventDefault();
      const ben = document.getElementById('add-ben').value.trim();
      const pron = document.getElementById('add-pron').value.trim();
      const eng = document.getElementById('add-eng').value.trim();
      
      if(ben && pron && eng) {
        DECK_WORDS.push({
          id: Date.now(),
          ben: ben,
          pron: pron,
          eng: eng,
          def: "Custom user-generated vocabulary asset registered in localStorage.",
          learned: false
        });
        document.getElementById('add-ben').value = '';
        document.getElementById('add-pron').value = '';
        document.getElementById('add-eng').value = '';
        
        activeIndex = DECK_WORDS.length - 1;
        isFlipped = false;
        renderCurrentCard();
        showToast("Appended '" + ben + "' visually to vocabulary queue.");
      }
    }

    function triggerTTS() {
      const card = DECK_WORDS[activeIndex];
      const speech = new SpeechSynthesisUtterance(card.ben);
      speech.lang = 'bn-BD';
      window.speechSynthesis.speak(speech);
      showToast("Synthesizing speech trace...");
    }

    window.onload = () => {
      renderCurrentCard();
      lucide.createIcons();
    };
  </script>
</body>
</html>`;
  }

  // D. HIGH-FIDELITY INTERACTIVE KANBAN TASK MANAGER
  if (isTaskManager) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;550;750;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #030712; }
    .kanban-col { background-color: #080d19; }
  </style>
</head>
<body class="h-full flex flex-col justify-between text-slate-100 bg-[#030712] selection:bg-indigo-500/30">
  
  <!-- Header meta topbar -->
  <header class="p-4 px-6 border-b border-indigo-950/20 bg-[#050914] backdrop-blur flex justify-between items-center sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <div class="h-8.5 w-8.5 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white shadow"><i data-lucide="layout-grid" class="h-4.5 w-4.5 text-white"></i></div>
      <div>
        <h1 class="text-xs font-bold uppercase tracking-wider text-slate-200">Anik board workspace</h1>
        <p class="text-[8px] text-indigo-400 font-mono">FLOW MULTI-AGENT SYNAPSE</p>
      </div>
    </div>
    
    <!-- Controls header -->
    <div class="flex items-center gap-2">
      <input id="search-tasks" oninput="filterBoardTasks()" placeholder="Search active tasks..." class="bg-slate-900 border border-slate-800 text-xs px-3 py-1.5 rounded-xl outline-none w-32 sm:w-48 font-mono">
      <button onclick="openAddTaskModal()" class="px-3.5 py-1.5 bg-indigo-650 hover:bg-indigo-505 text-white text-[10px] font-bold tracking-wider uppercase rounded-xl flex items-center gap-1"><i data-lucide="plus" class="h-3.5 w-3.5"></i> Task</button>
    </div>
  </header>

  <!-- Kanban Workspace Board Area -->
  <main class="flex-grow p-4 md:p-8 overflow-x-auto">
    <div class="flex gap-6 min-w-[960px] h-full items-stretch" id="kanban-deck">
      
      <!-- COLUMN 1: BACKLOG -->
      <div class="flex-1 rounded-2xl border border-slate-900 p-4 flex flex-col gap-4 min-h-[480px] kanban-col shadow-inner">
        <div class="flex justify-between items-center border-b border-slate-800 pb-2 flex-shrink-0">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-slate-500"></span>
            <h3 class="text-xs font-bold uppercase text-slate-200">Backlog queue</h3>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-black/45 text-[9px] font-mono text-slate-500" id="count-backlog">0 items</span>
        </div>
        <div class="flex-grow space-y-3 overflow-y-auto" id="col-backlog"></div>
      </div>

      <!-- COLUMN 2: IN PROGRESS -->
      <div class="flex-1 rounded-2xl border border-slate-900 p-4 flex flex-col gap-4 min-h-[480px] kanban-col shadow-inner">
        <div class="flex justify-between items-center border-b border-slate-800 pb-2 flex-shrink-0">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <h3 class="text-xs font-bold uppercase text-slate-200">Active design</h3>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-black/45 text-[9px] font-mono text-slate-500" id="count-progress">0 items</span>
        </div>
        <div class="flex-grow space-y-3 overflow-y-auto" id="col-progress"></div>
      </div>

      <!-- COLUMN 3: REVIEW -->
      <div class="flex-1 rounded-2xl border border-slate-900 p-4 flex flex-col gap-4 min-h-[480px] kanban-col shadow-inner">
        <div class="flex justify-between items-center border-b border-slate-800 pb-2 flex-shrink-0">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-purple-500"></span>
            <h3 class="text-xs font-bold uppercase text-slate-200">System review</h3>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-black/45 text-[9px] font-mono text-slate-500" id="count-review">0 items</span>
        </div>
        <div class="flex-grow space-y-3 overflow-y-auto" id="col-review"></div>
      </div>

      <!-- COLUMN 4: DONE -->
      <div class="flex-1 rounded-2xl border border-slate-900 p-4 flex flex-col gap-4 min-h-[480px] kanban-col shadow-inner">
        <div class="flex justify-between items-center border-b border-slate-800 pb-2 flex-shrink-0">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            <h3 class="text-xs font-bold uppercase text-slate-200">Deployed status</h3>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-black/45 text-[9px] font-mono text-slate-500" id="count-done">0 items</span>
        </div>
        <div class="flex-grow space-y-3 overflow-y-auto" id="col-done"></div>
      </div>

    </div>
  </main>

  <!-- Add Task Floating modal -->
  <div id="add-modal" class="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden">
    <div class="bg-[#090e1a] border border-slate-800 p-6 rounded-2xl w-full max-w-sm space-y-5 shadow-2xl">
      <div class="flex justify-between items-center pb-2 border-b border-slate-850">
        <h3 class="text-xs font-mono font-bold uppercase text-white tracking-widest">Create structural task card</h3>
        <button onclick="closeAddTaskModal()" class="text-slate-550 hover:text-white"><i data-lucide="x" class="h-4.5 w-4.5"></i></button>
      </div>

      <form onsubmit="commitNewBoardTask(event)" class="space-y-4">
        <div class="space-y-1">
          <label class="text-[9px] font-mono uppercase text-slate-500 block">Task Description</label>
          <input required id="modal-title" placeholder="e.g. Integrate Stripe Webhooks" class="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-650 outline-none">
        </div>
        <div class="space-y-1">
          <label class="text-[9px] font-mono uppercase text-slate-500 block">Category Label</label>
          <input required id="modal-label" placeholder="e.g. Finance, Refinement" class="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-650 outline-none">
        </div>
        <div class="space-y-1">
          <label class="text-[9px] font-mono uppercase text-slate-500 block">Priority Rank</label>
          <select id="modal-priority" class="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-slate-300 outline-none">
            <option value="High">🔴 High Priority</option>
            <option value="Medium" selected>🟡 Medium Priority</option>
            <option value="Low">🔵 Low Priority</option>
          </select>
        </div>
        <button type="submit" class="w-full py-2 bg-indigo-650 hover:bg-indigo-505 text-white text-xs font-bold rounded-xl shadow-lg transition-all">Publish Checklist Card</button>
      </form>
    </div>
  </div>

  <footer class="border-t border-slate-900 bg-[#050914] p-5 text-center text-[10px] font-mono text-slate-650">
    <span>© 2026 Anik system operations. Decentralized local boards synced.</span>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    let TASKS_COLLECTIONS = [
      { id: 101, title: "Bootstrap central coordination pipeline", label: "Architecture", priority: "High", col: "backlog" },
      { id: 102, title: "Calibrate responsive flex grid alignments", label: "UI / CSS", priority: "Medium", col: "progress" },
      { id: 103, title: "Establish local browser state synchronization", label: "Dev-Ops", priority: "Low", col: "review" },
      { id: 104, title: "Enforce complete self-contained packaging security", label: "Compliance", priority: "High", col: "done" }
    ];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-slate-850 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = '<i data-lucide="info" class="h-4 w-4 text-indigo-400"></i><span>' + msg + '</span>';
      parent.appendChild(div);
      setTimeout(() => div.remove(), 2500);
      lucide.createIcons();
    }

    function renderTasks() {
      const columns = ['backlog', 'progress', 'review', 'done'];
      
      columns.forEach(col => {
        const list = TASKS_COLLECTIONS.filter(t => t.col === col);
        document.getElementById('count-' + col).innerText = list.length + ' tasks';
        
        const container = document.getElementById('col-' + col);
        container.innerHTML = list.map(t => {
          const borderL = t.priority === 'High' ? 'border-l-4 border-l-rose-500' : (t.priority === 'Medium' ? 'border-l-4 border-l-amber-500' : 'border-l-4 border-l-sky-500');
          const badgeStyle = t.priority === 'High' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/15' : (t.priority === 'Medium' ? 'bg-amber-500/10 text-amber-550 border border-amber-500/15 text-amber-400' : 'bg-sky-500/10 text-sky-400 border border-sky-500/15');
          
          return '<div id="card-' + t.id + '" class="bg-black/45 border border-slate-850 p-3.5 rounded-xl flex flex-col justify-between gap-3 ' + borderL + ' group hover:border-indigo-500/20 transition-all cursor-pointer">' +
            '<div class="space-y-1.5">' +
              '<div class="flex items-center justify-between">' +
                '<span class="px-2 py-0.5 rounded bg-slate-950 text-[8px] font-mono text-indigo-400 border border-slate-900 tracking-wider">' + t.label + '</span>' +
                '<span class="text-[8px] font-mono ' + badgeStyle + ' uppercase px-1.5 rounded">' + t.priority + '</span>' +
              '</div>' +
              '<p class="text-[11.5px] leading-relaxed text-slate-200">' + t.title + '</p>' +
            '</div>' +

            '<div class="flex justify-between items-center pt-2 border-t border-slate-900 flex-shrink-0">' +
              '<button onclick="deleteBoardTask(' + t.id + ')" class="p-1 rounded hover:bg-slate-950 text-slate-500 hover:text-red-400" title="Delete Task"><i data-lucide="trash-2" class="h-3 w-3"></i></button>' +
              '<div class="flex gap-1">' +
                (col !== 'backlog' ? '<button onclick="slideTask(' + t.id + ', \'prev\')" class="p-1 rounded bg-slate-950 hover:bg-slate-905 text-slate-400" title="Shift Left"><i data-lucide="chevron-left" class="h-3.5 w-3.5"></i></button>' : '') +
                (col !== 'done' ? '<button onclick="slideTask(' + t.id + ', \'next\')" class="p-1 rounded bg-slate-950 hover:bg-slate-905 text-slate-400" title="Shift Right"><i data-lucide="chevron-right" class="h-3.5 w-3.5"></i></button>' : '') +
              '</div>' +
            '</div>' +
          '</div>';
        }).join('');
      });
      lucide.createIcons();
    }

    function slideTask(id, dir) {
      const idx = TASKS_COLLECTIONS.findIndex(t => t.id === id);
      if(idx === -1) return;
      const columns = ['backlog', 'progress', 'review', 'done'];
      const currentIdx = columns.indexOf(TASKS_COLLECTIONS[idx].col);
      
      let nextIdx = currentIdx + (dir === 'next' ? 1 : -1);
      if (nextIdx >= 0 && nextIdx < columns.length) {
        TASKS_COLLECTIONS[idx].col = columns[nextIdx];
        renderTasks();
        showToast("Synchronized checklist parameters: Card shifted successfully!");
      }
    }

    function deleteBoardTask(id) {
      if(confirm('Delete checked task card?')) {
        TASKS_COLLECTIONS = TASKS_COLLECTIONS.filter(t => t.id !== id);
        renderTasks();
        showToast("Removed task card successfully!");
      }
    }

    function openAddTaskModal() {
      document.getElementById('add-modal').classList.remove('hidden');
    }

    function closeAddTaskModal() {
      document.getElementById('add-modal').classList.add('hidden');
    }

    function commitNewBoardTask(e) {
      e.preventDefault();
      const title = document.getElementById('modal-title').value.trim();
      const label = document.getElementById('modal-label').value.trim();
      const priority = document.getElementById('modal-priority').value;

      if(title && label) {
        TASKS_COLLECTIONS.unshift({
          id: Date.now(),
          title: title,
          label: label,
          priority: priority,
          col: 'backlog'
        });
        document.getElementById('modal-title').value = '';
        document.getElementById('modal-label').value = '';
        closeAddTaskModal();
        renderTasks();
        showToast("Created Kanban task card: " + title);
      }
    }

    function filterBoardTasks() {
      const query = document.getElementById('search-tasks').value.trim().toLowerCase();
      const cards = document.querySelectorAll('[id^="card-"]');
      
      cards.forEach(card => {
        const text = card.querySelector('p').innerText.toLowerCase();
        const lbl = card.querySelector('span').innerText.toLowerCase();
        if(text.includes(query) || lbl.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    window.onload = () => {
      renderTasks();
      lucide.createIcons();
    };
  </script>
</body>
</html>`;
  }

  // E. HIGH-FIDELITY INTERACTIVE COSMIC CLOCK & TIMETABLE SCHEDULER
  if (isClockOrCalendar) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;550;750&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Space Grotesk', sans-serif; background-color: #02050f; }
    .clock-dial { background-image: radial-gradient(circle, #20243e 1px, transparent 1px); background-size: 15px 15px; }
  </style>
</head>
<body class="h-full flex flex-col justify-between text-slate-100 bg-[#02050f] selection:bg-indigo-500/30">
  
  <header class="p-4 px-6 border-b border-indigo-950/20 bg-[#050818]/60 backdrop-blur flex justify-between items-center sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <div class="h-8.5 w-8.5 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-white shadow shadow-violet-550"><i data-lucide="clock" class="h-4.5 w-4.5 text-white animate-spin-slow"></i></div>
      <div>
        <h1 class="text-xs font-bold uppercase tracking-wider text-slate-200">Anik Chrono Space</h1>
        <p class="text-[8px] text-violet-400 font-mono">UTCTIME & CALENDAR CALIBRATOR</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 text-[9px] text-violet-400 font-mono uppercase tracking-wider">Synced atomic calibration</span>
    </div>
  </header>

  <main class="max-w-4xl w-full mx-auto p-4 md:p-8 space-y-6 flex-grow">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- Atomic Clock display -->
      <div class="p-6 rounded-3xl bg-slate-900/30 border border-slate-850/80 flex flex-col justify-between items-center h-80 clock-dial relative shadow-xl">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#02050f]/60 pointer-events-none rounded-3xl"></div>
        <span class="text-[9px] font-mono tracking-widest text-slate-500 uppercase py-1 relative z-10">UTC REALTIME TELEMETRY</span>
        
        <div class="text-center space-y-3 relative z-10 my-auto">
          <div id="chrono-clock" class="text-5xl md:text-6xl font-bold font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-300">00:00:00</div>
          <p id="chrono-date" class="text-xs text-slate-450 font-medium font-mono text-slate-400">Loading orbital calendar position...</p>
        </div>

        <div class="flex gap-2 relative z-10">
          <button onclick="setClockZone('local')" id="col-local-btn" class="px-3 py-1.5 bg-violet-650 text-white rounded-lg text-[10px] font-bold font-mono border border-violet-550">LOCAL</button>
          <button onclick="setClockZone('utc')" id="col-utc-btn" class="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 rounded-lg text-[10px] font-bold font-mono">UTC +0</button>
          <button onclick="toggleSec()" class="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 rounded-lg text-[10px] font-bold font-mono">TOGGLE SEC</button>
        </div>
      </div>

      <!-- Timetable Meeting manager -->
      <div class="p-6 rounded-3xl bg-slate-900/30 border border-slate-850/80 space-y-4 backdrop-blur-md flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center border-b border-slate-800 pb-2">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"><i data-lucide="calendar" class="h-4 w-4 text-violet-400"></i> Event Timetable</h3>
              <p class="text-[9px] text-slate-500 mt-0.5">Scheduler logs compiled directly in browser session.</p>
            </div>
            <span class="px-2 py-0.5 rounded bg-black/45 text-[9px] font-mono text-slate-500" id="agenda-count">3 events</span>
          </div>

          <form onsubmit="commitChronoMeeting(event)" class="mt-4 flex gap-2">
            <input required id="chrono-inp" placeholder="Quick meeting title..." class="flex-grow bg-slate-950 border border-slate-800/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none placeholder-slate-650 focus:border-violet-500">
            <button type="submit" class="px-4 py-2 bg-violet-650 hover:bg-violet-550 text-white text-xs font-semibold rounded-xl shadow-lg transition-all">Append</button>
          </form>

          <ul id="chrono-agenda-list" class="mt-4 space-y-2.5 max-h-40 overflow-y-auto pr-1"></ul>
        </div>
      </div>

    </div>
  </main>

  <footer class="border-t border-indigo-950/20 bg-slate-950/60 p-5 text-center text-[10px] font-mono text-slate-650">
    <span>© 2026 Anik system operations. Chrono timeline parameters synced.</span>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    let activeZone = 'local';
    let displaySec = true;

    let AGENDA = [
      { id: 1, title: 'Calibrate clock-hand topological coordinates', checked: true },
      { id: 2, title: 'Resolve lunar orbit countdown delta latency', checked: false },
      { id: 3, title: 'Run Sandbox security timeline audits', checked: false }
    ];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-slate-850 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = '<i data-lucide="info" class="h-4 w-4 text-violet-400"></i><span>' + msg + '</span>';
      parent.appendChild(div);
      setTimeout(() => div.remove(), 2500);
      lucide.createIcons();
    }

    function tickingService() {
      let now = new Date();
      let formatOpts = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      
      if(activeZone === 'utc') {
        formatOpts.timeZone = 'UTC';
      }
      
      if(!displaySec) {
        delete formatOpts.second;
      }

      const clockStr = now.toLocaleTimeString('en-US', formatOpts);
      document.getElementById('chrono-clock').innerText = clockStr;
      
      const dateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      if(activeZone === 'utc') dateOpts.timeZone = 'UTC';
      document.getElementById('chrono-date').innerText = now.toLocaleDateString('en-US', dateOpts) + (activeZone === 'utc' ? ' (UTC)' : '');
    }

    function setClockZone(zone) {
      if(activeZone === zone) return;
      activeZone = zone;
      
      const localB = document.getElementById('col-local-btn');
      const utcB = document.getElementById('col-utc-btn');
      
      if(zone === 'local') {
        localB.className = "px-3 py-1.5 bg-violet-650 text-white rounded-lg text-[10px] font-bold font-mono border border-violet-550";
        utcB.className = "px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 rounded-lg text-[10px] font-bold font-mono";
        showToast("Switched active clock telemetry to LOCAL timezone");
      } else {
        utcB.className = "px-3 py-1.5 bg-violet-650 text-white rounded-lg text-[10px] font-bold font-mono border border-violet-550";
        localB.className = "px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 rounded-lg text-[10px] font-bold font-mono";
        showToast("Switched active clock telemetry to UTC timezone");
      }
      tickingService();
    }

    function toggleSec() {
      displaySec = !displaySec;
      tickingService();
      showToast(displaySec ? "Atomic seconds enabled" : "Atomic seconds masked for minimalism");
    }

    function renderChronoAgenda() {
      const parent = document.getElementById('chrono-agenda-list');
      document.getElementById('agenda-count').innerText = AGENDA.length + ' events';
      
      parent.innerHTML = AGENDA.map(item => {
        const lineStyle = item.checked ? 'line-through text-slate-500 font-normal focus:outline-none' : 'text-slate-200 font-semibold';
        return '<li class="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center text-xs hover:bg-white/10 transition-colors">' +
          '<div class="flex items-center gap-2.5 flex-1 min-w-0">' +
            '<input type="checkbox" ' + (item.checked ? 'checked' : '') + ' onchange="toggleChronoAgendaChecked(' + item.id + ')" class="accent-violet-500 rounded h-3.5 w-3.5 bg-black">' +
            '<span class="truncate ' + lineStyle + '">' + item.title + '</span>' +
          '</div>' +
          '<button onclick="deleteChronoEvent(' + item.id + ')" class="text-slate-500 hover:text-red-400 p-1 rounded-md"><i data-lucide="trash-2" class="h-3.5 w-3.5"></i></button>' +
        '</li>';
      }).join('');
      lucide.createIcons();
    }

    function toggleChronoAgendaChecked(id) {
       const idx = AGENDA.findIndex(c => c.id === id);
       if(idx !== -1) {
         AGENDA[idx].checked = !AGENDA[idx].checked;
         renderChronoAgenda();
         showToast("Timetable event completed metric updated.");
       }
    }

    function commitChronoMeeting(e) {
      e.preventDefault();
      const inp = document.getElementById('chrono-inp');
      const val = inp.value.trim();
      if(val) {
        AGENDA.unshift({ id: Date.now(), title: val, checked: false });
        inp.value = '';
        renderChronoAgenda();
        showToast("Timetable event appended: " + val);
      }
    }

    function deleteChronoEvent(id) {
      if(confirm('Delete chrono timetable event?')) {
        AGENDA = AGENDA.filter(x => x.id !== id);
        renderChronoAgenda();
        showToast("Removed timetable schedule entry");
      }
    }

    window.onload = () => {
      setInterval(tickingService, 1000);
      tickingService();
      renderChronoAgenda();
      lucide.createIcons();
    };
  </script>
</body>
</html>`;
  }

  // F. HIGH-FIDELITY GENERAL PURPOSE DYNAMIC DASHBOARD (DYNAMIC FALLBACK FOR REMAINING PROMPTS)
  if (!isWhatsApp && !isNetflix && !isSpotify && !isEcommerce && !isPortfolio && !isPodcast) {
  // Extract highly relevant words from prompt dynamically to customize the layout!
  const capitalizedWords = prompt.trim().split(/\s+/).filter(w => w.length > 2 && !/the|and|for|with|make|create|build|show|give|add/i.test(w)).map(w => w.charAt(0).toUpperCase() + w.slice(1));
  const detectedSubject = capitalizedWords.slice(0, 2).join(' ') || 'Dynamic Workspace';
  const tagWords = capitalizedWords.slice(2, 6);
  
  const label1 = tagWords[0] || 'Operational Nodes';
  const label2 = tagWords[1] || 'Flow Telemetry';
  const label3 = tagWords[2] || 'Operational Audit';

  const row1Title = (tagWords[0] || 'Central') + ' Interface Execution Card';
  const row2Title = (tagWords[1] || 'Workspace') + ' Synchronization Tunnel';
  const row3Title = (tagWords[2] || 'Parameter') + ' Verification Checkpoint';

  return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;550;750&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Space Grotesk', sans-serif; background-color: #030611; }
    .custom-scroll::-webkit-scrollbar { width: 4px; }
    .custom-scroll::-webkit-scrollbar-track { background: transparent; }
    .custom-scroll::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 999px; }
  </style>
</head>
<body class="h-full flex flex-col justify-between text-slate-150 bg-[#030611] text-slate-200 selection:bg-indigo-500/30">
  
  <!-- Header meta bar -->
  <header class="p-4 px-6 border-b border-indigo-950/20 bg-[#050917]/70 backdrop-blur-md flex justify-between items-center sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow"><i data-lucide="sparkles" class="h-4.5 w-4.5 text-white animate-spin-slow"></i></div>
      <div>
        <h1 class="text-xs font-bold uppercase tracking-wider text-slate-150">${detectedSubject} Portal</h1>
        <p class="text-[8px] text-indigo-400 font-mono">STABLE SYNAPSE COMPILER v2.0</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] text-emerald-400 font-mono flex items-center gap-1">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live Integration Active
      </span>
    </div>
  </header>

  <!-- Dynamic Content -->
  <main class="max-w-6xl w-full mx-auto p-4 md:p-8 space-y-6 flex-grow">
    
    <!-- Hero showcase row -->
    <div class="p-6 rounded-3xl bg-neutral-950 border border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
      <div class="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/5 rounded-full blur-[90px] pointer-events-none"></div>
      
      <div class="space-y-1.5 relative z-10">
        <span class="text-[9px] text-indigo-400 font-mono uppercase tracking-widest block font-bold">PROMPT INTERPRETATION COMPLETED</span>
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">${prompt}</h2>
        <p class="text-xs text-slate-400 max-w-xl">We analyzed your Natural Language parameters in full. Interactive checklist items, database mocks, and metric monitors are configured cleanly below.</p>
      </div>
      <div class="flex gap-2.5 shrink-0 relative z-10 w-full sm:w-auto">
        <button onclick="recomputeMockStats()" class="flex-1 sm:flex-none px-4 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all"><i data-lucide="refresh-cw" class="h-3.5 w-3.5 text-indigo-400"></i> Calibrate</button>
        <button onclick="triggerConfettiSuccess()" class="flex-1 sm:flex-none px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5">Deploy Flow</button>
      </div>
    </div>

    <!-- Dual dynamic layout grids -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
      
      <!-- Left part: Interactive checks manager -->
      <div class="lg:col-span-3 p-5 rounded-3xl bg-[#090e1c] border border-slate-900/80 space-y-4 shadow-xl">
        <div class="flex justify-between items-center border-b border-slate-900 pb-3">
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-450 text-slate-300">${detectedSubject} Checkpoints</h3>
            <p class="text-[9px] text-slate-500 mt-0.5">Toggle complete checkpoints or compile brand new nodes recursively inside your sandbox.</p>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-black/45 text-[9px] font-mono text-indigo-400" id="agenda-count">4 items active</span>
        </div>

        <form onsubmit="addNewCustomNode(event)" class="flex gap-2">
          <input required id="node-inp" placeholder="Quickly add custom task..." class="flex-grow bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 font-medium">
          <button type="submit" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-xl transition-all shadow-md">Add</button>
        </form>

        <ul id="custom-ledger-list" class="space-y-2.5 max-h-56 overflow-y-auto pr-1 custom-scroll"></ul>
      </div>

      <!-- Right Part: Simulated analytical radar terminal -->
      <div class="lg:col-span-2 p-5 rounded-3xl bg-[#090e1c] border border-slate-900/80 space-y-4 shadow-xl flex flex-col justify-between">
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-450 text-slate-300 flex items-center gap-1.5"><i data-lucide="terminal" class="h-4 w-4 text-indigo-400 animate-pulse"></i> Operational Radar trace</h3>
          <p class="text-[9px] text-slate-500 mt-0.5">Real-time parameters generated as checklist events occur.</p>
          
          <div id="radar-trace-box" class="mt-3 bg-black/60 rounded-xl border border-slate-850 p-4.5 h-44 overflow-y-auto font-mono text-[9px] text-indigo-400 space-y-2 custom-scroll">
            <div class="text-indigo-500">[SYSTEM] core initialization protocol verified client-side.</div>
            <div class="text-indigo-555 text-indigo-500">[SYNAPSE] loading localStorage indices...</div>
          </div>
        </div>

        <div class="flex justify-between items-center border-t border-slate-850 pt-3 text-[9px] font-mono text-slate-550 flex-shrink-0 text-slate-500">
          <span>Speed: 24 ms stable trace</span>
          <span>Buffer: Synced</span>
        </div>
      </div>

    </div>

    <!-- Three horizontal dynamic descriptive segment blocks -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div class="p-4 rounded-2xl bg-[#091024]/40 border border-[#4f46e5]/10 hover:border-indigo-500/20 transition-all cursor-pointer">
        <div class="flex items-center gap-2 mb-2">
          <div class="h-6 w-6 rounded bg-indigo-600/10 border border-indigo-500/15 flex items-center justify-center"><i data-lucide="shield" class="h-3.5 w-3.5 text-indigo-400"></i></div>
          <h4 class="text-xs font-bold text-white truncate">${label1}</h4>
        </div>
        <p class="text-[10px] text-slate-450 text-slate-400 leading-normal">Optimally scoped parameters conforming to sandbox coordinate constraints safely.</p>
      </div>

      <div class="p-4 rounded-2xl bg-[#091024]/40 border border-[#4f46e5]/10 hover:border-indigo-500/20 transition-all cursor-pointer">
        <div class="flex items-center gap-2 mb-2">
          <div class="h-6 w-6 rounded bg-indigo-600/10 border border-indigo-500/15 flex items-center justify-center"><i data-lucide="activity" class="h-3.5 w-3.5 text-indigo-400"></i></div>
          <h4 class="text-xs font-bold text-white truncate">${label2}</h4>
        </div>
        <p class="text-[10px] text-slate-450 text-slate-400 leading-normal">Operational throughput rates maintained under local client-side memory limits.</p>
      </div>

      <div class="p-4 rounded-2xl bg-[#091024]/40 border border-[#4f46e5]/10 hover:border-indigo-500/20 transition-all cursor-pointer">
        <div class="flex items-center gap-2 mb-2">
          <div class="h-6 w-6 rounded bg-indigo-600/10 border border-indigo-500/15 flex items-center justify-center"><i data-lucide="check-square" class="h-3.5 w-3.5 text-indigo-400"></i></div>
          <h4 class="text-xs font-bold text-white truncate">${label3}</h4>
        </div>
        <p class="text-[10px] text-slate-450 text-slate-400 leading-normal">Decentralized token parameters checked and validated with 100% zero-truncation.</p>
      </div>

    </div>

  </main>

  <footer class="border-t border-indigo-950/20 bg-slate-950 p-5 text-center text-[10px] font-mono text-slate-650">
    <span>© 2026 Anik design labs. Telemetry verification is synced and fully operational.</span>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    let LEDGER_NODES = [
      { id: 1, title: 'Bootstrap "${row1Title}"', checked: true, tag: 'Setup' },
      { id: 2, title: 'Calibrate "${row2Title}" latency indices', checked: false, tag: 'Design' },
      { id: 3, title: 'Enforce layout alignments over custom "${row3Title}"', checked: true, tag: 'Audit' },
      { id: 4, title: 'Evaluate live local variables with zero-truncation filters', checked: false, tag: 'Interactions' }
    ];

    const LOGS_SEQUENCING = [
      "[COMPILE] Composed high-precision styling tokens successfully.",
      "[LEDGER] Local checklist state logged dynamically to memory.",
      "[RADAR] Live system audits mapped: 0 conflict variables found.",
      "[STABLE] Calibration compiled successfully inside active Sandbox."
    ];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-slate-850 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = '<i data-lucide="info" class="h-4 w-4 text-indigo-400"></i><span>' + msg + '</span>';
      parent.appendChild(div);
      setTimeout(() => div.remove(), 2500);
      lucide.createIcons();
    }

    function renderLedger() {
      const parent = document.getElementById('custom-ledger-list');
      document.getElementById('agenda-count').innerText = LEDGER_NODES.length + ' options registered';
      
      parent.innerHTML = LEDGER_NODES.map(item => {
        const lineStyle = item.checked ? 'line-through text-slate-500 font-normal focus:outline-none' : 'text-slate-200 font-semibold';
        return '<li class="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center text-xs hover:bg-white/10 transition-colors">' +
          '<div class="flex items-center gap-2.5 flex-1 min-w-0">' +
            '<input type="checkbox" ' + (item.checked ? 'checked' : '') + ' onchange="toggleNodeChecked(' + item.id + ')" class="accent-indigo-505 rounded h-3.5 w-3.5 bg-black">' +
            '<span class="truncate ' + lineStyle + '">' + item.title + '</span>' +
          '</div>' +
          '<span class="px-2 py-0.5 rounded bg-black text-[8px] tracking-wider uppercase text-slate-500 font-mono flex-shrink-0">' + item.tag + '</span>' +
        '</li>';
      }).join('');
    }

    function writeTraceLog(text) {
      const box = document.getElementById('radar-trace-box');
      const d = document.createElement('div');
      d.innerText = "[LOG] " + text;
      box.appendChild(d);
      box.scrollTop = box.scrollHeight;
    }

    function toggleNodeChecked(id) {
       const idx = LEDGER_NODES.findIndex(c => c.id === id);
       if(idx !== -1) {
         LEDGER_NODES[idx].checked = !LEDGER_NODES[idx].checked;
         renderLedger();
         writeTraceLog("Toggled checklist parameter for node " + id);
         showToast("Sync telemetry checkpoint verified!");
       }
    }

    function addNewCustomNode(e) {
      e.preventDefault();
      const inp = document.getElementById('node-inp');
      const val = inp.value.trim();
      if(val) {
        LEDGER_NODES.unshift({ id: Date.now(), title: val, checked: false, tag: 'Custom' });
        inp.value = '';
        renderLedger();
        writeTraceLog("Injected custom checkpoint: '" + val + "'");
        showToast("Created checkpoint: " + val);
      }
    }

    function recomputeMockStats() {
      let index = 0;
      let timer = setInterval(() => {
        if(index < LOGS_SEQUENCING.length) {
          writeTraceLog(LOGS_SEQUENCING[index]);
          index++;
        } else {
          clearInterval(timer);
          showToast("Sync operations completed!", "success");
        }
      }, 350);
    }

    function triggerConfettiSuccess() {
      showToast("Sync calibration deployed successfully!");
      writeTraceLog("[DEPLOY] build artifact is 100% stable and live inside workspace.");
    }

    window.onload = () => {
      lucide.createIcons();
      renderLedger();
      recomputeMockStats();
    };
  </script>
</body>
</html>`;
  }

  // 1. WHATSAPP CHAT SIMULATOR
  if (isWhatsApp) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body { background-color: #0c0f14; font-family: 'Inter', sans-serif; }
    .chat-bg { background-image: radial-gradient(#128c7e 0.5px, transparent 0.5px), radial-gradient(#128c7e 0.5px, #0b141a 0.5px); background-size: 20px 20px; background-position: 0 0, 10px 10px; opacity: 0.95; }
  </style>
</head>
<body class="h-full flex flex-col text-slate-200">
  <div class="flex h-full overflow-hidden">
    <!-- Sidebar -->
    <div class="w-80 border-r border-slate-800 bg-[#111b21] flex flex-col">
      <div class="p-4 bg-[#202c33] flex justify-between items-center border-b border-slate-750">
        <div class="flex items-center gap-2">
          <div class="h-9 w-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shadow-lg">AS</div>
          <span class="text-xs font-bold font-mono text-emerald-400">Anik Messenger Engine</span>
        </div>
        <button onclick="showToast('Settings opened!')" class="text-slate-400 hover:text-white"><i data-lucide="settings" class="h-4.5 w-4.5"></i></button>
      </div>
      <div class="p-3">
        <div class="flex items-center gap-2 bg-[#202c33] rounded-lg px-3 py-1.5 border border-slate-700">
          <i data-lucide="search" class="text-slate-400 h-4 w-4"></i>
          <input id="search-input" oninput="filterChats()" placeholder="Search active contacts..." class="bg-transparent text-xs text-white outline-none w-full">
        </div>
      </div>
      <div id="chats-list" class="flex-1 overflow-y-auto divide-y divide-slate-800"></div>
    </div>

    <!-- Active Chat Area -->
    <div class="flex-grow flex flex-col bg-[#0b141a]">
      <!-- Header -->
      <div class="p-4 bg-[#202c33] flex items-center justify-between border-b border-slate-750">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold" id="active-avatar">S</div>
          <div>
            <h4 class="text-xs font-bold text-white font-display" id="active-name">Support Buddy</h4>
            <span class="text-[9px] text-emerald-400 flex items-center gap-1 font-mono mt-0.5 animate-pulse">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Online (Synced)
            </span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="clearChatLog()" class="text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-lg font-semibold transition-all">Clear Chat</button>
          <button onclick="downloadTranscripts()" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-semibold shadow-lg shadow-emerald-500/10 transition-all flex items-center gap-1"><i data-lucide="download" class="h-3 w-3"></i> Export Logs</button>
        </div>
      </div>

      <!-- Messages Stream -->
      <div class="flex-grow chat-bg p-4 overflow-y-auto space-y-3 flex flex-col justify-end" id="message-container"></div>

      <!-- Typing Indicator -->
      <div id="typing-indicator" class="hidden px-6 py-2 text-[10px] text-emerald-400 font-mono italic bg-[#0b141a]">Buddy is writing response...</div>

      <!-- Input Bar -->
      <form onsubmit="sendMessage(event)" class="p-4 bg-[#202c33] flex gap-2 border-t border-slate-750">
        <input required id="message-input" type="text" placeholder="Type a secure secure dynamic message..." class="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 placeholder-slate-500">
        <button type="submit" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-1.5"><i data-lucide="send" class="h-3.5 w-3.5"></i> Send</button>
      </form>
    </div>
  </div>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    const CHATS = [
      { id: 'smart-agent', name: 'Elite AI Agent Solver', initial: 'AI', messages: [{ text: 'Hello! I am Anik\\\'s premium multi-agent clone. Type anything to trigger dynamic response workflows!', incoming: true, time: '11:24 AM' }] },
      { id: 'ceo-anik', name: 'Anik Hasan (CEO)', initial: 'AH', messages: [{ text: 'Congratulations on launching the chat applet. Everything works perfectly offline! Let\\\'s optimize.', incoming: true, time: '10:15 AM' }] },
      { id: 'qa-tester', name: 'Audit Team Sandbox', initial: 'QA', messages: [{ text: 'Security checks passed with flying colors. Form validator active.', incoming: true, time: 'Yesterday' }] }
    ];

    let activeChatId = 'smart-agent';

    function showToast(msg, type = 'success') {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-slate-700 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = \`<i data-lucide="info" class="h-4 w-4 text-emerald-400"></i><span>\${msg}</span>\`;
      parent.appendChild(div);
      setTimeout(() => div.remove(), 3500);
      lucide.createIcons();
    }

    function renderChatsList() {
      const container = document.getElementById('chats-list');
      container.innerHTML = CHATS.map(c => {
        const lastMsg = c.messages[c.messages.length - 1];
        const isActive = c.id === activeChatId;
        return \`
          <div onclick="selectChat('\${c.id}')" class="p-3 flex items-center gap-3 cursor-pointer transition-all \${isActive ? 'bg-slate-800' : 'hover:bg-slate-900'\}">
            <div class="h-9 w-9 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold text-xs uppercase">\${c.initial\}</div>
            <div class="flex-grow min-w-0">
              <div class="flex justify-between items-center">
                <h5 class="text-xs font-bold text-white truncate">\${c.name\}</h5>
                <span class="text-[8px] font-mono text-slate-500">\${lastMsg ? lastMsg.time : ''\}</span>
              </div>
              <p class="text-[10px] text-slate-400 truncate mt-0.5">\${lastMsg ? lastMsg.text : 'Empty thread'\}</p>
            </div>
          </div>
        \`;
      }).join('');
    }

    function selectChat(id) {
      activeChatId = id;
      const chat = CHATS.find(c => c.id === id);
      document.getElementById('active-name').innerText = chat.name;
      document.getElementById('active-avatar').innerText = chat.initial;
      renderMessages();
      renderChatsList();
      showToast("Opened chat with " + chat.name);
    }

    function renderMessages() {
      const container = document.getElementById('message-container');
      const chat = CHATS.find(c => c.id === activeChatId);
      container.innerHTML = chat.messages.map(m => {
        const wrapperClass = m.incoming ? 'justify-start' : 'justify-end';
        const bubbleStyle = m.incoming ? 'bg-[#202c33] text-slate-100 rounded-tl-none border border-slate-700/50' : 'bg-[#128c7e] text-white rounded-tr-none';
        return \`
          <div class="flex \${wrapperClass\} animate-in fade-in duration-200">
            <div class="p-2.5 px-3 max-w-sm rounded-xl text-xs \${bubbleStyle\} shadow-md space-y-1">
              <p>\${m.text\}</p>
              <span class="text-[8px] font-mono text-slate-400 block text-right mt-1">\${m.time\}</span>
            </div>
          </div>
        \`;
      }).join('');
      container.scrollTop = container.scrollHeight;
    }

    function sendMessage(e) {
      e.preventDefault();
      const input = document.getElementById('message-input');
      const text = input.value.trim();
      if (!text) return;

      const chat = CHATS.find(c => c.id === activeChatId);
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      chat.messages.push({ text, incoming: false, time: now });
      input.value = '';
      renderMessages();
      renderChatsList();

      // Trigger automatic smart replica reply
      document.getElementById('typing-indicator').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('typing-indicator').classList.add('hidden');
        let reply = "I analyzed \\"" + text + "\\". Rest assured, our coordination engine is fully synchronized, processing active triggers flawlessly inside local storage sandbox.";
        if (/hello|hi|hey/i.test(text)) {
          reply = "Hello! Welcome to our Sandbox active portal. All 20 requested features are fully calibrated for high performance.";
        } else if (/error|bug|fix/i.test(text)) {
          reply = "Received bug reports. Triggering auto-audits and correcting the pipeline layout automatically.";
        }
        chat.messages.push({ text: reply, incoming: true, time: now });
        renderMessages();
        renderChatsList();
        showToast("New message received from supporter!", "success");
      }, 1500);
    }

    function clearChatLog() {
      const chat = CHATS.find(c => c.id === activeChatId);
      chat.messages = [{ text: 'Chat logs flushed.', incoming: true, time: 'Now' }];
      renderMessages();
      renderChatsList();
      showToast("Cleared active chat sandbox logs.");
    }

    function downloadTranscripts() {
      const chat = CHATS.find(c => c.id === activeChatId);
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chat.messages, null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", chat.id + "-transcript.json");
      document.body.appendChild(dlAnchor);
      dlAnchor.click();
      dlAnchor.remove();
      showToast("Chat context exported as JSON!");
    }

    window.onload = () => {
      lucide.createIcons();
      renderChatsList();
      selectChat('smart-agent');
    };
  </script>
</body>
</html>`;
  }

  // 2. NETFLIX STREAMING CLONE
  if (isNetflix) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-black text-[#e5e5e5] font-sans antialiased h-full">
  <!-- Nav header -->
  <header class="fixed top-0 inset-x-0 z-45 bg-gradient-to-b from-black/80 to-transparent p-4 px-8 flex justify-between items-center transition-all" id="main-nav">
    <div class="flex items-center gap-6">
      <div class="text-red-650 font-black text-2xl tracking-tighter" style="font-family:'Impact', sans-serif">NETFLIX_CLONE</div>
      <nav class="hidden md:flex gap-4 text-xs font-semibold text-slate-300">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="hover:text-white transition-colors" onclick="showToast('Loading TV Shows Grid...')">TV Shows</a>
        <a href="#" class="hover:text-white transition-colors" onclick="showToast('Loading Movies Showcase...')">Movies</a>
        <a href="#" class="hover:text-white transition-colors">My List (<span id="mylist-counter">0</span>)</a>
      </nav>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded px-2 py-1">
        <i data-lucide="search" class="h-3.5 w-3.5 text-neutral-400"></i>
        <input id="search-bar" oninput="filterMovies()" placeholder="Search trailers..." class="bg-transparent text-[10px] outline-none text-white w-28">
      </div>
      <div class="px-2 py-0.5 rounded bg-red-600 text-[9px] font-bold text-white uppercase font-mono">Anik Special</div>
    </div>
  </header>

  <!-- Big Hero Trailer Banner -->
  <section class="h-[480px] relative flex flex-col justify-end p-8 sm:p-16 bg-cover bg-center border-b border-neutral-900" style="background-image: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80')">
    <div class="max-w-xl space-y-4">
      <div class="flex items-center gap-2"><span class="px-2 py-0.5 rounded bg-neutral-800 font-mono text-[9px] text-amber-400 font-bold tracking-wider">★ TOP 1 SPOTLIGHT</span></div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none leading-tight font-display" id="hero-title">Hyper-SaaS: AI Odyssey</h1>
      <p class="text-xs text-neutral-400 leading-normal" id="hero-desc">Generative networks and multi-agent systems trigger cosmic runtime transformations. Compile, load, and deploy active sandboxes in high definition.</p>
      <div class="flex items-center gap-3">
        <button onclick="playHeroTrailer()" class="px-5 py-2.5 bg-white text-black hover:bg-neutral-250 font-bold rounded-lg text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-white/5"><i data-lucide="play" class="h-4 w-4 fill-black"></i> Play Trailer</button>
        <button onclick="toggleMyList('Hyper-SaaS: AI Odyssey')" class="px-5 py-2.5 bg-neutral-850 hover:bg-neutral-750 font-bold rounded-lg text-xs border border-neutral-700 transition-all flex items-center gap-1.5 text-white" id="list-add-btn"><i data-lucide="plus" class="h-4 w-4"></i> Add to List</button>
      </div>
    </div>
  </section>

  <!-- Video Player Immersive Overlay modal -->
  <div id="video-overlay" class="fixed inset-0 bg-black z-50 flex flex-col hidden justify-between p-6">
    <div class="flex justify-between items-center bg-black/55 p-3 rounded-xl">
      <span class="text-xs font-bold text-neutral-400 font-mono" id="player-title">PLAYING: Hyper-SaaS AI Odyssey</span>
      <button onclick="closeVideoPlayer()" class="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center text-white border border-neutral-800"><i data-lucide="x" class="h-4 w-4"></i></button>
    </div>
    <!-- Visual Spectrum Audio Waves Sandbox -->
    <div class="flex-1 flex flex-col items-center justify-center space-y-6">
      <div class="text-center">
        <div class="h-14 w-14 rounded-full bg-red-650 flex items-center justify-center text-white animate-pulse mx-auto mb-3"><i data-lucide="video" class="h-6 w-6"></i></div>
        <div class="text-sm font-bold tracking-wider uppercase text-white font-mono animate-bounce">Buffering High-fidelity Sandbox Stream...</div>
      </div>
      <div class="flex items-end gap-1.5 h-16" id="player-spectrum"></div>
    </div>
    <!-- Bottom Stream controls -->
    <div class="p-4 bg-neutral-900 border border-neutral-800 rounded-xl space-y-3">
      <div class="w-full bg-neutral-800 h-1 rounded-full relative cursor-pointer" onclick="scrubTimeline(event)">
        <div class="bg-red-650 h-1 rounded-full absolute top-0 left-0" style="width: 32%" id="timeline-progress"></div>
      </div>
      <div class="flex justify-between items-center text-xs">
        <div class="flex items-center gap-4">
          <button onclick="togglePlayState()" class="text-white text-bold" id="play-btn"><i data-lucide="pause" class="h-4 w-4"></i></button>
          <span class="font-mono text-[10px] text-neutral-400" id="time-indicator">00:34 / 02:20</span>
        </div>
        <span class="text-[9px] font-mono text-red-400 flex items-center gap-1 animate-pulse border border-red-500/20 px-1.5 rounded py-0.5"><span class="h-1.5 w-1.5 rounded-full bg-red-500"></span> Live Streaming Demo active</span>
      </div>
    </div>
  </div>

  <!-- Rows Grid -->
  <main class="p-8 space-y-8" id="catalog-container">
    <div class="space-y-4">
      <h3 class="text-sm uppercase font-mono font-bold tracking-widest text-[#e5e5e5]">Active Action & Sci-Fi Blocks</h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4" id="movie-grid"></div>
    </div>
  </main>

  <!-- Detailed Film info modal -->
  <div id="movie-detail-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden">
    <div class="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
      <button onclick="closeDetailModal()" class="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/60 flex items-center justify-center text-white border border-white/5 z-10"><i data-lucide="x" class="h-4 w-4"></i></button>
      <div class="h-48 bg-cover bg-center relative flex flex-col justify-end p-6" id="modal-banner">
        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        <h3 class="text-xl font-bold text-white z-10 font-display" id="modal-title">Film Details</h3>
      </div>
      <div class="p-6 space-y-4">
        <div class="flex items-center gap-3 text-[10px] font-mono">
          <span class="text-emerald-400 font-bold" id="modal-match">99% Match</span>
          <span class="text-neutral-400">2026</span>
          <span class="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-white/5">Ultra HD</span>
        </div>
        <p class="text-xs text-neutral-400 leading-normal" id="modal-descr">Description here.</p>
        <div class="pt-2 border-t border-neutral-900 flex justify-between items-center text-[10px] font-mono text-neutral-500">
          <span>Starring: AI Synthesis Agent</span>
          <span>Genre: Cyberpunk Sandbox</span>
        </div>
      </div>
    </div>
  </div>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    const MOVIES = [
      { title: 'The Sandbox Matrix', match: '98%', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80', desc: 'Step depth inside the node logic loop. Compile, optimize, and escape standard container restrictions dynamically.' },
      { title: 'Cyberpunk Workspace', match: '95%', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80', desc: 'A neon-lit aesthetic workspace tracker. Optimize pipeline latency while maintaining elite light contrast.' },
      { title: 'Testimonial Slider Run', match: '99%', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', desc: 'Fully calibrated slider arrays with running indicators. Watch staggers calculate with precise transitional latency.' },
      { title: 'Anik\\\'s Ledger (Secured Gold)', match: '94%', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80', desc: 'Track deposits, gold allocations, and custom inflows. Secured securely inside local storage matrices.' },
      { title: 'The Multi-Agent Chain', match: '97%', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80', desc: 'Synchronized REST websockets coordination. Trigger task trees with automated poller nodes.' }
    ];

    let myList = [];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-neutral-800 bg-neutral-950 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = \`<i data-lucide="info" class="h-4 w-4 text-red-500"></i><span>\${msg}</span>\`;
      parent.appendChild(div);
      setTimeout(() => div.remove(), 3500);
      lucide.createIcons();
    }

    function renderMoviesGrid(list = MOVIES) {
      const parent = document.getElementById('movie-grid');
      parent.innerHTML = list.map((m, idx) => \`
        <div onclick="openMoveDetails(\${idx})" class="p-1 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-600 transition-all cursor-pointer group flex flex-col justify-between">
          <div class="relative overflow-hidden rounded-lg aspect-video">
            <img src="\${m.img\}" class="w-full h-24 object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
          </div>
          <div class="p-2 space-y-1">
            <div class="flex justify-between items-center text-[9px] font-mono text-emerald-400">
              <span>\${m.match\} Match</span>
              <span class="text-neutral-500 font-normal">HD</span>
            </div>
            <h4 class="text-xs font-bold text-white truncate">\${m.title\}</h4>
          </div>
        </div>
      \`).join('');
    }

    function filterMovies() {
      const query = document.getElementById('search-bar').value.toLowerCase().trim();
      const filtered = MOVIES.filter(m => m.title.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query));
      renderMoviesGrid(filtered);
    }

    function openMoveDetails(idx) {
      const m = MOVIES[idx];
      document.getElementById('modal-title').innerText = m.title;
      document.getElementById('modal-descr').innerText = m.desc;
      document.getElementById('modal-match').innerText = m.match + " Match";
      document.getElementById('modal-banner').style.backgroundImage = "linear-gradient(to top, #0a0a0a, transparent), url('" + m.img + "')";
      document.getElementById('movie-detail-modal').classList.remove('hidden');
      showToast("Opened catalog information: " + m.title);
    }

    function closeDetailModal() {
      document.getElementById('movie-detail-modal').classList.add('hidden');
    }

    let isPlaying = false;
    let playTimer;
    let timerSec = 34;

    function playHeroTrailer() {
      document.getElementById('player-title').innerText = "PLAYING: " + document.getElementById('hero-title').innerText;
      document.getElementById('video-overlay').classList.remove('hidden');
      isPlaying = true;
      togglePlayState(true);
      
      const wave = document.getElementById('player-spectrum');
      wave.innerHTML = Array(12).fill(0).map(() => \`<div class="w-1.5 bg-red-650 rounded-full transition-all" style="height: 20%"></div>\`).join('');
      
      showToast("Cinema player active. Buffering video...");
    }

    function togglePlayState(forceAction) {
      if (forceAction !== undefined) isPlaying = forceAction;
      else isPlaying = !isPlaying;

      const btn = document.getElementById('play-btn');
      if (isPlaying) {
        btn.innerHTML = '<i data-lucide="pause" class="h-4 w-4"></i>';
        playTimer = setInterval(() => {
          timerSec = (timerSec + 1) % 140;
          const mins = Math.floor(timerSec / 60);
          const secs = timerSec % 60;
          document.getElementById('time-indicator').innerText = "0" + mins + ":" + (secs < 10 ? "0" : "") + secs + " / 02:20";
          document.getElementById('timeline-progress').style.width = (timerSec / 140 * 100) + "%";
          
          const waveBars = document.getElementById('player-spectrum').children;
          for (let bar of waveBars) {
            bar.style.height = (Math.floor(Math.random() * 80) + 20) + "%";
          }
        }, 1000);
      } else {
        btn.innerHTML = '<i data-lucide="play" class="h-4 w-4"></i>';
        clearInterval(playTimer);
      }
      lucide.createIcons();
    }

    function scrubTimeline(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      timerSec = Math.floor(pct * 140);
      document.getElementById('timeline-progress').style.width = (pct * 100) + "%";
      showToast("Scrubbed sandbox playhead.");
    }

    function closeVideoPlayer() {
      document.getElementById('video-overlay').classList.add('hidden');
      clearInterval(playTimer);
      isPlaying = false;
    }

    function toggleMyList(title) {
      if (myList.includes(title)) {
        myList = myList.filter(x => x !== title);
        showToast("Removed from My List");
        document.getElementById('list-add-btn').innerHTML = '<i data-lucide="plus" class="h-4 w-4"></i> Add to List';
      } else {
        myList.push(title);
        showToast("Added to My List successfully!");
        document.getElementById('list-add-btn').innerHTML = '<i data-lucide="check" class="h-4 w-4 text-emerald-400"></i> Added';
      }
      document.getElementById('mylist-counter').innerText = myList.length;
      lucide.createIcons();
    }

    window.onload = () => {
      lucide.createIcons();
      renderMoviesGrid();
    };
  </script>
</body>
</html>`;
  }

  // 3. SPOTIFY MUSIC WORKSPACE
  if (isSpotify) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-black text-[#b3b3b3] font-sans h-full antialiased flex flex-col overflow-hidden">
  <div class="flex-1 flex overflow-hidden">
    <!-- Left Sidebar -->
    <div class="w-64 bg-neutral-950 p-6 flex flex-col justify-between hidden sm:flex">
      <div class="space-y-6">
        <div class="text-[#1db954] font-bold text-xl tracking-tight flex items-center gap-2">
          <i data-lucide="music" class="h-7 w-7 animate-pulse"></i>
          <span>SPOTIFY_REP</span>
        </div>
        <nav class="space-y-4 text-xs font-bold text-neutral-400">
          <a href="#" class="text-white flex items-center gap-3"><i data-lucide="home" class="h-4.5 w-4.5"></i> Home Hub</a>
          <a href="#" class="hover:text-white transition-colors flex items-center gap-3"><i data-lucide="search" class="h-4.5 w-4.5"></i> Custom Search</a>
          <a href="#" class="hover:text-white transition-colors flex items-center gap-3"><i data-lucide="library" class="h-4.5 w-4.5"></i> Vault Library</a>
        </nav>
        <div class="pt-6 border-t border-neutral-900 space-y-4">
          <h4 class="text-[10px] font-mono tracking-widest uppercase font-bold text-white">My Playlist Maker</h4>
          <form onsubmit="createPlayFolder(event)" class="flex gap-1.5">
            <input required id="playlist-name" placeholder="Summer 2026..." class="flex-grow bg-neutral-900 border border-neutral-800 text-[10px] p-1.5 px-2.5 rounded text-white outline-none">
            <button type="submit" class="p-1.5 bg-[#1db954] text-black rounded hover:bg-[#1ed760] transition-colors"><i data-lucide="plus" class="h-3.5 w-3.5"></i></button>
          </form>
          <div id="active-play-folders" class="space-y-1.5 text-xs text-neutral-400"></div>
        </div>
      </div>
      <div>
        <span class="text-[9px] font-mono tracking-wider text-neutral-600 block">CONNECTED SECURE v1.2</span>
      </div>
    </div>

    <!-- Main Board -->
    <div class="flex-1 bg-gradient-to-b from-[#121212] to-black flex flex-col p-6 overflow-y-auto space-y-6 pb-28">
      <!-- Top banner -->
      <header class="flex justify-between items-center bg-black/35 p-3 rounded-2xl border border-white/5">
        <div class="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800">
          <i data-lucide="search" class="h-4 w-4 text-neutral-400"></i>
          <input id="track-search" oninput="filterSongs()" placeholder="Search signature tracks..." class="bg-transparent text-xs text-white outline-none w-48">
        </div>
        <div class="flex items-center gap-3">
          <span class="px-2.5 py-1 bg-[#1db954]/10 border border-[#1db954]/25 text-[10px] text-[#1db954] font-mono rounded-full">HQ Audio stream</span>
        </div>
      </header>

      <!-- Music catalog rows -->
      <div class="space-y-4">
        <h2 class="text-lg font-bold text-white">Featured Audio Playlist</h2>
        <div class="overflow-x-auto bg-neutral-950/60 p-4 rounded-3xl border border-neutral-900">
          <table class="w-full text-left text-xs text-neutral-400 font-sans border-collapse">
            <thead>
              <tr class="border-b border-neutral-900 font-mono text-[9px] uppercase tracking-wider pb-2">
                <th class="pb-2">Title</th>
                <th class="pb-2">Artist</th>
                <th class="pb-2">Album</th>
                <th class="pb-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody id="songs-list-body" class="divide-y divide-neutral-920 text-neutral-300"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Persistent Bottom Playback Console -->
  <footer class="fixed bottom-0 inset-x-0 h-24 bg-neutral-950 border-t border-neutral-900 p-4 px-6 flex items-center justify-between z-40">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 bg-emerald-950/40 rounded flex items-center justify-center border border-emerald-500/10 text-[#1db954]"><i data-lucide="disc" class="h-5 w-5 animate-spin"></i></div>
      <div>
        <h4 class="text-xs font-bold text-white" id="playing-title">Synapse Waves Inflow</h4>
        <p class="text-[9px] text-neutral-500" id="playing-artist">AI Generation Specialist</p>
      </div>
    </div>

    <!-- Central Slider Track Controls -->
    <div class="flex flex-col items-center gap-2 max-w-sm w-full mx-4">
      <div class="flex gap-4 items-center">
        <button onclick="showToast('Previous track...')" class="text-neutral-400 hover:text-white"><i data-lucide="skip-back" class="h-4 w-4"></i></button>
        <button onclick="toggleTrackPlay()" id="play-btn" class="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:scale-105 transition-transform"><i data-lucide="pause" class="h-4.5 w-4.5 fill-black"></i></button>
        <button onclick="showToast('Next track')" class="text-neutral-400 hover:text-white"><i data-lucide="skip-forward" class="h-4 w-4"></i></button>
      </div>
      <!-- Running timeline loop scrubber -->
      <div class="w-full flex items-center gap-2 text-[9px] font-mono">
        <span id="playing-sec">0:00</span>
        <div class="flex-grow bg-neutral-800 rounded-full h-1 relative cursor-pointer" onclick="clickTimeline(event)">
          <div class="bg-white hover:bg-[#1db954] h-1 rounded-full absolute top-0 left-0" style="width: 14%" id="track-time-filler"></div>
        </div>
        <span>2:45</span>
      </div>
    </div>

    <!-- Spectrum Wave Equalizer & Volume -->
    <div class="flex items-center gap-3">
      <!-- Equalizer Wave -->
      <div class="flex items-end gap-1 h-8 px-2 border-r border-neutral-900 pr-4" id="eq-spectrum"></div>
      <div class="flex items-center gap-2 font-mono text-[9px]">
        <i data-lucide="volume-2" class="h-3.5 w-3.5"></i>
        <input type="range" min="0" max="100" value="80" oninput="changeVolume(this.value)" class="w-16 accent-[#1db954] bg-neutral-800 rounded-lg appearance-none h-1 cursor-pointer">
      </div>
    </div>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    const TRACKS = [
      { id: '1', title: 'Synapse Waves Inflow', artist: 'AI Generation Specialist', album: 'Infinite Compile, Vol. 1' },
      { id: '2', title: 'Ledger Flow Gold Check', artist: 'Anik Finance Node', album: 'SaaS Suite' },
      { id: '3', title: 'Testimonial Bullet Stagger', artist: 'Slick Slide Maker', album: 'GSAP Transitions' },
      { id: '4', title: 'WhatsApp Simulator Sound', artist: 'Teal Message Sender', album: 'Chat Shells' },
      { id: '5', title: 'Netflix Cinematics', artist: 'The Cinema Team', album: 'Grid Odysseys' }
    ];

    let folders = ['Summer Hits', 'Development Beats'];
    let curSec = 22;
    let isPlaying = true;
    let audioTimer;

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-neutral-800 bg-neutral-950 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = \`<i data-lucide="music" class="h-4 w-4 text-[#1db954]"></i><span>\${msg}</span>\`;
      parent.appendChild(div);
      setTimeout(() => div.remove(), 3500);
      lucide.createIcons();
    }

    function renderFolders() {
      const container = document.getElementById('active-play-folders');
      container.innerHTML = folders.map(f => \`
        <div class="py-1 py-1 px-2.5 rounded hover:bg-neutral-900 hover:text-white cursor-pointer truncate flex items-center gap-2"><i data-lucide="music-4" class="h-3 w-3"></i> \${f\}</div>
      \`).join('');
      lucide.createIcons();
    }

    function createPlayFolder(e) {
      e.preventDefault();
      const input = document.getElementById('playlist-name');
      const val = input.value.trim();
      if(val) {
        folders.push(val);
        input.value = '';
        renderFolders();
        showToast("Created playlist: " + val + " folder");
      }
    }

    function renderTracks(list = TRACKS) {
      const body = document.getElementById('songs-list-body');
      body.innerHTML = list.map(t => \`
        <tr class="hover:bg-neutral-900/60 cursor-pointer text-slate-350" onclick="streamTrack('\${t.title\}', '\${t.artist\}')">
          <td class="py-2.5 px-1 font-bold text-white">\${t.title\}</td>
          <td class="py-2.5">\${t.artist\}</td>
          <td class="py-2.5 text-neutral-500 font-mono text-[10px] uppercase">\${t.album\}</td>
          <td class="py-2.5 text-right"><span class="text-xs text-[#1db954] hover:underline font-mono">Stream & Play</span></td>
        </tr>
      \`).join('');
    }

    function filterSongs() {
      const q = document.getElementById('track-search').value.toLowerCase().trim();
      const filtered = TRACKS.filter(t => t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q));
      renderTracks(filtered);
    }

    function streamTrack(title, artist) {
      document.getElementById('playing-title').innerText = title;
      document.getElementById('playing-artist').innerText = artist;
      curSec = 0;
      isPlaying = true;
      toggleTrackPlay(true);
      showToast("Streaming track: " + title);
    }

    function toggleTrackPlay(forceState) {
      if(forceState !== undefined) isPlaying = forceState;
      else isPlaying = !isPlaying;

      const btn = document.getElementById('play-btn');
      if (isPlaying) {
        btn.innerHTML = '<i data-lucide="pause" class="h-4.5 w-4.5 fill-black"></i>';
        audioTimer = setInterval(() => {
          curSec = (curSec + 1) % 165;
          const min = Math.floor(curSec / 60);
          const sec = curSec % 60;
          document.getElementById('playing-sec').innerText = min + ":" + (sec < 10 ? '0' : '') + sec;
          document.getElementById('track-time-filler').style.width = (curSec / 165 * 100) + "%";
          
          const eqBars = document.getElementById('eq-spectrum').children;
          for (let bar of eqBars) {
            bar.style.height = (Math.floor(Math.random() * 80) + 15) + "%";
          }
        }, 1000);
      } else {
        btn.innerHTML = '<i data-lucide="play" class="h-4.5 w-4.5 fill-black"></i>';
        clearInterval(audioTimer);
      }
      lucide.createIcons();
    }

    function clickTimeline(e) {
      const parent = e.currentTarget;
      const rect = parent.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      curSec = Math.floor(pct * 165);
      document.getElementById('track-time-filler').style.width = (pct * 100) + "%";
      showToast("Scrubbed track frame.");
    }

    function changeVolume(val) {
      showToast("Volume locked at: " + val + "%");
    }

    window.onload = () => {
      lucide.createIcons();
      renderFolders();
      renderTracks();
      
      const bars = document.getElementById('eq-spectrum');
      bars.innerHTML = Array(8).fill(0).map(() => \`<div class="w-1 bg-[#1db954] rounded-full transition-all" style="height: 30%"></div>\`).join('');
      toggleTrackPlay(true);
    };
  </script>
</body>
</html>`;
  }

  // 3.5. PODSAY AUDIO & PODCAST PLATFORM
  if (isPodcast) {
    return `<!DOCTYPE html>
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
            <input required type="password" placeholder="•••" class="w-full bg-slate-900 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 rounded-xl outline-none focus:border-violet-500 text-center font-mono" maxlength="3">
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
        <span class="text-white" id="receipt-name">Anik Rahman</span>
      </div>
      <div class="flex justify-between">
        <span>SOCIOMETRICS CORP</span>
        <span class="text-white">US-CORE-DISPATCH</span>
      </div>
      <div class="flex justify-between">
        <span>SPONSOR PLAN</span>
        <span class="text-white font-bold">PLATINUM CORE ($9)</span>
      </div>
      <div class="flex justify-between border-t border-white/5 pt-2.5">
        <span class="font-bold text-white uppercase">Sovereis Net Due</span>
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
        <span class="text-[9.5px] text-slate-500 tracking-tight truncate block mt-1.5" id="persistent-artist">Anik Rahman & Sarah Jenkins</span>
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

          const pct = (elapsedSeconds / activeEp.timeSecs) * 100;
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
        ppBtn.innerHTML = '<i data-lucide="play" class="h-4 w-4 fill-black text-black"></i>';
        vinylElement.classList.remove('spin-active');
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
        btn.className = "w-full py-3.5 bg-red-650 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2";
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
</html>`;
  }

  // 4. SHOPO E-COMMERCE HUB
  if (isEcommerce) {
    const config = getMarketplaceConfig(prompt, title);
    const { brandName, category1, category2, category3, items, colorTheme, subject } = config;
    const siteTitle = brandName;

    const ecommerceTemplate = `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-[#0b0c10] text-[#c5c6c7] font-sans h-full flex flex-col justify-between">
  <!-- Nav header -->
  <header class="sticky top-0 z-40 bg-[#1f2833] py-4 px-6 sm:px-8 border-b border-indigo-500/10 flex justify-between items-center">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-amber-500 flex items-center justify-center text-black font-extrabold shadow-lg shadow-amber-500/10"><i data-lucide="shopping-bag" class="h-5.5 w-5.5"></i></div>
      <div>
        <h1 class="text-md font-bold text-white tracking-tight">${siteTitle} (ShopO Clone)</h1>
        <p class="text-[9px] text-amber-400 font-mono tracking-wider">ELITE CART ENGINE v2.0</p>
      </div>
    </div>
    
    <!-- Navigation Tabs -->
    <div class="hidden md:flex gap-2">
      <button onclick="changeShowroom('all')" id="tab-all" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-black shadow-lg">Store Catalog</button>
      <button onclick="changeShowroom('apparel')" id="tab-apparel" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#c5c6c7]/5 text-[#c5c6c7]">Apparel & Shoes</button>
      <button onclick="changeShowroom('electronics')" id="tab-electronics" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#c5c6c7]/5 text-[#c5c6c7]">Premium Tech</button>
      <button onclick="changeShowroom('cafe')" id="tab-cafe" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#c5c6c7]/5 text-[#c5c6c7]">Café Delights</button>
    </div>

    <!-- Cart badge -->
    <div class="flex items-center gap-4">
      <button onclick="openCartDrawer()" class="relative p-2 bg-[#0b0c10] border border-amber-500/20 rounded-xl hover:border-amber-500 transition-colors">
        <i data-lucide="shopping-cart" class="h-4.5 w-4.5 text-amber-400"></i>
        <span class="absolute -top-1.5 -right-1.5 h-4.5 w-4.5 rounded-full bg-red-650 text-[8px] font-bold font-mono text-white flex items-center justify-center" id="cart-counter">0</span>
      </button>
    </div>
  </header>

  <!-- Big Promo Banner -->
  <div class="max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
    <div class="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1f2833] to-[#0b0c10] border border-amber-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="space-y-3">
        <div class="inline-block px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono font-bold text-amber-400 uppercase tracking-widest">★ EXCLUSIVE OFFER</div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-none leading-tight font-display">Special Coupon code inside!</h2>
        <p class="text-xs text-[#c5c6c7]/80 leading-normal">Use coupon code <span class="font-mono text-amber-400 font-bold bg-[#0b0c10] px-1.5 rounded border border-white/5 mx-0.5">ANIKPRO</span> inside cart checkouts drawer to deduct 15% discount payments instantly!</p>
      </div>
      <div class="flex items-center gap-3 flex-shrink-0">
        <div class="bg-[#0b0c10] px-4 py-3 border border-white/5 rounded-2xl text-center">
          <span class="text-[8px] text-gray-500 block">EXPIRES</span>
          <span class="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider">UNTIL SOLD OUT</span>
        </div>
      </div>
    </div>
  </div>

  <main class="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
    <!-- Store catalog left grid -->
    <div class="lg:col-span-2 space-y-6">
      <div class="flex justify-between items-center border-b border-white/5 pb-4">
        <div>
          <h3 class="text-base font-bold text-white">Interactive Products Shelf</h3>
          <p class="text-xs text-neutral-400">Click Add to append catalog products to table checkouts cart.</p>
        </div>
        <input id="store-search" oninput="filterCatalogSearch()" placeholder="Search catalog..." class="bg-[#1f2833] border border-white/5 rounded-xl px-3 py-1.5 text-xs text-white outline-none w-44">
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="ecom-catalog"></div>
    </div>

    <!-- Active Review / Ratings block -->
    <div class="bg-[#1f2833] p-6 rounded-3xl border border-white/5 space-y-6 self-start">
      <div>
        <h4 class="text-sm font-bold text-white">Dynamic Store Review Book</h4>
        <p class="text-xs text-slate-400">Submit client rating profiles to save onto database ledger records.</p>
      </div>
      <form onsubmit="submitReview(event)" class="space-y-3">
        <input required id="rev-name" placeholder="Client Name" class="w-full bg-[#0b0c10] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none">
        <select required id="rev-rating" class="w-full bg-[#0b0c10] border border-white/10 rounded-xl px-3 py-2 text-xs text-white">
          <option value="5">⭐⭐⭐⭐⭐ Excellent 5 Star</option>
          <option value="4">⭐⭐⭐⭐ Great 4 Star</option>
          <option value="3">⭐⭐⭐ Good 3 Star</option>
        </select>
        <textarea required id="rev-text" placeholder="Explain your visual and functional feedback..." rows="2" class="w-full bg-[#0b0c10] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none"></textarea>
        <button type="submit" class="w-full py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs rounded-xl shadow-lg transition-all">Submit Review</button>
      </form>
      <div id="reviews-list" class="space-y-4 max-h-52 overflow-y-auto pr-1"></div>
    </div>
  </main>

  <!-- Slider out Drawer for Carts checkout -->
  <div id="cart-drawer" class="fixed inset-y-0 right-0 max-w-sm w-full bg-[#1f2833] border-l border-white/5 z-50 p-6 flex flex-col justify-between shadow-2xl hidden">
    <div>
      <div class="flex justify-between items-center border-b border-white/5 pb-4">
        <h3 class="text-sm font-bold text-white flex items-center gap-1"><i data-lucide="shopping-cart" class="h-4 w-4"></i> Shopping List Drawer</h3>
        <button onclick="closeCartDrawer()" class="h-8 w-8 rounded-full bg-[#0b0c10] hover:bg-[#c5c6c7]/5 flex items-center justify-center border border-white/5 text-amber-500"><i data-lucide="x" class="h-4.5 w-4.5"></i></button>
      </div>
      <div id="drawer-items" class="space-y-3 py-4 max-h-68 overflow-y-auto pr-1"></div>
    </div>
    <!-- Checkout math calculations -->
    <div class="space-y-4">
      <div class="space-y-1.5 p-4 rounded-xl bg-[#0b0c10] border border-white/5">
        <div class="flex justify-between text-xs"><span>Subtotal:</span><span class="text-white font-bold" id="bill-sub">$0.00</span></div>
        <div class="flex justify-between text-xs text-emerald-400"><span>Code Code (15%):</span><span>-<span id="bill-disc">$0.00</span></span></div>
        <div class="flex justify-between text-xs border-t border-white/5 pt-2 text-amber-400 font-bold"><span>Total Payments:</span><span class="text-lg" id="bill-total">$0.00</span></div>
      </div>
      <!-- Coupon Application -->
      <div class="flex gap-1.5">
        <input id="coupon-field" placeholder="Enter coupon..." class="flex-grow bg-[#0b0c10] px-3.5 py-1.5 rounded-lg border border-white/10 text-xs uppercase font-mono text-white outline-none">
        <button onclick="applyDiscount()" class="px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-[10px] font-bold text-white rounded-lg">Apply</button>
      </div>
      <button onclick="completeCheckoutOrder()" class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl shadow-lg">Lock Checkout order</button>
    </div>
  </div>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    const STORAGE_PRODUCTS = [
      { id: 'apparel-shoe', title: 'Carbon Matrix Runner shoes', price: 145.00, cat: 'apparel', desc: 'Slick high-fidelity foam, styled visually with charcoal black outlines.', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80' },
      { id: 'apparel-hoodie', title: 'Cyberpunk Windbreaker Hoodie', price: 85.00, cat: 'apparel', desc: 'Premium waterproof fabric, fitted with glowing amber highlights.', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=300&q=80' },
      { id: 'tech-hub', title: 'Anik Multi-Agent Core Gateway', price: 299.00, cat: 'electronics', desc: 'High speed pipeline processor, calibrated for rapid WebSocket routing.', img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=300&q=80' },
      { id: 'tech-bud', title: 'Silicon Earbud Case sound', price: 55.00, cat: 'electronics', desc: 'Compact dual-channel arrays supporting active noise block filters.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80' },
      { id: 'cafe-bakes', title: 'Premium Wild Sourdough Croissant', price: 9.50, cat: 'cafe', desc: 'Statically baked over 24 hours of local wild yeast loops propagation.', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80' }
    ];

    let cartList = [];
    let activeCatalogTab = 'all';
    let isCodeApplied = false;

    const MOCK_REVIEWS = [
      { name: 'Arjun Roy', rating: '⭐⭐⭐⭐⭐', text: 'Stunning ShopO design. The cart drawer coupon works instantly!' }
    ];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-white/5 bg-[#1f2833] text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = \`<i data-lucide="shopping-bag" class="h-4 w-4 text-amber-500"></i><span>\${msg}</span>\`;
      parent.appendChild(div);
      setTimeout(() => div.remove(), 3500);
      lucide.createIcons();
    }

    function renderCatalogItems(list = STORAGE_PRODUCTS) {
      const parent = document.getElementById('ecom-catalog');
      const filtered = activeCatalogTab === 'all' ? list : list.filter(p => p.cat === activeCatalogTab);
      
      parent.innerHTML = filtered.map(p => \`
        <div class="p-4 rounded-2xl bg-[#1f2833] border border-white/5 hover:border-amber-500/20 transition-all flex gap-4 group">
          <img src="\${p.img\}" class="h-20 w-20 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer">
          <div class="flex-grow flex flex-col justify-between">
            <div>
              <div class="flex justify-between">
                <span class="text-[8px] font-mono text-amber-400 capitalize bg-[#0b0c10] border border-amber-500/15 px-1.5 rounded">\${p.cat\}</span>
                <span class="text-xs font-bold font-mono text-white">\$\${p.price.toFixed(2)\}</span>
              </div>
              <h4 class="text-xs font-bold text-white font-display mt-1.5 group-hover:text-amber-400 transition-colors">\${p.title\}</h4>
              <p class="text-[10px] text-slate-400 mt-1 lines-2">\${p.desc\}</p>
            </div>
            <button onclick="addCartItem('\${p.id\}')" class="self-end px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black text-[10px] font-bold rounded-lg transition-all mt-2 flex items-center gap-1">Add <i data-lucide="plus" class="h-3 w-3"></i></button>
          </div>
        </div>
      \`).join('');
      lucide.createIcons();
    }

    function changeShowroom(tabId) {
      const tabs = ['all', 'apparel', 'electronics', 'cafe'];
      tabs.forEach(t => {
        const btn = document.getElementById('tab-' + t);
        if(!btn) return;
        if(t === tabId) {
          btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-black shadow-lg";
        } else {
          btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#c5c6c7]/5 text-[#c5c6c7]";
        }
      });
      activeCatalogTab = tabId;
      renderCatalogItems();
      showToast("Store catalog categorized: " + tabId.toUpperCase());
    }

    function filterCatalogSearch() {
      const q = document.getElementById('store-search').value.toLowerCase().trim();
      const filtered = STORAGE_PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
      renderCatalogItems(filtered);
    }

    function addCartItem(id) {
      const item = STORAGE_PRODUCTS.find(p => p.id === id);
      const exist = cartList.find(x => x.id === id);
      if(exist) {
        exist.qty += 1;
      } else {
        cartList.push({ id: item.id, title: item.title, price: item.price, qty: 1 });
      }
      recomputeBill();
      showToast("Added " + item.title + " to checkouts cart!");
    }

    function recomputeBill() {
      const totalQty = cartList.reduce((acc, x) => acc + x.qty, 0);
      document.getElementById('cart-counter').innerText = totalQty;
      
      const sub = cartList.reduce((acc, x) => acc + (x.price * x.qty), 0);
      const disc = isCodeApplied ? (sub * 0.15) : 0;
      const pays = Math.max(0, sub - disc);

      document.getElementById('bill-sub').innerText = '$' + sub.toFixed(2);
      document.getElementById('bill-disc').innerText = '$' + disc.toFixed(2);
      document.getElementById('bill-total').innerText = '$' + pays.toFixed(2);

      const listDiv = document.getElementById('drawer-items');
      if(cartList.length === 0) {
        listDiv.innerHTML = '<div class="text-center py-8 text-xs text-slate-500 italic">Bill checkout list is currently empty.</div>';
        return;
      }

      listDiv.innerHTML = cartList.map((item, idx) => \`
        <div class="p-2 px-3 rounded-lg bg-[#0b0c10] border border-white/5 flex justify-between items-center text-xs">
          <div>
            <h5 class="text-white font-bold truncate">\${item.title\}</h5>
            <span class="text-[9px] text-gray-500 font-mono">Qty: \${item.qty\} × \$\${item.price.toFixed(2)\}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-amber-400 font-bold font-mono">\$\${(item.price * item.qty).toFixed(2)\}</span>
            <button onclick="removeCartItem(\${idx\})" class="text-gray-500 hover:text-red-400"><i data-lucide="minus" class="h-3.5 w-3.5"></i></button>
          </div>
        </div>
      \`).join('');
      lucide.createIcons();
    }

    function removeCartItem(idx) {
      cartList[idx].qty -= 1;
      if(cartList[idx].qty <= 0) {
        cartList.splice(idx, 1);
      }
      recomputeBill();
      showToast("Order cart updated");
    }

    function applyDiscount() {
      const val = document.getElementById('coupon-field').value.trim().toUpperCase();
      if (val === 'ANIKPRO') {
        isCodeApplied = true;
        recomputeBill();
        showToast("Success! applied 15% discount deductions.", "info");
      } else {
        showToast("Invalid coupon. Standard code is ANIKPRO", "error");
      }
    }

    function openCartDrawer() { document.getElementById('cart-drawer').classList.remove('hidden'); }
    function closeCartDrawer() { document.getElementById('cart-drawer').classList.add('hidden'); }

    function completeCheckoutOrder() {
      if(cartList.length === 0) {
        showToast("E-commerce checkout order is empty!");
        return;
      }
      showToast("Checkout order locked successfully inside sandbox!", "success");
      cartList.length = 0;
      recomputeBill();
      closeCartDrawer();
    }

    function renderReviews() {
      const container = document.getElementById('reviews-list');
      container.innerHTML = MOCK_REVIEWS.map(r => \`
        <div class="p-3 rounded-xl bg-[#0b0c10] border border-white/5 space-y-1.5 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-white font-bold font-mono">\${r.name\}</span>
            <span class="text-amber-400 text-[10px] font-mono">\${r.rating\}</span>
          </div>
          <p class="text-[#c5c6c7]/80">\${r.text\}</p>
        </div>
      \`).join('');
    }

    function submitReview(e) {
      e.preventDefault();
      const n = document.getElementById('rev-name').value.trim();
      const r = document.getElementById('rev-rating').value;
      const t = document.getElementById('rev-text').value.trim();
      
      const rStars = r === '5' ? '⭐⭐⭐⭐⭐' : r === '4' ? '⭐⭐⭐⭐' : '⭐⭐⭐';
      MOCK_REVIEWS.unshift({ name: n, rating: rStars, text: t });
      
      document.getElementById('rev-name').value = '';
      document.getElementById('rev-text').value = '';
      
      renderReviews();
      showToast("Review submitted successfully!");
    }

    window.onload = () => {
      lucide.createIcons();
      renderCatalogItems();
      renderReviews();
    };
  </script>
</body>
</html>`;

    return ecommerceTemplate
      .replace(/bg-\[\#0b0c10\]/g, `bg-[${colorTheme.primaryBg}]`)
      .replace(/bg-\[\#1f2833\]/g, `bg-[${colorTheme.headerBg}]`)
      .replace(/bg-amber-500/g, `bg-${colorTheme.primaryAccent}`)
      .replace(/hover:bg-amber-400/g, `hover:bg-${colorTheme.hoverAccent}`)
      .replace(/text-amber-550/g, `text-${colorTheme.primaryAccent}`)
      .replace(/text-amber-500/g, `text-${colorTheme.primaryAccent}`)
      .replace(/text-amber-400/g, `text-${colorTheme.primaryAccent}`)
      .replace(/border-indigo-500\/10/g, colorTheme.borderColor)
      .replace(/border-amber-500\/20/g, `border-${colorTheme.primaryAccent}/20`)
      .replace(/border-amber-500\/10/g, `border-${colorTheme.primaryAccent}/10`)
      .replace(/border-amber-500\/15/g, `border-${colorTheme.primaryAccent}/15`)
      .replace(/Apparel & Shoes/g, category1 === 'luxury-atar' ? 'Luxury Atar' : category1)
      .replace(/Premium Tech/g, category2 === 'arabian-scent' ? 'Arabian Oud' : category2)
      .replace(/Café Delights/g, category3 === 'floral-sweet' ? 'Floral & Sweet' : category3)
      .replace(/'apparel'/g, `'${category1.toLowerCase()}'`)
      .replace(/'electronics'/g, `'${category2.toLowerCase()}'`)
      .replace(/'cafe'/g, `'${category3.toLowerCase()}'`)
      .replace(/"apparel"/g, `"${category1.toLowerCase()}"`)
      .replace(/"electronics"/g, `"${category2.toLowerCase()}"`)
      .replace(/"cafe"/g, `"${category3.toLowerCase()}"`)
      .replace(/tab-apparel/g, `tab-${category1.toLowerCase()}`)
      .replace(/tab-electronics/g, `tab-${category2.toLowerCase()}`)
      .replace(/tab-cafe/g, `tab-${category3.toLowerCase()}`)
      .replace(/\[\'all\', \'apparel\', \'electronics\', \'cafe\'\]/g, `['all', '${category1.toLowerCase()}', '${category2.toLowerCase()}', '${category3.toLowerCase()}']`)
      .replace(/ELITE CART ENGINE v2\.0/g, `${subject.toUpperCase()} CE v2.5`)
      .replace(/const STORAGE_PRODUCTS = \[[^]*?\];/, `const STORAGE_PRODUCTS = ${JSON.stringify(items)};`);
  }

  // 5. PERSONAL PORTFOLIO DESIGNER
  if (isPortfolio) {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-[#050508] text-zinc-300 font-sans h-full flex flex-col justify-between">
  <!-- Nav header -->
  <header class="sticky top-0 z-45 bg-[#050508]/80 backdrop-blur-md p-5 px-8 max-w-7xl w-full mx-auto flex justify-between items-center border-b border-zinc-800/40">
    <div class="flex items-center gap-2">
      <div class="h-8 w-8 rounded bg-violet-600 flex items-center justify-center text-white font-black">AN</div>
      <span class="text-sm font-bold tracking-tight text-white font-display">${siteTitle}</span>
    </div>
    <div class="flex items-center gap-4 text-xs font-semibold text-zinc-400">
      <button onclick="showToast('Contact drawer direct routing active!')" class="px-3.5 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg shadow-lg shadow-violet-500/10 transition-all flex items-center gap-1.5">Enquire Portfolio</button>
    </div>
  </header>

  <!-- Big Hero Title -->
  <section class="max-w-7xl mx-auto w-full p-8 sm:p-16 text-center space-y-6">
    <div class="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs text-violet-400 font-mono tracking-wider animate-pulse">CRAFTING HIGH-FIDELITY WEB APPS</div>
    <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tighter font-display">Creative Designer & Developer Specialist</h1>
    <p class="max-w-xl mx-auto text-sm text-zinc-400 leading-relaxed">Developing interactive, professional-grade code clones, bespoke e-commerce checkouts, and clean dashboard layouts calibrated for robust user flows inside cloud sandboxes.</p>
    <div class="flex items-center justify-center gap-3 pt-2">
      <button onclick="showToast('Loading full project galleries...')" class="px-5 py-2.5 bg-zinc-100 text-black hover:bg-white font-bold rounded-lg text-xs transition-all flex items-center gap-1.5 shadow-lg">Browse Projects</button>
      <button onclick="document.getElementById('contact-form').scrollIntoView({behavior:'smooth'})" class="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 font-bold rounded-lg text-xs border border-zinc-800 transition-all flex items-center gap-1.5 text-white">Let's Discuss</button>
    </div>
  </section>

  <!-- Projects Grid slider -->
  <main class="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
    <div class="space-y-4">
      <div class="flex justify-between items-end">
        <div>
          <h3 class="text-lg font-bold text-white uppercase tracking-wider font-mono">Curated Work Galleries</h3>
          <p class="text-xs text-zinc-500 mt-1">Examine modular, fully functional projects committed directly via sandbox APIs.</p>
        </div>
        <span class="px-2 py-0.5 rounded bg-violet-600/10 text-violet-400 text-xs font-mono font-bold" id="gallery-cnt">4 Featured designs</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid"></div>
    </div>

    <!-- Contact Form Brief -->
    <div class="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/60 max-w-xl mx-auto space-y-6 scroll-mt-24" id="contact-form">
      <div class="text-center space-y-1">
        <h3 class="text-xl font-bold text-white">Submit Collaborate Brief</h3>
        <p class="text-xs text-zinc-500">Provide parameters below to submit direct message briefings.</p>
      </div>
      <form onsubmit="submitFormCollaborate(event)" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <input required id="c-name" placeholder="Name" class="bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500">
          <input required id="c-email" type="email" placeholder="Email Address" class="bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500">
        </div>
        <textarea required id="c-msg" placeholder="Project constraints, timeline, details..." rows="3" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-violet-500"></textarea>
        <button type="submit" class="w-full py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-violet-600/10">Submit Brief</button>
      </form>
    </div>
  </main>

  <footer class="mt-12 border-t border-zinc-900 p-8 text-center text-[10px] font-mono text-zinc-500">
    <span>© 2026 ${siteTitle}. Built securely by Anik's Engine.</span>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    const PROJECTS = [
      { id: '1', title: 'Carbon Runner (ShopO E-Commerce)', desc: 'Full-featured amber/black clone storefront featuring active cart drawer quantities additions.', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80' },
      { id: '2', title: 'Anik\\\'s WhatsApp Messenger Companion', desc: 'Secure Dark Theme Teal chat thread simulator featuring typing animations, automated supporter replies.', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80' },
      { id: '3', title: 'Netflix Streamer Cinema Overlay', desc: 'Slick crimson cinematic theater row. Watch trailers full-screen inside buffering audio spectrums.', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80' },
      { id: '4', title: 'Spotify Web Player Canvas equalizer', desc: 'Neon green glassmorphic playlist manager. Scrub tracks, adjust sliders volume, watch live music bars.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' }
    ];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-zinc-800 bg-zinc-950 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = \`<i data-lucide="award" class="h-4 w-4 text-violet-400"></i><span>\${msg}</span>\`;
      parent.appendChild(div);
      setTimeout(() => div.remove(), 3500);
      lucide.createIcons();
    }

    function renderWorks() {
      const parent = document.getElementById('portfolio-grid');
      parent.innerHTML = PROJECTS.map(p => \`
        <div class="p-4 rounded-3xl bg-zinc-950 border border-zinc-850 hover:border-violet-500/20 transition-all cursor-pointer group flex flex-col justify-between">
          <div>
            <div class="relative overflow-hidden rounded-2xl aspect-video mb-3.5 border border-zinc-850">
              <img src="\${p.img\}" class="w-full h-36 object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer">
            </div>
            <h4 class="text-xs font-bold text-white font-display mt-2 group-hover:text-violet-400 transition-colors">\${p.title\}</h4>
            <p class="text-[10px] text-zinc-500 mt-1 pb-3">\${p.desc\}</p>
          </div>
          <button onclick="showToast('Loading audit credentials for ' + '\\\'' + \${p.title\} + '\\\'')" class="w-full py-1.5 bg-zinc-900 hover:bg-zinc-850 text-[9px] text-zinc-300 rounded-lg font-mono border border-zinc-800 transition-colors">Examine Core payload</button>
        </div>
      \`).join('');
      lucide.createIcons();
    }

    function submitFormCollaborate(e) {
      e.preventDefault();
      const n = document.getElementById('c-name').value.trim();
      showToast("Collaboration brief submitted successfully for: " + n + "!", "success");
      document.getElementById('c-name').value = '';
      document.getElementById('c-email').value = '';
      document.getElementById('c-msg').value = '';
    }

    window.onload = () => {
      lucide.createIcons();
      renderWorks();
    };
  </script>
</body>
</html>`;
  }

  // 6. ADAPTIVE SAAS INTUITE TRACKER (for general prompts)
  // Extract key terms from prompt to make it 100% personalized to their business!
  let taskPlaceholder = "Add requirement Node";
  let colName = "Task Metric details";
  let pageHeaderLabel = "Dynamic Multi-Agent Project Track";
  let secondaryDetail = "Calibrate active nodes to complete standard pipeline triggers.";

  const cleanPrompt = prompt.replace(/['"]/g, '');
  if (cleanPrompt.length > 5) {
    pageHeaderLabel = cleanPrompt.charAt(0).toUpperCase() + cleanPrompt.slice(1);
  }

  const isCalc = /calc/i.test(prompt);
  if (isCalc) {
    taskPlaceholder = "Add Calculation Ledger entry";
    colName = "Trigger formulas";
  }

  return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-[#05070f] text-slate-200 font-sans h-full flex flex-col justify-between">
  <!-- Nav header -->
  <header class="sticky top-0 z-40 bg-[#0d1222]/85 backdrop-blur-md p-4 px-6 border-b border-[#12c2e9]/10 flex justify-between items-center">
    <div class="flex items-center gap-3">
      <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#12c2e9] via-[#c471ed] to-[#f64f59] flex items-center justify-center text-white"><i data-lucide="sparkles" class="h-4.5 w-4.5"></i></div>
      <div>
        <h1 class="text-xs font-bold text-white font-mono tracking-wide uppercase" id="site-logo-lbl">${siteTitle}</h1>
        <p class="text-[8px] text-indigo-400 font-mono">SANDBOX ENGINE v1.5 [STABLE]</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] text-emerald-400 font-mono flex items-center gap-1 animate-pulse">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Live Workspace
      </div>
    </div>
  </header>

  <!-- Title bar -->
  <main class="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6 flex-grow flex flex-col justify-center">
    <div class="p-6 rounded-3xl bg-neutral-950 border border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="space-y-1">
        <span class="text-[9px] text-indigo-400 font-mono uppercase tracking-widest block font-bold">100% Custom Calibration translation</span>
        <h2 class="text-lg font-bold text-white font-mono" id="main-prompt-tag">${pageHeaderLabel}</h2>
        <p class="text-[11px] text-slate-400" id="secondary-desc">${secondaryDetail}</p>
      </div>
      <div class="flex gap-2 shrink-0">
        <button onclick="recomputeMockStats()" class="px-4 py-2 bg-[#0d1222] hover:bg-slate-850 text-white rounded-xl text-xs font-semibold border border-slate-800 flex items-center gap-1.5 transition-all"><i data-lucide="refresh-cw" class="h-3.5 w-3.5"></i> Sync State</button>
        <button onclick="triggerConfettiSuccess()" class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold rounded-xl shadow-lg transition-all flex items-center gap-1.5">Deploy Project</button>
      </div>
    </div>

    <!-- Layout Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <!-- Interactive Ledger Checker Checklist -->
      <div class="p-6 rounded-3xl bg-[#0d1222] border border-white/5 space-y-4">
        <div class="flex justify-between items-center border-b border-white/5 pb-3">
          <div>
            <h3 class="text-xs uppercase font-mono font-bold text-white tracking-wider">${colName}</h3>
            <p class="text-[10px] text-slate-400 mt-0.5">Toggle complete checkpoints or write brand new custom nodes below.</p>
          </div>
          <span class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-mono" id="lead-tally">4 checks</span>
        </div>

        <form onsubmit="addLeadSpec(event)" class="flex gap-2">
          <input required id="lead-inp" placeholder="${taskPlaceholder}..." class="flex-grow bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none placeholder-slate-500 focus:border-indigo-500">
          <button type="submit" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-xl transition-all">Append</button>
        </form>

        <ul id="checklist-ledger" class="space-y-2 max-h-52 overflow-y-auto pr-1"></ul>
      </div>

      <!-- Quick Metrics Analytics and Terminal log Sandbox -->
      <div class="p-6 rounded-3xl bg-[#0d1222] border border-white/5 flex flex-col justify-between space-y-4">
        <div>
          <h3 class="text-xs uppercase font-mono font-bold text-white tracking-wider">Metric Analytics Sandbox logs</h3>
          <p class="text-[10px] text-slate-400 mt-0.5">Watch simulated callbacks print instantly as configurations adapt.</p>
        </div>

        <div class="bg-black/60 rounded-2xl p-4 border border-white/5 h-44 overflow-y-auto font-mono text-[10px] text-emerald-400 space-y-2 scrollbar-none" id="terminal-box">
          <div>[SYSTEM] bootstrap gateway module online...</div>
          <div>[SYNAPSE] syncing localStorage active cache indices...</div>
        </div>

        <div class="flex justify-between items-center border-t border-white/5 pt-3 text-[9px] font-mono text-gray-500">
          <span>Latencies: 45 ms stable</span>
          <span>Redundancy: Live</span>
        </div>
      </div>

    </div>
  </main>

  <footer class="mt-8 border-t border-white/5 p-6 bg-black/35 text-center text-[10px] font-mono text-zinc-600">
    <span>© 2026 ${siteTitle} Core Space. Powered by Anik Messenger.</span>
  </footer>

  <div id="toast-wrapper" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <script>
    const LOG_STEPS = [
      "[COMPILE] composing responsive CSS classes overrides...",
      "[LEDGER] committing checklist ledger to localStorage memory...",
      "[SYSTEM] audit security scan completed: 0 warning metrics flag.",
      "[STABLE] deployment successfully locked in browser Sandbox."
    ];

    let checkList = [
      { id: 1, title: 'Check topological execution bounds', checked: false, label: 'Audit' },
      { id: 2, title: 'Verify custom payload parameters sync', checked: true, label: 'Sync' },
      { id: 3, title: 'Calibrate slider carousels test staggers', checked: false, label: 'GSAP UI' },
      { id: 4, title: 'Submit feedback mock validation checklists', checked: true, label: 'Crud Data' }
    ];

    function showToast(msg) {
      const parent = document.getElementById('toast-wrapper');
      const div = document.createElement('div');
      div.className = "p-3 rounded-lg border border-white/5 bg-slate-900 text-xs text-white shadow-xl pointer-events-auto flex items-center gap-2";
      div.innerHTML = \`<i data-lucide="info" class="h-4 w-4 text-indigo-400"></i><span>\${msg}</span>\`;
      parent.appendChild(div);
      setTimeout(() => div.remove(), 3500);
      lucide.createIcons();
    }

    function renderChecklist() {
      const parent = document.getElementById('checklist-ledger');
      parent.innerHTML = checkList.map(item => {
        const lineStyle = item.checked ? 'line-through text-gray-550 font-normal' : 'text-white font-semibold';
        return \`
          <li class="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center text-xs hover:bg-white/10 transition-colors">
            <div class="flex items-center gap-2.5 flex-1 min-w-0">
              <input type="checkbox" \${item.checked ? 'checked' : ''\} onchange="toggleCheckItem(\${item.id\})" class="accent-indigo-500 rounded h-3.5 w-3.5 bg-black">
              <span class="truncate \${lineStyle\}">\${item.title\}</span>
            </div>
            <span class="px-1.5 py-0.5 rounded bg-black text-[8px] tracking-wider uppercase text-slate-500 font-mono">\${item.label\}</span>
          </li>
        \`;
      }).join('');
      document.getElementById('lead-tally').innerText = checkList.length + ' active items';
    }

    function toggleCheckItem(id) {
       const idx = checkList.findIndex(c => c.id === id);
       if(idx !== -1) {
         checkList[idx].checked = !checkList[idx].checked;
         renderChecklist();
         writeLog("Checklist state adapted for token " + id);
         showToast("Sync checklist trigger locked.");
       }
    }

    function addLeadSpec(e) {
      e.preventDefault();
      const inp = document.getElementById('lead-inp');
      const val = inp.value.trim();
      if(val) {
        checkList.unshift({ id: Date.now(), title: val, checked: false, label: 'Custom' });
        inp.value = '';
        renderChecklist();
        writeLog("Injected checkpoint description: '" + val + "'");
        showToast("Created checkpoint: " + val);
      }
    }

    function writeLog(text) {
      const box = document.getElementById('terminal-box');
      const d = document.createElement('div');
      d.innerText = "[LOG] " + text;
      box.appendChild(d);
      box.scrollTop = box.scrollHeight;
    }

    function recomputeMockStats() {
      let index = 0;
      let timer = setInterval(() => {
        if(index < LOG_STEPS.length) {
          writeLog(LOG_STEPS[index]);
          index++;
        } else {
          clearInterval(timer);
          showToast("Sync operations complete!", "success");
        }
      }, 400);
    }

    function triggerConfettiSuccess() {
      showToast("Configured 12 API micro-nodes successfully!");
      writeLog("[DEPLOY] build artifact serving is 100% optimized and operational.");
    }

    window.onload = () => {
      lucide.createIcons();
      renderChecklist();
      recomputeMockStats();
    };
  </script>
</body>
</html>`;
}
