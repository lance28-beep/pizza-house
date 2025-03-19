"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Fiesta decorative elements with improved positioning
const fiestaElements = [
  { shape: 'banderitas', x: 2, y: 5, width: 80, rotate: 0, delay: 0 },
  { shape: 'banderitas', x: 75, y: 15, width: 60, rotate: 0, delay: 0.2 },
  { shape: 'wave', x: 5, y: 35, width: 40, rotate: -5, delay: 0.8 },
  { shape: 'wave', x: 65, y: 55, width: 40, rotate: 5, delay: 1 },
  { shape: 'banderitas', x: 10, y: 80, width: 70, rotate: 0, delay: 0.4 },
  { shape: 'banderitas', x: 80, y: 70, width: 55, rotate: 0, delay: 0.6 }
];

// Pizza flavor tags with optimized positioning
const pizzaFlavors = [
  { text: 'Masarap na Masarap!', x: 5, y: 20, rotate: -5, delay: 0.3, color: '#E32726' },
  { text: 'Sulit na Sulit!', x: 85, y: 15, rotate: 8, delay: 0.5, color: '#2B8A3E' },
  { text: 'Gawang Pinoy!', x: 70, y: 85, rotate: -5, delay: 0.7, color: '#E32726' },
  { text: 'Pang-Pamilya!', x: 15, y: 70, rotate: 5, delay: 0.9, color: '#2B8A3E' }
];

// Animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export default function Hero() {
  return (
    <section className="relative bg-[#FFD700] overflow-hidden min-h-[calc(100vh-4rem)] sm:min-h-screen">
      {/* Enhanced Background with Sunburst Effect */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at center, #FFD700 0%, #FFC700 100%)`,
        backgroundSize: '100% 100%'
      }}>
        <motion.div 
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.1) 0deg 10deg, transparent 10deg 20deg)`,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Optimized Fiesta Decorative Elements - Hidden on mobile */}
      {fiestaElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block transform-gpu"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            zIndex: 1
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: element.delay, duration: 0.5 }}
        >
          {element.shape === 'banderitas' && (
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 sm:w-8 h-4 sm:h-6 mx-0.5 transform rotate-45 transition-transform hover:rotate-0 duration-300"
                  style={{
                    backgroundColor: ['#E32726', '#2B8A3E', '#FFEB3B', '#1E88E5', '#FFA726'][i % 5],
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              ))}
            </div>
          )}
          {element.shape === 'wave' && (
            <div 
              className="h-1 bg-white/50 transform-gpu transition-all duration-300 hover:bg-white/70"
              style={{ width: `${element.width}px`, transform: `rotate(${element.rotate}deg)` }}
            />
          )}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Text Content */}
          <motion.div 
            className="lg:w-5/12 text-center lg:text-left mb-6 sm:mb-8 lg:mb-0 space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#E32726] text-white rounded-full text-base sm:text-lg font-bold shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              #1 Pizza sa Bicol Region
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
              <motion.span 
                className="block text-[#E32726] drop-shadow-sm"
                variants={itemVariants}
              >
                Masarap na
              </motion.span>
              <motion.span 
                className="block text-[#2B8A3E] drop-shadow-sm"
                variants={itemVariants}
              >
                Abot-Kaya
              </motion.span>
              <motion.span 
                className="block text-[#E32726] text-3xl sm:text-4xl md:text-5xl mt-2"
                variants={itemVariants}
              >
                Premium Pizza
              </motion.span>
            </h1>

            <motion.p 
              className="text-lg sm:text-xl text-[#2B8A3E] font-bold"
              variants={itemVariants}
            >
              Siguradong Mapapasaya ang Buong Pamilya!
              <span className="block text-[#E32726] text-xl sm:text-2xl font-extrabold mt-2">
                Barato Na! Masiram Pa!
              </span>
              <span className="block text-[#E32726] text-2xl sm:text-3xl font-black mt-2 sm:mt-3 italic">
                Siguradong Babalik-balikan!
              </span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12"
              variants={itemVariants}
            >
              <div className="flex flex-row items-center gap-4 sm:gap-6">
                <Link 
                  href="#delivery-partners" 
                  className="group bg-[#E32726] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-bold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border-2 border-white transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Order Now!
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </Link>
                <Link 
                  href="/franchise" 
                  className="group bg-[#2B8A3E] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-bold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border-2 border-white transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Start a Franchise
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </motion.svg>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="flex justify-center lg:justify-start gap-4 sm:gap-8"
              variants={itemVariants}
            >
              <div className="bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E32726] block">25+</span>
                <span className="text-xs sm:text-sm font-bold text-[#2B8A3E]">Branches</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E32726] block">15k+</span>
                <span className="text-xs sm:text-sm font-bold text-[#2B8A3E]">Happy Customers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Pizza Image Section */}
          <motion.div 
            className="lg:w-7/12 relative w-full"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none z-10" />
              
              <Image
                src="/images/pizza_here_page.png"
                alt="Masarap na Pizza"
                fill
                className="object-contain drop-shadow-2xl transform-gpu hover:scale-105 transition-transform duration-500"
                priority
              />
              
              {/* Enhanced Pizza Flavor Tags - Hidden on mobile */}
              {pizzaFlavors.map((flavor, index) => (
                <motion.div
                  key={index}
                  className="absolute hidden lg:block transform-gpu"
                  style={{
                    left: `${flavor.x}%`,
                    top: `${flavor.y}%`,
                    zIndex: 20
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: flavor.delay, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <span 
                    className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-lg inline-block transition-all duration-300 hover:shadow-xl"
                    style={{ color: flavor.color }}
                  >
                    {flavor.text}
                  </span>
                </motion.div>
              ))}

              {/* Enhanced Main Tags */}
              <motion.div 
                className="absolute top-2 sm:top-5 right-2 sm:right-5 bg-[#E32726] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-xl font-extrabold shadow-xl transform -rotate-12 border-2 sm:border-3 border-white z-30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                Pinaka-Mabenta!
              </motion.div>

              <motion.div 
                className="absolute bottom-8 sm:bottom-16 left-4 sm:left-8 bg-[#2B8A3E] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-xl font-extrabold shadow-xl transform rotate-12 border-2 sm:border-3 border-white z-30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <Link href="#delivery-partners" className="block">
                  Order Now!
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 