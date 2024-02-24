import { useState } from "react"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"

import { Tilt } from "react-tilt"

import { technologies, soft } from "../constants"

import CustomButton from "./CustomButton"

const Tech = () => {

  const [ changeSkills, setChangeSkills ] = useState("work")

  const SoftSkillCard = ({ title, points, icon }) => {
    return (
  <Tilt className="xs:w-[295px] w-45 m-3">
    <div
     className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div 
      options={{max: 45, scale:1, speed: 450}}
      className='bg-tertiary rounded-[20px] py-5 px-12 h-[380px] w-[320px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center bg-black-100 p-4 mb-2 rounded-[10px]'>{title}</h3>
        <ul className="list-disc">
          {
            points.map((point, idx) => (
              <li key={`soft-skill-${idx}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                {point}
              </li>
            ))
          }
        </ul>
      </div>
     </div> 
    </Tilt>
   )
  }

  return (
    <div className="flex flex-col justify-center gap-10">
     <div className="flex flex-row justify-center gap-1">
      <CustomButton 
      text={'Soft Skills'}
      setChangeSkills={setChangeSkills}
      skill={'soft'}
      />
      <CustomButton 
      text={'Hard Skills'}
      setChangeSkills={setChangeSkills}
      skill={'tech'}
      />
    </div>
     <div className="flex flex-row flex-wrap justify-center gap-5">
      {changeSkills === "tech" ? 
        technologies.map((tech,idx) => (
          <div className={`w-28 h-28 `} key={`tech-${idx}`}>
            <BallCanvas icon={tech.icon}/>
          </div>
        ))
        : soft.map((el,idx) => (
          <SoftSkillCard 
          className="w-28 h-28"
          key={el.title}
          index={idx}
          {...el}
          />
          ))
        } 
     </div>
    </div>
  )
}

export default SectionWrapper(Tech,"") 