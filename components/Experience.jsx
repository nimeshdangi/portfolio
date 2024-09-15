import React from 'react';
import Image from "next/image";

const Skills = () => {
    const skills = [
      {
        id: 1,
        title: "HTML",
        src: "/assets/experience/html.png",
      },
      {
        id: 2,
        title: "CSS",
        src: "/assets/experience/css.png",
      },
      {
        id: 3,
        title: "JavaScript",
        src: "/assets/experience/javascript.png",
      },
      {
        id: 4,
        title: "React",
        src: "/assets/experience/react.png",
      },
      {
        id: 5,
        title: "Next JS",
        src: "/assets/experience/nextjs.png",
      },
      {
        id: 6,
        title: "Tailwind",
        src: "/assets/experience/tailwind.png",  // Updated path to correct image
      },
     
    ];

    return (
      <div id="skills" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black-500 font-bold">
            skills
          </h2>
          <p className="py-4 max-w-lg">
            I am passionate about using my skills to build and design websites. This is the first time I have developed the project, doing the wholesetup, watching the youtube tutorial and things as such.
          </p>

          <div className="grid lg:grid-cols-4 gap-8">
            {skills.map(({ id, title, src }) => (
              <div
                key={id}
                className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
                odd:shadow-rose-400 even:shadow-blue-400"
              >
                <Image src={src} width={64} height={64} alt={title} layout="fixed" />
                <h3 className="font-light">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Skills;
