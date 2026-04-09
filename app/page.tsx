import { Metadata } from 'next';
import Link from 'next/link';
import { tools, categories } from '../lib/tools';
import AIRecommendation from './components/AIRecommendation';
import Newsletter from './components/Newsletter';
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI & Productivity Tools You Should Know - Best AI Tools Directory',
    description: 'Discover 50+ curated AI tools for writing, productivity, automation, research, and more. Expert reviews, comparisons, and personalized recommendations.',
    openGraph: {
      title: 'AI & Productivity Tools You Should Know',
      description: 'The ultimate directory of AI tools to boost your productivity. ChatGPT, Notion AI, GitHub Copilot, Midjourney, and more.',
      images: '/og-image-home.jpg',
      url: 'https://yourdomain.com',
    },
    twitter: {
      title: 'AI & Productivity Tools You Should Know',
      description: 'Discover the best AI tools for productivity and creativity.',
      images: '/og-image-home.jpg',
      card: 'summary_large_image',
    },
  };
}

export default function Home() {
  const featuredTools = tools.slice(0, 3); // Show first 3 tools

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI & Productivity Tools You Should Know
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the best AI tools for writing, productivity, automation, research, and more.
            Boost your efficiency and creativity with cutting-edge technology.
          </p>
          <Link
            href="/tools"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Tools
          </Link>
        </div>
      </section>

      {/* AI Recommendation Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AIRecommendation tools={tools} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category} className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors">
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTools.map((tool) => (
              <div key={tool.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">{tool.category}</span>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Tools Matter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why AI Tools Matter</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            AI tools are revolutionizing how we work, learn, and create. They automate repetitive tasks,
            enhance creativity, and provide insights that were previously impossible. Whether you're a
            student, professional, or entrepreneur, there's an AI tool that can help you achieve more.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Newsletter />
      </section>


      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
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
        }}
      />
    </div>
  );
}
