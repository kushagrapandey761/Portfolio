import Link from "next/link";

export default function Card({ title, description, link }) {
  return (
    <div className="animate-custom-stop">
      <div
        className="flex flex-col items-center border p-5 border-blue-600 shadow-2xl 
                      w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto 
                      mt-4 mb-4 transform transition-transform duration-300 
                      hover:scale-110 hover:bg-[#393E46] rounded-lg"
      >
        <Link href={link} className="flex flex-col items-center">
          <h1 className="font-caveat text-2xl sm:text-3xl lg:text-4xl text-[#00ADB5]">
            {title}
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#EEEEEE]">
            {description}
          </p>
        </Link>
      </div>
    </div>
  );
}
