import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, isActive: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isActive || startedRef.current) return;
    startedRef.current = true;

    let animationId: number;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isActive, target, duration]);

  return value;
}