import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingElements = () => {
  const { scrollY } = useScroll();
  
  // Different parallax speeds for layered effect
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -50]);
  
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -180]);



  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Grid */}
      <motion.div
        style={{ y: y4 }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent">
          <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="border border-blue-300/20 rounded"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Robux Coins */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 left-10 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-2xl animate-float"
      >
        💎
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center text-xl animate-float"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎮
      </motion.div>

      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-60 left-1/4 w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center text-3xl animate-float"
      >
        ⭐
      </motion.div>

      {/* Additional Floating Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-40 right-10 w-14 h-14 bg-blue-300/20 rounded-full flex items-center justify-center text-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🏆
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-1/3 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-lg animate-float"
      >
        💰
      </motion.div>

      {/* Floating Particles */}
       {Array.from({ length: 20 }).map((_, i) => (
         <motion.div
           key={i}
           className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
           style={{
             y: useTransform(scrollY, [0, 1000], [0, -50 - i * 10]),
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
           }}
           animate={{
             scale: [0, 1, 0],
             opacity: [0, 0.6, 0]
           }}
           transition={{
             duration: 2 + Math.random() * 2,
             delay: Math.random() * 2,
             repeat: Infinity,
             ease: "easeInOut"
           }}
         />
       ))}

      {/* Large Background Shapes */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-1/4 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 -left-20 w-60 h-60 bg-blue-400/5 rounded-full blur-xl"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [0, -45, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        style={{ y: y2, rotate: rotate1 }}
        className="absolute top-1/3 left-1/2 w-8 h-8 border-2 border-blue-400/30 rotate-45"
        animate={{
          borderColor: ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.6)', 'rgba(59, 130, 246, 0.3)']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-500/20 transform rotate-12"
        animate={{
          rotate: [12, 192, 12],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Connecting Lines */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute top-1/2 left-1/4 w-32 h-32 opacity-20"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M10,10 Q50,50 90,10 T90,90"
          stroke="rgb(59, 130, 246)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </div>
  );
};

export default FloatingElements;