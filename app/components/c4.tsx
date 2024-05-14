import React from 'react';
import Faq from './smallC/faq';
import { animationData } from '../data';
import ScrollAnimation from './smallC/animation';

interface ComponentProps {
  qnaData: { quest: string; answer: string }[];
}

const Componenta4: React.FC<ComponentProps> = ({ qnaData }) => {
  return (
    <div>
      <ScrollAnimation animationData={animationData[3]}>
      <p className='lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4'>
        <span className='border-text text-white opacity-50 absolute -top-2 md:top-3 lg:top-2  lg:left-14'>FREQUENTLY ASKED</span>
        <span className='gradient-text text-white relative lg:p-6 p-6'>QUESTIONS</span>
      </p>
      </ScrollAnimation>
      <p className='md:text-lg text-md font-semibold leading-[36px] !text-white lg:px-10 md:p-6 p-4'>We're dedicated to assisting individuals interested in generating AI-driven content and images.</p>
      {qnaData.map((item, index) => (
        <ScrollAnimation key={index} animationData={animationData[1]}>
          <Faq  question={item.quest} answer={item.answer} />
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default Componenta4;
