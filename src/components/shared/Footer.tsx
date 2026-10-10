const Footer = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="container mx-auto flex flex-col items-start gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-10">
        <p className="text-xs text-[#1D271F] sm:text-sm">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-xs text-[#1D271F] sm:text-sm">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </div>
  );
};

export default Footer;
