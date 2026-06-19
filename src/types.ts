export type NodeType = 'input' | 'agent' | 'llm' | 'integrator' | 'output';

export interface WorkflowNode {
  id: string;
  type: NodeType;
  title: string;
  role: string;
  systemPrompt: string;
  userPromptTemplate: string;
  model: string;
  temperature: number;
  position: { x: number; y: number };
  inputs: string[]; // input ports
  outputs: string[]; // output ports
  variableBindings: { [key: string]: string }; // e.g. "topic": "{{start_input}}"
}

export interface WorkflowConnection {
  id: string;
  sourceNodeId: string;
  sourceOutputPort: string;
  targetNodeId: string;
  targetInputPort: string;
}

export interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
}

export interface TaskLogStep {
  stepId: string;
  nodeId: string;
  nodeTitle: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  inputUsed: string;
  outputProduced?: string;
  durationMs?: number;
  tokensUsed?: number;
  costSimulated?: number;
  error?: string;
}

export interface ExecutionRun {
  id: string;
  workflowId: string;
  workflowName: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  startedAt?: string;
  steps: TaskLogStep[];
  finalOutput?: string;
  totalTokens: number;
  totalCost: number;
}

export interface GeneratedWebsite {
  id: string;
  prompt: string;
  title: string;
  code: string;
  createdAt: string;
  theme?: string;
  imageUrl?: string;
  blueprint?: string;
  confidenceScore?: number;
  validationReport?: {
    score: number;
    hasRefined: boolean;
    checks: Array<{ name: string; passed: boolean }>;
  };
}

