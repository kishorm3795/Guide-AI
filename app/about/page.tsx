export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About AI Tools Guide</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to AI Tools Guide, your comprehensive resource for discovering and learning about
              the best AI-powered tools for productivity, creativity, and efficiency.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              In today&apos;s fast-paced world, AI tools are transforming how we work, learn, and create.
              Our mission is to help individuals and businesses navigate this rapidly evolving landscape
              by providing honest, detailed reviews and comparisons of AI tools across various categories.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Cover</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>AI writing assistants and content generation tools</li>
              <li>Productivity and automation platforms</li>
              <li>Research and knowledge discovery tools</li>
              <li>Creative AI for design and media</li>
              <li>Development and coding assistants</li>
              <li>Business intelligence and analytics tools</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-6">
              We believe in transparency and accuracy. Each tool review includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Detailed feature breakdowns</li>
              <li>Real-world use cases</li>
              <li>Pricing information</li>
              <li>Pros and cons analysis</li>
              <li>Alternative options</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700">
              Have a suggestion for a tool to review? Found an error in our content?
              We&apos;d love to hear from you. Reach out through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}