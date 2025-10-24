import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/images/hero2.jpg')" }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14141477] via-[#00000033] to-[#000000a6]" />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-black/30 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-5 md:py-6">
          {/* Logo */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
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

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex gap-10 text-[16px] font-medium tracking-wide text-white"
          >
            {["Home", "About", "Services", "Venues", "Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group flex items-center gap-1"
                >
                  <span className="text-white group-hover:text-[#ffd6b3] transition-colors duration-300">
                    {item}
                  </span>
                  {/* Down Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-[#ffd6b3] group-hover:text-[#fff2c8] transition-colors duration-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#ffd6b3] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </motion.nav>

          {/* Contact Button */}
      <motion.a
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        href="tel:+919876543210"
        className="flex items-center gap-2  bg-gradient-to-r from-[#FF007F] to-[#FF7FAF] text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:from-[#FF66AA] hover:to-[#FFBBDD] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 8.5C2 4.91 4.91 2 8.5 2c1.04 0 2.05.22 2.98.63a1 1 0 0 1 .52 1.24l-1.12 3.03a1 1 0 0 1-1.16.63l-2.3-.46a9.96 9.96 0 0 0 5.52 5.52l.46-2.3a1 1 0 0 1 .63-1.16l3.03-1.12a1 1 0 0 1 1.24.52c.41.93.63 1.94.63 2.98C22 19.09 19.09 22 15.5 22A13.5 13.5 0 0 1 2 8.5z"
          />
        </svg>
        +91 98765 43210
      </motion.a>
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
          <span className="text-[#fffaf5] font-semibold">
            Events Memorable
          </span>
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

        {/* Button */}
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
