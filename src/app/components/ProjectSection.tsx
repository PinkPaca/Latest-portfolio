import React from 'react';
import ProjectCard from './ProjectCard';
import { projectList, projectInfo } from '../Models/Models';

const projects: projectList = [
  {
    title: 'Church website',
    imgurl: 'church-website.png',
    tag: ['react.js', 'scss', 'php', 'MariaDB'],
    date: 'October 2023 ~',
    url: [
      { type: 'Github', url: 'https://github.com/PinkPaca/Daum-website-admin' },
      { type: 'Link', url: 'https://daum-church-website.vercel.app/' },
    ],
  },
  {
    title: 'Portfolio',
    imgurl: 'portfolio.png',
    tag: ['next.js', 'tailwindcss', 'typescript'],
    date: '2023.11',
    url: [
      { type: 'Github', url: 'https://github.com/PinkPaca/Latest-portfolio' },
      { type: 'Link', url: 'https://rucy-portfolio.vercel.app/' },
    ],
  },
  {
    title: 'blog with database',
    imgurl: 'blog.png',
    tag: ['vanilla javascript', 'MongoDB', 'EJS'],
    date: '2023.11',
    url: [{ type: 'Github', url: 'https://github.com/PinkPaca/dailyJournal' }],
  },
  {
    title: 'Authentication',
    imgurl: 'authentication.png',
    tag: ['MongoDB', 'Cookies', 'Google OAuth 2.0'],
    date: '2023.11',
    url: [
      { type: 'Github', url: 'https://github.com/PinkPaca/Authentication' },
    ],
  },
];

type Props = {};

function ProjectSection({}: Props) {
  return (
    <div className="text-primary-color m-2 p-4 w-[100%]">
      <h1 className="text-5xl font-serif text-center font-bold my-4">
        Projects
      </h1>
      <div className="flex flex-wrap justify-around">
        {projects.map((project: projectInfo, index: number) => {
          return (
            <div key={index}>
              <ProjectCard
                title={project.title}
                imgurl={project.imgurl}
                date={project.date}
                tag={project.tag}
                url={project.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
