import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <>
      <motion.div id='about'   //id of about
       initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2,
            duration: 1.5,
          }}
      className='text-4xl italic font-bold font-serif justify-items-center mt-0 mb-6 text-center'>
        <h1>About Me</h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-6 md:px-12 lg:px-24 mb-[10px]">
        
        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2,
            duration: 1.5,
          }}
         className="w-full h-full flex flex-col md:w-1/2 lg:w-1/3 bg-violet-800 bg-opacity-30 p-6 rounded-xl text-purple-200 text-sm leading-relaxed shadow-lg font-sans"
        >
          <h2 className="text-xl mb-4 text-purple-100 italic font-bold">Programming Skills</h2>
          <ul className="list-disc list-inside space-y-2 font-poppins flex-grow">
            <li>Languages : C++ | JavaScript | SQL</li>
            <li>Frameworks : ReactJS | TailwindCSS </li>
            <li>Databases: Sql - MySql | Nosql - MongoDB</li>
            <li>Game Development - Unreal Engine(C++)</li>
            <li>Web Development - MERN</li>
            <li>Data Structures and Algorithms (DSA)</li>
            <li>Basics understandings of Python & Java </li>
          </ul>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2.3,
            duration: 1.5,
          }}
          className="w-full h-full flex flex-col md:w-1/2 lg:w-1/3 bg-violet-800 bg-opacity-30 p-6 rounded-xl text-purple-200 text-sm leading-relaxed shadow-lg font-sans"
        >
          <h2 className="text-xl mb-4 text-purple-100 italic font-bold">Certifications</h2>
          <ul className="list-disc list-inside space-y-2 font-poppins flex-grow">
            <li>NPTEL DBMS (IIT Kharagpur)</li>
            <li>Oracle Cloud Data Management</li>
            <li>Cisco JavaScript Essential</li>
            <li>Microsoft Azure Certification(Future Ready Talent)</li>
            <li>HackerRank Problem Solving (Basic)</li>
            <li>HackerRank Java (Basic)</li>
            <li>(for more details visit my <a className=' underline hover:text-violet-700
          dark:hover:text-violet-600 transition-colors duration-300' href='https://www.linkedin.com/in/tanuj-kumar-yadav-061264288/'>
            LinkedIn Profile</a>.)</li>
          </ul>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2.6,
            duration: 1.5,
          }}
          className="w-full h-full flex flex-col md:w-1/2 lg:w-1/3 bg-violet-800 bg-opacity-30 p-6 rounded-xl text-purple-200 text-sm leading-relaxed shadow-lg font-sans"
        >
          <h2 className="text-xl mb-4 text-purple-100 italic font-bold">Relevant Subjects & CS Fundamentals</h2>
          <ul className="list-disc list-inside space-y-2 font-poppins flex-grow">
            <li>Object Oriented Programming With C++</li>
            <li>Data Structure & Algorithms With C++</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>Database Management System (DBMS)</li>
            <li>Software Engineering</li>
            <li>Cloud Management (Basics) </li>
          </ul>
        </motion.section>

      </div>



      
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-6 md:px-12 lg:px-24 mb-[10px]">
        
        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2,
            duration: 1.5,
          }}
          className="w-full h-full flex flex-col md:w-1/2 lg:w-1/3 bg-violet-800 bg-opacity-30 p-6 rounded-xl text-purple-200 text-sm leading-relaxed shadow-lg font-sans"
        >
          <h2 className="text-xl mb-4 text-purple-100 italic font-bold">Additional Skills</h2>
          <ul className="list-disc list-inside space-y-2 font-poppins flex-grow">
            <li>Video Editing - DaVinci Resolve</li>
            <li>Photo Editing - Photoshop/PicsArt</li>
            <li>Digital Art - AutoDesk SketchBook</li>
            <li>Figma UI Design</li>
            <li>Communication Skills & Other Soft Skills</li>
            <li>AI Tools</li>
          </ul>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2.3,
            duration: 1.5,
          }}
        className="w-full h-full flex flex-col md:w-1/2 lg:w-1/3 bg-violet-800 bg-opacity-30 p-6 rounded-xl text-purple-200 text-sm leading-relaxed shadow-lg font-sans"
        >
          <h2 className="text-xl mb-4 text-purple-100 italic font-bold">Skills In Progress</h2>
          <ul className="list-disc list-inside space-y-2 font-poppins flex-grow">
            <li>Mastering MERN</li>
            <li>Exploring Unreal Engine With Blueprints.</li>
            <li>React Native & APIs</li>
            <li>Exploring Artificial Intelligence and Cyber Security</li>
            <li>Advanced C++ For Game Development</li>
            <li>Advanced DSA</li>
          </ul>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2.6,
            duration: 1.5,
          }}
         className="w-full h-full flex flex-col md:w-1/2 lg:w-1/3 bg-violet-800 bg-opacity-30 p-6 rounded-xl text-purple-200 text-sm leading-relaxed shadow-lg font-sans"
        >
          <h2 className="text-xl mb-4 text-purple-100 italic font-bold">Future Aspirations</h2>
          <ul className="list-disc list-inside space-y-2 font-poppins  flex-grow">
            <li>Learn System design , Cloud and </li>
            <li>Indie Game Development with Unreal Engine</li>
            <li>To become a Great Web and Game Developer </li>
            <li>Start A Youtube Channel</li>
            <li>Getting to the CP level of <a className='underline' href='https://en.wikipedia.org/wiki/Gennady_Korotkevich'>Gennady Korotkevich</a></li>
           <li>Start my own Tech Company </li>
          </ul>
        </motion.section>

      </div>
    </>
  );
};

export default Skills;






