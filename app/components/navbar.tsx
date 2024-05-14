'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineMenuFold } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Image from 'next/image';
import { FaBlog } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { RiNewsLine } from "react-icons/ri";
import { RiVoiceprintFill } from "react-icons/ri";
import { SiGooglemarketingplatform } from "react-icons/si";
import { SlSpeech } from "react-icons/sl";
import { TbTextCaption } from "react-icons/tb";
import { SiChatbot } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const WedData = [
  { id: 1, logo: FaBlog, data: "Blog Content", link: "#" },
  { id: 2, logo: FaRegShareSquare, data: "Social Media", link: "#" },
  { id: 7, logo: SiGooglemarketingplatform, data: "Marketing", link: "#" },
  { id: 3, logo: RiNewsLine, data: "Website", link: "#" },
  { id: 4, logo: FaRegImage, data: "AI Image Generator", link: "#" },
  { id: 5, logo: FaBook, data: "Course Builder", link: "#" },
  { id: 6, logo: RiVoiceprintFill, data: "AI Voice Generator", link: "#" },
  { id: 8, logo: SlSpeech, data: "Speech Content", link: "/" },
  { id: 9, logo: TbTextCaption, data: "Image Caption Generator", link: "/CaptionGenerator" },
  { id: 10, logo: SiChatbot, data: "AI Chat", link: "#" },
  { id: 11, logo: FaYoutube, data: "Youtube Content", link: "#" }, // Assuming "AI Chat" was a typo and should be "Youtube Content" for this entry
];
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
        setShowContent(false);
      };
      const handleLinkClick = () => {
        setShowContent(!showContent); 
      };
  return (
    <div className={`items-center ${isMenuOpen ?' absolute':' sticky'}  top-0 z-50 w-full `}>
        <div className={`px-4 mx-auto sm:px-6 lg:px-8  border-b-white ${isMenuOpen ?'bg-black':' bg-gradient-to-r from-[#471c7c]/40 to-[#030616]/20'} lg:bg-gradient-to-r from-[#471c7c]/40 to-[#030616]/20 backdrop-blur-sm `}>
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <Link href="#" title="" className="flex">
                        <Image height={100} width={300} className="w-auto h-10" src="/assets/Logo.png" alt="logo" />
                    </Link>
                </div>

    <div className="lg:hidden">
      
      <button className=" h-auto w-auto" onClick={toggleMenu}>
      {isMenuOpen ? <ImCross className=" text-white h-6 w-auto hover:scale-95" />: <AiOutlineMenuFold className=" text-white h-8 w-auto hover:scale-95" />}
      </button>
    </div>
      
        <div className="hidden w-full ml-10 mt-3 lg:flex md:items-center justify-between  lg:space-x-10">
                   <div className='flex lg:space-x-10'>
                    <Link href="#" title="" className="text-lg font-light py-1 transition-all duration-200 border-b-2 border-transparent hover:border-b-2 hover:border-[#af4db7] text-white"> About </Link>

                    <div className="group relative py-1">
                <Link
                  href="#"
                  title=""
                  className="text-lg font-light py-1 transition-all duration-200 border-b-2 border-transparent hover:border-b-2 hover:border-[#af4db7] text-white"
                >
                  AI Tools
                </Link>
                <div className="absolute top-[26px] -left-24 transition group-hover:translate-y-4 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 xl:w-[1050px] w-[800px] transform">
                  <ul className="relative px-10 py-14 bg-[#020511] rounded-xl items-center shadow-xl w-full z-10 overflow-y-auto siderbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                   {WedData.map(item=>(
                    <li key={item.id}>
                      <Link href={item.link} className=" text-base items-center text-center px-4 py-2 text-white hover:opacity-75 flex transition-all duration-400 ">
                        {item.logo({ size: 25, className: "mr-2" })}{item.data}
                      </Link>
                    </li>
                   ))}
                   
                  </ul>
                </div>
              </div>
                    <Link href="#" title="" className="text-lg font-light py-1 transition-all duration-200 border-b-2 border-transparent hover:border-b-2 hover:border-[#af4db7] text-white"> APIs </Link>

                    <Link href="#" title="" className="text-lg font-light py-1 transition-all duration-200 border-b-2 border-transparent hover:border-b-2 hover:border-[#af4db7] text-white"> Pricing </Link>
                    <Link href="#" title="" className="text-lg font-light py-1 transition-all duration-200 border-b-2 border-transparent hover:border-b-2 hover:border-[#af4db7] text-white"> Blogs </Link>
                    </div>
<div className=' flex gap-x-1'>
  
        <Link href="#" title="" className=" bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full undefined" role="button"> Sign in </Link>
                    <Link href="#" title="" className="max-lg:hidden  text-center items-center text-white border-[2.5px] rounded-3xl px-5 flex justify-center md:text-base text-sm tracking-wider font-semibold " role="button"> Log in </Link>
</div>

                </div>
            
            
            </div>
        </div>
        <div className={`${isMenuOpen ? 'z-50 transform origin-top transition-all opacity-100 duration-300 translate-y-0' : ' -translate-y-12 opacity-0 transition-all duration-300 pointer-events-none'} bg-black w-full lg:hidden h-auto absolute px-4 py-2 `}>
        <div className=" block ml-auto ">
        <Link href="#" title="" className="w-full flex justify-between border-b !text-white border-transparent/30 items-center font-light py-3"> Home </Link>

        <Link href="#" title="" className="w-full flex justify-between border-b !text-white border-transparent/30 items-center font-light py-3"> About </Link>

        <div className="group relative py-1">
      <Link
        href="#"
        title=""
        className="w-full flex justify-between border-b text-white border-transparent/30 items-center font-light py-3"
        onClick={handleLinkClick} 
      >
        AI APIs<FaAngleDown/>
      </Link>
      
      {showContent && (
        <div className="relative transition duration-500 ease-in-out z-50 w-full">
          <ul className="w-full text-white h-full items-center px-1 pb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {WedData.map(item => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="w-full text-white h-full flex flex-row items-center gap-3 px-1 pb-3 hover:opacity-80"
                >
                  {item.logo({ size: 25, className: "mr-2" })}
                  {item.data}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
<Link href="#" title="" className="w-full flex justify-between border-b !text-white border-transparent/30 items-center font-light py-3"> APIs </Link>

<Link href="#" title="" className="w-full flex justify-between border-b !text-white border-transparent/30 items-center font-light py-3"> Pricing </Link>
<Link href="#" title="" className="w-full flex justify-between border-b !text-white border-transparent/30 items-center font-light py-3"> Blogs </Link>

<div className='w-full flex flex-col justify-center items-center text-center gap-6 py-10'> 
      <Link href={'#'} className=' sm:w-3/4 w-full bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full'>Sign Up</Link>
      <Link href={'#'} className='sm:w-3/4 w-full text-white border-2 rounded-3xl px-3 py-2.5 text-sm'>Log In</Link>
</div>
</div>

    </div>
   </div> 
  
  )
}

export default Navbar