import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f0f5f0] px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-7 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-[#dcebdc]">
          <span className="text-7xl">🥦</span>

          <span className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f0f5f0] bg-[#05893e] text-sm font-bold text-white">
            404
          </span>
        </div>

        {/* Heading */}
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#05893e]">
          PAGE NOT FOUND
        </p>

        <h1 className="text-3xl font-bold leading-relaxed text-[#1d271f] sm:text-4xl">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#657267] sm:text-base">
          দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা
          ঠিকানাটি ভুল হয়েছে। চলুন, আবার বাজার দর থেকে শুরু করি।
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn h-12 min-h-0 rounded-xl border-0 bg-[#05893e] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#047533]"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
