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
    logo: "/deliveryPartners/grabfood.png",
    link: "https://food.grab.com",
    bgColor: "bg-[#00b14f]"
  },
  {
    name: "Angkas",
    logo: "/deliveryPartners/angkas.png",
    link: "https://angkas.com",
    bgColor: "bg-[#0961ed]"
  }
];

export default function DeliveryPartners() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pizzas/pattern.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-[#E32726] text-white rounded-full text-sm font-bold mb-4">
            Fast & Easy Delivery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E32726] mb-4">
            Order Through Our Partners
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get your favorite Pizza Haus delivered right to your doorstep through our trusted delivery partners
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {deliveryPartners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Link 
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full"
              >
                <div className={`${partner.bgColor} rounded-2xl shadow-lg p-8 w-full aspect-[4/3] flex items-center justify-center transform transition-all duration-300 group-hover:shadow-xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image 
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="w-4/5 h-4/5 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                    />
                  </div>
                  <motion.div 
                    className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <span className="inline-flex items-center gap-2 text-white text-sm font-medium bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                      Order Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">30-45 mins delivery</span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-gray-600">Cash on Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 