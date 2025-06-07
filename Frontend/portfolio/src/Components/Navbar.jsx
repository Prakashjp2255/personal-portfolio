import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LOGO from "../Components/Assests/logo2.png";

const MENU_LINKS = [
  { id: 1, label: "Home", to: "hero", offset: -50 },
  { id: 2, label: "About", to: "about", offset: -50 },
  { id: 3, label: "Skills", to: "skills", offset: -50 },
  { id: 4, label: "Projects", to: "projects", offset: -50 },
  { id: 5, label: "Contact", to: "contact", offset: -50 },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);

      // If screen becomes large, always show the menu
      if (!isNowMobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false); // hide on mobile
      }
    };

    handleResize(); // call once to initialize

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div>
        <div className="flex items-center justify-between rounded-full bg-white/25 border border-blue-600 backdrop-blur-[10px] m-5 p-1 md:p-0">
          {/* logo here */}
          <img className="h-20 ml-3" src={LOGO} alt="logo-image" />

          {/* hamburger icon (visible only in small screen) */}
          <button
            className=" block md:hidden text-black mr-6 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          {/* navi links */}
          <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
            {MENU_LINKS.map((item) => (
              <li key={item.id}>
                <Link
                  activeClass="active"
                  to={item.to}
                  smooth
                  spy
                  offset={item.offset}
                  className="menu-item"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* hire me */}
          <button className="hidden md:block h-20 text-[15px] font-medium text-white bg-gradient-to-t from-blue-500 to-[#D1F8EF] rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
