import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const CustomButton = ({text, setChangeSkills, skill}) => {
  return (
      <motion.button
      onClick={() => setChangeSkills !== undefined && setChangeSkills(`${skill}`)}
       className="bg-gradient-to-r from-green-400 to-purple-700 text-white flex items-center justify-center rounded-[10px] p-2 h-[63px]"
       variants={fadeIn("right", "spring", 0.5, 0.75 )}
       >
     <span className="flex w-[220px] justify-center bg-gray-900 rounded-[10px] text-white p-4">
     {text}
        </span>
       </motion.button>
  )
}

export default CustomButton