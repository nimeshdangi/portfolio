"use client";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const portfolios = [
  {
    id: 1,
    title: "react weather app",
    imageSrc: "/assets/portfolio/reactWeather.jpg",
    url: "react-weather",
    description: "Created a weather app using React. Used the OpenWeatherMap API. Built with Next.js. Styled with Tailwind CSS.",
  },
  {
    id: 2,
    title: "install node",
    imageSrc: "/assets/portfolio/installNode.jpg",
    url: "install-node",
  },
  {
    id: 3,
    title: "use state explained",
    imageSrc: "/assets/portfolio/usestate.jpg",
    url: "use-state-hook",
  },
  {
    id: 4,
    title: "react parallax scroll",
    imageSrc: "/assets/portfolio/reactParallax.jpg",
    url: "react-parallax",
  },
];

const getPortfolioFrom = (url) => portfolios.find((p) => p.url === url);

const OnePortfolio = () => {
  const router = useParams();
  const portfolio = getPortfolioFrom(router.id);
  if (!portfolio) {
    return <div>Portfolio not found</div>;
  }

  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {portfolio.title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={portfolio.imageSrc} alt={portfolio.title} layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">Description</h2>

        <p>
        {portfolio.description ?? "You are someone who constantly pushes for personal growth and improvement, always striving for more while maintaining a mindset of expecting less in return. Your passion for travel reveals a love for exploring new places, cultures, and experiences, while your fondness for friends shows how much you value relationships and cherish moments spent with the people you care about."}
        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/nimeshdangi">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
