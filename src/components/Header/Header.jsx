"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Dashboard from "../Dashboard/Dashboard";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Categories",
    path: "/categories",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const pathName = usePathname();
  //   console.log(pathName);
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard")) {
    return (
      <div className="bg-gray-400 p-8">
        {" "}
        <h2>This is Dashboard Layout </h2>
      </div>
    );
  }

  return (
    <nav className="flex justify-between items-center bg-purple-400 px-24 py-4">
      <h2 className="text-2xl">Logo</h2>
      <ul className="flex gap-4 cursor-pointer">
        {links?.map((link) => (
          <Link
            href={link.path}
            key={link.path}
            className={`${pathName === link.path && "text-white"}`}
          >
            <li>{link.title}</li>
          </Link>
        ))}
      </ul>
      <button
        onClick={handleLogin}
        className="bg-white text-black rounded-md p-4 hover:text-white hover:bg-black"
      >
        Login
      </button>
    </nav>
  );
};

export default Header;
