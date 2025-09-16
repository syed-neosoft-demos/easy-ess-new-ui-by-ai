"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  }, []);
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-white">
      <div className="text-center">
        <div className="inline-block mb-6 border-4 border-gray-200 border-t-blue-600 rounded-full w-16 h-16 animate-spin"></div>

        <h1 className="font-semibold text-gray-800 text-2xl">Loading...</h1>
        <p className="mt-2 text-gray-500">
          Please wait while we load your content
        </p>
      </div>
    </div>
  );
}
