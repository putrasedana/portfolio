import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
        setMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full bg-slate-950 text-white flex items-center justify-between p-4 sm:p-8 sm:px-20 xl:px-28 xl:p-6 z-50 shadow-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-xl font-bold font-serif">
          Putrasedana<span className="text-green-600">.</span>
        </div>
        {/* Close button */}
        {menuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white sm:hidden"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        )}
        {/* Menu button */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white sm:hidden"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        )}
        {/* Menu items */}
        <ul
          className={`${
            menuOpen
              ? "flex flex-col absolute top-20 right-6 rounded-lg w-52 h-80 pb-4 items-center bg-slate-950 sm:flex-row"
              : "hidden sm:flex"
          } justify-around sm:justify-start sm:space-x-10 sm:bg-slate-950 xl:mx-0`}
        >
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="font-semibold hover:text-green-500 ease-out duration-300"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="font-semibold hover:text-green-500 ease-out duration-300"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="font-semibold hover:text-green-500 ease-out duration-300"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="font-semibold hover:text-green-500 ease-out duration-300"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="mailto:putrasedana03@gmail.com"
              className="font-semibold border-2 border-green-600 bg-green-600 rounded-sm p-2 sm:mt-0 hover:border-green-600 hover:border-2 hover:bg-transparent ease-out duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
