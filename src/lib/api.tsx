import type { IAllProducts, ICategoriesNavbar } from "@/types/type";

export const allCategories = async (): Promise<ICategoriesNavbar[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    {
      cache: "force-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export const allProducts = async (): Promise<IAllProducts[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      cache: "force-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch all products");
  }

  return res.json();
};
