import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { href: "/", text: "NYT Games Dashboard" },
    { href: "/connections", text: "Connections" },
    { href: "/strands", text: "Strands" },
  ];

  return (
    <nav>
      <div className="flex space-x-4 justify-between p-5 bg-slate-200">
        <Link href={links[0].href} className="hover:underline">
          <div>{links[0].text}</div>
        </Link>
        <div className="flex space-x-10">
          {links.slice(1).map((link, index) => (
            <Link key={index} href={link.href} className="hover:underline">
              <div>{link.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
