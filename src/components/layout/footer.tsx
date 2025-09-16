import React from "react";
import { Building } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <Building className="mr-3 w-8 h-8 text-blue-400" />
              <h3 className="font-bold text-2xl">Easy ESS</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering employees and streamlining HR operations with intuitive
              self-service solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-gray-700 border-t text-gray-400 text-center">
          <p>&copy; 2024 Easy ESS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
