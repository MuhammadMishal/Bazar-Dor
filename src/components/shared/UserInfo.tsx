"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("সফলভাবে সাইন আউট হয়েছে।");
      setIsOpen(false);
    } catch {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const firstLetter = session?.user?.name
    ? session.user.name.charAt(0).toUpperCase()
    : "U";

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-2">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#05893e] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {session?.user ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-gray-100 focus:outline-none"
          >
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User Profile"}
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05893e] text-xs font-bold text-white">
                {firstLetter}
              </div>
            )}

            <span className="text-sm font-semibold text-gray-800">
              {session.user.name}
            </span>

            <span className="text-[10px] text-gray-500">▼</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 z-50 mt-2 w-72 rounded-3xl border border-gray-100 bg-white p-4 shadow-xl">
              <div className="mb-3 px-2">
                <p className="text-sm font-bold text-gray-400">
                  {session.user.name}
                </p>

                <p className="truncate text-xs font-normal text-gray-400">
                  {session.user.email}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 rounded-2xl bg-gray-200/70 px-3 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 p-1 text-xs text-white">
                    👤
                  </span>
                  আমার প্রোফাইল
                </Link>

                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-3 py-1.5 text-left text-sm font-medium text-red-500 transition-colors hover:text-red-600"
                >
                  <span>←</span>
                  সাইন আউট
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-[#05893e] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#046d32]"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
