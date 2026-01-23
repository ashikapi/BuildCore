import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';

type NavbarMDProps = {
    activeHash: string;
    setActiveHash: (hash: string) => void;
};

export default function NavbarMD({ activeHash, setActiveHash }: NavbarMDProps) {
        // const [activeHash, setActiveHash] = useState('');
        const [menuOpen, setMenuOpen] = useState(false);
        const navItems = [
            { name: 'Home', link: '#home' },
            { name: 'Services', link: '#services' },
            { name: 'Projects', link: '#projects' },
            { name: 'About', link: '#about' }, 
            { name: 'Contact', link: '#contact' },
        ];
  return (
    <div>
        <div 
        onClick={() => setMenuOpen(!menuOpen)}
        className='md:hidden'>
            {menuOpen? <FaTimes /> : <CgMenuGridR size={30}/>}
        </div>
        {menuOpen && (
            <ul className="flex flex-col bg-[#1A1818]/50 backdrop-blur-xs rounded-lg text-white font-semibold text-base list-none p-4 gap-3 absolute top-20 right-0 w-full xl:w-auto xl:hidden transition-all duration-300">
                {navItems.map((items) => (
                    <li key={items.name}>
                        <a
                            onClick={() =>{ setActiveHash(items.link); setMenuOpen(false)}}
                            href={items.link}
                            className={`block py-2 px-4 ${activeHash === items.link ? 'text-[#FA7A16]' : 'hover:text-[#FA7A16] transition'}`}
                        >
                            {items.name}
                        </a>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}
