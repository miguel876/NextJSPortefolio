import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  menus: string[];
}

const MobileMenu = ({ isOpen, toggleMenu, menus }: MobileMenuProps) => {
  const toggleMenuHandler = () => {
    toggleMenu();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-background transition-opacity duration-300 ${
          isOpen ? "opacity-75" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenuHandler}
      ></div>
      <div
        className={`fixed left-0 z-10 top-0 w-64 h-full bg-background shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 h-full">
          <button onClick={toggleMenuHandler} className="mb-2 mt-1">
            <X size={22} />
          </button>
          {menus.map((menu) => (
            <Link
              href={`#${menu}`}
              key={`nav-menu-${menu}`}
              className="py-2 text-lg"
              onClick={toggleMenuHandler}
            >
              {menu}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
