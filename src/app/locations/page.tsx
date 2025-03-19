'use client';

import Locations from '@/components/Locations/Locations';
import { motion } from 'framer-motion';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#E32726]">
      {/* Hero Section */}
      <section className="bg-[#E32726] py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Find Your Nearest <span className="text-[#FFEB3B]">Pizza Haus</span>
            </h1>
            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Discover our locations across the Bicol Region and experience the best pizza in town
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Component */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-0 sm:px-4 lg:px-8"
      >
        <Locations />
      </motion.div>
    </div>
  );
} 