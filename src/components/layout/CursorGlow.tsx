import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const SIZE = 288;

export function CursorGlow() {
  const reducedMotion = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer && !reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[55] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        width: SIZE,
        height: SIZE,
        background: 'radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)'
      }}
      aria-hidden="true" />);


}