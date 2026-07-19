"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const isHome = pathname === "/";
  const [isAtTop, setIsAtTop] = useState(true);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Expertise", href: "/expertise" },
    { name: "About ICC", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
  ];


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        {isHome && isAtTop && (
          <div className="absolute bottom-[-1px] left-0 w-[47%] h-[1px] bg-white z-50 hidden lg:block" />
        )}
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
          <div className="h-20 flex items-center">

            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-200 shadow-sm shrink-0">
                  <Image
                    src="/logo.svg"
                    alt="ICC Logo"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="hidden sm:block">
                  <p className="text-[9px] font-semibold uppercase tracking-wide leading-tight text-slate-900">
                    Innovation
                  </p>
                  <p className="text-[9px] font-semibold uppercase tracking-wide leading-tight text-slate-900">
                    Consultants &
                  </p>
                  <p className="text-[9px] font-semibold uppercase tracking-wide leading-tight text-slate-900">
                    Contractors
                  </p>
                </div>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center ml-auto">

              <nav className="flex items-center gap-8 xl:gap-10">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`
                        relative
                        text-[12px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        transition-all
                        duration-300
                        after:absolute
                        after:left-0
                        after:-bottom-2
                        after:h-[2px]
                        after:bg-[#003A70]
                        after:transition-all
                        after:duration-300
                        ${isActive 
                          ? "text-[#003A70] after:w-full" 
                          : "text-slate-800 hover:text-[#003A70] after:w-0 hover:after:w-full"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contact"
                className="
                  ml-10
                  bg-[#003A70]
                  text-white
                  px-6
                  py-3
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  transition-all
                  duration-300
                  hover:bg-[#004B91]
                  hover:shadow-lg
                "
              >
                Contact Us
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="ml-auto lg:hidden"
            >
              <Menu
                size={30}
                className="text-[#003A70]"
              />
            </button>

          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0
          bg-black/50
          backdrop-blur-sm
          z-[60]
          transition-all
          duration-300
          ${isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[320px]
          sm:w-[380px]
          bg-[#003A70]
          shadow-2xl
          z-[70]
          transform
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen
            ? "translate-x-0"
            : "translate-x-full"
          }
        `}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 shadow-sm shrink-0">
              <Image
                src="/logo.svg"
                alt="ICC Logo"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-white text-xl font-bold">
              ICC
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="
              text-white
              transition-transform
              duration-300
              hover:rotate-90
            "
          >
            <X size={30} />
          </button>
        </div>

        {/* SIDEBAR NAVIGATION */}
        <nav className="flex flex-col mt-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                group
                relative
                px-6
                py-4
                text-white
                uppercase
                tracking-wider
                font-medium
                border-b
                border-white/10
                hover:bg-[#004B91]
                transition-all
                duration-500
                ${isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${150 + index * 100}ms`,
              }}
            >
              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1
                  bg-white
                  scale-y-0
                  group-hover:scale-y-100
                  transition-transform
                  duration-300
                "
              />

              <span
                className="
                  block
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <div
          className={`
            px-6
            mt-8
            transition-all
            duration-500
            ${isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-12 opacity-0"
            }
          `}
          style={{
            transitionDelay: `${150 + navLinks.length * 100}ms`,
          }}
        >
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="
              block
              w-full
              text-center
              bg-white
              text-[#03325e]
              font-semibold
              uppercase
              tracking-wider
              py-4
              rounded-md
              transition-all
              duration-300
              hover:bg-slate-100
              hover:scale-[1.02]
              hover:shadow-lg
            "
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}