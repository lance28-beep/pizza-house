'use client';

import { useParams } from 'next/navigation';
import { storeLocations } from '@/data/storeLocations';
import Link from 'next/link';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

const markerIcon = new Icon({
  iconUrl: '/pizzas/pizzaHouseLogo.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
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

export default function StorePage() {
  const params = useParams();
  const store = storeLocations.find(s => s.id === (params?.id as string));

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Store Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The store you're looking for doesn't exist.</p>
          <Link
            href="/locations"
            className="inline-flex items-center px-6 py-3 bg-[#E32726] text-white rounded-lg font-medium hover:bg-[#FF6B6B] transition-colors"
          >
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#E32726] py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {store.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {store.address}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Store Image and Info */}
          <motion.div variants={fadeIn} className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={store.image || '/pizzas/store-default.jpg'}
                  alt={store.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{store.name}</h2>
                  <span className="px-3 py-1 bg-[#E32726]/10 text-[#E32726] rounded-full text-sm font-medium">
                    {store.area}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{store.address}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {store.businessHours}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {store.contactNumber}
                  </div>
                  {store.email && (
                    <div className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 mr-2 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {store.email}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {store.services.map(service => (
                    <span 
                      key={service}
                      className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {service === 'Delivery' && (
                        <svg className="mr-1.5 h-4 w-4 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {service === 'Dine-in' && (
                        <svg className="mr-1.5 h-4 w-4 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                        </svg>
                      )}
                      {service === 'Takeout' && (
                        <svg className="mr-1.5 h-4 w-4 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      )}
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={`tel:${store.contactNumber}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#E32726] text-white rounded-lg font-medium hover:bg-[#FF6B6B] transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <button
                    onClick={() => {
                      window.open(`https://www.google.com/maps?q=${store.coordinates[0]},${store.coordinates[1]}`, '_blank');
                    }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-[#E32726] border-2 border-[#E32726] rounded-lg font-medium hover:bg-[#E32726] hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <Link
              href="/locations"
              className="inline-flex items-center px-6 py-3 bg-white text-[#E32726] border-2 border-[#E32726] rounded-lg font-medium hover:bg-[#E32726] hover:text-white transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Locations
            </Link>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden h-[600px]">
            <MapContainer
              center={store.coordinates}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={store.coordinates}
                icon={markerIcon}
              />
            </MapContainer>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 