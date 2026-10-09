const Footer = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="container mx-auto flex flex-col items-start gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-10">
        <p className="text-xs text-[#1D271F] sm:text-sm">
          Bazar Dor — essential goods prices at a glance.
        </p>
        <p className="text-xs text-[#1D271F] sm:text-sm">
          All prices are estimates and may change depending on market
          conditions.
        </p>
      </div>
    </div>
  );
};

export default Footer;
