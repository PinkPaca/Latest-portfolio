import React from 'react';
import Image from 'next/image';

type Props = { url: string; name: string; key: number };

function SkillIcon({ url, name }: Props) {
  return (
    <div className="hover:scale-110 transition-all m-4 my-auto p-3 rounded hover:bg-basic-color hover:bg-opacity-50">
      <Image
        src={url}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100px', height: 'auto', margin: 'auto' }}
        alt={name}
      />
    </div>
  );
}

export default SkillIcon;
