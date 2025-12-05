import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ggresort.com/wp-content/uploads/sites/62/2024/08/springfield3-1536x1008.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 md:px-20 lg:px-32">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.15 }}
              className="text-white/85 hover:text-pink-500 transition duration-300"
            >
              <Icon size={26} />
            </motion.a>
          ))}
        </div>

        {/* Branding */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-yellow-300">
            Khushboo Eventz
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-white/85 text-sm md:text-base leading-relaxed">
            Turning your dreams into unforgettable celebrations blending
            elegance, creativity, and precision to make every event a cherished
            memory.
          </p>
        </div>

        {/* Footer Links (Mobile 2 Columns | Desktop 3 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 md:gap-x-24 justify-items-center md:justify-items-start text-center md:text-left max-w-5xl mx-auto">
          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/85 text-sm md:text-base">
              {["Home", "About", "Gallery", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-pink-400 transition-all duration-300 hover:pl-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-white/85 text-sm md:text-base">
              {[
                "Corporate Events",
                "Wedding Planning",
                "Birthday Parties",
                "Decor & Design",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-pink-400 transition-all duration-300 hover:pl-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Hidden on small, visible on medium+) */}
          <div className="col-span-2 md:col-span-1 md:block hidden">
            <h3 className="text-base md:text-lg font-semibold mb-4 uppercase tracking-wide">
              Contact Info
            </h3>
            <ul className="space-y-2 text-white/85 text-sm md:text-base">
              <li>Mumbai, Malad</li>
              <li>Servicable across India</li>
              <li>+91 9022225334</li>
              <li>hi@khushbooeventz.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center text-sm md:text-base text-white/70">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Khushboo Eventz</span>. All
          Rights Reserved.
        </div>
      </div>

      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
    </motion.footer>
  );
}
