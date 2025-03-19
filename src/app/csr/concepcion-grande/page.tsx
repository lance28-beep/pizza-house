'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import SocialShare from "@/components/SocialShare";
import { getBlogImages, getRelatedStories, blogInfo } from '@/utils/getImages';
import ImageGallery from '@/components/ImageGallery';

export default function ConceptionGrandePage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const folder = 'concepcion-grande';
  const images = getBlogImages(folder);
  const relatedStories = getRelatedStories(folder);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={images[0]}
          alt="Barangay Concepcion Grande Support"
          fill
          className="object-cover"
        />
      </div>

      {/* Title and Date */}
      <h1 className="text-4xl font-bold mb-4">{blogInfo[folder].title}</h1>
      <p className="text-gray-600 mb-8">{blogInfo[folder].date}</p>

      {/* Content Section */}
      <div className="space-y-8">
        {/* Author Info */}
        <div className="flex items-center space-x-4">
          <Image
            src="/pizzas/pizzaHouseLogo.png"
            alt="PizzaHaus Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">PizzaHaus</p>
            <p className="text-gray-600">Corporate Social Responsibility Team</p>
          </div>
        </div>

        {/* Main Content */}
        <div className={`space-y-4 ${isExpanded ? '' : 'line-clamp-4'}`}>
          <p>
            On December 15, 2020, PizzaHaus extended its community support to Barangay Concepcion Grande in Naga City. 
            This initiative was part of our ongoing commitment to help communities affected by the COVID-19 pandemic.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Key Support Areas</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Distribution of food packages to 150 families</li>
            <li>Provision of essential medical supplies</li>
            <li>Support for local small businesses</li>
            <li>Educational assistance for students</li>
            <li>Mental health support programs</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {images.slice(1).map((image, index) => (
              <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Support Initiative ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-6">Impact Overview</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>150+ families received direct assistance</li>
            <li>90% coverage of target beneficiaries</li>
            <li>3 months of sustained support</li>
            <li>20 local businesses supported</li>
          </ul>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>

        {/* Related Stories */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedStories.map((story) => (
              <Link
                key={story.folder}
                href={`/csr/${story.folder}`}
                className="group"
              >
                <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={getBlogImages(story.folder)[0] || '/pizzas/pizzaHouseLogo.png'}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-red-600">{story.title}</h3>
                <p className="text-gray-600">{story.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Social Share */}
      <div className="fixed bottom-8 right-8">
        <SocialShare
          title={blogInfo[folder].title}
          url={typeof window !== 'undefined' ? window.location.href : ''}
          description="On December 15, 2020, PizzaHaus extended its community support to Barangay Concepcion Grande in Naga City. This initiative was part of our ongoing commitment to help communities affected by the COVID-19 pandemic."
          image={images[0]}
        />
      </div>
    </div>
  );
} 