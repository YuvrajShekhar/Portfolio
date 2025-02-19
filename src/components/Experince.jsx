import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "motion/react"

const Experince = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1, y:0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div>
            {EXPERIENCES.map((experince, index) => (
                <motion.div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experince.year}</p>
                    <p className='mb-2 text-sm text-blue-300'>{experince.duration}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold '>{experince.role} - <span className='text-sm text-yellow-300'>{experince.company}</span>
                    </h6>
                    <ul className="list-disc list-outside">
                        {Object.values(experince.description).map((point, index) => {
                            // Split the string into two parts: before and after the colon
                            const [boldText, normalText] = point.split(':', 2);

                            return (
                            <li key={index} className="mb-4 text-neutral-400">
                                <span className="font-bold">{boldText}:</span> {normalText}
                            </li>
                            );
                        })}
                        </ul>
                    <div className="flex flex-wrap mt-4">
                        {experince.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300'>
                        {tech}
                        </span>
                    ))}
                    </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
        </div>
  )
}

export default Experince