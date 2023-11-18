import Image from 'next/image';
import React from 'react';
import { projectInfo } from '../Models/Models';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

type Props = projectInfo;

function ProjectCard({ title, imgurl, tag, date, url }: Props) {
  return (
    <div className="shadow-drop-center flex flex-col justify-center text-center bg-primary-color text-basic-color p-6 m-2 rounded-lg w-[380px] h-[350px]">
      <h2 className="text-2xl mb-2 font-serif">{title}</h2>
      <Image
        src={`/images/projects-imgs/${imgurl}`}
        width={300}
        height={200}
        style={{ width: '100%', height: 'auto', margin: 'auto' }}
        objectFit="contain"
        alt={title}
      />
      <div className="flex flex-wrap justify-center">
        {tag.map((t: string, index: number) => {
          return (
            <span
              className="mx-2 mt-2 px-1 bg-quaternary-color rounded hover:-translate-y-1 transition-all"
              key={index}
            >
              {t}
            </span>
          );
        })}
      </div>
      <p>{date}</p>
      <div>
        {url.map((link: { type: string; url: string }, index: number) => {
          return (
            <span className="mx-1 hover:text-secondary-color" key={index}>
              {link.type == 'Github' ? (
                <a href={link.url}>
                  <GitHubIcon fontSize="large" />
                </a>
              ) : (
                <a href={link.url}>
                  <LinkIcon fontSize="large" />
                </a>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
