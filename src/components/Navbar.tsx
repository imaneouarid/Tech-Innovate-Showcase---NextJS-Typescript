// src/pages/Navbar.tsx
"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use useNavigation for Server Components

const Navbar = () => {
  // Use navigation only on the client side
  const navigation = usePathname();

  // Define your dynamic links
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    // { title: "Services", path: "/services" },
    { title: "projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <div className="text-white text-2xl font-bold  flex items-center  gap-2 cursor-pointer">
            <img src="/logoo.jpg"  className="rounded-full h-16 w-16 object-cover" />
            Tech<span className="text-blue-500">Innovate</span>{" "}
            <span className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded">Next Level</span>
          </div>
        </Link>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.path}  className={`text-white hover:text-blue-500 ${
                    link.path ? "font-bold" : ""
                  }`}>
                  {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
