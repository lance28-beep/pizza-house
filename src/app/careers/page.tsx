'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const jobOpenings = [
  {
    title: "Delivery Assistant",
    location: "Naga Area",
    requirements: [
      "Biodata / Resume with Latest Photo",
      "Police / NBI Clearance",
      "Barangay Clearance",
      "High School Graduate or College Level"
    ],
    image: "/img/careers/delivery-assistant.png",
  },
  {
    title: "Baker",
    location: "Naga City Area",
    requirements: [
      "Biodata / Resume with Latest Photo",
      "Police / NBI Clearance",
      "Barangay Clearance",
      "High School Graduate or College Level"
    ],
    additionalQualifications: [
      "with EXPERIENCE",
      "Willing to render overtime",
      "Physical and Mentally fit"
    ],
    image: "/img/careers/baker.png",
  },
  {
    title: "Service Crew",
    location: "Naga Area",
    requirements: [
      "Biodata / Resume with Latest Photo",
      "Police / NBI Clearance",
      "Barangay Clearance",
      "High School Graduate or College Level"
    ],
    image: "/img/careers/service-crew.png",
  }
];

const contactInfo = {
  email: "pizzahaus.naga@gmail.com",
  phone: "0995-599-4071",
  dropoff: "any Pizza Haus Branch near you."
};

const benefits = [
  {
    title: "Growth Opportunities",
    description: "We believe in promoting from within and providing opportunities for career advancement.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    )
  },
  {
    title: "Supportive Team",
    description: "Work with a friendly and supportive team that treats you like family.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    )
  },
  {
    title: "Competitive Benefits",
    description: "Enjoy competitive compensation and benefits package.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    )
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const JobCard = ({ job, index }: { job: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
  >
    <div className="relative h-64">
      <Image
        src={job.image}
        alt={job.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFEB3B] transition-colors duration-300">{job.title}</h3>
        <p className="text-[#FFEB3B] font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {job.location}
        </p>
      </div>
    </div>

    <div className="p-6 space-y-6">
      {job.additionalQualifications && (
        <div>
          <h4 className="text-lg font-bold text-[#E32726] mb-3">Additional Qualifications</h4>
          <ul className="space-y-2">
            {job.additionalQualifications.map((qual: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-[#FFEB3B] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{qual}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="text-lg font-bold text-[#E32726] mb-3">Requirements</h4>
        <ul className="space-y-2">
          {job.requirements.map((req: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-[#FFEB3B] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-lg font-bold text-[#E32726] mb-3">How to Apply</h4>
        <p className="text-gray-700 mb-4">Email your application and documents to:</p>
        <a 
          href={`mailto:${contactInfo.email}`}
          className="text-[#E32726] hover:text-[#FF6B6B] transition-colors duration-300 flex items-center mb-2 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {contactInfo.email}
        </a>
        <p className="text-gray-700 mt-4">or DROP a copy at {contactInfo.dropoff}</p>
      </div>
    </div>
  </motion.div>
);

const BenefitCard = ({ benefit, index }: { benefit: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center group hover:bg-[#E32726] transition-all duration-500 hover:scale-105"
  >
    <div className="w-16 h-16 bg-[#FFEB3B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {benefit.icon}
      </svg>
    </div>
    <h3 className="text-xl font-bold text-[#E32726] mb-4 group-hover:text-white transition-colors duration-300">{benefit.title}</h3>
    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
      {benefit.description}
    </p>
  </motion.div>
);

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E32726] to-[#B71C1C]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: "url('/pizzas/pattern.png')" }}></div>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
            <svg className="absolute right-0 top-0 h-full w-1/2 text-[#FFEB3B] transform translate-x-1/4 -translate-y-1/4" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="absolute left-0 bottom-0 h-full w-1/2 text-[#4CAF50] transform -translate-x-1/4 translate-y-1/4 opacity-70" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        </div>
        
        <motion.div 
          {...fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10 w-full"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="bg-white/20 backdrop-blur-sm text-white text-xl font-bold tracking-wider uppercase px-8 py-2 rounded-full shadow-lg border border-white/30">
                JOIN OUR TEAM
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Grow Your Career with
              <div className="mt-2 inline-block relative">
                <span className="text-[#FFEB3B]">Pizza</span>
                <span className="text-[#4CAF50]">Haus</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full"></div>
              </div>
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Be part of our growing family and help us serve delicious pizzas to more communities.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-[#E32726]">Current</span>{" "}
              <span className="text-[#4CAF50]">Openings</span>
            </h2>
            <div className="w-32 h-1.5 bg-[#FFEB3B] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <JobCard key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-[#E32726]">Why Join</span>{" "}
              <span className="text-[#4CAF50]">Pizza Haus</span>?
            </h2>
            <div className="w-32 h-1.5 bg-[#FFEB3B] mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Join our growing family and be part of a team that values excellence, growth, and passion for great food.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#E32726] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <a href="https://www.facebook.com/pizzahaus.ph" className="text-lg font-medium hover:text-[#FFEB3B] transition-colors duration-300">Facebook</a>
            <a href="https://www.instagram.com/pizzahausbicol" className="text-lg font-medium hover:text-[#4CAF50] transition-colors duration-300">Instagram</a>
            <a href={`mailto:${contactInfo.email}`} className="text-lg font-medium hover:text-[#FFEB3B] transition-colors duration-300">Email</a>
            <a href={`tel:${contactInfo.phone}`} className="text-lg font-medium hover:text-[#4CAF50] transition-colors duration-300">Call Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 