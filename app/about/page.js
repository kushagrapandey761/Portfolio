export default function About() {
  return (
    <div className="flex flex-col items-center mt-[30px] sm:mt-[50px] px-4 sm:px-0">
      <div className="animate">
        <h1 className="text-[#00ADB5] text-2xl sm:text-3xl font-bold font-playwrite">
          About Me
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center mt-[20px] sm:mt-[30px] w-full sm:w-[500px]">
        <h1 className="text-white text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
          I am a Computer Science student specializing in Artificial
          Intelligence and Machine Learning. Currently pursuing my B.Tech at the
          University of Petroleum and Energy Studies, I have hands-on experience
          in web development and data analysis. My projects range from creating
          interactive games like &apos;Aimlabs&apos; to developing an accident
          detection system using machine learning. Additionally, I interned at
          HERE Technologies, where I contributed to data extraction and analysis
          for store locations. I am proficient in Python, Java, React, React
          Native, Next.js, among other technologies.
        </h1>
      </div>
    </div>
  );
}
