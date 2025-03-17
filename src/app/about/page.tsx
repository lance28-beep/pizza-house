'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const locations = [
    "BUHI", "BATO", "LIBMANAN", "CAM NORTE", "SORSOGON", 
    "ALBAY", "MASBATE", "CATANDUANES"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#E32726] to-[#FF6B6B] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/pizzas/pattern.png')" }}></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-[#FFEB3B] text-xl font-semibold tracking-wider uppercase">Our Story</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              A Family Legacy of <span className="text-[#FFEB3B]">Excellence</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              From a humble bread shop to a thriving pizza empire, discover how we're bringing quality and affordability to every table.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="#our-story"
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 overflow-hidden bg-white text-[#E32726] hover:text-white"
              >
                <span className="relative z-10">Read Our Story</span>
                <div className="absolute inset-0 bg-[#FFEB3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link 
                href="/franchise"
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 overflow-hidden bg-[#FFEB3B] text-[#E32726] hover:text-white"
              >
                <span className="relative z-10">Join Our Family</span>
                <div className="absolute inset-0 bg-[#E32726] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E32726] to-[#FF6B6B] opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/pizzas/pattern.png')" }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#E32726] mb-4">About PizzaHaus</h2>
            <div className="w-24 h-1 bg-[#FFEB3B] mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="space-y-12">
              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Our Story</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  PizzaHaus is owned by Dorothy and Edison. The enterprising couple came from 3rd generation of bread shop owners. In 2014, the couple began to think of innovative ways to increase their income. Relying on their regular bread line was not sufficient to survive. Edison chanced upon a pizza cart. He realized that it would be a great addition to their own bakeshop. Thus, the couple began to experiment and sought feedback from family and friends. Edison intensely experimented with dough preparation while Dorothy searched for the excellent pizza sauce and toppings. By January 2015, the first take-out counter near BMC Hospital opened. Three months after, another branch opened in Panganiban Drive. The couple now has grown to 21 company-owned stores in the Bicol Region.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Purpose</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide our customers with affordable and delicious foods without sacrificing the quality and taste.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Mission</h3>
                </div>
                <ul className="list-none text-gray-700 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    To build long-term relationships with our customers and provide exceptional customer services by pursuing business through innovation and advanced technology.
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    To provide employment and opportunity for a better standard of living to our employees.
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="space-y-12">
              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Vision</h3>
                </div>
                <ul className="list-none text-gray-700 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    To provide quality products exceeding the expectations of our customers.
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    To become the top of mind for a place, go to pizza of every family.
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Core Values</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We treat our stakeholders with respect through business ethics, integrity, creativity, and innovation.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Goals</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Regional Expansion builds a good reputation for every family and becomes a key player in the food industry market.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Franchise Success Story */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src="/img/franchise-now.png"
                  alt="Pizza Haus Franchise"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold text-[#E32726] mb-6">Your Success Story Starts Here</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Join the rapidly growing Pizza Haus family and be part of our success story. With locations across multiple regions, we're expanding our reach to bring delicious, affordable pizzas to more communities.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#E32726] mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#E32726] mb-2">Full Dine-in Store</h3>
                <p className="text-gray-600">40-45 sqm space requirement</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#FFEB3B] shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#E32726] mb-2">Take-out Counter</h3>
                <p className="text-gray-600">15-20 sqm space requirement</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Locations Marquee */}
      <section className="py-12 bg-[#E32726] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white">Our Growing Network</h2>
          <p className="text-[#FFEB3B]">Now serving in multiple locations</p>
        </motion.div>
        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {[...locations, ...locations].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex-none bg-white/10 px-8 py-4 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white text-xl font-bold whitespace-nowrap">{location}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            href="/locations"
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 overflow-hidden bg-white text-[#E32726] hover:text-white"
          >
            <span className="relative z-10">View All Locations</span>
            <div className="absolute inset-0 bg-[#FFEB3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </motion.div>
      </section>

      {/* Why Franchise Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold text-center text-[#E32726] mb-16">Why Franchise with Pizza Haus?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-[#FFEB3B] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-[#E32726] mb-4 group-hover:text-[#FF6B6B] transition-colors duration-300">Proven Business Model</h3>
              <p className="text-gray-600 text-center">
                Our successful operations across multiple locations demonstrate the strength of our business model.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-[#FFEB3B] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-[#E32726] mb-4 group-hover:text-[#FF6B6B] transition-colors duration-300">Complete Support System</h3>
              <p className="text-gray-600 text-center">
                From site selection to staff training, we provide comprehensive support to ensure your success.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-[#FFEB3B] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-[#E32726] mb-4 group-hover:text-[#FF6B6B] transition-colors duration-300">Quick ROI</h3>
              <p className="text-gray-600 text-center">
                With our affordable franchise packages and strong market demand, achieve faster return on investment.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Franchise CTA */}
      <section className="py-20 bg-gradient-to-r from-[#E32726] to-[#FF6B6B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/pizzas/pattern.png')" }}></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            Join Pizza Haus today and be part of our growing success. Contact us to learn more about franchise opportunities in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/franchise" 
              className="group relative inline-flex items-center justify-center px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 overflow-hidden bg-[#FFEB3B] text-[#E32726] hover:text-white"
            >
              <span className="relative z-10">Apply for Franchise</span>
              <div className="absolute inset-0 bg-[#E32726] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <a 
              href="mailto:pizzahaus.naga@gmail.com"
              className="group relative inline-flex items-center justify-center px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 overflow-hidden bg-white text-[#E32726] hover:text-white"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-[#FFEB3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#E32726] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>PizzahausPH © 2021. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 