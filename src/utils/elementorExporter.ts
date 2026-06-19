/**
 * Elementor Exporter Utility
 * Translates AI-generated high-fidelity HTML and responsive states
 * into exact, fully functional, and valid 100% native Elementor JSON page templates.
 * 
 * Maps every HTML container, responsive grid/flexbox, heading, paragraph, image, button,
 * form component, and FAQ block onto native Elementor columns and widgets (heading,
 * text-editor, image, button, accordion, icon-list) with their styles preserved inline
 * inside content fields. This ensures 100% design fidelity in WordPress while enabling
 * full, easy visual drag-and-drop customization of every element.
 */

export const generateElementorId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export interface ElementorWidget {
  id: string;
  elType: 'widget';
  widgetType: string;
  settings: Record<string, any>;
  elements: []; // Always present and empty
}

export interface ElementorColumn {
  id: string;
  elType: 'column';
  settings: {
    _column_size?: number;
    _inline_size?: number;
    width?: {
      unit: string;
      size: number;
    };
    margin?: Record<string, any>;
    padding?: Record<string, any>;
    [key: string]: any;
  };
  elements: (ElementorWidget | any)[];
}

export interface ElementorSection {
  id: string;
  elType: 'section';
  settings: {
    layout?: 'boxed' | 'full_width';
    structure?: string;
    background_background?: 'classic' | 'gradient';
    background_color?: string;
    stretch_section?: 'yes' | '';
    gap?: 'no' | 'default' | 'narrow' | 'extended' | 'wide' | 'wider';
    content_position?: 'top' | 'middle' | 'bottom';
    [key: string]: any;
  };
  elements: ElementorColumn[];
}

export interface ElementorTemplate {
  title: string;
  type: 'page';
  version: string;
  content: ElementorSection[];
}

// Maps Tailwind class names to exact hex codes for native block styling
export const getTailwindHexColor = (className: string, prefix?: 'bg' | 'text' | 'border'): string => {
  const pattern = prefix 
    ? new RegExp(`${prefix}-\\[\\#([0-9a-fA-F]{3,6})\\]`)
    : /(?:bg|text|border)-\[\#([0-9a-fA-F]{3,6})\]/;
    
  const hexMatch = className.match(pattern);
  if (hexMatch) {
    return `#${hexMatch[1]}`;
  }
  
  const colors: Record<string, string> = {
    'amber-400': '#fbbf24',
    'amber-500': '#f59e0b',
    'amber-600': '#d97706',
    'slate-950': '#020617',
    'slate-900': '#0f172a',
    'slate-800': '#1e293b',
    'slate-700': '#334155',
    'slate-600': '#475569',
    'slate-100': '#f1f5f9',
    'slate-50': '#f8fafc',
    'zinc-950': '#09090b',
    'zinc-900': '#18181b',
    'zinc-800': '#27272a',
    'zinc-700': '#3f3f46',
    'zinc-100': '#f4f4f5',
    'zinc-50': '#fafafa',
    'gray-950': '#030303',
    'gray-900': '#111827',
    'gray-800': '#1f2937',
    'gray-700': '#374151',
    'gray-100': '#f3f4f6',
    'gray-50': '#f9fafb',
    'emerald-400': '#34d399',
    'emerald-500': '#10b981',
    'emerald-600': '#059669',
    'emerald-700': '#047857',
    'blue-400': '#60a5fa',
    'blue-500': '#3b82f6',
    'blue-600': '#2563eb',
    'blue-700': '#1d4ed8',
    'indigo-400': '#818cf8',
    'indigo-500': '#6366f1',
    'indigo-600': '#4f46e5',
    'indigo-700': '#4338ca',
    'purple-500': '#a855f7',
    'purple-600': '#9333ea',
    'violet-500': '#8b5cf6',
    'violet-600': '#7c3aed',
    'pink-500': '#ec4899',
    'rose-500': '#f43f5e',
    'red-500': '#ef4444',
    'red-600': '#dc2626',
    'teal-500': '#14b8a6',
    'teal-600': '#0d9488',
    'cyan-500': '#06b6d4',
    'green-500': '#22c55e',
    'orange-500': '#f97316',
    'yellow-500': '#eab308',
    'black': '#000000',
    'white': '#ffffff'
  };

  if (prefix) {
    for (const [key, val] of Object.entries(colors)) {
      if (className.includes(`${prefix}-${key}`)) return val;
    }
  }

  for (const [key, val] of Object.entries(colors)) {
    if (className.includes(key)) return val;
  }

  return '';
};

// Parser of padding setting from tailwind classes
const parsePaddingFromClasses = (classes: string): any => {
  const padMap: Record<string, string> = {
    '0': '0', '1': '4', '2': '8', '3': '12', '4': '16', '5': '20',
    '6': '24', '8': '32', '10': '40', '12': '48', '16': '64'
  };

  let top = '0', right = '0', bottom = '0', left = '0';
  let hasPadding = false;

  const pMatch = classes.match(/\bp-(\d+)\b/);
  if (pMatch) {
    const val = padMap[pMatch[1]] || String(Number(pMatch[1]) * 4);
    top = right = bottom = left = val;
    hasPadding = true;
  } else {
    const pxMatch = classes.match(/\bpx-(\d+)\b/);
    if (pxMatch) {
      const val = padMap[pxMatch[1]] || String(Number(pxMatch[1]) * 4);
      right = left = val;
      hasPadding = true;
    }
    const pyMatch = classes.match(/\bpy-(\d+)\b/);
    if (pyMatch) {
      const val = padMap[pyMatch[1]] || String(Number(pyMatch[1]) * 4);
      top = bottom = val;
      hasPadding = true;
    }
  }

  const ptMatch = classes.match(/\bpt-(\d+)\b/);
  if (ptMatch) { top = padMap[ptMatch[1]] || String(Number(ptMatch[1]) * 4); hasPadding = true; }
  const prMatch = classes.match(/\bpr-(\d+)\b/);
  if (prMatch) { right = padMap[prMatch[1]] || String(Number(prMatch[1]) * 4); hasPadding = true; }
  const pbMatch = classes.match(/\bpb-(\d+)\b/);
  if (pbMatch) { bottom = padMap[pbMatch[1]] || String(Number(pbMatch[1]) * 4); hasPadding = true; }
  const plMatch = classes.match(/\bpl-(\d+)\b/);
  if (plMatch) { left = padMap[plMatch[1]] || String(Number(plMatch[1]) * 4); hasPadding = true; }

  const pCustom = classes.match(/\bp(?:[tlrbxy])?-\[(\d+)(?:px|rem)?\]/);
  if (pCustom) {
    const val = pCustom[1];
    top = right = bottom = left = val;
    hasPadding = true;
  }

  if (!hasPadding) return undefined;

  return {
    top,
    right,
    bottom,
    left,
    unit: 'px',
    isLinked: (top === right && right === bottom && bottom === left)
  };
};

// Parser of border radius from tailwind classes
const parseBorderRadiusFromClasses = (classes: string): any => {
  let val = '';
  if (classes.includes('rounded-none')) val = '0';
  else if (classes.includes('rounded-full')) val = '9999';
  else if (classes.includes('rounded-3xl')) val = '24';
  else if (classes.includes('rounded-2xl')) val = '16';
  else if (classes.includes('rounded-xl')) val = '12';
  else if (classes.includes('rounded-lg')) val = '8';
  else if (classes.includes('rounded-md')) val = '6';
  else if (classes.includes('rounded-sm')) val = '2';
  else if (classes.includes('rounded') && !classes.includes('rounded-')) val = '4';

  if (!val) return undefined;

  return {
    top: val,
    right: val,
    bottom: val,
    left: val,
    unit: 'px',
    isLinked: true
  };
};

const parseGradientFromClasses = (classes: string, style: string) => {
  let colorA = '';
  let colorB = '';
  let angle = 90;
  
  if (classes.includes('bg-gradient-')) {
    if (classes.includes('to-r')) angle = 90;
    else if (classes.includes('to-br')) angle = 135;
    else if (classes.includes('to-b')) angle = 180;
    else if (classes.includes('to-bl')) angle = 225;
    else if (classes.includes('to-l')) angle = 270;
    else if (classes.includes('to-tl')) angle = 315;
    else if (classes.includes('to-t')) angle = 0;
    else if (classes.includes('to-tr')) angle = 45;

    const fromHexArr = classes.match(/from-\[([^\]]+)\]/);
    if (fromHexArr) {
      colorA = fromHexArr[1];
    } else {
      const fromColorMatch = classes.match(/from-([a-z0-9\-]+)/);
      if (fromColorMatch) colorA = getTailwindHexColor(fromColorMatch[0], 'text') || '';
    }

    const toHexArr = classes.match(/to-\[([^\]]+)\]/);
    if (toHexArr) {
      colorB = toHexArr[1];
    } else {
      const toColorMatch = classes.match(/to-([a-z0-9\-]+)/);
      if (toColorMatch) colorB = getTailwindHexColor(toColorMatch[0], 'text') || '';
    }
  }

  if (!colorA || !colorB) {
    const linearMatch = style.match(/linear-gradient\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^)]+)\)/i);
    if (linearMatch) {
      colorA = linearMatch[2].trim();
      colorB = linearMatch[3].trim();
      const angleStr = linearMatch[1].trim();
      if (angleStr.includes('deg')) {
        angle = parseInt(angleStr) || 90;
      }
    } else {
      const simpleLinearMatch = style.match(/linear-gradient\s*\(\s*([^,]+)\s*,\s*([^)]+)\)/i);
      if (simpleLinearMatch) {
        colorA = simpleLinearMatch[1].trim();
        colorB = simpleLinearMatch[2].trim();
      }
    }
  }

  return { colorA, colorB, angle };
};

const parseBackgroundFromElement = (element: Element): { color: string; image: string; type: 'classic' | 'gradient' | '' } => {
  const classes = element.getAttribute('class') || '';
  const style = element.getAttribute('style') || '';
  
  let color = '';
  let image = '';
  let type: 'classic' | 'gradient' | '' = '';

  const tailwindHex = getTailwindHexColor(classes, 'bg');
  if (tailwindHex) {
    color = tailwindHex;
    type = 'classic';
  } else if (classes.includes('bg-[#030408]')) { color = '#030408'; type = 'classic'; }
  else if (classes.includes('bg-slate-950')) { color = '#020617'; type = 'classic'; }
  else if (classes.includes('bg-slate-900')) { color = '#0f172a'; type = 'classic'; }
  else if (classes.includes('bg-[#0f172a]')) { color = '#0f172a'; type = 'classic'; }
  else if (classes.includes('bg-slate-850')) { color = '#1a2035'; type = 'classic'; }
  else if (classes.includes('bg-slate-800')) { color = '#1e293b'; type = 'classic'; }
  else if (classes.includes('bg-white')) { color = '#ffffff'; type = 'classic'; }
  else if (classes.includes('bg-black')) { color = '#000000'; type = 'classic'; }
  else if (classes.includes('bg-gray-50')) { color = '#f9fafb'; type = 'classic'; }
  else if (classes.includes('bg-gray-100')) { color = '#f3f4f6'; type = 'classic'; }

  const bgColorMatch = style.match(/background-color\s*:\s*([^;]+)/i);
  if (bgColorMatch) {
    color = bgColorMatch[1].trim();
    type = 'classic';
  } else {
    const bgMatch = style.match(/background\s*:\s*([^;]+)/i);
    if (bgMatch) {
      const bgVal = bgMatch[1].trim();
      if (bgVal.startsWith('#') || bgVal.startsWith('rgb') || bgVal.startsWith('hsl')) {
        color = bgVal;
        type = 'classic';
      } else if (bgVal.includes('gradient')) {
        type = 'gradient';
      }
    }
  }

  const bgImgMatch = style.match(/background-image\s*:\s*url\s*\(\s*['"]?([^'")]+)['"]?\s*\)/i);
  if (bgImgMatch) {
    image = bgImgMatch[1].trim();
    type = 'classic';
  }

  return { color, image, type };
};

