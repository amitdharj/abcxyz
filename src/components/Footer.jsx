import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    
    <div className='bg-stone-800 pt-28 pb-24 text-gray-400 text-sm'>
      <div className=' flex justify-center  text-lg  gap-14 pt-24'>
        <a href="#" className='hover:text-red-400 hover:'>About</a>
        <a href="#" className='hover:text-red-400'>Blog</a>
        <a href="#" className='hover:text-red-400'>Press</a>
        <a href="#" className='hover:text-red-400'>Accessebility</a>
        <a href="#" className='hover:text-red-400'>Partners</a>
      </div>

      <div className='flex justify-center  gap-9 text-xl pt-8'>
         <a href="https://www.facebook.com/WingtraOne" target="_blank" rel="noopener noreferrer" className=' hover:text-sky-400'> <FaFacebook/></a>
         <a href="https://www.instagram.com/wingtra_official/" target="_blank" rel="noopener noreferrer"  className=' hover:text-sky-400'><FaInstagram/> </a>
         <a href="https://x.com/i/flow/login?redirect_after_login=%2FWingtra" target="_blank" rel="noopener noreferrer"  className=' hover:text-sky-400'><FaXTwitter/></a>
         <a href="" target="_blank" rel="noopener noreferrer"  className=' hover:text-sky-400'><FaGithub/></a>
         <a href="https://www.youtube.com/c/Wingtra" target="_blank" rel="noopener noreferrer"  className=' hover:text-red-500'><FaYoutube/></a>
      </div>


      


      
      <div className='flex justify-center text-xs  pt-8'>
        © 2020 Your Company, Inc. All rights reserved.
      </div>

     

     

    </div>
    
    
  )
}

export default Footer