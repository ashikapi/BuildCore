import React from 'react'

export default function States() {
    const statsInfo = [
        {leading: '500+', description: 'Projects Completed'},
        {leading: '25+', description: 'Years Experience'},
        {leading: '98%', description: 'Client Satisfaction'},
    ];
  return (
    <div className='w-full h-full bg-[#0A0B0C] px-10 py-4'>
        <div className='grid grid-flow-col md:gap-40 gap-2'>
            {statsInfo.map((stats, index) => (
                <ul key={index} 
                className='text-white text-center'>
                    <h1 className='text-[#FA7A16] md:text-5xl font-normal'>{stats.leading}</h1>
                    <p className='md:text-xl text-[#8F96A3] font-normal text-[10px]'>{stats.description}</p>
                </ul>
            ))}
        </div>
    </div>
  )
}
