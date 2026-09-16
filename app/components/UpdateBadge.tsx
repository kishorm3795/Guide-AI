'use client';

import { useState, useEffect } from 'react';

interface UpdateBadgeProps {
  dateString: string;
}

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}m ago`;
}

export default function UpdateBadge({ dateString }: UpdateBadgeProps) {
  const [relativeTime, setRelativeTime] = useState(getRelativeTime(dateString));

  useEffect(() => {
    const interval = setInterval(() => {
      setRelativeTime(getRelativeTime(dateString));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [dateString]);

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      ✨ Updated {relativeTime}
    </span>
  );
}
