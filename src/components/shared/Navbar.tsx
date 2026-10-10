import Image from "next/image";
import Logo from "@/assets/logo-icon.png";
import Navitems from "./Navitems";
import Marquee from "./ Marquee";
import CurrentDate from "./CurrentDate";
import { Suspense } from "react";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8 ">
          <div className="flex gap-3 items-center">
            <div className="my-2 rounded bg-[#05893E] p-1.5 sm:my-3 sm:p-2">
              <Link href="/">
                <Image
                  src={Logo}
                  width={50}
                  height={50}
                  alt="বাজার দর"
                  className="w-6 object-contain sm:w-7.5"
                />
              </Link>
            </div>

            <div>
              <Link
                href="/"
                className="text-lg font-bold text-[#1D271F] sm:text-xl"
              >
                বাজার দর
              </Link>
              <Suspense
                fallback={<p className="text-[12px]">তারিখ লোড হচ্ছে...</p>}
              >
                <CurrentDate />
              </Suspense>
            </div>
          </div>

          <div className="flex shrink-0 gap-1 sm:gap-3">
            <UserInfo />
          </div>
        </div>
        <div className="border-t border-gray-100">
          <nav className="container mx-auto flex w-full gap-1 overflow-x-auto px-3 py-2 sm:gap-2 sm:px-6 sm:py-3 lg:px-8">
            <Suspense
              fallback={Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-8 w-20 animate-pulse rounded-full bg-gray-200 sm:h-9 sm:w-24"
                ></div>
              ))}
            >
              <Navitems />
            </Suspense>
          </nav>
        </div>
      </div>

      <Marquee />
    </>
  );
};

export default Navbar;
