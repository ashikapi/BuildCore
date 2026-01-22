'use client';
import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';

export default function Navbar() {
    const [activeHash, setActiveHash] = useState('');
    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'Services', link: '#services' },
        { name: 'Projects', link: '#projects' },
        { name: 'About', link: '#about' }, 
        { name: 'Contact', link: '#contact' },
    ];
    return (
        <nav className='w-full h-20 bg-[#1A1818] xl:px-20 md:px-10 flex items-center md:justify-between justify-around fixed top-0 z-50 border-b border-b-white/50'>
            <div className='flex items-center md:gap-4 gap-1.5 cursor-pointer'>
                <div className='md:w-10 md:h-10 w-8 h-8 bg-gradient-to-r from-[#FA7E16] to-[#FE9619] rounded-md flex items-center justify-center'>
                    <h1 className='text-white md:text-2xl text-xl font-normal'>B</h1>
                </div>
                <h1 className='text-white md:text-2xl text-xl font-normal uppercase'>BuildCore</h1>
            </div>
            <div>
                <ul className='text-[#8F96A3] hidden md:grid grid-flow-col xl:gap-10 md:gap-5 text-base font-normal'>
                    {navItems.map((items) => (
                        <li key={items.name}>
                            <a
                                href={items.link}
                                onClick={() => setActiveHash(items.link)}
                                className={activeHash === items.link ? 'text-[#FA7A16]' : 'hover:text-[#FA7A16] transition'}
                                >
                                {items.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:flex hidden items-center justify-center gap-4">
                <a
                    href="tel:1234567890"
                    className="flex items-center gap-2 text-[#8F96A3]"
                >
                    <FiPhone className="text-lg" />
                    <span>(123) 456-7890</span>
                </a>

                <button className="rounded-md bg-gradient-to-r from-[#FA7E16] to-[#FE9619] px-4 py-2 text-white font-medium hover:opacity-90 transition cursor-pointer">
                    Get a Quote
                </button>
            </div>
            <div className='text-white md:hidden text-3xl cursor-pointer'>
                <CgMenuGridR />
            </div>

        </nav>
    )
}
