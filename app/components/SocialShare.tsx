'use client';

import { useState } from 'react';
import { tools } from '../../lib/tools';

interface SocialShareProps {
  toolId: string;
  toolName: string;
}

export default function SocialShare({ toolId, toolName }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const toolUrl = `https://yourdomain.com/tools/${toolId}`;
  const shareText = `Check out ${toolName} on AI Tools Directory! 🚀`;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(toolUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(toolUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(toolUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + toolUrl)}`,
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(toolUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: `${toolName} - AI Tools Directory`,
        text: shareText,
        url: toolUrl,
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-lg border">
      <h4 className="font-semibold text-gray-900 mb-3 w-full">Share this tool:</h4>
      
      {/* Native Share */}
      <button
        onClick={share}
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 flex-1 min-w-[120px] justify-center"
        aria-label="Share this tool"
      >
        📱 Share
      </button>

      {/* Platform Buttons */}
      <a
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center"
        aria-label="Share on Twitter"
      >
        🐦 Twitter
      </a>

      <a
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center"
        aria-label="Share on Facebook"
      >
        📘 Facebook
      </a>

      <a
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-700 text-white text-sm rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center"
        aria-label="Share on LinkedIn"
      >
        💼 LinkedIn
      </a>

      <a
        href={shareUrls.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center"
        aria-label="Share on WhatsApp"
      >
        💬 WhatsApp
      </a>

      {/* Copy Link */}
      <button
        onClick={copyLink}
        className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 flex-1 min-w-[100px] justify-center"
        aria-label="Copy link"
      >
        {copied ? '✅ Copied!' : '🔗 Copy Link'}
      </button>
    </div>
  );
}
