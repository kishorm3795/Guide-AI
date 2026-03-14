import type { ViewportOptions } from 'next';

export default function viewport(): ViewportOptions {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
      { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
    ],
    colorScheme: 'dark light',
  };
}
