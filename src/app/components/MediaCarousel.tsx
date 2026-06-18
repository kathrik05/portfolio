import { useState, useRef, useEffect, UIEvent, MouseEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type CarouselMedia = {
  type: 'video' | 'image';
  src: string;
};

export function MediaCarousel({ media }: { media: CarouselMedia[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      setActiveIndex(index);
      
      const children = Array.from(containerRef.current.children) as HTMLElement[];
      const targetChild = children[index];
      if (targetChild) {
        isProgrammaticScroll.current = true;
        containerRef.current.scrollTo({ left: targetChild.offsetLeft - 16, behavior: 'smooth' });
        
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 800);
      }
    }
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (isProgrammaticScroll.current) return;

    const container = e.currentTarget;
    const children = Array.from(container.children) as HTMLElement[];
    const currentScrollLeft = container.scrollLeft;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    children.forEach((child, index) => {
      const distance = Math.abs((child.offsetLeft - 16) - currentScrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollPrev = () => {
    const nextIndex = activeIndex === 0 ? media.length - 1 : activeIndex - 1;
    scrollTo(nextIndex);
  };

  const scrollNext = () => {
    const nextIndex = activeIndex === media.length - 1 ? 0 : activeIndex + 1;
    scrollTo(nextIndex);
  };

  // Dragging logic
  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2; // scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      className="flex flex-col gap-4 w-full relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-2 top-[calc(50%-16px)] -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-[#333333] hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-2 top-[calc(50%-16px)] -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-[#333333] hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex w-full gap-4 overflow-x-auto scroll-pl-4 bg-[#d3d3d3] border border-gray-100 shadow-inner relative px-4 py-4 ${
          isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {media.map((item, index) => (
          <div key={index} className="w-[80%] md:w-[85%] aspect-[16/10] flex-shrink-0 snap-start flex items-center justify-center overflow-hidden">
            {item.type === 'video' ? (
              <video 
                src={item.src} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
              />
            ) : (
              <img 
                src={item.src} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Visual Cue / Dots vertically below */}
      <div className="flex items-center justify-center gap-2">
        {media.map((_, index) => (
          <button 
            key={index} 
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeIndex ? 'bg-[#333333]' : 'bg-[#D9D9D9] hover:bg-[#a0a0a0]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
