'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Successfully subscribed! You\'ll now receive notifications about new features and updates.');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 bg-blue-600 rounded-3xl overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -u-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-64 h-64 bg-blue-700 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest AI tool recommendations, new feature announcements, and advanced productivity tips delivered to your inbox.
        </p>
        
        {status === 'success' ? (
          <div className="max-w-md mx-auto bg-blue-500/30 backdrop-blur-sm border border-blue-400 p-6 rounded-2xl animate-in zoom-in duration-300">
            <div className="text-4xl mb-3">🎉</div>
            <p className="text-white font-medium">{message}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm text-blue-100 hover:text-white underline underline-offset-4"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-blue-300 bg-white/95 backdrop-blur-sm shadow-inner"
              disabled={status === 'submitting'}
            />
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="bg-blue-800 text-white px-8 py-3 rounded-xl hover:bg-blue-900 transition-all font-semibold shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
