import Image from "next/image";
import Logo from "@/assets/logo-icon.png";
import Navitems from "./Navitems";
import Marquee from "./ Marquee";
import CurrentDate from "./CurrentDate";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="bg-green-500 rounded p-2 my-3">
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="বাজার দর"
              className="w-7.5 object-contain"
            />
          </div>

          <div>
            <p className="text-[#1D271F] text-xl font-bold">বাজার দর</p>
            <CurrentDate />
          </div>
        </div>

        <div className="flex gap-3">
          <button className="btn border-transparent hover:bg-gray-200">
            সাইন ইন
          </button>
          <button className="btn bg-[#05893e] hover:bg-[#046d32] text-white">
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
