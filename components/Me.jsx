import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-gray-800 font-bold moving-text">
          It's me
        </h2>

        <div className="shadow-xl shadow-gray-600 my-8 px-8 bg-gray-100">
          <p className="py-4 max-w-2xl mx-auto">
          I am Nimesh Dangi, born on December 1, 2002. My family consists of four people including me: my parents and an older brother who is nine years older than me. We share a unique bond that has always been a source of strength for me.

Growing up, I was passionate about entering the medical field. I excelled in my studies and was on track to fulfill my dream. However, my life took a dramatic turn in 2015 when I was diagnosed with neurocysticercosis, a condition caused by tapeworm eggs in the brain. This diagnosis was a huge setback, forcing me to take gap years and it really tested my mental resilience.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          With no previous experience in computers, I later decided to shift my focus and enrolled in the IT field. The decision was largely influenced by the reputation of Islington College for having a supportive environment and manageable requirements. Although I wasn't initially interested in coding, the necessity to pass my exams and achieve good grades pushed me to adapt.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          Today, I am working on a project with assistance from ChatGPT. Despite my initial lack of interest in coding, I am making steady progress and learning to navigate this new domain. Each step in this journey is a learning curve, and I'm committed to pushing through the challenges, driven by my family's support and my own determination to succeed. This new chapter is about adapting and finding ways to thrive, no matter the circumstances.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume (2).pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;