import Image from "next/image";
import HeroImage from "@/assets/bazar-hero.png";
import CurrentDate from "../shared/CurrentDate";
import { Suspense } from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-4 sm:p-6 md:grid-cols-3 md:items-center md:gap-5 md:p-8 lg:p-10"
      lang="bn"
      spellCheck={false}
    >
      <div
        className="order-2 text-center md:order-1 md:col-span-2 md:text-left"
        spellCheck={false}
      >
        <Suspense fallback={<p className="text-[12px]">তারিখ লোড হচ্ছে...</p>}>
          <CurrentDate />
        </Suspense>

        <h1
          className="py-3 text-3xl font-bold leading-tight text-[#1D271F] sm:text-4xl lg:text-5xl"
          spellCheck={false}
        >
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p
          className="mx-auto max-w-xl pb-5 text-base text-[#1D271F] sm:text-lg md:mx-0"
          spellCheck={false}
        >
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <Link
          href="#all-products"
          className="btn w-full rounded-xl bg-[#05893e] px-5 py-4 text-base font-semibold text-white sm:w-auto sm:py-5 sm:text-lg"
          spellCheck={false}
        >
          সব পণ্য দেখুন
        </Link>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:col-span-1">
        <Image
          src={HeroImage}
          className="mx-auto h-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px]"
          alt="বাজার দর"
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
