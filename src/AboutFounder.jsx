import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://img.freepik.com/free-vector/abstract-horizontal-grid-lines-graph-style-graphic-design_1017-39918.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center"></div>

      {/* Floating Circles */}
      <motion.div
        className="absolute top-10 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-yellow-300 rounded-full opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-24 md:w-40 h-24 md:h-40 bg-yellow-200 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Image Collage */}
          <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <motion.img
              src="./images/anchor harshal 1.jpg"
              alt="Anchor Harshal"
              className="w-40 h-40 md:w-64 md:h-64 rounded-3xl object-cover shadow-2xl border-4 border-yellow-400"
              whileHover={{ scale: 1.05 }}
            />

            <motion.img
              src="./images/founder.jpg"
              alt="Founder"
              className="absolute -bottom-4 md:-bottom-6 -left-6 md:-left-12 w-24 h-24 md:w-36 md:h-36 rounded-2xl shadow-xl border-4 border-white"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />

            <motion.img
              src="./images/anchor harshal 2.jpg"
              alt="Anchor Harshal Event"
              className="absolute -top-4 md:-top-6 right-0 w-28 h-28 md:w-40 md:h-40 rounded-2xl shadow-xl border-4 border-white"
              animate={{ rotate: [0, -4, 4, 0] }}
              transition={{ repeat: Infinity, duration: 10 }}
            />

            <img
              src="https://static.vecteezy.com/system/resources/previews/069/431/444/non_2x/paper-plain-doodle-vector.jpg"
              alt="Paper Plane"
              className="absolute -bottom-8 md:-bottom-10 right-6 md:right-10 w-10 md:w-14 opacity-80"
            />
          </div>

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
              Meet Our Founder
            </h3>

            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-3 mb-6">
              Anchor Harshal
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              The creative mind and driving force behind
              <span className="font-bold text-yellow-600"> Khushboo Eventz</span>.
              Harshal transforms ideas into unforgettable experiences, blending
              creativity, leadership, and passion.
            </p>

            <p className="text-gray-600 italic text-base md:text-lg mb-6">
              “Turning visions into vibrant celebrations.”
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition font-medium"
              >
                <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
                  📞
                </span>
                +91 98765 43210
              </a>

              <a
                href="mailto:khushbooeventz@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition font-medium"
              >
                <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
                  ✉️
                </span>
                khushbooeventz@gmail.com
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
