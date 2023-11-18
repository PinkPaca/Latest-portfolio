import React from 'react';
import SkillIcon from './SkillIcon';

type Props = {};

const skillSet: string[] = [
  'html',
  'css',
  'javascript',
  'typescript',
  'bootstrap',
  'scss',
  'tailwindcss',
  'nodejs',
  'expressjs',
  'mongodb',
  'react',
  'nextjs',
  'python',
];

function AboutSection({}: Props) {
  return (
    <section className="text-basic-color bg-primary-color">
      <div className="p-5">
        <h1 className="text-center text-6xl font-serif">About me</h1>
        <p className="my-4">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est
          sit amet facilisis magna etiam. Vel eros donec ac odio. Sodales neque
          sodales ut etiam sit amet nisl purus. Viverra accumsan in nisl nisi.
          Ultricies integer quis auctor elit sed vulputate mi sit. Fermentum
          posuere urna nec tincidunt praesent. */}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly flex-wrap mt-10">
          <div className="md:col-span-1">
            <h2 className="font-serif text-4xl text-center mb-2">Skill Set</h2>
            <div className="flex flex-wrap justify-center mb-4">
              {skillSet.map((skill: string, index: number) => {
                return (
                  <SkillIcon
                    key={index}
                    url={`/images/skill-icons/${skill}-logo.png`}
                    name={skill}
                  />
                );
              })}
            </div>
          </div>
          <div className="md:col-span-1">
            <h2 className="font-serif text-4xl text-center mb-2">Education</h2>
            <div className="border-2 border-quaternary-color rounded-md p-4 my-3">
              <h4 className="font-serif text-3xl text-start">
                Hongik University, Seoul
              </h4>
              <h5 className="font-serif text-xl text-start">
                Computer Engineering
              </h5>
              <p className="text-xs font-serif font-thin italic">
                March, 2018 ~
              </p>
              <p>
                Based on C language and C++, relevant concepts like Data
                Structure, Algorithm, Data Base, etc. Mathematical understanding
                about Discrete Mathematics, Linear Algebra and Probability and
                Statics.
              </p>
            </div>
            <div className="border-2 border-quaternary-color rounded-md p-4 my-3">
              <h4 className="font-serif text-4xl text-start">
                HyperionDev, London
              </h4>
              <h5 className="font-serif text-xl text-start">Data Science</h5>
              <p className="text-xs font-serif font-thin italic">
                March, 2023 ~ August, 2023
              </p>
              <p>
                Skilled in SQL, SQLite, Data Analysis, Data Modeling, Machine
                Learning and Data Analytics. Leverage knowledge of Python.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <h2 className="font-serif text-4xl text-center my-2">
              Certification
            </h2>
            <div className="flex flex-wrap">
              <div className="m-5">
                <h4 className="text-4xl font-serif">IELTS</h4>
                <h6 className="text-2xl font-serif">
                  Overall 7.0 <span className="text-sm font-thin">2023.10</span>
                </h6>
              </div>
              <div className="m-5">
                <h4 className="text-4xl font-serif">JLPT</h4>
                <h6 className="text-2xl font-serif">
                  N3 <span className="text-sm font-thin">2021.8</span>
                </h6>
              </div>
              <div className="m-5">
                <h4 className="text-4xl font-serif">
                  Engineer Information Processing
                </h4>
                <h6 className="text-2xl font-serif">
                  <span className="text-sm font-thin">2021.9</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
