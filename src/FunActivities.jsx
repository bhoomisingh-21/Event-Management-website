import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Music, Sparkles, Star } from "lucide-react";

const activities = [
  { name: "Tattoo Artist", img: "https://i.pinimg.com/1200x/7a/30/7c/7a307cf22d94d4672480ebdfc0f1beed.jpg" },
  { name: "Mehendi Artist", img: "./images/tatto_artist.jpg" },
  { name: "Magician", img: "./images/magician.jpg"},
  { name: "DJ", img: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/61103099_347956029197863_7944464010286465024_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=H5jvvF3JNvMQ7kNvwFfhffe&_nc_oc=AdnA4KGeTI7QTVUrYMTdPEs5ghnXDScJzQtrt4SGsA4jVuh31Lg4Kh1tZYbZrV1dC3Fykrz5BB_MHrHw6U_q8lzY&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=AGGvCKOGxdRlSj-E2SKvrQ&oh=00_AflM793ggskmAVT5EgXik7M1Ibtg_i1BWsze-btupomhvw&oe=69562C2D" },
  { name: "Dhol", img: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/74282776_426770361316429_8535444732757671936_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cGlFTaRBJJMQ7kNvwFxY-LO&_nc_oc=Adk86QFgWFBQxpDoZEgh5TuXAB0arfHIR6srI36Npl8bFuB5XX6ns-hsVxs_TBMz65mgOskH-Kn8LADu0IOyT-Hx&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=E-bB-yV2i9J9gX5ffgKqXQ&oh=00_AfkdZpRQ26_PrV9MNNMMDhk7qgMtIwi4Tdc-V9P8bPZvSg&oe=69561A19" },
  { name: "Caricature Artist", img: "https://i.pinimg.com/1200x/35/44/d6/3544d64fa20902356890ee3e0660d89d.jpg" },
  { name: "Anchor", img: "./images/anchor.jpg" },
  { name: "Singer", img: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/62091385_355736625086470_6875976331448811520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-NgpF8-H1xoQ7kNvwH7dX8o&_nc_oc=AdlCgpZZ5NawLH7AZpUmVqzZT-gYHPwF3864TLXS_0MiBcozf1rABItBW1KS1nPRyrBLIh5g7wZ9H2tdp80o114u&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=SRzUY9gUBH4nD6bVf-DP7w&oh=00_AfmdAGQpmllEiD9tdwTiLW58jxbMdD6f_T05Z6Wy1IWzWw&oe=695631D7" },
  { name: "Band Baja", img: "https://i.pinimg.com/736x/4c/c0/67/4cc0673b4cc90e38a3df942953459946.jpg" },
  { name: "Decoration", img: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/33663531_181284269198374_3190230260687831040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dTXvi1Vp7wQQ7kNvwGql5zC&_nc_oc=AdmB_Y_tV0UWulNXaZGD7Eb99oyLslVLDahvph1mMSj6tj9t4xErBtFg6M4C5HCzPCuss0Q2w0syQpa5l0jY3btI&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=xxOUrh6kY0305lrb4FiYjA&oh=00_Aflk9IFMau8v2KtWx4LRNPqCkHDKTrhltvOxXupnnd2b_g&oe=69563C6F" },
  { name: "Photography", img: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/153612207_724835644843231_1427400377148985349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FsKG3KStC_EQ7kNvwGxIilK&_nc_oc=AdmJDGwTVdDyikHBS_aHXHhYTzeObEmIGglh9rIraMgpyEuxOcmRKvRJdACLWCKMwQbmv_jvehuvNJfKI3JzBiTB&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=y1XUR8CsY5t5Nllfnga36w&oh=00_AfltV-7FyjbZGvSYeKOwJuQ_CYrtcfBwn1N9sRF1ZMr5iQ&oe=695639FF" },
  { name: "Videography", img: "https://i.pinimg.com/736x/96/6a/94/966a9474ff26402b1fe09c38a4432926.jpg" },
];

export default function FunActivities() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffe4ee 0%, #fff4f8 40%, #fffbff 80%)",
      }}
    >
      {/* Floating Icons */}
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute left-6 top-10 text-pink-400 opacity-40">
        <Music size={32} />
      </motion.div>

      <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute right-10 top-28 text-yellow-400 opacity-40">
        <Sparkles size={30} />
      </motion.div>

      <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-14 right-16 text-pink-300 opacity-40">
        <Star size={28} />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-pink-200/70 to-pink-100/60 backdrop-blur-xl border border-pink-300/50 shadow-2xl rounded-3xl p-10 md:p-14 max-w-7xl w-[90%] mx-auto"
      >
        <h2 className="text-3xl text-center sm:text-4xl md:text-4xl font-bold text-pink-700 mb-4">
          Unforgettable Fun, Crafted For Your Celebration 
        </h2>

        <p className="text-gray-700 text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto">
          We offer a complete range of activities, end-to-end event management tailored for your needs.
        </p>

        {/* Scroll + Auto-scroll Row */}
        <div className="relative overflow-x-auto no-scrollbar py-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            drag="x"
            dragConstraints={{ left: -500, right: 500 }}
          >
            {[...activities, ...activities].map((item, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.25}
                className="min-w-[170px] md:min-w-[240px] h-60 md:h-72 rounded-3xl overflow-hidden shadow-lg cursor-pointer relative hover:scale-105 transition-transform duration-300"
              >
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-3xl"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <div className="absolute bottom-0 w-full bg-pink-600/90 text-white text-center text-sm md:text-lg py-2 font-semibold">
                  {item.name}
                </div>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <p className="mt-12 text-gray-600 italic text-lg text-center">
        Guaranteed giggles, grooves & good vibes 😄
      </p>
    </section>
  );
}
