"use client";

import { useState } from "react";
import Link from "next/link";
import data from "@/utils/data.json";
import GithubIcon from "../../../public/images/github.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const menus = ["work", "projects"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full py-4 h-16">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-14">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu size={22} />
          </button>
          <div className="uppercase text-lg font-bold">Miguel Santos</div>
          <div className="gap-5 hidden lg:flex">
            {menus.map((menu) => (
              <Link
                href={`#${menu}`}
                key={`nav-menu-${menu}`}
                className="group relative inline-block"
              >
                <span className="text-sm font-semibold">{menu}</span>
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:left-0 group-hover:right-auto group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={data.socials.github}>
            <GithubIcon className="text-foreground size-5" />
          </Link>
          <Link href={data.socials.linkedIn}>
            <LinkedinIcon className="text-foreground size-5" />
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileMenu
          isOpen={isOpen}
          toggleMenu={() => setIsOpen(false)}
          menus={menus}
        />
      </div>
    </header>
  );
};

export default Header;
