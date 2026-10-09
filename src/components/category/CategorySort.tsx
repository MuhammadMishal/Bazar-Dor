"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategorySortSelect({
  initialSort,
}: {
  initialSort: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // Construct new URL parameters keeping existing queries intact
    const params = new URLSearchParams(searchParams.toString());
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    // Push the updated search queries to update the Server Component data
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex w-full items-center gap-2 sm:w-auto">
      <label
        htmlFor="sort"
        className="whitespace-nowrap text-sm text-[#1d271f] sm:text-base"
      >
        সাজান
      </label>
      <select
        id="sort"
        value={initialSort}
        onChange={handleSortChange}
        className="select select-bordered w-full rounded-xl border border-gray-300 bg-white px-8 py-2 text-sm outline-none transition focus:border-gray-400 focus:outline-none sm:w-auto lg:min-w-52.5"
      >
        <option value="default">ডিফল্ট</option>
        <option value="price_asc">দাম: কম থেকে বেশি</option>
        <option value="price_desc">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
}
