'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-5 h-full">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 bg-gray-900 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20" />
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <p className="text-gray-400 mb-12">
                  We&apos;d love to hear from you! Whether you have questions about AI tools,
                  suggestions for new content, or just want to say hello.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-xl">📧</div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-400 text-sm">hello@aitoolsguide.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-xl">⏱️</div>
                    <div>
                      <h3 className="font-bold">Response Time</h3>
                      <p className="text-gray-400 text-sm">We typically respond within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-3 p-8">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 font-primary">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                          disabled={status === 'submitting'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                        className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        placeholder="Tell us what's on your mind..."
                        className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        disabled={status === 'submitting'}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-blue-600 text-white py-4 px-8 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}