import React from "react";
import { motion } from "framer-motion";

const FormSection = () => {
  return (
    <section id="book"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-12"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/e2/15/a3/e215a3084956ce5be9a8195e14a51521.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">
        {/* Left Info Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-white leading-snug">
            Looking for the Most Creative & Innovative Event Planners in Mumbai?
          </h2>
          <p className="text-md mb-8 text-gray-200 leading-relaxed">
            Imagine celebrating the most special events of your life without
            worrying about a single thing.
            Khushboo Events is here to make your dream events come true! Our expert event
            management team offers professional planning and management
            services across Mumbai, using creative and innovative methods to
            curate perfect, hassle-free celebrations that will captivate your
            attendees. Contact us today to bring your vision to life and create
            unforgettable memories!
          </p>
          <span className="text-sm uppercase tracking-widest text-pink-300 font-medium">
            Featured Event Planners in Mumbai
          </span>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 border border-white/20 max-w-md mx-auto">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Email
              </label>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Your Message"
                className="w-full p-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-600 transition-all text-white font-semibold py-2.5 rounded-lg shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;
