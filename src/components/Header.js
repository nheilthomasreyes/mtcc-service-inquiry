import { Moon, Sun } from 'lucide-react';
import { motion } from "framer-motion";
import logo from "../assets/MTCC_LOGO.png";


export function Header({ darkMode, toggleDarkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-900/80 dark:via-purple-900/80 dark:to-teal-900/80 backdrop-blur-lg shadow-lg transition-colors duration-300 border-b border-cyan-300/30 dark:border-cyan-400/20"
    >
      {/* Glowing top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-teal-400"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-4 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={scrollToTop}
        >
          <div className="relative">
            <img src={logo} alt="MTCC Logo" className="w-12 h-12 md:w-14 md:h-14 relative z-10" />
            
            {/* Pulsing glow behind logo */}
            <motion.div
              className="absolute inset-0 bg-white/30 rounded-full blur-md"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
          <div>
            <h1 className="text-white text-xl md:text-2xl drop-shadow-lg">
              MTCC
            </h1>
            <p className="text-cyan-100 text-xs md:text-sm">
              Material Testing and Calibration Center
            </p>
          </div>
        </motion.div>

        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors border border-white/30 relative overflow-hidden group"
          aria-label="Toggle dark mode"
        >
          {/* Animated gradient background on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          />
          
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-300 relative z-10 drop-shadow-lg" />
          ) : (
            <Moon className="w-6 h-6 text-cyan-100 relative z-10 drop-shadow-lg" />
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}
