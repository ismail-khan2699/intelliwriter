import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import ScrollAnimation from './smallC/animation';
import {animationData} from '../data'

interface ComponentProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const Conponent1: React.FC<ComponentProps> = ({ title, description, buttonText, buttonLink, imageUrl }) => {
  return (
    <div className='h-full bg-gradient-to-b from-[#471c7c]/40 to-[#030616]/20 backdrop-blur-sm my-16'>
      
      <div className='mx-auto  md:px-0 py-20 flex flex-col lg:flex-row items-center text-white justify-center'>
        <div className='w-full mb-6 mx-10 md:mx-20 lg:mx-4 lg:w-3/5 px-4 gap-y-3'>
          <p className='text-3xl md:text-5xl mx-5 lg:mx-0 font-semibold capitalize w-[90%] xl:w-[85%] lg:text-start text-center'>{title}</p>
          <p className='text-sm md:text-lg mx-5 lg:mx-0 my-4 w-[90%] text-center lg:text-start'>{description}</p>
          <div className='w-fit mx-auto lg:mx-0 justufy-center lg:justify-start text-center lg:text-left'>
            <Link href={buttonLink} className='w-full bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full undefined'>{buttonText}</Link>
          </div>
        </div>
        <div className='w-full lg:w-1/2 pt-5 px-4 md:pt-5 lg:pt-0 flex justify-center'>
          <Image height={100} width={1000} className="h-[20rem] md:w-[35rem] md:h-[25rem] z-10  rounded-2xl" src={imageUrl} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Conponent1