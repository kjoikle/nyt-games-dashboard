import Link from "next/link";
import React from "react";

const NavBar = ({ onAddGameClick }: { onAddGameClick: () => void }) => {
  const links = [
    { href: "/", text: "NYT Games Dashboard" },
    { href: "/connections", text: "Connections" },
    { href: "/strands", text: "Strands" },
  ];

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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
