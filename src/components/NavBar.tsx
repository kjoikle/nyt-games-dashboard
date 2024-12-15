"use client";

import Link from "next/link";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
import { useRouter } from "next/navigation";

const NavBar = ({ onAddGameClick }: { onAddGameClick: () => void }) => {
  const links = [
    { href: "/", text: "NYT Games Dashboard" },
    { href: "/connections", text: "Connections" },
    { href: "/strands", text: "Strands" },
  ];

  const router = useRouter();

  async function handleLogout() {
    await signOut(getAuth(app));

    await fetch("/api/logout");

    router.push("/login");
  }

  return (
    <nav>
      <div className="flex space-x-4 justify-between p-5 bg-stone-200 align-center">
        <div className="flex space-x-10 items-center">
          <Link href={links[0].href} className="hover:underline">
            <div>{links[0].text}</div>
          </Link>
          {links.slice(1).map((link, index) => (
            <Link key={index} href={link.href} className="hover:underline">
              <div>{link.text}</div>
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-300 py-1 px-4 rounded-lg"
            onClick={onAddGameClick}
          >
            Add Game
          </button>
          <button
            className="bg-red-300 py-1 px-4 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
