import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import logo from "../assets/MTCC_LOGO.png";
import { DNAHelix } from './DNAHelix';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-cyan-50 via-purple-50 to-teal-50 dark:from-[#0a1628] dark:via-[#1a1a3e] dark:to-[#0d2818] flex items-center justify-center overflow-hidden"
        >
          {/* DNA Helix Background */}
          <DNAHelix />
          
          {/* Glowing orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full blur-2xl"
              style={{
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(0,212,255,0.3), transparent)'
                  : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(124,58,237,0.3), transparent)'
                  : 'radial-gradient(circle, rgba(16,185,129,0.3), transparent)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
          
          <div className="text-center relative z-10">
            <motion.div
              className="relative inline-block mb-8"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={logo}
                alt="MTCC Logo"
                className="w-32 h-32 mx-auto relative z-10"
              />
              
              {/* Pulsing glow behind logo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-teal-400 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
            
            <motion.h2
              className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-300 dark:via-purple-300 dark:to-teal-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              MTCC
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Material Testing and Calibration Center
            </motion.p>
            
            {/* Loading bar */}
            <motion.div
              className="mt-8 w-64 h-1 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mx-auto backdrop-blur-sm border border-gray-400/30 dark:border-gray-600/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-teal-500 relative"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                {/* Glowing effect on loading bar */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-sm"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