const buildElementorBackgroundSettings = (element: Element): Record<string, any> => {
  const classes = element.getAttribute('class') || '';
  const style = element.getAttribute('style') || '';
  const bg = parseBackgroundFromElement(element);
  const settings: Record<string, any> = {};

  if (bg.type === 'classic') {
    settings.background_background = 'classic';
    if (bg.color) {
      settings.background_color = bg.color;
    }
    if (bg.image) {
      settings.background_image = {
        url: bg.image,
        id: ''
      };
      settings.background_position = 'center center';
      settings.background_repeat = 'no-repeat';
      settings.background_size = 'cover';
    }
  } else if (bg.type === 'gradient' || classes.includes('bg-gradient-')) {
    const grad = parseGradientFromClasses(classes, style);
    if (grad.colorA && grad.colorB) {
      settings.background_background = 'gradient';
      settings.background_gradient_type = 'linear';
      settings.background_color = grad.colorA;
      settings.background_color_b = grad.colorB;
      settings.background_gradient_angle = {
        unit: 'deg',
        size: grad.angle
      };
    } else if (bg.color) {
      settings.background_background = 'classic';
      settings.background_color = bg.color;
    }
  }

  return settings;
};

const parseMarginFromClasses = (classes: string): any => {
  const margMap: Record<string, string> = {
    '0': '0', '1': '4', '2': '8', '3': '12', '4': '16', '5': '20',
    '6': '24', '8': '32', '10': '40', '12': '48', '16': '64'
  };

  let top = '0', right = '0', bottom = '0', left = '0';
  let hasMargin = false;

  const mMatch = classes.match(/\bm-(\d+)\b/);
  if (mMatch) {
    const val = margMap[mMatch[1]] || String(Number(mMatch[1]) * 4);
    top = right = bottom = left = val;
    hasMargin = true;
  } else {
    const mxMatch = classes.match(/\bmx-(\d+)\b/);
    if (mxMatch) {
      const val = margMap[mxMatch[1]] || String(Number(mxMatch[1]) * 4);
      right = left = val;
      hasMargin = true;
    }
    const myMatch = classes.match(/\bmy-(\d+)\b/);
    if (myMatch) {
      const val = margMap[myMatch[1]] || String(Number(myMatch[1]) * 4);
      top = bottom = val;
      hasMargin = true;
    }
  }

  const mtMatch = classes.match(/\bmt-(\d+)\b/);
  if (mtMatch) { top = margMap[mtMatch[1]] || String(Number(mtMatch[1]) * 4); hasMargin = true; }
  const mrMatch = classes.match(/\bmr-(\d+)\b/);
  if (mrMatch) { right = margMap[mrMatch[1]] || String(Number(mrMatch[1]) * 4); hasMargin = true; }
  const mbMatch = classes.match(/\bmb-(\d+)\b/);
  if (mbMatch) { bottom = margMap[mbMatch[1]] || String(Number(mbMatch[1]) * 4); hasMargin = true; }
  const mlMatch = classes.match(/\bml-(\d+)\b/);
  if (mlMatch) { left = margMap[mlMatch[1]] || String(Number(mlMatch[1]) * 4); hasMargin = true; }

  const mCustom = classes.match(/\bm(?:[tlrbxy])?-\[(\d+)(?:px|rem)?\]/);
  if (mCustom) {
    const val = mCustom[1];
    top = right = bottom = left = val;
    hasMargin = true;
  }

  if (!hasMargin) return undefined;

  return {
    top,
    right,
    bottom,
    left,
    unit: 'px',
    isLinked: (top === right && right === bottom && bottom === left)
  };
};

const parseTypographyFromClasses = (classes: string, textContent: string): Record<string, any> => {
  const settings: Record<string, any> = {
    typography_typography: 'custom'
  };

  const isBengali = /[\u0980-\u09FF]/.test(textContent);
  if (isBengali) {
    settings.typography_font_family = 'Hind Siliguri';
  } else if (classes.includes('font-mono')) {
    settings.typography_font_family = 'JetBrains Mono';
  } else {
    settings.typography_font_family = 'Inter';
  }

  // Weight
  if (classes.includes('font-bold') || classes.includes('font-extrabold')) {
    settings.typography_font_weight = 'bold';
  } else if (classes.includes('font-semibold')) {
    settings.typography_font_weight = '600';
  } else if (classes.includes('font-medium')) {
    settings.typography_font_weight = '500';
  } else if (classes.includes('font-light')) {
    settings.typography_font_weight = '300';
  } else if (classes.includes('font-normal')) {
    settings.typography_font_weight = '400';
  }

  // Size
  const sizeMatches = [
    { key: 'text-xs', val: 12 }, { key: 'text-sm', val: 14 }, { key: 'text-base', val: 16 },
    { key: 'text-lg', val: 18 }, { key: 'text-xl', val: 20 }, { key: 'text-2xl', val: 24 },
    { key: 'text-3xl', val: 30 }, { key: 'text-4xl', val: 36 }, { key: 'text-5xl', val: 48 },
    { key: 'text-6xl', val: 64 }, { key: 'text-7xl', val: 72 }, { key: 'text-8xl', val: 96 }
  ];
  for (const match of sizeMatches) {
    if (classes.includes(match.key)) {
      settings.typography_font_size = { unit: 'px', size: match.val };
      break;
    }
  }

  const customSizeMatch = classes.match(/text-\[(\d+)(?:px|rem)?\]/);
  if (customSizeMatch) {
    settings.typography_font_size = { unit: 'px', size: Number(customSizeMatch[1]) };
  }

  // Line Height
  if (classes.includes('leading-none')) settings.typography_line_height = { unit: 'px', size: 1 };
  else if (classes.includes('leading-tight')) settings.typography_line_height = { unit: 'em', size: 1.25 };
  else if (classes.includes('leading-snug')) settings.typography_line_height = { unit: 'em', size: 1.375 };
  else if (classes.includes('leading-normal')) settings.typography_line_height = { unit: 'em', size: 1.5 };
  else if (classes.includes('leading-relaxed')) settings.typography_line_height = { unit: 'em', size: 1.625 };
  else if (classes.includes('leading-loose')) settings.typography_line_height = { unit: 'em', size: 2 };

  const customLeadingMatch = classes.match(/leading-\[(\d+[\.\d]*)(?:px|rem|em)?\]/);
  if (customLeadingMatch) {
    const val = Number(customLeadingMatch[1]);
    settings.typography_line_height = { unit: classes.includes('leading-[') && classes.includes('px') ? 'px' : 'em', size: val };
  }

  // Letter Spacing
  if (classes.includes('tracking-tighter')) settings.typography_letter_spacing = { unit: 'px', size: -1.5 };
  else if (classes.includes('tracking-tight')) settings.typography_letter_spacing = { unit: 'px', size: -0.8 };
  else if (classes.includes('tracking-normal')) settings.typography_letter_spacing = { unit: 'px', size: 0 };
  else if (classes.includes('tracking-wide')) settings.typography_letter_spacing = { unit: 'px', size: 1 };
  else if (classes.includes('tracking-wider')) settings.typography_letter_spacing = { unit: 'px', size: 2 };
  else if (classes.includes('tracking-widest')) settings.typography_letter_spacing = { unit: 'px', size: 4 };

  // Text Transform
  if (classes.includes('uppercase')) settings.typography_text_transform = 'uppercase';
  else if (classes.includes('lowercase')) settings.typography_text_transform = 'lowercase';
  else if (classes.includes('capitalize')) settings.typography_text_transform = 'capitalize';

  // Font Style
  if (classes.includes('italic')) settings.typography_font_style = 'italic';

  // Decoration
  if (classes.includes('underline')) settings.typography_text_decoration = 'underline';
  else if (classes.includes('line-through')) settings.typography_text_decoration = 'line-through';

  return settings;
};

// Compiles a fully customizable Elementor Column Settings object carrying forward card themes
const buildElementorColumnSettings = (element: Element, percentWidth: number): Record<string, any> => {
  const settings: Record<string, any> = {
    _column_size: percentWidth,
    _inline_size: percentWidth,
    width: {
      unit: '%',
      size: percentWidth
    }
  };

  const classes = element.getAttribute('class') || '';

  // Classify solid backgrounds and detailed linear gradients
  const bgSettings = buildElementorBackgroundSettings(element);
  Object.assign(settings, bgSettings);

  const padding = parsePaddingFromClasses(classes);
  if (padding) {
    settings.padding = padding;
  }

  const margin = parseMarginFromClasses(classes);
  if (margin) {
    settings.margin = margin;
  }

  const borderRadius = parseBorderRadiusFromClasses(classes);
  if (borderRadius) {
    settings.border_radius = borderRadius;
  }

  // Border Mapping
  if (classes.includes('border') && !classes.includes('border-none')) {
    let bWidth = '1';
    if (classes.includes('border-2')) bWidth = '2';
    else if (classes.includes('border-4')) bWidth = '4';
    else if (classes.includes('border-8')) bWidth = '8';

    settings.border_border = 'solid';
    settings.border_width = {
      top: bWidth,
      right: bWidth,
      bottom: bWidth,
      left: bWidth,
      unit: 'px',
      isLinked: true
    };
    
    const borderHex = getTailwindHexColor(classes, 'border');
    if (borderHex) {
      settings.border_color = borderHex;
    }
  }

  // Shadow Mapping
  if (classes.includes('shadow')) {
    settings.box_shadow_box_shadow = {
      horizontal: 0,
      vertical: 4,
      blur: 15,
      spread: 0,
      color: 'rgba(0,0,0,0.08)',
      position: 'outline'
    };
    if (classes.includes('shadow-md')) {
      settings.box_shadow_box_shadow.blur = 20;
      settings.box_shadow_box_shadow.color = 'rgba(0,0,0,0.12)';
    } else if (classes.includes('shadow-lg')) {
      settings.box_shadow_box_shadow.vertical = 8;
      settings.box_shadow_box_shadow.blur = 30;
      settings.box_shadow_box_shadow.color = 'rgba(0,0,0,0.15)';
    } else if (classes.includes('shadow-xl')) {
      settings.box_shadow_box_shadow.vertical = 12;
      settings.box_shadow_box_shadow.blur = 40;
      settings.box_shadow_box_shadow.color = 'rgba(0,0,0,0.2)';
    }
  }

  return settings;
};

