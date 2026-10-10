import SingleCategoryPage from "@/components/category/SingleCategory";
import { Suspense } from "react";

const CategoryDetails = ({
  params,
  searchParams,
}: {
  params: Promise<{ categoryId: string }>;
  searchParams?: Promise<{ sort?: string }>;
}) => {
  return (
    <Suspense
      fallback={
        <div className="p-6 bg-[#f4f7f4] min-h-screen">
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 flex items-center gap-4 animate-pulse border border-gray-100">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="w-32 h-6 bg-gray-200 rounded-md"></div>
              <div className="w-48 h-4 bg-gray-200 rounded-md"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6 animate-pulse px-1">
            <div className="w-36 h-5 bg-gray-200 rounded-md"></div>
            <div className="w-28 h-9 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm animate-pulse flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0"></div>
                  <div className="space-y-2 flex-1">
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-5 bg-gray-200 rounded"></div>
                    <div className="w-14 h-6 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <SingleCategoryPage params={params} searchParams={searchParams} />
    </Suspense>
  );
};

export default CategoryDetails;
