"use client";

import { motion } from "framer-motion";
import { FastForward, Rewind } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface CarouselItem {
  id: number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface InfiniteCarouselItem extends Omit<CarouselItem, "id"> {
  id: string | number;
  originalIndex: number;
}

// Create infinite items by triplicating the array
const createInfiniteItems = (
  originalItems: CarouselItem[]
): InfiniteCarouselItem[] => {
  const items: InfiniteCarouselItem[] = [];
  for (let i = 0; i < 3; i++) {
    originalItems.forEach((item, index) => {
      items.push({
        ...item,
        id: `${i}-${item.id}`,
        originalIndex: index,
      });
    });
  }
  return items;
};

const RulerLines = ({
  top = true,
  totalLines = 100,
}: {
  top?: boolean;
  totalLines?: number;
}) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-3";
    let color = "bg-gray-400";

    if (isCenter) {
      height = "h-8";
      color = "bg-gray-900";
    } else if (isFifth) {
      height = "h-4";
      color = "bg-gray-700";
    }

    const positionClass = top ? "" : "bottom-0";

    lines.push(
      <div
        key={i}
        className={`absolute w-0.5 ${height} ${color} ${positionClass}`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }

  return <div className="relative w-full h-8 px-4">{lines}</div>;
};

export function RulerCarousel({
  originalItems,
}: {
  originalItems: CarouselItem[];
}) {
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;

  // Start with the first item (index 0 in the middle set)
  const [activeIndex, setActiveIndex] = useState(itemsPerSet);
  const [isResetting, setIsResetting] = useState(false);
  const previousIndexRef = useRef(itemsPerSet);

  const handleItemClick = (newIndex: number) => {
    if (isResetting) return;

    // Find the original item index
    const targetOriginalIndex = newIndex % itemsPerSet;

    // Find all instances of this item across the 3 copies
    const possibleIndices = [
      targetOriginalIndex,
      targetOriginalIndex + itemsPerSet,
      targetOriginalIndex + itemsPerSet * 2,
    ];

    // Find the closest index to current position
    let closestIndex = possibleIndices[0];
    let smallestDistance = Math.abs(possibleIndices[0] - activeIndex);

    for (const index of possibleIndices) {
      const distance = Math.abs(index - activeIndex);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    }

    previousIndexRef.current = activeIndex;
    setActiveIndex(closestIndex);
  };

  const handlePrevious = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev + 1);
  };

  // Handle infinite scrolling
  useEffect(() => {
    if (isResetting) return;

    // If we're in the first set, jump to the equivalent position in the middle set
    if (activeIndex < itemsPerSet) {
      const timer = setTimeout(() => {
        setIsResetting(true);
        setActiveIndex(activeIndex + itemsPerSet);
        setTimeout(() => setIsResetting(false), 0);
      }, 0);
      return () => clearTimeout(timer);
    }
    // If we're in the last set, jump to the equivalent position in the middle set
    else if (activeIndex >= itemsPerSet * 2) {
      const timer = setTimeout(() => {
        setIsResetting(true);
        setActiveIndex(activeIndex - itemsPerSet);
        setTimeout(() => setIsResetting(false), 0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, itemsPerSet, isResetting]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isResetting) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((prev) => prev - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResetting]);

  // Calculate target position - center the active item
  const centerPosition = 0;
  const targetX = (centerPosition - (activeIndex % itemsPerSet)) * 450;

  // Get current page info
  const currentPage = (activeIndex % itemsPerSet) + 1;
  const totalPages = itemsPerSet;

  // Get active item for description display
  const activeItem = originalItems[activeIndex % itemsPerSet];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-[280px] flex flex-col justify-center relative">
        <div className="flex items-center justify-center">
          <RulerLines top />
        </div>
        <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
          <motion.div
            className="flex items-center gap-[50px]"
            animate={{
              x: isResetting ? targetX : targetX,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1,
                  }
            }
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(index)}
                  className={`flex flex-col items-center justify-center gap-3 whitespace-nowrap cursor-pointer group ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-900 hover:text-[#6dd400]"
                  }`}
                  animate={{
                    scale: isActive ? 1 : 0.7,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }
                  }
                  style={{
                    width: "400px",
                  }}
                >
                  <div
                    className={`text-lg font-bold mb-1 ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-900 group-hover:text-[#6dd400]"
                    }`}
                  >
                    Step {item.originalIndex + 1}
                  </div>
                  {item.icon && (
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.8,
                      }}
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-full border-2 transition-colors ${
                        isActive
                          ? "bg-gray-100 border-gray-900"
                          : "bg-gray-50 border-gray-900 group-hover:border-[#6dd400] group-hover:bg-[#6dd400]/5"
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                  )}
                  <span className="text-lg md:text-xl font-bold">
                    {item.title}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <RulerLines top={false} />
        </div>
      </div>

      {/* Description section */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 text-center max-w-2xl px-4"
      >
        <p className="text-lg text-gray-900 leading-relaxed font-medium">
          {activeItem.description}
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={handlePrevious}
          disabled={isResetting}
          className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all p-2 rounded-full hover:bg-[#6dd400]/10 group"
          aria-label="Previous item"
        >
          <Rewind className="w-6 h-6 text-gray-900 group-hover:text-[#6dd400]" />
        </button>

        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
          <span className="text-base font-bold text-gray-900">
            {currentPage}
          </span>
          <span className="text-base text-gray-500">/</span>
          <span className="text-base font-bold text-gray-900">
            {totalPages}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={isResetting}
          className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all p-2 rounded-full hover:bg-[#6dd400]/10 group"
          aria-label="Next item"
        >
          <FastForward className="w-6 h-6 text-gray-900 group-hover:text-[#6dd400]" />
        </button>
      </div>
    </div>
  );
}
