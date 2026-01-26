import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Award, Users, FlaskConical, TrendingUp } from 'lucide-react';
import { HexagonalGrid } from "./HexagonalGrid";

const stats = [
  {
    icon: Award,
    value: 1000,
    suffix: '+',
    label: 'Calibrations Completed',
    color: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-400',
  },
  {
    icon: FlaskConical,
    value: 500,
    suffix: '+',
    label: 'Material Tests',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-400',
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Trained Personnel',
    color: 'from-teal-500 to-emerald-500',
    textColor: 'text-teal-400',
  },
  {
    icon: TrendingUp,
    value: 50,
    suffix: '+',
    label: 'Research Projects',
    color: 'from-indigo-500 to-purple-500',
    textColor: 'text-indigo-400',
  },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-600 via-purple-600 to-teal-600 dark:from-cyan-900/50 dark:via-purple-900/50 dark:to-teal-900/50 transition-colors duration-300 relative overflow-hidden">
      {/* Hexagonal Grid */}
      <HexagonalGrid className="opacity-20" />
      
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 rounded-full blur-xl"
          style={{
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(255,255,255,0.2), transparent)'
              : 'radial-gradient(circle, rgba(0,212,255,0.2), transparent)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
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
          <h2 className="text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
            Our Impact
          </h2>
          <p className="text-lg text-cyan-50 max-w-2xl mx-auto">
            Delivering excellence in testing, calibration, and research services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30 hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Gradient border glow on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl blur-xl`}
                />
                
                {/* Hexagon watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <svg width="150" height="150" viewBox="0 0 100 100">
                    <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="white" strokeWidth="1" />
                  </svg>
                </div>
                
                <motion.div
                  className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                  
                  {/* Pulsing glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full blur-md`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
                
                <div className={`relative text-4xl mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent font-bold`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="relative text-white text-sm font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
