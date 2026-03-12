module.exports = [
"[project]/Documents/My Projects/Guide-AI/lib/tools.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        reviewCount: 127
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
        reviewCount: 89
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
        reviewCount: 234
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
        reviewCount: 156
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
        reviewCount: 67
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
"[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FavoritesButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function FavoritesButton({ tool, onToggle, className = '' }) {
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem('favorites');
            if (saved) {
                const parsed = JSON.parse(saved);
                setFavorites(parsed);
                setIsFavorite(parsed.includes(tool.id));
            }
        } catch (e) {
            console.error('Favorites load error:', e);
        }
    }, [
        tool.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (e) {
            console.error('Favorites save error:', e);
        }
    }, [
        favorites
    ]);
    const toggleFavorite = ()=>{
        const newFavorites = isFavorite ? favorites.filter((id)=>id !== tool.id) : [
            ...favorites,
            tool.id
        ];
        setFavorites(newFavorites);
        setIsFavorite(!isFavorite);
        onToggle?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleFavorite,
        className: `
        p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500
        ${isFavorite ? 'bg-yellow-500 text-white shadow-lg hover:bg-yellow-600 hover:shadow-xl' : 'bg-gray-200 text-gray-600 hover:bg-yellow-400 hover:text-white'}
        ${className}
      `,
        "aria-label": isFavorite ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`,
        title: isFavorite ? `Remove from favorites (${favorites.length})` : 'Add to favorites',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: isFavorite ? 'currentColor' : 'none',
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: isFavorite ? 0 : 2,
                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FavoritesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/lib/tools.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$FavoritesButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function FavoritesPage() {
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [favoriteTools, setFavoriteTools] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem('favorites');
            if (saved) {
                const ids = JSON.parse(saved);
                setFavorites(ids);
                const favTools = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].filter((tool)=>ids.includes(tool.id));
                setFavoriteTools(favTools);
            }
        } catch (e) {
            console.error('Favorites load error:', e);
        }
    }, []);
    const updateFavorites = (toolId)=>{
        try {
            const newFavorites = favorites.filter((id)=>id !== toolId);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setFavorites(newFavorites);
            const newFavTools = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$lib$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].filter((tool)=>newFavorites.includes(tool.id));
            setFavoriteTools(newFavTools);
        } catch (e) {
            console.error('Favorites update error:', e);
        }
    };
    if (favorites.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-20 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-7xl mb-6",
                        children: "💖"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-4",
                        children: "No favorites yet"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 mb-8",
                        children: "Discover tools you love and add them to your favorites collection."
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tools",
                        className: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",
                        children: "Browse Tools"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: [
                                "💖 My Favorites (",
                                favorites.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600",
                            children: "Your saved AI tools. Click the heart to remove from favorites."
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: favoriteTools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-gray-900 flex-1 pr-4",
                                            children: tool.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$FavoritesButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            tool: tool,
                                            onToggle: ()=>updateFavorites(tool.id),
                                            className: "flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4 line-clamp-2",
                                    children: tool.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500",
                                            children: tool.pricing
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: tool.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-blue-600 hover:text-blue-800 font-medium",
                                                    children: "Visit →"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/tools/${tool.id}`,
                                                    className: "text-gray-600 hover:text-gray-800 font-medium",
                                                    children: "Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, tool.id, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/favorites/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Documents_My%20Projects_Guide-AI_803b4d8e._.js.map