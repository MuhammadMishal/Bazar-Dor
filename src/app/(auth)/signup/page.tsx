"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userInfo = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
    if (userInfo.password !== userInfo.confirmPassword) {
      toast.error("পাসওয়ার্ড মেলেনি। আবার চেষ্টা করুন।");
      return;
    }

    try {
      const { error } = await signUp.email({
        name: userInfo.name,
        image: userInfo.image || undefined,
        email: userInfo.email,
        password: userInfo.password,
      });

      if (error) {
        toast.error("ফর্মের তথ্য ঠিক করে আবার চেষ্টা করুন।");
        return;
      }

      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে।");
      router.push("/");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/?signup=success",
      });
    } catch (error) {
      console.error("Google signup error:", error);
      toast.error("Google দিয়ে সাইন আপ করা যায়নি।");
    }
  };

  const handleGithubSignUp = async () => {
    try {
      await signIn.social({
        provider: "github",
        callbackURL: "/?signup=success",
      });
    } catch (error) {
      console.error("GitHub signup error:", error);
      toast.error("GitHub দিয়ে সাইন আপ করা যায়নি।");
    }
  };
  return (
    <div className="mx-auto w-full max-w-md px-4 py-10">
      <h2 className="text-center text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h2>

      <p className="py-3 text-center text-sm text-[#1d271fa1]">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <form onSubmit={handleSignUp}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label pt-3 text-sm font-medium">নাম</label>

            <input
              type="text"
              name="name"
              required
              className="input w-full text-sm outline-0 focus:border-[#05893e]"
              placeholder="যেমন: জন ডো"
            />

            <label className="label pt-3 text-sm font-medium">ইমেজ</label>

            <input
              type="url"
              name="image"
              className="input w-full text-sm outline-0 focus:border-[#05893e]"
              placeholder="আপনার ইমেজ URL"
            />
            <label className="label pt-3 text-sm font-medium">ইমেইল</label>

            <input
              type="email"
              name="email"
              required
              className="input w-full text-sm outline-0 focus:border-[#05893e]"
              placeholder="you@example.com"
            />

            <label className="label pt-3 text-sm font-medium">পাসওয়ার্ড</label>

            <input
              type="password"
              name="password"
              required
              minLength={8}
              className="input w-full text-sm outline-0 focus:border-[#05893e]"
              placeholder="কমপক্ষে ৮ অক্ষর"
            />

            <label className="label pt-3 text-sm font-medium">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>

            <input
              type="password"
              name="confirmPassword"
              required
              minLength={8}
              className="input w-full text-sm outline-0 focus:border-[#05893e]"
              placeholder="আবার লিখুন"
            />

            <button
              type="submit"
              className="btn mt-4 bg-[#05893e] py-6 text-[14px] font-semibold text-white"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </fieldset>
        </form>

        <div className="divider text-xs">অথবা</div>

        <div className="flex flex-col items-center justify-between gap-3 py-3 sm:flex-row">
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="btn w-full border-[#e5e5e5] bg-white text-xs text-black sm:flex-1"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            onClick={handleGithubSignUp}
            className="btn w-full border-[#e5e5e5] bg-white text-xs text-black sm:flex-1"
          >
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.95 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 7.45 8.54 17.35 8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        <p className="py-3 text-center text-xs">
          অ্যাকাউন্ট আছে?{" "}
          <Link className="text-[#05893e] hover:underline" href="/signin">
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <p className="py-4 text-center text-xs hover:text-[#05893e] hover:underline">
        <Link href="/">← হোম পেজে ফিরে যান</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
