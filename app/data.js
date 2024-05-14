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
import { FaYoutube } from "react-icons/fa";
import { link } from "fs";

const StepsData = [
  {
    imageSrc: "/assets/st1.png",
    imageAlt: "Step 1",
    stepNumber: "Step #1",
    title: "Access Intelliwriter Image Caption Generator",
    description:
      "Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
  },
  {
    imageSrc: "/assets/Caption.png",
    imageAlt: "Step 2",
    stepNumber: "Step #2",
    title: "Enter Prompt to Search",
    description:
      "Within the Image Caption Generator, you'll find a dropdown to select caption tone, blank for additional Information and a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your image transform into caption.",
  },
  {
    imageSrc: "/assets/Caption.png",
    imageAlt: "Step 3",
    stepNumber: "Step #3",
    title: "Wait For the Response",
    description:
      "Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
  },
  {
    imageSrc: "/assets/Caption.png",
    imageAlt: "Step 4",
    stepNumber: "Step #4",
    title: "Get ready to be amazed",
    description: "your image caption is ready",
  },
];
const StepsData2 = [
  {
    imageSrc: "/assets/sts1.png",
    imageAlt: "Step 1",
    stepNumber: "Step #1",
    title: "Access Intelliwriter AI Speech Text Generator",
    description:
      "Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
  },
  {
    imageSrc: "/assets/sts2.png",
    imageAlt: "Step 2",
    stepNumber: "Step #2",
    title: "Enter Prompt to Search",
    description:
      "Within the AI Speech text generator , you'll find a Voice recorder and option to upload any speech file and then submit eagerly awaiting your inspiration. Guide the AI with your speech and watch the transformation of your speech into text.",
  },
  {
    imageSrc: "/assets/sts3.png",
    imageAlt: "Step 3",
    stepNumber: "Step #3",
    title: "Wait For the Response",
    description:
      " Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
  },
  {
    imageSrc: "/assets/sts4.png",
    imageAlt: "Step 4",
    stepNumber: "Step #4",
    title: "Get ready to be amazed",
    description: "your AI Speech text is ready.",
  },
];

const DisciverMore = [
  {
    logo: FaBlog,
    data: "Blog Content",
    bgcolor: "#dcfce7",
    color: "#16a34a",
    link: "#",
  },
  {
    logo: FaRegShareSquare,
    data: "Social Media",
    bgcolor: "#fef9c3",
    color: "#facc15",
    link: "#",
  },
  {
    logo: SiGooglemarketingplatform,
    data: "Marketing",
    bgcolor: "#dbeafe",
    color: "#2563eb",
    link: "#",
  },
  {
    logo: RiNewsLine,
    data: "Website",
    bgcolor: "#fee2e2",
    color: "#dc2626",
    link: "#",
  },
  {
    logo: FaRegImage,
    data: "AI Image Generator",
    bgcolor: "#80fcf0",
    color: "4e7471",
    link: "#",
  },
  {
    logo: FaBook,
    data: "Course Builder",
    bgcolor: "#f3e8ff",
    color: "#9333ea",
    link: "#",
  },
  {
    logo: SiChatbot,
    data: "AI Chat",
    bgcolor: "#e58409",
    color: "#e2bf93",
    link: "#",
  },
  {
    logo: RiVoiceprintFill,
    data: "AI Voice Generator",
    bgcolor: "#e17be8",
    color: "white",
    link: "#",
  },
  {
    logo: TbTextCaption,
    data: "Image Caption Generator",
    bgcolor: "rgb(59, 148, 9)",
    color: " rgb(165, 220, 134)",
    link: "/CaptionGenerator",
  },
  {
    logo: SlSpeech,
    data: "Speech to Text",
    bgcolor: "#ff8a65",
    color: "#ff5722",
    link: "/",
  },
  {
    logo: FaYoutube,
    data: "Youtube Content Generator",
    bgcolor: "red",
    color: "white",
    link: "#",
  },
];

