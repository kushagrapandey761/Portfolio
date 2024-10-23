import Link from "next/link";

export default function Card({ title, description, link }) {
  return (
    <div className="animate-custom-stop">
      <div className="flex flex-col items-center border p-5 border-blue-600 shadow-2xl w-[400px] h-[300px] mt-[30px] mb-[30px] transform transition-transform duration-300 hover:scale-110 hover:bg-slate-200">
        <Link href={link} className="flex flex-col items-center">
          <h1 className=" font-caveat text-3xl">{title}</h1>
          <p className="mt-[20px]">{description}</p>
        </Link>
      </div>
    </div>
  );
}
