import Image from "next/image";
import React from "react";
import front from '../../../public/FRONTEND.jpg'
import full from '../../../public/Fullstack.jpg'
import Block from '../../../public/Blockchain.jpg'
import UI from '../../../public/uiux.png'

export default function Services() {
  return (
    <div className=" bg-gray-100 py-20 px-6">
      <h1 className="text-center text-5xl pb-10">Explore our services</h1>
        <div className=" grid grid-cols-1 md:grid-cols-4">
      <div className="bg-white w-80 rounded-b-xl ">
       <Image src={front} alt="fronent" width={330} height={220} className=" rounded-t-xl"></Image>
      <div className="p-5">
       <h1 className="text-2xl font-bold pb-3">Front End Developer</h1>
       <p className="text-lg">Build react, next js HTML websites using tailwind CSS and Chakra UI, Also convert your figma file into front-end code</p>
      <button className="px-5 py-2 bg-green-500 text-white rounded-lg mx-auto my-3">Hire me</button>
      </div>
      </div>



      <div className="bg-white w-80 rounded-b-xl">
       <Image src={full} alt="fronent" width={330} height={220} className=" rounded-t-xl"></Image>
      <div className="p-5">
       <h1 className="text-2xl font-bold pb-3">Full Stack Developer</h1>
       <p className="text-lg">Build full stack next js websites webapp using tailwind CSS, Chakra UI Mongo DB, Also convert your figma file into front-end code</p>
      <button className="px-5 py-2 bg-green-500 text-white rounded-lg mx-auto my-3">Hire me</button>
      </div>
      </div>


      <div className="bg-white w-80 rounded-b-xl">
       <Image src={Block} alt="fronent" width={330} height={220} className=" rounded-t-xl"></Image>
      <div className="p-5">
       <h1 className="text-2xl font-bold pb-3">BlockCahin Developer</h1>
       <p className="text-lg">Build complete decentralized webapp and websites on react, next js using tailwind CSS and Chakra UI,</p>
      <button className="px-5 py-2 bg-green-500 text-white rounded-lg mx-auto my-3">Hire me</button>
      </div>
      </div>

      <div className="bg-white w-80 rounded-b-xl">
       <Image src={UI} alt="fronent" width={330} height={220} className=" rounded-t-xl"></Image>
      <div className="p-5">
       <h1 className="text-2xl font-bold pb-3">UI/ UX Design</h1>
       <p className="text-lg">Design professional User interface on figma , Also convert your figma file into front-end code</p>
      <button className="px-5 py-2 bg-green-500 text-white rounded-lg mx-auto my-3">Hire me</button>
      </div>
      </div>

      </div>

    </div>
  );
}
