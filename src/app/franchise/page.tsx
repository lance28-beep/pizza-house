'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function FranchisePage() {
  const [selectedPackage, setSelectedPackage] = useState<'takeout' | 'fulldine'>('takeout');
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E32726] via-[#E32726] to-yellow-400">
      {/* Floating Apply Now Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a
          href="#cta"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-yellow-400 text-white rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
        >
          <div className="text-center">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <span className="text-xs font-bold">Apply</span>
          </div>
        </motion.a>
      </div>

      {/* Enhanced Hero Section */}
      <div id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10" />
        <Image
          src="/images/franchise-hero.jpg"
          alt="Pizza Haus Franchise"
          fill
          className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-30 z-20 animate-pulse" />
        <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-12 relative"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform -rotate-6" />
            <Image
              src="/pizzas/pizzaHouseLogo.png"
              alt="Pizza Haus Logo"
              width={220}
              height={220}
              className="mx-auto drop-shadow-2xl"
            />
          </motion.div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Your Success Story <br />
              <span className="text-yellow-400">Starts with Pizza Haus</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center space-y-6"
            >
              <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
                Join the leading pizza brand in Bicol and be part of our growing success story with our proven business model
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-lg text-white/90">
                {[
                  { icon: "🏆", text: "20+ Successful Branches" },
                  { icon: "⭐", text: "95% Success Rate" },
                  { icon: "💰", text: "ROI in 12-18 Months" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (idx * 0.1) }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-2xl">{stat.icon}</span>
                    <span>{stat.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
            >
              <Link
                href="#packages"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#E32726] text-white rounded-full font-semibold overflow-hidden transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#E32726] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  View Our Packages
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <motion.a
                href="tel:09163482693"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Talk to Us
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Why Franchise Section */}
      <section id="why" className="py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div 
            variants={fadeIn}
            className="text-center mb-20"
          >
            <span className="text-yellow-400 text-lg font-semibold mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Franchise with Pizza Haus?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join a successful brand that combines proven experience with innovative support systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Proven Business Model",
                description: "Join a successful brand with years of experience and a proven track record in the pizza industry.",
                icon: "🏆",
                stats: ["95% Success Rate", "20+ Branches", "12-18 Months ROI"]
              },
              {
                title: "Comprehensive Support",
                description: "Get full training, operational support, and marketing assistance to ensure your success.",
                icon: "🤝",
                stats: ["Full Training", "Marketing Support", "Ongoing Guidance"]
              },
              {
                title: "Strong Brand Recognition",
                description: "Benefit from our established brand presence and loyal customer base in the Bicol region.",
                icon: "⭐",
                stats: ["Leading Brand", "Loyal Customers", "Regional Success"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-white/20 overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E32726] to-yellow-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative text-6xl bg-gradient-to-br from-[#E32726] to-yellow-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#E32726] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 group-hover:text-gray-900 transition-colors">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-3 mt-6 pt-6 border-t border-gray-100">
                    {item.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-600 group-hover:text-[#E32726] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Package Offers Section */}
      <div id="packages" className="py-24 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-black/5" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative"
        >
          <motion.div variants={fadeIn} className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              FRANCHISE PACKAGES
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Choose the perfect package that suits your business goals and location
            </p>

            {/* Package Toggle - Enhanced with 3D effect and vh units */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="inline-flex flex-col sm:flex-row items-center p-1.5 bg-white/10 backdrop-blur-md rounded-2xl mb-6 min-h-[80px] w-full max-w-md">
                {[
                  { type: 'takeout', title: 'Take-Out Package', image: '/images/Take-Out_Counter_Package-img.png', price: '325K' },
                  { type: 'fulldine', title: 'Full Dine Package', image: '/images/Full_Dine_Package-img.png', price: '410K' }
                ].map((pkg) => (
                  <motion.div
                    key={pkg.type}
                    className={`relative cursor-pointer h-full flex items-center w-full ${selectedPackage === pkg.type ? '' : 'opacity-80'}`}
                    onClick={() => setSelectedPackage(pkg.type as 'takeout' | 'fulldine')}
                  >
                    <motion.div
                      className={`relative z-10 flex items-center px-4 sm:px-6 py-3 rounded-xl transition-all h-full w-full ${
                        selectedPackage === pkg.type 
                          ? 'bg-white shadow-lg' 
                          : 'hover:bg-white/5'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative w-12 h-12 mr-4">
                        <div className={`absolute inset-0 rounded-full ${
                          selectedPackage === pkg.type
                            ? 'bg-gradient-to-br from-[#E32726] to-yellow-400'
                            : 'bg-white/10'
                        }`} />
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          width={48}
                          height={48}
                          className="rounded-full object-cover relative z-10 p-0.5"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className={`font-semibold transition-colors ${
                          selectedPackage === pkg.type ? 'text-gray-900' : 'text-white'
                        }`}>
                          {pkg.title}
                        </h4>
                        <div className={`text-sm transition-colors ${
                          selectedPackage === pkg.type ? 'text-[#E32726]' : 'text-white/70'
                        }`}>
                          ₱{pkg.price}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Package Type Description */}
              <motion.div
                key={selectedPackage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center px-4"
              >
                <p className="text-white/90 text-base md:text-lg max-w-2xl">
                  {selectedPackage === 'takeout'
                    ? 'Perfect for entrepreneurs looking to start with a compact, efficient setup focused on takeaway and delivery services.'
                    : 'Ideal for those wanting to offer a complete dining experience with comfortable seating and enhanced ambiance.'}
                </p>
                
                {/* Compare Packages Button */}
                <motion.button
                  onClick={() => setShowComparison(!showComparison)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {showComparison ? 'Hide Comparison' : 'Compare Packages'}
                </motion.button>
              </motion.div>
              
              {/* Package Comparison Table */}
              {showComparison && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full max-w-4xl mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 overflow-x-auto"
                >
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="py-4 px-4 text-left">Feature</th>
                        <th className="py-4 px-4 text-center">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E32726] to-yellow-400 flex items-center justify-center mb-2">
                              <Image
                                src="/images/Take-Out_Counter_Package-img.png"
                                alt="Take-Out Package"
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                            </div>
                            <span>Take-Out Package</span>
                            <span className="text-yellow-400 font-bold">₱325,000</span>
                          </div>
                        </th>
                        <th className="py-4 px-4 text-center">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8CC63F] to-[#A8E063] flex items-center justify-center mb-2">
                              <Image
                                src="/images/Full_Dine_Package-img.png"
                                alt="Full Dine Package"
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                            </div>
                            <span>Full Dine Package</span>
                            <span className="text-green-400 font-bold">₱410,000</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Space Requirement", takeout: "15-20 sqm", fulldine: "35-40 sqm" },
                        { feature: "Kitchen Equipment", takeout: "Basic Setup", fulldine: "Full Setup" },
                        { feature: "Seating Capacity", takeout: "Limited/None", fulldine: "15-20 people" },
                        { feature: "Signage", takeout: "Standard", fulldine: "Premium LED" },
                        { feature: "POS System", takeout: "Basic", fulldine: "Advanced" },
                        { feature: "Training", takeout: "1 week", fulldine: "2 weeks" },
                        { feature: "Marketing Support", takeout: "Standard", fulldine: "Enhanced" },
                        { feature: "ROI Timeline", takeout: "12-15 months", fulldine: "15-18 months" }
                      ].map((item, idx) => (
                        <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                          <td className="py-3 px-4 font-medium">{item.feature}</td>
                          <td className="py-3 px-4 text-center">{item.takeout}</td>
                          <td className="py-3 px-4 text-center">{item.fulldine}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div className="mt-6 text-center">
                    <p className="text-white/80 text-sm mb-4">
                      Not sure which package is right for you? Our franchise consultants can help you decide.
                    </p>
                    <motion.a
                      href="tel:09163482693"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-white text-[#E32726] rounded-full font-medium hover:bg-white/90 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Talk to a Consultant
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Package Details - Split Layout with vh units */}
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={selectedPackage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden h-auto md:h-[80vh] min-h-[500px] md:min-h-[600px]"
            >
              <div className="grid md:grid-cols-2 gap-0 h-full">
                {/* Left Column - Package Information */}
                <div className="p-6 md:p-8 lg:p-12 overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
                  <div className="md:sticky md:top-8">
                    <div className={`inline-flex items-center px-6 py-2 rounded-full text-white mb-8 ${
                      selectedPackage === 'takeout' 
                        ? 'bg-gradient-to-r from-[#E32726] to-[#FF6B6B]' 
                        : 'bg-gradient-to-r from-[#8CC63F] to-[#A8E063]'
                    }`}>
                      <span className="text-sm font-semibold">
                        {selectedPackage === 'takeout' ? 'TAKE-OUT COUNTER' : 'FULL DINE EXPERIENCE'}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {selectedPackage === 'takeout' ? 'Take-Out Counter Package' : 'Full Dine Package'}
                    </h2>
                    
                    <div className="flex items-center mb-8">
                      <div className={`text-4xl md:text-5xl font-bold ${
                        selectedPackage === 'takeout' ? 'text-[#E32726]' : 'text-[#8CC63F]'
                      }`}>
                        ₱{selectedPackage === 'takeout' ? '325,000' : '410,000'}
                      </div>
                      <div className="ml-4">
                        <div className="text-gray-600">Initial Investment</div>
                        <div className="text-sm text-gray-500">VAT Inclusive</div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Space Requirements */}
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className={`p-3 rounded-xl ${
                          selectedPackage === 'takeout' ? 'bg-red-100' : 'bg-green-100'
                        }`}>
                          <svg className={`w-6 h-6 ${
                            selectedPackage === 'takeout' ? 'text-[#E32726]' : 'text-[#8CC63F]'
                          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-gray-600">Space Requirement</div>
                          <div className="text-2xl font-bold text-gray-900">
                            {selectedPackage === 'takeout' ? '15-20' : '35-40'} sqm
                          </div>
                        </div>
                      </div>

                      {/* Package Features */}
                      <div className="space-y-4">
                        {(selectedPackage === 'takeout' ? [
                          { title: "Complete Equipment", items: ["Gas Operated Oven", "Electric Oven", "Pizza Making Tools"] },
                          { title: "Branding Package", items: ["Interior Logo Signage", "Marketing Materials", "Uniforms (3 sets)"] },
                          { title: "Business Setup", items: ["POS System", "Initial Inventory", "Training & Support"] }
                        ] : [
                          { title: "Premium Setup", items: ["Full Kitchen Equipment", "Dining Furniture", "Neon Signages"] },
                          { title: "Enhanced Branding", items: ["Premium Signage", "Extended Marketing Kit", "Staff Uniforms"] },
                          { title: "Full Support", items: ["Advanced POS System", "Priority Support", "Extended Training"] }
                        ]).map((category, idx) => (
                          <motion.div
                            key={idx}
                            className="relative"
                            onHoverStart={() => setHoveredFeature(category.title)}
                            onHoverEnd={() => setHoveredFeature(null)}
                          >
                            <div className={`p-4 rounded-xl transition-colors ${
                              hoveredFeature === category.title ? 'bg-gray-50' : ''
                            }`}>
                              <h3 className="font-bold text-gray-900 mb-2">{category.title}</h3>
                              <div className="space-y-2">
                                {category.items.map((item, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <svg className={`w-4 h-4 ${
                                      selectedPackage === 'takeout' ? 'text-[#E32726]' : 'text-[#8CC63F]'
                                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg transition-all ${
                          selectedPackage === 'takeout'
                            ? 'bg-gradient-to-r from-[#E32726] to-[#FF6B6B]'
                            : 'bg-gradient-to-r from-[#8CC63F] to-[#A8E063]'
                        }`}
                      >
                        Get Started Now
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual Showcase */}
                <div className="relative h-[40vh] md:h-full">
                  <div className="sticky top-0 h-full overflow-hidden">
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 opacity-10 ${
                      selectedPackage === 'takeout'
                        ? 'bg-gradient-to-br from-red-600 to-red-300'
                        : 'bg-gradient-to-br from-green-600 to-green-300'
                    }`} />

                    {/* Main Image Container */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0">
                        <Image
                          src={selectedPackage === 'takeout'
                            ? "/images/Take-Out_Counter_Package-img.png"
                            : "/images/Full_Dine_Package-img.png"}
                          alt={selectedPackage === 'takeout' ? "Take-Out Counter" : "Full Dine Store"}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          {/* Feature Highlights */}
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            {[
                              { icon: "🏪", label: selectedPackage === 'takeout' ? "Quick Setup" : "Full Restaurant" },
                              { icon: "⚡", label: selectedPackage === 'takeout' ? "Fast ROI" : "Premium Experience" },
                              { icon: "📈", label: "High Profit Potential" }
                            ].map((feature, idx) => (
                              <motion.div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                                whileHover={{ scale: 1.05 }}
                              >
                                <div className="text-2xl mb-2">{feature.icon}</div>
                                <div className="text-white text-sm">{feature.label}</div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Package Stats */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                              <div className="text-white/80 text-sm">Investment Return</div>
                              <div className="text-white font-bold text-xl">12-18 months</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                              <div className="text-white/80 text-sm">Success Rate</div>
                              <div className="text-white font-bold text-xl">95%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to know about starting your Pizza Haus franchise
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is the initial investment required?",
                answer: "The initial investment ranges from ₱325,000 for a Take-Out Counter Package to ₱410,000 for a Full Dine Package. These amounts are inclusive of VAT and cover equipment, initial inventory, training, and marketing materials."
              },
              {
                question: "How long does it take to open a franchise after application?",
                answer: "The typical timeline from application approval to store opening is 2-3 months. This includes location assessment, equipment setup, staff training, and pre-opening marketing activities."
              },
              {
                question: "What ongoing fees will I need to pay?",
                answer: "Franchisees pay a 5% royalty fee on monthly gross sales and contribute 2% to the marketing fund. These fees help maintain brand standards and fund regional marketing campaigns that benefit all locations."
              },
              {
                question: "What support do you provide to franchisees?",
                answer: "We provide comprehensive support including initial training (1-2 weeks depending on package), operational guidance, marketing assistance, supply chain management, and ongoing business development support."
              },
              {
                question: "What is the typical return on investment period?",
                answer: "Most franchisees achieve ROI within 12-18 months, depending on location, package type, and local market conditions. Our business model is designed for sustainable profitability."
              },
              {
                question: "Can I own multiple franchise locations?",
                answer: "Yes, we encourage multi-unit ownership for successful franchisees. After demonstrating success with your first location, you'll have priority access to additional territories and special incentives for multiple locations."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-white font-medium text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-white transition-transform ${
                      expandedFaq === idx ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === idx ? 'auto' : 0,
                    opacity: expandedFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-white/80">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/90 mb-6">
              Still have questions? We're here to help you every step of the way.
            </p>
            <motion.a
              href="mailto:franchise@pizzahaus.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Our Franchise Team
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Take the first step towards owning your Pizza Haus franchise today. 
            Our team is ready to guide you through the process and help you achieve your entrepreneurial dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="tel:09163482693"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#E32726] rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
            >
              <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us Now
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-yellow-400 text-white rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                </svg>
                Send Inquiry
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 