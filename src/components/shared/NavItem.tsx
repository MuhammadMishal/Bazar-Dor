"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const NavItem = ({
  children,
  id,
}: PropsWithChildren<{
  id: string;
}>) => {
  const pathName = usePathname();
  const isActive = pathName === `/category/${id}`;
  return (
    <Link
      key={id}
      href={`/category/${id}`}
      className={cn(
        "flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded px-3 py-2 text-sm transition-colors sm:px-5 sm:text-base",
        isActive
          ? "bg-green-600 text-white font-medium"
          : "text-[#1D271F] hover:bg-gray-100",
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
