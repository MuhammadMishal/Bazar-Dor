import SingleProductPage from "@/components/product/SingleProduct";
import React, { Suspense } from "react";

const ProductDetails = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-full h-72 sm:h-96 bg-gray-200 rounded-xl"></div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
              <div className="h-20 w-full bg-gray-200 rounded-xl mt-2"></div>
              <div className="h-12 w-full sm:w-40 bg-gray-200 rounded-xl mt-4"></div>
            </div>
          </div>
        </div>
      }
    >
      <SingleProductPage params={params} />
    </Suspense>
  );
};

export default ProductDetails;
