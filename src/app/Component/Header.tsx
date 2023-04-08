import React from 'react'
import {GrLinkedinOption} from 'react-icons/gr'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {BiMailSend} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'

export default function Header() {
  return (
    <div className='flex justify-between bg-gray-800 text-white p-5'>
        <div className='flex gap-16 text-4xl'>
            <GrLinkedinOption className='text-white  hover:text-green-500'/>
            <FaFacebookF className='text-white  hover:text-green-500'/>
            <IoLogoTwitter className='text-white  hover:text-green-500'/>
        </div>

        
        <div className=' hidden md:flex text-xl items-center '>
          <BiMailSend className='text-4xl pr-3'/> faisalrashid@gmail.com</div>
        <div className=' hidden md:flex text-xl items-center'>
          <BsFillTelephoneFill className='text-4xl pr-3'/>
            +92 333 44 44 444
        </div>
        
    </div>
  )
}
