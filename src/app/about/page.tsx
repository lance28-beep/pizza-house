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
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="text-[#FFEB3B] text-base sm:text-xl font-semibold tracking-wider uppercase">Our Story</span>
            </motion.div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              A Family Legacy of <span className="text-[#FFEB3B]">Excellence</span>
            </h1>
            <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
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
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 overflow-hidden bg-white text-[#E32726] hover:text-[#E32726]"
              >
                <span className="relative z-10 group-hover:text-[#E32726]">Read Our Story</span>
                <div className="absolute inset-0 bg-[#FFEB3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 border-2 border-[#FFEB3B] rounded-full transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
              <Link 
                href="/franchise"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 overflow-hidden bg-[#FFEB3B] text-[#E32726] hover:text-[#E32726]"
              >
                <span className="relative z-10 group-hover:text-[#E32726]">Join Our Family</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 border-2 border-white rounded-full transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
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
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E32726] mb-3 sm:mb-4">About PizzaHaus</h2>
            <div className="w-20 sm:w-24 h-1 bg-[#FFEB3B] mx-auto"></div>
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
                className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Our Story</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  PizzaHaus is owned by Dorothy and Edison. The enterprising couple came from 3rd generation of bread shop owners. In 2014, the couple began to think of innovative ways to increase their income. Relying on their regular bread line was not sufficient to survive. Edison chanced upon a pizza cart. He realized that it would be a great addition to their own bakeshop. Thus, the couple began to experiment and sought feedback from family and friends. Edison intensely experimented with dough preparation while Dorothy searched for the excellent pizza sauce and toppings. By January 2015, the first take-out counter near BMC Hospital opened. Three months after, another branch opened in Panganiban Drive. The couple now has grown to 21 company-owned stores in the Bicol Region.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Purpose</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To provide our customers with affordable and delicious foods without sacrificing the quality and taste.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Mission</h3>
                </div>
                <ul className="list-none text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    To build long-term relationships with our customers and provide exceptional customer services by pursuing business through innovation and advanced technology.
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Vision</h3>
                </div>
                <ul className="list-none text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    To provide quality products exceeding the expectations of our customers.
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FFEB3B] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    To become the top of mind for a place, go to pizza of every family.
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Core Values</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We treat our stakeholders with respect through business ethics, integrity, creativity, and innovation.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEB3B] rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] group-hover:text-[#FF6B6B] transition-colors duration-300">Goals</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Regional Expansion builds a good reputation for every family and becomes a key player in the food industry market.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Social Responsibility Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E32726] mb-3 sm:mb-4">Corporate Social Responsibility</h2>
            <div className="w-20 sm:w-24 h-1 bg-[#FFEB3B] mx-auto"></div>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 sm:mb-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#E32726] mb-2 sm:mb-4">Sharing is Caring</h3>
              <p className="text-lg sm:text-xl text-gray-600">Sharing the Blessing for Everyone</p>
            </motion.div>

            {/* CSR Stories Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 sm:space-x-8 animate-scroll">
                {/* COVID-19 Employee Support */}
                <Link href="/csr/employee-support" className="flex-none w-[280px] sm:w-[400px] bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-36 sm:h-48">
                    <Image
                      src="/social/employee-support/img1.png"
                      alt="Employee Support during COVID-19"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#E32726] mb-2">Employee Support During COVID-19</h4>
                    <p className="text-sm sm:text-base text-gray-600">April 9, 2020 - Supporting our employees and their families during the pandemic lockdown by providing rice and grocery packs.</p>
                  </div>
                </Link>

                {/* Concepcion Grande Support */}
                <Link href="/csr/concepcion-grande" className="flex-none w-[280px] sm:w-[400px] bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-36 sm:h-48">
                    <Image
                      src="/social/concepcion-grande/img1.png"
                      alt="Concepcion Grande Support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#E32726] mb-2">Barangay Concepcion Grande Support</h4>
                    <p className="text-sm sm:text-base text-gray-600">December 2020 - Distributing grocery packs to residents in need during the COVID-19 pandemic.</p>
                  </div>
                </Link>

                {/* Panicuason Support */}
                <Link href="/csr/panicuason" className="flex-none w-[280px] sm:w-[400px] bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-36 sm:h-48">
                    <Image
                      src="/social/panicuason/img1.png"
                      alt="Panicuason Support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#E32726] mb-2">Barangay Panicuason Support</h4>
                    <p className="text-sm sm:text-base text-gray-600">December 15, 2020 - Providing grocery packs to families in Panicuason, Naga City.</p>
                  </div>
                </Link>

                {/* 2021 Outreach Program */}
                <Link href="/csr/outreach-2021" className="flex-none w-[280px] sm:w-[400px] bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-36 sm:h-48">
                    <Image
                      src="/social/outreach-2021/img1.png"
                      alt="2021 Outreach Program"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#E32726] mb-2">2021 Outreach Program</h4>
                    <p className="text-sm sm:text-base text-gray-600">December 2021 - Distributing 300 boxes of pizza to indigent families in Barangay Concepcion Grande.</p>
                  </div>
                </Link>

                {/* Lion's Club Cooperation */}
                <Link href="/csr/lions-club" className="flex-none w-[280px] sm:w-[400px] bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-36 sm:h-48">
                    <Image
                      src="/social/lions-club/img1.png"
                      alt="Lion's Club Cooperation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#E32726] mb-2">Lion's Club Cooperation</h4>
                    <p className="text-sm sm:text-base text-gray-600">March 20, 2022 - In partnership with Lion's Club of Naga City, distributing 50 boxes of pizza to families in Barangay Panicuason.</p>
                  </div>
                </Link>
              </div>
            </div>
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
              className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-xl font-bold transition-all duration-300 overflow-hidden bg-[#FFEB3B] text-[#E32726] hover:text-white"
            >
              <span className="relative z-10">Apply for Franchise</span>
              <div className="absolute inset-0 bg-[#E32726] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <a 
              href="mailto:pizzahaus.naga@gmail.com"
              className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-xl font-bold transition-all duration-300 overflow-hidden bg-white text-[#E32726] hover:text-white"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-[#FFEB3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Growing Network</h2>
          <p className="text-base sm:text-lg text-[#FFEB3B]">Now serving in multiple locations</p>
        </motion.div>
        <div className="relative">
          <div className="flex space-x-4 sm:space-x-8 animate-scroll">
            {[...locations, ...locations].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex-none bg-white/10 px-4 sm:px-8 py-2 sm:py-4 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white text-base sm:text-xl font-bold whitespace-nowrap">{location}</span>
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
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 overflow-hidden bg-white text-[#E32726] hover:text-white"
          >
            <span className="relative z-10">View All Locations</span>
            <div className="absolute inset-0 bg-[#FFEB3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
} 