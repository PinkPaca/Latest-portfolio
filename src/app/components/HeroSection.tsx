'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <div className="sm:w-[310px] grid gird-cols-1 md:grid-cols-12 lg:grid-cols-12">
        <div className="lg:col-span-7 md:col-span-7 mx-10">
          <h1 className="text-primary-color font-serif sm:text-center mb-4 text-6xl font-extrabold">
            <span className="">
              Hello, I'm
              <br />
            </span>
            <TypeAnimation
              sequence={[
                'Rucy',
                1000,
                `Web Developer`,
                1000,
                `Data Scientist`,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-primary-color font-serif mg-6 text-lg lg:text-xl text-start">
            자기소개쓸거임
          </p>
          <div className="mt-5 flex justify-evenly">
            <button className="shadow-pop-tr px-6 py-3 rounded-full mr-4 font-serif font-bold text-quaternary-color border-solid border-2 border-quaternary-color ">
              Hire Me
            </button>
            <button className="shadow-pop-tr px-6 py-3 rounded-full font-serif font-bold text-quaternary-color border-solid border-2 border-quaternary-color">
              Download CV
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 md:col-span-5 mx-auto flex justify-center lg:mr-8">
          <div className="rounded-full bg-primary-color w-500 h-400 relative">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
