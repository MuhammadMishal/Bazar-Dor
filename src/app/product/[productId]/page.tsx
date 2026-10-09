import SingleProductPage from "@/components/product/SingleProduct";
import React, { Suspense } from "react";

const ProductDetails = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  return (
    <Suspense fallback={<p className="text-[12px]">পণ্য লোড হচ্ছে...</p>}>
      <SingleProductPage params={params} />
    </Suspense>
  );
};

export default ProductDetails;
