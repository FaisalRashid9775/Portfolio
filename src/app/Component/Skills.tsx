import React from 'react'
import {IoLogoHtml5} from 'react-icons/io'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import { SiChakraui } from 'react-icons/si'
import { SiSolidity } from 'react-icons/si'
import {GiToken} from 'react-icons/gi'

export default function Skills() {
  return (
    <div className=' bg-slate-100'>
        <h1 className='text-4xl font-bold text-center pb-10'>Our Skills</h1>
        <div className='grid md:grid-cols-3 gap-x-10 gap-y-10  '>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-orange-600 m-auto w-80 hover:text-green-500'>
            <IoLogoHtml5 className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> HTML </h1>
        </div>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-blue-600 m-auto w-80 hover:text-green-500'>
            <IoLogoCss3 className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> CSS </h1>
        </div>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-yellow-300 m-auto w-80 hover:text-green-500'>
            <IoLogoJavascript className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> javascript </h1>
        </div>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-blue-700 m-auto w-80 hover:text-green-500'>
            <SiTypescript className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> typescript </h1>
        </div>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-purple-900 m-auto w-80 hover:text-green-500'>
            <SiTailwindcss className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> tailwind </h1>
        </div>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-sky-600 m-auto w-80 hover:text-green-500'>
            <SiChakraui className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> Chakra UI </h1>
        </div>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-gray-600 m-auto w-80 hover:text-green-500'>
            <SiSolidity className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> Solidity </h1>
        </div>

        <div className='bg-white p-4 rounded-lg flex justify-around items-center text-slate-600 m-auto w-80 hover:text-green-500'>
            <GiToken className='text-7xl'/>
            <h1 className='text-3xl font-semibold'> Token </h1>
        </div>
        </div>
        
    </div>
  )
}