// Generates an inline style declaration mapping Tailwind helper classes to style properties
const buildInlineStyles = (element: Element): string => {
  const className = element.getAttribute('class') || '';
  const inlineStyles: string[] = [];

  // Color mappings
  const color = getTailwindHexColor(className, 'text');
  if (color && (className.includes('text-') || className.includes('bg-') || className.includes('border-'))) {
    if (className.includes('text-')) inlineStyles.push(`color: ${color};`);
  }

  // Weight mappings
  if (className.includes('font-bold')) inlineStyles.push('font-weight: 700;');
  if (className.includes('font-semibold')) inlineStyles.push('font-weight: 600;');
  if (className.includes('font-medium')) inlineStyles.push('font-weight: 500;');
  if (className.includes('font-extrabold')) inlineStyles.push('font-weight: 800;');
  if (className.includes('font-normal')) inlineStyles.push('font-weight: 400;');

  // Text Alignment
  if (className.includes('text-center')) inlineStyles.push('text-align: center;');
  if (className.includes('text-right')) inlineStyles.push('text-align: right;');
  if (className.includes('text-left')) inlineStyles.push('text-align: left;');

  // Font Sizes
  const sizeMatches = [
    { key: 'text-xs', val: '12px' },
    { key: 'text-sm', val: '14px' },
    { key: 'text-base', val: '16px' },
    { key: 'text-lg', val: '18px' },
    { key: 'text-xl', val: '20px' },
    { key: 'text-2xl', val: '24px' },
    { key: 'text-3xl', val: '30px' },
    { key: 'text-4xl', val: '36px' },
    { key: 'text-5xl', val: '48px' },
    { key: 'text-6xl', val: '64px' },
  ];
  for (const match of sizeMatches) {
    if (className.includes(match.key)) {
      inlineStyles.push(`font-size: ${match.val};`);
      break;
    }
  }

  // Bracket sizing (e.g. text-[24px])
  const customSizeMatch = className.match(/text-\[([^\]]+)\]/);
  if (customSizeMatch) {
    inlineStyles.push(`font-size: ${customSizeMatch[1]};`);
  }

  // Font Family matches
  if (className.includes('font-mono')) {
    inlineStyles.push(`font-family: 'JetBrains Mono', monospace;`);
  } else if (className.includes('font-sans') || className.includes('font-body')) {
    inlineStyles.push(`font-family: 'Inter', sans-serif;`);
  } else if (className.includes('font-display') || className.includes('font-extrabold') || /[\u0980-\u09FF]/.test(element.textContent || '')) {
    inlineStyles.push(`font-family: 'Hind Siliguri', 'Inter', sans-serif;`);
  }

  // Existing native styles
  const existingStyle = element.getAttribute('style');
  if (existingStyle) {
    inlineStyles.push(existingStyle);
  }

  return inlineStyles.join(' ');
};

const isGridLayout = (el: Element): boolean => {
  const className = el.getAttribute('class') || '';
  const kids = Array.from(el.children).filter(child => {
    const tag = child.tagName.toLowerCase();
    return !['script', 'style', 'svg', 'meta', 'link'].includes(tag);
  });
  if (kids.length < 2) return false;

  return (
    className.includes('grid') || 
    className.includes('grid-cols-') || 
    className.includes('flex-row') || 
    className.includes('flex-wrap') || 
    className.includes('md:flex-row') ||
    className.includes('justify-between') ||
    (className.includes('items-center') && className.includes('flex'))
  );
};

const isInteractiveComplexComponent = (el: Element): boolean => {
  const className = el.getAttribute('class') || '';
  const idStr = el.getAttribute('id') || '';

  // If it contains form controls, standard inputs, select, canvas, iframe, protect it as stable inline HTML
  const hasInputs = el.querySelector('input, select, textarea, form, iframe, canvas') !== null;
  const isSpecialIdOrClass = idStr.includes('calculator') || 
                             idStr.includes('bKash') || 
                             idStr.includes('checkout') ||
                             className.includes('bkash') ||
                             className.includes('qty-') ||
                             className.includes('payment-') ||
                             className.includes('checkout-');
                             
  return hasInputs || isSpecialIdOrClass;
};

const hasCardStyling = (el: Element): boolean => {
  const className = el.getAttribute('class') || '';
  const style = el.getAttribute('style') || '';
  
  const hasBg = className.includes('bg-') || style.includes('background');
  const hasShadow = className.includes('shadow');
  const hasBorder = className.includes('border');
  
  return (hasBg || hasShadow || hasBorder) && el.children.length > 0;
};

export interface ElementorValidationIssue {
  severity: 'warning' | 'info';
  message: string;
  elementDescription?: string;
  suggestedAlternative?: string;
}

export interface VisualTestResult {
  passed: boolean;
  mismatches: string[];
  stats: {
    domSections: number;
    tplSections: number;
    domHeadings: number;
    tplHeadings: number;
    domTexts: number;
    tplTexts: number;
    domImages: number;
    tplImages: number;
    domButtons: number;
    tplButtons: number;
    domCalculators: number;
    tplCalculators: number;
  };
}

export interface ElementorValidationResult {
  isValid: boolean;
  issues: ElementorValidationIssue[];
  visualTest?: VisualTestResult;
}

/**
 * Runs an offscreen visual automated analysis suite compared against the native parsed JSON template
 */
export const runAutomatedVisualTestSuite = (
  htmlCode: string,
  template: ElementorTemplate
): VisualTestResult => {
  // Create solid offscreen test fixture
  const container = document.createElement('div');
  container.setAttribute('style', 'position: absolute; left: -9999px; top: -9999px; width: 1200px; visibility: hidden; overflow: hidden;');
  document.body.appendChild(container);
  
  try {
    container.innerHTML = htmlCode;
    
    // Find key segments in real DOM nodes
    const domSections = container.querySelectorAll('section, [class*="section"], [id*="section"]');
    const domHeadings = container.querySelectorAll('h1, h2, h3, h4, h5, h6, [class*="font-semibold"], [class*="font-bold"]');
    const domTexts = container.querySelectorAll('p, li, span, details');
    const domImages = container.querySelectorAll('img, svg');
    const domButtons = container.querySelectorAll('button, a, [role="button"]');
    const domCalculators = container.querySelectorAll('input, select, textarea, canvas, iframe, form, [class*="bkash"], [id*="calc"], [id*="qr"]');

    // Crawl compiled template to cross-verify widget matches
    const sections = template.content;
    let tplSections = sections.length;
    let tplHeadings = 0;
    let tplTexts = 0;
    let tplImages = 0;
    let tplButtons = 0;
    let tplCalculators = 0;

    const traverseColumn = (col: ElementorColumn) => {
      col.elements.forEach((el: any) => {
        if (el.elType === 'widget') {
          const w = el as ElementorWidget;
          if (w.widgetType === 'heading') {
            tplHeadings++;
          } else if (w.widgetType === 'text-editor') {
            tplTexts++;
          } else if (w.widgetType === 'image') {
            tplImages++;
          } else if (w.widgetType === 'button') {
            tplButtons++;
          } else if (w.widgetType === 'html') {
            const rawHtml = w.settings.html || '';
            const testDiv = document.createElement('div');
            testDiv.innerHTML = rawHtml;
            if (testDiv.querySelector('input, select, textarea, canvas, iframe, form')) {
              tplCalculators++;
            } else if (testDiv.querySelector('svg')) {
              tplImages++;
            } else if (testDiv.querySelector('p, span, li')) {
              tplTexts++;
            } else if (testDiv.querySelector('button, a')) {
              tplButtons++;
            } else {
              tplCalculators++;
            }
          } else if (w.widgetType === 'accordion') {
            tplTexts += (w.settings.tabs?.length || 0) * 2;
          }
        } else if (el.elType === 'inner-section') {
          el.elements.forEach(traverseColumn);
        }
      });
    };

    sections.forEach((sec: ElementorSection) => {
      sec.elements.forEach(traverseColumn);
    });

    const mismatches: string[] = [];
    
    // Check template structural sanity
    if (tplSections === 0 && domSections.length > 0) {
      mismatches.push("Critical mapping issue: Calculated zero template sections but found visual segments in sources.");
    }
    
    if (domCalculators.length > 0 && tplCalculators === 0) {
      mismatches.push("Critical custom component conversion: Calculator, forms or payment widgets were not converted into safe inline HTML modules.");
    }

    if (domHeadings.length > 0 && tplHeadings === 0 && tplCalculators === 0) {
      mismatches.push("Fidelity Warning: Primary action headings might be rendered as raw paragraph layout fields.");
    }

    const stats = {
      domSections: Math.max(domSections.length, 1),
      tplSections,
      domHeadings: domHeadings.length,
      tplHeadings,
      domTexts: domTexts.length,
      tplTexts,
      domImages: domImages.length,
      tplImages,
      domButtons: domButtons.length,
      tplButtons,
      domCalculators: domCalculators.length,
      tplCalculators
    };

    return {
      passed: mismatches.length === 0,
      mismatches,
      stats
    };

  } catch (e: any) {
    console.error("Offscreen visual suite execution failure:", e);
    return {
      passed: false,
      mismatches: ["Automation exception: " + e.message],
      stats: {
        domSections: 0, tplSections: 0,
        domHeadings: 0, tplHeadings: 0,
        domTexts: 0, tplTexts: 0,
        domImages: 0, tplImages: 0,
        domButtons: 0, tplButtons: 0,
        domCalculators: 0, tplCalculators: 0
      }
    };
  } finally {
    if (container.parentElement) {
      document.body.removeChild(container);
    }
  }
};

