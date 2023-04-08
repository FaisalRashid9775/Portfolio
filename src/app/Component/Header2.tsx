import React from "react";
import Image2 from "../../public/bg.jpg";
import Link from "next/link";

export default function Header2(props:any) {
  return (
    <div className='bg-[url("https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] p-5'>
      <div className="text-white  flex flex-wrap items-center justify-between pb-28">
        <div>
          <h1 className="text-2xl md:text-3xl"> FAISAL</h1>
          <h1 className="text-md md:text-lg text-green-500 font-bold">INNOVATIONS</h1>
        </div>
        <ul className="flex gap-4 md:gap-10 text-xl order-last md:order-none">
          <li className="text-white hover:text-green-500"><Link href={'/'}>Home</Link></li>
          <li className="text-white hover:text-green-500"><Link href={'/Service'}>Services</Link></li>
          <li className="text-white hover:text-green-500"><Link href={'/Portfolio'}>Portfolio</Link></li>
          <li className="text-white hover:text-green-500"><Link href={'/Contact'}>Contact</Link></li>
        </ul>
        <button className=" bg-green-600  text-white px-4 md:px-6 font-bold py-2 md:py-3 rounded-xl hover:scale-110">
          GET A QUOTES
        </button>
      </div>

      <div className="grid md:grid-cols-2">
        <div></div>
        <div>
          <h1 className=" text-xl md:text-2xl text-white pb-6"> {props.greet} </h1>
          <h1 className="text-3xl md:text-5xl text-white pb-4"> {props.name}</h1>
          <h1 className="text-4xl md:text-6xl text-green-500 font-bold">{props.page} </h1>
          <p className="text-white text-xl md:text-2xl py-10 pr-16">
            {props.para}
          </p>
          <div className=" flex gap-5 md:gap-10 py-16 md:py-20">

          <button className="px-4 md:px-6 py-2 bg-green-600 text-white rounded-lg text-xl font-semibold">Our services</button>
          <button className="px-4 md:px-6 py-2 border border-white hover:border-green-500 text-white hover:text-green-500 rounded-lg font-semibold text-xl">See portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}
