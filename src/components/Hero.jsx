// src/components/Hero.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { kazi, bwVan, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      {/* Desktop background */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwVan}
          alt="background"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      {/* Mobile background */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex items-start gap-6`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          {/* Constrain text container width so it stays over the white area */}
          <div className="flex-1 max-w-[600px]">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I’m{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                  text-eerieBlack text-[50px] font-mova
                  font-extrabold uppercase"
              >
                Kazi
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              A Computer Science major aspiring to be a cybersecurity specialist and an IT Compliance professional.
            </p>
          </div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Profile image */}
        <div>

          <img
            className="absolute bottom-0
                      2xl:ml-[75vw] lg:ml-[80vw] xmd:ml-[65vw] md:ml-[75vw] sm:ml-[65vw] ml-[55vw]
                      xl:h-[80vh] md:h-[55vh] sm:h-[50vh]"
            src={kazi}
            alt="kazi"
          />

        </div>
      </section>
    </>
  );
};

export default Hero;
