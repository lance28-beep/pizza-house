'use client';

import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E32726] mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Pizza House was founded in 2010 with a simple mission: to make delicious pizza accessible to everyone. What started as a small family-owned restaurant has grown into a beloved chain with locations across the country.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Maria Rodriguez, learned the art of pizza-making from her Italian grandmother. She combined traditional techniques with innovative flavors to create our signature pizzas that customers have come to love.
            </p>
            <p className="text-gray-700">
              Today, Pizza House continues to be a family-owned business, committed to quality ingredients, exceptional service, and affordable prices.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/pizzas/about-story.jpg"
              alt="Pizza House founder"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E32726] mb-6">Our Mission & Values</h2>
            <p className="text-gray-700 mb-4">
              At Pizza House, our mission is to bring people together through delicious, affordable food. We believe that everyone deserves to enjoy a great pizza without breaking the bank.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#E32726]">
                <h3 className="font-bold text-[#E32726] mb-2">Quality</h3>
                <p className="text-gray-700 text-sm">We use only the freshest ingredients and traditional techniques.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#E32726]">
                <h3 className="font-bold text-[#E32726] mb-2">Affordability</h3>
                <p className="text-gray-700 text-sm">Great food shouldn't cost a fortune. We keep our prices fair.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#E32726]">
                <h3 className="font-bold text-[#E32726] mb-2">Community</h3>
                <p className="text-gray-700 text-sm">We're committed to giving back to the communities we serve.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#E32726]">
                <h3 className="font-bold text-[#E32726] mb-2">Innovation</h3>
                <p className="text-gray-700 text-sm">We constantly explore new flavors while respecting tradition.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/pizzas/about-mission.jpg"
              alt="Pizza House team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Growth & Franchise */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E32726] mb-6">Join Our Family</h2>
            <p className="text-gray-700 mb-4">
              Pizza House is rapidly expanding, and we're looking for passionate entrepreneurs to join our franchise family. With our proven business model, comprehensive training, and ongoing support, you can be part of our success story.
            </p>
            <p className="text-gray-700 mb-6">
              Our franchisees benefit from our established brand, efficient operations, and marketing support. We work closely with each franchise owner to ensure their success.
            </p>
            <a 
              href="/franchise" 
              className="inline-block bg-[#E32726] text-white hover:bg-red-700 px-6 py-3 rounded-md text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn About Franchising
            </a>
          </div>
          <div className="md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/pizzas/about-franchise.jpg"
              alt="Pizza House franchise"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 