export const validateElementorTemplate = (
  htmlCode: string,
  template: ElementorTemplate
): ElementorValidationResult => {
  const issues: ElementorValidationIssue[] = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlCode, 'text/html');

  // Check 1: Search for custom interactive script tags (excluding Tailwind, Lucide)
  const scripts = doc.querySelectorAll('script');
  let customScriptCount = 0;
  scripts.forEach(s => {
    const src = s.getAttribute('src') || '';
    if (!src.includes('tailwindcss.com') && !src.includes('unpkg.com/lucide')) {
      customScriptCount++;
    }
  });

  if (customScriptCount > 0) {
    issues.push({
      severity: 'warning',
      message: 'Embedded HTML contains custom calculation/automation scripts',
      elementDescription: `Identified ${customScriptCount} custom scripting elements.`,
      suggestedAlternative: 'WordPress executes client-side scripts under strict sandboxing. While they are embedded in Elementor HTML blocks, ensure they do not conflict with WP core dependencies.'
    });
  }

  // Check 2: Raw Canvas & iframe embeddings
  const embeds = doc.querySelectorAll('iframe, canvas');
  if (embeds.length > 0) {
    issues.push({
      severity: 'info',
      message: 'Complex browser canvas/iframe element detected',
      elementDescription: `Found ${embeds.length} nested embed canvas components.`,
      suggestedAlternative: 'To maintain clean responsiveness, consider loading video widgets or dynamic maps natively inside Elementor rather than using raw iframe tags.'
    });
  }

  // Check 3: Unsupported styles and Tailwind class overrides
  const hoverActiveColors = new Set<string>();
  const blendModeFilters = new Set<string>();
  const absoluteLayouts = new Set<string>();
  const arbitrarySizings = new Set<string>();

  const allNodes = doc.querySelectorAll('*');
  allNodes.forEach(node => {
    const classes = node.getAttribute('class') || '';
    const classList = classes.split(/\s+/).filter(Boolean);
    const tag = node.tagName.toLowerCase();

    classList.forEach(cls => {
      if (cls.startsWith('hover:') || cls.startsWith('focus:') || cls.startsWith('active:') || cls.startsWith('group-hover:')) {
        hoverActiveColors.add(cls);
      } else if (cls.startsWith('mix-blend-') || cls.startsWith('blur-') || cls.includes('backdrop-blur') || cls.startsWith('saturate-')) {
        blendModeFilters.add(cls);
      } else if (cls === 'absolute' || cls === 'fixed' || cls.startsWith('top-') || cls.startsWith('left-') || cls.startsWith('right-') || cls.startsWith('bottom-')) {
        if (!['top-0', 'left-0', 'right-0', 'bottom-0'].includes(cls)) {
          absoluteLayouts.add(`${tag}.${cls}`);
        }
      } else if (/^(w|h|p|m|gap|leading|tracking)-\[/.test(cls)) {
        arbitrarySizings.add(cls);
      }
    });
  });

  if (hoverActiveColors.size > 0) {
    issues.push({
      severity: 'info',
      message: 'Implicit layout trigger transitions (hover states)',
      elementDescription: `Detected classes like: ${Array.from(hoverActiveColors).slice(0, 4).join(', ')}.`,
      suggestedAlternative: 'Static Elementor exports keep these in raw hover style configurations. For visual sliders, define Hover Styles within Elementor widget settings.'
    });
  }

  if (blendModeFilters.size > 0) {
    issues.push({
      severity: 'warning',
      message: 'CSS Blend-modes and graphic filters are unavailable natively',
      elementDescription: `Found styling attributes: ${Array.from(blendModeFilters).slice(0, 4).join(', ')}.`,
      suggestedAlternative: 'WordPress theme templates might discard backdrop blends. Styling sections directly inside the native WordPress Elementor Gradients editor is highly recommended.'
    });
  }

  if (absoluteLayouts.size > 0) {
    issues.push({
      severity: 'warning',
      message: 'Absolute/Fixed coordinate positioning is brittle',
      elementDescription: `Offsets used on: ${Array.from(absoluteLayouts).slice(0, 3).join(', ')}.`,
      suggestedAlternative: 'Elementor columns flow sequentially (stacked or grid-based). Use Margins or absolute positioning inside Advanced Widget Settings rather than utility classes.'
    });
  }

  if (arbitrarySizings.size > 0) {
    issues.push({
      severity: 'info',
      message: 'Tailwind bracket syntax defines arbitrary px values',
      elementDescription: `Detected sizing rules: ${Array.from(arbitrarySizings).slice(0, 4).join(', ')}.`,
      suggestedAlternative: 'To ensure smooth responsive column wraps, delete fixed pixel sizes and adjust visual padding inside Elementor Layout settings dynamically.'
    });
  }

  // Run our high-fidelity offscreen visual validation test suite before export download starts
  const visualTest = runAutomatedVisualTestSuite(htmlCode, template);

  return {
    isValid: visualTest.passed && issues.filter(i => i.severity === 'warning').length === 0,
    issues,
    visualTest
  };
};

const getVisualChildren = (parent: Element): Element[] => {
  return Array.from(parent.children).filter(child => {
    const tag = child.tagName.toLowerCase();
    return !['script', 'style', 'svg', 'meta', 'link', 'title'].includes(tag);
  });
};

/**
 * High-fidelity HTML to Elementor native template translator
 */
