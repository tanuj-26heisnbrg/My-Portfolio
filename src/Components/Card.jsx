// Card.js
import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ bgColor, heading, imageSrc, description, buttonText, buttonLink }) {
  return (
    <motion.div
    
       initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2.7,
            duration: 1.5,
          }}
    
    >
    <div className={`rounded-2xl p-5 text-white w-80 shadow-xl ${bgColor}`}>
      <h1 className="text-2xl font-bold font-poppins mb-4">{heading}</h1>
      <img src={imageSrc} alt="Card" className="w-full h-48 object-cover rounded-xl mb-4" />
      <p className="mb-4 font-sans font-semibold">{description}</p>
      <a href={buttonLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-xl hover:scale-105 transition">
          {buttonText}
        </button>
      </a>
    </div>

    </motion.div>
  );
}

