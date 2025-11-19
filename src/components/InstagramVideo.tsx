'use client';

import InstagramEmbed from './InstagramEmbed';

interface InstagramVideoProps {
  embedCode: string;
  title?: string;
  description?: string;
}

const InstagramVideo = ({ embedCode, title, description }: InstagramVideoProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
      <div className="p-4 flex-grow flex items-center justify-center bg-gray-50">
        <InstagramEmbed embedCode={embedCode} />
      </div>
      {(title || description) && (
        <div className="p-4 border-t border-gray-100">
          {title && <h3 className="font-bold text-gray-900 mb-1">{title}</h3>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default InstagramVideo;
