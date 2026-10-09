import { IAllProducts, ICategoriesNavbar } from "@/types/type";
export const allCategories = async (): Promise<ICategoriesNavbar[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};

export const allProducts = async (): Promise<IAllProducts[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch All Products");
  }
  return res.json();
};
