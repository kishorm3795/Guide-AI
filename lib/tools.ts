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
    id: 'openai-gpt4',
    name: 'OpenAI GPT-4',
    category: 'Natural Language Processing',
    description: 'A state-of-the-art language model by OpenAI for advanced content generation, language understanding, and more.',
    features: ['Natural language understanding', 'Content generation', 'Translation', 'Summarization'],
    link: 'https://openai.com/gpt-4',
    pricing: 'Subscription-based, API available',
    useCases: ['Chatbots', 'Content writing', 'Education', 'Customer support'],
    pros: ['Highly accurate', 'Industry leader', 'Flexible API'],
    cons: ['API can be expensive at scale', 'Occasional hallucinations'],
    alternatives: ['Claude', 'Gemini', 'Llama 2'],
    averageRating: 4.9,
    reviewCount: 5000,
    lastUpdated: '2026-04-13'
  },
  {
    id: 'bard',
    name: 'Google Bard',
    category: 'Chatbots',
    description: 'Conversational AI from Google designed to augment productivity and information discovery.',
    features: ['Conversational search', 'Integrated with Google products', 'Context memory'],
    link: 'https://bard.google.com/',
    pricing: 'Free',
    useCases: ['Research', 'Personal assistant', 'Learning'],
    pros: ['Fast', 'Good at citations', 'Google ecosystem'],
    cons: ['Not available in all countries', 'Occasional delays'],
    alternatives: ['ChatGPT', 'Claude'],
    averageRating: 4.6,
    reviewCount: 2300,
    lastUpdated: '2026-04-13'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'Generative Art',
    description: 'An AI tool for creating stunning images and art.',
    features: ['Image Generation', 'Style Transfer'],
    link: 'https://www.midjourney.com/',
    pricing: 'Subscription-based',
    useCases: ['Art Creation', 'Design'],
    pros: ['High-quality outputs', 'Creative possibilities'],
    cons: ['Costly for professional use'],
    alternatives: ['DALL-E', 'Stable Diffusion'],
    averageRating: 4.7,
    reviewCount: 150,
    lastUpdated: '2026-04-13'
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'Conversational AI',
    description: 'A conversational agent developed by Anthropic.',
    features: ['Natural Language Understanding', 'Conversational Abilities'],
    link: 'https://www.anthropic.com/claude',
    pricing: 'Pay-per-interaction',
    useCases: ['Customer Support', 'Virtual Assistants'],
    pros: ['Human-like interactions', 'Robust safety features'],
    cons: ['Limited availability'],
    alternatives: ['ChatGPT', 'Google Bard'],
    averageRating: 4.6,
    reviewCount: 200,
    lastUpdated: '2026-04-13'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'AI Assistant',
    description: 'An AI assistant designed to streamline tasks and productivity.',
    features: ['Task Automation', 'Scheduling'],
    link: 'https://www.gemini.com/',
    pricing: 'Freemium',
    useCases: ['Personal Assistance', 'Team Collaboration'],
    pros: ['Versatile functionality', 'User-friendly interface'],
    cons: ['Limited features in free version'],
    alternatives: ['Microsoft 365 Copilot', 'Notion AI'],
    averageRating: 4.4,
    reviewCount: 80,
    lastUpdated: '2026-04-13'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'Question Answering',
    description: 'A powerful tool for obtaining answers to complex questions.',
    features: ['Real-time Q&A', 'Source citations'],
    link: 'https://www.perplexity.ai/',
    pricing: 'Free',
    useCases: ['Research', 'Education'],
    pros: ['Accurate answers', 'Resource citations'],
    cons: ['Not applicable for all subjects'],
    alternatives: ['Wolfram Alpha', 'Google Search'],
    averageRating: 4.5,
    reviewCount: 120,
    lastUpdated: '2026-04-13'
  },
  {
    id: 'replit_ghostwriter',
    name: 'Replit Ghostwriter',
    category: 'Coding Assistance',
    description: 'An AI-powered code generator for developers.',
    features: ['Code Suggestions', 'Debugging Assistance'],
    link: 'https://replit.com/ghostwriter',
    pricing: 'Subscription-based',
    useCases: ['Software Development', 'Learning to Code'],
    pros: ['Enhances productivity', 'Easy integration with Replit'],
    cons: ['Limited to Replit platform'],
    alternatives: ['GitHub Copilot', 'Tabnine'],
    averageRating: 4.3,
    reviewCount: 90,
    lastUpdated: '2026-04-13'
  },
  // ... Add more preserved original and new global AI tool objects here ...
];

export const categories = [
  'Natural Language Processing',
  'Chatbots',
  'Creative AI',
  'Business AI',
  'NLP Frameworks',
  'Machine Learning',
  'Cloud AI',
  'Analytics',
];