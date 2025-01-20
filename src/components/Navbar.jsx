import React from 'react'
import logo from "../assets/Yuvraj_Shekhar_logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <SiLeetcode/>
            <FaHackerrank/> 
            <PiReadCvLogoFill />
        </div>
    </nav>
  )
}

export default Navbar