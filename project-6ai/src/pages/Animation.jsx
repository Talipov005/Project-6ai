import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
    y: 100, // Начинаем снизу
    scale: 0.95,
  },
  enter: {
    opacity: 1,
    y: 0, // Плавно поднимаем до нормального положения
    scale: 1,
  },
};

const AnimatedLayout = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <motion.div
      style={{
        minWidth: '100%',
      }}
      initial="hidden"
      animate={hasAnimated ? "enter" : "hidden"}
      variants={variants}
      transition={{
        type: 'spring',
        stiffness: 50,
        mass: 1.5,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
