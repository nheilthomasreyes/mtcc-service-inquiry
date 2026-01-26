import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export function DNAHelix() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* DNA Helix Structure */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        
        {/* DNA Double Helix */}
        {[...Array(20)].map((_, i) => {
          const y = (i / 20) * 100;
          const x1 = 30 + Math.sin((i / 20) * Math.PI * 4) * 15;
          const x2 = 70 - Math.sin((i / 20) * Math.PI * 4) * 15;
          
          return (
            <g key={i}>
              <motion.circle
                cx={x1}
                cy={y}
                r="1.5"
                fill="url(#dnaGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
              <motion.circle
                cx={x2}
                cy={y}
                r="1.5"
                fill="url(#dnaGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 3,
                  delay: i * 0.1 + 0.5,
                  repeat: Infinity,
                }}
              />
              <motion.line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="url(#dnaGradient)"
                strokeWidth="0.3"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Floating Molecular Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: 'radial-gradient(circle, rgba(0,212,255,0.8) 0%, rgba(124,58,237,0.4) 100%)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Molecular Bonds */}
      <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const cx = 50 + Math.cos(angle) * 20;
          const cy = 50 + Math.sin(angle) * 20;
          
          return (
            <g key={i}>
              <motion.circle
                cx={cx}
                cy={cy}
                r="2"
                fill="none"
                stroke="url(#dnaGradient)"
                strokeWidth="0.5"
                animate={{
                  r: [2, 3, 2],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
              <motion.line
                x1="50"
                y1="50"
                x2={cx}
                y2={cy}
                stroke="url(#dnaGradient)"
                strokeWidth="0.3"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
