import { motion } from "framer-motion";
import { DNAHelix } from './DNAHelix';
import { HexagonalGrid } from "./HexagonalGrid";


export function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-purple-50 to-teal-50 dark:from-[#0a1628] dark:via-[#1a1a3e] dark:to-[#0d2818] transition-colors duration-300">
      {/* DNA Helix Background */}
      <DNAHelix />
      
      {/* Hexagonal Grid */}
      <HexagonalGrid />

      {/* Animated molecular background pattern */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,212,255,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Bio-tech glowing orbs */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: `${60 + Math.random() * 100}px`,
            height: `${60 + Math.random() * 100}px`,
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(0,212,255,0.3), transparent)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(124,58,237,0.3), transparent)'
              : 'radial-gradient(circle, rgba(16,185,129,0.3), transparent)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        > */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
          >
            {/* <div className="inline-block p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-200/20 dark:border-cyan-400/20 relative overflow-hidden"> */}
              {/* Glowing border effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-teal-400/20 rounded-3xl blur-xl" />
              
              <motion.h2
                className="relative text-6xl md:text-8xl bg-gradient-to-r from-cyan-400 via-purple-500 to-teal-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: 'linear' 
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                MTCC
              </motion.h2> */}
              
              {/* Pulsing glow */}
              {/* <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-3xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div> */}

          <h3 className="text-3xl md:text-6xl pb-3 pt-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-300 dark:via-purple-300 dark:to-teal-300 bg-clip-text text-transparent mb-6 px-4">
  Material Testing and Calibration Center
</h3>
          
          <motion.div
            className="mb-8 space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto px-4">
              Premiere BatStateU Facility for Material Testing, Research, and Development
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 italic">
              "Leading Innovations, Transforming Lives, Building the Nation"
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative biotech elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/20 dark:bg-cyan-300/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 dark:bg-purple-300/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-teal-400/20 dark:bg-teal-300/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>
    </section>
  );
}
