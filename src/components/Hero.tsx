'use client';

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#E32726] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/pizzas/pattern.png')" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-[#FFEB3B]">Deliciously Affordable</span> Pizza
            </h1>
            <p className="text-xl text-white mb-8 max-w-lg">
              Made more accessible for you and your loved ones. Enjoy authentic taste at prices everyone can afford.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/menu" 
                className="bg-[#FFEB3B] text-[#E32726] hover:bg-yellow-400 px-8 py-3 rounded-md text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Order Now</span>
                <span className="absolute top-0 left-0 w-0 h-full bg-white/30 transition-all duration-500 group-hover:w-full -z-0"></span>
              </Link>
              <Link 
                href="/franchise" 
                className="bg-transparent border-2 border-[#FFEB3B] text-[#FFEB3B] hover:bg-[#FFEB3B]/10 px-8 py-3 rounded-md text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Franchise Opportunities
              </Link>
            </div>
            
            {/* Delivery Partners */}
            <div className="mt-8">
              <p className="text-white font-medium">Order through our delivery partners:</p>
              <div className="flex flex-wrap items-center gap-5 mt-2">
                <div className="flex flex-col items-center">
                  <Link href="#" className="rounded-md border-2 border-[#e4006e] hover:border-[#FFEB3B] transition-all duration-300 overflow-hidden group">
                    <div className="bg-[#e4006e] h-[60px] w-[120px] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/deliveryPartners/Food-Panda-new-logo.png" 
                        alt="Foodpanda" 
                        width={120} 
                        height={60} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <span className="text-white text-xs mt-1 font-medium">FoodPanda</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <Link href="#" className="rounded-md border-2 border-[#00b14f] hover:border-[#FFEB3B] transition-all duration-300 overflow-hidden group">
                    <div className="bg-[#00b14f] h-[60px] w-[120px] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/deliveryPartners/pandelivery-new-logo.png" 
                        alt="Pandalivery" 
                        width={120} 
                        height={60} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <span className="text-white text-xs mt-1 font-medium">Pandelivery</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <Link href="#" className="rounded-md border-2 border-[#FF5A44] hover:border-[#FFEB3B] transition-all duration-300 overflow-hidden group">
                    <div className="bg-[#FF5A44] h-[60px] w-[120px] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/deliveryPartners/Nueca-new-logo.png" 
                        alt="Nueco" 
                        width={120} 
                        height={60} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <span className="text-white text-xs mt-1 font-medium">Nueca</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/pizzas/hero-pizza.png"
                alt="Delicious Pizza"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 right-1/4 bg-[#FFEB3B] text-[#E32726] px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12 animate-bounce">
              30% OFF
            </div>
            <div className="absolute bottom-1/4 left-1/4 bg-white text-[#E32726] px-4 py-2 rounded-full font-bold shadow-lg transform -rotate-12 animate-pulse">
              Free Delivery
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 