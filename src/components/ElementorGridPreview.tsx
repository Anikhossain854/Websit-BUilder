import React, { useState } from 'react';
import { 
  buildElementorTemplateFromHTML, 
  ElementorTemplate, 
  ElementorSection, 
  ElementorColumn, 
  ElementorWidget 
} from '../utils/elementorExporter';
import { 
  Layout, 
  Columns, 
  FileCode, 
  MousePointer, 
  Type, 
  Image, 
  User, 
  Plus, 
  X, 
  Maximize, 
  FileText, 
  HelpCircle, 
  Layers, 
  Info, 
  Settings, 
  ArrowRight,
  Maximize2,
  ExternalLink
} from 'lucide-react';

interface ElementorGridPreviewProps {
  code: string;
  title: string;
}

export const ElementorGridPreview: React.FC<ElementorGridPreviewProps> = ({ code, title }) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [hoveredWidget, setHoveredWidget] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<Record<string, number>>({});

  // Parse HTML dynamically using the enhanced Elementor exporter logic
  let template: ElementorTemplate;
  try {
    template = buildElementorTemplateFromHTML(code, title);
  } catch (err) {
    console.error('Failed to parse Elementor preview structure:', err);
    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-lg text-center space-y-4">
        <Layers className="h-10 w-10 text-red-400 mx-auto animate-pulse" />
        <h4 className="text-sm font-bold text-white">Elementor Template Generation Error</h4>
        <p className="text-xs text-slate-400">
          The calculated HTML code content is empty or contains complex, unclosed XML tags that cannot be parsed by the DOMParser engine.
        </p>
      </div>
    );
  }

  const toggleAccordion = (widgetId: string, itemIdx: number) => {
    setActiveAccordion(prev => ({
      ...prev,
      [widgetId]: prev[widgetId] === itemIdx ? -1 : itemIdx
    }));
  };

  const renderWidgetBlock = (widget: ElementorWidget) => {
    const isHovered = hoveredWidget === widget.id;
    const widgetType = widget.widgetType;
    
    let labelIcon = <Type className="h-3 w-3" />;
    let friendlyName = 'Elementor Widget';

    if (widgetType === 'heading') {
      friendlyName = 'Heading Styler';
      labelIcon = <Type className="h-3 w-3 text-cyan-400" />;
    } else if (widgetType === 'text-editor') {
      friendlyName = 'Text Editor Block';
      labelIcon = <FileText className="h-3 w-3 text-green-400" />;
    } else if (widgetType === 'image') {
      friendlyName = 'Image Block (WP media)';
      labelIcon = <Image className="h-3 w-3 text-amber-400" />;
    } else if (widgetType === 'button') {
      friendlyName = 'Button Component';
      labelIcon = <MousePointer className="h-3 w-3 text-pink-400" />;
    } else if (widgetType === 'html') {
      friendlyName = 'HTML Code Injection';
      labelIcon = <FileCode className="h-3 w-3 text-emerald-400" />;
    } else if (widgetType === 'accordion') {
      friendlyName = 'Accordion (FAQ Collapse)';
      labelIcon = <Layers className="h-3 w-3 text-purple-400" />;
    } else if (widgetType === 'spacer') {
      friendlyName = 'Spacer Spacer spacing';
      labelIcon = <Maximize2 className="h-3 w-3 text-blue-400" />;
    } else if (widgetType === 'divider') {
      friendlyName = 'Divider Border divider';
      labelIcon = <Layers className="h-3 w-3 text-slate-400" />;
    }

    return (
      <div
        key={widget.id}
        id={`widx-${widget.id}`}
        className={`relative rounded-xl border transition-all duration-200 group overflow-hidden ${
          isHovered 
            ? 'border-cyan-500 bg-cyan-950/15 shadow-lg shadow-cyan-900/5' 
            : 'border-slate-800 bg-[#080d19]/40'
        }`}
        onMouseEnter={(e) => { e.stopPropagation(); setHoveredWidget(widget.id); }}
        onMouseLeave={() => setHoveredWidget(null)}
      >
        
        {/* Widget Small Label Toolbar Tag */}
        <div className={`absolute top-0 right-0 flex items-center gap-1.5 px-2 py-0.5 bg-slate-900 border-l border-b border-slate-800 text-[8px] font-mono uppercase tracking-widest font-bold text-slate-400 z-10 rounded-bl-lg transition-transform ${
          isHovered ? 'bg-cyan-950 border-cyan-800 text-cyan-400' : ''
        }`}>
          {labelIcon}
          <span>{friendlyName}</span>
        </div>

        {/* Widget preview card styling */}
        <div className="p-3.5 pt-6 text-xs text-white">
          {widgetType === 'heading' && (
            <div style={{ textAlign: widget.settings.align === 'center' ? 'center' : widget.settings.align === 'right' ? 'right' : 'left' }}>
              <span 
                className="font-bold tracking-tight text-white inline-block"
                style={{
                  fontFamily: widget.settings.typography_font_family === 'Hind Siliguri' ? 'Hind Siliguri, sans-serif' : 'Inter, sans-serif',
                  fontSize: widget.settings.typography_font_size ? `${widget.settings.typography_font_size.size}px` : '18px',
                  color: widget.settings.title_color || '#ffffff'
                }}
              >
                {widget.settings.title}
              </span>
            </div>
          )}

          {widgetType === 'text-editor' && (
            <div className="prose prose-invert text-[11px] text-slate-300 leading-relaxed max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: widget.settings.editor }}
                style={{
                  color: widget.settings.text_color || undefined,
                  fontFamily: widget.settings.typography_font_family === 'Hind Siliguri' ? 'Hind Siliguri, sans-serif' : 'Inter, sans-serif'
                }}
              />
            </div>
          )}

          {widgetType === 'image' && (
            <div className="flex flex-col items-center">
              <div className="relative rounded-lg overflow-hidden border border-slate-800 max-h-[160px] max-w-[240px] bg-black/40">
                <img 
                  src={widget.settings.image?.url} 
                  alt="WordPress Media Preview" 
                  className="object-contain max-h-[160px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-1.5">
                  <span className="text-[7px] text-slate-400 font-mono text-ellipsis overflow-hidden whitespace-nowrap block w-full">
                    {widget.settings.image?.url}
                  </span>
                </div>
              </div>
            </div>
          )}

          {widgetType === 'button' && (
            <div 
              className="flex"
              style={{
                justifyContent: widget.settings.align === 'center' ? 'center' : 'flex-start'
              }}
            >
              <button 
                className="px-4 py-2 hover:opacity-90 font-semibold shadow-md inline-flex items-center gap-1.5 transition-all text-[11px]"
                style={{
                  backgroundColor: widget.settings.background_color || '#4f46e5',
                  color: widget.settings.button_text_color || '#ffffff',
                  borderRadius: widget.settings.border_radius ? `${widget.settings.border_radius.top}px` : '8px'
                }}
              >
                <span>{widget.settings.text}</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          )}

          {widgetType === 'html' && (
            <div className="space-y-1.5">
              <div className="text-[8px] font-mono text-emerald-400/80 bg-slate-900 border border-slate-800/80 p-2 rounded-lg max-h-[100px] overflow-y-auto whitespace-pre-wrap select-all">
                {widget.settings.html}
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-slate-500 italic mt-1">
                <Info className="h-3 w-3 text-emerald-500" />
                <span>Preserves custom Javascript formulas and QR canvas calculations.</span>
              </div>
            </div>
          )}

          {widgetType === 'accordion' && (
            <div className="space-y-2 max-w-xl mx-auto">
              {widget.settings.tabs?.map((tab: any, idx: number) => {
                const isOpen = activeAccordion[widget.id] === idx;
                return (
                  <div key={idx} className="border border-slate-800 rounded-lg overflow-hidden bg-black/25">
                    <button
                      onClick={() => toggleAccordion(widget.id, idx)}
                      className="w-full p-2 px-3 text-left font-semibold text-[11px] flex items-center justify-between hover:bg-white/5 transition-colors text-slate-200 cursor-pointer"
                    >
                      <span>{tab.tab_title}</span>
                      <span className="text-indigo-400 text-xs">{isOpen ? '-' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="p-3 text-[10px] text-slate-400 border-t border-slate-900 leading-relaxed bg-[#050812]">
                        {tab.tab_content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {widgetType === 'spacer' && (
            <div className="flex flex-col items-center justify-center p-3 border border-dashed border-blue-500/10 rounded-lg bg-blue-500/5 my-2">
              <div className="text-[9px] font-mono text-blue-400 flex items-center gap-1.5">
                <Maximize2 className="h-3 w-3" />
                <span>Native Spacer Element ({widget.settings.space?.size || 0}px Height size)</span>
              </div>
              <div style={{ height: `${Math.min(widget.settings.space?.size || 0, 48)}px` }} className="w-full mt-2 transition-all"></div>
            </div>
          )}

          {widgetType === 'divider' && (
            <div className="py-3">
              <hr style={{ borderColor: widget.settings.color || '#e2e8f0', borderWidth: widget.settings.weight || 1 }} />
              <div className="text-[7px] font-mono text-slate-600 text-center mt-1">Divider Block</div>
            </div>
          )}
        </div>

        {/* Cyan highlight pencil edit button on visual hover */}
        <div className={`absolute bottom-1 right-1 h-5 w-5 bg-cyan-500 border border-cyan-400 rounded text-slate-950 flex items-center justify-center cursor-pointer transition-all duration-200 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`} title="Inspect/Edit widget parameters in WordPress">
          <Settings className="h-2.5 w-2.5 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

      </div>
    );
  };

  return (
    <div id="elementor-preview-container" className="w-full h-full flex flex-col bg-[#030610] overflow-y-auto p-4 sm:p-6 space-y-6">
      
      {/* 1. Header Legend & Explanation Panel */}
      <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[9px] rounded-full uppercase tracking-wider font-bold">
              WordPress Compatible
            </div>
            <span className="text-[11px] font-mono text-slate-500">Schema Version: {template.version}</span>
          </div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Layout className="h-4.5 w-4.5 text-indigo-400" />
            Elementor Container Widget Grid Visualizer
          </h3>
          <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
            This visual layout compiles your HTML code into native Elementor Section, Column, and Widget nodes. 
            Use this view to verify layout grids, spacing offsets, and custom card alignments before launching the WordPress JSON export.
          </p>
        </div>

        {/* Visual Legends */}
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-2.5 bg-black/45 border border-slate-800/60 p-3 rounded-xl text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-md bg-indigo-600/15 border border-indigo-500/80 block"></span>
            <span className="font-semibold text-slate-200">1. Section (Core Wrapper)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-md bg-slate-800/25 border border-dashed border-slate-500 block"></span>
            <span className="font-semibold text-slate-200">2. Column (Layout Width)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-md bg-cyan-950/20 border border-cyan-500/50 block"></span>
            <span className="font-semibold text-slate-200">3. Widget (Native Block)</span>
          </div>
        </div>
      </div>

      {/* 2. Visual Canvas Area */}
      <div className="flex-1 bg-slate-950/80 border border-slate-900 rounded-3xl p-6 min-h-[500px] relative overflow-hidden shadow-inner dot-grid-background">
        
        {/* Dot grid decoration styling */}
        <style>{`
          .dot-grid-background {
            background-image: radial-gradient(rgba(79, 70, 229, 0.08) 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}</style>

        {template.content.map((section: ElementorSection, sIdx: number) => {
          const isSectionHovered = hoveredSection === section.id;
          const sectionBgColor = section.settings.background_color || '';
          
          return (
            <div
              key={section.id}
              id={`sec-${section.id}`}
              className={`relative mb-12 rounded-2xl border-2 transition-all duration-300 ${
                isSectionHovered 
                  ? 'border-indigo-500 bg-[#070b16]' 
                  : 'border-slate-800 bg-[#060810]'
              }`}
              style={{
                backgroundColor: sectionBgColor || undefined,
                padding: section.settings.padding 
                  ? `${section.settings.padding.top}px ${section.settings.padding.right}px ${section.settings.padding.bottom}px ${section.settings.padding.left}px`
                  : '24px 16px'
              }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              
              {/* Elementor Section Top Grab Handle Bar */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-indigo-600 border border-indigo-400 rounded-md px-2.5 py-0.5 shadow-lg z-20 transition-all ${
                isSectionHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 md:opacity-40'
              }`}>
                <button className="text-white hover:bg-white/10 p-0.5 rounded cursor-pointer transition-colors" title="Add Section Above">
                  <Plus className="h-3 w-3" />
                </button>
                <div className="h-3 w-5 flex flex-col justify-center gap-0.5 items-center text-indigo-200 hover:text-white cursor-grab px-0.5" title="Section Edit Handles">
                  <span className="h-0.5 w-3 bg-current rounded-full"></span>
                  <span className="h-0.5 w-3 bg-current rounded-full"></span>
                  <span className="h-0.5 w-3 bg-current rounded-full"></span>
                </div>
                <button className="text-white hover:bg-white/10 p-0.5 rounded cursor-pointer transition-colors" title="Delete Section">
                  <X className="h-3 w-3" />
                </button>
              </div>

              {/* Floating Section Info Overlay Tag */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 bg-indigo-950/90 border border-indigo-500/20 text-indigo-400 font-mono text-[9px] rounded-md pointer-events-none uppercase tracking-wider font-bold z-15 shadow-md">
                <Layout className="h-2.5 w-2.5" />
                <span>Section {sIdx + 1} ({section.settings.layout || 'boxed'})</span>
              </div>

              {/* Responsive Layout Columns Row container */}
              <div className="flex flex-wrap gap-4 mt-4 w-full">
                {section.elements.map((column: ElementorColumn, cIdx: number) => {
                  const isColumnHovered = hoveredColumn === column.id;
                  const colWidth = column.settings.width?.size || column.settings._column_size || 100;
                  const displayWidth = Number(colWidth).toFixed(0);

                  // Calculate Tailwind grid/flex column width representation of 50%, 33.3%, 100%
                  let styleWidth = '100%';
                  if (colWidth < 30) styleWidth = '25%';
                  else if (colWidth < 40) styleWidth = '33.333%';
                  else if (colWidth < 60) styleWidth = '50%';
                  else if (colWidth < 70) styleWidth = '66.666%';
                  else if (colWidth < 80) styleWidth = '75%';

                  return (
                    <div
                      key={column.id}
                      id={`col-${column.id}`}
                      className={`relative rounded-xl border border-dashed transition-all duration-200 p-4 ${
                        isColumnHovered 
                          ? 'border-slate-400 bg-slate-900/20' 
                          : 'border-slate-800/80'
                      }`}
                      style={{
                        flex: `1 1 calc(${styleWidth} - 1rem)`,
                        minWidth: '280px',
                        backgroundColor: column.settings.background_color || undefined,
                        borderRadius: column.settings.border_radius ? `${column.settings.border_radius.top}px` : undefined,
                        padding: column.settings.padding 
                          ? `${column.settings.padding.top}px ${column.settings.padding.right}px ${column.settings.padding.bottom}px ${column.settings.padding.left}px`
                          : '16px'
                      }}
                      onMouseEnter={(e) => { e.stopPropagation(); setHoveredColumn(column.id); }}
                      onMouseLeave={() => setHoveredColumn(null)}
                    >
                      
                      {/* Column Layout Icon Tag */}
                      <div className={`absolute -top-2.5 -left-2.5 h-6 w-6 rounded-lg bg-slate-800 border border-slate-600 text-slate-400 flex items-center justify-center cursor-pointer transition-all shadow-md z-15 ${
                        isColumnHovered ? 'scale-110 border-indigo-500 text-indigo-400' : 'scale-100'
                      }`} title={`Column Edit Width: ${displayWidth}%`}>
                        <Columns className="h-3 w-3" />
                      </div>

                      {/* Display Column Width Percent label */}
                      <span className="absolute top-2.5 right-2.5 text-[8px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                        Col: {displayWidth}% Width
                      </span>

                      {/* Widgets Stack inside Column container */}
                      <div className="space-y-4 pt-4 mt-1.5">
                        {column.elements && column.elements.map((widget: ElementorWidget | any, wIdx: number) => {
                          const isWidgetHovered = hoveredWidget === widget.id;
                          const isInnerSection = widget.elType === 'inner-section';

                          // If widget is an inner-section, render column subset recursively
                          if (isInnerSection) {
                            return (
                              <div
                                key={widget.id}
                                className="border border-indigo-600/30 rounded-xl bg-indigo-950/5 relative p-3 space-y-3 my-4 hover:border-indigo-500/60 transition-all"
                              >
                                <div className="absolute top-1 left-2 text-[8px] font-mono text-indigo-400 uppercase font-bold tracking-wider">
                                  ⚡ Inner Section Nesting Container
                                </div>
                                <div className="flex flex-wrap gap-3 pt-2">
                                  {widget.elements && widget.elements.map((innerCol: ElementorColumn) => {
                                    const innerColPercent = innerCol.settings.width?.size || 100;
                                    return (
                                      <div
                                        key={innerCol.id}
                                        className="border border-dotted border-slate-700 rounded-lg p-3 bg-[#080d1a]/50 flex-1 min-w-[200px]"
                                        style={{ width: `${innerColPercent}%` }}
                                      >
                                        <div className="text-[7px] font-mono text-slate-400 font-semibold mb-2">
                                          Inner Col: {innerColPercent.toFixed(0)}%
                                        </div>
                                        <div className="space-y-3">
                                          {innerCol.elements && innerCol.elements.map((innerWidget: ElementorWidget) => {
                                            return renderWidgetBlock(innerWidget);
                                          })}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          }

                          return renderWidgetBlock(widget);
                        })}

                        {(!column.elements || column.elements.length === 0) && (
                          <div className="h-20 flex items-center justify-center border border-dashed border-slate-800/60 rounded-xl text-slate-600 text-[10px] font-mono">
                            Empty Columns Slot. Drag widgets here.
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
