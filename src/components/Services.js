import { motion } from "framer-motion";
import { SquareActivity, FlaskConical, Gauge, Microscope, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { ServiceModal } from './ServiceModal';
import { HexagonalGrid } from './HexagonalGrid';

const services = [
  {
    id: 'calibration',
    title: 'Calibration',
    icon: Gauge,
    description: 'Precision calibration services for temperature, pressure, electrical, and dimensional equipment',
    color: 'from-cyan-500 to-blue-500',
    bgLight: 'from-cyan-50 to-blue-50',
    glowColor: 'rgba(0,212,255,0.4)',
  },
  {
    id: 'material-testing',
    title: 'Material Testing',
    icon: FlaskConical,
    description: 'Comprehensive material testing including moisture, hardness, tensile strength, and UV light analysis',
    color: 'from-purple-500 to-pink-500',
    bgLight: 'from-purple-50 to-pink-50',
    glowColor: 'rgba(124,58,237,0.4)',
  },
  {
    id: 'research',
    title: 'FTIR Analysis',
    icon: SquareActivity,
    description: 'identify, quantify, and characterize organic and inorganic materials by measuring infrared light absorption to produce molecular fingerprints',
    color: 'from-teal-500 to-emerald-500',
    bgLight: 'from-teal-50 to-emerald-50',
    glowColor: 'rgba(16,185,129,0.4)',
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-cyan-50/30 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Hexagonal Grid */}
        <HexagonalGrid />
        
        {/* Floating molecular particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full blur-xl"
            style={{
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(0,212,255,0.2), transparent)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(124,58,237,0.2), transparent)'
                : 'radial-gradient(circle, rgba(16,185,129,0.2), transparent)',
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-300 dark:via-purple-300 dark:to-teal-300 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive testing, calibration, and research services tailored to meet industry standards and academic excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.03 }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 border-transparent hover:border-purple-300/50 dark:hover:border-purple-400/30 relative">
                    {/* Glowing effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: `0 0 40px ${service.glowColor}`,
                      }}
                    />
                    
                    <motion.div
                      className={`h-40 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      {/* Hexagonal pattern overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                          <pattern id={`hexPattern-${service.id}`} x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
                            <polygon
                              points="10,0 20,5 20,12.32 10,17.32 0,12.32 0,5"
                              fill="none"
                              stroke="white"
                              strokeWidth="0.5"
                            />
                          </pattern>
                          <rect x="0" y="0" width="100" height="100" fill={`url(#hexPattern-${service.id})`} />
                        </svg>
                      </div>
                      
                      {/* Molecular bonds animation */}
                      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                        {[...Array(3)].map((_, i) => {
                          const angle = (i / 3) * Math.PI * 2;
                          const cx = 50 + Math.cos(angle) * 20;
                          const cy = 50 + Math.sin(angle) * 20;
                          
                          return (
                            <g key={i}>
                              <motion.circle
                                cx={cx}
                                cy={cy}
                                r="2"
                                fill="white"
                                animate={{
                                  r: [2, 3, 2],
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.3 + index * 0.1,
                                  repeat: Infinity,
                                }}
                              />
                              <motion.line
                                x1="50"
                                y1="50"
                                x2={cx}
                                y2={cy}
                                stroke="white"
                                strokeWidth="1"
                                animate={{
                                  opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.3 + index * 0.1,
                                  repeat: Infinity,
                                }}
                              />
                            </g>
                          );
                        })}
                      </svg>
                      
                      <motion.div
                        className="relative z-10"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-20 h-20 text-white drop-shadow-lg" />
                        
                        {/* Pulsing glow around icon */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          <div className="w-20 h-20 bg-white rounded-full blur-xl" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    
                    <div className="p-6 relative">
                      {/* Subtle hexagon watermark */}
                      <div className="absolute top-4 right-4 opacity-5">
                        <svg width="60" height="60" viewBox="0 0 100 100">
                          <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl mb-3 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent relative z-10">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 relative z-10">
                        {service.description}
                      </p>
                      <motion.div
                        className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent group-hover:gap-4 transition-all relative z-10"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Details</span>
                        <span className="text-lg">→</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need more information about our services?
            </p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us Today</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-purple-500 to-cyan-500"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ServiceModal
        serviceId={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
