"use client";
import Link from "next/link";

const MobileNav = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("hidden");
  };

  const navlinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Our Focus", href: "#focus" },
    { name: "Registration", href: "#registration" },
  ];

  return (
    <header className="py-4 w-full flex justify-between items-center lg:hidden shadow-xl">
      <div className="flex justify-between w-full items-center">
        <img
          src="/ignite-nobg-new.png"
          alt="IGNITE&reg; Excellence Logo"
          className="w-12 h-8"
        />
        <h1 className="text-lg font-bold text-orange-500">
          IGNITE&reg; Excellence
        </h1>
        <div className="text-orange-500 mr-6" onClick={toggleMenu}>
          {" "}
          &#9776;
        </div>
      </div>
      {/* menu overlay */}
      <div
        id="menu"
        className="transition duration-1000 ease-in-out hidden absolute right-4 top-0 p-4 bg-stone-200 rounded-lg shadow-lg w-[150px] h-fit mt-12"
      >
        <ul className="flex flex-col gap-4">
          {navlinks.map((link, i) => (
            <Link href={link.href} key={i} className="text-sm">
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default MobileNav;
