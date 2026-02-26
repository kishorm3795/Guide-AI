import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            AI Tools Guide
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/tools" className="text-gray-700 hover:text-gray-900">Tools</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button - can add later */}
            <button className="text-gray-700">Menu</button>
          </div>
        </div>
      </div>
    </header>
  );
}