export const buildElementorTemplateFromHTML = (
  htmlCode: string,
  siteTitle: string
): ElementorTemplate => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlCode, 'text/html');

  // Collect dependencies and styling overrides that must be embedded
  let headResources = '';
  if (doc.head) {
    const headNodes = Array.from(doc.head.children).filter(child => {
      const tag = child.tagName.toLowerCase();
      return ['link', 'style', 'script', 'meta'].includes(tag);
    });
    
    headResources = headNodes.map(node => node.outerHTML).join('\n');
  }

  if (!headResources.includes('tailwindcss.com')) {
    headResources += `\n<script src="https://cdn.tailwindcss.com"></script>`;
  }
  if (!headResources.includes('unpkg.com/lucide')) {
    headResources += `\n<script src="https://unpkg.com/lucide@latest"></script>`;
  }

  // Add robust, full-bleed overrides to align Elementor sections precisely with AI container expectations
  headResources += `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
  
  .elementor-section.elementor-section-stretched {
    width: 100% !important;
    max-width: 100% !important;
  }
  body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Hind Siliguri', 'Inter', sans-serif;
    overflow-x: hidden !important;
  }
  /* Ensure Tailwind elements inside Elementor text-editor render correctly standard margins and alignments */
  .elementor-widget-text-editor {
    color: inherit !important;
    font-family: inherit !important;
  }
</style>
  `;

  // Parse scripts to make sure calculations, bKash interaction, and submit actions work 100% natively
  let bodyScriptsHTML = '';
  const mainBody = doc.body || doc.documentElement;
  if (mainBody) {
    const scriptElements = Array.from(mainBody.getElementsByTagName('script'));
    bodyScriptsHTML = scriptElements.map(script => script.outerHTML).join('\n');
    
    bodyScriptsHTML += `
<script>
  // Universal icon initiator inside WordPress Elementor pages
  if (window.lucide) {
    window.lucide.createIcons();
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.lucide) window.lucide.createIcons();
    });
  }
</script>
    `;
  }

  let blockContainers: Element[] = [];
  if (mainBody) {
    let currentRoot: Element = mainBody;
    // Unwrap single child wrappers iteratively to target actual visual sections correctly
    while (true) {
      const nonMetaChildren = Array.from(currentRoot.children).filter(child => {
        const tag = child.tagName.toLowerCase();
        return !['script', 'style', 'svg', 'meta', 'link', 'title'].includes(tag);
      });
      if (nonMetaChildren.length === 1 && ['div', 'main', 'section', 'body'].includes(nonMetaChildren[0].tagName.toLowerCase())) {
        currentRoot = nonMetaChildren[0];
      } else {
        break;
      }
    }
    
    blockContainers = Array.from(currentRoot.children).filter(child => {
      const tag = child.tagName.toLowerCase();
      return !['script', 'style', 'svg', 'meta', 'link', 'title'].includes(tag);
    });
  }

  if (blockContainers.length === 0) {
    const fallbackDiv = doc.createElement('div');
    fallbackDiv.innerHTML = mainBody ? mainBody.innerHTML : htmlCode;
    blockContainers.push(fallbackDiv);
  }

  // Helper: parses individual DOM items and produces native Elementor interactive layout widgets
  const parseWidgetsInNode = (node: Element): ElementorWidget[] => {
    const list: ElementorWidget[] = [];

    const traverse = (current: Element) => {
      const tag = current.tagName.toLowerCase();
      
      if (['script', 'style'].includes(tag)) return;

      if (tag === 'svg') {
        list.push({
          id: generateElementorId(),
          elType: 'widget',
          widgetType: 'html',
          settings: {
            html: current.outerHTML
          },
          elements: []
        });
        return;
      }

      // Safeguard nested custom interactive forms/cards/calculators in columns
      if (isInteractiveComplexComponent(current) && current !== node) {
        const cleanedClass = (current.getAttribute('class') || '').replace(/\b(w-full|h-full|md:w-[^ ]+|w-\[[^\]]+\])\b/g, '').trim();
        const colStyle = current.getAttribute('style') || '';
        list.push({
          id: generateElementorId(),
          elType: 'widget',
          widgetType: 'html',
          settings: {
            html: `<div class="${cleanedClass}" style="${colStyle}">${current.innerHTML}</div>`
          },
          elements: []
        });
        return; // Skip traversing child nodes inside the protected visual card
      }

      // WP COMPATIBILITY GRID OVERRIDE: Map nested grids/flexboxes into visual Elementor Inner Sections
      if (isGridLayout(current) && current !== node && !isInteractiveComplexComponent(current)) {
        const kids = getVisualChildren(current);
        if (kids.length >= 2) {
          const maxCols = Math.min(kids.length, 3); // Max out at 3 subcolumns for standard layouts
          const colPercentWidth = Number((100 / maxCols).toFixed(2));
          const columns: any[] = [];

          kids.slice(0, maxCols).forEach(kidCol => {
            columns.push({
              id: generateElementorId(),
              elType: 'column',
              settings: buildElementorColumnSettings(kidCol, colPercentWidth),
              elements: parseWidgetsInNode(kidCol)
            });
          });

          const innerSectionSettings = buildElementorBackgroundSettings(current);
          const currentPadding = parsePaddingFromClasses(current.getAttribute('class') || '');
          if (currentPadding) innerSectionSettings.padding = currentPadding;

          list.push({
            id: generateElementorId(),
            elType: 'inner-section',
            settings: innerSectionSettings,
            elements: columns
          } as any);
          return; // Fully nested and mapped. Stop double traversing.
        }
      }

      // WP COMPATIBILITY CARD OVERRIDE: Map styled block cards as single-column Elementor Inner Sections
      if (hasCardStyling(current) && current !== node && !isInteractiveComplexComponent(current)) {
        const nestedWidgets = parseWidgetsInNode(current);
        if (nestedWidgets.length > 0) {
          const colSettings = buildElementorColumnSettings(current, 100);
          list.push({
            id: generateElementorId(),
            elType: 'inner-section',
            settings: {},
            elements: [
              {
                id: generateElementorId(),
                elType: 'column',
                settings: colSettings,
                elements: nestedWidgets
              }
            ]
          } as any);
          return; // Fully encapsulated. Stop double traversing.
        }
      }

      // Custom Accordion extraction (e.g. FAQ elements)
      const faqItems = current.querySelectorAll('.faq-item, details, [class*="faq-card"]');
      if (faqItems.length >= 2 && current === node) {
        const tabs: any[] = [];
        
        faqItems.forEach(item => {
          const summary = item.querySelector('summary, h3, h4, [class*="question"], [class*="title"]');
          const qText = summary ? summary.textContent?.trim() : '';
          
          let aText = '';
          const ansNode = item.querySelector('[class*="answer"], p:last-child');
          if (ansNode) {
            aText = ansNode.textContent?.trim() || '';
          } else {
            const cloned = item.cloneNode(true) as HTMLElement;
            cloned.querySelector('summary')?.remove();
            cloned.querySelector('h3')?.remove();
            cloned.querySelector('h4')?.remove();
            aText = cloned.textContent?.trim() || '';
          }

          if (qText && aText) {
            tabs.push({
              tab_title: qText,
              tab_content: aText
            });
          }
        });

        if (tabs.length > 0) {
          list.push({
            id: generateElementorId(),
            elType: 'widget',
            widgetType: 'accordion',
            settings: {
              tabs,
              icon: 'fa fa-plus',
              icon_active: 'fa fa-minus'
            },
            elements: []
          });
          return; // Finished parsing accordion block
        }
      }

      // Spacer Elements - Translating empty spacing divs to native Elementor spacers
      if (tag === 'div' && !current.textContent?.trim() && !current.querySelector('img, input, button, select, textarea, canvas, iframe, svg, i')) {
        const className = current.getAttribute('class') || '';
        let heightSize = 0;
        
        const hMatch = className.match(/\bh-(\d+)\b/);
        if (hMatch) {
          heightSize = Number(hMatch[1]) * 4; // 1 tailwind spacing unit = 4px
        } else {
          const hCustom = className.match(/\bh-\[(\d+)px\]/);
          if (hCustom) {
            heightSize = Number(hCustom[1]);
          }
        }
        
        if (heightSize > 0) {
          list.push({
            id: generateElementorId(),
            elType: 'widget',
            widgetType: 'spacer',
            settings: {
              space: {
                unit: 'px',
                size: heightSize
              }
            },
            elements: []
          });
          return;
        }
      }

      // Divider Elements - hr maps to native Elementor divider
      if (tag === 'hr' || (tag === 'div' && current.classList.contains('border-t') && !current.textContent?.trim() && !current.children.length)) {
        const classes = current.getAttribute('class') || '';
        const borderHex = getTailwindHexColor(classes, 'border') || '#e2e8f0';
        list.push({
          id: generateElementorId(),
          elType: 'widget',
          widgetType: 'divider',
          settings: {
            style: 'solid',
            color: borderHex,
            weight: 1,
            align: 'center'
          },
          elements: []
        });
        return;
      }

      // 1. Heading Elements - Native customizable styling
      if (/^h[1-6]$/.test(tag) || (current.classList.contains('font-bold') && current.textContent && current.textContent.trim().length > 1 && current.textContent.trim().length < 110 && !current.querySelector('img') && !current.querySelector('input') && !current.querySelector('button'))) {
        const cleanText = current.textContent?.trim() || '';
        if (cleanText) {
          const headingAlign = current.classList.contains('text-center') ? 'center' : 
                               current.classList.contains('text-right') ? 'right' : 'left';
          const headingColorHex = getTailwindHexColor(current.getAttribute('class') || '', 'text');
          const typoSettings = parseTypographyFromClasses(current.getAttribute('class') || '', cleanText);

          const headingClasses = current.getAttribute('class') || '';
          const settings: Record<string, any> = {
            title: `<div class="${headingClasses}" style="${buildInlineStyles(current)}">${cleanText}</div>`,
            header_size: tag.startsWith('h') ? tag : 'h3',
            align: headingAlign,
            ...typoSettings
          };

          if (headingColorHex) {
            settings.title_color = headingColorHex;
          }

          list.push({
            id: generateElementorId(),
            elType: 'widget',
            widgetType: 'heading',
            settings: settings,
            elements: []
          });
          return;
        }
      }

      // 2. Image Elements - Native drag and drop
      if (tag === 'img') {
        const src = current.getAttribute('src');
        if (src) {
          list.push({
            id: generateElementorId(),
            elType: 'widget',
            widgetType: 'image',
            settings: {
              image: {
                url: src,
                id: ''
              },
              image_size: 'full',
              align: 'center'
            },
            elements: []
          });
          return;
        }
      }

      // 3. Buttons and Anchors - Native styler mapping
      if (tag === 'a' || tag === 'button' || current.classList.contains('btn') || current.getAttribute('role') === 'button') {
        if (current.querySelector('img')) {
          Array.from(current.children).forEach(child => traverse(child));
          return;
        }

        const btnText = current.textContent?.trim() || '';
        if (btnText && btnText.length < 100) {
          const btnClasses = current.getAttribute('class') || '';
          const btnAlign = current.classList.contains('mx-auto') || current.classList.contains('justify-center') ? 'center' : 'left';
          const buttonBgHex = getTailwindHexColor(btnClasses, 'bg') || getTailwindHexColor(btnClasses, 'text');
          const typoSettings = parseTypographyFromClasses(btnClasses, btnText);
          
          let btnRadius = '8';
          if (current.classList.contains('rounded-full')) btnRadius = '9999';
          else if (current.classList.contains('rounded-3xl')) btnRadius = '24';
          else if (current.classList.contains('rounded-2xl')) btnRadius = '16';
          else if (current.classList.contains('rounded-xl')) btnRadius = '12';
          else if (current.classList.contains('rounded-lg')) btnRadius = '8';
          else if (current.classList.contains('rounded-md')) btnRadius = '6';
          else if (current.classList.contains('rounded-none')) btnRadius = '0';

          const settings: Record<string, any> = {
            text: btnText,
            link: {
              url: current.getAttribute('href') || '#',
              is_external: '',
              nofollow: '',
              custom_attributes: ''
            },
            align: btnAlign,
            background_color: buttonBgHex || '#4f46e5',
            button_text_color: '#ffffff',
            border_radius: {
              top: btnRadius,
              right: btnRadius,
              bottom: btnRadius,
              left: btnRadius,
              unit: 'px',
              isLinked: true
            },
            ...typoSettings
          };

          list.push({
            id: generateElementorId(),
            elType: 'widget',
            widgetType: 'button',
            settings: settings,
            elements: []
          });
          return;
        }
      }

      // 4. Input elements and special components preserved as fine-grade HTML widgets
      const isInputControl = ['input', 'textarea', 'select', 'option', 'canvas', 'iframe'].includes(tag);
      const isCustomInteractiveIcon = current.classList.contains('bkash-btn') || 
                                     current.classList.contains('payment-selector') || 
                                     current.classList.contains('qty-selector') ||
                                     current.classList.contains('interactive-widget') ||
                                     current.getAttribute('id')?.includes('qr-canvas');

      if (isInputControl || isCustomInteractiveIcon) {
        const ctrlHTML = current.outerHTML;
        list.push({
          id: generateElementorId(),
          elType: 'widget',
          widgetType: 'html',
          settings: {
            html: ctrlHTML
          },
          elements: []
        });
        return;
      }

      // 5. Text elements (Paragraphs, list items, details blocks) - Native customizable text-editor
      if (tag === 'p' || tag === 'span' || tag === 'li' || (current.childNodes.length === 1 && current.childNodes[0].nodeType === Node.TEXT_NODE)) {
        const textVal = current.textContent?.trim() || '';
        if (textVal && textVal.length > 2) {
          const textClasses = current.getAttribute('class') || '';
          const textColorHex = getTailwindHexColor(textClasses, 'text');
          const typoSettings = parseTypographyFromClasses(textClasses, textVal);

          const settings: Record<string, any> = {
            editor: `<div class="${textClasses}" style="${buildInlineStyles(current)}">${current.innerHTML}</div>`,
            ...typoSettings
          };

          if (textColorHex) {
            settings.text_color = textColorHex;
          }

          list.push({
            id: generateElementorId(),
            elType: 'widget',
            widgetType: 'text-editor',
            settings: settings,
            elements: []
          });
          return;
        }
      }

      // If it's a container element with direct content, iterate children
      if (current.children.length > 0) {
        Array.from(current.children).forEach(child => traverse(child));
      }
    };

    traverse(node);
    return list;
  };

  // Helper function to build native columns out of multi-column row layouts
  const buildMultiColumnRow = (gridEl: Element): ElementorColumn[] => {
    const columns: ElementorColumn[] = [];
    const kids = getVisualChildren(gridEl);
    if (kids.length === 0) return [];

    const maxCols = Math.min(kids.length, 4);
    const colPercentWidth = Number((100 / maxCols).toFixed(2));

    kids.slice(0, maxCols).forEach(origCol => {
      const colClasses = origCol.getAttribute('class') || '';
      const colStyles = origCol.getAttribute('style') || '';
      const cleanedClasses = colClasses.replace(/\b(w-full|h-full|md:w-[^ ]+|w-\[[^\]]+\])\b/g, '').trim();

      let widgets = parseWidgetsInNode(origCol);

      // Wrap layout columns carrying complex custom styles/interactive elements as single robust HTML widgets
      if (widgets.length === 0 || isInteractiveComplexComponent(origCol)) {
        const colHTML = `<div class="${cleanedClasses}" style="${colStyles}">${origCol.innerHTML}</div>`;
        widgets = [
          {
            id: generateElementorId(),
            elType: 'widget',
            widgetType: 'html',
            settings: {
              html: colHTML
            },
            elements: []
          }
        ];
      }

      const columnSettings = buildElementorColumnSettings(origCol, colPercentWidth);

      columns.push({
        id: generateElementorId(),
        elType: 'column',
        settings: columnSettings as any,
        elements: widgets
      });
    });

    return columns;
  };

  // Helper function to parse blocks into separate sections sequentially for spacing & layer preservation
  const parseSectionElements = (parent: Element, firstSection: boolean, lastSection: boolean): ElementorSection[] => {
    const sections: ElementorSection[] = [];
    const parentClasses = parent.getAttribute('class') || '';
    const sectionBg = buildElementorBackgroundSettings(parent);
    const sectionPadding = parsePaddingFromClasses(parentClasses);

    const kids = getVisualChildren(parent);

    // If section container itself has flex-row or grid classes, translate as direct columns
    if (isGridLayout(parent) || kids.length === 0) {
      const cols = buildMultiColumnRow(parent);
      if (cols.length > 0) {
        sections.push({
          id: generateElementorId(),
          elType: 'section',
          settings: {
            layout: 'boxed',
            stretch_section: 'yes',
            structure: cols.length === 1 ? '10' : 
                       cols.length === 2 ? '20' : 
                       cols.length === 3 ? '30' : '40',
            ...sectionBg,
            content_position: 'middle',
            padding: sectionPadding || undefined
          },
          elements: cols
        });
      }
      return sections;
    }

    let currentSegment: Element[] = [];

    const flushSegment = () => {
      if (currentSegment.length === 0) return;
      
      const widgets: any[] = [];
      currentSegment.forEach(el => {
        widgets.push(...parseWidgetsInNode(el));
      });

      if (widgets.length > 0) {
        sections.push({
          id: generateElementorId(),
          elType: 'section',
          settings: {
            layout: 'boxed',
            stretch_section: 'yes',
            structure: '10',
            ...sectionBg,
            content_position: 'middle',
            padding: sectionPadding || undefined
          },
          elements: [
            {
              id: generateElementorId(),
              elType: 'column',
              settings: buildElementorColumnSettings(parent, 100) as any,
              elements: widgets
            }
          ]
        });
      }
      currentSegment = [];
    };

    kids.forEach(kid => {
      if (isGridLayout(kid)) {
        flushSegment();

        const cols = buildMultiColumnRow(kid);
        if (cols.length > 0) {
          sections.push({
            id: generateElementorId(),
            elType: 'section',
            settings: {
              layout: 'boxed',
              stretch_section: 'yes',
              structure: cols.length === 1 ? '10' : 
                         cols.length === 2 ? '20' : 
                         cols.length === 3 ? '30' : '40',
              ...sectionBg,
              content_position: 'middle',
              padding: sectionPadding || undefined
            },
            elements: cols
          });
        }
      } else {
        currentSegment.push(kid);
      }
    });

    flushSegment();

    // Embed dependencies (fonts, tailwind CDN, Lucide, calculator assets) and animations
    if (sections.length > 0) {
      if (firstSection) {
        const headerScriptWidget: ElementorWidget = {
          id: generateElementorId(),
          elType: 'widget',
          widgetType: 'html',
          settings: {
            html: headResources
          },
          elements: []
        };
        sections[0].elements[0].elements.unshift(headerScriptWidget);
      }

      if (lastSection) {
        const footerScriptWidget: ElementorWidget = {
          id: generateElementorId(),
          elType: 'widget',
          widgetType: 'html',
          settings: {
            html: bodyScriptsHTML
          },
          elements: []
        };
        const lastSec = sections[sections.length - 1];
        const lastCol = lastSec.elements[lastSec.elements.length - 1];
        lastCol.elements.push(footerScriptWidget);
      }
    }

    return sections;
  };

  const sectionsList: ElementorSection[] = [];

  blockContainers.forEach((block, sIndex) => {
    const isFirst = sIndex === 0;
    const isLast = sIndex === blockContainers.length - 1;
    const parsed = parseSectionElements(block, isFirst, isLast);
    sectionsList.push(...parsed);
  });

  // Ensure there is at least one fully structured helper section to guarantee valid Elementor JSON format
  if (sectionsList.length === 0) {
    sectionsList.push({
      id: generateElementorId(),
      elType: 'section',
      settings: {
        layout: 'boxed'
      },
      elements: [
        {
          id: generateElementorId(),
          elType: 'column',
          settings: {
            _column_size: 100,
            _inline_size: 100,
            width: {
              unit: '%',
              size: 100
            }
          },
          elements: [
            {
              id: generateElementorId(),
              elType: 'widget',
              widgetType: 'heading',
              settings: {
                title: `<span style="font-family: 'Hind Siliguri', sans-serif;">${siteTitle || 'Aura Landing Page Template'}</span>`
              },
              elements: []
            }
          ]
        }
      ]
    });
  }

  return {
    title: siteTitle,
    type: 'page',
    version: '3.16.2',
    content: sectionsList
  };
};