const ccQnaData = [
  {
    quest: "How Does Your Image Caption Generator Work?",
    answer:
      "Our Image Caption Generator utilizes advanced AI algorithms to generate descriptive captions for images. It seamlessly analyzes the visual content and generates text that accurately describes the elements within the image. Whether you're a content creator, marketer, or social media enthusiast, our tool enables you to create engaging captions in just a few clicks.",
  },
  {
    quest: "Can I Customize the Style and Tone of the Generated Captions?",
    answer:
      "Certainly! Our Image Caption Generator offers customization options to tailor the style and tone of the generated captions. You can adjust the tone, of the captions to align with your brand voice and audience preferences. It's a versatile tool that adapts to your unique storytelling needs.",
  },
  {
    quest:
      "What Types of Content Can Benefit from the Image Caption Generator?",
    answer:
      "Our Image Caption Generator is beneficial for various types of content projects. Whether you're creating social media posts, blog articles, marketing materials, or product descriptions, this tool provides descriptive captions that enhance the visual storytelling aspect of your content.",
  },
  {
    quest: "Are the Generated Captions Free to Use?",
    answer:
      "Absolutely! You have full ownership of the captions generated by our tool. There are no royalties or usage restrictions imposed on the generated content. You can freely use the captions to complement your images across different platforms and channels.",
  },
  {
    quest:
      "How Can Your Image Caption Generator Enhance Creativity in Content Creation?",
    answer:
      "Unlock your creativity with our AI-driven Image Caption Generator. It provides a diverse range of caption suggestions and customization features that inspire creative expression. Whether you're crafting professional content or personal projects, this tool empowers you to convey your message effectively through captivating captions.",
  },
];

const scQnaData = [
  {
    quest: "What Are the Benefits of Using a Speech-to-Text Generator?",
    answer:
      "A Speech-to-Text Generator offers numerous benefits, including increased productivity, accessibility, and accuracy. It allows users to transcribe spoken words into written text quickly and efficiently, making it ideal for tasks such as note-taking, transcription, and content creation.",
  },
  {
    quest: "How Accurate Is Speech-to-Text Technology?",
    answer:
      "Speech-to-Text technology has significantly improved in accuracy over the years. Modern speech recognition algorithms leverage machine learning and artificial intelligence to achieve high levels of accuracy, especially in clear and noise-free environments. However, accuracy may vary depending on factors such as background noise, accents, and speech patterns.",
  },
  {
    quest:
      "Can Speech-to-Text Generators Handle Different Languages and Dialects?",
    answer:
      "Yes, many Speech-to-Text generators support multiple languages and dialects, allowing users to transcribe speech in various languages and accents. These generators often come with language models trained on diverse datasets to ensure accurate transcription across different linguistic contexts.",
  },
  {
    quest: "Is Speech-to-Text Technology Suitable for Professional Use?",
    answer:
      "Absolutely! Speech-to-Text technology is widely used in professional settings for tasks such as dictation, transcription, and voice commands. It streamlines workflow processes, increases efficiency, and enables real-time transcription, making it indispensable in industries such as healthcare, legal, journalism, and more.",
  },
  {
    quest:
      "How Can I Ensure Privacy and Security When Using Speech-to-Text Generators?",
    answer:
      "To ensure privacy and security when using Speech-to-Text generators, it's essential to choose reputable and trusted providers that prioritize data protection. Look for generators that offer encryption, secure storage of transcribed data, and clear privacy policies. Additionally, consider whether the generator allows users to control their data and opt-out of data collection if necessary.",
  },
];
const animationData = [
  {
    id: 0,
    afters: "scale-100 opacity-100",
    befores: "scale-x-50 opacity-0",
    duration: "duration-1000",
  },
  {
    id: 1,
    afters: "translate-y-0 opacity-100",
    befores: "translate-y-36 opacity-0",
    duration: "duration-700",
  },
  {
    id: 2,
    afters: "translate-y-0",
    befores: "translate-y-64",
    duration: "duration-700",
  },
  {
    id: 3,
    afters: "translate-x-0 scale-100 opacity-100",
    befores: "-translate-x-64 scale-75 opacity-10",
    duration: "duration-700",
  },
  {
    id: 4,
    afters: "translate-x-0 scale-100 opacity-100",
    befores: "translate-x-64 scale-75 opacity-10",
    duration: "duration-700",
  },
  {
    id: 5,
    afters: "translate-x-0 scale-100 opacity-100",
    befores: "translate-x-14 scale-50 opacity-10",
    duration: "duration-700",
  },
];

export {
  StepsData,
  StepsData2,
  DisciverMore,
  ccQnaData,
  scQnaData,
  animationData,
};
