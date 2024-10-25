import Image from "next/image";
import profileImg from "@/assets/images/kushagra.jpeg"

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center mt-[100px]">
        <div className="mt-[100px] ml-[200px] space-x-4 animate-fade-slide-in-left">
          <Image
            src={profileImg}
            alt="Profile picture"
            className="w-[200px] h-[200px] rounded-full"
          />
        </div>
        <div className="w-[900px] animate-fade-slide-in-right mt-[100px] ml-[180px] mr-[50px]">
          <h1 className=" text-[#EEEEEE]">
            <span className="text-5xl text-[#00ADB5] font-bold font-arima">
              Hi, I&apos;m Kushagra Pandey
            </span><br/><br/>
            <span className="ml-[130px]">Student at UPES | Full Stack Developer</span>
             
          </h1>
        </div>
      </div>
    </main>
  );
}
