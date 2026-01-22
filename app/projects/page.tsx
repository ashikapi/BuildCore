import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Projects() {
    return (
        <div className='w-full h-full flex-1 justify-center items-center md:px-20 md:py-20 px-4 py-6 bg-[#111317]'>
            <h1 className='text-[#FA7A16] text-base font-medium mb-4'>OUR PORTFOLIO</h1>
            <div className='flex justify-between items-center'>
                <h1 className='text-[#FAFAFA] font-medium md:text-6xl text-2xl'>FEATURED PROJECTS</h1>
                <button 
                        className='
                            text-[#FA7A16] 
                            font-semibold 
                            text-base 
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
        </div>
    )
}
