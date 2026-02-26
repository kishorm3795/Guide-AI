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
    alternatives: ['Claude', 'Gemini', 'Perplexity']
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
    alternatives: ['Evernote', 'Roam Research', 'Obsidian']
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
    alternatives: ['Tabnine', 'Kite', 'CodeWhisperer']
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
    alternatives: ['DALL-E', 'Stable Diffusion', 'Canva Magic Studio']
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
    alternatives: ['ChatGPT', 'Google Bard', 'You.com']
  }
];

export const categories = [
  'AI Assistants',
  'Writing',
  'Productivity',
  'Automation',
  'Research'
];