'use client';

import { useState } from 'react';
import { Instagram, Play } from 'lucide-react';
import Image from 'next/image';

interface InstagramVideoCardProps {
  videoUrl: string;
  thumbnailUrl?: string;
  caption?: string;
}

export default function InstagramVideoCard({ 
  videoUrl, 
  thumbnailUrl,
  caption 
}: InstagramVideoCardProps) {
  const [showEmbed, setShowEmbed] = useState(false);

  // Extract Instagram post ID from URL
  const getPostId = (url: string) => {
    const match = url.match(/\/(?:p|reel)\/([^\/]+)/);
    return match ? match[1] : null;
  };

  const postId = getPostId(videoUrl);
  const embedUrl = `https://www.instagram.com/p/${postId}/embed/`;

  if (!showEmbed) {
    return (
      <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
        <div className="aspect-square relative">
          {thumbnailUrl ? (
            <div className="relative w-full h-full">
              <Image 
                src={thumbnailUrl} 
                alt={caption || 'Instagram post'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <Instagram size={64} className="text-white opacity-50" />
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => setShowEmbed(true)}
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              <Play size={20} fill="currentColor" />
              Ver en Instagram
            </button>
          </div>

          {/* Instagram icon badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full shadow-lg">
            <Instagram size={20} className="text-white" />
          </div>
        </div>

        {caption && (
          <div className="p-4">
            <p className="text-sm text-gray-600 line-clamp-2">{caption}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="aspect-square">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          allowTransparency
          loading="lazy"
        />
      </div>
      <div className="p-4 flex justify-between items-center bg-gray-50">
        <a 
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
        >
          <Instagram size={16} />
          Ver en Instagram
        </a>
        <button
          onClick={() => setShowEmbed(false)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Ocultar
        </button>
      </div>
    </div>
  );
}
