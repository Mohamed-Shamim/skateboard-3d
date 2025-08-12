import React from "react";
import { Logo } from "./Logo";
import { FooterPhysics } from "./FooterPhysics";

const navLinks = [
  { href: "/team", label: "Team" },
  { href: "/customizer", label: "Customizer" },
  { href: "/about", label: "About" },
];

const boardUrls = [
  { skateboard: "/all-board/black-yellow-complete.png" },
  { skateboard: "/all-board/onimask-complete.png" },
  { skateboard: "/all-board/yellow-black-complete.png" },
  { skateboard: "/all-board/thank-you-complete.png" },
  { skateboard: "/all-board/red-white-complete.png" },
  { skateboard: "/all-board/pink-drop-complete.png" },
  { skateboard: "/all-board/grid-streaks-complete.png" },
  { skateboard: "/all-board/green-navy-complete.png" },
  { skateboard: "/all-board/gray-black-complete.png" },
];

const Footer = () => {
  const boardTextureUrls = boardUrls
    .map((item) => item.skateboard)
    .filter((url): url is string => Boolean(url));

  return (
    <footer className=" relative bg-teaxture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[90vh] p-12 md:aspect-auto ">
        <img
          src="/all-board/pexels-artempodrez-4816744.jpg"
          alt=""
          className="object-center absolute inset-0 h-full w-full object-cover"
        />
        <Logo className="pointer-events-none relative h-16 mix-blend-exclusion md:h-20" />

        <FooterPhysics
          boardTextureURLs={boardTextureUrls}
          className="absolute inset-0 overflow-hidden z-30 "
        />
      </div>
      <ul className="flex flex-wrap justify-center gap-8 text-lg py-7">
        {navLinks.map((nav) => (
          <li key={nav.href} className="text-lg font-semibold cursor-pointer">
            {nav.label}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
