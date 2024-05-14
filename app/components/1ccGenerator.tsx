import React from 'react'
import Conponent1 from './c1';
import Conponent2 from './c2';
import Conponent3 from './c3';
import Componenta4 from './c4';
import {DisciverMore, StepsData, animationData, ccQnaData} from '../data'
import Component5 from './c5';
import ScrollAnimation from './smallC/animation';

const CcGenerator = () => {
  return (
    <div>
      <ScrollAnimation animationData={animationData[0]}>   
      <Conponent1 
      title="Unlock Creative Potential With IntelliWriter: Free Image Caption Generator"
      description="Explore your creativity through digital art exploration. Immerse yourself in a realm of creation and dynamic prompts that nurture artistic expression. Whether you're a Influencer, YouTuber, Social Media Manager or seeking to infuse creativity into your projects, our AI-powered tool empowers you to craft captivating Content within seconds."
      buttonText="Try Intelliwriter Image Caption Generator For Free!"
      buttonLink="#"
      imageUrl="/assets/Caption.png"
/>
      </ScrollAnimation>
<Conponent2
  description="Embark on an unstoppable journey of creativity with our Image Caption Generator – where your images come to life with captivating captions in just a few clicks!"
  stepsData={StepsData}
/>
<Conponent3 discoverMoreData={DisciverMore} description='Unlock the power of AI with our suite of innovative tools, designed to simplify your tasks and elevate your productivity to new heights!'/>
    
    
<Componenta4 qnaData={ccQnaData} />

    
    
<Component5 description="Start generating your Image Captions now for free" link="#" />

    
    </div>
  )
}

export default CcGenerator