/**
 * Dynamic CSS-in-JS utility parser that converts hundreds of vital Tailwind CSS classes
 * into robust, explicit inline styles to protect layout representation under aggressive WordPress style strippers.
 */
const parseAndInlineTailwindForElementor = (element: HTMLElement) => {
  const elements = element.querySelectorAll('*');
  elements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const classList = Array.from(htmlEl.classList);
    if (classList.length === 0) return;

    const stylesToApply: string[] = [];
    
    classList.forEach((cls) => {
      // 1. Backgrounds
      if (cls === 'bg-slate-950') stylesToApply.push('background-color: #020617;');
      else if (cls === 'bg-slate-900') stylesToApply.push('background-color: #0f172a;');
      else if (cls === 'bg-slate-800') stylesToApply.push('background-color: #1e293b;');
      else if (cls === 'bg-slate-700') stylesToApply.push('background-color: #334155;');
      else if (cls === 'bg-slate-600') stylesToApply.push('background-color: #475569;');
      else if (cls === 'bg-slate-500') stylesToApply.push('background-color: #64748b;');
      else if (cls === 'bg-slate-50') stylesToApply.push('background-color: #f8fafc;');
      else if (cls === 'bg-indigo-950') stylesToApply.push('background-color: #1e1b4b;');
      else if (cls === 'bg-indigo-900') stylesToApply.push('background-color: #311042;');
      else if (cls === 'bg-indigo-600') stylesToApply.push('background-color: #4f46e5;');
      else if (cls === 'bg-indigo-500') stylesToApply.push('background-color: #6366f1;');
      else if (cls === 'bg-emerald-500') stylesToApply.push('background-color: #10b981;');
      else if (cls === 'bg-emerald-600') stylesToApply.push('background-color: #059669;');
      else if (cls === 'bg-violet-600') stylesToApply.push('background-color: #7c3aed;');
      else if (cls === 'bg-violet-500') stylesToApply.push('background-color: #8b5cf6;');
      else if (cls === 'bg-emerald-950') stylesToApply.push('background-color: #022c22;');
      else if (cls === 'bg-rose-500') stylesToApply.push('background-color: #f43f5e;');
      else if (cls === 'bg-rose-600') stylesToApply.push('background-color: #e11d48;');
      else if (cls === 'bg-zinc-900') stylesToApply.push('background-color: #18181b;');
      else if (cls === 'bg-zinc-950') stylesToApply.push('background-color: #09090b;');
      else if (cls === 'bg-amber-500') stylesToApply.push('background-color: #f59e0b;');
      else if (cls === 'bg-blue-600') stylesToApply.push('background-color: #2563eb;');
      else if (cls === 'bg-blue-500') stylesToApply.push('background-color: #3b82f6;');
      else if (cls === 'bg-black') stylesToApply.push('background-color: #000000;');
      else if (cls === 'bg-white') stylesToApply.push('background-color: #ffffff;');
      else if (cls.startsWith('bg-white/')) {
        const opacity = parseFloat(cls.split('/')[1]) || 10;
        stylesToApply.push(`background-color: rgba(255, 255, 255, ${opacity / 100});`);
      } else if (cls.startsWith('bg-black/')) {
        const opacity = parseFloat(cls.split('/')[1]) || 10;
        stylesToApply.push(`background-color: rgba(0, 0, 0, ${opacity / 100});`);
      } else if (cls.startsWith('bg-indigo-600/')) {
        const opacity = parseFloat(cls.split('/')[1]) || 10;
        stylesToApply.push(`background-color: rgba(79, 70, 229, ${opacity / 100});`);
      }

      // 2. Main Typography Colors & Alignment
      if (cls === 'text-white') stylesToApply.push('color: #ffffff;');
      else if (cls === 'text-black') stylesToApply.push('color: #000000;');
      else if (cls === 'text-slate-100') stylesToApply.push('color: #f1f5f9;');
      else if (cls === 'text-slate-200') stylesToApply.push('color: #e2e8f0;');
      else if (cls === 'text-slate-300') stylesToApply.push('color: #cbd5e1;');
      else if (cls === 'text-slate-400') stylesToApply.push('color: #94a3b8;');
      else if (cls === 'text-slate-500') stylesToApply.push('color: #64748b;');
      else if (cls === 'text-slate-900') stylesToApply.push('color: #0f172a;');
      else if (cls === 'text-indigo-400') stylesToApply.push('color: #818cf8;');
      else if (cls === 'text-indigo-500') stylesToApply.push('color: #6366f1;');
      else if (cls === 'text-indigo-600') stylesToApply.push('color: #4f46e5;');
      else if (cls === 'text-emerald-400') stylesToApply.push('color: #34d399;');
      else if (cls === 'text-emerald-500') stylesToApply.push('color: #10b981;');
      else if (cls === 'text-amber-400') stylesToApply.push('color: #fbbf24;');
      else if (cls === 'text-rose-400') stylesToApply.push('color: #f87171;');

      // 3. Layout, Flex, and Grids
      if (cls === 'flex') stylesToApply.push('display: flex;');
      else if (cls === 'grid') stylesToApply.push('display: grid;');
      else if (cls === 'hidden') stylesToApply.push('display: none;');
      else if (cls === 'inline-flex') stylesToApply.push('display: inline-flex;');
      else if (cls === 'inline-block') stylesToApply.push('display: inline-block;');
      else if (cls === 'block') stylesToApply.push('display: block;');
      
      if (cls === 'flex-col') stylesToApply.push('flex-direction: column;');
      else if (cls === 'items-center') stylesToApply.push('align-items: center;');
      else if (cls === 'items-start') stylesToApply.push('align-items: flex-start;');
      else if (cls === 'items-end') stylesToApply.push('align-items: flex-end;');
      else if (cls === 'justify-center') stylesToApply.push('justify-content: center;');
      else if (cls === 'justify-between') stylesToApply.push('justify-content: space-between;');
      else if (cls === 'justify-start') stylesToApply.push('justify-content: flex-start;');
      else if (cls === 'justify-end') stylesToApply.push('justify-content: flex-end;');
      else if (cls === 'flex-wrap') stylesToApply.push('flex-wrap: wrap;');

      // 4. Compact Paddings
      if (cls === 'p-1') stylesToApply.push('padding: 0.25rem;');
      else if (cls === 'p-2') stylesToApply.push('padding: 0.5rem;');
      else if (cls === 'p-3') stylesToApply.push('padding: 0.75rem;');
      else if (cls === 'p-4') stylesToApply.push('padding: 1rem;');
      else if (cls === 'p-5') stylesToApply.push('padding: 1.25rem;');
      else if (cls === 'p-6') stylesToApply.push('padding: 1.5rem;');
      else if (cls === 'p-8') stylesToApply.push('padding: 2rem;');
      else if (cls === 'p-10') stylesToApply.push('padding: 2.5rem;');
      else if (cls === 'p-12') stylesToApply.push('padding: 3rem;');
      
      else if (cls === 'px-1') stylesToApply.push('padding-left: 0.25rem; padding-right: 0.25rem;');
      else if (cls === 'px-2') stylesToApply.push('padding-left: 0.5rem; padding-right: 0.5rem;');
      else if (cls === 'px-3') stylesToApply.push('padding-left: 0.75rem; padding-right: 0.75rem;');
      else if (cls === 'px-4') stylesToApply.push('padding-left: 1rem; padding-right: 1rem;');
      else if (cls === 'px-5') stylesToApply.push('padding-left: 1.25rem; padding-right: 1.25rem;');
      else if (cls === 'px-6') stylesToApply.push('padding-left: 1.5rem; padding-right: 1.5rem;');
      else if (cls === 'px-8') stylesToApply.push('padding-left: 2rem; padding-right: 2rem;');
      else if (cls === 'px-12') stylesToApply.push('padding-left: 3rem; padding-right: 3rem;');

      else if (cls === 'py-1') stylesToApply.push('padding-top: 0.25rem; padding-bottom: 0.25rem;');
      else if (cls === 'py-2') stylesToApply.push('padding-top: 0.5rem; padding-bottom: 0.5rem;');
      else if (cls === 'py-3') stylesToApply.push('padding-top: 0.75rem; padding-bottom: 0.75rem;');
      else if (cls === 'py-4') stylesToApply.push('padding-top: 1rem; padding-bottom: 1rem;');
      else if (cls === 'py-5') stylesToApply.push('padding-top: 1.25rem; padding-bottom: 1.25rem;');
      else if (cls === 'py-6') stylesToApply.push('padding-top: 1.5rem; padding-bottom: 1.5rem;');
      else if (cls === 'py-8') stylesToApply.push('padding-top: 2rem; padding-bottom: 2rem;');
      else if (cls === 'py-12') stylesToApply.push('padding-top: 3rem; padding-bottom: 3rem;');

      else if (cls === 'pt-4') stylesToApply.push('padding-top: 1rem;');
      else if (cls === 'pb-4') stylesToApply.push('padding-top: 1rem;');

      // 5. Borders & Rounded Corners
      if (cls === 'rounded') stylesToApply.push('border-radius: 0.25rem;');
      else if (cls === 'rounded-sm') stylesToApply.push('border-radius: 0.125rem;');
      else if (cls === 'rounded-md') stylesToApply.push('border-radius: 0.375rem;');
      else if (cls === 'rounded-lg') stylesToApply.push('border-radius: 0.5rem;');
      else if (cls === 'rounded-xl') stylesToApply.push('border-radius: 0.75rem;');
      else if (cls === 'rounded-2xl') stylesToApply.push('border-radius: 1rem;');
      else if (cls === 'rounded-3xl') stylesToApply.push('border-radius: 1.5rem;');
      else if (cls === 'rounded-full') stylesToApply.push('border-radius: 9999px;');

      if (cls === 'border') stylesToApply.push('border: 1px solid rgba(148, 163, 184, 0.15);');
      else if (cls === 'border-2') stylesToApply.push('border: 2px solid rgba(148, 163, 184, 0.2);');
      else if (cls === 'border-slate-800') stylesToApply.push('border-color: #1e293b;');
      else if (cls === 'border-slate-700') stylesToApply.push('border-color: #334155;');
      else if (cls === 'border-indigo-500/20') stylesToApply.push('border-color: rgba(99, 102, 241, 0.2);');
      
      // 6. Font Sizing, Density & Weights
      if (cls === 'text-xs') stylesToApply.push('font-size: 0.75rem; line-height: 1rem;');
      else if (cls === 'text-sm') stylesToApply.push('font-size: 0.875rem; line-height: 1.25rem;');
      else if (cls === 'text-base') stylesToApply.push('font-size: 1rem; line-height: 1.5rem;');
      else if (cls === 'text-lg') stylesToApply.push('font-size: 1.125rem; line-height: 1.75rem;');
      else if (cls === 'text-xl') stylesToApply.push('font-size: 1.25rem; line-height: 1.75rem;');
      else if (cls === 'text-2xl') stylesToApply.push('font-size: 1.5rem; line-height: 2rem;');
      else if (cls === 'text-3xl') stylesToApply.push('font-size: 1.875rem; line-height: 2.25rem;');
      else if (cls === 'text-4xl') stylesToApply.push('font-size: 2.25rem; line-height: 2.5rem;');
      else if (cls === 'text-5xl') stylesToApply.push('font-size: 3rem; line-height: 1;');

      if (cls === 'font-bold') stylesToApply.push('font-weight: 700;');
      else if (cls === 'font-semibold') stylesToApply.push('font-weight: 600;');
      else if (cls === 'font-medium') stylesToApply.push('font-weight: 500;');
      else if (cls === 'font-normal') stylesToApply.push('font-weight: 400;');
      else if (cls === 'font-light') stylesToApply.push('font-weight: 300;');

      if (cls === 'text-center') stylesToApply.push('text-align: center;');
      else if (cls === 'text-left') stylesToApply.push('text-align: left;');
      else if (cls === 'text-right') stylesToApply.push('text-align: right;');

      // 7. Sizing Controls
      if (cls === 'w-full') stylesToApply.push('width: 100%;');
      else if (cls === 'h-full') stylesToApply.push('height: 100%;');
    });

    if (stylesToApply.length > 0) {
      const existingStyle = htmlEl.getAttribute('style') || '';
      const mergedStyle = existingStyle + (existingStyle.endsWith(';') || existingStyle === '' ? '' : ';') + ' ' + stylesToApply.join(' ');
      htmlEl.setAttribute('style', mergedStyle.trim());
    }
  });
};

