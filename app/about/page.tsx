import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import StatsCards from '../components/Status';
import StatCard from '../components/Status';

export default function AboutUs() {
    const projectDetails = [
        {
            icon: <CiCircleCheck />, details: 'Licensed, bonded & fully insured',
        },
        {
            icon: <CiCircleCheck />, details: 'Licensed, bonded & fully insured',
        },
        {
            icon: <CiCircleCheck />, details: 'Sustainable building practices',
        },
        {
            icon: <CiCircleCheck />, details: 'Sustainable building practices',
        },
        {
            icon: <CiCircleCheck />, details: 'Industry-leading safety standards',
        },
        {
            icon: <CiCircleCheck />, details: 'Industry-leading safety standards',
        }
    ];
    return (
        <div className='w-full h-full flex-1 justify-center items-center md:py-20 py-6 bg-[#2C2E34]'>
            <div className='md:flex justify-between items-center'>
                <div className='md:px-20 px-6'>
                    <div className='max-w-xl'>
                        <h3 className='text-[#FA7A16] text-base font-bold mb-4'>ABOUT US</h3>
                        <h1 className='text-[#000000] font-medium md:text-6xl text-4xl'
                        >
                            BUILDING EXCELLENCE <br className='md:hidden'/><span className='text-[#FA7A16]'>SINCE 1999</span>
                        </h1>
                        <p className='text-[#8F96A3] md:text-base font-medium text-sm mt-5'
                        >
                            For over two decades, BuildCore has been at the forefront of the
                            construction industry, delivering landmark projects that shape
                            skylines and communities. Our commitment to quality, innovation,
                            and client satisfaction has made us a trusted partner for projects
                            of all scales.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-x-10 max-w-2xl'>
                        {projectDetails.map((project, index) => (
                            <div key={index} className='flex items-center gap-2 mt-6'>
                                <div className='text-[#FA7A16] text-xl font-semibold'>
                                    {project.icon}
                                </div>
                                <p className='text-[#FAFAFA] font-normal md:text-base text-sm'>
                                    {project.details}
                                </p>
                            </div>
                        ))}
                    </div>
                    <h1 className="group relative mt-10 text-[#FA7A16] font-medium text-base flex items-center">
                        Learn More About Our Story
                        <span className="ml-2 h-[1.5px] w-8 bg-[#FA7A16] transition-all duration-300 group-hover:w-12"></span>
                    </h1>
                </div>
                <div className="space-y-6 md:px-0 px-6 mt-10 md:mt-0">
                    <StatCard value="500+" label="Projects Completed" />
                    <StatCard value="25+" label="Years Experience" />
                    <StatCard value="98%" label="Client Satisfaction" />
                </div>

            </div>


        </div>
    )
}
