import { motion } from "framer-motion";
import { HexagonalGrid } from "./HexagonalGrid";


export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-600 via-purple-700 to-teal-700 dark:from-cyan-900/90 dark:via-purple-900/90 dark:to-teal-900/90 py-12 transition-colors duration-300 border-t-2 border-cyan-400/50 dark:border-cyan-400/30 relative overflow-hidden">
      {/* Hexagonal Grid */}
      <HexagonalGrid className="opacity-10" />
      
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
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
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl mb-4 drop-shadow-lg">MTCC</h3>
            <p className="text-cyan-50 text-sm leading-relaxed">
              Material Testing and Calibration Center - Premiere BatStateU Facility 
              for Material Testing, Research, and Development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white text-xl mb-4 drop-shadow-lg">Quick Links</h3>
            <ul className="space-y-2 text-cyan-50 text-sm">
              <li>
                <motion.a 
                  href="#services" 
                  className="hover:text-white transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  → Services
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#vision" 
                  className="hover:text-white transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  → Vision & Mission
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact" 
                  className="hover:text-white transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  → Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white text-xl mb-4 drop-shadow-lg">Contact</h3>
            <div className="text-cyan-50 text-sm space-y-2">
              <p>IF STEER Hub Building</p>
              <p>Batangas State University TNEU</p>
              <p>Alangilan, Batangas City</p>
              <p className="mt-4">
                <a 
                  href="mailto:mtcc@g.batstate-u.edu.ph" 
                  className="hover:text-white transition-colors bg-gradient-to-r from-cyan-200 to-white bg-clip-text hover:from-white hover:to-white"
                >
                  mtcc@g.batstate-u.edu.ph
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-cyan-300/30 pt-8 text-center text-cyan-100 text-sm"
        >
          <p className="drop-shadow">© 2026 Material Testing and Calibration Center. All rights reserved.</p>
          <p className="mt-2 drop-shadow">Batangas State University - The National Engineering University</p>
        </motion.div>
      </div>
    </footer>
  );
}
