import React from "react";

import { MdExpandMore } from "react-icons/md";

import installNode from "../public/assets/portfolio/installNode.jpg";
import reactParallax from "../public/assets/portfolio/reactParallax.jpg";
import usestate from "../public/assets/portfolio/usestate.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "react weather app",
      imageSrc: reactWeather,
      url: "react-weather",
    },
    {
      id: 2,
      title: "install node",
      imageSrc: installNode,
      url: "install-node",
    },
    {
      id: 3,
      title: "use state explained",
      imageSrc: usestate,
      url: "use-state-hook",
    },
    {
      id: 4,
      title: "react parallax scroll",
      imageSrc: reactParallax,
      url: "react-parallax",
    },
  ];

  return (
    <div id="portfolio" className="w-full bg-stone-100">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left bg-stone-100">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-stone-500 font-bold">
          portfolio
        </h2>
        <p className="py-4 max-w-lg">
          I am currently focusing on gaining a solid understanding of the project by first cloning the site and famaliarizing myself with the fundamentals. This approach helps me better understand how the application functions before diving deeper into development.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-zinc-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;