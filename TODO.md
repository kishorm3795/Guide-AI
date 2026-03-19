# Guide-AI TODOs

**✅ COMPLETE FEATURES:**
- Search & Filter on /tools
- Reviews/Ratings (StarRating)
- Favorites system
- Comparison page
- Newsletter signup
- **Replit Ghostwriter** (added to lib/tools.ts, dynamic pages live)
- Cursor AI + Codeium tools added
- **Ideogram** (text-in-images specialist, Automation cat)
- **Stable Diffusion** (open-source dev favorite, Automation cat)
- **Luma AI** (realistic scenes/video, Video AI cat)
- **HeyGen** (talking avatar videos, Video AI cat)
- **Suno AI** (text-to-song generation, Audio AI cat)
- **Udio** (high-quality music gen, Audio AI cat)
- **Otter.ai** (meeting transcription, Productivity cat)
- **Tome AI** (auto presentation builder, Productivity cat)

**📱 Current Task: Mobile Header Implementation**

**Analysis:**
- Current Header: Basic placeholder `<button>Menu</button>` on mobile (`md:hidden`)
- Desktop nav already has all links (Home, Tools, Favorites w/badge, Compare, About, Contact)
- Needs: Functional hamburger menu with slide-in panel on mobile

**Plan:**
1. **Convert Header to 'use client'** - Add `useState` for mobile menu state
2. **Mobile Menu Button** - Hamburger icon (3 lines SVG) with hover/active states
3. **Mobile Menu Overlay** - Full-height slide-in from right (300px wide, backdrop blur)
4. **Menu Content** - Vertical nav links + favorites badge, close button (X)
5. **Animations** - Slide in/out (Tailwind transitions), backdrop fade
6. **Responsive** - Works on all screen sizes < md (768px)
7. **Accessibility** - ARIA labels, keyboard nav, focus trap

**File to Edit:** `app/components/Header.tsx`

**Follow-up:**
- Test on mobile browser dev tools
- Update TODO.md after completion
- No new dependencies needed

**Next Pending:** Leonardo AI, SEO improvements, Social sharing

