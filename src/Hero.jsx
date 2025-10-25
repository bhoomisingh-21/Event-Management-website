import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/images/hero2.jpg')" }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14141477] via-[#00000033] to-[#000000a6]" />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-black/30 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-5 md:px-6 py-5 md:py-6 relative">
          {/* Logo */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 -ml-2"
          >
            <div className="flex flex-col leading-tight">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-widest text-white uppercase">
                Khushboo
              </h1>
              <span className="text-[11px] text-white/80 tracking-[2px] uppercase font-light">
                Event Management
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex gap-10 text-[16px] font-medium tracking-wide text-white"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group flex items-center gap-1"
              >
                <span className="text-white group-hover:text-[#ffd6b3] transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#ffd6b3] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.nav>

          {/* Desktop Contact Button */}
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            href="tel:+919876543210"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#FF007F] to-[#FF7FAF] text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:from-[#FF66AA] hover:to-[#FFBBDD] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            +91 98765 43210
          </motion.a>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white z-50"
            >
              {menuOpen ? <X size={28} /> : <Menu size={35} />}
            </button>
          </div>

          {/* Mobile Fullscreen Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center gap-8 text-white text-2xl font-semibold"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#ffd6b3] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-block bg-gradient-to-r from-[#FF007F] to-[#FF7FAF] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-[#FF66AA] hover:to-[#FFBBDD] hover:scale-105 transition-all duration-300"
              >
                Book Now
              </a>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24 max-w-3xl z-20">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light leading-snug mb-6 text-[#fffaf5] tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.7)]"
        >
          We Make Your <br />
          <span className="text-[#fffaf5] font-semibold">Events Memorable</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[17px] md:text-lg text-[#fff4e8cc] mb-10 leading-relaxed max-w-xl font-medium"
        >
          From intimate weddings to grand celebrations — Khushboo brings
          together artistry, warmth, and timeless elegance to make every moment
          truly unforgettable.
        </motion.p>

        {/* Hero Button */}
        <motion.a
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          href="#book"
          className="relative bg-gradient-to-r from-[#FF007F] to-[#FF7FAF] text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:from-[#FF66AA] hover:to-[#FFBBDD] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
        >
          <span className="relative z-10">Book Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff22] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
