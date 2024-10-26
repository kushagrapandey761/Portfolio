import Image from "next/image";
import profileImg from "@/assets/images/kushagra.jpeg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center mt-[50px] sm:mt-[100px] sm:flex-row sm:justify-center">
        <div className="mt-[50px] sm:mt-[100px] sm:ml-[50px] md:ml-[100px] lg:ml-[200px] space-x-0 sm:space-x-4 animate-fade-slide-in-left">
          <Image
            src={profileImg}
            alt="Profile picture"
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full"
          />
        </div>
        <div className="w-[90%] sm:w-[600px] md:w-[700px] lg:w-[900px] animate-fade-slide-in-right mt-[20px] sm:mt-[100px] sm:ml-[20px] md:ml-[80px] lg:ml-[180px] mr-[20px] sm:mr-[50px] text-center sm:text-left">
          <h1 className="text-[#EEEEEE]">
            <span className="text-3xl sm:text-4xl md:text-5xl text-[#00ADB5] font-bold font-arima">
              Hi, I&apos;m Kushagra Pandey
            </span>
            <br />
            <br />
            <span className="block sm:inline ml-0 sm:ml-[30px] md:ml-[130px]">
              Student at UPES | Full Stack Developer
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
