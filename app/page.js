"use client";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="base-layout">
      {/* Navbar */}
      <nav className="fixed top-5 z-50 w-full">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="w-max">
              <svg
                className="w-16 h-8"
                width="358"
                height="185"
                viewBox="0 0 358 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.536 106.92C19.4133 110.248 21.4613 113.149 23.68 115.624C25.984 118.099 28.5013 120.019 31.232 121.384C33.9627 122.749 36.9067 123.432 40.064 123.432C43.7333 123.432 46.72 122.493 49.024 120.616C51.328 118.739 52.48 116.179 52.48 112.936C52.48 110.12 51.7547 107.859 50.304 106.152C48.9387 104.445 46.848 102.952 44.032 101.672C41.3013 100.307 37.9307 98.856 33.92 97.32C31.7867 96.552 29.312 95.528 26.496 94.248C23.7653 92.8827 21.1627 91.176 18.688 89.128C16.2133 86.9947 14.1653 84.4347 12.544 81.448C10.9227 78.376 10.112 74.7067 10.112 70.44C10.112 65.32 11.392 60.9253 13.952 57.256C16.5973 53.5013 20.1387 50.6427 24.576 48.68C29.0987 46.632 34.1333 45.608 39.68 45.608C45.3973 45.608 50.304 46.5893 54.4 48.552C58.5813 50.4293 62.0373 52.8613 64.768 55.848C67.584 58.7493 69.76 61.7787 71.296 64.936L56.96 72.872C55.7653 70.7387 54.3147 68.8187 52.608 67.112C50.9867 65.32 49.1093 63.912 46.976 62.888C44.8427 61.7787 42.4107 61.224 39.68 61.224C36.096 61.224 33.408 62.0773 31.616 63.784C29.824 65.4053 28.928 67.3253 28.928 69.544C28.928 71.7627 29.6533 73.7253 31.104 75.432C32.5547 77.0533 34.7733 78.632 37.76 80.168C40.7467 81.6187 44.5013 83.112 49.024 84.648C51.9253 85.672 54.6987 86.952 57.344 88.488C60.0747 90.024 62.5067 91.9013 64.64 94.12C66.8587 96.2533 68.5653 98.8133 69.76 101.8C71.04 104.701 71.68 108.072 71.68 111.912C71.68 116.264 70.8267 120.147 69.12 123.56C67.4133 126.973 65.0667 129.875 62.08 132.264C59.0933 134.568 55.7227 136.317 51.968 137.512C48.2987 138.792 44.416 139.432 40.32 139.432C34.8587 139.432 29.7387 138.408 24.96 136.36C20.2667 134.227 16.1707 131.368 12.672 127.784C9.17333 124.2 6.44267 120.317 4.48 116.136L17.536 106.92ZM87.499 107.56C87.499 101.416 88.907 96.04 91.723 91.432C94.6243 86.824 98.507 83.24 103.371 80.68C108.32 78.12 113.91 76.84 120.139 76.84C126.368 76.84 131.915 78.12 136.779 80.68C141.728 83.24 145.611 86.824 148.427 91.432C151.328 96.04 152.779 101.416 152.779 107.56C152.779 113.619 151.328 118.995 148.427 123.688C145.611 128.296 141.728 131.88 136.779 134.44C131.915 137 126.368 138.28 120.139 138.28C113.91 138.28 108.32 137 103.371 134.44C98.507 131.88 94.6243 128.296 91.723 123.688C88.907 118.995 87.499 113.619 87.499 107.56ZM104.395 107.56C104.395 110.888 105.078 113.832 106.443 116.392C107.894 118.867 109.814 120.829 112.203 122.28C114.592 123.645 117.238 124.328 120.139 124.328C123.04 124.328 125.686 123.645 128.075 122.28C130.464 120.829 132.342 118.867 133.707 116.392C135.158 113.832 135.883 110.888 135.883 107.56C135.883 104.232 135.158 101.288 133.707 98.728C132.342 96.168 130.464 94.2053 128.075 92.84C125.686 91.4747 123.04 90.792 120.139 90.792C117.238 90.792 114.592 91.4747 112.203 92.84C109.814 94.2053 107.894 96.168 106.443 98.728C105.078 101.288 104.395 104.232 104.395 107.56ZM215.624 55.336C215.624 52.6053 216.605 50.3867 218.568 48.68C220.531 46.888 222.877 45.992 225.608 45.992C228.339 45.992 230.643 46.888 232.52 48.68C234.483 50.3867 235.464 52.6053 235.464 55.336C235.464 57.9813 234.483 60.2 232.52 61.992C230.643 63.784 228.339 64.68 225.608 64.68C222.877 64.68 220.531 63.784 218.568 61.992C216.605 60.2 215.624 57.9813 215.624 55.336ZM217.416 78.12H233.544V137H217.416V78.12ZM249.99 78.12H286.342V92.072H249.99V78.12ZM260.102 57.64H276.102V137H260.102V57.64ZM357.631 78.12L319.231 165.16H302.207L317.055 131.112L292.607 78.12H311.039L329.983 124.968L321.791 124.712L340.351 78.12H357.631Z"
                  fill="#2C2C2C"
                />
                <path
                  d="M176 48V137H192V64C192 55.1634 184.837 48 176 48Z"
                  fill="#2C2C2C"
                />
                <path
                  d="M192.238 168.999L191.999 144L176 144.153L176.086 153.153C176.17 161.989 183.402 169.083 192.238 168.999Z"
                  fill="#FFC801"
                />
              </svg>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center ml-10 space-x-8">
                <Link
                  href={"/login"}
                  className="text-sm text-secondary"
                >
                  Login
                </Link>
                <Link
                  href={"/register"}
                  className="text-sm text-secondary"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex justify-center items-center p-2 text-gray-700 rounded-md hover:text-brand"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute w-full border-b backdrop-blur-sm bg-white/95 md:hidden">
            <div className="px-4 py-4 space-y-3">
              <Link
                href={"/login"}
                className="block px-4 py-2 w-full text-center text-gray-700 rounded-lg transition-colors hover:text-brand hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="block px-4 py-2 w-full text-center text-white rounded-lg transition-colors bg-brand hover:bg-orange-500"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-[15rem] sm:pt-40 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block mb-2">Welcome to</span>
              <span className="block text-brand">Solity</span>
            </h1>
            <p className="px-4 mx-auto mt-6 max-w-md text-base text-secondary sm:text-lg md:text-xl md:max-w-2xl lg:max-w-3xl">
              Transform your digital experience with our cutting-edge platform.
              Join thousands of satisfied users and start your journey today.
            </p>
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link
                href={"/login"}
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-3xl border border-transparent transition-all duration-200 bg-brand group hover:bg-orange-500 md:text-lg hover:scale-105"
              >
                Start Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
            <div className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 blur-3xl opacity-20 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
