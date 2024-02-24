import React from 'react'
import { Tilt } from 'react-tilt' 
import { motion } from 'framer-motion'

import { styles } from '../styles'

import { services } from '../constants'
import { SectionWrapper } from '../hoc'

import { fadeIn, textVariant } from '../utils/motion'

import ActualCV from '../assets/ActualCV.pdf'
/* CV NU MERGE */
/* CV NU MERGE */
/* CV NU MERGE */
/* CV NU MERGE */
/* CV NU MERGE */
/* CV NU MERGE */
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5*index, 0.75 )}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div 
      options={{max: 45, scale:1, speed: 450}}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div> 
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
      <a 
        href={ActualCV}
        download="Stas_Rechimciuc_CV.pdf"
         className='text-[#915eff]
         bg-tertiary py-3 px-5 rounded-[8px]
         text-[34px] font-bold cursor-pointer'
         >
          Download my CV
        </a>
    </motion.div>

    <motion.p
    variants={fadeIn("", "" , 0.1, 1 )}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
     Hello.I am Stas Rechimciuc and I'm a front-end developer who is ready to turn business concepts or ideas into fully responsive dynamic web applications.Moreover, I'm ready to work with cross-functional teams and implement modern designs for building interactive websites and apps.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service,idx) => (
      <ServiceCard key={service.title} index={idx} 
      {...service}/>
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")