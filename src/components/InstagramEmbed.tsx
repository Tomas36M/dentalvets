'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Load 100px before visible
      }
    );

    if (embedRef.current) {
      observer.observe(embedRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Load Instagram embed script only when visible
    const loadScript = () => {
      if (window.instgrm) {
        // Use requestAnimationFrame to avoid forced reflow
        requestAnimationFrame(() => {
          window.instgrm?.Embeds.process();
        });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        requestAnimationFrame(() => {
          window.instgrm?.Embeds.process();
        });
      };
      document.body.appendChild(script);
    };

    // Delay script loading to avoid blocking initial render
    const timer = setTimeout(loadScript, 100);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div 
      ref={embedRef}
      className={`instagram-embed-container ${className}`}
      style={{ minHeight: isVisible ? undefined : '400px' }}
    >
      {isVisible ? (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      ) : (
        <div className="animate-pulse bg-gray-200 w-full h-[400px] rounded-xl" />
      )}
    </div>
  );
};

export default InstagramEmbed;
