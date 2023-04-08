import React from 'react'
import Image1 from '../../../public/1.png'
import image2 from '../../../public/panaversedao.gif'
import image3 from '../../../public/piaictailwind.gif'
import image4 from '../../../public/panaversetail.gif'
import image5 from '../../../public/todo.gif'
import Image from 'next/image'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLink} from 'react-icons/ai'

export default function Portfolio() {
  return (
    <div className='bg-slate-100'>
      <h1 className='text-3xl text-center py-10'>My Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-6'>
       <div className='bg-white rounded-xl w-80 shadow-xl'>
        <Image className='' src={image2} alt='piaic' width={316} height={160}/>
        <h1 className=' p-5 text-xl font-bold'>PIAIC Website by Tailwind</h1>
        <div className='flex justify-around text-3xl text-white py-4 text-center'>
          <AiFillGithub className=' hover: text-green-500 hover:scale-110'/>
          <AiOutlineLink className=' hover: text-green-500 hover:scale-110'/>
        </div>
       </div>

       <div className='bg-white rounded-xl w-80'>
        <Image className='' src={Image1} alt='piaic' width={316} height={160}/>
        <h1 className=' p-5 text-xl font-bold'>Panaverse DAO using chakra UI</h1>
        <div className='flex justify-around text-3xl text-white py-4 text-center'>
          <AiFillGithub className=' hover: text-green-500 hover:scale-110'/>
          <AiOutlineLink className=' hover: text-green-500 hover:scale-110'/>
        </div>
       </div>

       <div className='bg-white rounded-xl w-80'>
        <Image className='' src={image3} alt='piaic' width={316} height={160}/>
        <h1 className=' p-5 text-xl font-bold'>PIAIC Website using Chakra</h1>
        <div className='flex justify-around text-3xl text-white py-4 text-center'>
          <AiFillGithub className=' hover: text-green-500 hover:scale-110'/>
          <AiOutlineLink className=' hover: text-green-500 hover:scale-110'/>
        </div>
       </div>

       <div className='bg-white rounded-xl w-80'>
        <Image className='' src={image4} alt='piaic' width={316} height={160}/>
        <h1 className=' p-5 text-xl font-bold'>Panaverse DAO using Tailwind</h1>
        <div className='flex justify-around text-3xl text-white py-4 text-center'>
          <AiFillGithub className=' hover: text-green-500 hover:scale-110'/>
          <AiOutlineLink className=' hover: text-green-500 hover:scale-110'/>
        </div>
       </div>

       <div className='bg-white rounded-xl w-80'>
        <Image className='' src={image5} alt='piaic' width={316} height={160}/>
        <h1 className=' p-5 text-xl font-bold'>TO DO App using chakra UI</h1>
        <div className='flex justify-around text-3xl text-white py-4 text-center'>
          <AiFillGithub className=' hover: text-green-500 hover:scale-110'/>
          <AiOutlineLink className=' hover: text-green-500 hover:scale-110'/>
        </div>
       </div>
       </div>

    </div>
  )
}
