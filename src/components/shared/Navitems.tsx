"use client";

import { allCategories } from "@/lib/api";
import { ICategoriesNavbar } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavItems = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<ICategoriesNavbar[]>([]);

  useEffect(() => {
    allCategories().then(setCategories);
  }, []);

  return categories.map((cat) => {
    const isActive = pathname === `/category/${cat.id}`;
    return (
      <Link
        key={cat.id}
        href={`/category/${cat.id}`}
        className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded px-3 py-2 text-sm transition-colors sm:px-5 sm:text-base ${
          isActive
            ? "bg-green-600 text-white font-medium"
            : "text-[#1D271F] hover:bg-gray-100"
        }`}
      >
        <span>{cat.icon}</span>
        <span>{cat.nameBn}</span>
      </Link>
    );
  });
};

export default NavItems;
