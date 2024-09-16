import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Portfolio from '@/components/Portfolio';
import Experience from "@/components/Experience";
import Me from '@/components/Me';
import Contact from '@/components/Contact';
import { MdExpandMore } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <div id='home' className='w-full text-center flex items-center justify-cente bg-neutral-100'>
        <div className='max-w-screen-xl mx-auto w-full h-[80%] pt-24 p-4 flex flex-col justify-center items-center bg-slate-100'>
          <div style={{ width: '265px', height: '265px', position: 'relative' }}>
            <Image 
              src="/heroImge.jpg"  // Ensure the file name and path are correct
              alt="Hero Image"
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-full'
            />
          </div>
          <h1 className='uppercase font-bold text-gray-700 text-5xl lg:text-7xl mb-4'>Passionate Web Developer</h1>
          <p className='text-gray-600 text-xl max-w-sm mx-auto mt-7 mb-8'>
            I am just starting out in web development with no prior experience, and this is the first project I have done on my own. I am now committed to learning and growing more. I have used ChatGPT to help guide me through this project.
          </p>
          <Link href="/#me" className="group flex items-center justify-center my-8 bg-gray-800 text-white px-6 py-3 font-bold uppercase rounded-md hover:bg-blue-700 tracking-wider">
            Know more
            <MdExpandMore size={25} className='-rotate-90 duration-100 ease-in group-hover:rotate-0' />
          </Link>
        </div>
      </div>
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </>
  );
}
