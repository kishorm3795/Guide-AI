# AI Tools Guide

A modern, responsive website showcasing AI & productivity tools. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Tool Directory**: Browse AI tools by category
- **Detailed Reviews**: Comprehensive information about each tool
- **Responsive Design**: Mobile-friendly interface
- **Fast Performance**: Optimized with Next.js
- **SEO Friendly**: Server-side rendering for better search visibility

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-tools-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Project Structure

```
ai-tools-website/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── tools/
│   │   ├── page.tsx         # Tools directory
│   │   └── [slug]/
│   │       └── page.tsx     # Individual tool pages
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css
├── lib/
│   └── tools.ts             # Tool data and types
└── public/                  # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Adding New Tools

To add a new tool, update the `tools` array in `lib/tools.ts`:

```typescript
{
  id: 'tool-slug',
  name: 'Tool Name',
  category: 'Category',
  description: 'Brief description',
  features: ['Feature 1', 'Feature 2'],
  link: 'https://tool-website.com',
  pricing: 'Pricing info',
  useCases: ['Use case 1', 'Use case 2'],
  pros: ['Pro 1', 'Pro 2'],
  cons: ['Con 1', 'Con 2'],
  alternatives: ['Alternative 1', 'Alternative 2']
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out` (for static export) or `.next` (for SSR)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
