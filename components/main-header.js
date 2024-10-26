"use client";
import Link from "next/link";
import Image from "next/image";
import homeImg from "@/assets/icons/home.png";
import { useState } from "react";

export default function MainHeader() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image className="h-8 w-auto" src={homeImg} alt="Home" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={handleClick}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-[#EEEEEE]"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="text-sm font-semibold leading-6 text-[#EEEEEE]"
            >
              My Projects
            </Link>
          </div>
        </nav>

        <div
          className={`${isVisible ? "lg:hidden" : "hidden lg:hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 animate-fade-slide-in-right w-1/2">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleClick}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root animate-fade-slide-in-right">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Me
                  </Link>
                  <Link
                    href="/projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    My Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
