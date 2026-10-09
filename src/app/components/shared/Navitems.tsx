import { allCategories } from "@/lib/api";
import { ICategoriesNavbar } from "@/types/type";
import Link from "next/link";

const Navitems = async () => {
  const categories = await allCategories();

  return (
    <div className="border-t border-gray-100">
      <nav className="container mx-auto flex w-full gap-1 overflow-x-auto px-3 py-2 sm:gap-2 sm:px-6 sm:py-3 lg:px-8">
        {categories.map((cat: ICategoriesNavbar) => (
          <Link
            className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded px-3 py-2 text-sm text-[#1D271F] hover:bg-gray-200 sm:px-5 sm:text-base"
            key={cat.id}
            href={`./category/${cat.id}`}
          >
            {cat.icon} {cat.nameBn}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navitems;
