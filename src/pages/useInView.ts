import { useState, useEffect, RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement>, threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersecting;
}
