'use client';

import { useEffect, useRef } from 'react';

// Extend Window interface for TypeScript
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  embedCode: string;
  className?: string;
}

const InstagramEmbed = ({ embedCode, className = '' }: InstagramEmbedProps) => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      // Process embeds if script is already loaded
      window.instgrm.Embeds.process();
    }
  }, [embedCode]);

  return (
    <div 
      ref={embedRef}
      className={`instagram-embed-container ${className}`}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default InstagramEmbed;
