'use client';

import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLngTuple } from 'leaflet';
import { StoreLocation } from '@/data/storeLocations';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import styles from './Locations.module.css';

// Custom hook to update map view
function ChangeMapView({ coordinates, zoom }: { coordinates: LatLngTuple; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coordinates, zoom);
  }, [coordinates, zoom, map]);
  return null;
}

interface LocationMapProps {
  mapCenter: LatLngTuple;
  mapZoom: number;
  filteredLocations: StoreLocation[];
  areaColors: Record<string, string>;
  setSelectedStore: (id: string | null) => void;
  setMapCenter: (coordinates: LatLngTuple) => void;
  setMapZoom: (zoom: number) => void;
}

export default function LocationMap({
  mapCenter,
  mapZoom,
  filteredLocations,
  areaColors,
  setSelectedStore,
  setMapCenter,
  setMapZoom
}: LocationMapProps) {
  // Create marker icons on the client side
  const areaMarkerIcons = useMemo(() => {
    const createMarkerIcon = (color: string) => new Icon({
      iconUrl: '/pizzas/pizzaHouseLogo.png',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -35],
      className: styles[`marker-icon-${color.toLowerCase()}`],
    });

    return {
      NAGA: createMarkerIcon('naga'),
      PARTIDO: createMarkerIcon('partido'),
      RINCONADA: createMarkerIcon('rinconada'),
      ALBAY: createMarkerIcon('albay'),
    };
  }, []);

  return (
    <div className="md:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-[600px]">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coordinates={mapCenter} zoom={mapZoom} />
        {filteredLocations.map(store => (
          <Marker
            key={store.id}
            position={store.coordinates}
            icon={areaMarkerIcons[store.area]}
            eventHandlers={{
              click: () => {
                setSelectedStore(store.id);
                setMapCenter(store.coordinates);
                setMapZoom(15);
              }
            }}
          >
            <Popup>
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-2">{store.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{store.address}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {store.businessHours}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {store.contactNumber}
                  </p>
                </div>
                <Link 
                  href={`/stores/${store.id}`}
                  className="mt-3 inline-block px-4 py-2 bg-[#E32726] text-white rounded-lg text-sm font-medium hover:bg-[#FF6B6B] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 