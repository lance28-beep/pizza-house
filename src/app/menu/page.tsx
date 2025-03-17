'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const menuItems = {
  thinCrust: {
    title: "Thin Crust Pizza",
    description: "8 slices, 12 inches good for 4-5 persons",
    items: [
      {
        id: 1,
        name: 'Pepperoni',
        description: 'Classic pepperoni with our signature tomato sauce and mozzarella cheese',
        price: '₱299',
        image: '/pizzas/pepperoni.png',
        tags: ['Thin Crust', 'Popular']
      },
      {
        id: 2,
        name: 'Beef Mushroom',
        description: 'Premium ground beef with fresh mushrooms and special sauce',
        price: '₱329',
        image: '/pizzas/beef-mushroom.png',
        tags: ['Thin Crust']
      },
      {
        id: 3,
        name: 'Hawaiian Delight',
        description: 'Sweet pineapple chunks, ham, and extra cheese',
        price: '₱299',
        image: '/pizzas/hawaiian.png',
        tags: ['Thin Crust', 'Bestseller']
      },
      {
        id: 4,
        name: 'Craby Corn',
        description: 'Crab sticks, sweet corn, and creamy sauce',
        price: '₱349',
        image: '/pizzas/crabby-corn.png',
        tags: ['Thin Crust', 'Seafood']
      },
      {
        id: 5,
        name: 'La Kreta',
        description: 'Our house special with premium toppings',
        price: '₱399',
        image: '/pizzas/special.png',
        tags: ['Thin Crust', 'Premium']
      },
      {
        id: 6,
        name: 'Meaty Deluxe',
        description: 'Loaded with various premium meats and special sauce',
        price: '₱399',
        image: '/pizzas/meatlovers.png',
        tags: ['Thin Crust', 'Premium']
      },
      {
        id: 7,
        name: 'Aloha Bacon Cheese Burger',
        description: 'Bacon, ground beef, cheese, and pineapple',
        price: '₱379',
        image: '/pizzas/bacon-cheese.png',
        tags: ['Thin Crust']
      },
      {
        id: 8,
        name: 'Beef Teriyaki',
        description: 'Japanese-inspired with teriyaki beef and special sauce',
        price: '₱369',
        image: '/pizzas/teriyaki.png',
        tags: ['Thin Crust', 'Asian']
      },
      {
        id: 9,
        name: 'Chicken Poppers',
        description: 'Crispy chicken poppers with special sauce',
        price: '₱349',
        image: '/pizzas/chicken.png',
        tags: ['Thin Crust']
      },
      {
        id: 10,
        name: 'Korean Chicken Poppers',
        description: 'Korean-style spicy chicken poppers',
        price: '₱369',
        image: '/pizzas/korean-chicken.png',
        tags: ['Thin Crust', 'Spicy', 'Asian']
      }
    ]
  },
  classicThick: {
    title: "Classic Thick Crust",
    description: "10 inches, 8 slices good for 3-4 persons",
    items: [
      {
        id: 11,
        name: 'Ham & Cheese',
        description: 'Classic combination of ham and melted cheese',
        price: '₱299',
        image: '/pizzas/ham-cheese.png',
        tags: ['Thick Crust', 'Classic']
      },
      {
        id: 12,
        name: 'Pepperoni',
        description: 'Premium pepperoni on our thick and chewy crust',
        price: '₱299',
        image: '/pizzas/pepperoni-thick.png',
        tags: ['Thick Crust', 'Classic']
      },
      {
        id: 13,
        name: 'Hawaiian Delight',
        description: 'Ham, pineapple, and extra cheese on thick crust',
        price: '₱329',
        image: '/pizzas/hawaiian-thick.png',
        tags: ['Thick Crust', 'Classic']
      }
    ]
  },
  premiumThick: {
    title: "Premium Thick Crust",
    description: "10 inches, 8 slices good for 3-4 persons",
    items: [
      {
        id: 14,
        name: 'Bacon',
        description: 'Loaded with crispy bacon and special sauce',
        price: '₱349',
        image: '/pizzas/bacon.png',
        tags: ['Thick Crust', 'Premium']
      },
      {
        id: 15,
        name: 'Beef Mushroom',
        description: 'Premium ground beef with fresh mushrooms',
        price: '₱369',
        image: '/pizzas/beef-mushroom-thick.png',
        tags: ['Thick Crust', 'Premium']
      },
      {
        id: 16,
        name: 'Cheese Burger',
        description: 'Ground beef, extra cheese, and burger sauce',
        price: '₱369',
        image: '/pizzas/cheeseburger.png',
        tags: ['Thick Crust', 'Premium']
      },
      {
        id: 17,
        name: 'Chinese Sausage',
        description: 'Special Chinese sausage with Asian-inspired sauce',
        price: '₱369',
        image: '/pizzas/chinese-sausage.png',
        tags: ['Thick Crust', 'Premium', 'Asian']
      },
      {
        id: 18,
        name: 'Craby Corn',
        description: 'Crab sticks and sweet corn on thick crust',
        price: '₱349',
        image: '/pizzas/crabby-corn-thick.png',
        tags: ['Thick Crust', 'Premium', 'Seafood']
      },
      {
        id: 19,
        name: 'Sisig',
        description: 'Filipino-style sisig on pizza',
        price: '₱379',
        image: '/pizzas/sisig.png',
        tags: ['Thick Crust', 'Premium', 'Local']
      },
      {
        id: 20,
        name: 'Tuna and Corn',
        description: 'Premium tuna chunks with sweet corn',
        price: '₱349',
        image: '/pizzas/tuna-corn.png',
        tags: ['Thick Crust', 'Premium', 'Seafood']
      }
    ]
  },
  supremeThick: {
    title: "Supreme Thick Crust",
    description: "10 inches, 8 slices good for 3-4 persons",
    items: [
      {
        id: 21,
        name: 'Pork Floss',
        description: 'Generous serving of savory pork floss',
        price: '₱399',
        image: '/pizzas/pork-floss.png',
        tags: ['Thick Crust', 'Supreme']
      },
      {
        id: 22,
        name: 'Overload',
        description: 'Loaded with all our premium toppings',
        price: '₱449',
        image: '/pizzas/overload.png',
        tags: ['Thick Crust', 'Supreme', 'Bestseller']
      }
    ]
  }
};

