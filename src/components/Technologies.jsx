import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDjango className='text-7xl' color='rgb(21 128 61/var(--tw-text-opacity))'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl' color='rgb(49 112 163/var(--tw-text-opacity))'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl' color='rgb(255, 255, 0)'/ >
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl' color='#00758F'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoMongodb className='text-7xl' color='#4DB33D'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-7xl' color='#f1502f'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiApache className='text-7xl' color='#CC2336'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaLinux className='text-7xl' color='#ffffff'/>
            </div>
        </div>
        </div>
  )
}

export default Technologies