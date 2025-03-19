'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DeliveryPartners from '../components/DeliveryPartners';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
};

type MenuSection = {
  title: string;
  description: string;
  items: MenuItem[];
};

type MenuItems = {
  [key: string]: MenuSection;
};

const menuItems: MenuItems = {
  thinCrust: {
    title: "Thin Crust Pizza",
    description: "8 slices, 12 inches good for 4-5 persons",
    items: [
      {
        id: 1,
        name: 'Pepperoni',
        description: 'Classic pepperoni with our signature tomato sauce and mozzarella cheese',
        price: '₱299',
        image: '/PizzaMenu/Thin_Crust/Pepperoni.png',
        tags: ['Thin Crust', 'Popular']
      },
      {
        id: 2,
        name: 'Beef Mushroom',
        description: 'Premium ground beef with fresh mushrooms and special sauce',
        price: '₱329',
        image: '/PizzaMenu/Thin_Crust/Beef_Mushroom.png',
        tags: ['Thin Crust']
      },
      {
        id: 3,
        name: 'Hawaiian Delight',
        description: 'Sweet pineapple chunks, ham, and extra cheese',
        price: '₱299',
        image: '/PizzaMenu/Thin_Crust/Hawaiian_Delight.png',
        tags: ['Thin Crust', 'Bestseller']
      },
      {
        id: 4,
        name: 'Craby Corn',
        description: 'Crab sticks, sweet corn, and creamy sauce',
        price: '₱349',
        image: '/PizzaMenu/Thin_Crust/Craby_Corn.png',
        tags: ['Thin Crust', 'Seafood']
      },
      {
        id: 5,
        name: 'La Kreta',
        description: 'Our house special with premium toppings',
        price: '₱399',
        image: '/PizzaMenu/Thin_Crust/La_Kreta.png',
        tags: ['Thin Crust', 'Premium']
      },
      {
        id: 6,
        name: 'Meaty Deluxe',
        description: 'Loaded with various premium meats and special sauce',
        price: '₱399',
        image: '/PizzaMenu/Thin_Crust/Meaty_Deluxe.png',
        tags: ['Thin Crust', 'Premium']
      },
      {
        id: 7,
        name: 'Aloha Bacon Cheese Burger',
        description: 'Bacon, ground beef, cheese, and pineapple',
        price: '₱379',
        image: '/PizzaMenu/Thin_Crust/Aloh_Bacon_Cheese_Burger.png',
        tags: ['Thin Crust']
      },
      {
        id: 8,
        name: 'Beef Teriyaki',
        description: 'Japanese-inspired with teriyaki beef and special sauce',
        price: '₱369',
        image: '/PizzaMenu/Thin_Crust/Beef_Mushroom.png',
        tags: ['Thin Crust', 'Asian']
      },
      {
        id: 9,
        name: 'Chicken Poppers',
        description: 'Crispy chicken poppers with special sauce',
        price: '₱349',
        image: '/PizzaMenu/Thin_Crust/Chicken_Poppers.png',
        tags: ['Thin Crust']
      },
      {
        id: 10,
        name: 'Korean Chicken Poppers',
        description: 'Korean-style spicy chicken poppers',
        price: '₱369',
        image: '/PizzaMenu/Thin_Crust/Korean.png',
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
        image: '/PizzaMenu/Thick_Crust/Ham_&_Cheese.png',
        tags: ['Thick Crust', 'Classic']
      },
      {
        id: 12,
        name: 'Pepperoni',
        description: 'Premium pepperoni on our thick and chewy crust',
        price: '₱299',
        image: '/PizzaMenu/Thick_Crust/Peperroni.png',
        tags: ['Thick Crust', 'Classic']
      },
      {
        id: 13,
        name: 'Hawaiian Delight',
        description: 'Ham, pineapple, and extra cheese on thick crust',
        price: '₱329',
        image: '/PizzaMenu/Thick_Crust/Hawaiian_Delight.png',
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
        image: '/PizzaMenu/Thick_Crust/Bacon.png',
        tags: ['Thick Crust', 'Premium']
      },
      {
        id: 15,
        name: 'Beef Mushroom',
        description: 'Premium ground beef with fresh mushrooms',
        price: '₱369',
        image: '/PizzaMenu/Thick_Crust/Beef_Mushroom.png',
        tags: ['Thick Crust', 'Premium']
      },
      {
        id: 16,
        name: 'Cheese Burger',
        description: 'Ground beef, extra cheese, and burger sauce',
        price: '₱369',
        image: '/PizzaMenu/Thick_Crust/Cheese_Burger.png',
        tags: ['Thick Crust', 'Premium']
      },
      {
        id: 17,
        name: 'Chinese Sausage',
        description: 'Special Chinese sausage with Asian-inspired sauce',
        price: '₱369',
        image: '/PizzaMenu/Thick_Crust/Chinese_Sausage.png',
        tags: ['Thick Crust', 'Premium', 'Asian']
      },
      {
        id: 18,
        name: 'Craby Corn',
        description: 'Crab sticks and sweet corn on thick crust',
        price: '₱349',
        image: '/PizzaMenu/Thick_Crust/Craby_Corn.png',
        tags: ['Thick Crust', 'Premium', 'Seafood']
      },
      {
        id: 19,
        name: 'Sisig',
        description: 'Filipino-style sisig on pizza',
        price: '₱379',
        image: '/PizzaMenu/Thick_Crust/Sisig.png',
        tags: ['Thick Crust', 'Premium', 'Local']
      },
      {
        id: 20,
        name: 'Tuna and Corn',
        description: 'Premium tuna chunks with sweet corn',
        price: '₱349',
        image: '/PizzaMenu/Thick_Crust/Tuna and Corn.png',
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
        image: '/PizzaMenu/Thick_Crust/Pork_Floss.png',
        tags: ['Thick Crust', 'Supreme']
      },
      {
        id: 22,
        name: 'Overload',
        description: 'Loaded with all our premium toppings',
        price: '₱449',
        image: '/PizzaMenu/Thick_Crust/Pizzahaus_Special.png',
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
    <div className="min-h-screen bg-gradient-to-b from-[#E32726] via-[#E32726] to-[#FFD700] relative overflow-hidden">
      {/* Enhanced Hero Section with New Design */}
      <div className="relative bg-[#E32726] text-white">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal stripes background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #FFD700 0px,
                #FFD700 20px,
                transparent 20px,
                transparent 40px
              )`
            }}
          />

          {/* Animated circles */}
          <motion.div 
            className="absolute -top-1/2 -right-1/2 w-full h-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full opacity-20 blur-3xl" />
          </motion.div>

          {/* Floating pizza elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-10 left-[10%] w-20 h-20">
              <Image
                src="/images/pizza-decoration.png"
                alt="Pizza decoration"
                fill
                className="opacity-20 rotate-45"
              />
            </div>
            <div className="absolute bottom-20 right-[15%] w-16 h-16">
              <Image
                src="/images/pizza-decoration.png"
                alt="Pizza decoration"
                fill
                className="opacity-20 -rotate-12"
              />
            </div>
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E32726] via-transparent to-[#E32726] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E32726] via-transparent to-[#E32726] opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-xl">
                Our Pizza Menu
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
                Handcrafted with love, served with passion. Each pizza tells a story of flavor and tradition.
              </p>
            </motion.div>

            {/* Enhanced Menu Navigation */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {Object.keys(menuItems).map((key, index) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
                  whileHover={{ 
                    y: -2, 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.2)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4 + index * 0.1 } 
                  }}
                >
                  {menuItems[key].title}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 sm:h-24 fill-current text-[#E32726] transform translate-y-1"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="opacity-30"
            />
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="opacity-60 translate-y-1"
            />
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="translate-y-2"
            />
          </svg>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {Object.entries(menuItems).map(([key, section]) => (
          <motion.div
            key={key}
            id={key}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 sm:mb-24"
          >
            <div className="text-center mb-8 sm:mb-12">
              <motion.div 
                className="flex flex-col items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#E32726] text-white rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-transform">
                  {section.title}
                </span>
                <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#FFD700] text-[#E32726] rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-transform">
                  {section.description}
                </span>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {section.items.map((pizza) => (
                <motion.div
                  key={pizza.id}
                  variants={item}
                  className="group relative"
                >
                  <div className="absolute inset-0.5 bg-gradient-to-r from-[#FFD700] to-[#E32726] rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-yellow-50">
                      <Image
                        src={pizza.image}
                        alt={pizza.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                        priority={pizza.id <= 6}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#E32726]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Price Tag */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-4 py-1.5 bg-[#E32726] text-white rounded-full text-sm font-bold shadow-lg transform group-hover:scale-105 transition-transform">
                          {pizza.price}
                        </span>
                      </div>

                      {/* Best Seller Badge */}
                      {(pizza.tags.includes('Bestseller') || pizza.tags.includes('Popular')) && (
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-1 bg-[#FFD700] text-[#E32726] px-3 py-1.5 rounded-full shadow-lg transform group-hover:scale-105 transition-transform">
                            <svg 
                              className="w-4 h-4" 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-bold whitespace-nowrap">Best Seller</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6 bg-white">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E32726] transition-colors duration-300">{pizza.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{pizza.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {pizza.tags.filter(tag => tag !== 'Bestseller' && tag !== 'Popular').map((tag) => (
                          <motion.span
                            key={tag}
                            className="inline-block px-3 py-1 bg-[#E32726] text-white rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-transform"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Delivery Partners Section */}
      <DeliveryPartners />

      {/* Image Marquee Section with Enhanced Styling */}
      <div className="py-12 sm:py-16 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/pizza-pattern.svg')] opacity-[0.05]"></div>
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white/95 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white/95 to-transparent z-10"></div>
          
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div key={index} className="flex-shrink-0">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Image
                    src={`/promoMaterials/img${index}.png`}
                    alt={`Promo Material ${index}`}
                    fill
                    sizes="(max-width: 640px) 144px, 192px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E32726]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Image
                    src={`/promoMaterials/img${index}.png`}
                    alt={`Promo Material ${index}`}
                    fill
                    sizes="(max-width: 640px) 144px, 192px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E32726]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 