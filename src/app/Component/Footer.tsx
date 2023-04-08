import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" bg-gray-900 md:grid grid-cols-[44rem,auto,auto,auto]">
      <div className="px-5 py-10">
        <div>
          <h1 className="text-2xl md:text-3xl text-white">FAISAL</h1>
          <h1 className="text-md md:text-lg text-green-500 font-bold">
            INNOVATIONS
          </h1>
          <p className="text-white text-md md:text-lg py-5">
            Innovative Front End Developer with 5 years experience building and
            maintaining responsive websites in the recruiting industry.
          </p>
        </div>
        <div className="flex gap-5 text-3xl text-green-500">
          <AiOutlineTwitter className="hover:text-white" />
          <BsGithub className="hover:text-white" />
          <BsInstagram className="hover:text-white" />
        </div>
      </div>

      <div className="text-white p-5">
        <h1 className="text-2xl pb-5">SERVICES</h1>
        <ul className="text-md md:text-lg">
            <li className="pb-4 hover:text-green-500">UI/UX Design</li>
            <li className="pb-4 hover:text-green-500">Front-End Developers</li>
            <li className="pb-4 hover:text-green-500">Full stack Developers</li>
            <li className="pb-4 hover:text-green-500">Blockchain Developers</li>
        </ul>
      </div>
      <div className="text-white p-5">
        <h1 className="text-2xl pb-5">Useful Links</h1>
        <ul className="text-md md:text-lg">
            <li className="pb-4 hover:text-green-500">Home</li>
            <li className="pb-4 hover:text-green-500">Services</li>
            <li className="pb-4 hover:text-green-500">Portfolio</li>
            <li className="pb-4 hover:text-green-500">Contact</li>
        </ul>
      </div>
      <div className="text-white p-5">
        <h1 className="text-2xl">Address</h1>
        <ul>
            <li className=" hover:text-green-500">____</li>
            <li className=" hover:text-green-500">____</li>
            <li className=" hover:text-green-500">____</li>
            <li className=" hover:text-green-500">____</li>
        </ul>
      </div>
    </div>
  );
}
