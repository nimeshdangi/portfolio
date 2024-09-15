"use client";  // Add this at the top of the file

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [pageScroll, setPageScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setPageScroll(window.scrollY >= 90);
        };

        window.addEventListener("scroll", handleScroll);
        
        // Cleanup function to remove the event listener
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'portfolio'
        },
        {
            id: 3,
            link: 'skills'
        },
        {
            id: 4,
            link: 'me'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

    const handleNav = () => setNav(!nav);

    return (
        <div className={`w-full h-20 z-10 fixed duration-300 ease-in ${pageScroll ? 'bg-[#000080] text-white' : 'bg-white text-black'}`}>
            <div className='flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4'>
                {/* Nimesh logo link */}
                <Link href='/#home'>
                    <h1 className='text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer great-vibes-regular'>
                        Nimesh
                    </h1>
                </Link>

                {/* Rendering navbar links dynamically */}
                <div className='hidden md:flex'>
                    <ul className='flex'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>
                                <Link href={`/#${link}`}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile menu icon */}
                <div className='md:hidden'>
                    <FaBars size={30} onClick={handleNav} className='cursor-pointer' />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur' : 'hidden'}>
                <div className={nav ? 'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/#home'>
                            <h2 className='text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer'>
                                Nimesh
                            </h2>
                        </Link>
                        <div className='cursor-pointer' onClick={handleNav}>
                            <FaTimes size={30} />
                        </div>
                    </div>

                    <ul className='mt-10'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='py-4 text-xl uppercase tracking-wider'>
                                <Link href={`/#${link}`} onClick={handleNav}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='flex mt-10 space-x-4 items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer'>
                        <FaFacebook size={30} className='cursor-pointer' />
                        <FaGithub size={30} className='cursor-pointer' />
                        <FaTwitter size={30} className='cursor-pointer' />
                        <FaLinkedin size={30} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
