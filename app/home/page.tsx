
import React from "react";
import bg from "@/public/images/heroBG.png";
import { IoPlayOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";



export default function HomeHero() {
  return (
    <div
      className="relative flex-1 justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat md:px-20 px-4 md:py-10 py-6"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-[#542E18] border border-[#FA7A16] rounded-full">
    <div className="w-2 h-2 rounded-full bg-[#FA7A16]"></div>
    <span className="text-[#FA7A16] md:text-sm text-xs font-normal">25+ Years of Excellence</span>
  </div>


      <div className="text-center px-4 md:mt-44 mt-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white">
          WE BUILD YOUR <br />
          <span className="text-[#FA7A16]">VISION INTO REALITY</span>
        </h1>

        {/* Paragraph */}
        <p className="mt-8 md:max-w-[668px] w-full mx-auto text-[#8F96A3] text-lg md:text-2xl font-normal">
          From concept to completion, we deliver exceptional construction services with uncompromising quality and precision.
        </p>
        <div className="flex justify-center md:gap-28 gap-10 items-center mt-14">
        <button className="text-white md:px-10 px-4 py-3 bg-gradient-to-r from-[#FA7E16] to-[#FE9619] rounded-md md:text-xl text-[10px] flex items-center gap-2 cursor-pointer">
          Start Your Project 
          <span> <FaArrowRight /></span>
          </button>
        <button className="text-[#FA7A16] md:px-10 px-4 py-3 border-2 border-[#FA7A16] rounded-md md:text-xl text-[10px] flex items-center gap-2 cursor-pointer">
          <span><IoPlayOutline /></span>
          Watch Our Story
        </button>
      </div>
      </div>
      <hr className="text-white/50 w-full mt-10"/>
      
    </div>
  );
}