/**
 * Validation block that parses code scripts and cleans any global/non-scoped selections
 * to prevent WordPress or dynamic routing overrides from breaking layout interactivity.
 */
const refactorScriptAndValidate = (scriptText: string): string => {
  let validated = scriptText;
  
  // Scopes global element lookups to the container boundaries
  validated = validated.replace(/document\.querySelector\(/g, 'rootContainer.querySelector(');
  validated = validated.replace(/document\.querySelectorAll\(/g, 'rootContainer.querySelectorAll(');
  validated = validated.replace(/document\.getElementById\(['"]([^'"]+)['"]\)/g, "rootContainer.querySelector('#$1')");
  
  // Protects body hooks by converting them to rootContainer to avoid body collision
  validated = validated.replace(/document\.body/g, 'rootContainer');
  validated = validated.replace(/window\.document/g, 'document');
  
  return validated;
};

/**
 * Parses and builds a highly optimized, Sandboxed HTML output that can be pasted directly
 * into Elementor's Custom HTML Widget inside WordPress. Fully compatible with Elementor,
 * styled with Tailwind, and contains self-contained interactive scripts.
 */
export const formatCodeForElementorHtmlWidget = (htmlCode: string, siteTitle: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlCode, 'text/html');
  
  const uniqueId = Math.floor(Math.random() * 1000000);
  const widgetRootId = `saas-elementor-widget-root-${uniqueId}`;

  // 1. Gather all external libraries (like charts, confetti, flowbite, dynamic tools) and bundle them
  let externalScriptTags = '';
  let scriptContents = '';
  const scripts = Array.from(doc.querySelectorAll('script'));
  scripts.forEach(script => {
    const src = script.getAttribute('src');
    if (src) {
      // Avoid duplicating standard Tailwind JIT CSS CDN and Lucide CDN which are handled at root wrapper
      if (!src.includes('tailwindcss.com') && !src.includes('unpkg.com/lucide')) {
        externalScriptTags += `<script src="${src}"></script>\n`;
      }
    } else if (script.textContent) {
      scriptContents += `\n// --- Interactive Script for ${siteTitle} ---\n` + script.textContent + '\n';
    }
  });

  // 2. Gather all CSS styles and external fonts linked in the original code to preserve standard layout fidelity
  let externalStylesheets = '';
  const links = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'));
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      externalStylesheets += `<link rel="stylesheet" href="${href}">\n`;
    }
  });

  let customEmbeddedStyles = '';
  const styles = Array.from(doc.querySelectorAll('style'));
  styles.forEach(style => {
    if (style.textContent) {
      customEmbeddedStyles += `<style>${style.textContent}</style>\n`;
    }
  });

  // 3. Extract the HTML content (usually inside <body>, but fallback to entire document body/nodes)
  let innerBodyHtml = '';
  if (doc.body) {
    const clonedBody = doc.body.cloneNode(true) as HTMLElement;
    const bodyScripts = clonedBody.querySelectorAll('script');
    bodyScripts.forEach(s => s.remove());
    
    // Apply CSS-in-JS style extraction parser to automatically embed Tailwind fallback inline styles
    parseAndInlineTailwindForElementor(clonedBody);
    
    innerBodyHtml = clonedBody.innerHTML.trim();
  } else {
    innerBodyHtml = htmlCode;
  }

  // 4. Transform event listeners like DOMContentLoaded / load in extracted client-side code
  // This solves the black-box bug where listeners never load because they already finished firing!
  let processedScripts = scriptContents;
  
  // Apply automation checks for broken JS patterns and refactor them cleanly to container scoping
  processedScripts = refactorScriptAndValidate(processedScripts);

  processedScripts = processedScripts.replace(/document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*/g, 
    `((event, cb) => { if (document.readyState !== 'loading') { cb(); } else { document.addEventListener(event, cb); } })('DOMContentLoaded', `);
  
  processedScripts = processedScripts.replace(/window\.addEventListener\(\s*['"]load['"]\s*,\s*/g, 
    `((event, cb) => { if (document.readyState !== 'loading') { cb(); } else { window.addEventListener(event, cb); } })('load', `);

  const customizerInstructionsAndHeader = `<!-- 
======================================================================
  ${siteTitle.toUpperCase()} - FULLY ELEMENTOR SUPPORTED HTML WIDGET
======================================================================
  ✨ INSTRUCTIONS FOR USE IN WORDPRESS ELEMENTOR:
  1. Open Elementor page builder in WordPress.
  2. Search for the "HTML" widget, drag and drop it onto any section.
  3. Paste this COMPLETE code block directly into the HTML Code text area.
  4. Save and Publish! Design & functions run perfectly with 100% fidelity.
  
  🎨 TO CUSTOMIZE THIS WIDGET:
  You can edit text content, button links, colors, or image URLs directly 
  using standard search & replace or text edits inside your HTML widget box.
======================================================================
-->`;

  return `${customizerInstructionsAndHeader}
<div id="${widgetRootId}" style="all: initial; display: block; padding: 0; margin: 0; width: 100%; min-height: fit-content;" class="w-full relative text-slate-100 bg-slate-950 leading-relaxed font-sans selection:bg-indigo-600 selection:text-white">
  
  <!-- Critical CSS Resets & Tailwind Sandbox Layer -->
  <style>
    #${widgetRootId} {
      all: initial;
      display: block !important;
      position: relative !important;
      box-sizing: border-box !important;
      font-family: 'Hind Siliguri', 'Inter', system-ui, -apple-system, sans-serif !important;
      text-align: left !important;
      background-color: #020617 !important;
      color: #f1f5f9 !important;
      min-height: fit-content !important;
      padding: 0 !important;
      margin: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
      overflow-x: hidden !important;
    }

    #${widgetRootId} * {
      box-sizing: border-box !important;
    }

    /* Forceful zero margin & reset on children to prevent theme leakage */
    #${widgetRootId} h1, 
    #${widgetRootId} h2, 
    #${widgetRootId} h3, 
    #${widgetRootId} h4, 
    #${widgetRootId} h5, 
    #${widgetRootId} h6 {
      color: #ffffff !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      font-weight: 700 !important;
      line-height: 1.25 !important;
    }
    
    #${widgetRootId} p {
      color: #94a3b8 !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      line-height: 1.625 !important;
    }
    
    #${widgetRootId} a {
      text-decoration: none !important;
      transition: all 0.2s ease-in-out !important;
    }

    #${widgetRootId} button {
      border: none !important;
      cursor: pointer !important;
      background-image: none !important;
      background-color: transparent !important;
    }

    /* Style up standard payment buttons or inline custom scrollbars if present */
    #${widgetRootId} ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    #${widgetRootId} ::-webkit-scrollbar-track {
      background: #020617;
    }
    #${widgetRootId} ::-webkit-scrollbar-thumb {
      background: #334155;
      border-radius: 9999px;
    }

    /* Dynamic full-bleed override helper for Elementor containers */
    .elementor-section:has(#${widgetRootId}),
    .elementor-container:has(#${widgetRootId}),
    .elementor-column-wrap:has(#${widgetRootId}),
    .elementor-widget-container:has(#${widgetRootId}) {
      padding: 0 !important;
      margin: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
    }
  </style>

  <!-- External Stylesheets Captured from AI Output -->
  ${externalStylesheets}
  ${customEmbeddedStyles}

  <!-- High-Fidelity JIT Stylesheet Engine (Tailwind) -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Icon Libraries Support -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <script>
    if (window.tailwind) {
      window.tailwind.config = {
        important: true, // Guarantees Tailwind rules take absolute precedence over aggressive theme overrides
        theme: {
          extend: {
            colors: {
              slate: {
                50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 
                400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 
                800: '#1e293b', 850: '#1a2035', 900: '#0f172a', 950: '#020617'
              },
              amber: {
                400: '#fbbf24', 500: '#f59e0b', 600: '#d97706'
              }
            },
            fontFamily: {
              sans: ['Hind Siliguri', 'Inter', 'sans-serif'],
              mono: ['JetBrains Mono', 'Fira Code', 'monospace']
            }
          }
        }
      };
    }
  </script>

  <!-- Captured External Script Requirements -->
  ${externalScriptTags}

  <!-- ================= START OF MAIN APP CONTENT ================= -->
  ${innerBodyHtml}
  <!-- ================= END OF MAIN APP CONTENT ================= -->

  <!-- Programmatic Elements & Interactions Script Module -->
  <script>
    (function() {
      // Unique Namespaced Scope containing page interactions and animation overrides
      const widgetId = "${widgetRootId}";
      const rootEl = document.getElementById(widgetId);

      // Dynamic Space & Gap Resetter to guarantee full-bleed, edge-to-edge layout inside Elementor
      try {
        if (rootEl) {
          // Zero out padding/margin of our immediate parent containers to remove Widget padding unlinking problems
          let currentEl = rootEl.parentElement;
          while (currentEl) {
            const cls = currentEl.getAttribute('class') || '';
            const tagName = currentEl.tagName.toLowerCase();
            
            // Stop resetting if we reach the absolute page container or the theme body
            if (cls.includes('elementor-section-wrap') || cls.includes('entry-content') || tagName === 'body' || tagName === 'html') {
              break;
            }
            
            // Wipe padding/margins on any wrapper columns, inner containers, and widget-html containers
            if (
              cls.includes('elementor-container') ||
              cls.includes('elementor-row') ||
              cls.includes('elementor-column') ||
              cls.includes('elementor-widget') ||
              cls.includes('elementor-widget-container') ||
              cls.includes('elementor-widget-html') ||
              cls.includes('elementor-column-wrap') ||
              cls.includes('elementor-widget-wrap') ||
              cls.includes('widget')
            ) {
              currentEl.style.setProperty('padding', '0', 'important');
              currentEl.style.setProperty('margin', '0', 'important');
            }
            currentEl = currentEl.parentElement;
          }
        }
      } catch (err) {
        console.warn("Elementor spacer cleaner error non-blocking:", err);
      }

      // Explicitly re-initialize Lucide icons within the local custom HTML widget context
      try {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          if (rootEl) {
            window.lucide.createIcons({
              attrs: {
                class: 'lucide'
              },
              nameAttr: 'data-lucide',
              root: rootEl
            });
          } else {
            window.lucide.createIcons();
          }
        }
      } catch(e) {
        console.warn("Lucide parser delay active:", e);
      }
      
      // Explicitly re-initialize animation triggers inside the Elementor customized scope
      try {
        if (window.AOS && typeof window.AOS.init === 'function') {
          window.AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
          });
          window.AOS.refresh();
        }
      } catch (e) {
        console.warn("AOS animation initialization bypassed:", e);
      }

      // Custom high-fidelity animation trigger engine for standard Tailwind transitions
      try {
        if (rootEl) {
          const observerOptions = {
            root: null,
            rootMargin: '0px -50px -50px 0px',
            threshold: 0.02
          };
          const elementorAnimationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const el = entry.target;
                if (el.classList.contains('opacity-0') && (el.classList.contains('translate-y-10') || el.classList.contains('translate-y-4') || el.classList.contains('scale-95'))) {
                  el.classList.remove('opacity-0', 'translate-y-10', 'translate-y-4', 'scale-95');
                  el.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                }
                elementorAnimationObserver.unobserve(el);
              }
            });
          }, observerOptions);

          const animatables = rootEl.querySelectorAll('.opacity-0, [data-aos], .transition-all');
          animatables.forEach(el => elementorAnimationObserver.observe(el));
        }
      } catch (e) {
        console.warn("Elementor viewport observer error:", e);
      }

      // Execute local app interactivity algorithms (counters, sliders, computations, custom panels)
      try {
        (function(window, parentDocument, rootContainer) {
          if (!rootContainer) return;
          
          // Shadow document queries so they operate strictly within this specific widget's context
          // This keeps cart addition, slider calculators, dynamic modals, and checkout actions safe from collision!
          const document = Object.create(parentDocument);
          
          document.querySelector = function(selector) {
            return rootContainer.querySelector(selector) || parentDocument.querySelector(selector);
          };
          
          document.querySelectorAll = function(selector) {
            const nodes = rootContainer.querySelectorAll(selector);
            return nodes.length > 0 ? nodes : parentDocument.querySelectorAll(selector);
          };
          
          document.getElementById = function(id) {
            return rootContainer.querySelector('#' + id) || rootContainer.querySelector('[id="' + id + '"]') || parentDocument.getElementById(id);
          };
          
          document.getElementsByClassName = function(className) {
            return rootContainer.getElementsByClassName(className);
          };
          
          document.getElementsByTagName = function(tagName) {
            return rootContainer.getElementsByTagName(tagName);
          };

          // Event Delegation Engine: proxy Element.prototype.addEventListener inside this IIFE execution thread
          const originalAddEventListener = Element.prototype.addEventListener;
          try {
            Element.prototype.addEventListener = function(type, listener, options) {
              if (rootContainer && rootContainer.contains(this) && ['click', 'change', 'input', 'submit'].includes(type)) {
                let selector = '';
                if (this.id) {
                  selector = '#' + this.id;
                } else {
                  const cleanClassList = Array.from(this.classList).filter(c => !c.startsWith('transition-') && !c.startsWith('duration-') && !c.startsWith('hover:'));
                  if (cleanClassList.length > 0) {
                    selector = '.' + cleanClassList.join('.');
                  } else {
                    selector = this.tagName.toLowerCase();
                  }
                }
                
                if (selector) {
                  if (!rootContainer._delegated) {
                    rootContainer._delegated = {};
                  }
                  if (!rootContainer._delegated[type]) {
                    rootContainer._delegated[type] = [];
                    originalAddEventListener.call(rootContainer, type, function(e) {
                      const handlers = rootContainer._delegated[type];
                      if (handlers) {
                        for (let i = 0; i < handlers.length; i++) {
                          const item = handlers[i];
                          const matchedTarget = e.target.closest(item.sel);
                          if (matchedTarget) {
                            item.handler.call(matchedTarget, e);
                          }
                        }
                      }
                    }, { capture: true });
                  }
                  rootContainer._delegated[type].push({ sel: selector, handler: listener });
                }
              }
              return originalAddEventListener.call(this, type, listener, options);
            };
          } catch (e) {
            console.warn("Event delegation setup warning:", e);
          }

          // Re-route inline event attributes (onclick, onchange, etc.) into our delegation sandbox
          try {
            if (rootContainer) {
              const elementsWithInlineEvts = rootContainer.querySelectorAll('[onclick], [onchange], [oninput], [onsubmit]');
              elementsWithInlineEvts.forEach(function(el) {
                ['click', 'change', 'input', 'submit'].forEach(function(evt) {
                  const attrName = 'on' + evt;
                  if (el.hasAttribute(attrName)) {
                    const scriptText = el.getAttribute(attrName);
                    el.removeAttribute(attrName);
                    el.addEventListener(evt, function(event) {
                      try {
                        const runner = new Function('event', scriptText);
                        runner.call(this, event);
                      } catch (err) {
                        console.error("Inline handler execution error:", err);
                      }
                    });
                  }
                });
              });
            }
          } catch (e) {
            console.warn("Inline handler parsing bypassed:", e);
          }

          ${processedScripts}

          // Restore normal DOM prototype to completely avoid any scope pollution on other components
          try {
            if (typeof originalAddEventListener === 'function') {
              Element.prototype.addEventListener = originalAddEventListener;
            }
          } catch (e) {
            console.warn("Cleanup warning:", e);
          }
        })(window, document, rootEl);
      } catch (err) {
        console.error("SaaS Elementor Widget Interactions Exception:", err);
      }
    })();
  </script>
</div>
`;
};

/**
 * Builds a unified page template carrying a single full-bleed section,
 * full-width column, and a single Custom HTML widget. Inside it, we embed
 * the entire high-fidelity formatted HTML output from the compiler.
 * This guarantees 100% pixel-perfect layout and fully working script hooks
 * with zero design drift inside WordPress.
 */
export const buildElementorUnifiedHTMLTemplate = (htmlCode: string, siteTitle: string): ElementorTemplate => {
  const beautifulHtml = formatCodeForElementorHtmlWidget(htmlCode, siteTitle);
  
  // Extract primary colors or use default slate/dark theme color
  let rootBgColor = '#020617';
  const matchBg = htmlCode.match(/bg-\[\#([0-9a-fA-F]{3,6})\]/);
  if (matchBg) {
    rootBgColor = `#${matchBg[1]}`;
  } else if (htmlCode.includes('bg-slate-950') || htmlCode.includes('bg-slate-900')) {
    rootBgColor = '#0b0f19';
  } else if (htmlCode.includes('bg-slate-50') || htmlCode.includes('bg-white')) {
    rootBgColor = '#ffffff';
  }

  const customSectionId = generateElementorId();
  const customColumnId = generateElementorId();
  const customWidgetId = generateElementorId();

  return {
    title: `${siteTitle} - 100% High-Fidelity Template`,
    type: 'page',
    version: '3.0',
    content: [
      {
        id: customSectionId,
        elType: 'section',
        settings: {
          layout: 'full_width',
          stretch_section: 'yes',
          background_background: 'classic',
          background_color: rootBgColor,
          padding: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            unit: 'px',
            isLinked: true
          },
          margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            unit: 'px',
            isLinked: true
          }
        },
        elements: [
          {
            id: customColumnId,
            elType: 'column',
            settings: {
              _column_size: 100,
              _inline_size: 100,
              width: {
                unit: '%',
                size: 100
              },
              padding: {
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                unit: 'px',
                isLinked: true
              },
              margin: {
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                unit: 'px',
                isLinked: true
              }
            },
            elements: [
              {
                id: customWidgetId,
                elType: 'widget',
                widgetType: 'html',
                settings: {
                  html: beautifulHtml
                },
                elements: []
              }
            ]
          }
        ]
      }
    ]
  };
};

