import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from "motion/react"

const Experince = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1, y:0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Education</motion.h1>
        <div>
            {EDUCATION.map((education, index) => (
                <motion.div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold text-green-300'>{education.university}
                    </h6>
                    <p>{education.branch}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
        </div>
  )
}

export default Experince