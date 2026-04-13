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
  // ... (expand: add 100+ tools covering all major AI categories, matching the structure above) ...
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
  // ... more categories
];