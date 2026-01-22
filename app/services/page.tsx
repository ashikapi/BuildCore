import React from 'react'
import { GiPowderBag } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { MdOutlineFactory } from 'react-icons/md';

export default function Services() {
  const serviceDetails = [
    {
      title: 'Commercial Construction',
      description: 'State-of-the-art office buildings, retail spaces, and commercial complexes built to the highest standards.',
      icon: <GiPowderBag />,
    },
    {
      title: 'Residential Projects',
      description: 'Custom homes and residential developments that combine luxury with functionality.',
      icon: <GoHomeFill />,

    },
    {
      title: 'Residential Projects',
      description: 'Custom homes and residential developments that combine luxury with functionality.',
      icon: <MdOutlineFactory />,

    },
    {
      title: 'Commercial Construction',
      description: 'State-of-the-art office buildings, retail spaces, and commercial complexes built to the highest standards.',
      icon: <GiPowderBag />,

    },
    {
      title: 'Residential Projects',
      description: 'Custom homes and residential developments that combine luxury with functionality.',
      icon: <GoHomeFill />,

    },
    {
      title: 'Residential Projects',
      description: 'Custom homes and residential developments that combine luxury with functionality.',
      icon: <MdOutlineFactory />,

    },
  ];
  return (
    <div className='w-full h-full flex-1 justify-center items-center bg-[#272C35] md:px-20 px-4 md:py-20 py-6'>
      <div className='text-center md:space-y-5 space-y-4 mt-4'>
        <h3 className='text-[#FA7A16] md:text-base text-sm font-semibold'>WHAT WE DO</h3>
        <h1 className='text-[#FAFAFA] md:text-6xl text-2xl font-normal text-balance'>OUR SERVICES</h1>
        <p
          className='md:max-w-3xl w-full text-[#8F96A3] font-normal text-base flex mx-auto mb-10'
        >
          Comprehensive construction solutions tailored to
          meet your unique needs and exceed your
          expectations.
        </p>
      </div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5'>
        {serviceDetails.map((service, index) => (
          <div key={index} className='md:w-[386px] md:h-[260px] w-full h-full rounded-[7px] md:p-6 p-4 bg-[#1A1D23] flex flex-col md:gap-4 gap-2'>
            <div className='md:w-14 md:h-14 w-8 h-8 rounded bg-gradient-to-r from-[#FA7E16] to-[#FE9619] items-center justify-center flex md:text-2xl text-base'>
              <h1 className='text-[#FAFAFA]'>{service.icon}</h1>
            </div>
            <h2 className='text-[#FAFAFA] md:text-2xl text-lg font-normal'>{service.title}</h2>
            <p className='text-[#8F96A3] md:text-base text-sm font-normal'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
