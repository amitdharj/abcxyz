import React from 'react'
import { GiDeliveryDrone } from "react-icons/gi";
import { IoIosCart } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className=' bg-stone-50    flex items-center justify-between'>
      
      <div className=' flex flex-row pl-8 pt-2 pb-2 text-5xl  '>
      <GiDeliveryDrone/>
      <p className='bg-gradient-to-r from-green-400 via-white to-yellow-500 rounded-2xl text-3xl font-bold text-stone-800 text-opacity-95  pt-2 pl-1 hover:text-fuchsia-900'>INDIFLO</p>
      </div>

      
      <div className=' text-opacity-85 pt-6  text-stone-700  font-medium '>
        <a className=' pt-5 pl-12 hover:text-blue-500 ' href="src/assets/dji air 3.jpg" target='_blank'>Drones</a>
        <a className='pt-5 pl-12  hover:text-blue-500 ' href="#" target='_blank'>Autel Drones</a>
        <a className='pt-5 pl-12  hover:text-blue-500' href="#" target='_blank'>Drone Accessories</a>
        <a className='pt-5 pl-12  hover:text-blue-500' href="#" target='_blank'>Related Service</a>
        <a className='pt-5 pl-12  hover:text-blue-500' href="#" target='_blank' >Enterprise</a>
      </div>

      <div className='flex text-2xl pt-6 pr-12 gap-5 text-opacity-45'>
          <a href="" target="_blank" rel="noopener noreferrer"><MdOutlineSearch className='hover:bg-blue-100 rounded-full text-stone-800 '/> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <IoIosCart className=' hover:bg-blue-100 rounded-full text-stone-800 '/> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><BsPersonFill className=' hover:bg-blue-100 rounded-full text-stone-800 ' /></a>
      </div>

    </div>
  )
}

export default Header