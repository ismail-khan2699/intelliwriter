import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CcGenerator from "./components/1ccGenerator";
import SpeechCount from "./components/2speechCount";

export default function Home() {
  return (
    <div className=" bg-custom-bodyBg">
    <Navbar/>
    <SpeechCount/>
    <Footer/>
    </div>
  );
}
