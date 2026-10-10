"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const SignInSuccessToast = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shown = useRef(false);

  useEffect(() => {
    if (searchParams.get("signin") === "success" && !shown.current) {
      shown.current = true;
      toast.success("সফলভাবে সাইন ইন সম্পন্ন হয়েছে।");
      router.replace("/");
    }
  }, [searchParams, router]);

  return null;
};

export default SignInSuccessToast;
