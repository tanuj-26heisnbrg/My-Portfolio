import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperCustom.css';

const Certifications = () => {
  return (
    <div>
        <>
      <motion.div
        id='certifications'
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
        Certifications
      </motion.div>

      <div className="w-4/5 max-w-7xl mx-auto mt-10 px-4 relative">
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
          <SwiperSlide>
            <Card
              bgColor="bg-violet-950"
              heading="NPTEL DBMS"
              imageSrc="./npteldbms.jpg"
             
              buttonText="View"
              buttonLink="./npteldbms.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              bgColor="bg-violet-950"
              heading="Oracle Cloud Data Management"
              imageSrc="./oraclecouddm.jpg"
             
              buttonText="View"
              buttonLink="./oraclecouddm.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              bgColor="bg-violet-950"
              heading="Microsoft Azure Cloud"
              imageSrc="./microsoft azure.jpg"
            
              buttonText="View "
              buttonLink="./microsoft azure.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              bgColor="bg-violet-950"
              heading="IBM SQL & RDBMS"
              imageSrc="./ibmsqlrdbms.jpg"
              
              buttonText="View"
              buttonLink="./tanuj_sql.pdf"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
    </div>
  )
}

export default Certifications