export default function Menu() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E32726] via-yellow-400 to-[#E32726]">
      {/* Hero Section */}
      <div className="relative bg-[#E32726] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-full bg-black/20" />
          <div className="absolute inset-0 bg-[#E32726] opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featuring Our Pizzas
          </motion.h1>
          <motion.p 
            className="text-lg text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Handcrafted with love, served with passion
          </motion.p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Render each crust type section */}
        {Object.entries(menuItems).map(([key, section]) => (
          <motion.div
            key={key}
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">{section.title}</h2>
              <p className="text-white/90">{section.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((pizza) => (
                <motion.div
                  key={pizza.id}
                  variants={item}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={pizza.image}
                      alt={pizza.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{pizza.name}</h3>
                      <span className="text-xl font-bold text-[#E32726]">{pizza.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{pizza.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pizza.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-[#E32726]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action & Delivery Partners Section */}
      <div className="bg-white/95 backdrop-blur-sm py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Craving for Pizza?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get your favorite Pizza House pizzas delivered hot and fresh to your doorstep. Order now and enjoy our special deals!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09163482693"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#E32726] text-white font-semibold hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Order
              </a>
              <a
                href="/locations"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#E32726] text-[#E32726] font-semibold hover:bg-[#E32726] hover:text-white transition-colors"
              >
                Find Nearest Branch
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Delivery Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Our Delivery Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-md w-32 h-32 flex items-center justify-center"
              >
                <Image
                  src="/delivery/foodpanda.png"
                  alt="Foodpanda"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-md w-32 h-32 flex items-center justify-center"
              >
                <Image
                  src="/delivery/grabfood.png"
                  alt="GrabFood"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-md w-32 h-32 flex items-center justify-center"
              >
                <Image
                  src="/delivery/maxim.png"
                  alt="Maxim"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-md w-32 h-32 flex items-center justify-center"
              >
                <Image
                  src="/delivery/toktok.png"
                  alt="Toktok"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
              Order through our delivery partners and get your favorite pizzas delivered right to your doorstep. Fast, reliable, and convenient!
            </p>
          </motion.div>

          {/* Special Offers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-[#E32726]/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Special Offers
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-2">Family Bundle</h4>
                <p className="text-gray-600 mb-4">2 Large Pizzas + 4 Regular Drinks + 2 Sides</p>
                <p className="text-[#E32726] font-bold">Save ₱300</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-2">Weekday Special</h4>
                <p className="text-gray-600 mb-4">20% OFF on all Classic Pizzas (Mon-Thu)</p>
                <p className="text-[#E32726] font-bold">Use Code: WEEKDAY20</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-2">Student Discount</h4>
                <p className="text-gray-600 mb-4">15% OFF with valid student ID</p>
                <p className="text-[#E32726] font-bold">Valid ID required</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Original Call to Action */}
      <div className="bg-[#E32726] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-lg text-white/90 mb-8">
              Call us now or visit your nearest Pizza House location
            </p>
            <a
              href="tel:09163482693"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#E32726] font-semibold hover:bg-yellow-400 transition-colors"
            >
              Order Now
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 