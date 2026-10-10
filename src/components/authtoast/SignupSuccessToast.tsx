"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const SignupSuccessToast = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (searchParams.get("signup") === "success" && !hasShownToast.current) {
      hasShownToast.current = true;
      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে।");
      router.replace("/");
    }
  }, [searchParams, router]);

  return null;
};

export default SignupSuccessToast;
