// src/components/Projects.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  repoIcon,
  demo,
  index,
  active,
  handleClick,
}) => {
  const SourceIcon = repoIcon || github;
  const isSpecial = name === 'Laughing with Leaves' || name === 'Call Management System';

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-jetLight opacity-50 rounded-[24px]" />

      {/* project image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className={`
              font-extrabold font-beckman uppercase
              w-[200px] h-[30px] whitespace-nowrap
              sm:text-[27px] text-[18px]
              tracking-[1px] absolute z-0
              lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
              leading-none
              ${isSpecial ? 'text-black' : 'text-timberWolf'}
            `}
          >
            {name}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 w-full p-8 flex flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
          {/* source code button */}
          <div className="absolute top-3 right-3">
            <div
              onClick={() => window.open(repo, '_blank')}
              className="bg-night w-10 h-10 sm:w-11 sm:h-11 rounded-full flex justify-center items-center cursor-pointer opacity-80 hover:opacity-90"
            >
              <img
                src={SourceIcon}
                alt="source code"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>

          {/* project title */}
          <h2
            className={`
              font-beckman font-bold sm:text-[32px] text-[24px] uppercase
              ${isSpecial ? 'text-black' : 'text-timberWolf'}
            `}
          >
            {name}
          </h2>

          <p className="mt-2 text-silver sm:text-[14px] text-[12px] max-w-3xl leading-[24px] font-poppins">
            {description}
          </p>

          {/* live demo button */}
          <div className="mt-4">
            <button
              onClick={() => window.open(demo, '_blank')}
              className="live-demo flex items-center gap-1 py-3 px-4 rounded-[10px] glassmorphism font-beckman font-bold text-timberWolf text-[14px] sm:text-[16px] w-[125px] sm:w-[138px] h-[46px] sm:h-[50px] hover:bg-battleGray hover:text-eerieBlack transition duration-200 ease-in-out"
              onMouseEnter={() => {
                document.querySelector('.btn-icon').src = pineappleHover;
              }}
              onMouseLeave={() => {
                document.querySelector('.btn-icon').src = pineapple;
              }}
            >
              <img
                src={pineapple}
                alt="live demo"
                className="btn-icon w-[30px] sm:w-[34px] h-[30px] sm:h-[34px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Case Studies</p> */}
        <h2 className={styles.sectionHeadTextLight}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        These projects demonstrate my expertise with practical examples of my work, including brief descriptions and links to code repositories and live demos.
      </motion.p>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
