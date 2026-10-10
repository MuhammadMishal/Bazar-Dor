"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    await signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছে।");
    setIsOpen(false);
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const firstLetter = session?.user?.name
    ? session.user.name.charAt(0).toUpperCase()
    : "U";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {session?.user ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
          >
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User Profile"}
                width={28}
                height={28}
                className="w-7 h-7 rounded-full object-cover"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-[#05893e] text-white flex items-center justify-center font-bold text-xs">
                {firstLetter}
              </div>
            )}

            <span className="text-sm font-semibold text-gray-800">
              {session.user.name}
            </span>
            <span className="text-[10px] text-gray-500">▼</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-3xl shadow-xl border border-gray-100 p-4 z-50">
              <div className="mb-3 px-2">
                <p className="font-bold text-gray-400 text-sm">
                  {session.user.name}
                </p>
                <p className="text-xs text-gray-300 font-normal truncate">
                  {session.user.email}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 bg-gray-200/70 hover:bg-gray-200 text-gray-800 px-3 py-2.5 rounded-2xl text-sm font-medium transition-colors"
                >
                  <span className="bg-blue-600 text-white p-1 rounded-full text-xs flex items-center justify-center w-5 h-5">
                    👤
                  </span>
                  আমার প্রোফাইল
                </Link>

                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 px-3 py-1.5 text-sm font-medium transition-colors text-left"
                >
                  <span>←</span> সাইন আউট
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/signin">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              সাইন ইন
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 text-sm font-medium text-white bg-[#05893e] hover:bg-[#046d32] rounded-lg transition-colors">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
