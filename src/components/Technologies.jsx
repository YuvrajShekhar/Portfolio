import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoGoLang } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { motion } from "motion/react"

const iconVariants = (duration) => ({
    initial : {y:-10},
    animate : {
        y : [10,-10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <RiReactjsLine title="React" className='text-7xl text-cyan-400'/>
            </motion.div>
            <div class="text-xl">React</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <SiDjango title="Django" className='text-7xl' color='rgb(21 128 61/var(--tw-text-opacity))'/>
            </motion.div>
            <div class="text-xl">Django</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <FaPython  title="Python" className='text-7xl' color='rgb(49 112 163/var(--tw-text-opacity))'/>
            </motion.div>
            <div class="text-xl">Python</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <BiLogoGoLang title="GoLang" className='text-7xl' color='#29BEB0'/>
            </motion.div>
            <div class="text-xl">GoLang</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <IoLogoJavascript  title="Javascript" className='text-7xl' color='rgb(255, 255, 0)'/ >
            </motion.div>
            <div class="text-xl">Javascript</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <SiMysql title="Mysql" className='text-7xl' color='#00758F'/>
            </motion.div>
            <div class="text-xl">Mysql</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <BiLogoMongodb title="Mongodb" className='text-7xl' color='#4DB33D'/>
            </motion.div>
            <div class="text-xl">MongoDB</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <FaGitAlt title="Git" className='text-7xl' color='#f1502f'/>
            </motion.div>
            <div class="text-xl">Git</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(6.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <SiApache title="Apache" className='text-7xl' color='#CC2336'/>
            </motion.div>
            <div class="text-xl">Apache</div>
            </div>
            <div class="flex flex-col items-center space-y-4">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl p-4'>
                <FaLinux title="Linux" className='text-7xl' color='#ffffff'/>
            </motion.div>
            <div class="text-xl">Linux</div>
            </div>
        </motion.div>
        </div>
  )
}

export default Technologies