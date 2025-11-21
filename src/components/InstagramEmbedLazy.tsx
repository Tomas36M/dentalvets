'use client';

import { useEffect, useState } from 'react';

interface InstagramEmbedLazyProps {
  embedCode: string;
}

export default function InstagramEmbedLazy({ embedCode }: InstagramEmbedLazyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    const element = document.getElementById(`instagram-container-${embedCode.slice(0, 20)}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [embedCode, hasLoaded]);

  useEffect(() => {
    if (isVisible && typeof window !== 'undefined') {
      const instgrm = (window as { instgrm?: { Embeds: { process: () => void } } }).instgrm;
      if (instgrm) {
        instgrm.Embeds.process();
      }
    }
  }, [isVisible]);

  return (
    <div 
      id={`instagram-container-${embedCode.slice(0, 20)}`}
      className="instagram-embed-wrapper min-h-[400px] flex items-center justify-center"
    >
      {isVisible ? (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      ) : (
        <div className="animate-pulse bg-gray-200 w-full h-[400px] rounded-xl"></div>
      )}
    </div>
  );
}
