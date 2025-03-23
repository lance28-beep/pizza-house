"use client";

import { useEffect, useState } from 'react';
import Stack from './Stack';

interface AutoRotatingStackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  cardsData?: Array<{ id: number; img: string }>;
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
  autoRotateInterval?: number;
}

export default function AutoRotatingStack({
  cardsData = [],
  autoRotateInterval = 5000,
  cardDimensions,
  ...props
}: AutoRotatingStackProps) {
  const [currentCards, setCurrentCards] = useState(cardsData);
  const [dimensions, setDimensions] = useState(cardDimensions);

  // Handle window resize
  useEffect(() => {
    function handleResize() {
      const width = typeof window !== 'undefined' ? 
        window.innerWidth < 640 ? 300 :
        window.innerWidth < 768 ? 400 : 500 : 500;

      const height = typeof window !== 'undefined' ? 
        window.innerWidth < 640 ? 225 :
        window.innerWidth < 768 ? 300 : 400 : 400;

      setDimensions({ width, height });
    }

    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCards((prevCards) => {
        const newCards = [...prevCards];
        const [firstCard] = newCards.splice(0, 1);
        newCards.push(firstCard);
        return newCards;
      });
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotateInterval]);

  // Update cards when cardsData changes
  useEffect(() => {
    setCurrentCards(cardsData);
  }, [cardsData]);

  return (
    <Stack
      {...props}
      cardsData={currentCards}
      cardDimensions={dimensions}
    />
  );
} 