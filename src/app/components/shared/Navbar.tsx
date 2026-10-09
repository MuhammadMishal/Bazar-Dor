import Image from "next/image";
import Logo from "@/assets/logo-icon.png";
import Navitems from "./Navitems";
import Marquee from "./ Marquee";
import CurrentDate from "./CurrentDate";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 items-center">
          <div className="my-2 rounded bg-green-500 p-1.5 sm:my-3 sm:p-2">
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="বাজার দর"
              className="w-6 object-contain sm:w-7.5"
            />
          </div>

          <div>
            <p className="text-lg font-bold text-[#1D271F] sm:text-xl">
              বাজার দর
            </p>
            <Suspense
              fallback={<p className="text-[12px]">তারিখ লোড হচ্ছে...</p>}
            >
              <CurrentDate />
            </Suspense>
          </div>
        </div>

        <div className="flex shrink-0 gap-1 sm:gap-3">
          <button className="btn btn-sm border-transparent px-2 hover:bg-gray-200 sm:btn-md sm:px-4">
            সাইন ইন
          </button>
          <button className="btn btn-sm bg-[#05893e] px-2 text-white hover:bg-[#046d32] sm:btn-md sm:px-4">
            সাইন আপ
          </button>
        </div>
      </div>

      <Navitems />
      <Marquee />
    </div>
  );
};

export default Navbar;
