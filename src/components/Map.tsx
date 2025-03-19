'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface MapProps {
  coordinates: [number, number];
}

export default function Map({ coordinates }: MapProps) {
  const [map, setMap] = useState<any>(null);

  const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
  );

  const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
  );

  const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then(L => {
        const icon = new L.Icon({
          iconUrl: '/pizzas/pizzaHouseLogo.png',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -35],
        });
        setMap({ L, icon });
      });
    }
  }, []);

  if (!map) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full">
      <MapContainer
        center={coordinates}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={coordinates}
          icon={map.icon}
        />
      </MapContainer>
    </div>
  );
} 