import React from 'react'
import {motion} from "framer-motion"
import Spline from '@splinetool/react-spline';
import ScrollingWindow from './ScrollingWindow';

const HeroSection = () => {
  return (
<section className="min-h-screen bg-gradient-to-b from-violet-900 to-black 
  flex xl:flex-row flex-col-reverse items-center justify-between 
  lg:px-24 md:px-12 px-6 pt-10 pb-16 relative overflow-hidden">
  
  {/* Left Section */}
  <div className="z-40 xl:mb-0 mb-10 text-center xl:text-left">
    
    {/* Heading */}
    <motion.h1 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 25,
        delay: 1.3,
        duration: 1.5,
      }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-bold z-10 mb-4 text-white"
    >
      Hey Human!<br />I'm Tanuj Kumar Yadav,
    </motion.h1>

    {/* Subheading */}
    <motion.h2
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 25,
        delay: 1.5,
        duration: 1.5,
      }}
      className="text-base sm:text-lg md:text-xl font-sans font-bold italic text-purple-300"
    >
      The Mind Behind The Code. Also known as – “Heisenberg”.
    </motion.h2>

    <br />

    {/* Paragraph */}
    <motion.h3
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 25,
        delay: 1.8,
        duration: 1.5,
      }}
      className="text-sm sm:text-base md:text-lg font-poppins text-purple-200 max-w-3xl mx-auto xl:mx-0 leading-relaxed"
    >
      Exploring the worlds of Web Development, Game Development, and Data Structures & Algorithms — with equal passion for all three. From building smooth,
      responsive interfaces to designing interactive game mechanics and solving complex logical problems, every project is a new opportunity to mix creativity with code. Whether it's crafting user-first designs or optimizing algorithmic solutions, the goal remains the same: to build, learn, and grow through code.
    </motion.h3>
   
  
  </div>

  {/* Right Content: Scrolling Window - Stick to Far Right */}
<div className="z-40 xl:w-1/2 w-full mt-12 xl:mt-0 flex justify-end">
  <ScrollingWindow />
</div>

</section>

  )
}

export default HeroSection
