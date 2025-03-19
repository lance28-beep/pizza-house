'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -16, transition: { duration: 0.2 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/locations', label: 'Locations' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-[#E32726] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu} className="flex-shrink-0 flex items-center group">
              <div className="relative overflow-hidden rounded-full transform transition-transform duration-300 group-hover:rotate-12">
                <Image
                  src="/pizzas/imageedit_3_8208362680.png"
                  alt="Pizza Haus Logo"
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  priority
                />
              </div>
              <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold text-[#FFEB3B] block group-hover:tracking-wider transition-all duration-300">
                Pizza Haus
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#FFEB3B] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-700/30 relative overflow-hidden group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700/0 via-red-700/20 to-red-700/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              </Link>
            ))}
            <Link 
              href="/franchise" 
              className="bg-[#FFEB3B] text-[#E32726] hover:bg-yellow-400 px-5 py-2 rounded-md text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group transform hover:scale-105"
            >
              <span className="relative z-10">FRANCHISE NOW!</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 focus:outline-none flex items-center justify-center"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="absolute w-6 h-5 flex flex-col justify-center items-center">
                <motion.span
                  className="w-6 h-0.5 bg-white rounded-full absolute"
                  animate={{
                    top: isMenuOpen ? "50%" : "0%",
                    rotate: isMenuOpen ? 45 : 0,
                    translateY: isMenuOpen ? "-50%" : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white rounded-full absolute"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    translateX: isMenuOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white rounded-full absolute"
                  animate={{
                    bottom: isMenuOpen ? "50%" : "0%",
                    rotate: isMenuOpen ? -45 : 0,
                    translateY: isMenuOpen ? "50%" : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-[#E32726] border-t border-red-700/30 overflow-hidden"
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.1
                  }
                },
                closed: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1
                  }
                }
              }}
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="text-white hover:text-[#FFEB3B] block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-flex items-center">
                      {link.label}
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link 
                  href="/franchise"
                  onClick={closeMenu}
                  className="bg-[#FFEB3B] text-[#E32726] hover:bg-yellow-400 block px-4 py-2.5 rounded-md text-base font-bold mt-4 shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    FRANCHISE NOW!
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 