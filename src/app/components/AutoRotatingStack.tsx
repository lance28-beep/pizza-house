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
  ...props
}: AutoRotatingStackProps) {
  const [currentCards, setCurrentCards] = useState(cardsData);

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

  useEffect(() => {
    setCurrentCards(cardsData);
  }, [cardsData]);

  return (
    <Stack
      {...props}
      cardsData={currentCards}
    />
  );
} 