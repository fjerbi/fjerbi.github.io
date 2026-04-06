'use client';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
        <Image
          src={images[0]}
          alt={alt}
          fill
          placeholder="blur"
          blurDataURL={blurImageURL}
          className="object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-800">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - screenshot ${currentIndex + 1}`}
            fill
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-contain w-full h-full"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent pointer-events-none" />

      {/* Navigation arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-secondary/80 dark:bg-bg/80 hover:bg-accent hover:text-white transition-all duration-200 shadow-lg"
        aria-label="Previous image"
      >
        <Icon icon="lucide:chevron-left" width={24} height={24} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-secondary/80 dark:bg-bg/80 hover:bg-accent hover:text-white transition-all duration-200 shadow-lg"
        aria-label="Next image"
      >
        <Icon icon="lucide:chevron-right" width={24} height={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-accent w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-bg-secondary/80 dark:bg-bg/80 text-sm font-mono">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
