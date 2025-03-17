"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dialog } from '@headlessui/react';
import { useState } from "react";
import Hero from "./components/Hero";
import DeliveryPartners from "./components/DeliveryPartners";

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

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const bestSellers = [
    {
      name: "Beef and Mushroom",
      description: "Savory beef topped with fresh mushrooms and our signature cheese blend",
      image: "/pizzas/beef-mushroom.jpg",
      tag: "Customer Favorite",
      price: "₱199"
    },
    {
      name: "Pizza Haus Overload",
      description: "Loaded with all your favorite toppings for the ultimate pizza experience",
      image: "/pizzas/overload.jpg",
      tag: "Best Seller",
      price: "₱299"
    },
    {
      name: "Ham and Cheese",
      description: "Classic combination of premium ham and special cheese blend",
      image: "/pizzas/ham-cheese.jpg",
      tag: "Classic Choice",
      price: "₱179"
    }
  ];

  const menuCategories = [
    {
      name: "Thin Crust",
      description: "8 slices, 12 inches good for 4-5 persons",
      image: "/pizzas/thin-crust.jpg"
    },
    {
      name: "Thick Crust",
      description: "10 inches, 8 slices good for 3-4 persons",
      image: "/pizzas/thick-crust.jpg"
    },
    {
      name: "4 Mini Pizza Box",
      description: "5 inches each pizza, perfect for sharing",
      image: "/pizzas/mini-pizza.jpg"
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
    <div className="min-h-screen">
      <Hero />

      {/* Best Sellers Showcase */}
      <motion.section 
        className="py-20 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } }
        }}
      >
        <div className="absolute inset-0 bg-[url('/pizzas/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E32726] mb-4">
              Best Sellers
            </h2>
            <p className="text-xl text-gray-600">
              Our most loved pizzas that keep customers coming back
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {bestSellers.map((pizza, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="absolute top-4 right-4 z-10">
                  <motion.span 
                    className="bg-[#FFEB3B] text-[#E32726] px-4 py-1 rounded-full text-sm font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {pizza.tag}
                  </motion.span>
                </div>
                <div className="relative h-64">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#E32726]">{pizza.name}</h3>
                    <span className="text-lg font-bold text-[#E32726]">{pizza.price}</span>
                  </div>
                  <p className="text-gray-600">{pizza.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeIn}
          >
            <Link 
              href="/menu"
              className="inline-flex items-center justify-center bg-[#E32726] text-white hover:bg-red-700 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg gap-2 group"
            >
              <span>View Full Menu</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5"
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

      {/* Menu Categories */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E32726] mb-4">
              Our Menu
            </h2>
            <p className="text-xl text-gray-600">
              Choose your perfect crust and size
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <Link 
                  href="/menu"
                  className="block group relative bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="relative h-80">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-200">{category.description}</p>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Feed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#E32726] mb-12">
            Follow Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facebook Feed */}
            <div className="col-span-full lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#E32726] mb-6">Latest Updates</h3>
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpizzahaus.ph&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="500"
                    height="600"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Instagram-style Grid */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#E32726] mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Gallery Images */}
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/gallery/pizza1.jpg"
                      alt="Pizza Gallery"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Add more gallery images */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#E32726] mb-12">
            Watch Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Video */}
            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpizzahaus.ph%2Fvideos%2F123&show_text=0"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            {/* Video Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#E32726] mb-4">
                Behind the Scenes at Pizza Haus
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Watch how we create our delicious pizzas and see the passion that goes into every slice.
              </p>
              <Link
                href="https://www.facebook.com/pizzahaus.ph/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E32726] text-white hover:bg-red-700 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Watch More Videos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Replace the old delivery partners section with the new component */}
      <DeliveryPartners />

      {/* Footer */}
      <footer className="bg-[#E32726] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>0916-348-2693</p>
              <p>pizzahaus.naga@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/pizzahaus.ph" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEB3B]">
                  Facebook
                </a>
                <a href="https://www.instagram.com/pizzahausbicol" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEB3B]">
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p>Monday to Friday</p>
              <p>8:00 AM - 4:00 PM</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>PizzahausPH © 2021. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
