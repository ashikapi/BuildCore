import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import project1 from '@/public/images/project image/project1.png';
import project2 from '@/public/images/project image/project2.png';
import project3 from '@/public/images/project image/project3.png';
import { Divide } from 'lucide-react';

export default function Projects() {
    const projectDetails = [
        {
            image: project1, title:'Residential', details:'Hillside Residence',
        },
        {
            image: project2, title:'Commercial', details:'Metropolitan Tower',
        },
        {
            image: project3, title:'Industrial', details:'TechPark Warehouse',
        }
    ];
    return (
        <div className='w-full h-full flex-1 justify-center items-center md:px-20 md:py-20 px-4 py-6 bg-[#111317]'>
            <h1 className='text-[#FA7A16] text-base font-medium mb-4'>OUR PORTFOLIO</h1>
            <div className='flex justify-between items-center'>
                <h1 className='text-[#FAFAFA] font-medium md:text-6xl text-lg'>FEATURED PROJECTS</h1>
                <button 
                        className='
                            text-[#FA7A16] 
                            font-semibold 
                            md:text-base
                            text-[10px] 
                            flex justify-center items-center gap-2 
                            leading-[120%] 
                            tracking-[-0.01em]
                        '
                        >
                        View All Projects
                        <span className='-rotate-12'>
                            <FaArrowRightLong />
                        </span>
                </button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14'>
  {projectDetails.map((project, index) => (
    <div key={index} className="mx-auto w-full max-w-[403px] relative">
      {/* Image */}
      <img
        src={project.image.src}
        alt={`Project ${index + 1}`}
        className='w-full md:h-[507px] h-96 object-cover rounded-md'
      />

      {/* Overlay Container */}
      <div className='absolute bottom-0 left-0 w-full p-6 rounded-b-md flex flex-col gap-2'
      style={{
       background: "linear-gradient(178.07deg, rgba(0,0,0,0) 2.03%, rgba(0,0,0,0.75) 98.38%)"
     }}>
        {/* Title */}
        <h3 className='inline-block self-start text-[#FAFAFA] font-semibold md:text-base text-sm px-2 py-1 bg-[#FA7A16] rounded-[5px]'>{project.title}</h3>
        {/* Description */}
        <p className='text-[#FAFAFA] md:text-3xl text-xl font-normal'>{project.details}</p>
      </div>
    </div>
  ))}
</div>

        </div>
    )
}
