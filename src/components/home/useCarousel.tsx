import { useState } from "react";

export const useCarousel = <T,>(items: T[]) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const selectNewImage = (items: T[], next = true) => {
      const condition = next
        ? currentIndex < items.length - 1
        : currentIndex > 0;
      const nextIndex = next
        ? condition
          ? currentIndex + 1
          : 0
        : condition
        ? currentIndex - 1
        : items.length - 1;
      setCurrentIndex(nextIndex);
    };
  
    const previous = () => {
      selectNewImage(items, false);
    };
  
    const next = () => {
      selectNewImage(items);
    };

    const currentItem = () => items[currentIndex];

    return { currentIndex, previous, next, currentItem}
}