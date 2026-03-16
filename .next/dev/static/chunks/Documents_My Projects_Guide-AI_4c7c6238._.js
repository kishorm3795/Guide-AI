(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const StarRating = ({ rating, size = 'md', readonly = false, onRate, className = '' })=>{
    const starSize = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6';
    const stars = Array.from({
        length: 5
    }, (_, i)=>i + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1 ${className}`,
        children: [
            stars.map((star)=>{
                const isFilled = star <= rating;
                const isHalf = !isFilled && star - 0.5 <= rating;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `
              ${starSize}
              ${isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              hover:text-yellow-400 transition-colors cursor-pointer
              ${readonly ? 'cursor-default hover:text-gray-300' : ''}
            `,
                    onClick: !readonly ? ()=>onRate?.(star) : undefined,
                    disabled: readonly,
                    "aria-label": `Star ${star}`,
                    children: isHalf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 44",
                        fill: "currentColor",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            }, void 0, false, {
                                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
                                lineNumber: 37,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 22l3.09-6.26L22 14.73l-5-4.87L17.18 5.5L12 9.23l-5.18-3.73L2 14.73l6.91 1.01L12 22z",
                                opacity: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
                                lineNumber: 38,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
                        lineNumber: 36,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, star, false, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            !readonly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-2 text-sm text-gray-500",
                children: "Click to rate"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StarRating;
const __TURBOPACK__default__export__ = StarRating;
var _c;
__turbopack_context__.k.register(_c, "StarRating");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/My Projects/Guide-AI/lib/tools.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    }
];
const categories = [
    'AI Assistants',
    'Writing',
    'Productivity',
    'Automation',
    'Research',
    'Video AI'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-client] (ecmascript)");
// import FavoritesButton from '../components/FavoritesButton';
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/lib/tools.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ToolsPage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filteredTools, setFilteredTools] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tools"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToolsPage.useEffect": ()=>{
            let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tools"];
            // Filter by category
            if (selectedCategory) {
                filtered = filtered.filter({
                    "ToolsPage.useEffect": (tool)=>tool.category === selectedCategory
                }["ToolsPage.useEffect"]);
            }
            // Filter by search query (name and description)
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase().trim();
                filtered = filtered.filter({
                    "ToolsPage.useEffect": (tool)=>tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query)
                }["ToolsPage.useEffect"]);
            }
            setFilteredTools(filtered);
        }
    }["ToolsPage.useEffect"], [
        searchQuery,
        selectedCategory
    ]);
    const resetFilters = ()=>{
        setSearchQuery('');
        setSelectedCategory(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "AI Tools Directory"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 mb-8",
                            children: "Explore our curated collection of AI tools across different categories."
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-sm mb-8 max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "search",
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "🔍 Search tools"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "search",
                                                    type: "text",
                                                    placeholder: "Search by name or description...",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "category",
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Filter by category"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "category",
                                                    value: selectedCategory || '',
                                                    onChange: (e)=>setSelectedCategory(e.target.value || null),
                                                    className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "All Categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: category,
                                                                children: category
                                                            }, category, false, {
                                                                fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                "Found ",
                                                filteredTools.length,
                                                " ",
                                                filteredTools.length === 1 ? 'tool' : 'tools'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        (searchQuery || selectedCategory) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetFilters,
                                            className: "text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1",
                                            children: "Clear filters"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                filteredTools.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: filteredTools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-gray-900",
                                            children: tool.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded",
                                            children: tool.category
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4",
                                    children: tool.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    rating: tool.averageRating,
                                                    size: "sm",
                                                    readonly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 font-medium",
                                                    children: [
                                                        tool.averageRating.toFixed(1),
                                                        " (",
                                                        tool.reviewCount,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0",
                                                    children: "❤️"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-500 flex-1 text-center",
                                                    children: tool.pricing
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: tool.link,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-blue-600 hover:text-blue-800 font-medium",
                                                            children: "Visit Site"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/tools/${tool.id}`,
                                                            className: "text-gray-600 hover:text-gray-800 font-medium",
                                                            children: "Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                const shareText = `Check out ${tool.name}: ${tool.description.substring(0, 100)}... ${window.location.origin}/tools/${tool.id}`;
                                                                navigator.clipboard.writeText(shareText);
                                                            },
                                                            className: "text-gray-600 hover:text-gray-800 font-medium text-xs",
                                                            title: "Quick share",
                                                            children: "📤"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, tool.id, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🔍"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold text-gray-900 mb-2",
                            children: "No tools found"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-8",
                            children: "Try adjusting your search or filter criteria."
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetFilters,
                            className: "bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors",
                            children: "Clear all filters"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/tools/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ToolsPage, "6kKOdPlrnvVck0TDC8Wabczk7Go=");
_c = ToolsPage;
var _c;
__turbopack_context__.k.register(_c, "ToolsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_My%20Projects_Guide-AI_4c7c6238._.js.map