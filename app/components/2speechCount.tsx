import React from 'react'
import Conponent1 from './c1';
import Conponent2 from './c2';
import Conponent3 from './c3';
import Componenta4 from './c4';
import {DisciverMore, StepsData2, animationData, scQnaData} from '../data'
import Component5 from './c5';
import ScrollAnimation from './smallC/animation';

const SpeechCount = () => {
  return (
    <div>
      <div>
      <ScrollAnimation animationData={animationData[0]}>
      <Conponent1 
      title="IntelliWriter Free Platform For AI Speech Content Generator"
      description="Explore your creativity through digital art exploration. Immerse yourself in a realm of creation and speech text that nurture artistic expression. Whether you're a Voice over artist, Content writer marketer, or seeking to infuse creativity into your projects, our AI-powered tool empowers you to craft captivating Speech text within seconds."
      buttonText="Try Intelliwriter Speech Content Generator For Free !"
      buttonLink="#"
      imageUrl="/assets/stsmain.png"
/>
      </ScrollAnimation>
<Conponent2
  description="Embark on an unstoppable journey of creativity with our Speech Content Generator – where your speech come to life with captivating text in just a few clicks!"
  stepsData={StepsData2}
/>
<Conponent3 discoverMoreData={DisciverMore} description='Unlock the power of AI with our suite of innovative tools, designed to simplify your tasks and elevate your productivity to new heights!'/>
    
    
<Componenta4 qnaData={scQnaData} />

    
    
<Component5 description="Start generating your Image Captions now for free" link="#" />

    
    </div>
    </div>
  )
}

export default SpeechCount