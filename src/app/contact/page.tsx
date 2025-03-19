'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaUtensils } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      reset();
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#E32726] to-[#B71C1C] text-white py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: "url('/pizzas/pattern.png')" }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Make Your Pizza Dreams Come True</h1>
            <div className="space-y-6">
              <p className="text-lg md:text-xl">
                Have a question about our menu? Want to share your pizza experience? Or maybe you're interested in joining our team?
              </p>
              <p className="text-lg md:text-xl text-yellow-300">
                We're here to serve you the perfect slice of happiness!
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center space-x-2">
                  <FaPhone className="text-yellow-300" />
                  <span>Quick Response</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center space-x-2">
                  <FaClock className="text-yellow-300" />
                  <span>24hr Response Time</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center space-x-2">
                  <FaUtensils className="text-yellow-300" />
                  <span>Customer First</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 order-2 lg:order-1 h-full flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#E32726]">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-grow space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  {...register('name')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring-[#E32726] placeholder:text-gray-400 px-4 py-3"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-[#E32726]">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  {...register('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring-[#E32726] placeholder:text-gray-400 px-4 py-3"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-[#E32726]">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="0916-XXX-XXXX"
                  {...register('phone')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring-[#E32726] placeholder:text-gray-400 px-4 py-3"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-[#E32726]">{errors.phone.message}</p>
                )}
              </div>

              <div className="flex-grow flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you today? Feel free to share your thoughts, questions, or feedback..."
                  {...register('message')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E32726] focus:ring-[#E32726] resize-none flex-grow placeholder:text-gray-400 px-4 py-3"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-[#E32726]">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E32726] text-white py-3 px-6 rounded-md hover:bg-[#B71C1C] focus:outline-none focus:ring-2 focus:ring-[#E32726] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-4"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#E32726]">Contact Info</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-[#E32726] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">0916-348-2693</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaClock className="text-[#E32726] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday to Friday 8:00 am - 4:00 pm</p>
                    <p className="text-gray-500 text-sm">Excluding holidays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-[#E32726] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Lot 6 soriano st. Villa sorabella subdivision<br />
                      Barangay Concepcion Grande, Naga city<br />
                      Camarines Sur 4400
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#E32726]">Find Us</h2>
                <a 
                  href="https://www.google.com/maps/place/Villa+Sorabella+Subdivision/@13.6187883,123.1820163,14z/data=!4m10!1m2!2m1!1sLot+6+soriano+st.+Villa+sorabella+subdivision+Barangay+Concepcion+Grande,+Naga+city+Camarines+Sur+4400!3m6!1s0x33a18d293fffffff:0x3fa8d7504e8d5ba8!8m2!3d13.6187883!4d123.2180652!15sCmZMb3QgNiBzb3JpYW5vIHN0LiBWaWxsYSBzb3JhYmVsbGEgc3ViZGl2aXNpb24gQmFyYW5nYXkgQ29uY2VwY2lvbiBHcmFuZGUsIE5hZ2EgY2l0eSBDYW1hcmluZXMgU3VyIDQ0MDCSARNob3VzaW5nX2RldmVsb3BtZW50!16s%2Fg%2F11txv223kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#E32726] hover:text-[#B71C1C] transition-colors"
                >
                  <span className="mr-2">Open in Google Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8025575247!2d123.2180652!3d13.6187883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a18d293fffffff%3A0x3fa8d7504e8d5ba8!2sVilla%20Sorabella%20Subdivision!5e0!3m2!1sen!2sph!4v1647600000000!5m2!1sen!2sph"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg group-hover:scale-105 transition-transform duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#E32726] text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Located in Villa Sorabella Subdivision</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>5-10 minutes from Naga City Center</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E32726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Free parking available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
