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
      <div className='text-center space-y-5'>
        <h3 className='text-[#FA7A16] text-base font-semibold'>WHAT WE DO</h3>
        <h1 className='text-[#FAFAFA] text-6xl font-normal text-balance'>OUR SERVICES</h1>
        <p
          className='md:max-w-3xl w-full text-[#8F96A3] font-normal text-base flex mx-auto mb-10'
        >
          Comprehensive construction solutions tailored to
          meet your unique needs and exceed your
          expectations.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        {serviceDetails.map((service, index) => (
          <div key={index} className='w-[386px] h-[260px] rounded-[7px] p-6 bg-[#1A1D23] flex flex-col gap-4'>
            <div className='w-14 h-14 rounded bg-gradient-to-r from-[#FA7E16] to-[#FE9619] items-center justify-center flex text-2xl'>
              <h1 className='text-[#FAFAFA]'>{service.icon}</h1>
            </div>
            <h2 className='text-[#FAFAFA] text-2xl font-normal'>{service.title}</h2>
            <p className='text-[#8F96A3] text-base font-normal'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
