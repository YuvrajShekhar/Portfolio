import React from 'react'
import logo from "../assets/Yuvraj_Shekhar_logo.png"
import resume from "../assets/Resume/Yuvraj_Shekhar_1P_GE.pdf"
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
            <a href="https://www.linkedin.com/in/yuvraj-shekhar-663541289/" title="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/YuvrajShekhar" title="Github" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://leetcode.com/u/syuvraj1999/" title="Leetcode" target="_blank" rel="noreferrer"><SiLeetcode/></a>
            <a href="https://www.hackerrank.com/profile/syuvraj1999" title="HackerRank" target="_blank" rel="noreferrer"><FaHackerrank/></a> 
            <a href={resume} title="Resume" target="_blank" rel="noreferrer"><PiReadCvLogoFill /></a>
        </div>
    </nav>
  )
}

export default Navbar