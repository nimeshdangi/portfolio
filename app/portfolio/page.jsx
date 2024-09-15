import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const PortfoliosRoute = () => {
const portfolios = [
    {
      id: 1,
      title: "react weather app",
      imageSrc: "/assets/portfolio/reactWeather.jpg",
      url: "react-weather",
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
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={500}
                  height={500}
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
      </div>
    </div>
  );
};

export default PortfoliosRoute;