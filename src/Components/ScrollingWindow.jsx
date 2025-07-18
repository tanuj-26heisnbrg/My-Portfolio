import React from 'react';
import { motion } from 'framer-motion';
import AboutMe from './AboutMe';

const ScrollingWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 25,
        delay: 2.1,
        duration: 1.5,
      }}
   className="w-full xl:w-[30rem] h-150 overflow-y-auto
bg-violet-800 bg-opacity-30 p-4 rounded-xl text-purple-200
font-poppins text-sm leading-relaxed shadow-lg
scrollbar-hide"

    >
        <h1 className='font-sans italic font-bold text-2xl'> Fun Facts About Me !!</h1>
        <br/>
     <AboutMe/>
    </motion.div>
  );
};

export default ScrollingWindow;


