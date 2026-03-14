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
    }
];
const categories = [
    'AI Assistants',
    'Writing',
    'Productivity',
    'Automation',
    'Research'
];
}),
"[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx <module evaluation>", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx", "default");
}),
"[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$AIRecommendation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$AIRecommendation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$AIRecommendation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/My Projects/Guide-AI/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/lib/tools.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$AIRecommendation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/AIRecommendation.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata() {
    return {
        title: 'AI & Productivity Tools You Should Know - Best AI Tools Directory',
        description: 'Discover 50+ curated AI tools for writing, productivity, automation, research, and more. Expert reviews, comparisons, and personalized recommendations.',
        openGraph: {
            title: 'AI & Productivity Tools You Should Know',
            description: 'The ultimate directory of AI tools to boost your productivity. ChatGPT, Notion AI, GitHub Copilot, Midjourney, and more.',
            images: '/og-image-home.jpg',
            url: 'https://yourdomain.com'
        },
        twitter: {
            title: 'AI & Productivity Tools You Should Know',
            description: 'Discover the best AI tools for productivity and creativity.',
            images: '/og-image-home.jpg',
            card: 'summary_large_image'
        }
    };
}
function Home() {
    const featuredTools = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tools"].slice(0, 3); // Show first 3 tools
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold text-gray-900 mb-6",
                            children: "AI & Productivity Tools You Should Know"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto",
                            children: "Discover the best AI tools for writing, productivity, automation, research, and more. Boost your efficiency and creativity with cutting-edge technology."
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/tools",
                            className: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",
                            children: "View All Tools"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gradient-to-b from-white to-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$AIRecommendation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        tools: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tools"]
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-center text-gray-900 mb-12",
                            children: "Explore Categories"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-gray-900",
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                }, category, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-center text-gray-900 mb-12",
                            children: "Featured Tools"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: featuredTools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-2",
                                            children: tool.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: tool.description
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded",
                                                    children: tool.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/tools/${tool.id}`,
                                                    className: "text-blue-600 hover:text-blue-800 font-medium",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, tool.id, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-8",
                            children: "Why AI Tools Matter"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 max-w-3xl mx-auto mb-8",
                            children: "AI tools are revolutionizing how we work, learn, and create. They automate repetitive tasks, enhance creativity, and provide insights that were previously impossible. Whether you're a student, professional, or entrepreneur, there's an AI tool that can help you achieve more."
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: "inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors",
                            children: "Learn More About Us"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-blue-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-white mb-4",
                            children: "Stay Updated"
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-100 mb-8",
                            children: "Get the latest AI tool recommendations and productivity tips delivered to your inbox."
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-md mx-auto flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Enter your email",
                                    className: "flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-300"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-blue-800 text-white px-6 py-3 rounded-r-lg hover:bg-blue-900 transition-colors",
                                    children: "Subscribe"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "AI Tools Directory",
                        "url": "https://yourdomain.com",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://yourdomain.com/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })
                }
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/My Projects/Guide-AI/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4c1477b6._.js.map