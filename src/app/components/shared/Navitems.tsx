import { allCategories } from "@/lib/api";
import { ICategoriesNavbar } from "@/types/type";
import Link from "next/link";

const Navitems = async () => {
  const categories = await allCategories();

  return (
    <div className="border-t border-gray-100 ">
      <div className="container mx-auto flex justify-center py-3">
        {categories.map((cat: ICategoriesNavbar) => (
          <Link
            className="flex gap-2 justify-center items-center rounded text-[#1D271F] hover:bg-gray-200 py-1.5 px-5"
            key={cat.id}
            href={`./categories/${cat.slug}`}
          >
            {cat.icon} {cat.nameBn}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navitems;
