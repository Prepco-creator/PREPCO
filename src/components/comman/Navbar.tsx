"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "../../../public/assets";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle

  const navLinks = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    { title: "plans", route: "/plans" },
    { title: "testimonials", route: "/testimonials" },
    { title: "Contact", route: "/contact" }
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Dummy spacer to prevent content overlap */}
      {pathname !== "/" && <div className="h-[72px] w-full"></div>}

      {/* Navbar */}
      <nav
        className={`transition-[background] shadow-md duration-500 ease-in-out ${isMenuOpen ? "bg-primary text-white" : "bg-white"
          } rounded-br-3xl rounded-bl-3xl fixed w-full z-20 top-0 start-0 border-none`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src={isMenuOpen ? images.svgs.LogoWhite : images.svgs.logo}
                alt="Flowbite Logo"
                width={133}
                height={43}
                className="h-8"
              />
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="#">
              <button
                type="button"
                className="p-2 rounded-lg text-white bg-custom-gradient shadow-double-inset hover:bg-none hover:text-primary hover:shadow-none border-primary border-[2px] transition-all duration-300 ease-in-out"
              >
                Get a Quote
              </button>
            </a>
            <button
              onClick={toggleMenu} // Toggle mobile menu
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out transform md:transition-none ${isMenuOpen
              ? "max-h-screen translate-y-0 opacity-100"
              : "max-h-0 -translate-y-10 opacity-0"
              } items-center overflow-hidden justify-between w-full md:flex md:w-auto md:order-1 lg:static lg:opacity-100 lg:max-h-full lg:translate-y-0`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navLinks.map(({ title, route }) => (
                <li key={route}>
                  <Link href={route} passHref>
                    <div
                      className={`capitalize block py-2 px-3 rounded md:bg-transparent md:p-0 hover:md:text-primary ${pathname === route
                        ? "text-gray-900 md:text-primary"
                        : "text-gray-900"
                        }`}
                      aria-current={pathname === route ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
