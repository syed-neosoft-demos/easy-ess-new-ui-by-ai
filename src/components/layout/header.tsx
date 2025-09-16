"use client";
import React from "react";
import { Building } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";

export default function Header() {
  // const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-blue-600"
      : "text-gray-600 hover:text-blue-600";
  };

  return (
    <header className="top-0 z-50 sticky bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Building className="mr-3 w-8 h-8 text-blue-600" />
            <h1 className="font-bold text-gray-900 text-2xl">Easy ESS</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`${isActive("/")} transition-colors`}>
              Home
            </Link>
            <Link
              href="/pricing"
              className={`${isActive("/pricing")} transition-colors`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact")} transition-colors`}
            >
              Contact
            </Link>
          </nav>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
