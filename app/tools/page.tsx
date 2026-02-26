import Link from 'next/link';
import { tools } from '../../lib/tools';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Directory</h1>
          <p className="text-xl text-gray-600">
            Explore our curated collection of AI tools across different categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{tool.name}</h2>
                <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {tool.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{tool.pricing}</span>
                <div className="space-x-2">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Site
                  </a>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}