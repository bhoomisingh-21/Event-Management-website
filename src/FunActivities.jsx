import React from "react";
import { motion } from "framer-motion";
import { Music, Sparkles, Heart } from "lucide-react";

const FunActivities = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 flex flex-col items-center relative overflow-hidden">
      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute left-12 top-12 text-pink-400 opacity-60"
      >
        <Music size={36} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute right-16 top-20 text-yellow-400 opacity-60"
      >
        <Sparkles size={34} />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-14 right-20 text-pink-300 opacity-60"
      >
        <Heart size={34} />
      </motion.div>

      {/* Main Fun Activities Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-pink-100 rounded-3xl shadow-xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNGRvl8CXduDrc0ty0Qo4JgPlXNI-iT1_og&s"
            alt="Tattoo Artist"
            className="rounded-2xl object-cover h-32 w-full"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0lDFSl-jcMlH1uNyn68neahCB6VNUY6Phw&s"
            alt="Mehendi Artist"
            className="rounded-2xl object-cover h-32 w-full"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://ultimatepartyplannergoa.com/images/Magic2.jpg"
            alt="Magician"
            className="rounded-2xl object-cover h-32 w-full"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMoUL-5kHCJm75I0UTt0R0EMiKK686TW6Bg&s"
            alt="DJ"
            className="rounded-2xl object-cover h-32 w-full"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-left w-full md:w-1/2 relative">
          <h2 className="text-3xl font-bold text-black-400 mb-4">
            Bring on the Fun & Entertainment! 
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            From <span className="text-pink-500 font-semibold">tattoo</span> and  
            <span className="text-pink-500 font-semibold"> mehendi artists </span>  
            to <span className="text-pink-500 font-semibold"> magician</span> and  
            <span className="text-pink-500 font-semibold"> DJ</span> we make sure your event bursts with laughter, rhythm, and unforgettable memories.
          </p>
          {/* <div className="flex gap-2 mt-6 text-2xl">
            <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>💃</motion.span>
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.3 }}>🎤</motion.span>
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>🌸</motion.span>
            <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.8 }}>✨</motion.span>
          </div> */}
        </div>
      </motion.div>

      {/* Bottom fun line */}
      <p className="text-gray-600 mt-12 italic text-center">
        Guaranteed giggles, grooves & good vibes! 😄
      </p>
    </section>
  );
};

export default FunActivities;
