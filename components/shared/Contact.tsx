"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="mt-32 ">
      <div className="wrapper flex-center flex-col text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-8">Contact Us</h2>
        <p className="max-w-[600px] mb-16">
        Get in touch with Buildora for inquiries, consultations, or project details—we’re here to assist you!
        </p>
      </div>

      <div className="w-full text-left relative">
        <div className="wrapper">
          <form className="w-full  lg:w-1/2 xl:w-2/5">
            <div className="mb-6 flex flex-col">
              <label htmlFor="name" className="text-sm mb-2 ml-4">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="py-3 px-4 w-full bg-gray-100 rounded-lg focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="email" className="text-sm mb-2 ml-4">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="py-3 px-4 w-full bg-gray-100 rounded-lg focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="mb-8 flex flex-col">
              <label htmlFor="message" className="text-sm mb-2 ml-4">
                Message
              </label>
              <textarea
                name="message"
                placeholder="John Doe"
                className="py-3 px-4 w-full h-[200px] bg-gray-100 rounded-lg focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              className="w-[180px] py-3 text-white bg-blue-1 rounded-tl-[36px] rounded-tr-sm rounded-br-[36px] rounded-bl-sm"
              onClick={(e) => e.preventDefault()}
              type="submit"
            >
              Explore
            </button>
          </form>
        </div>

        <Image
          src="/images/map.png"
          alt="map"
          width={500}
          height={500}
          className="hidden lg:block absolute right-0 top-0 w-[500px] xl:w-[800px]"
        />
      </div>
    </div>
  );
}
