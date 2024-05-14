import React from 'react';
import Image from "next/image";
import Link from 'next/link';

interface ComponentProps {
  description: string;
  link: string;
}

const Component5: React.FC<ComponentProps> = ({ description, link }) => {
  return (
    <div className='relative w-full h-1/2 my-10 flex items-center justify-center'>
      <Image height={100} width={700} src="/assets/bg.png" className='h-72 w-full' alt='edsxcs'/>

      <div className='absolute top-24 w-full flex flex-col items-center justify-center z-10'>
        <p className='text-center text-xl md:text-4xl text-white pointer-events-none'>{description}</p>
        <Link href={link} className='w-fit bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full mt-4'>
          Start Now !
        </Link>
      </div>
    </div>
  );
};

export default Component5;
