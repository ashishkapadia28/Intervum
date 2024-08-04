import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "./dashboard/_components/Header";
import Link from "next/link";


export default function Home() {
  return (
   <div>
          <div className="main-container relative bg-white -screen h-screen overflow-hidden">
      <div className="blur-circle1 absolute left-[10%] top-[20%] w-[200px] h-[200px] bg-gradient-to-b from-blue to-darkblue rounded-full blur-[120px]"></div>
      <div className="blur-circle2 absolute right-[10%] top-[20%] w-[200px] h-[200px] bg-gradient-to-b from-blue to-darkblue rounded-full blur-[100px]"></div>
      
      {/* Start Landing Page */}
      <div className="landing-page">
        <Header/>
       
        
        <div className="content flex items-center justify-between min-h-[calc(100vh-80px)] p-4 container mx-auto md:flex-row flex-col gap-[140px] md:gap-0 md:justify-between">
          <div className="info w- md:text-left text-center mb-4 md:mb-0">
            <h1 className="text-[44px] text-blue-400">Prepare for Your Interview</h1>
            <p className="text-[15px] leading-[1.6] text-black-400">Practice with mock interviews and receive detailed feedback to understand where you stand.</p>
            <p className="text-[15px] leading-[1.6] text-black-400">"Intervum: Ace Every Interview"</p>
            <Link href={"/dashboard"}>
            
            <Button className="mt-4 px-6 py-6 bg-primary text-white rounded-xl">Get Started</Button>
            </Link>
          </div>
          <div className="image">
          <img className="main-image w-[750px] h-[600px] object-contain" src="/3Dimg.png" alt="Main"/>
          </div>
        </div>
      
        
      </div>
      {/* End Landing Page */}
    </div>
   

   </div>
  );
}
