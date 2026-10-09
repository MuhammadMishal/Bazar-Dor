import SingleCategoryPage from "@/components/category/SingleCategory";
import React, { Suspense } from "react";

const CategoryDetails = ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  return (
    <Suspense fallback={<p className="text-[12px]">বিভাগ লোড হচ্ছে...</p>}>
      <SingleCategoryPage params={params} />
    </Suspense>
  );
};

export default CategoryDetails;
