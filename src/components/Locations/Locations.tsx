'use client';

import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import { storeLocations, areaColors, StoreLocation } from '@/data/storeLocations';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './Locations.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Dynamically import the map component with no SSR
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="md:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-[600px] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#E32726] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  )
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Locations() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [hoveredStore, setHoveredStore] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState<LatLngTuple>([13.6234, 123.1945]);
  const [mapZoom, setMapZoom] = useState(10);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const filteredLocations = selectedArea
    ? storeLocations.filter(store => store.area === selectedArea)
    : storeLocations;

  const areas = ['NAGA', 'PARTIDO', 'RINCONADA', 'ALBAY'];

  const handleStoreClick = (store: StoreLocation) => {
    setMapCenter(store.coordinates);
    setMapZoom(15);
    setSelectedStore(store.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E32726] via-[#E32726] to-yellow-400 relative overflow-hidden">
      {/* Wave Pattern */}
      <div className="absolute w-full h-32 bottom-[65%] left-0 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-yellow-400/20"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Area Filter Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center py-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            variants={fadeIn}
            onClick={() => {
              setSelectedArea(null);
              setMapCenter([13.6234, 123.1945]);
              setMapZoom(10);
              setSelectedStore(null);
            }}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm
              ${!selectedArea 
                ? 'bg-[#E32726]/90 text-white shadow-lg ring-1 ring-white/20' 
                : 'bg-white/90 text-gray-700 hover:bg-white/95 shadow-lg'}`}
          >
            All Areas
          </motion.button>
          {areas.map(area => (
            <motion.button
              key={area}
              variants={fadeIn}
              onClick={() => {
                setSelectedArea(area);
                const areaStores = storeLocations.filter(store => store.area === area);
                if (areaStores.length > 0) {
                  setMapCenter(areaStores[0].coordinates);
                  setMapZoom(12);
                }
                setSelectedStore(null);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg
                ${selectedArea === area
                  ? 'text-white ring-1 ring-white/20'
                  : 'bg-white/90 text-gray-700 hover:bg-white/95'}`}
              style={{
                backgroundColor: selectedArea === area ? `${areaColors[area as keyof typeof areaColors]}ee` : undefined
              }}
            >
              {area}
            </motion.button>
          ))}
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div 
          className="flex justify-end mb-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                ${viewMode === 'map' 
                  ? 'bg-[#E32726] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Map View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                ${viewMode === 'list' 
                  ? 'bg-[#E32726] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'}`}
            >
              List View
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === 'map' ? (
            <motion.div
              key="map"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {/* Store List */}
              <div className="md:col-span-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 h-[600px] overflow-y-auto">
                <div className="flex items-center justify-between mb-6 sticky top-0 bg-white/95 backdrop-blur-sm p-2 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Store Directory</h3>
                  <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">{filteredLocations.length} locations</span>
                </div>
                <div className="space-y-4">
                  {filteredLocations.map(store => (
                    <motion.div 
                      key={store.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`group p-4 rounded-xl transition-all duration-300 cursor-pointer border
                        ${selectedStore === store.id ? 'bg-red-50 border-red-200' : 'hover:bg-gray-50 border-transparent hover:border-gray-200'}
                        ${hoveredStore === store.id ? 'bg-gray-50' : ''}`}
                      onMouseEnter={() => setHoveredStore(store.id)}
                      onMouseLeave={() => setHoveredStore(null)}
                      onClick={() => handleStoreClick(store)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate group-hover:text-[#E32726]">
                            {store.name}
                          </h4>
                          <p className="mt-1 text-sm text-gray-500 truncate">{store.address}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {store.services.map(service => (
                              <span 
                                key={service}
                                className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                              >
                                {service === 'Delivery' && (
                                  <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                )}
                                {service === 'Dine-in' && (
                                  <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                  </svg>
                                )}
                                {service === 'Takeout' && (
                                  <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                  </svg>
                                )}
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Link 
                            href={`/stores/${store.id}`}
                            className="p-1.5 rounded-full text-gray-400 hover:text-[#E32726] hover:bg-red-50 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <button 
                            className="p-1.5 rounded-full text-gray-400 hover:text-[#E32726] hover:bg-red-50 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`https://www.google.com/maps?q=${store.coordinates[0]},${store.coordinates[1]}`, '_blank');
                            }}
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </button>
                          <a
                            href={`tel:${store.contactNumber}`}
                            className="p-1.5 rounded-full text-gray-400 hover:text-[#E32726] hover:bg-red-50 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500 flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {store.businessHours}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="md:col-span-2 rounded-2xl shadow-2xl overflow-hidden">
                <Map
                  mapCenter={mapCenter}
                  mapZoom={mapZoom}
                  filteredLocations={filteredLocations}
                  areaColors={areaColors}
                  setSelectedStore={setSelectedStore}
                  setMapCenter={setMapCenter}
                  setMapZoom={setMapZoom}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {filteredLocations.map(store => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={store.image || '/pizzas/store-default.jpg'}
                      alt={store.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">{store.name}</h3>
                      <p className="text-white/90 text-sm">{store.address}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {store.services.map(service => (
                        <span 
                          key={service}
                          className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                        >
                          {service === 'Delivery' && (
                            <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                          {service === 'Dine-in' && (
                            <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                            </svg>
                          )}
                          {service === 'Takeout' && (
                            <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          )}
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 mr-2 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {store.businessHours}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 mr-2 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {store.contactNumber}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/stores/${store.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#E32726] text-white rounded-lg font-medium hover:bg-[#FF6B6B] transition-colors"
                      >
                        View Details
                      </Link>
                      <a
                        href={`tel:${store.contactNumber}`}
                        className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#E32726] border-2 border-[#E32726] rounded-lg font-medium hover:bg-[#E32726] hover:text-white transition-colors"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Franchise CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Own a Pizza Haus?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing family of franchisees and bring the best pizza experience to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/franchise"
              className="inline-flex items-center px-8 py-4 bg-[#E32726] text-white rounded-xl font-semibold hover:bg-[#FF6B6B] transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:09163482693"
                className="inline-flex items-center px-8 py-4 bg-white text-[#E32726] border-2 border-[#E32726] rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}