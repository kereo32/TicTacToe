import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

export default function withAnimate<T>(Component: React.ComponentType<T>, options?: {}) {
  return function WithAnimate(props: T) {
    return (
      <motion.div className="w-full h-screen flex justify-center items-center" {...options}>
        <Component {...props} />
      </motion.div>
    );
  };
}
