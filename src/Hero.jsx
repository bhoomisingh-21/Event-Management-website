import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true); // new flag for first load

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const heroImages = [
    "./images/scroller1.jpg",
    "https://scontent.fbom22-1.fna.fbcdn.net/v/t39.30808-6/469327694_1507816389878482_1850951968033200660_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BsUfQWpB1KoQ7kNvwGl6yPJ&_nc_oc=AdmNXUWOiIe8pn0X7S5LsAFOStzR2BlwuzPitbV9VhcAnEJYY5SBCyQbZSgqgxWIdDRrXHOZ3rdA1io5CDOa79bu&_nc_zt=23&_nc_ht=scontent.fbom22-1.fna&_nc_gid=K0UTN4o6HRBxObi-GVso9A&oh=00_AfkleowqkkLGC-N3wq5fnq4-v4im1-Xa50ivmVLnN_7YOQ&oe=6959C3B4",
    "https://scontent.fbom22-1.fna.fbcdn.net/v/t39.30808-6/480281068_1554593038534150_7889664085783160130_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R5NubGxbgmYQ7kNvwH5GJ3r&_nc_oc=AdnwZeM5sWyayM2AA1Fd2fJQyalhEar1hV9ObCEKwbV3ge4PvRL-s_jG4SL5pqNj1JOuSQS7WbGJb2FtGezMxkrC&_nc_zt=23&_nc_ht=scontent.fbom22-1.fna&_nc_gid=zBAmL8NcJHKXxxvOTr7dbw&oh=00_AflB4Ou9xmvmngHSZnGqPCmOC5Kg4Qa89WxEL0z9e7F0iw&oe=6959B0EB",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Cycle images
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    // Remove firstLoad flag after mount so looped slides behave normally
    const loadTimer = setTimeout(() => setFirstLoad(false), 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={
              firstLoad
                ? { opacity: 1, scale: 1 } // first load: no slide
                : { x: "100%", opacity: 0, scale: 1 } // other slides
            }
            animate={{ x: 0, opacity: 1, scale: 1.1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              x: { duration: firstLoad ? 0 : 0.6, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
              opacity: { duration: 0.6 },
            }}
            className="absolute inset-0 bg-[center_top] bg-cover"


            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70"></div>




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
              <span className="text-[20px] text-white/80 tracking-[2px] uppercase font-light">
                Eventz
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex gap-12 text-[18px] md:text-lg font-semibold tracking-wide text-white uppercase hover:text-[#ffd6b3] transition-colors duration-300"

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
            className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#FF007F] to-[#FF7FAF] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:from-[#FF66AA] hover:to-[#FFBBDD] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"

          >
            +91 9022225334
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 z-20">

  {/* Hero Title */}
  <motion.h2
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative text-4xl md:text-6xl font-serif font-light leading-tight mb-6 tracking-wide"
    style={{
      color: 'white',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      padding: '0 6px',
      borderRadius: '5px',
      textShadow: '0 4px 20px rgba(0,0,0,0.8)',
    }}
  >
    We Make Your <br />
  <span
  className="font-semibold text-white"
  style={{
    textShadow: '0 0 12px rgba(255,255,255,0.8), 0 4px 20px rgba(0,0,0,0.6)',
  }}
>
  Events Memorable
</span>

  </motion.h2>

  {/* Hero Subtitle */}
  <motion.p
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 1 }}
    className="relative max-w-2xl text-[17px] md:text-xl font-medium leading-relaxed mb-8 text-white"
    style={{
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      padding: '0 4px',
      borderRadius: '4px',
      textShadow: '0 3px 15px rgba(0,0,0,0.7)',
    }}
  >
    Weddings, ring ceremonies, godh bharai, birthdays, or corporate events. Khushboo Eventz turns moments into timeless memories with unmatched artistry, warmth, and elegance.
  </motion.p>

  {/* Hero Button */}
 <motion.a
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  href="#book"
  className="mt-4 px-16 py-4 text-lg font-semibold rounded-full 
             bg-gradient-to-r from-[#FF007F] to-[#FF7FAF] text-white 
             shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  Book Now
</motion.a>


</div>

    </section>
  );
};

export default HeroSection;
