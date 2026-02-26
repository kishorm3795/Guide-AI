import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tools } from '../../../lib/tools';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find(t => t.id === slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/tools"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Back to Tools
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
              <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded">
                {tool.category}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6">{tool.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-2">
                {tool.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h2>
            <p className="text-gray-700">{tool.pricing}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Pros</h2>
              <ul className="space-y-2">
                {tool.pros.map((pro, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-3">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cons</h2>
              <ul className="space-y-2">
                {tool.cons.map((con, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-red-600 mr-3">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Alternatives</h2>
            <div className="flex flex-wrap gap-2">
              {tool.alternatives.map((alt, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded">
                  {alt}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Visit {tool.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}