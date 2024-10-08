import Image from "next/image";
import React from "react";

import contactus from "../public/contact-us.jpeg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am an ambitious individual with a thirst for diverse experiences and an insatiable curiosity to explore all that life to offer. I am born with a resilient spirit, I have overcome personal challenges and transformed them into motivation.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
              <a href="https://www.linkedin.com/in/nimesh-dangi-269a08257/" target="_blank">
                <FaLinkedin size={25} /></a>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer"> <a href="https://www.facebook.com/profile.php?id=61556750128023" target="_blank">
                <FaFacebook size={25} /> </a>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <a href="https://github.com/nimeshdangi" target="_blank"><FaGithub size={25} /></a>
              </div>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/amdperyb"
                method="POST"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col col-span-2 md:col-span-1">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col col-span-2 md:col-span-1">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-neutral-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;