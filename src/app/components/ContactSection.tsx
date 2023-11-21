import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';

type Props = {};

function ContactSection({}: Props) {
  return (
    <section
      id="contact"
      className="scroll-mt-[70px] p-8 font-serif text-center md:my-12 py-24 gap-4 bg-primary-color text-basic-color"
    >
      <div>
        <h1 className="text-3xl font-serif text-center my-4 py-2">
          Let&apos;s connect
        </h1>
        <p className="mb-4 w-full">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try m best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link
            href="https://github.com/PinkPaca"
            className="hover:text-secondary-color"
          >
            <GitHubIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahreum-lee-012a58249/"
            className="hover:text-secondary-color"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            href="https://sharp-cathedral-5e7.notion.site/Career-703f26a66b124d96b30b1d238a55aadd?pvs=4"
            className="hover:text-secondary-color"
          >
            <LinkIcon fontSize="large" />
          </Link>
        </div>
        <h3 className="text-xl mt-7">fmadkdl113@gmail.com</h3>
      </div>
    </section>
  );
}

export default ContactSection;
