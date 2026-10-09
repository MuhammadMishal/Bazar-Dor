import SingleCategoryPage from "@/components/category/SingleCategory";
import React, { Suspense } from "react";

const CategoryDetails = ({
  params,
  searchParams,
}: {
  params: Promise<{ categoryId: string }>;
  searchParams?: Promise<{ sort?: string }>;
}) => {
  return (
    <Suspense fallback={<p className="text-[12px]">বিভাগ লোড হচ্ছে...</p>}>
      <SingleCategoryPage params={params} searchParams={searchParams} />
    </Suspense>
  );
};

export default CategoryDetails;
