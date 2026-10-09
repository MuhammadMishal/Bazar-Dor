import ProductCard from "@/app/components/shared/ProductCard";
import { allProducts, singleCategory } from "@/lib/api";
import { IAllProducts, ICategoriesNavbar } from "@/types/type";

const SingleCategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const category: ICategoriesNavbar = await singleCategory({
    slug: categoryId,
  });

  const productByCategory = await allProducts();

  const products = productByCategory.filter(
    (product: IAllProducts) => product.category === categoryId,
  );

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:gap-4 sm:p-7">
        <span className="shrink-0 text-3xl sm:text-4xl">{category.icon}</span>
        <div className="min-w-0 space-y-1">
          <h2 className="wrap-break-word text-xl font-bold text-[#1D271F] sm:text-2xl">
            {category.nameBn}
          </h2>
          <p className="text-sm text-[#1d271fa2] sm:text-base">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end rounded-2xl border border-gray-200 bg-white p-3 sm:mt-7 sm:p-5">
        <select defaultValue="Pick a color" className="select w-full sm:w-auto">
          <option disabled={true}>Pick a color</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
      </div>

      <h2 className="pt-6 text-sm text-[#1d271fa1] sm:pt-8 sm:text-base">
        মোট {products.length}টি পণ্য দেখানো হচ্ছে
      </h2>

      <div className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: IAllProducts) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryPage;
