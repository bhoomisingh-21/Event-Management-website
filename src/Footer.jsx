import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ggresort.com/wp-content/uploads/sites/62/2024/08/springfield3-1536x1008.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

      {/* Footer Content */}
      <div className="relative z-10 px-6 py-16 md:px-20">
        {/* Top: Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="transition duration-300 text-white hover:text-pink-500"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Branding */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-wide uppercase mb-2">
            Khushboo Event Management
          </h2>
          <p className="max-w-xl mx-auto text-white text-sm md:text-base">
            Crafting timeless experiences with creativity, precision, and a touch of elegance.
            From intimate gatherings to grand celebrations — we make every moment unforgettable.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500">About</a></li>
              <li><a href="#" className="hover:text-pink-500">Venues</a></li>
              <li><a href="#" className="hover:text-pink-500">Gallery</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Corporate Events</a></li>
              <li><a href="#" className="hover:text-pink-500">Wedding Planning</a></li>
              <li><a href="#" className="hover:text-pink-500">Birthday Parties</a></li>
              <li><a href="#" className="hover:text-pink-500">Decor & Design</a></li>
              <li><a href="#" className="hover:text-pink-500">Catering</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Other Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Blog</a></li>
              <li><a href="#" className="hover:text-pink-500">Testimonials</a></li>
              <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Contact Info</h3>
            <ul className="space-y-2 text-white">
              <li>123 Celebration Street</li>
              <li>New Delhi, India</li>
              <li>+91 99999 99999</li>
              <li>info@khushbooevents.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mt-12 pt-6 text-center text-sm text-white">
          © {new Date().getFullYear()} Khushboo Events. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
}
