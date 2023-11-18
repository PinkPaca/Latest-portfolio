import React from 'react';

type Props = {};

function ContactSection({}: Props) {
  return (
    <section className="bg-primary-color text-basic-color mt-8 font-serif">
      <h1 className="text-6xl font-serif text-center my-4 py-2">Contact Me!</h1>
      <div className="flex justify-around m-5 p-2 space-x-6">
        <div className="p-4">
          <h2 className="text-4xl mb-4">More About Me...</h2>
          <a href="https://velog.io/@fmadkdl113">
            <h3 className="text-2xl mb-2 hover:text-secondary-color">
              Velog tech blog
            </h3>
          </a>
          <iframe
            className="w-[120%]"
            src="https://velog.io/@fmadkdl113"
          ></iframe>
          <a href="https://www.notion.so/Career-703f26a66b124d96b30b1d238a55aadd">
            {' '}
            <h3 className="text-2xl my-2 hover:text-secondary-color">Notion</h3>
          </a>
          <iframe
            className="w-[120%]"
            src="https://www.notioniframe.com/notion/ttoh96pla1"
          ></iframe>
        </div>
        <div className="text-2xl space-y-2 p-4">
          <h3>
            Email
            <br />
            -fmadkdl113@gmail.com
          </h3>
          <h3 className="hover:text-secondary-color">
            <a href="https://www.linkedin.com/in/ahreum-lee-012a58249/">
              LinkedIn
            </a>
          </h3>
          <h3 className="hover:text-secondary-color">
            <a href="https://github.com/PinkPaca">GitHub</a>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
