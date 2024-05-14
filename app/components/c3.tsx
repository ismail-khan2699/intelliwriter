import React from 'react';
import Link from 'next/link';
import ScrollAnimation from './smallC/animation';
import { animationData } from '../data';

interface ComponentProps {
  discoverMoreData: { link: string; bgcolor: string; color: string; logo: React.FC<any>; data: string }[];
  description: string;
}

const Conponent3: React.FC<ComponentProps> = ({ discoverMoreData, description }) => {
  return (
    <div className='mt-24 mb-24'>
      <ScrollAnimation animationData={animationData[3]}>
      <p className='lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4'>
        <span className='border-text text-white opacity-50 absolute -top-2 md:top-3 lg:top-2  lg:left-14'>Discover More</span>
        <span className='gradient-text text-white relative lg:p-6 p-6'>AI Tools</span>
      </p>
      </ScrollAnimation>
      <ScrollAnimation animationData={animationData[3]}>
      <p className='md:text-lg text-md font-semibold leading-[36px] !text-white lg:px-10 md:p-6 p-4'>{description}</p>
      </ScrollAnimation>
      <ScrollAnimation animationData={animationData[3]}>
      <div className='w-full max-md:px-4 md:w-11/12 justify-center items-center md:mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {discoverMoreData.map((item, index) => (
          <Link href={item.link} key={index} className={`flex items-center bg-blue-900 p-3 gap-3 bg-opacity-20 w-full rounded-lg mx-auto`}>
            <div className='items-center justify-center  w-8 h-8 rounded-md text-lg flex' style={{ background: item.bgcolor, color: item.color }}>
              <item.logo />
            </div>
            <p className={`text text-white text-xl`}>{item.data}</p>
          </Link>
        ))}
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default Conponent3;
