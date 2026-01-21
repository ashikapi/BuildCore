'use client';
import React, { useState } from 'react'
import { FiPhone } from 'react-icons/fi';

export default function Navbar() {
    const [activeHash, setActiveHash] = useState('');
    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Services', link: '#services' },
        { name: 'Contact', link: '#contact' },
    ];
    return (
        <nav className='w-full h-20 bg-[#1A1818] px-20 flex items-center justify-between fixed top-0 z-50 border-b border-b-white/50'>
            <div className='flex items-center gap-4 cursor-pointer'>
                <div className='w-10 h-10 bg-gradient-to-r from-[#FA7E16] to-[#FE9619] rounded-md flex items-center justify-center'>
                    <h1 className='text-white text-2xl font-normal'>B</h1>
                </div>
                <h1 className='text-white text-2xl font-normal uppercase'>BuildCore</h1>
            </div>
            <div>
                <ul className='text-white grid grid-flow-col gap-10 text-base font-normal'>
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
            <div className="flex items-center justify-center gap-4">
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

        </nav>
    )
}
