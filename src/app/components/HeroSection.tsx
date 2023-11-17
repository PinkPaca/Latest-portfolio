'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <div className="grid gird-cols-1 md:grid-cols-12 lg:grid-cols-12 my-8">
        <div className="md:col-span-7 mx-10">
          <h1 className="text-primary-color font-serif text-center lg:text-start mb-4 text-6xl font-extrabold">
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
              className="text-[50px] md:text-[40px] lg:text-[50px]"
              repeat={Infinity}
            />
          </h1>
          <p className="text-primary-color font-serif mt-5 text-lg lg:text-xl text-start sm:text-center">
            자기소개쓸거임
          </p>
          <div className="my-5 flex lg:flex-row justify-evenly flex-col ">
            <button className="shadow-pop-tr lg:w-[50%] px-6 py-3 rounded-full mr-0 mb-3 lg:mb-0 lg:mr-4 font-serif font-bold text-basic-color bg-quaternary-color border-solid border-2 border-quaternary-color ">
              Hire Me
            </button>
            <button className="shadow-pop-tr lg:w-[50%] px-6 py-3 rounded-full font-serif font-bold text-quaternary-color border-solid border-2 border-quaternary-color">
              Download CV
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 md:col-span-5 mx-auto flex justify-center lg:mr-8">
          <div className="rounded-full bg-primary-color w-[250px] h-[250px] my-auto">
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
