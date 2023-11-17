import * as React from 'react';
import NavLink from './NavLink';
import { navLink, navLinkList } from '../Models/Models';
import { Switch } from '@mui/material';

export interface IMenuOverlayProps {
  links: navLinkList;
}

export default function MenuOverlay(props: IMenuOverlayProps) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex flex-col py-4 items-center bg-secondary-color bg-opacity-50">
      {props.links.map((link: navLink, index: number) => {
        return (
          <ul
            key={index}
            className="hover:bg-secondary-color w-[100%] text-center"
          >
            <NavLink href={link.path} title={link.title} />
          </ul>
        );
      })}
      <div className="flex space-x-0.5 my-auto mt-4">
        <p className="my-auto text-primary-color font-serif text-sm">ENG</p>
        <Switch
          color="default"
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <p className="my-auto text-primary-color font-serif text-sm">KOR</p>
      </div>
    </div>
  );
}
