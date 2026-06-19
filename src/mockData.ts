import { WorkflowTemplate } from './types';

export const TEMPLATES: WorkflowTemplate[] = [
  {
    id: 'blog-seo-optimizer',
    name: 'Multi-Agent Blog Creator',
    description: 'A 3-step high-converting blog generation workflow. Chains a research aggregator, content drafter, and SEO optimizer.',
    category: 'Marketing',
    icon: 'PenTool',
    nodes: [
      {
        id: 'start-node',
        type: 'input',
        title: 'Initial Prompt Trigger',
        role: 'Input Collector',
        systemPrompt: '',
        userPromptTemplate: 'Topic: {{user_topic}}\nTarget Audience: {{audience}}',
        model: 'gemini-3.5-flash',
        temperature: 0.2,
        position: { x: 50, y: 150 },
        inputs: [],
        outputs: ['output-data'],
        variableBindings: {}
      },
      {
        id: 'researcher-agent',
        type: 'agent',
        title: 'Academic Researcher',
        role: 'Analytical Research Specialist',
        systemPrompt: 'You are an elite, highly detailed Research Specialist. Your job is to break down the topic, find key concepts, suggest 5 data points/statistics (simulated but high-probability), create a detailed mind-map structure, and locate core angles. Ensure your response is professional and structured.',
        userPromptTemplate: 'Conduct extensive outline research on this specific prompt topic:\n\n{{input_text}}',
        model: 'gemini-3.5-flash',
        temperature: 0.5,
        position: { x: 300, y: 100 },
        inputs: ['input-text'],
        outputs: ['research-report'],
        variableBindings: { 'input-text': 'start-node.output-data' }
      },
      {
        id: 'copywriter-agent',
        type: 'agent',
        title: 'SEO Copywriter',
        role: 'High-Converting Copy Coach',
        systemPrompt: 'You are an exceptional SEO Copywriter. Use the research outline provided to craft a fully comprehensive, engaging search-engine-optimized outline and draft. Insert proper markdown headers (H1, H2, H3), bullet points, and key takeaways.',
        userPromptTemplate: 'Take this research report and draft a 500-word blog post. Use SEO best practices:\n\n{{input_report}}',
        model: 'gemini-3.5-flash',
        temperature: 0.7,
        position: { x: 580, y: 150 },
        inputs: ['input-report'],
        outputs: ['final-text'],
        variableBindings: { 'input-report': 'researcher-agent.research-report' }
      },
      {
        id: 'output-node',
        type: 'output',
        title: 'Workflow Final Publisher',
        role: 'Output Reviewer',
        systemPrompt: '',
        userPromptTemplate: '{{input_draft}}',
        model: '',
        temperature: 0,
        position: { x: 850, y: 180 },
        inputs: ['input-draft'],
        outputs: [],
        variableBindings: { 'input-draft': 'copywriter-agent.final-text' }
      }
    ],
    connections: [
      {
        id: 'c1',
        sourceNodeId: 'start-node',
        sourceOutputPort: 'output-data',
        targetNodeId: 'researcher-agent',
        targetInputPort: 'input-text'
      },
      {
        id: 'c2',
        sourceNodeId: 'researcher-agent',
        sourceOutputPort: 'research-report',
        targetNodeId: 'copywriter-agent',
        targetInputPort: 'input-report'
      },
      {
        id: 'c3',
        sourceNodeId: 'copywriter-agent',
        sourceOutputPort: 'final-text',
        targetNodeId: 'output-node',
        targetInputPort: 'input-draft'
      }
    ]
  },
  {
    id: 'code-tester-expert',
    name: 'TypeScript Code Auditor',
    description: 'Chains a code quality auditor to analyze React or TypeScript snippets for bugs and performance, then automatically outputs robust Jest test suites.',
    category: 'Development',
    icon: 'Terminal',
    nodes: [
      {
        id: 'start-node',
        type: 'input',
        title: 'Source Code Input',
        role: 'Source Collector',
        systemPrompt: '',
        userPromptTemplate: 'Code to Analyze:\n{{user_code}}',
        model: 'gemini-3.5-flash',
        temperature: 0.1,
        position: { x: 50, y: 150 },
        inputs: [],
        outputs: ['output-code'],
        variableBindings: {}
      },
      {
        id: 'auditor-agent',
        type: 'agent',
        title: 'Static Code Auditor',
        role: 'Senior TypeScript Architect',
        systemPrompt: 'You are a meticulous, highly picky Static Code Auditor. Analyze the input code for: runtime vulnerabilities, memory leaks, performance bottlenecks, code formatting issues, and React anti-patterns. Provide a bulleted report with clear solutions.',
        userPromptTemplate: 'Audit this source code:\n\n{{input_code}}',
        model: 'gemini-3.5-flash',
        temperature: 0.2,
        position: { x: 300, y: 120 },
        inputs: ['input-code'],
        outputs: ['audit-report'],
        variableBindings: { 'input-code': 'start-node.output-code' }
      },
      {
        id: 'tester-agent',
        type: 'agent',
        title: 'Jest Test Engineer',
        role: 'QA Testing Lead',
        systemPrompt: 'You are an automated Jest and React Testing Library expert. Read the code and the code audit report, then write a production-ready, fully mock-implemented suite of Jest tests covering code edge cases.',
        userPromptTemplate: 'Write Jest test cases based on typical modules. Use mock data structures.\n\nCode context:\n{{code_context}}\n\nAudit focus areas:\n{{audit_report_context}}',
        model: 'gemini-3.5-flash',
        temperature: 0.3,
        position: { x: 580, y: 150 },
        inputs: ['code_context', 'audit_report_context'],
        outputs: ['test-spec'],
        variableBindings: {
          'code_context': 'start-node.output-code',
          'audit_report_context': 'auditor-agent.audit-report'
        }
      },
      {
        id: 'output-node',
        type: 'output',
        title: 'Workflow Final Publisher',
        role: 'Output Reviewer',
        systemPrompt: '',
        userPromptTemplate: '{{input_tests}}',
        model: '',
        temperature: 0,
        position: { x: 850, y: 180 },
        inputs: ['input-tests'],
        outputs: [],
        variableBindings: { 'input-tests': 'tester-agent.test-spec' }
      }
    ],
    connections: [
      {
        id: 'c1',
        sourceNodeId: 'start-node',
        sourceOutputPort: 'output-code',
        targetNodeId: 'auditor-agent',
        targetInputPort: 'input-code'
      },
      {
        id: 'c2',
        sourceNodeId: 'start-node',
        sourceOutputPort: 'output-code',
        targetNodeId: 'tester-agent',
        targetInputPort: 'code_context'
      },
      {
        id: 'c3',
        sourceNodeId: 'auditor-agent',
        sourceOutputPort: 'audit-report',
        targetNodeId: 'tester-agent',
        targetInputPort: 'audit_report_context'
      },
      {
        id: 'c4',
        sourceNodeId: 'tester-agent',
        sourceOutputPort: 'test-spec',
        targetNodeId: 'output-node',
        targetInputPort: 'input-tests'
      }
    ]
  },
  {
    id: 'outreach-personalizer',
    name: 'SaaS Competitor Intelligence Desk',
    description: 'Chains competitor analysis, value proposition mapping, and custom cold sales outreach email generation so your pitches are hyper-targeted.',
    category: 'Sales & Growth',
    icon: 'Mail',
    nodes: [
      {
        id: 'start-node',
        type: 'input',
        title: 'Competitor Pitch Trigger',
        role: 'Trigger',
        systemPrompt: '',
        userPromptTemplate: 'Competitor Name: {{comp_name}}\nCompetitor Pitch: {{comp_pitch}}\nOur Product Pitch: {{our_pitch}}',
        model: 'gemini-3.5-flash',
        temperature: 0.1,
        position: { x: 50, y: 150 },
        inputs: [],
        outputs: ['raw-triggers'],
        variableBindings: {}
      },
      {
        id: 'analyst-agent',
        type: 'agent',
        title: 'Value Proposition Analyst',
        role: 'SaaS Market Strategist',
        systemPrompt: 'You are a veteran venture builder and SaaS product analyst. Compare the competitors features/pitch against ours. Point out 3 direct feature gaps or value points where we absolutely win, and formulate the exact hooks we should leverage.',
        userPromptTemplate: 'Analyze competitor vs our pitch details:\n{{pitches}}',
        model: 'gemini-3.5-flash',
        temperature: 0.4,
        position: { x: 300, y: 100 },
        inputs: ['pitches'],
        outputs: ['strategic-analysis'],
        variableBindings: { 'pitches': 'start-node.raw-triggers' }
      },
      {
        id: 'copywriter-email-agent',
        type: 'agent',
        title: 'B2B Sales Outreacher',
        role: 'Growth Marketing Architect',
        systemPrompt: 'You are an expert cold outreach copywriter who writes emails with high reply-rates. Avoid standard robotic buzzwords like "hope this finds you well" or "synergy." Write a highly original, personalized, punchy sequence of 3 cold emails showcasing how we solve the direct gaps identified.',
        userPromptTemplate: 'Using this strategic analysis, build our cold outreach sequence:\n\n{{strategic_analysis_context}}',
        model: 'gemini-3.5-flash',
        temperature: 0.8,
        position: { x: 580, y: 150 },
        inputs: ['strategic_analysis_context'],
        outputs: ['email-templates'],
        variableBindings: { 'strategic_analysis_context': 'analyst-agent.strategic-analysis' }
      },
      {
        id: 'output-node',
        type: 'output',
        title: 'Workflow Final Publisher',
        role: 'Output Reviewer',
        systemPrompt: '',
        userPromptTemplate: '{{input_emails}}',
        model: '',
        temperature: 0,
        position: { x: 850, y: 180 },
        inputs: ['input-emails'],
        outputs: [],
        variableBindings: { 'input-emails': 'copywriter-email-agent.email-templates' }
      }
    ],
    connections: [
      {
        id: 'c1',
        sourceNodeId: 'start-node',
        sourceOutputPort: 'raw-triggers',
        targetNodeId: 'analyst-agent',
        targetInputPort: 'pitches'
      },
      {
        id: 'c2',
        sourceNodeId: 'analyst-agent',
        sourceOutputPort: 'strategic-analysis',
        targetNodeId: 'copywriter-email-agent',
        targetInputPort: 'strategic_analysis_context'
      },
      {
        id: 'c3',
        sourceNodeId: 'copywriter-email-agent',
        sourceOutputPort: 'email-templates',
        targetNodeId: 'output-node',
        targetInputPort: 'input-emails'
      }
    ]
  }
];
