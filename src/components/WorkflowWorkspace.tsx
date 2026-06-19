import React, { useState } from 'react';
import { 
  WorkflowNode, 
  WorkflowConnection, 
  WorkflowTemplate, 
  ExecutionRun, 
  NodeType,
  TaskLogStep
} from '../types';
import { 
  Plus, 
  Trash2, 
  Settings, 
  Play, 
  Sparkles, 
  Cpu, 
  Database, 
  Terminal, 
  HelpCircle, 
  Maximize2, 
  Layers, 
  X, 
  Sliders, 
  Save, 
  ChevronsRight, 
  CheckCircle, 
  Loader2, 
  AlertCircle,
  Move
} from 'lucide-react';

interface WorkflowWorkspaceProps {
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  setNodes: (nodes: WorkflowNode[]) => void;
  setConnections: (connections: WorkflowConnection[]) => void;
  onExecute: (customInputs: { [key: string]: string }) => Promise<void>;
  currentRun?: ExecutionRun;
  isExecuting: boolean;
}

export default function WorkflowWorkspace({
  nodes,
  connections,
  setNodes,
  setConnections,
  onExecute,
  currentRun,
  isExecuting,
}: WorkflowWorkspaceProps) {
  
  // Local states
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(nodes[1]?.id || nodes[0]?.id || null);
  const [activeConsoleLog, setActiveConsoleLog] = useState<string[]>([
    '[08:00:15] Synapse Core VM online.',
    '[08:00:18] Graph compiled successfully. No circular dependencies found.',
    '[08:00:20] WebSocket disabled: Live polling proxy established.'
  ]);

  // Variables bound for inputs (e.g. topic = "Autonomous Robots", target = "SaaS Founders")
  const [customInputs, setCustomInputs] = useState<{ [key: string]: string }>({
    user_topic: 'AI Agents in SaaS',
    audience: 'Indie Hackers & Tech Executives',
    user_code: `export function filterActive(users) {\n  return users.filter(u => u.active === true);\n}`,
    comp_name: 'Vercel Ship',
    comp_pitch: 'Deploy global sites in 1 millisecond.',
    our_pitch: 'Deploy actual cognitive micro-agent clusters in 1 millisecond with zero servers.'
  });

  // Adding a new node
  const handleAddNode = (type: NodeType) => {
    const id = `${type}-${Date.now().toString().slice(-4)}`;
    
    let newNode: WorkflowNode = {
      id,
      type,
      title: `Custom ${type.toUpperCase()}`,
      role: type === 'agent' ? 'General Analyst Specialist' : '',
      systemPrompt: type === 'agent' ? 'You are a professional assistant.' : '',
      userPromptTemplate: 'Analyze this:\n{{previous_output}}',
      model: type === 'agent' || type === 'llm' ? 'gemini-3.5-flash' : '',
      temperature: 0.4,
      position: { x: 400 + Math.random() * 50, y: 150 + Math.random() * 80 },
      inputs: ['previous_output'],
      outputs: ['output-report'],
      variableBindings: {
        'previous_output': 'start-node.output-data'
      }
    };

    if (type === 'output') {
      newNode.title = 'Custom Publisher';
      newNode.inputs = ['final_input'];
      newNode.outputs = [];
      newNode.userPromptTemplate = '{{final_input}}';
      newNode.variableBindings = {
        'final_input': nodes[nodes.length - 1]?.id ? `${nodes[nodes.length - 1].id}.output-report` : ''
      };
    }

    setNodes([...nodes, newNode]);
    setSelectedNodeId(id);
    
    // Add connection
    if (nodes.length > 0) {
      const sourceNode = nodes[nodes.length - 1];
      const sourcePort = sourceNode.outputs?.[0] || 'output-data';
      const targetPort = newNode.inputs?.[0] || 'previous_output';
      
      const newConnection: WorkflowConnection = {
        id: `conn-${Date.now()}`,
        sourceNodeId: sourceNode.id,
        sourceOutputPort: sourcePort,
        targetNodeId: id,
        targetInputPort: targetPort
      };
      setConnections([...connections, newConnection]);
    }

    // Console update
    pushConsoleLog(`[CONSOLE] Added node ${id} of type [${type.toUpperCase()}]`);
  };

  // Dragging / Moving coordinate positions visually with button shifters
  const handleShiftPosition = (nodeId: string, direction: 'up' | 'down' | 'left' | 'right') => {
    setNodes(nodes.map(node => {
      if (node.id === nodeId) {
        let { x, y } = node.position;
        const speed = 40;
        if (direction === 'up') y = Math.max(0, y - speed);
        if (direction === 'down') y = y + speed;
        if (direction === 'left') x = Math.max(0, x - speed);
        if (direction === 'right') x = x + speed;
        return {
          ...node,
          position: { x, y }
        };
      }
      return node;
    }));
  };

  // Deleting a node
  const handleDeleteNode = (nodeId: string) => {
    if (nodeId === 'start-node' || nodeId === 'output-node') {
      alert('The Start and Output Publisher nodes are critical system anchors and cannot be deleted.');
      return;
    }
    setNodes(nodes.filter(n => n.id !== nodeId));
    setConnections(connections.filter(c => c.sourceNodeId !== nodeId && c.targetNodeId !== nodeId));
    if (selectedNodeId === nodeId) {
      setSelectedNodeId('start-node');
    }
    pushConsoleLog(`[CONSOLE] Removed Node ${nodeId} from workflow workspace.`);
  };

  // Helper utility to write console logs
  const pushConsoleLog = (text: string) => {
    const time = new Date().toLocaleTimeString();
    setActiveConsoleLog(prev => [...prev, `[${time}] ${text}`].slice(-12));
  };

  // Select node details
  const selectedNode = nodes.find(n => n.id === selectedNodeId);

  // Handle run clicked
  const handleTriggerRun = async () => {
    pushConsoleLog('[CONSOLE] Initiating Multi-Agent Pipeline Run...');
    pushConsoleLog('[CONSOLE] Binding custom user state attributes...');
    await onExecute(customInputs);
    pushConsoleLog('[CONSOLE] Inference chain completed. Metrics calculated.');
  };

  return (
    <div className="workspace-grid h-[calc(100vh-4rem)] bg-[#030712] relative overflow-hidden text-slate-200">
      
      {/* 1. Left Aside: Node Anchors and Preset Triggers */}
      <aside className="bg-[#030712] border-r border-slate-900 p-4 flex flex-col gap-6 overflow-y-auto">
        
        {/* Title branding / structure */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-2.5 font-bold">
            Pipeline Architect
          </div>
          <div className="flex items-center gap-2.5 p-2 bg-[#090e1a] rounded-lg border border-slate-800">
            <Layers className="h-4 w-4 text-indigo-400" />
            <span className="text-xs font-semibold">Active Chain Map</span>
          </div>
        </div>

        {/* Dynamic input binding controller */}
        <div className="space-y-3.5">
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
            Binding State Variables
          </div>

          <div className="space-y-2 text-xs">
            {/* Find current system variables requested in start-node */}
            {nodes.find(n => n.id === 'start-node')?.userPromptTemplate.includes('user_topic') && (
              <>
                <div className="space-y-1">
                  <label className="text-slate-400 font-mono text-[10px]">{"{{user_topic}}"}</label>
                  <input
                    type="text"
                    value={customInputs.user_topic}
                    onChange={(e) => setCustomInputs({ ...customInputs, user_topic: e.target.value })}
                    className="w-full bg-[#050914] border border-slate-800 rounded px-2.5 py-1 text-xs text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400 font-mono text-[10px]">{"{{audience}}"}</label>
                  <input
                    type="text"
                    value={customInputs.audience}
                    onChange={(e) => setCustomInputs({ ...customInputs, audience: e.target.value })}
                    className="w-full bg-[#050914] border border-slate-800 rounded px-2.5 py-1 text-xs text-white focus:border-indigo-500 outline-none"
                  />
                </div>
              </>
            )}

            {nodes.find(n => n.id === 'start-node')?.userPromptTemplate.includes('user_code') && (
              <div className="space-y-1">
                <label className="text-slate-400 font-mono text-[10px]">{"{{user_code}}"}</label>
                <textarea
                  rows={3}
                  value={customInputs.user_code}
                  onChange={(e) => setCustomInputs({ ...customInputs, user_code: e.target.value })}
                  className="w-full bg-[#050914] border border-slate-800 rounded px-2.5 py-1 text-xs text-white font-mono focus:border-indigo-500 outline-none resize-none"
                />
              </div>
            )}

            {nodes.find(n => n.id === 'start-node')?.userPromptTemplate.includes('comp_name') && (
              <>
                <div className="space-y-1">
                  <label className="text-slate-400 font-mono text-[10px]">{"{{comp_name}}"}</label>
                  <input
                    type="text"
                    value={customInputs.comp_name}
                    onChange={(e) => setCustomInputs({ ...customInputs, comp_name: e.target.value })}
                    className="w-full bg-[#050914] border border-slate-800 rounded px-2.5 py-1 text-xs text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400 font-mono text-[10px]">{"{{our_pitch}}"}</label>
                  <textarea
                    rows={2}
                    value={customInputs.our_pitch}
                    onChange={(e) => setCustomInputs({ ...customInputs, our_pitch: e.target.value })}
                    className="w-full bg-[#050914] border border-slate-800 rounded px-2.5 py-1 text-xs text-white focus:border-indigo-500 outline-none resize-none"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Block adding triggers */}
        <div className="space-y-2.5 pt-2">
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
            Workspace Toolset
          </div>
          
          <button
            onClick={() => handleAddNode('agent')}
            className="w-full flex items-center justify-between p-2 rounded-lg bg-indigo-950/20 text-indigo-400 hover:bg-indigo-950/40 border border-indigo-500/10 hover:border-indigo-500/30 text-xs text-left transition-all"
          >
            <span className="font-semibold">Add Agent specialist</span>
            <Plus className="h-3.5 w-3.5" />
          </button>
          
          <button
            onClick={() => handleAddNode('llm')}
            className="w-full flex items-center justify-between p-2 rounded-lg bg-pink-950/20 text-pink-400 hover:bg-pink-950/40 border border-pink-500/10 hover:border-pink-500/30 text-xs text-left transition-all"
          >
            <span className="font-semibold">Add Standalone LLM</span>
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Small informational alert widget in Immersive UI */}
        <div className="mt-auto p-4 bg-indigo-950/20 rounded-xl border border-indigo-500/10">
          <div className="text-[10px] text-indigo-400 font-bold uppercase mb-1 flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            <span>AI Assistant Tips</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Order coordinates using coordinate shifter. Right panels dynamically adapt to the currently selected node properties.
          </p>
        </div>
      </aside>

      {/* 2. Main Middle Workspace: Topological Node Canvas */}
      <main className="relative bg-[#000] overflow-hidden flex flex-col justify-between">
        
        {/* Radial grid pattern backing */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#6366f1 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Viewport indicators bar */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
          <div className="px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] rounded font-mono">
            COORDINATE GRID: MERCATOR LAYOUT
          </div>
          
          <button
            onClick={handleTriggerRun}
            disabled={isExecuting}
            className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-xs font-semibold text-white rounded border border-indigo-500/30 flex items-center gap-1.5 shadow-lg shadow-indigo-600/10 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
          >
            {isExecuting ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Running Inference...</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current text-indigo-100" />
                <span>Run Agent Chains</span>
              </>
            )}
          </button>
        </div>

        {/* Infinite Scroll/Drag Canvas container */}
        <div className="flex-1 w-full min-h-[400px] overflow-auto relative p-8">
          
          <div className="w-[1000px] h-[550px] relative">
            
            {/* Visual rendering of connections/arrows linking nodes coordinates */}
            {connections.map((conn) => {
              const sourceNode = nodes.find(n => n.id === conn.sourceNodeId);
              const targetNode = nodes.find(n => n.id === conn.targetNodeId);
              if (!sourceNode || !targetNode) return null;

              // Calculate clean visual drawing paths: middle of cards
              const startX = sourceNode.position.x + 230; // approx width
              const startY = sourceNode.position.y + 70;  // approx mid length
              const endX = targetNode.position.x;
              const endY = targetNode.position.y + 70;

              // Bezier curve calculations
              const controlPointX1 = startX + 60;
              const controlPointX2 = endX - 60;

              return (
                <svg key={conn.id} className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <path
                    d={`M ${startX} ${startY} C ${controlPointX1} ${startY}, ${controlPointX2} ${endY}, ${endX} ${endY}`}
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeDasharray="6 3"
                    className="opacity-70 group-hover:opacity-100 animate-[dash_12s_linear_infinite]"
                  />
                  <polygon
                    points={`${endX},${endY} ${endX-8},${endY-5} ${endX-8},${endY+5}`}
                    fill="#6366f1"
                  />
                </svg>
              );
            })}

            {/* Visual Nodes List */}
            {nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              
              return (
                <div
                  key={node.id}
                  style={{
                    position: 'absolute',
                    left: `${node.position.x}px`,
                    top: `${node.position.y}px`,
                  }}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-[240px] rounded-xl border p-4 cursor-pointer transition-all duration-300 z-10 ${
                    isSelected 
                      ? 'bg-[#090e1a] border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.25)]' 
                      : 'bg-[#090e1a]/85 border-slate-800 hover:border-slate-700 hover:bg-[#090e1a]'
                  }`}
                >
                  {/* Anchor / Connection state header info */}
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-900">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full ${
                        node.type === 'input' ? 'bg-indigo-400' 
                        : node.type === 'agent' ? 'bg-emerald-400'
                        : node.type === 'llm' ? 'bg-pink-400'
                        : 'bg-amber-400'
                      }`} />
                      <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">
                        {node.type}
                      </span>
                    </div>

                    {/* Joystick Movement shifter built explicitly for precise coordinate grid placing */}
                    <div className="flex items-center gap-1">
                      <button 
                        title="Shift Left"
                        onClick={(e) => { e.stopPropagation(); handleShiftPosition(node.id, 'left'); }}
                        className="p-0.5 hover:bg-slate-850 rounded text-slate-500 hover:text-white"
                      >
                        ←
                      </button>
                      <button 
                        title="Shift Up"
                        onClick={(e) => { e.stopPropagation(); handleShiftPosition(node.id, 'up'); }}
                        className="p-0.5 hover:bg-slate-850 rounded text-slate-500 hover:text-white"
                      >
                        ↑
                      </button>
                      <button 
                        title="Shift Down"
                        onClick={(e) => { e.stopPropagation(); handleShiftPosition(node.id, 'down'); }}
                        className="p-0.5 hover:bg-slate-850 rounded text-slate-500 hover:text-white"
                      >
                        ↓
                      </button>
                      <button 
                        title="Shift Right"
                        onClick={(e) => { e.stopPropagation(); handleShiftPosition(node.id, 'right'); }}
                        className="p-0.5 hover:bg-slate-850 rounded text-slate-500 hover:text-white"
                      >
                        →
                      </button>
                    </div>
                  </div>

                  {/* Body elements */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-white tracking-tight truncate">
                      {node.title}
                    </h4>
                    
                    {node.role && (
                      <p className="text-[11px] text-indigo-400 font-semibold truncate">
                        {node.role}
                      </p>
                    )}

                    {node.model && (
                      <div className="inline-flex items-center gap-1 text-[9px] font-mono bg-slate-900 border border-slate-800 text-slate-400 px-1 py-0.5 rounded">
                        <Cpu className="h-2.5 w-2.5" />
                        <span>{node.model}</span>
                      </div>
                    )}

                    {/* Quick outputs ports indicator */}
                    <div className="flex items-center justify-between pt-2.5 text-[10px] text-slate-500 font-mono">
                      <span>Inputs: {(node.inputs || []).length}</span>
                      <span>Outputs: {(node.outputs || []).length}</span>
                    </div>
                  </div>

                  {/* Delete button (except Critical anchors) */}
                  {node.id !== 'start-node' && node.id !== 'output-node' && (
                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteNode(node.id);
                        }}
                        className="p-1 hover:bg-rose-950/20 text-slate-500 hover:text-rose-400 rounded transition-all"
                        title="Delete node"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* 3. Bottom live console diagnostic reporter */}
        <section className="bg-slate-950 border-t border-slate-900 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-indigo-400" />
              <span>Live Synapse Action Console Logs</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-400">ONLINE</span>
            </div>
          </div>

          <div className="bg-black p-3.5 rounded border border-slate-900 h-28 overflow-y-auto font-mono text-[10px] leading-relaxed text-slate-400 space-y-1">
            {activeConsoleLog.map((log, idx) => {
              let colorClass = 'text-slate-400';
              if (log.includes('[err]') || log.includes('error')) colorClass = 'text-rose-400 font-semibold';
              if (log.includes('[CONSOLE]')) colorClass = 'text-indigo-400';
              if (log.includes('successfully') || log.includes('SUCCESS')) colorClass = 'text-emerald-400';

              return (
                <div key={idx} className={colorClass}>
                  {log}
                </div>
              );
            })}
            {isExecuting && (
              <div className="text-indigo-300 animate-pulse font-bold flex items-center gap-1">
                <span>[INFERENCE] Triggering topological proxy stream for Gemini models...</span>
              </div>
            )}
          </div>
        </section>

      </main>

      {/* 4. Right Aside: Selected Node Configurator Form */}
      <aside className="bg-[#030712] border-l border-slate-900 p-4 overflow-y-auto space-y-5">
        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
          Selected Node Properties
        </div>

        {selectedNode ? (
          <div className="space-y-4">
            
            {/* Quick overview indicator */}
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1.5">
              <h4 className="text-xs font-bold text-white">{selectedNode.title}</h4>
              <p className="text-[10px] font-mono text-slate-400">Node Identifier: {selectedNode.id}</p>
            </div>

            {/* Editable Field: Node Title */}
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400">Node Component Label</label>
              <input
                type="text"
                value={selectedNode.title}
                onChange={(e) => {
                  setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, title: e.target.value } : n));
                }}
                className="w-full bg-[#050914] border border-slate-800 focus:border-indigo-500 rounded px-2.5 py-1.5 text-xs text-white outline-none"
              />
            </div>

            {/* Editable Field: Agent Role Specialty (if agent) */}
            {(selectedNode.type === 'agent') && (
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400 font-medium">Specialist Agent Role Description</label>
                <input
                  type="text"
                  value={selectedNode.role}
                  onChange={(e) => {
                    setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, role: e.target.value } : n));
                  }}
                  className="w-full bg-[#050914] border border-slate-800 focus:border-indigo-500 rounded px-2.5 py-1.5 text-xs text-white outline-none"
                />
              </div>
            )}

            {/* Editable Field: System instructions prompt (if agent or LLM) */}
            {(selectedNode.type === 'agent' || selectedNode.type === 'llm') && (
              <>
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">System Core Instructions</label>
                  <textarea
                    rows={4}
                    value={selectedNode.systemPrompt}
                    onChange={(e) => {
                      setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, systemPrompt: e.target.value } : n));
                    }}
                    className="w-full bg-[#050914] border border-slate-800 focus:border-indigo-500 rounded px-2.5 py-1.5 text-xs text-white font-mono leading-relaxed outline-none resize-none"
                    placeholder="Enter system prompt guidelines..."
                  />
                </div>

                {/* Model selector */}
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">Gemini model selection</label>
                  <select
                    value={selectedNode.model}
                    onChange={(e) => {
                      setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, model: e.target.value } : n));
                    }}
                    className="w-full bg-[#050914] border border-slate-800 focus:border-indigo-500 rounded px-2 py-1.5 text-xs text-white outline-none"
                  >
                    <option value="gemini-3.5-flash">gemini-3.5-flash (Standard recommended)</option>
                    <option value="gemini-1.5-pro">gemini-1.5-pro (Deep reasoning)</option>
                  </select>
                </div>

                {/* Temperature selector */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Randomness (Temperature)</span>
                    <span className="font-mono text-indigo-400 text-xs font-semibold">{selectedNode.temperature}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={selectedNode.temperature}
                    onChange={(e) => {
                      setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, temperature: parseFloat(e.target.value) } : n));
                    }}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>
              </>
            )}

            {/* Editable Field: Prompt Template */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[11px] text-slate-400">Prompt / Output Body Template</label>
                <HelpCircle className="h-3 w-3 text-slate-500 hover:text-slate-300 cursor-help" title="Use target node placeholders! Example: {{input_report}}" />
              </div>
              <textarea
                rows={5}
                value={selectedNode.userPromptTemplate}
                onChange={(e) => {
                  setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, userPromptTemplate: e.target.value } : n));
                }}
                className="w-full bg-[#050914] border border-slate-800 focus:border-indigo-500 rounded px-2.5 py-1.5 text-xs text-white font-mono leading-relaxed outline-none"
                placeholder="Write parameters..."
              />
            </div>

            {/* Editable variable binding maps */}
            {selectedNode.variableBindings && Object.keys(selectedNode.variableBindings).length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-900">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  Resolved Variable Bindings
                </span>
                
                {Object.entries(selectedNode.variableBindings).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-mono">{"{{"}{key}{"}}"} resolves from:</label>
                    <select
                      value={value}
                      onChange={(e) => {
                        const bindings = { ...selectedNode.variableBindings, [key]: e.target.value };
                        setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, variableBindings: bindings } : n));
                      }}
                      className="w-full bg-[#050914] border border-slate-800 focus:border-indigo-500 rounded px-2.5 py-1 text-[11px] text-white font-mono outline-none"
                    >
                      <option value="">-- Manual/Static Value --</option>
                      {nodes
                        .filter(n => n.id !== selectedNode.id)
                        .map(n => {
                          const portName = n.outputs?.[0] || 'output-data';
                          return (
                            <option key={`${n.id}.${portName}`} value={`${n.id}.${portName}`}>
                              {n.title} (.{portName})
                            </option>
                          );
                        })}
                    </select>
                  </div>
                ))}
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-10 text-slate-500 text-xs">
            No active node selected. Select a node on the canvas layout to customize its parameters.
          </div>
        )}

      </aside>

    </div>
  );
}
