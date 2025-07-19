// Projects.js
import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const Projects = () => {
  return (
    <>
      <motion.div id='projects'
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 40,
          damping: 25,
          delay: 0.5,
          duration: 1.5,
        }}
        className="text-4xl font-sans italic font-bold text-center mt-10"
      >
        Projects
      </motion.div>

      <div className="w-4/5 max-w-7xl mx-auto mt-10 px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="!pb-10"
        >
          <SwiperSlide >
            <Card
              bgColor="bg-violet-950"
              heading="This Portfolio!"
              imageSrc="./portfolio.png"
              description="Check out the code of this personal portfolio built using REACT, TailwindCSS & Framer Motion."
              buttonText="GitHub Link"
              buttonLink="https://github.com/tanuj-26heisnbrg/My-Portfolio"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              bgColor="bg-violet-950"
              heading="Saarthi: Travel App"
              imageSrc="./website.png"
              description="A smart assistant travle web-app that helps you plan your travels with ease , also has an AI Chatbot as Companion!"
              buttonText="GitHub Link"
              buttonLink="https://github.com/tanuj-26heisnbrg/travel_site-main"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              bgColor="bg-violet-950"
              heading="Dental Oasis"
              imageSrc="./dentition.png"
              description="A Static web app developed and deployed for Microsoft Azure functionalities."
              buttonText="GitHub Link "
              buttonLink="https://github.com/tanuj-26heisnbrg/DENTITION-DENTAL-OASIS-"
            />
          </SwiperSlide>

           <SwiperSlide>
            <Card
              bgColor="bg-violet-950"
              heading="Exam Seating Arrangment System"
              imageSrc="./examseating.png"
              description="A JAVA GUI app to generate seating arrangement plans as per one's need."
              
              buttonText="GitHub Link "
              buttonLink="https://github.com/tanuj-26heisnbrg/Exam-Seating-Arrangement-System"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default Projects;

