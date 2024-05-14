'use client'
import React from 'react'
import { GoPlus } from "react-icons/go";
import { useState, useEffect, useRef } from 'react';
import { FiMinus } from "react-icons/fi";

interface QnaProps {
    question: string;
    answer: string;
  }


const Faq: React.FC<QnaProps> = ({ question, answer }) =>{
    const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 
  
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
         <div className='my-2 w-11/12 mx-auto overflow-hidden rounded-md border border-[#FFFFFF14] hover:bg-white/10 bg-white/10 transition duration-500'>
        <div className='rounded-sm w-full p-6 py-4 cursor-pointer transition-all duration-300 ease-in-out'>
            <div className='flex items-center w-full justify-between text-white' onClick={toggleContent}>
            <p className='sm:text-base font-medium md:text-xl text-lg  text-white'>{question}</p>
            {isOpen ? <FiMinus size={30} /> : <GoPlus size={30} />}
            </div>
            <div className={` ${isOpen ? 'opacity-100 max-h-[1000px] py-4 px-9 duration-500' : 'opacity-0 h-0  overflow-hidden'} px-8 drop-shadow-lg transition-all duration-300 ease-in-out max-h-[1000px] overflow-hidden`}>
            <div className='text-white border-t border-t-white/30 font-light md:text-xl text-lg mt-2 py-4'>
            {answer} </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Faq