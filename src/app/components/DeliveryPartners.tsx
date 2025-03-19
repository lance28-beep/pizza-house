"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const deliveryPartners = [
  {
    name: "Foodpanda",
    logo: "/deliveryPartners/Food-Panda-new-logo.png",
    link: "https://www.foodpanda.ph",
    bgColor: "bg-[#e4006e]"
  },
  {
    name: "Grab Food",
    logo: "/deliveryPartners/pandelivery-new-logo.png",
    link: "https://food.grab.com",
    bgColor: "bg-[#00b14f]"
  },
  {
    name: "Nueca Hapidee",
    logo: "/deliveryPartners/Nueca_Hungrily.png",
    link: "https://www.hapidee.ph",
    bgColor: "bg-[#ff5238]"
  },
  {
    name: "Toktok",
    logo: "/deliveryPartners/toktok.png",
    link: "https://www.toktok.ph",
    bgColor: "bg-[#fffffb]"
  }
];

export default function DeliveryPartners() {
  return (
    <section id="delivery-partners" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pizzas/pattern.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent"></div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 bg-[#E32726]/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 bg-[#00b14f]/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#E32726] text-white rounded-full text-sm font-bold mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-transform"
            whileHover={{ y: -2 }}
          >
            Fast & Easy Delivery
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E32726] mb-4 sm:mb-6 tracking-tight px-4">
            Order Through Our Partners
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Get your favorite Pizza Haus delivered right to your doorstep
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-10 sm:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {deliveryPartners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center"
            >
              <Link 
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full"
              >
                <div className={`${partner.bgColor} rounded-2xl shadow-lg p-4 w-full aspect-[4/3] flex items-center justify-center transform transition-all duration-300 group-hover:shadow-2xl relative overflow-hidden border border-white/10`}>
                  {/* Enhanced Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-[url('/pizzas/pattern.png')] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                    <Image 
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={70}
                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-xl filter brightness-110"
                    />
                  </div>
                  <motion.div 
                    className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <span className="inline-flex items-center gap-1.5 text-white text-xs font-medium bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg">
                      Order Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 animate-bounce-x" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Additional Info */}
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:bg-white"
              whileHover={{ y: -4 }}
            >
              <div className="p-2 sm:p-3 bg-red-50 rounded-xl mb-2 sm:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Quick Delivery</h3>
              <p className="text-gray-600 text-xs sm:text-sm">30-45 mins delivery</p>
            </motion.div>

            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:bg-white"
              whileHover={{ y: -4 }}
            >
              <div className="p-2 sm:p-3 bg-red-50 rounded-xl mb-2 sm:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Easy Payment</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Cash on Delivery</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 