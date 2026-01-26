import { motion } from "framer-motion";
import { Eye, Target, Heart, Shield, Award, Sparkles } from 'lucide-react';
import { HexagonalGrid } from "./HexagonalGrid";

const coreValues = [
  { name: 'Patriotism', icon: Shield, color: 'from-cyan-500 to-cyan-600' },
  { name: 'Integrity', icon: Award, color: 'from-blue-500 to-purple-600' },
  { name: 'Excellence', icon: Sparkles, color: 'from-purple-500 to-purple-600' },
  { name: 'Service', icon: Heart, color: 'from-teal-500 to-emerald-600' },
  { name: 'Resilience', icon: Target, color: 'from-purple-500 to-pink-600' },
  { name: 'Faith', icon: Eye, color: 'from-indigo-500 to-purple-600' },
];

export function VisionMission() {
  return (
    <section id="vision" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Hexagonal Grid Background */}
      <HexagonalGrid />
      
      {/* Decorative cellular background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-purple-50/30 to-teal-50/50 dark:from-cyan-900/5 dark:via-purple-900/5 dark:to-teal-900/5" />
      
      {/* Floating molecular elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full blur-2xl"
          style={{
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(0,212,255,0.15), transparent)'
              : 'radial-gradient(circle, rgba(124,58,237,0.15), transparent)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-cyan-100 via-purple-100 to-teal-100 dark:from-gray-700/80 dark:via-purple-900/30 dark:to-cyan-900/30 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-400/20 relative overflow-hidden">
            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-teal-400/10 rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            <motion.div
              className="flex items-center gap-4 mb-6 relative z-10"
              whileHover={{ x: 10 }}
            >
              <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-cyan-300/30 dark:border-cyan-400/30">
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-3xl md:text-5xl bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-300 dark:to-purple-300 bg-clip-text text-transparent">
                VISION
              </h2>
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              A premier national university that develops leaders in the global knowledge economy
            </motion.p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-300 dark:via-purple-300 dark:to-teal-300 bg-clip-text text-transparent mb-4">
              CORE VALUES
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="relative group"
                >
                  <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col items-center justify-center border border-transparent hover:border-purple-300/50 dark:hover:border-purple-400/30 relative overflow-hidden">
                    {/* Hexagon pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>
                    
                    <motion.div
                      className={`relative w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Pulsing glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl blur-md`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>
                    <h3 className="text-base md:text-lg text-gray-800 dark:text-white relative z-10">
                      {value.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quality Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-900/50 dark:via-purple-900/50 dark:to-teal-900/50 rounded-3xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden border border-cyan-300/30 dark:border-cyan-400/20">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
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
                backgroundSize: '30px 30px',
              }}
            />
            
            <motion.div
              className="flex items-center gap-4 mb-6 relative z-10"
              whileHover={{ x: 10 }}
            >
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                <Award className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h2 className="text-3xl md:text-5xl">
                QUALITY POLICY
              </h2>
            </motion.div>
            <motion.div
              className="space-y-4 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
                Batangas State University is committed to provide quality service to all customers and satisfy applicable requirements through continuous improvement of all university processes.
              </p>
              <motion.div
                className="flex items-center gap-3 pt-6 border-t border-white/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-200 italic">
                  Effectivity Date: May 18, 2022 | Revision No.: 03
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
