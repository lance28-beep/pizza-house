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

// Function to get store image path
const getStoreImagePath = (storeName: string): string => {
  // Remove "Pizza Haus" from the store name and trim
  const cleanStoreName = storeName.replace(/Pizza Haus/i, '').trim();
  
  // Create regex pattern for matching store name in various formats
  const storeRegex = new RegExp(cleanStoreName.replace(/\s+/g, '.*'), 'i');
  
  // List of available store images
  const storeImages = [
    'Angena.png', 'BMC.png', 'Baao.png', 'Bagumbayan.png', 'Bula.png',
    'CBD terminal.png', 'Calabanga.png', 'Centro.png', 'GOA 1.png', 'GOA 2.png',
    'Iriga.png', 'Magsaysay.png', 'Nabua.png', 'Ocampo.png', 'Panganiban.png',
    'Pili.png', 'Polangui.png', 'Robinsons Place Naga.png', 'SM Naga City.png',
    'San Felipe.png', 'Tabuco.png', 'Tigaon.png', 'Yashano.png'
  ];

  // Try to find matching image
  const matchingImage = storeImages.find(img => storeRegex.test(img));
  
  // Return matching image path or fallback to logo
  return matchingImage 
    ? `/Stores/${matchingImage}`
    : '/Stores/pizzaHouseLogo.png';
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
    <div className="min-h-screen bg-[#E32726] relative overflow-hidden">
      {/* Wave Pattern */}
      <div className="absolute w-full h-32 bottom-[65%] left-0 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-yellow-400/20"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8 relative">
        {/* Area Filter Buttons */}
        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-4 justify-center py-4 sm:py-8"
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
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105
              ${!selectedArea 
                ? 'bg-[#E32726] text-white shadow-lg ring-2 ring-[#E32726]/20' 
                : 'bg-white/90 text-gray-700 hover:bg-white shadow-lg hover:ring-2 hover:ring-[#E32726]/20'}`}
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
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105
                ${selectedArea === area
                  ? 'bg-[#E32726] text-white shadow-lg ring-2 ring-[#E32726]/20'
                  : 'bg-white/90 text-gray-700 hover:bg-white shadow-lg hover:ring-2 hover:ring-[#E32726]/20'}`}
            >
              {area}
            </motion.button>
          ))}
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div 
          className="flex justify-end mb-2 sm:mb-4 px-2 sm:px-0"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300
                ${viewMode === 'map' 
                  ? 'bg-[#E32726] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Map View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300
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
              className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-8 mb-4 sm:mb-8"
            >
              {/* Store List */}
              <div className="md:col-span-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-2 sm:p-4 h-[300px] sm:h-[600px] overflow-y-auto">
                <div className="flex items-center justify-between mb-2 sm:mb-4 sticky top-0 z-10 bg-white/95 backdrop-blur-sm p-2 rounded-lg">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Store Directory</h3>
                  <span className="text-[10px] sm:text-xs text-gray-500 px-1.5 sm:px-2 py-0.5 bg-gray-100 rounded-full">{filteredLocations.length} locations</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {filteredLocations.map(store => (
                    <motion.div 
                      key={store.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`group p-2 sm:p-3 rounded-xl transition-all duration-300 cursor-pointer border
                        ${selectedStore === store.id ? 'bg-red-50 border-red-200' : 'hover:bg-gray-50 border-transparent hover:border-gray-200'}
                        ${hoveredStore === store.id ? 'bg-gray-50' : ''}`}
                      onMouseEnter={() => setHoveredStore(store.id)}
                      onMouseLeave={() => setHoveredStore(null)}
                      onClick={() => handleStoreClick(store)}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <h4 className="text-xs sm:text-sm font-medium text-gray-900 truncate group-hover:text-[#E32726]">
                              {store.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              {store.services.map(service => (
                                <span 
                                  key={service}
                                  className="inline-flex items-center"
                                >
                                  {service === 'Delivery' && (
                                    <svg className="h-3 w-3 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                  )}
                                  {service === 'Dine-in' && (
                                    <svg className="h-3 w-3 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                    </svg>
                                  )}
                                  {service === 'Takeout' && (
                                    <svg className="h-3 w-3 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-[10px] sm:text-xs text-gray-500 truncate mt-0.5">{store.address}</p>
                          <div className="flex items-center mt-1 text-[10px] sm:text-xs text-gray-500">
                            <svg className="h-3 w-3 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {store.businessHours}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1">
                            <a
                              href={`tel:${store.contactNumber}`}
                              className="p-1.5 rounded-full text-[#E32726] hover:text-white hover:bg-[#E32726] transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </a>
                            <button 
                              className="p-1.5 rounded-full text-[#E32726] hover:text-white hover:bg-[#E32726] transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`https://www.google.com/maps?q=${store.coordinates[0]},${store.coordinates[1]}`, '_blank');
                              }}
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                          </div>
                          <Link
                            href={`/stores/${store.id}`}
                            className="px-2 py-1 text-[10px] sm:text-xs font-medium bg-[#E32726] text-white rounded-md hover:bg-[#FF6B6B] transition-colors whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Store
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="md:col-span-2 rounded-2xl shadow-2xl overflow-hidden h-[300px] sm:h-[600px]">
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 mb-4 sm:mb-8 px-2 sm:px-0"
            >
              {filteredLocations.map(store => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={getStoreImagePath(store.name)}
                      alt={store.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{store.name}</h3>
                      <p className="text-white/90 text-xs sm:text-sm">{store.address}</p>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {store.services.map(service => (
                        <span 
                          key={service}
                          className="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                        >
                          {service === 'Delivery' && (
                            <svg className="mr-1 h-2.5 sm:h-3 w-2.5 sm:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                          {service === 'Dine-in' && (
                            <svg className="mr-1 h-2.5 sm:h-3 w-2.5 sm:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                            </svg>
                          )}
                          {service === 'Takeout' && (
                            <svg className="mr-1 h-2.5 sm:h-3 w-2.5 sm:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          )}
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 mr-1.5 sm:mr-2 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {store.businessHours}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 mr-1.5 sm:mr-2 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {store.contactNumber}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${store.contactNumber}`}
                        className="flex items-center justify-center flex-1 px-3 py-2 text-[#E32726] hover:text-white hover:bg-[#E32726] text-xs sm:text-sm font-medium rounded-lg border border-[#E32726] transition-all duration-300"
                      >
                        <svg className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                      </a>
                      <button
                        onClick={() => {
                          window.open(`https://www.google.com/maps?q=${store.coordinates[0]},${store.coordinates[1]}`, '_blank');
                        }}
                        className="flex items-center justify-center flex-1 px-3 py-2 text-[#E32726] hover:text-white hover:bg-[#E32726] text-xs sm:text-sm font-medium rounded-lg border border-[#E32726] transition-all duration-300"
                      >
                        <svg className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Directions
                      </button>
                    </div>
                    <Link
                      href={`/stores/${store.id}`}
                      className="mt-2 flex items-center justify-center w-full px-3 py-2 bg-[#E32726] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#FF6B6B] transition-all duration-300"
                    >
                      <svg className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Store
                    </Link>
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
          className="bg-white rounded-2xl shadow-xl mx-2 sm:mx-0 mb-8 sm:mb-16 overflow-hidden"
        >
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E32726] to-[#FF6B6B] opacity-10"></div>
            
            {/* Content */}
            <div className="relative p-4 sm:p-8">
              <div className="text-center max-w-2xl mx-auto">
                <motion.h2 
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Want to Own a Pizza Haus?
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4 sm:px-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Join our growing family of franchisees and bring the best pizza experience to your community.
                </motion.p>
                
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href="/franchise"
                      className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#E32726] text-white rounded-xl font-semibold hover:bg-[#FF6B6B] transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span>Start Your Journey</span>
                      <svg 
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <a
                      href="tel:09163482693"
                      className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#E32726] border-2 border-[#E32726] rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span>Contact Us</span>
                      <svg 
                        className="h-5 w-5 ml-2 transform group-hover:rotate-12 transition-transform duration-300" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}