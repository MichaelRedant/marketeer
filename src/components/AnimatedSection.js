import React from 'react';
import { motion } from 'framer-motion';

function AnimatedSection({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }} // Animatie wordt opnieuw geactiveerd bij scrollen
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
