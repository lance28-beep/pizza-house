'use client';

import { useParams } from 'next/navigation';
import { storeLocations } from '@/data/storeLocations';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DeliveryPartners from '@/app/components/DeliveryPartners';
import StoreMap from '@/components/StoreMap';

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

// Store descriptions based on area
const getStoreDescription = (store: any) => {
  const descriptions: { [key: string]: string } = {
    'Naga City': `Experience the heart of Pizza Haus at our ${store.name}. Nestled in the vibrant ${store.area}, we bring you the perfect blend of traditional flavors and modern dining comfort. Our friendly staff is ready to serve you ${store.services.includes('Dine-in') ? 'in our cozy dining space' : ''} with our signature pizzas and more.`,
    'Camarines Sur': `Welcome to ${store.name}, your go-to destination for delicious pizzas in ${store.area}. We take pride in serving our community with fresh, quality ingredients and warm service. ${store.services.includes('Delivery') ? 'Enjoy our quick delivery service right to your doorstep!' : ''}`,
    'Albay': `Discover pizza perfection at ${store.name} in ${store.area}. Our commitment to quality and taste makes us a favorite among locals and visitors alike. ${store.services.includes('Takeout') ? 'Grab your favorite pizza on the go!' : ''}`,
    'default': `Visit us at ${store.name} and experience why we're ${store.area}'s favorite pizza destination. Our dedication to quality and service ensures every visit is memorable. ${store.services.join(', ')} available for your convenience.`
  };

  const areaKey = Object.keys(descriptions).find(key => store.area.includes(key)) || 'default';
  return descriptions[areaKey];
};

export default function StorePage() {
  const params = useParams();
  const currentStoreIndex = storeLocations.findIndex(s => s.id === (params?.id as string));
  const store = storeLocations[currentStoreIndex];
  const nextStore = storeLocations[(currentStoreIndex + 1) % storeLocations.length];

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
    <div className="min-h-screen bg-gray-50 relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E32726] to-[#FF6B6B] py-12 sm:py-16 mb-8 sm:mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              {store.name}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
              {store.address}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 sm:gap-8"
        >
          {/* Store Info and Map Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Store Image and Info */}
            <motion.div variants={fadeIn}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-48 sm:h-64 group">
                  <Image
                    src={getStoreImagePath(store.name)}
                    alt={store.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{store.name}</h2>
                    <span className="px-3 py-1 bg-[#E32726]/10 text-[#E32726] rounded-full text-sm font-medium">
                      {store.area}
                    </span>
                  </div>
                  
                  {/* Store Description */}
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                    {getStoreDescription(store)}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600 hover:text-[#E32726] transition-colors">
                      <svg className="h-5 w-5 mr-3 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm sm:text-base">{store.businessHours}</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-[#E32726] transition-colors">
                      <svg className="h-5 w-5 mr-3 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm sm:text-base">{store.contactNumber}</span>
                    </div>
                    {store.email && (
                      <div className="flex items-center text-gray-600 hover:text-[#E32726] transition-colors">
                        <svg className="h-5 w-5 mr-3 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm sm:text-base">{store.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {store.services.map(service => (
                      <span 
                        key={service}
                        className="inline-flex items-center px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100 hover:border-[#E32726]/20 hover:bg-[#E32726]/5 transition-colors"
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

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/menu"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-[#E32726] text-white rounded-lg font-medium hover:bg-[#FF6B6B] transition-colors shadow-sm hover:shadow-md"
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      View Menu
                    </Link>
                    <a
                      href={`tel:${store.contactNumber}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-white text-[#E32726] border-2 border-[#E32726] rounded-lg font-medium hover:bg-[#E32726] hover:text-white transition-colors"
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
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-white text-[#E32726] border-2 border-[#E32726] rounded-lg font-medium hover:bg-[#E32726] hover:text-white transition-colors"
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
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeIn} className="h-[400px] sm:h-[600px]">
              <StoreMap coordinates={store.coordinates} />
            </motion.div>
          </div>

          {/* Delivery Partners Section - Full Width */}
          {store.services.includes('Delivery') && (
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 sm:p-6 border border-gray-100 w-full"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Order Through Our Partners</h3>
              <DeliveryPartners />
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between w-full">
            <Link
              href="/locations"
              className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#E32726] border-2 border-[#E32726] rounded-lg font-medium hover:bg-[#E32726] hover:text-white transition-colors shadow-sm hover:shadow-md"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Locations
            </Link>

            <Link
              href={`/stores/${nextStore.id}`}
              className="group inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#E32726] text-white border-2 border-[#E32726] rounded-lg font-medium hover:bg-white hover:text-[#E32726] transition-colors shadow-sm hover:shadow-md"
            >
              <span className="mr-2">View Next Store</span>
              <svg 
                className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 