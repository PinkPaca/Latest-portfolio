'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <div className="grid gird-cols-1 mt-[80px] md:grid-cols-12 lg:grid-cols-12 my-8">
        <div className="md:col-span-7 mx-2 lg:mx-10">
          <h1 className="text-primary-color font-serif text-center lg:text-start mb-4 text-4xl lg:text-5xl font-extrabold">
            <span className="">
              Hello, I&apos;m
              <br />
            </span>
            <TypeAnimation
              sequence={['Rucy', 2000, 'Junior Developer', 2000]}
              wrapper="span"
              speed={50}
              className="text-[35px] md:text-[35px] lg:text-[50px]"
              repeat={Infinity}
            />
          </h1>
          <p className="text-primary-color font-serif mt-5 text-lg lg:text-xl text-start ">
            I am a motivated and ambitious junior developer who is continuously
            growing in my skills and knowledge. As an active and responsible
            employee, I strive to contribute effectively to the tasks at hand.
          </p>
          <div className="my-5 flex lg:flex-row justify-evenly flex-col ">
            <button className="shadow-pop-tr lg:w-[50%] px-6 py-3 rounded-full mr-0 mb-3 lg:mb-0 lg:mr-4 font-serif font-bold text-basic-color bg-quaternary-color border-solid border-2 border-quaternary-color ">
              <a href="mailto: fmadkdl113@gmail.com">Hire Me</a>
            </button>
            <button className="shadow-pop-tr lg:w-[50%] px-6 py-3 rounded-full font-serif font-bold text-quaternary-color border-solid border-2 border-quaternary-color">
              <a href="/이력서이아름.pdf" download={'이력서이아름.pdf'}>
                Download CV
              </a>
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
