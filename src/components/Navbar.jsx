import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/portfolio_logo.png";
import menu_icon from "../assets/menu_icon_dark.svg";
import close_icon from "../assets/close_icon.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className="h-20 flex justify-between items-center fixed top-0 z-50 w-full px-4 sm:px-8 
      bg-white/10 backdrop-blur-md shadow-lg"
      >
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-12 sm:w-20 object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="hover:text-[#00D4AA]"
          >
            Home
          </a>
          <Link to="/about" className="hover:text-[#00D4AA]">
            About
          </Link>
          <Link to="/projects" className="hover:text-[#00D4AA]">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-[#00D4AA]">
            Skills
          </Link>
          <a
            href="/#contact"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="hover:text-[#00D4AA]"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="bg-purple-600 px-4 py-2 text-white rounded-xl shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.6)] hover:scale-105 transition"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Hire Me
          </a>
        </div>
        <img
          src={menu_icon}
          alt=""
          className="w-7 md:hidden cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/30 backdrop-blur-md text-white z-50 p-6 flex flex-col gap-6
        transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
      >
        <img
          src={close_icon}
          alt=""
          className="w-5 mb-6 cursor-pointer"
          onClick={() => setOpen(false)}
        />

        <a
          onClick={(e) => {
            setOpen(false);

            if (window.location.pathname === "/") {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
          href="/"
        >
          Home
        </a>
        <Link onClick={() => setOpen(false)} to="/about">
          About
        </Link>
        <Link onClick={() => setOpen(false)} to="/projects">
          Projects
        </Link>
        <Link onClick={() => setOpen(false)} to="/skills">
          Skills
        </Link>
        <a
          onClick={(e) => {
            setOpen(false);
            if (window.location.pathname === "/") {
              e.preventDefault();

              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          href="/#contact"
        >
          Contact
        </a>

        <a
          href="/#contact"
          onClick={(e) => {
            setOpen(false);
            if (window.location.pathname === "/") {
              e.preventDefault();

              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          className="mt-4 bg-purple-600 px-4 py-2 rounded-lg text-center"
        >
          Hire Me
        </a>
      </div>
    </>
  );
};

export default Navbar;
