import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading &&
      <motion.div
        key="loader"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}>
        
          <motion.div
          className="glass-panel flex h-24 w-24 md:h-32 md:w-32 overflow-hidden items-center justify-center rounded-2xl text-lg font-bold text-accent-light"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/maturinnocent.png" alt="Matur Innocent Joshua " />
              
            </div>
            
          </motion.div>
          <div className="">
            <p className='text-sm font-bold text-accent-light'>Matur Innocent Joshua</p>
          </div>
          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-border">
            <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-accent-light to-accent"
            animate={{ x: ['-120%', '260%'] }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }} />
          
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}