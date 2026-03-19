module.exports = [
"[project]/Documents/My Projects/Guide-AI/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/My Projects/Guide-AI/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/My Projects/Guide-AI/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/My Projects/Guide-AI/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/My Projects/Guide-AI/lib/tools.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "tools",
    ()=>tools
]);
const tools = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        category: 'AI Assistants',
        description: 'A powerful AI chatbot for conversation, writing, and problem-solving.',
        features: [
            'Natural language processing',
            'Code generation',
            'Creative writing',
            'Research assistance'
        ],
        link: 'https://chat.openai.com',
        pricing: 'Free tier available, premium plans start at $20/month',
        useCases: [
            'Writing assistance',
            'Coding help',
            'Brainstorming ideas',
            'Learning new topics'
        ],
        pros: [
            'Highly versatile',
            'Easy to use',
            'Constantly improving'
        ],
        cons: [
            'Can be inaccurate',
            'Limited context window',
            'Requires internet'
        ],
        alternatives: [
            'Claude',
            'Gemini',
            'Perplexity'
        ],
        averageRating: 4.6,
        reviewCount: 127,
        lastUpdated: '3 days ago'
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        category: 'Productivity',
        description: 'AI-powered writing and automation features within Notion workspaces.',
        features: [
            'Smart writing',
            'Summarization',
            'Translation',
            'Task automation'
        ],
        link: 'https://notion.so',
        pricing: 'Included in Notion plans, starts at $8/month',
        useCases: [
            'Note-taking',
            'Project management',
            'Knowledge base',
            'Team collaboration'
        ],
        pros: [
            'Integrated with Notion',
            'Multiple AI features',
            'Customizable'
        ],
        cons: [
            'Requires Notion subscription',
            'Limited free tier',
            'Learning curve'
        ],
        alternatives: [
            'Evernote',
            'Roam Research',
            'Obsidian'
        ],
        averageRating: 4.3,
        reviewCount: 89,
        lastUpdated: '1 week ago'
    },
    {
        id: 'otter-ai',
        name: 'Otter.ai',
        category: 'Productivity',
        description: 'AI meeting assistant that records, transcribes, and summarizes meetings, interviews, and lectures in real-time.',
        features: [
            'Real-time transcription',
            'Speaker identification',
            'Automatic summaries',
            'Action item extraction',
            'Searchable notes',
            'Zoom/Teams/Google Meet integration',
            'Collaboration sharing'
        ],
        link: 'https://otter.ai',
        pricing: 'Free (600 min/mo), Pro $10/user/month, Business $20/user/month',
        useCases: [
            'Meeting notes',
            'Interviews & podcasts',
            'Lecture capture',
            'Team collaboration',
            'Customer calls',
            'Conference recording'
        ],
        pros: [
            'Accurate transcription',
            'Real-time collaboration',
            'Smart summaries',
            'Multi-platform integration',
            'Searchable archive',
            'Mobile apps'
        ],
        cons: [
            'Minute limits free tier',
            'Privacy concerns',
            'Speaker ID accuracy',
            'Internet required',
            'Accent challenges'
        ],
        alternatives: [
            'Fireflies.ai',
            'Gong',
            'Zoom AI Companion',
            'Fathom',
            'Tactiq'
        ],
        averageRating: 4.5,
        reviewCount: 245,
        lastUpdated: 'Today'
    },
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        category: 'Writing',
        description: 'AI-powered code completion and generation tool for developers.',
        features: [
            'Code suggestions',
            'Function completion',
            'Documentation',
            'Test generation'
        ],
        link: 'https://github.com/features/copilot',
        pricing: '$10/month or $100/year',
        useCases: [
            'Software development',
            'Code review',
            'Learning programming',
            'Rapid prototyping'
        ],
        pros: [
            'Speeds up coding',
            'Learns from context',
            'Supports multiple languages'
        ],
        cons: [
            'Subscription cost',
            'Can suggest incorrect code',
            'Privacy concerns'
        ],
        alternatives: [
            'Tabnine',
            'Kite',
            'CodeWhisperer'
        ],
        averageRating: 4.7,
        reviewCount: 234,
        lastUpdated: '2 days ago'
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        category: 'Automation',
        description: 'AI image generation tool for creating stunning visuals from text prompts.',
        features: [
            'Text-to-image',
            'Style variations',
            'High resolution',
            'Discord integration'
        ],
        link: 'https://midjourney.com',
        pricing: 'Free trial, plans from $10/month',
        useCases: [
            'Graphic design',
            'Marketing materials',
            'Concept art',
            'Social media content'
        ],
        pros: [
            'High-quality images',
            'Creative freedom',
            'Fast generation'
        ],
        cons: [
            'Requires Discord',
            'Usage limits',
            'Style consistency issues'
        ],
        alternatives: [
            'DALL-E',
            'Stable Diffusion',
            'Canva Magic Studio'
        ],
        averageRating: 4.4,
        reviewCount: 156,
        lastUpdated: '4 days ago'
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        category: 'Research',
        description: 'AI-powered search engine that provides sourced answers to questions.',
        features: [
            'Source citations',
            'Follow-up questions',
            'Pro search',
            'API access'
        ],
        link: 'https://perplexity.ai',
        pricing: 'Free basic, Pro at $20/month',
        useCases: [
            'Research',
            'Fact-checking',
            'Learning',
            'Professional inquiries'
        ],
        pros: [
            'Cites sources',
            'Conversational',
            'No ads'
        ],
        cons: [
            'Limited free searches',
            'Newer technology',
            'May hallucinate'
        ],
        alternatives: [
            'ChatGPT',
            'Google Bard',
            'You.com'
        ],
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
        alternatives: [
            'ChatGPT',
            'Claude',
            'Grok'
        ],
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
        alternatives: [
            'ChatGPT',
            'Gemini',
            'Grok'
        ],
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
        alternatives: [
            'Sora',
            'Pika Labs',
            'Luma AI',
            'Kling AI'
        ],
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
        alternatives: [
            'HeyGen',
            'Elai.io',
            'Colossyan',
            'Runway ML',
            'DeepBrain AI'
        ],
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
        alternatives: [
            'ChatGPT',
            'Gemini',
            'Claude',
            'Perplexity'
        ],
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
        alternatives: [
            'ChatGPT',
            'Poe.com',
            'Janitor AI',
            'Crushon AI'
        ],
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
        alternatives: [
            'ChatGPT',
            'Perplexity',
            'Groq',
            'You.com'
        ],
        averageRating: 4.6,
        reviewCount: 134,
        lastUpdated: 'Today'
    },
    {
        id: 'cursor',
        name: 'Cursor AI',
        category: 'Writing',
        description: 'AI-powered code editor built on VS Code with GPT-4 integration for faster coding.',
        features: [
            'AI autocomplete',
            'Chat sidebar',
            'Codebase Q&A',
            'Inline edits',
            'Composer mode'
        ],
        link: 'https://cursor.com',
        pricing: 'Free tier, Pro $20/month',
        useCases: [
            'Full-stack development',
            'Code refactoring',
            'Debugging',
            'Learning to code',
            'Rapid prototyping'
        ],
        pros: [
            'VS Code familiar',
            'Context-aware AI',
            'Multi-file edits',
            'Fast performance'
        ],
        cons: [
            'Learning curve',
            'Pro features paywalled',
            'Desktop only',
            'Privacy concerns'
        ],
        alternatives: [
            'GitHub Copilot',
            'Codeium',
            'Tabnine',
            'Zed + AI'
        ],
        averageRating: 4.7,
        reviewCount: 56,
        lastUpdated: 'Today'
    },
    {
        id: 'codeium',
        name: 'Codeium',
        category: 'Writing',
        description: 'Free AI code completion and chat tool. Copilot alternative for 70+ languages across IDEs.',
        features: [
            'Fast autocomplete',
            'AI chat',
            '70+ languages',
            'Team collaboration',
            'Self-hosted option'
        ],
        link: 'https://codeium.com',
        pricing: 'Free for individuals, Enterprise custom',
        useCases: [
            'Code acceleration',
            'Team development',
            'Learning coding',
            'Legacy codebases',
            'Cross-platform'
        ],
        pros: [
            'Completely free',
            'Fast & lightweight',
            'Privacy-focused',
            'Multi-IDE support',
            'No limits'
        ],
        cons: [
            'Less context-aware',
            'Basic chat features',
            'Enterprise features paid',
            'Newer product'
        ],
        alternatives: [
            'GitHub Copilot',
            'Tabnine',
            'Cursor',
            'Amazon CodeWhisperer'
        ],
        averageRating: 4.6,
        reviewCount: 89,
        lastUpdated: 'Today'
    },
    {
        id: 'replit-ghostwriter',
        name: 'Replit Ghostwriter',
        category: 'Writing',
        description: "Replit's AI coding assistant for generating, debugging, and explaining code directly in the browser IDE.",
        features: [
            'Code generation',
            'Debugging assistance',
            'Code explanation',
            'Live collaboration',
            '70+ languages'
        ],
        link: 'https://replit.com/ai',
        pricing: 'Free tier, Pro $20/month',
        useCases: [
            'Rapid prototyping',
            'Learning to code',
            'Pair programming',
            'Team collaboration',
            'Online tutorials'
        ],
        pros: [
            'Browser-based',
            'Real-time collaboration',
            'Great for learning',
            'Fast setup',
            'Integrated environment'
        ],
        cons: [
            'Replit ecosystem',
            'Limited free usage',
            'Performance on large projects',
            'Internet required'
        ],
        alternatives: [
            'GitHub Copilot',
            'Cursor',
            'Codeium',
            'Replit Agent'
        ],
        averageRating: 4.5,
        reviewCount: 67,
        lastUpdated: 'Today'
    },
    {
        id: 'leonardo-ai',
        name: 'Leonardo AI',
        category: 'Automation',
        description: 'Advanced AI image generation platform popular for game assets, characters, and concept art.',
        features: [
            'Game asset generation',
            'Character design',
            'Style training',
            'Image editing',
            'Prompt enhancement'
        ],
        link: 'https://leonardo.ai',
        pricing: 'Free tier, Pro $12/month',
        useCases: [
            'Game development',
            'Concept art',
            'NFT creation',
            'Marketing visuals',
            'Product mockups'
        ],
        pros: [
            'Game asset optimized',
            'High quality',
            'Fast generation',
            'Style consistency',
            'Community models'
        ],
        cons: [
            'Credit system',
            'Learning curve',
            'Queue times',
            'Watermarks on free'
        ],
        alternatives: [
            'Midjourney',
            'Stable Diffusion',
            'DALL-E 3',
            'Runway ML'
        ],
        averageRating: 4.6,
        reviewCount: 123,
        lastUpdated: 'Today'
    },
    {
        id: 'ideogram',
        name: 'Ideogram',
        category: 'Automation',
        description: 'AI image generation tool excelling at rendering legible text within images, logos, posters, and typography-focused designs.',
        features: [
            'Superior text rendering',
            'Logo & poster generation',
            'Magic Prompt enhancement',
            'Remix & inpainting',
            'High-res upscaling',
            'Style references'
        ],
        link: 'https://ideogram.ai',
        pricing: 'Free tier (40 slow images/day), Basic $7/month, Plus $20/month',
        useCases: [
            'Typography & logos',
            'Social media graphics',
            'Marketing materials',
            'Meme generation',
            'Branding mockups',
            'Poster design'
        ],
        pros: [
            'Best text-in-images quality',
            'Fast generation',
            'Generous free tier',
            'Intuitive web interface',
            'Regular model updates'
        ],
        cons: [
            'Credit-based system',
            'Limited styles vs competitors',
            'Queue on free tier',
            'No API (yet)'
        ],
        alternatives: [
            'Midjourney',
            'Leonardo AI',
            'DALL-E 3',
            'FLUX.1',
            'Stable Diffusion'
        ],
        averageRating: 4.7,
        reviewCount: 98,
        lastUpdated: 'Today'
    },
    {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        category: 'Automation',
        description: 'Open-source text-to-image AI model widely used by developers for local image generation and fine-tuning.',
        features: [
            'Open source & self-hostable',
            'Local GPU inference',
            'LoRA fine-tuning',
            'ControlNet extensions',
            'Automatic1111 WebUI',
            'Hugging Face integration'
        ],
        link: 'https://stability.ai/stable-diffusion',
        pricing: 'Free (open source), hosted APIs from $0.002/image',
        useCases: [
            'Local AI image gen',
            'Model fine-tuning',
            'Research & experimentation',
            'Custom datasets',
            'Production pipelines',
            'Privacy-sensitive apps'
        ],
        pros: [
            'Completely free local use',
            'Developer-friendly',
            'Massive ecosystem',
            'Hardware optimized',
            'Community extensions',
            'No usage limits'
        ],
        cons: [
            'GPU required for speed',
            'Setup complexity',
            'Quality varies by model',
            'No official easy UI',
            'Rapidly evolving'
        ],
        alternatives: [
            'Midjourney',
            'DALL-E 3',
            'Leonardo AI',
            'FLUX.1',
            'Ideogram'
        ],
        averageRating: 4.8,
        reviewCount: 456,
        lastUpdated: 'Today'
    },
    {
        id: 'luma-ai',
        name: 'Luma AI',
        category: 'Video AI',
        description: 'AI platform generating hyper-realistic 3D scenes, video from images/text, and lifelike animations.',
        features: [
            'Image-to-video Dream Machine',
            'Text-to-video',
            '3D scene generation',
            'Flythroughs & orbits',
            'Realistic motion',
            'High-res outputs'
        ],
        link: 'https://lumalabs.ai',
        pricing: 'Free tier limited, Pro $29/month, Enterprise custom',
        useCases: [
            'Product videos',
            'Architectural viz',
            'E-commerce visuals',
            'Social media reels',
            'Film pre-vis',
            'Marketing demos'
        ],
        pros: [
            'Hyper-realistic motion',
            'Fast generation',
            'Intuitive interface',
            'Great for 3D from 2D',
            'Consistent characters',
            'Professional quality'
        ],
        cons: [
            'Waitlists for heavy use',
            'Credit system',
            'Limited customization',
            'Pro features expensive',
            'Early stage product'
        ],
        alternatives: [
            'Runway ML',
            'Synthesia',
            'Kling AI',
            'Pika Labs',
            'Luma Dream Machine'
        ],
        averageRating: 4.6,
        reviewCount: 134,
        lastUpdated: 'Today'
    },
    {
        id: 'heygen',
        name: 'HeyGen',
        category: 'Video AI',
        description: 'AI video platform for creating talking avatar videos from text scripts with 100+ languages and custom avatars.',
        features: [
            'Talking avatars',
            '100+ languages/voices',
            'Text-to-video',
            'Custom avatar creation',
            'Lip sync perfection',
            'API & templates',
            'Brand kits'
        ],
        link: 'https://www.heygen.com',
        pricing: 'Free tier, Creator $24/mo, Business $89/mo',
        useCases: [
            'Explainer videos',
            'Product demos',
            'Social media content',
            'Training videos',
            'Sales pitches',
            'Multilingual marketing'
        ],
        pros: [
            'Perfect lip sync',
            'Multi-language support',
            'Custom avatars',
            'Fast turnaround',
            'Professional templates',
            'Great API'
        ],
        cons: [
            'Subscription required',
            'Avatar limits on free',
            'Render queues',
            'Less creative flexibility',
            'Watermarks on free'
        ],
        alternatives: [
            'Synthesia',
            'Elai.io',
            'Colossyan',
            'DeepBrain',
            'Runway ML'
        ],
        averageRating: 4.7,
        reviewCount: 210,
        lastUpdated: 'Today'
    },
    {
        id: 'suno-ai',
        name: 'Suno AI',
        category: 'Audio AI',
        description: 'AI music generation platform creating full songs with vocals, lyrics, and instrumentation from text prompts.',
        features: [
            'Text-to-song generation',
            'Custom lyrics + style',
            'Full 2-minute songs',
            'Multiple genres',
            'Vocal generation',
            'Extend & remix',
            'Commercial rights'
        ],
        link: 'https://suno.ai',
        pricing: 'Free tier (50 credits/day), Pro $10/month, Premier $30/month',
        useCases: [
            'Content creators',
            'Social media music',
            'Podcasts & videos',
            'Demo tracks',
            'Personalized songs',
            'Background music'
        ],
        pros: [
            'Full songs from text',
            'High quality vocals',
            'Many genres/styles',
            'Fast generation',
            'Easy to use',
            'Commercial use OK'
        ],
        cons: [
            'Credit limits',
            'Repetition in long tracks',
            'Limited control',
            'Pro for unlimited',
            'Beta quality varies'
        ],
        alternatives: [
            'Udio',
            'MusicGen',
            'Suno v3',
            'AIVA',
            'Boomy'
        ],
        averageRating: 4.6,
        reviewCount: 289,
        lastUpdated: 'Today'
    },
    {
        id: 'udio',
        name: 'Udio',
        category: 'Audio AI',
        description: 'High-quality AI music generation creating professional tracks, songs, and beats from text prompts with superior audio fidelity.',
        features: [
            'Advanced audio quality',
            'Genre/style blending',
            'Custom lyrics/melody',
            'Vocal synthesis',
            'Song extension',
            'Stem separation',
            'Pro mastering'
        ],
        link: 'https://www.udio.com',
        pricing: 'Free tier limited, Pro $10/month, Pro+ $30/month',
        useCases: [
            'Music production',
            'Beatmaking',
            'Songwriting demos',
            'Video soundtracks',
            'Podcasts',
            'Live performances'
        ],
        pros: [
            'Superior sound quality',
            'Musical coherence',
            'Professional polish',
            'Fast generation',
            'Stem control',
            'Artist-friendly'
        ],
        cons: [
            'Credit system',
            'Queue times peak',
            'Limited free tier',
            'Learning prompt curve',
            'Beta vocals'
        ],
        alternatives: [
            'Suno AI',
            'MusicGen',
            'AIVA',
            'Soundraw',
            'Mubert'
        ],
        averageRating: 4.8,
        reviewCount: 367,
        lastUpdated: 'Today'
    }
];
const categories = [
    'AI Assistants',
    'Writing',
    'Productivity',
    'Automation',
    'Research',
    'Video AI',
    'Audio AI'
];
}),
"[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx <module evaluation>", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$ToolReviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$ToolReviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$ToolReviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx <module evaluation>", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx <module evaluation>", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$FavoritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$FavoritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$FavoritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx <module evaluation>", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$SocialShare$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$SocialShare$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$SocialShare$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/lib/tools.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$ToolReviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$FavoritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$SocialShare$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function ToolPage({ params }) {
    const { slug } = await params;
    const tool = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tools"].find((t)=>t.id === slug);
    if (!tool) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/tools",
                    className: "text-blue-600 hover:text-blue-800 mb-8 inline-block",
                    children: "← Back to Tools"
                }, void 0, false, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm p-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl font-bold text-gray-900",
                                                    children: tool.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded mt-2 inline-block",
                                                    children: tool.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    rating: tool.averageRating,
                                                    size: "md",
                                                    readonly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: [
                                                        tool.averageRating.toFixed(1),
                                                        " (",
                                                        tool.reviewCount,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-600",
                                    children: tool.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: tool.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        "Visit ",
                                        tool.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$FavoritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    tool: tool,
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-gray-900 mb-4",
                                            children: "Key Features"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: tool.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 21
                                                        }, this),
                                                        feature
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-gray-900 mb-4",
                                            children: "Use Cases"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: tool.useCases.map((useCase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 21
                                                        }, this),
                                                        useCase
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-3 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-gray-900 mb-4",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 text-lg",
                                            children: tool.pricing
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-gray-900 mb-4",
                                                        children: "Pros"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2",
                                                        children: tool.pros.map((pro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center text-gray-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-600 mr-3 flex-shrink-0",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    pro
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-gray-900 mb-4",
                                                        children: "Cons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2",
                                                        children: tool.cons.map((con, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center text-gray-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-600 mr-3 flex-shrink-0",
                                                                        children: "✗"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    con
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$SocialShare$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            toolId: tool.id,
                            toolName: tool.name
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-900 mb-4",
                                    children: "Alternatives"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: tool.alternatives.map((alt, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition-colors",
                                            children: alt
                                        }, index, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$ToolReviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    tool: tool
                }, void 0, false, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/tools/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eb57dbf7._.js.map