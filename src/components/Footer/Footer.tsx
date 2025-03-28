'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#E32726] to-[#c41e1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300 group-hover:shadow-lg"
              >
                <Image
                  src="/pizzas/pizzaHouseLogo.png"
                  alt="Pizza Haus Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:brightness-110"
                />
              </motion.div>
              <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                Pizza Haus
              </span>
            </Link>
            <p className="text-sm sm:text-base text-white/90 mb-6 max-w-md leading-relaxed">
              Discover the best pizza experience in the Bicol Region. Fresh ingredients, 
              traditional recipes, and a taste that feels like home.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.15-3.23,1.66-4.77,4.92-4.92,1.27-.06,1.65-.07,4.85-.07ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.77,2.7-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.7,6.77,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.77-2.7,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.7-6.77-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44,1.44,1.44,0,0,0-1.44-1.44Z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="tel:09163482693"
                className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Phone"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 21 2 15.18 2 8V5z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold tracking-wider uppercase text-white/90">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/locations', label: 'Locations' },
                { href: '/about', label: 'About Us' },
                { href: '/careers', label: 'Careers' },
                { href: '/franchise', label: 'Franchise' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold tracking-wider uppercase text-white/90">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@pizzahouse.com" 
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">info@pizzahouse.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:09163482693" 
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 21 2 15.18 2 8V5z" />
                  </svg>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">0916-348-2693</span>
                </a>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base text-white/80">
                  Central Business District,<br />
                  Naga City, Camarines Sur
                </span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm sm:text-base text-white/80">
                  <p className="font-medium">Business Hours</p>
                  <p className="text-white/70">Monday to Friday</p>
                  <p className="text-white/70">8:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80 text-center sm:text-left">
              © {new Date().getFullYear()} Pizza Haus. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="text-sm text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a 
                href="https://lance28-beep.github.io/portfolio-website/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1 group"
              >
                <span>Developed by</span>
                <span className="font-semibold group-hover:text-yellow-300 transition-colors">Lance</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 