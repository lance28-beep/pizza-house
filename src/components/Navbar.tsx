'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="bg-[#E32726] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative overflow-hidden rounded-full transform transition-transform duration-300 group-hover:rotate-12">
                <Image
                  src="/pizzas/imageedit_3_8208362680.png"
                  alt="Pizza House Logo"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <span className="ml-3 text-2xl font-bold text-[#FFEB3B] block group-hover:tracking-wider transition-all duration-300">Pizza House</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-white hover:text-[#FFEB3B] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-700/30 relative overflow-hidden group">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#FFEB3B]/20 transition-all duration-300 group-hover:h-full -z-0"></span>
            </Link>
            <Link href="/about" className="text-white hover:text-[#FFEB3B] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-700/30 relative overflow-hidden group">
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#FFEB3B]/20 transition-all duration-300 group-hover:h-full -z-0"></span>
            </Link>
            <Link href="/menu" className="text-white hover:text-[#FFEB3B] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-700/30 relative overflow-hidden group">
              <span className="relative z-10">Menu</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#FFEB3B]/20 transition-all duration-300 group-hover:h-full -z-0"></span>
            </Link>
            <Link href="/locations" className="text-white hover:text-[#FFEB3B] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-700/30 relative overflow-hidden group">
              <span className="relative z-10">Locations</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#FFEB3B]/20 transition-all duration-300 group-hover:h-full -z-0"></span>
            </Link>
            <Link href="/careers" className="text-white hover:text-[#FFEB3B] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-700/30 relative overflow-hidden group">
              <span className="relative z-10">Careers</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#FFEB3B]/20 transition-all duration-300 group-hover:h-full -z-0"></span>
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FFEB3B] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-700/30 relative overflow-hidden group">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#FFEB3B]/20 transition-all duration-300 group-hover:h-full -z-0"></span>
            </Link>
            <Link 
              href="/franchise" 
              className="bg-[#FFEB3B] text-[#E32726] hover:bg-yellow-400 px-5 py-2.5 rounded-md text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">FRANCHISE NOW!</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-white/30 transition-all duration-500 group-hover:w-full -z-0"></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="relative w-6 h-6 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute w-6 h-6 flex items-center justify-center">
                <motion.div
                  className="w-6 h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-[#E32726] border-t border-red-700 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.div variants={itemVariants}>
                <Link href="/" className="text-white hover:text-[#FFEB3B] block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/about" className="text-white hover:text-[#FFEB3B] block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/menu" className="text-white hover:text-[#FFEB3B] block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">Menu</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/locations" className="text-white hover:text-[#FFEB3B] block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">Locations</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/careers" className="text-white hover:text-[#FFEB3B] block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">Careers</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/contact" className="text-white hover:text-[#FFEB3B] block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/franchise" 
                  className="bg-[#FFEB3B] text-[#E32726] hover:bg-yellow-400 block px-3 py-2 rounded-md text-base font-bold mt-2 shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">FRANCHISE NOW!</span>
                  <span className="absolute top-0 left-0 w-0 h-full bg-white/30 transition-all duration-500 group-hover:w-full -z-0"></span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 