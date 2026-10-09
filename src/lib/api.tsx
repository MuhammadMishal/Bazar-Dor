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

export const singleProduct = async ({
  slug,
}: {
  slug: string;
}): Promise<IAllProducts> => {
  console.log(slug, "slug from api");
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${slug}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Product");
  }
  return res.json();
};

export const singleCategory = async ({ slug }: { slug: string }) => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/categories/${slug}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Category");
  }
  return res.json();
};
