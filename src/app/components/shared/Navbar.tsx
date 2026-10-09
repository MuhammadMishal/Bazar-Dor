import Image from "next/image";
import Logo from "@/assets/logo-icon.png";
import Navitems from "./Navitems";
import Marquee from "./ Marquee";

const Navbar = async () => {
  const date = new Date().toLocaleDateString("bn-bd", {
    dateStyle: "full",
  });

  return (
    <div>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Item */}
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
          <div className="">
            <p className="text-[#1D271F] text-xl font-bold">বাজার দর</p>
            <p className="text-[12px]">{date}</p>
          </div>
        </div>

        {/* Right Item */}
        <div className="flex gap-3">
          <button className="rounded-lg text-[16px] font-medium bg-transparent btn border-transparent hover:border hover:bg-gray-200">
            সাইন ইন
          </button>
          <button className="btn bg-[#05893e] hover:bg-[#046d32] text-white rounded-lg text-[16px] font-medium">
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
