'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface StoreMapProps {
  coordinates: [number, number];
}

export default function StoreMap({ coordinates }: StoreMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const MapComponent = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading map...</div>
      </div>
    )
  });

  if (!isClient) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading map...</div>
      </div>
    );
  }

  return <MapComponent coordinates={coordinates} />;
} 