import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../assets/logo/logo-white.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
              />
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/customers">Customer</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost text-xl"
          >
            <div className="flex items-center justify-center space-x-2">
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
              />
              <h1 className="text-xl font-extrabold">Schedule Meet</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/customers">Customer</Link>
            </li>
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/#"
            className="border-2 hover:border-transparent hover:bg-[#4F43A1] rounded-full px-4 py-[6px]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
