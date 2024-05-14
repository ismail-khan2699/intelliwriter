import Image from 'next/image';
import React from 'react';
import ScrollAnimation from './smallC/animation';
import { animationData } from '../data';

interface ComponentProps {
  description: string;
  stepsData: { imageSrc: string; imageAlt: string; stepNumber: string; title: string; description: string }[];
}

const Conponent2: React.FC<ComponentProps> = ({ description, stepsData }) => {
  return (
    <div>
      <ScrollAnimation animationData={animationData[3]}>
      <p className='lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4'>
        <span className='border-text text-white opacity-50 absolute md:top-3 lg:top-2 top-0 lg:left-14'>How Content</span>
        <span className='gradient-text text-white relative lg:p-6 p-6'>Generates</span>
      </p>
      </ScrollAnimation>
      <div className='md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4'>
        {description}
      </div>
      <div className='w-11/12 h-full mx-auto grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-10'>
        {stepsData.map((step, index) => (
          <ScrollAnimation key={index} animationData={animationData[5]}>
            
          <div  className='w-full flex flex-col max-md:justify-center items-center'>
            <Image src={step.imageSrc} height={400} width={450} className='shadow-[#ac7aeb] shadow-lg h-80 md:h-52 lg:h-72 w-full rounded-xl border border-[#1f1f7a]' alt={step.imageAlt} />
            <div className='flex text-white flex-col pt-5 text-center'>
              <p className='text-lg md:text-xl font-semibold my-2'>{step.stepNumber}</p>
              <p className='text-base font-semibold md:text-lg'>{step.title}</p>
              <p className='text-base font-light md:text-lg'>{step.description}</p>
            </div>
          </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Conponent2;
