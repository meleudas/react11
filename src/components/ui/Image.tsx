import React from 'react';
import { motion } from 'framer-motion'; 

interface ImageProps {
  className?: string;
}

const Image: React.FC<ImageProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      className={`relative bg-gray-300 ${className}`}
    >
      <div className="w-full h-full" />
    </motion.div>
  );
};

export default Image;