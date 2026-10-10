"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const { data: session } = useSession();

  const handleUpdate = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    const { data, error } = await updateUser({
      name: userInfo.name,
      image: userInfo.image,
    });

    if (error) {
      toast.error("আবার চেষ্টা করুন");
      return;
    }

    toast.success("আপডেট সফল হয়েছে");
  };

  const handleSignOut = () => {
    signOut();
    redirect("/");
    toast.success("সফলভাবে সাইন আউট হয়েছে।");
  };

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-10">
      <div className="mx-auto w-full max-w-xl">
        {/* Profile heading */}
        <header className="mb-5">
          <h1 className="text-xl font-bold text-[#1D271F]">আমার প্রোফাইল</h1>
          <p className="mt-1 text-xs text-[#1d271fa1]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>
        {/* User information card */}
        <section className="mb-5 flex items-center justify-between gap-4 rounded-2xl border border-[#e0e8e0] bg-white/70 p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="avatar">
              <div className="h-14 w-14 overflow-hidden rounded-xl bg-gray-200">
                {session?.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? "Profile picture"}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-lg font-semibold text-gray-500">
                    {session?.user.name?.charAt(0) ?? "?"}
                  </span>
                )}
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-[#1D271F]">
                {session?.user.name}
              </h2>
              <p className="truncate text-xs text-[#1d271fa1]">
                {session?.user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="btn btn-outline btn-error btn-sm shrink-0 rounded-lg bg-white text-xs font-medium"
          >
            সাইন আউট
          </button>
        </section>{" "}
        <section className="rounded-2xl border border-[#e0e8e0] bg-white/70 p-5 sm:p-8">
          <h2 className="mb-7 text-base font-semibold text-[#1D271F]">তথ্য</h2>

          <form action="" onSubmit={handleUpdate}>
            <fieldset className="fieldset">
              <label className="label text-sm font-medium pt-3">নাম</label>
              <input
                type="text"
                name="name"
                className="input outline-0 focus:border-[#05893e] w-full text-sm"
                placeholder="যেমন: জন ডো"
              />

              <label className="label text-sm font-medium pt-3">ইমেজ</label>
              <input
                type="url"
                name="image"
                className="input outline-0 focus:border-[#05893e] w-full text-sm"
                placeholder="আপনার ইমেজ "
              />

              <button
                type="submit"
                className="btn bg-[#05893e] text-[14px] text-white font-semibold mt-4 py-6"
              >
                আপডেট
              </button>
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}
