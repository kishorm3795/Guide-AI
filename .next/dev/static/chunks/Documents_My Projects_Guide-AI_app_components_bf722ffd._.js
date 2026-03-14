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
"[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/app/components/StarRating.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ToolReviews({ tool }) {
    _s();
    const [reviews, setReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newRating, setNewRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [averageRating, setAverageRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tool.averageRating);
    const [reviewCount, setReviewCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tool.reviewCount);
    const STORAGE_KEY = `reviews-${tool.id}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToolReviews.useEffect": ()=>{
            // Load reviews from localStorage
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                setReviews(parsed);
                // Recalculate average
                if (parsed.length > 0) {
                    const avg = parsed.reduce({
                        "ToolReviews.useEffect": (sum, r)=>sum + r.rating
                    }["ToolReviews.useEffect"], 0) / parsed.length;
                    setAverageRating(avg);
                    setReviewCount(parsed.length);
                }
            }
        }
    }["ToolReviews.useEffect"], [
        tool.id
    ]);
    const handleSubmitReview = (e)=>{
        e.preventDefault();
        if (!newRating || !newComment.trim() || newComment.length < 10) return;
        setSubmitting(true);
        const review = {
            id: Date.now().toString(),
            rating: newRating,
            comment: newComment.trim(),
            date: new Date().toLocaleDateString()
        };
        const updatedReviews = [
            ...reviews,
            review
        ];
        setReviews(updatedReviews);
        // Recalculate average
        const avg = updatedReviews.reduce((sum, r)=>sum + r.rating, 0) / updatedReviews.length;
        setAverageRating(avg);
        setReviewCount(updatedReviews.length);
        // Save to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
        // Reset form
        setNewRating(0);
        setNewComment('');
        setSubmitting(false);
        // Scroll to top of reviews
        const reviewsSection = document.getElementById('reviews-section');
        reviewsSection?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "reviews-section",
        className: "mt-12 pt-8 border-t border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⭐"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    " User Reviews & Ratings"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8 border border-yellow-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rating: averageRating,
                                size: "lg",
                                readonly: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: averageRating.toFixed(1)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: [
                                        reviewCount,
                                        " ",
                                        reviewCount === 1 ? 'review' : 'reviews'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow-sm mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-4",
                        children: "Write a Review"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmitReview,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Your Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        rating: newRating,
                                        size: "lg",
                                        onRate: setNewRating
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Your Review (min 10 characters)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: newComment,
                                        onChange: (e)=>setNewComment(e.target.value),
                                        placeholder: "Share your experience with this tool...",
                                        className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-vertical min-h-[100px]",
                                        rows: 4,
                                        maxLength: 500
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: [
                                            newComment.length,
                                            "/500 characters"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !newRating || newComment.length < 10 || submitting,
                                className: "w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2",
                                children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin h-5 w-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        "Submitting..."
                                    ]
                                }, void 0, true) : 'Submit Review'
                            }, void 0, false, {
                                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            reviews.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900",
                        children: [
                            "Recent Reviews (",
                            reviews.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    reviews.slice(-5).reverse().map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 rounded-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$app$2f$components$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            rating: review.rating,
                                            size: "sm",
                                            readonly: true
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: review.date
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 leading-relaxed",
                                    children: review.comment
                                }, void 0, false, {
                                    fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, review.id, true, {
                            fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)),
                    reviews.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-500 text-sm",
                        children: [
                            "Showing 5 most recent of ",
                            reviews.length,
                            " total reviews"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 158,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 bg-white rounded-xl shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "⭐"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-2",
                        children: "Be the first to review"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "Share your experience to help others discover great tools."
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>document.getElementById('reviews-section')?.scrollIntoView({
                                behavior: 'smooth'
                            }),
                        className: "bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors",
                        children: "Write a review"
                    }, void 0, false, {
                        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/ToolReviews.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(ToolReviews, "I3XCJSAygOIqdG018v7ktxCIpV0=");
_c = ToolReviews;
var _c;
__turbopack_context__.k.register(_c, "ToolReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/My Projects/Guide-AI/app/components/FavoritesButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FavoritesButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function FavoritesButton({ tool, onToggle, className = '' }) {
    _s();
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FavoritesButton.useEffect": ()=>{
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
        }
    }["FavoritesButton.useEffect"], [
        tool.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FavoritesButton.useEffect": ()=>{
            try {
                localStorage.setItem('favorites', JSON.stringify(favorites));
            } catch (e) {
                console.error('Favorites save error:', e);
            }
        }
    }["FavoritesButton.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleFavorite,
        className: `
        p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500
        ${isFavorite ? 'bg-yellow-500 text-white shadow-lg hover:bg-yellow-600 hover:shadow-xl' : 'bg-gray-200 text-gray-600 hover:bg-yellow-400 hover:text-white'}
        ${className}
      `,
        "aria-label": isFavorite ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`,
        title: isFavorite ? `Remove from favorites (${favorites.length})` : 'Add to favorites',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: isFavorite ? 'currentColor' : 'none',
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_s(FavoritesButton, "EPkOzbmB7+x9F+cGKTM1ytUnTRw=");
_c = FavoritesButton;
var _c;
__turbopack_context__.k.register(_c, "FavoritesButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialShare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/My Projects/Guide-AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SocialShare({ toolId, toolName }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toolUrl = `https://yourdomain.com/tools/${toolId}`;
    const shareText = `Check out ${toolName} on AI Tools Directory! 🚀`;
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(toolUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(toolUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(toolUrl)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + toolUrl)}`
    };
    const copyLink = async ()=>{
        await navigator.clipboard.writeText(toolUrl);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const share = ()=>{
        if (navigator.share) {
            navigator.share({
                title: `${toolName} - AI Tools Directory`,
                text: shareText,
                url: toolUrl
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-3 p-4 bg-gray-50 rounded-lg border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-semibold text-gray-900 mb-3 w-full",
                children: "Share this tool:"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: share,
                className: "px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 flex-1 min-w-[120px] justify-center",
                "aria-label": "Share this tool",
                children: "📱 Share"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shareUrls.twitter,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center",
                "aria-label": "Share on Twitter",
                children: "🐦 Twitter"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shareUrls.facebook,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-4 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center",
                "aria-label": "Share on Facebook",
                children: "📘 Facebook"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shareUrls.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-4 py-2 bg-blue-700 text-white text-sm rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center",
                "aria-label": "Share on LinkedIn",
                children: "💼 LinkedIn"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shareUrls.whatsapp,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center",
                "aria-label": "Share on WhatsApp",
                children: "💬 WhatsApp"
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$My__Projects$2f$Guide$2d$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: copyLink,
                className: "px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center",
                "aria-label": "Copy link",
                children: copied ? '✅ Copied!' : '🔗 Copy Link'
            }, void 0, false, {
                fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/My Projects/Guide-AI/app/components/SocialShare.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(SocialShare, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = SocialShare;
var _c;
__turbopack_context__.k.register(_c, "SocialShare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_My%20Projects_Guide-AI_app_components_bf722ffd._.js.map