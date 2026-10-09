import type { IAllProducts, ICategoriesNavbar } from "@/types/type";

const API_BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

export const allCategories = async (): Promise<ICategoriesNavbar[]> => {
  const res = await fetch(`${API_BASE_URL}/categories`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export const allProducts = async (): Promise<IAllProducts[]> => {
  const res = await fetch(`${API_BASE_URL}/products`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch all products");
  }

  return res.json();
};

export const singleProduct = async ({
  slug,
}: {
  slug: string;
}): Promise<IAllProducts> => {
  console.log(slug, "slug from api");
  const res = await fetch(`${API_BASE_URL}/products/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Product");
  }
  return res.json();
};

export const singleCategory = async ({
  slug,
}: {
  slug: string;
}): Promise<ICategoriesNavbar> => {
  const res = await fetch(`${API_BASE_URL}/categories/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Category");
  }
  return res.json();
};

export const getProductsByCategoryId = async (
  categoryId: string,
): Promise<IAllProducts[]> => {
  const res = await fetch(`${API_BASE_URL}/products?category=${categoryId}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products by category");
  }

  return res.json();
};
