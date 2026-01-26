import { motion } from "framer-motion";

export function HexagonalGrid({ className = '' }) {
  const hexagons = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i % 4) * 25,
    y: Math.floor(i / 4) * 30,
    delay: i * 0.15,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-10 dark:opacity-5" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>
          
          <pattern id="hexPattern" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
            <polygon
              points="10,0 20,5 20,12.32 10,17.32 0,12.32 0,5"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        
        <rect x="0" y="0" width="100" height="100" fill="url(#hexPattern)" />
        
        {hexagons.map((hex) => (
          <motion.g key={hex.id}>
            <motion.polygon
              points={`${hex.x + 5},${hex.y} ${hex.x + 10},${hex.y + 2.5} ${hex.x + 10},${hex.y + 7.5} ${hex.x + 5},${hex.y + 10} ${hex.x},${hex.y + 7.5} ${hex.x},${hex.y + 2.5}`}
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                delay: hex.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
