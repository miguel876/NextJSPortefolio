import Link from "next/link";
import data from "@/utils/data.json";
import GithubIcon from "../../../public/images/github.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";

const Header = () => {
  return (
    <header className="flex w-full p-4 h-16 justify-between items-center">
      <div className="flex items-center gap-14">
        <div className="uppercase text-lg font-bold">Miguel Santos</div>
        <div className="flex gap-5">
          <Link href="#work" className="group relative inline-block">
            <span className="text-sm font-semibold">Work</span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:left-0 group-hover:right-auto group-hover:w-full"></span>
          </Link>
          <Link href="#projects" className="group relative inline-block">
            <span className="text-sm font-semibold">Projects</span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:left-0 group-hover:right-auto group-hover:w-full"></span>
          </Link>
        </div>
      </div>
      <div className="flex gap-7">
        <Link href={data.socials.github}>
          <GithubIcon className="text-foreground size-5" />
        </Link>
        <Link href={data.socials.linkedIn}>
          <LinkedinIcon className="text-foreground size-5" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
