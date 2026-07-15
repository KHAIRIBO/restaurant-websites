"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-semibold tracking-tight text-white">
          murox.studio <span className="text-primary">beta</span>
        </a>
        <ul className="hidden gap-10 text-sm text-neutral-300 md:flex">
          <li><a href="#menu" className="transition hover:text-primary">Menu</a></li>
          <li><a href="#video" className="transition hover:text-primary">Chef</a></li>
          <li><a href="#gallery" className="transition hover:text-primary">Gallery</a></li>
          <li><a href="#reservation" className="transition hover:text-primary">Reservation</a></li>
        </ul>
        <a
          href="#reservation"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-black transition hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
        >
          Book a table
        </a>
      </nav>
    </header>
  );
}
