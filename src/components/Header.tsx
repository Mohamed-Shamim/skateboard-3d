import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
type Props = {};

const navLinks = [
  { href: "/team", label: "Team" },
  { href: "/customizer", label: "Customizer" },
  { href: "/about", label: "About" },
];

const Header = ({}: Props) => {
  return (
    <header className="header absolute top-0 left-0 right-2 text-brand-purple z-50 h-32 px-4 py-4 hd:h-32 overflow-hidden ">
      <div className="mx-auto w-full max-w-6xl grid md:grid-cols-[1fr_auto_1fr] grid-cols-[auto_auto] items-center gap-6 ">
        <div className="">
          <Logo className="text-brand-purple h-15" />
        </div>

        <nav className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((nav) => (
              <div className="" key={nav.href}>
                <li className=" text-lg font-semibold">{nav.label}</li>
              </div>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end">
          <Button size="sm" color="purple" icon="cart">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
