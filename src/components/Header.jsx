import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex text-white items-center justify-between sm:bg-slate-950 p-8 sm:px-20 xl:px-28 xl:p-6">
        <div className="text-xl font-bold font-serif">
          Putrasedana<span className="text-green-600">.</span>
        </div>

        {/* Close button */}
        {menuOpen && (
          <button onClick={() => setMenuOpen(false)} className="text-white sm:hidden">
            <i className="fas fa-times"></i>
          </button>
        )}

        {/* Menu button */}
        {!menuOpen && (
          <button onClick={() => setMenuOpen(true)} className="text-white sm:hidden">
            <i className="fas fa-bars"></i>
          </button>
        )}

        {/* Menu items */}
        <ul
          className={`${menuOpen ? "flex flex-col absolute top-28 right-6 rounded-lg w-1/2 h-2/6 pb-4 items-center bg-slate-950 sm:flex-row" : "hidden sm:flex"} justify-around sm:justify-start sm:space-x-10 mx-auto sm:bg-slate-950 xl:mx-0`}
        >
          <li>
            <a className="font-semibold hover:text-green-500 ease-out duration-300" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-semibold hover:text-green-500 ease-out duration-300" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-semibold hover:text-green-500 ease-out duration-300" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a href="mailto:putrasedana03@gmail.com" className="font-semibold border-2 border-green-600 bg-green-600 rounded-sm p-2 sm:mt-0 hover:border-green-600 hover:border-2 hover:bg-transparent ease-out duration-300">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
