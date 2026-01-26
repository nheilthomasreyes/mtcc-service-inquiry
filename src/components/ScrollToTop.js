import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-br from-cyan-500 via-purple-500 to-teal-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all border-2 border-white/30 backdrop-blur-sm relative overflow-hidden group"
          aria-label="Scroll to top"
        >
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"
          />
          
          <ArrowUp className="w-6 h-6 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
