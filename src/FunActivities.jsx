import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Music, Sparkles, Star } from "lucide-react";

const activities = [
  { name: "Tattoo Artist", img: "https://i.pinimg.com/1200x/7a/30/7c/7a307cf22d94d4672480ebdfc0f1beed.jpg" },
  { name: "Mehendi Artist", img: "https://i.pinimg.com/1200x/40/d7/bc/40d7bc51807d4f99552270d44055e4cd.jpg" },
  { name: "Magician", img: "https://i.pinimg.com/736x/06/f0/c0/06f0c0c85542063538d404b4c261bbf0.jpg" },
  { name: "DJ", img: "https://i.pinimg.com/736x/4d/bd/7a/4dbd7a9997526fc7d2ebbf62b20ff147.jpg" },
  { name: "Dhol", img: "https://i.pinimg.com/736x/c3/20/ae/c320ae26523a7edcbd99a8484b2b0429.jpg" },
  { name: "Caricature Artist", img: "https://i.pinimg.com/1200x/35/44/d6/3544d64fa20902356890ee3e0660d89d.jpg" },
  { name: "Anchor", img: "https://i.pinimg.com/1200x/f9/ad/67/f9ad673508933bc84ccf049692d63c8c.jpg" },
  { name: "Geet Singer", img: "https://i.pinimg.com/1200x/b5/02/67/b50267f56ce51cf61f3620d78baecaef.jpg" },
  { name: "Band Baja", img: "https://i.pinimg.com/736x/4c/c0/67/4cc0673b4cc90e38a3df942953459946.jpg" },
  { name: "Decoration", img: "https://i.pinimg.com/736x/72/65/73/726573169721df0a789c4cc58e2b3321.jpg" },
  { name: "Photography", img: "https://i.pinimg.com/1200x/2c/db/49/2cdb49668e5bfc6e70142f9414a993c1.jpg" },
  { name: "Videography", img: "https://i.pinimg.com/736x/96/6a/94/966a9474ff26402b1fe09c38a4432926.jpg" },
];

export default function FunActivities() {
  return (
    <section className="py-16 sm:py-20 md:py-24 flex flex-col items-center text-center bg-white relative overflow-hidden">
      {/* Floating fun icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-4 sm:left-10 top-8 sm:top-10 text-pink-400 opacity-40 sm:opacity-50"
      >
        <Music size={28} className="sm:w-8 sm:h-8" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-4 sm:right-12 top-20 sm:top-24 text-yellow-400 opacity-40 sm:opacity-50"
      >
        <Sparkles size={26} className="sm:w-7 sm:h-7" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-10 sm:bottom-16 right-8 sm:right-16 text-pink-300 opacity-40 sm:opacity-50"
      >
        <Star size={24} className="sm:w-7 sm:h-7" />
      </motion.div>

      {/* Main pink card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-pink-200 to-pink-100 border border-pink-300 shadow-2xl rounded-3xl p-6 sm:p-10 md:p-16 max-w-7xl w-[92%] sm:w-11/12 relative overflow-hidden"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-6 animate-pulse">
          Fun & Entertainment
        </h2>
        <p className="text-gray-700 mb-8 sm:mb-12 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto animate-fadeIn px-2">
          Experience <span className="text-pink-500 font-bold">music</span>, <span className="text-pink-500 font-bold">laughter</span>, and <span className="text-pink-500 font-bold">memories</span> with our amazing lineup! ✨
        </p>

        {/* Auto-sliding carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...activities, ...activities].map((item, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.3}
                className="min-w-[150px] sm:min-w-[200px] md:min-w-[240px] h-48 sm:h-60 md:h-64 rounded-3xl overflow-hidden shadow-lg cursor-pointer relative hover:scale-105 transition-transform duration-300"
              >
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-3xl"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute bottom-0 w-full bg-pink-600/90 text-white text-sm sm:text-base md:text-lg py-2 font-semibold">
                  {item.name}
                </div>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <p className="mt-8 sm:mt-12 text-gray-500 italic text-base sm:text-lg px-4">
        Guaranteed giggles, grooves & good vibes! 😄
      </p>
    </section>
  );
}
