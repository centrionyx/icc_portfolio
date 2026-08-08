"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const isHome = pathname === "/";
  const [isAtTop, setIsAtTop] = useState(true);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About ICC", href: "/about" },
    { name: "Blogs", href: "/blogs" },
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
      {/* HEADER — Sticky White Navbar */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden p-1 shrink-0">
                <Image
                  src="/logo.svg"
                  alt="ICC Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="hidden sm:flex flex-col items-center text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight text-slate-900 font-sans">
                  INNOVATION
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight text-slate-900 font-sans">
                  Consultants &amp; Contractors
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      transition-all
                      duration-300
                      ${isActive
                        ? "text-[#003A70] font-extrabold"
                        : "text-slate-700 hover:text-[#003A70]"
                      }
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#003A70] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ACTION BUTTON */}
            <div className="hidden lg:flex items-center">
              <CustomButton href="/contact" variant="primary" size="sm" className="uppercase tracking-[0.14em] text-[11px]">
                Book Consultation
              </CustomButton>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="ml-auto lg:hidden text-slate-800 hover:text-[#003A70] p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu size={26} />
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
          bg-[#0a1f44]
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
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  group
                  relative
                  px-6
                  py-4
                  uppercase
                  tracking-wider
                  font-medium
                  border-b
                  border-white/10
                  transition-all
                  duration-300
                  ${isActive
                    ? "text-[#E5A900] bg-white/5 font-bold"
                    : "text-white hover:bg-white/10 hover:text-[#E5A900]"
                  }
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
                  className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    bg-[#E5A900]
                    transition-transform
                    duration-300
                    ${isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}
                  `}
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
            );
          })}
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
              bg-[#E5A900]
              hover:bg-[#CA9400]
              text-slate-950
              font-bold
              uppercase
              tracking-wider
              py-3.5
              rounded-xl
              transition-all
              duration-300
              shadow-md
              hover:scale-[1.02]
            "
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}