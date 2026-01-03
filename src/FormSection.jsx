import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Music } from "lucide-react";

const FormSection = () => {
  return (

    
    <section
      id="book"
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 sm:px-12 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/e2/15/a3/e215a3084956ce5be9a8195e14a51521.jpg')",
      }}
    >
      
      {/* Animated floating icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-10 top-10 text-pink-300 opacity-70"
      >
        <Sparkles size={28} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-12 top-20 text-yellow-400 opacity-60"
      >
        <Music size={28} />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-16 right-16 text-pink-400 opacity-50"
      >
        <Star size={26} />
      </motion.div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white leading-snug">
              Looking for the Most Creative & Innovative Event Planners?
            </h2>
            <p className="text-gray-100 mb-6 leading-relaxed text-lg">
              Celebrate the most special events of your life without worrying about a
              single thing. Khushboo Events is here to make your dream events come true!
              Our expert team offers professional planning and management services across
              India, using creative and innovative methods to curate perfect,
              hassle-free celebrations that captivate your attendees.
            </p>
            <span className="text-sm uppercase tracking-widest text-pink-300 font-semibold">
              Khushboo Eventz Management 
            </span>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form className="bg-white/20 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-2xl space-y-5 border border-white/30 max-w-md mx-auto">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner transition"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-600 transition-all text-white font-semibold py-3 rounded-xl shadow-lg"
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
