import { motion } from "framer-motion";
import { MapPin, Mail, Facebook, Clock, Building } from 'lucide-react';
import { HexagonalGrid } from './HexagonalGrid';

export function About() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50 via-purple-50/50 to-teal-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Hexagonal Grid */}
      <HexagonalGrid />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 rounded-full blur-xl"
          style={{
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(0,212,255,0.15), transparent)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(124,58,237,0.15), transparent)'
              : 'radial-gradient(circle, rgba(16,185,129,0.15), transparent)',
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
            About MTCC
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for precision testing and calibration services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-cyan-200/30 dark:border-cyan-400/20 relative overflow-hidden">
              {/* Subtle hexagon watermark */}
              <div className="absolute top-4 right-4 opacity-5">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-300 dark:to-purple-300 bg-clip-text text-transparent mb-4">
                Who We Are
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 relative z-10">
                <p className="text-lg leading-relaxed">
                  The <strong className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Material Testing and Calibration Center (MTCC)</strong> is the premiere 
                  BatStateU facility dedicated to material testing, research, and development. 
                  We are committed to providing world-class testing and calibration services 
                  that meet international standards.
                </p>
                <p className="text-lg leading-relaxed">
                  Located at the STEER Hub Building in Batangas State University TNEU, 
                  our state-of-the-art facility is equipped with advanced equipment and 
                  staffed by highly trained professionals dedicated to excellence in every service we provide.
                </p>
                <p className="text-lg leading-relaxed">
                  We support research, industry, and academic needs through comprehensive 
                  testing and calibration services, contributing to the advancement of 
                  science, technology, and innovation in the Philippines.
                </p>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-900/80 dark:via-purple-900/80 dark:to-teal-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white border border-cyan-300/30 dark:border-cyan-400/20 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
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
              
              <h3 className="text-2xl md:text-3xl mb-4 relative z-10 drop-shadow-lg">
                Our Commitment
              </h3>
              <ul className="space-y-3 relative z-10">
                {[
                  'ISO-compliant testing and calibration procedures',
                  'Highly trained and certified technical personnel',
                  'State-of-the-art laboratory equipment',
                  'Fast turnaround times without compromising quality',
                  'Competitive pricing for all services',
                  'Continuous improvement and innovation',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-cyan-200 text-xl">✓</span>
                    <span className="text-white">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200/30 dark:border-purple-400/20">
              <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-300 dark:to-teal-300 bg-clip-text text-transparent mb-6">
                Contact Us
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-cyan-50/50 dark:hover:bg-gray-600/50 transition-colors backdrop-blur-sm border border-transparent hover:border-cyan-200/50 dark:hover:border-cyan-400/30"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      IF STEER Hub Building<br />
                      Batangas State University TNEU<br />
                      Alangilan, Batangas City, Philippines
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50/50 dark:hover:bg-gray-600/50 transition-colors backdrop-blur-sm border border-transparent hover:border-teal-200/50 dark:hover:border-teal-400/30"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <a
                      href="mailto:mtcc@g.batstate-u.edu.ph"
                      className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent hover:underline"
                    >
                      mtcc@g.batstate-u.edu.ph
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50/50 dark:hover:bg-gray-600/50 transition-colors backdrop-blur-sm border border-transparent hover:border-purple-200/50 dark:hover:border-purple-400/30"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Facebook</h4>
                    <a
                      href="https://facebook.com/BatStateUMTCC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:underline"
                    >
                      @BatStateUMTCC
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-indigo-50/50 dark:hover:bg-gray-600/50 transition-colors backdrop-blur-sm border border-transparent hover:border-indigo-200/50 dark:hover:border-indigo-400/30"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office Hours</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: By Appointment
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-br from-cyan-500 via-purple-500 to-teal-500 rounded-2xl p-8 shadow-xl text-white text-center relative overflow-hidden border border-cyan-300/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              
              <div className="relative z-10">
                <Building className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-2xl mb-3 drop-shadow-lg">Ready to Work With Us?</h3>
                <p className="mb-6 text-cyan-50">
                  Get in touch today to discuss your testing and calibration needs
                </p>
                <motion.a
                  href="mailto:mtcc@g.batstate-u.edu.ph"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 bg-white text-purple-600 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Send us an Email
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
