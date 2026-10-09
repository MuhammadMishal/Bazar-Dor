import Image from "next/image";
import HeroImage from "@/assets/bazar-hero.png";
import CurrentDate from "../shared/CurrentDate";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-white rounded-2xl p-6 md:p-10 items-center">
      <div className="md:col-span-2">
        <CurrentDate />

        <h1 className="text-[#1D271F] font-bold text-4xl py-4">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="text-[#1D271F] pb-5">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <button className="btn bg-[#05893e] rounded-xl text-white font-semibold text-lg py-7 px-5">
          সব পণ্য দেখুন
        </button>
      </div>

      <div className="md:col-span-1 flex justify-center">
        <Image
          src={HeroImage}
          className="mx-auto"
          alt="বাজার দর"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default HeroSection;
