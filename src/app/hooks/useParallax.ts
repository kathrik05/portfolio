import { useState, useEffect } from "react";
import { useScroll, useTransform, useReducedMotion, MotionValue } from "motion/react";

/**
 * Custom hook to create a smooth, GPU-accelerated parallax effect.
 * It maps the scroll progress of the target element to a Y offset.
 * Automatically disables parallax on mobile (< 768px) and for users requesting reduced motion.
 * 
 * @param ref React ref for the target element that triggers the scroll progress
 * @param distance The pixel offset amount (e.g. 50 will map from -50 to 50)
 * @returns A MotionValue<number> mapped to the vertical scroll progress
 */
export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  distance: number = 50
): MotionValue<number> {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Check window width on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll position of the element
  // "start end" = when the top of the element hits the bottom of the viewport
  // "end start" = when the bottom of the element hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0 to 1) to the vertical distance (-distance to distance)
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  // If user prefers reduced motion or is on mobile, return 0 (no parallax)
  const isParallaxDisabled = prefersReducedMotion || isMobile;

  // We have to return a MotionValue. If disabled, we just use useTransform to always output 0.
  const zeroTransform = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return isParallaxDisabled ? zeroTransform : y;
}
