import Link from "next/link";
import Image from "next/image";
import githubImg from "@/assets/icons/github.png";
import instagramImg from "@/assets/icons/instagram.png";
import xImg from "@/assets/icons/X.png";
import linkedinImg from "@/assets/icons/linkedin.png";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center mt-[100px] pb-[50px] animate-fade-slide-in-top">
        <div className="relative border bg-[#FFB38E] border-gray-400 rounded-3xl p-3 flex justify-center items-center w-fit overflow-hidden">
          <div className="flex flex-row items-center h-[50px] space-x-2">
            <Link href="https://github.com/thundergaming761">
              <Image
                className="px-2 transition-transform transform hover:scale-125 "
                alt="Github logo"
                src={githubImg}
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://www.instagram.com/kushagra_761/">
              <Image
                className="px-2 transition-transform transform hover:scale-125"
                alt="Instagram logo"
                src={instagramImg}
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://x.com/Kushagr67709074">
              <Image
                className="px-2 transition-transform transform hover:scale-125"
                alt="X logo"
                src={xImg}
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/kushagra-pandey-525253245/">
              <Image
                className="px-2 transition-transform transform hover:scale-125"
                alt="LinkedIn logo"
                src={linkedinImg}
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
