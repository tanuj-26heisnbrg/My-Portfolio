
import { useState } from "react";
import {motion, spring , AnimatePresence} from "framer-motion";
import { FiGithub, FiTwitter , FiLinkedin , FiMenu ,FiX } from "react-icons/fi";


const Header = () => {

    //toggle the menu open/close
   const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

 // state to track if the contact form is open 
 const [ContactFormOpen , setContactFormOpen]= useState(false);
 const openContactForm = ()=> setContactFormOpen(true);
 const closeContactForm =()=> setContactFormOpen(false);


  return (

    <header className="absolute  w-full z-50 
    transition-all duration 300" >

       <div className="container mx-auto px-4 sm:px-6
       lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* logo name */}
         <motion.div 
           initial={{opacity:0 , x:-50}}
           animate={{opacity:1 , x:0}} 
           transition={{
            type:"spring",
            stiffness:100,
            damping:25,
            delay:0.3,
            duration:1.2,
           }}
           className="flex item-center ">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r
             from-gray-500 to-gray-100 
             flex item-center justify-center text-purple-600 italic font-bold text-xl mr-3">
                <a href="https://youtu.be/ilfYnhXD-bE?si=iAd5yQ6T_sExa-kn" target="_blank" rel="noopener noreferrer ">
                   
                    <img src="/My-Portfolio/heisnbrg.jpg" alt="logo" className="rounded-xl h-10 w-10 object-cover" />

                </a>

            </div>

            <span className="text-2xl font-sans font-bold bg-gradient-to-r from-gray-300 to-gray-100
            bg-clip-text italic text-transparent">
                Tanuj Kumar Yadav
            </span>

         </motion.div>

       {/* desktop navigation */}
    <nav className="lg:flex hidden space-x-8 font-bold ">
       {["Home", "About", "Project", "Experience", "Contact"].map((item,index) => (
          
          <motion.a
            key={item}

            initial={{opacity:0 , y:-20}}
            animate={{opacity:1 , y:0}}
            transition={{
              type:"spring",
              stiffness:100 ,
              damping:20,
              delay:0.7 + index *0.2
            }}
            className="relative inline-block text-gray-800 dark:text-gray-200 
            hover:text-violet-600 dark:hover:text-violet-400 font-medium
            transition-colors duration-300 group"
            href="#"
           >
              {item}
              <span className="absolute top-6 left-0 bottom-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>


          ))}
        </nav>

       {/*  Social icons - desktop */}
       <div className="md:flex hidden items-center space-x-5">
                  
                      <motion.a 
                            initial={{opacity:0, scale:0.5}}
                            animate={{opacity:1, scale:1}}
                            transition={{delay:1.3, duration:0.8}}
                            className="text-gray-700 dark:text-gray-300 hover:text-violet-600
                            dark:hover:text-violet-400 transition-colors duration-300 text-sm font-semibold"
                             href="https://leetcode.com/u/tanujyadavtwensixzefo/"     >
                              <img className="h-7 w-7 rounded-sm" src="./LeetCode_Sharing.png"/>
                          
                   </motion.a>


          <motion.a 
           initial={{opacity:0,scale:0.5}}
           animate={{opacity:1 , scale:1}}
           transition={{delay:1.3, duration:0.8}}
          className="text-gray-700 dark:text-gray-300 hover:text-violet-600
          dark:hover:text-violet-400 transition-colors duration-300" href="https://github.com/tanuj-26heisnbrg">

            <FiGithub className="w-5 h-5"/>

         </motion.a>

         <motion.a 
           initial={{opacity:0,scale:0.5}}
           animate={{opacity:1 , scale:1}}
           transition={{delay:1.3, duration:0.8}}
          className="text-gray-700 dark:text-gray-300 hover:text-violet-600
          dark:hover:text-violet-400 transition-colors duration-300" href="https://x.com/drHeisenberg267">

            <FiTwitter className="w-5 h-5"/>

         </motion.a>

           <motion.a 
           initial={{opacity:0,scale:0.5}}
           animate={{opacity:1 , scale:1}}
           transition={{delay:1.3, duration:0.8}}
          className=" text-gray-700 dark:text-gray-300 hover:text-violet-600
          dark:hover:text-violet-400 transition-colors duration-300" href="https://www.linkedin.com/in/tanuj-kumar-yadav-061264288/">

            <FiLinkedin className="w-5 h-5"/>

         </motion.a>

         

         
        
        {/* Hire Me */}
        <motion.button 
        onClick={openContactForm}
        initial={{opacity:0 ,scale:0.8}}
        animate={{opacity:1 , scale:1 }}
        transition={{
            delay:1.6,
            duration:0.8,
            type:"spring",
            stiffness:100,
            damping:15,
        }}
        className="ml-4 px-4 py-4 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700
        font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
            Hire Me!!
        </motion.button>


</div>
            
        {/* mobile menu button */}
   <div className="md:hidden flex items-center">
  <motion.button 
  whileTap={{scale:0.7}}
  onClick={toggleMenu} 
  className="text-gray-800 dark:text-white p-2">
    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
  </motion.button>
</div>

</div>
       

       {/* mobile Menu */}
    <motion.div
    initial={{opacity:0 , height:0}}
    animate={{
        opacity:isOpen ? 1:0,
        height: isOpen? "auto":0,
    }}
    transition={{duration:0.5}}
    className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg 
    px-4 py-5 space-y-5">

        <nav className="flex flex-col space-y-3">
           {["Home", "About", "Project", "Experience", "Contact"].map((item)=>
        (
            <a onClick={toggleMenu} className="text-gray-300 font-medium py-2" key={item} href="">
                {item}
            </a>
        ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
           <div className="flex space-x-5">
             <a href="#">
                <FiGithub className="h-5 w-5 text-gray-300"/>
             </a>

             <a href="#">
                <FiTwitter className="h-5 w-5 text-gray-300"/>
             </a>

             <a href="#">
                <FiLinkedin className="h-5 w-5 text-gray-300"/>
             </a>
           </div>

           <button 
           onClick={openContactForm}
           
           className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r
           from-violet-600 to-violet-400 font-bold">
             Contact Me !!

           </button>
        </div>
    </motion.div>
   
   {/* Contact Form */}
   <AnimatePresence>
   {ContactFormOpen &&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration : 0.5}}
    className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex
    items-center justify-center p-4"
    
    >
        <motion.div 
        initial={{scale:0.8 ,opacity:0 , y:30}}
        animate={{scale:1 , opacity:1 , y:0}}
        exit={{scale:0.8 , opacity:0 , y:30}}
        transition={{
            type:"spring",
            damping:30 ,
            stiffness:200,
            duration:0.4 ,
        }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl 
        w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                    Get In Touch.
                </h1>
                <button onClick={closeContactForm}>
                    <FiX className="w-5 h-5 text-gray-300 font-extrabold"/>
                </button>
            </div>
             {/* input Form */}

           <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium 
                text-gray-300 mb-1">
                    Name
                </label>
                <input 
                   type="text"
                   id="name"
                   placeholder="Your Name"
                   className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 
                   focus:ring-violet-500
                   focus:border-violet-500 bg-gray-700" />
              </div>

               <div>
                <label htmlFor="email" className="block text-sm font-medium 
                text-gray-300 mb-1">
                    E-Mail
                </label>
                <input 
                   type="email"
                   id="email"
                   placeholder="Your E-mail"
                   className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 
                   focus:ring-violet-500
                   focus:border-violet-500 bg-gray-700" />
              </div>

               <div>
                <label htmlFor="message" className="block text-sm font-medium 
                text-gray-300 mb-1">
                    Message
                </label>
                <textarea 
                   rows="4"
                   id="message"
                   placeholder="Say My Name !!---------- (You're Goddamn Right !!)"
                   className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 
                   focus:ring-violet-500
                   focus:border-violet-500 bg-gray-700" />
              </div>
              <motion.button
              type="submit"
              whileHover={{scale:1.03}}
              whileTap={{scale:0.95}}
              className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400
              hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md
              hover:shadow-lg hover:shadow-violet-600/50 border border-gray-600">
                Send the Message
              </motion.button>
           </form>


        </motion.div>



    </motion.div>
   )}
  </AnimatePresence>
   
    </header>
  )
}

export default Header

