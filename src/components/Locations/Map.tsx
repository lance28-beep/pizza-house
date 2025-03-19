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

interface MapProps {
  mapCenter: LatLngTuple;
  mapZoom: number;
  filteredLocations: StoreLocation[];
  areaColors: Record<string, string>;
  setSelectedStore: (id: string | null) => void;
  setMapCenter: (coordinates: LatLngTuple) => void;
  setMapZoom: (zoom: number) => void;
}

export default function Map({
  mapCenter,
  mapZoom,
  filteredLocations,
  areaColors,
  setSelectedStore,
  setMapCenter,
  setMapZoom
}: MapProps) {
  // Create marker icons on the client side
  const areaMarkerIcons = useMemo(() => {
    const createMarkerIcon = (color: string) => new Icon({
      iconUrl: '/pizzas/pizzaHouseLogo.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
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
    <div className="md:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-[400px] sm:h-[600px]">
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
            <Popup closeButton={false} className="custom-popup">
              <div className="bg-white rounded-lg max-w-[280px] sm:max-w-[300px]">
                <div className="p-2.5 sm:p-3 space-y-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">{store.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{store.address}</p>
                  
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {store.businessHours}
                  </div>
                  
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {store.contactNumber}
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {store.services.map(service => (
                      <span 
                        key={service}
                        className="inline-flex items-center px-1.5 py-0.5 text-[10px] sm:text-xs bg-gray-100 text-gray-600 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex border-t">
                  <a
                    href={`tel:${store.contactNumber}`}
                    className="flex-1 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#E32726] text-white text-xs sm:text-sm font-medium hover:bg-[#FF6B6B] transition-colors text-center"
                  >
                    Call Now
                  </a>
                  <button
                    onClick={() => {
                      window.open(`https://www.google.com/maps?q=${store.coordinates[0]},${store.coordinates[1]}`, '_blank');
                    }}
                    className="flex-1 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white text-[#E32726] text-xs sm:text-sm font-medium border-l hover:bg-gray-50 transition-colors text-center"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 