import React from 'react';
import Link from 'next/link';

export type Props = {
  href: string;
  title: String;
};

function NavLink({ href, title }: Props) {
  return (
    <div>
      <Link
        href={href}
        className="block my-auto py-2 pl-3 font-serif text-primary-color text-bold sm:text-xl rounded md:p-0 md:hover:text-secondary-color"
      >
        {title}
      </Link>
    </div>
  );
}

export default NavLink;
