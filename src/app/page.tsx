"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dialog } from '@headlessui/react';
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import DeliveryPartners from "./components/DeliveryPartners";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const slideIn = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const bestSellers = [
    {
      name: "Beef and Mushroom",
      description: "Savory beef topped with fresh mushrooms and our signature cheese blend",
      image: "/pizzas/beef-mushroom-1.png",
      tag: "Customer Favorite",
      price: "₱199"
    },
    {
      name: "Pizza Haus Overload",
      description: "Loaded with all your favorite toppings for the ultimate pizza experience",
      image: "/pizzas/pepperoni.jpg",
      tag: "Best Seller",
      price: "₱299"
    },
    {
      name: "Ham and Cheese",
      description: "Classic combination of premium ham and special cheese blend",
      image: "/pizzas/hawaiian.jpg",
      tag: "Classic Choice",
      price: "₱179"
    }
  ];

  const menuCategories = [
    {
      name: "Thin Crust",
      description: "8 slices, 12 inches good for 4-5 persons",
      image: "/pizzas/beef-mushroom-1.png"
    },
    {
      name: "Thick Crust",
      description: "10 inches, 8 slices good for 3-4 persons",
      image: "/pizzas/korean-bbq.jpg"
    },
    {
      name: "4 Mini Pizza Box",
      description: "5 inches each pizza, perfect for sharing",
      image: "/pizzas/ranch-chicken.jpg"
    }
  ];

  const socialPosts = [
    {
      type: 'facebook',
      url: 'https://www.facebook.com/pizzahaus.ph/posts/123', // Replace with actual post URLs
      preview: '/social/post1.jpg'
    },
    // Add more posts here
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />

      {/* Best Sellers Showcase - Enhanced */}
      <motion.section 
        className="py-16 sm:py-24 bg-gradient-to-b from-white to-yellow-50/30 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } }
        }}
      >
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/pizza-pattern.svg')] opacity-[0.03] rotate-3 scale-110"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E32726]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-12 sm:mb-20"
            variants={fadeIn}
          >
            <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#E32726] text-white rounded-full text-sm font-bold mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-transform">Best Sellers</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#E32726] mb-4 tracking-tight">
              Masarap na Best Sellers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved pizzas that have become Bicol's favorites
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerContainer}
          >
            {bestSellers.map((pizza, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100"
              >
                {/* Enhanced tag design */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.span 
                    className="bg-[#FFEB3B]/90 backdrop-blur-sm text-[#E32726] px-4 py-1.5 rounded-full text-sm font-bold shadow-lg border border-yellow-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {pizza.tag}
                  </motion.span>
                </div>
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <motion.div 
                  className="p-6 sm:p-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] group-hover:text-red-700 transition-colors duration-300">{pizza.name}</h3>
                    <span className="text-lg sm:text-xl font-bold text-[#E32726] bg-yellow-100 px-3 py-1.5 rounded-lg">{pizza.price}</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 mb-4">{pizza.description}</p>
                  <motion.button
                    className="w-full bg-[#E32726] text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Order Now
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12 sm:mt-16"
            variants={fadeIn}
          >
            <Link 
              href="/menu"
              className="inline-flex items-center justify-center bg-[#E32726] text-white hover:bg-red-700 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl gap-3 transform hover:-translate-y-1 border-2 border-white"
            >
              <span>Explore Our Complete Menu</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Categories - Enhanced */}
      <motion.section 
        className="py-20 sm:py-32 bg-gradient-to-br from-yellow-50 via-white to-red-50/30 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 bg-[url('/patterns/dots-pattern.svg')] opacity-[0.05]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E32726]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFEB3B]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16 sm:mb-24"
            variants={fadeIn}
          >
            <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#E32726] text-white rounded-full text-sm font-bold mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-transform">Pizza Styles</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#E32726] mb-4 tracking-tight">
              Choose Your Perfect Crust
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From thin and crispy to thick and fluffy, find the pizza style that matches your taste buds
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerContainer}
          >
            {/* Thin Crust Option - Enhanced */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="transform transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src="/pizzas/hawaiian.jpg"
                    alt="Thin Crust Pizza"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Thin Crust</h3>
                    <p className="text-base text-gray-200">12" | 8 Slices | 4-5 Persons</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-[#E32726] font-bold text-xl">From ₱199</span>
                      <span className="block text-sm text-gray-500 mt-1">Per Pizza</span>
                    </div>
                    <span className="bg-yellow-100 text-[#E32726] px-4 py-1.5 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">Crispy, Light Texture</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">Perfect for Sharing</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">12 Exciting Flavors</span>
                    </li>
                  </ul>
                  <Link 
                    href="/menu" 
                    className="block w-full bg-[#E32726] text-white text-center py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    View All Flavors
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Thick Crust Option - Enhanced */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="transform transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src="/pizzas/beef-mushroom-1.png"
                    alt="Thick Crust Pizza"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Thick Crust</h3>
                    <p className="text-base text-gray-200">10" | 8 Slices | 3-4 Persons</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-[#E32726] font-bold text-xl">From ₱179</span>
                      <span className="block text-sm text-gray-500 mt-1">Per Pizza</span>
                    </div>
                    <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold">Family Favorite</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">Rich, Fluffy Texture</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">Extra Toppings</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">10 Classic Flavors</span>
                    </li>
                  </ul>
                  <Link 
                    href="/menu" 
                    className="block w-full bg-[#E32726] text-white text-center py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    View All Flavors
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Mini Pizza Box Option - Enhanced */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="transform transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src="/pizzas/FourMiniPizza.png"
                    alt="Mini Pizza Box"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">4 Mini Pizza Box</h3>
                    <p className="text-base text-gray-200">5" Each | Perfect for Groups</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-[#E32726] font-bold text-xl">From ₱299</span>
                      <span className="block text-sm text-gray-500 mt-1">Per Box</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">Best Value</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">Mix Different Flavors</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">Perfect for Groups</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-base">All Flavors Available</span>
                    </li>
                  </ul>
                  <Link 
                    href="/menu" 
                    className="block w-full bg-[#E32726] text-white text-center py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    View All Flavors
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div 
            className="text-center mt-16 sm:mt-20"
            variants={fadeIn}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 sm:p-12 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Order?
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Choose your favorite pizza and get it delivered to your doorstep through our trusted delivery partners
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/order"
                  className="inline-flex items-center justify-center bg-white text-[#E32726] hover:bg-yellow-50 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl gap-3 transform hover:-translate-y-1"
                >
                  <span>Order Through Our Partners</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </Link>
                <Link 
                  href="/menu"
                  className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl gap-3 transform hover:-translate-y-1"
                >
                  <span>View More Menu</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pizza Experience Section - Replacing Social Media */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#E32726] text-white rounded-full text-sm font-bold mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-transform">The Pizza Haus Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E32726] mb-6 tracking-tight">
              Why Choose Pizza Haus
          </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of quality ingredients, authentic recipes, and Filipino hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Quality Ingredients */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E32726]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Ingredients</h3>
              <p className="text-gray-600">Fresh, high-quality ingredients sourced from trusted suppliers</p>
            </motion.div>

            {/* Authentic Recipe */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E32726]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secret Recipe</h3>
              <p className="text-gray-600">Our time-tested recipes perfected over generations</p>
            </motion.div>

            {/* Quick Service */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E32726]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">30-45 minutes delivery guaranteed to your doorstep</p>
            </motion.div>

            {/* Value for Money */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E32726]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Great Value</h3>
              <p className="text-gray-600">Premium quality at affordable prices for everyone</p>
            </motion.div>
            </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#E32726] mb-2">25+</div>
              <div className="text-gray-600 font-medium">Branches</div>
            </motion.div>
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#E32726] mb-2">15k+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </motion.div>
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#E32726] mb-2">20+</div>
              <div className="text-gray-600 font-medium">Pizza Varieties</div>
            </motion.div>
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#E32726] mb-2">4.9</div>
              <div className="text-gray-600 font-medium">Customer Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <motion.section 
        className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/80 to-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E32726]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFEB3B]/5 rounded-full blur-3xl"></div>
        
        <div className="relative">
          <motion.div 
            className="text-center mb-16 sm:mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={fadeIn}
          >
            <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#E32726] text-white rounded-full text-sm font-bold mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-transform">Our Happy Family</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E32726] mb-4 sm:mb-6 tracking-tight">
              Creating Delicious Memories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's a family celebration, barkada hangout, or just your everyday craving - our pizzas are perfect for any occasion. Join thousands of happy customers who've made Pizza Haus their go-to choice for memorable moments.
            </p>
          </motion.div>

          {/* Customer Images Marquee - First Row */}
          <div className="w-full overflow-hidden py-4">
            <motion.div 
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className="relative w-72 h-72 flex-shrink-0 rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/happyCustomers/happy_customer (${index + 1}).jpg`}
                    alt={`Happy Customer ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-medium text-sm">Happy Customer Story #{index + 1}</span>
                    </div>
            </div>
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="relative w-72 h-72 flex-shrink-0 rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/happyCustomers/happy_customer (${index + 1}).jpg`}
                    alt={`Happy Customer ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-medium text-sm">Happy Customer Story #{index + 1}</span>
              </div>
            </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Customer Images Marquee - Second Row */}
          <div className="w-full overflow-hidden py-4">
            <motion.div 
              className="flex gap-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className="relative w-72 h-72 flex-shrink-0 rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/happyCustomers/happy_customer (${index + 7}).jpg`}
                    alt={`Happy Customer ${index + 7}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-medium text-sm">Happy Customer Story #{index + 7}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="relative w-72 h-72 flex-shrink-0 rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/happyCustomers/happy_customer (${index + 7}).jpg`}
                    alt={`Happy Customer ${index + 7}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-medium text-sm">Happy Customer Story #{index + 7}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Customer Quote */}
          <motion.div 
            className="text-center mt-16 sm:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={fadeIn}
          >
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
              <svg className="w-10 h-10 text-[#E32726]/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
              <blockquote className="text-xl sm:text-2xl font-medium text-gray-700 italic mb-6">
                "From casual merienda to grand celebrations, Pizza Haus has been our family's favorite choice. The taste brings everyone together, creating moments we'll cherish forever. It's more than just pizza - it's a tradition of happiness we share with loved ones."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <span className="text-[#E32726] font-bold text-lg">★★★★★</span>
                <span className="text-gray-600 font-medium">Loved by over 15,000+ happy customers</span>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12"
            variants={fadeIn}
          >
            <Link 
              href="/menu"
              className="inline-flex items-center justify-center bg-[#E32726] text-white hover:bg-red-700 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-md hover:shadow-xl gap-3 transform hover:scale-105"
            >
              <span>Create Your Own Pizza Moments</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                viewBox="0 0 24 24" 
                stroke="currentColor"
                fill="none"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <DeliveryPartners />
    </div>
  );
}


