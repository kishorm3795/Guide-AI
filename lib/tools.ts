export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  link: string;
  pricing: string;
  useCases: string[];
  pros: string[];
  cons: string[];
  alternatives: string[];
  averageRating: number;
  reviewCount: number;
  lastUpdated: string;
}

export const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI Assistants',
    description: 'A powerful AI chatbot for conversation, writing, and problem-solving.',
    features: ['Natural language processing', 'Code generation', 'Creative writing', 'Research assistance'],
    link: 'https://chat.openai.com',
    pricing: 'Free tier available, premium plans start at $20/month',
    useCases: ['Writing assistance', 'Coding help', 'Brainstorming ideas', 'Learning new topics'],
    pros: ['Highly versatile', 'Easy to use', 'Constantly improving'],
    cons: ['Can be inaccurate', 'Limited context window', 'Requires internet'],
    alternatives: ['Claude', 'Gemini', 'Perplexity'],
    averageRating: 4.6,
    reviewCount: 127,
    lastUpdated: '3 days ago'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'Productivity',
    description: 'AI-powered writing and automation features within Notion workspaces.',
    features: ['Smart writing', 'Summarization', 'Translation', 'Task automation'],
    link: 'https://notion.so',
    pricing: 'Included in Notion plans, starts at $8/month',
    useCases: ['Note-taking', 'Project management', 'Knowledge base', 'Team collaboration'],
    pros: ['Integrated with Notion', 'Multiple AI features', 'Customizable'],
    cons: ['Requires Notion subscription', 'Limited free tier', 'Learning curve'],
    alternatives: ['Evernote', 'Roam Research', 'Obsidian'],
    averageRating: 4.3,
    reviewCount: 89,
    lastUpdated: '1 week ago'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'Writing',
    description: 'AI-powered code completion and generation tool for developers.',
    features: ['Code suggestions', 'Function completion', 'Documentation', 'Test generation'],
    link: 'https://github.com/features/copilot',
    pricing: '$10/month or $100/year',
    useCases: ['Software development', 'Code review', 'Learning programming', 'Rapid prototyping'],
    pros: ['Speeds up coding', 'Learns from context', 'Supports multiple languages'],
    cons: ['Subscription cost', 'Can suggest incorrect code', 'Privacy concerns'],
    alternatives: ['Tabnine', 'Kite', 'CodeWhisperer'],
    averageRating: 4.7,
    reviewCount: 234,
    lastUpdated: '2 days ago'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'Automation',
    description: 'AI image generation tool for creating stunning visuals from text prompts.',
    features: ['Text-to-image', 'Style variations', 'High resolution', 'Discord integration'],
    link: 'https://midjourney.com',
    pricing: 'Free trial, plans from $10/month',
    useCases: ['Graphic design', 'Marketing materials', 'Concept art', 'Social media content'],
    pros: ['High-quality images', 'Creative freedom', 'Fast generation'],
    cons: ['Requires Discord', 'Usage limits', 'Style consistency issues'],
    alternatives: ['DALL-E', 'Stable Diffusion', 'Canva Magic Studio'],
    averageRating: 4.4,
    reviewCount: 156,
    lastUpdated: '4 days ago'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'Research',
    description: 'AI-powered search engine that provides sourced answers to questions.',
    features: ['Source citations', 'Follow-up questions', 'Pro search', 'API access'],
    link: 'https://perplexity.ai',
    pricing: 'Free basic, Pro at $20/month',
    useCases: ['Research', 'Fact-checking', 'Learning', 'Professional inquiries'],
    pros: ['Cites sources', 'Conversational', 'No ads'],
    cons: ['Limited free searches', 'Newer technology', 'May hallucinate'],
    alternatives: ['ChatGPT', 'Google Bard', 'You.com'],
    averageRating: 4.5,
    reviewCount: 67,
    lastUpdated: '5 days ago'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    category: 'AI Assistants',
    description: "Google's powerful multimodal AI model for advanced text, code, image understanding, and reasoning.",
    features: [
      'Multimodal (text, images, code)',
      'Advanced reasoning capabilities',
      '1M token context window',
      'Google ecosystem integration',
      'Function calling & plugins'
    ],
    link: 'https://gemini.google.com',
    pricing: 'Free tier, Advanced $20/month',
    useCases: [
      'Complex problem solving',
      'Code generation & debugging',
      'Document analysis with images',
      'Research & analysis',
      'Enterprise workflows'
    ],
    pros: [
      'Multimodal understanding',
      'Long context window',
      'Fast response times',
      'Google integration',
      'Regular updates'
    ],
    cons: [
      'Google ecosystem lock-in',
      'Limited third-party integrations',
      'Advanced tier expensive',
      'Regional availability'
    ],
    alternatives: ['ChatGPT', 'Claude', 'Grok'],
    averageRating: 4.5,
    reviewCount: 89,
    lastUpdated: '1 day ago'
  },
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'AI Assistants',
    description: "Anthropic's safe and helpful AI assistant with superior reasoning and long context understanding.",
    features: [
      'Superior reasoning & coding',
      '200K token context window',
      'Constitutional AI safety',
      'Projects & Artifacts',
      'API & integrations'
    ],
    link: 'https://claude.ai',
    pricing: 'Free tier, Pro $20/month, Team $30/user/month',
    useCases: [
      'Advanced coding & debugging',
      'Complex analysis tasks',
      'Long document processing',
      'Creative writing',
      'Enterprise AI workflows'
    ],
    pros: [
      'Best coding capabilities',
      'Long context handling',
      'Safety aligned',
      'Fast responses',
      'Great for complex tasks'
    ],
    cons: [
      'Rate limits on free tier',
      'No image generation',
      'Anthropic ecosystem',
      'No real-time web access'
    ],
    alternatives: ['ChatGPT', 'Gemini', 'Grok'],
    averageRating: 4.8,
    reviewCount: 156,
    lastUpdated: '2 days ago'
  },
  {
    id: 'runwayml',
    name: 'Runway ML',
    category: 'Video AI',
    description: 'Advanced AI video generation and editing platform with Gen-3 Alpha model.',
    features: [
      'Text-to-video generation',
      'Image-to-video',
      'Video-to-video',
      'Motion brush',
      'Lip sync',
      'Real-time editing'
    ],
    link: 'https://runwayml.com',
    pricing: 'Free tier, Standard $15/mo, Pro $35/mo',
    useCases: [
      'Marketing videos',
      'Social media content',
      'Film & TV production',
      'Product demos',
      'Creative storytelling'
    ],
    pros: [
      'Best video quality',
      'Advanced editing tools',
      'Real-time preview',
      'Professional workflows',
      'Regular model updates'
    ],
    cons: [
      'Credit-based system',
      'High compute costs',
      'Learning curve',
      'Watermarks on free'
    ],
    alternatives: ['Sora', 'Pika Labs', 'Luma AI', 'Kling AI'],
    averageRating: 4.6,
    reviewCount: 112,
    lastUpdated: '1 day ago'
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    category: 'Video AI',
    description: 'AI video platform that lets you create professional videos with realistic AI avatars and voices in 140+ languages.',
    features: [
      '120+ AI avatars',
      '140+ languages & accents',
      'Text-to-speech with lip sync',
      'Customizable templates',
      'Team collaboration',
      'API integration',
      'Brand kits'
    ],
    link: 'https://www.synthesia.io',
    pricing: 'Free trial, Personal $29/mo, Corporate $99/mo',
    useCases: [
      'Training & explainer videos',
      'Marketing & sales content',
      'Internal communications',
      'Product demos',
      'Localized content',
      'Customer onboarding'
    ],
    pros: [
      'No filming required',
      'Multi-language support',
      'Professional quality',
      'Easy editing',
      'Scalable for teams',
      'Great templates'
    ],
    cons: [
      'Subscription cost',
      'Avatar customization limits',
      'Render times',
      'Less creative than generative AI',
      'Enterprise focus'
    ],
    alternatives: ['HeyGen', 'Elai.io', 'Colossyan', 'Runway ML', 'DeepBrain AI'],
    averageRating: 4.7,
    reviewCount: 45,
    lastUpdated: 'Today'
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    category: 'AI Assistants',
    description: "Microsoft's everyday AI companion powered by GPT-4o, integrated across Windows, Edge, Bing, Office 365, and more.",
    features: [
      'GPT-4o model',
      'Real-time web access (Bing)',
      'Image generation (Designer)',
      'Microsoft 365 integration',
      'Voice conversations',
      'Custom GPTs (Copilot Studio)',
      'Mobile & desktop apps'
    ],
    link: 'https://copilot.microsoft.com',
    pricing: 'Free basic, Pro $20/user/month, Enterprise custom',
    useCases: [
      'Productivity (Word, Excel, PPT)',
      'Web research & summaries',
      'Code assistance (VS Code)',
      'Email & meeting summaries',
      'Image generation',
      'Customer support'
    ],
    pros: [
      'Deep Microsoft integration',
      'Free tier powerful',
      'Multi-modal (text/image)',
      'Enterprise security',
      'Real-time information',
      'Mobile apps'
    ],
    cons: [
      'Microsoft ecosystem lock-in',
      'Privacy concerns',
      'Pro features paywalled',
      'Slower than dedicated assistants',
      'Limited customization'
    ],
    alternatives: ['ChatGPT', 'Gemini', 'Claude', 'Perplexity'],
    averageRating: 4.4,
    reviewCount: 78,
    lastUpdated: 'Today'
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    category: 'AI Assistants',
    description: 'Create and chat with customizable AI characters, from historical figures to fictional personalities and custom creations.',
    features: [
      'Millions of user-created characters',
      'Role-playing conversations',
      'Character customization',
      'Group chats',
      'Voice calls',
      'Mobile apps',
      'Community sharing'
    ],
    link: 'https://character.ai',
    pricing: 'Free with limits, c.ai+ $9.99/month',
    useCases: [
      'Role-playing & storytelling',
      'Language practice',
      'Character development',
      'Entertainment',
      'Creative writing inspiration',
      'Mental health companion'
    ],
    pros: [
      'Huge character variety',
      'Highly engaging conversations',
      'Free tier generous',
      'Community-driven',
      'Voice interaction',
      'Fun & creative'
    ],
    cons: [
      'Content moderation issues',
      'Memory limitations',
      'Paywall for priority access',
      'Can be repetitive',
      'Privacy concerns with user data'
    ],
    alternatives: ['ChatGPT', 'Poe.com', 'Janitor AI', 'Crushon AI'],
    averageRating: 4.5,
    reviewCount: 189,
    lastUpdated: 'Today'
  },
  {
    id: 'poe',
    name: 'Poe',
    category: 'AI Assistants',
    description: 'Access multiple AI models in one place - GPT-4o, Claude 3.5, Gemini, Llama, and more with custom bots.',
    features: [
      '20+ AI models',
      'Custom bot creation',
      'Fast model switching',
      'Unlimited free messages (slower)',
      'Prompt library',
      'Mobile app',
      'API access'
    ],
    link: 'https://poe.com',
    pricing: 'Free unlimited (slow), $20/month for priority',
    useCases: [
      'Model comparison',
      'Custom AI assistants',
      'Rapid testing',
      'Multi-model workflows',
      'Research across models'
    ],
    pros: [
      'All models in one place',
      'Custom bots easy',
      'Free tier usable',
      'Fast switching',
      'Great for testing',
      'Regular new models'
    ],
    cons: [
      'Free tier slower',
      'Message limits on premium models',
      'Less polished UI',
      'Dependency on Quora',
      'Bot quality varies'
    ],
    alternatives: ['ChatGPT', 'Perplexity', 'Groq', 'You.com'],
    averageRating: 4.6,
    reviewCount: 134,
    lastUpdated: 'Today'
  },
  {
    id: 'cursor',
    name: 'Cursor AI',
    category: 'Writing',
    description: 'AI-powered code editor built on VS Code with GPT-4 integration for faster coding.',
    features: ['AI autocomplete', 'Chat sidebar', 'Codebase Q&A', 'Inline edits', 'Composer mode'],
    link: 'https://cursor.com',
    pricing: 'Free tier, Pro $20/month',
    useCases: ['Full-stack development', 'Code refactoring', 'Debugging', 'Learning to code', 'Rapid prototyping'],
    pros: ['VS Code familiar', 'Context-aware AI', 'Multi-file edits', 'Fast performance'],
    cons: ['Learning curve', 'Pro features paywalled', 'Desktop only', 'Privacy concerns'],
    alternatives: ['GitHub Copilot', 'Codeium', 'Tabnine', 'Zed + AI'],
    averageRating: 4.7,
    reviewCount: 56,
    lastUpdated: 'Today'
  },
  {
    id: 'codeium',
    name: 'Codeium',
    category: 'Writing',
    description: 'Free AI code completion and chat tool. Copilot alternative for 70+ languages across IDEs.',
    features: ['Fast autocomplete', 'AI chat', '70+ languages', 'Team collaboration', 'Self-hosted option'],
    link: 'https://codeium.com',
    pricing: 'Free for individuals, Enterprise custom',
    useCases: ['Code acceleration', 'Team development', 'Learning coding', 'Legacy codebases', 'Cross-platform'],
    pros: ['Completely free', 'Fast & lightweight', 'Privacy-focused', 'Multi-IDE support', 'No limits'],
    cons: ['Less context-aware', 'Basic chat features', 'Enterprise features paid', 'Newer product'],
    alternatives: ['GitHub Copilot', 'Tabnine', 'Cursor', 'Amazon CodeWhisperer'],
    averageRating: 4.6,
    reviewCount: 89,
    lastUpdated: 'Today'
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    category: 'Writing',
    description: "Replit's AI coding assistant for generating, debugging, and explaining code directly in the browser IDE.",
    features: ['Code generation', 'Debugging assistance', 'Code explanation', 'Live collaboration', '70+ languages'],
    link: 'https://replit.com/ai',
    pricing: 'Free tier, Pro $20/month',
    useCases: ['Rapid prototyping', 'Learning to code', 'Pair programming', 'Team collaboration', 'Online tutorials'],
    pros: ['Browser-based', 'Real-time collaboration', 'Great for learning', 'Fast setup', 'Integrated environment'],
    cons: ['Replit ecosystem', 'Limited free usage', 'Performance on large projects', 'Internet required'],
    alternatives: ['GitHub Copilot', 'Cursor', 'Codeium', 'Replit Agent'],
    averageRating: 4.5,
    reviewCount: 67,
    lastUpdated: 'Today'
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    category: 'Automation',
    description: 'Advanced AI image generation platform popular for game assets, characters, and concept art.',
    features: ['Game asset generation', 'Character design', 'Style training', 'Image editing', 'Prompt enhancement'],
    link: 'https://leonardo.ai',
    pricing: 'Free tier, Pro $12/month',
    useCases: ['Game development', 'Concept art', 'NFT creation', 'Marketing visuals', 'Product mockups'],
    pros: ['Game asset optimized', 'High quality', 'Fast generation', 'Style consistency', 'Community models'],
    cons: ['Credit system', 'Learning curve', 'Queue times', 'Watermarks on free'],
    alternatives: ['Midjourney', 'Stable Diffusion', 'DALL-E 3', 'Runway ML'],
    averageRating: 4.6,
    reviewCount: 123,
    lastUpdated: 'Today'
  }
];

export const categories = [
  'AI Assistants',
  'Writing',
  'Productivity',
  'Automation',
  'Research',
  'Video AI'
];

