'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const FranchiseMarquee = () => {
  const images = [
    '/franchiseStore/image.png',
    '/franchiseStore/img1.png',
    '/franchiseStore/img2.png',
    '/franchiseStore/img3.png',
    '/franchiseStore/img4.png',
    '/franchiseStore/img5.png',
    '/franchiseStore/img6.png',
    '/franchiseStore/img7.png',
    '/franchiseStore/img8.png',
    '/franchiseStore/img9.png',
    '/franchiseStore/img10.png',
    '/franchiseStore/img11.png',
    '/franchiseStore/img12.png',
    '/franchiseStore/img13.png',
    '/franchiseStore/img14.png',
    '/franchiseStore/img15.png',
  ];

  return (
    <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm py-12">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* First set of images */}
        {images.map((image, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 w-[300px] h-[200px] relative rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt={`Franchise Store ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
        
        {/* Duplicate set of images for seamless loop */}
        {images.map((image, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 w-[300px] h-[200px] relative rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt={`Franchise Store ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FranchiseMarquee; 