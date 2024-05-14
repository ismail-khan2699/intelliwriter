import Image from 'next/image'
import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Link from 'next/link';

const Footer = () => {
  const GeneralLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "#" },
    { name: "APIs", link: "#" },
    { name: "Blogs", link: "#" },
    { name: "Contact", link: "#" }
  ];
  const ImportantLinks = [
    { name: "Terms and Conditions", link: "#" },
    { name: "FAQs", link: "#" },
    { name: "Privacy Policy", link: "#" },
  ];

  const FeaturesLinks = [
    { name: "Social Content", link: "#" },
    { name: "Blog Content", link: "#" },
    { name: "Website Content", link: "#" },
    { name: "Marketing Content", link: "#" },
    { name: "Image Generator", link: "#" },
    { name: "Voice Generator", link: "/" },
    { name: "Text Generator", link: "/CaptionGenerator" },
    { name: "Chatting", link: "#" }
  ];
  return (
    <div className='bg-transparent border-t-2 mt-10 border-gray-500 border-opacity-40 text-white xl:px-16 md:px-6 px-4 w-full'>
      <div className='relative overflow-hidden pb-2 py-10'>
          <div className='w-full flex md:flex-row flex-col justify-between gap-10  md:py-6 p-4'>
              <div className='flex flex-col gap-2 xl:w-2/5'>
                <div className='w-20 md:w-28'>
                  <Image alt='dkjbck' src="/assets/Logo.png" height={100} width={200} className=' w-28 lg:w-48'/>
                </div>
                <div className='py-2 w-11/12'>
                <p className='text-sm lg:text-base !text-white font-extralight'> At IntelliWriter, we are passionate about the power of technology to revolutionize the way we create content.</p>
                </div>

                <div className='flex gap-3 p-2 w-[200px] justify-between'>
                <RiTwitterXFill className=' bg-black  p-1 w-7 h-7  rounded-md cursor-pointer border border-slate-700'/>
                <FaLinkedinIn className=' bg-black  p-1 w-7 h-7  rounded-md cursor-pointer border border-slate-700'/>
                <FaFacebookF className=' bg-black  p-1 w-7 h-7  rounded-md cursor-pointer border border-slate-700'/>
                <IoLogoInstagram className=' bg-black  p-1 w-7 h-7  rounded-md cursor-pointer border border-slate-700'/>
                </div>

              </div>
              <div className='whitespace-nowrap md:mr-28 xl:w-fit w-full flex md:justify-end'>
              <div className='w-full grid md:grid-cols-3 grid-cols-2 md:gap-28 lg:gap-20 gap-10'>
                <div className='w-fit space-y-2'>
                <p className='text-white text-base lg:text-lg font-semibold'>General</p>
                {GeneralLinks.map((item, index)=>(

                <Link key={index} href={item.link}>
                  <p className='py-1 text-sm lg:text-base opacity-75 hover:opacity-100 transition duration-300 font-extralight'>{item.name}</p>
                </Link>
                ))}
                
                </div>
                <div className='w-fit space-y-2'>
                <p className='text-white text-base lg:text-lg font-semibold'>Features</p>
                {FeaturesLinks.map((item, index)=>(

                <Link key={index} href={item.link}>
                  <p className='py-1 text-sm lg:text-base opacity-75 hover:opacity-100 transition duration-300 font-extralight'>{item.name}</p>
                </Link>
                ))}
                
                </div>
                <div className='w-fit space-y-2'>
                <p className='text-white text-base lg:text-lg font-semibold'>Important Links</p>
                {ImportantLinks.map((item, index)=>(

                <Link key={index} href={item.link}>
                  <p className='py-1 text-sm lg:text-base opacity-75 hover:opacity-100 transition duration-300 font-extralight'>{item.name}</p>
                </Link>
                ))}
                
                </div>
              </div>
              </div>
          </div>
          <div className='border-t-2  border-gray-600 border-opacity-50 my-4'></div>
          <div className='my-2 flex gap-x-2 items-center justify-center opacity-75 text-base'>
            <Link href={'#'} className=' text-pink-500 '>Intelliwriter.io</Link>    © All rights reserved.
          </div>
      </div>
    </div>
  )
}

export default Footer