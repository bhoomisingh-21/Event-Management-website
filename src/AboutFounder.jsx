import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Grid Background (full section) */}
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
          
          {/* Collage of Founder Images */}
          <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            {/* Main big image */}
            <motion.img
              src="https://scontent.fbom22-1.fna.fbcdn.net/v/t1.6435-9/134919516_697818777544918_5357159715062573810_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2fusBRcUIvIQ7kNvwHLgjlR&_nc_oc=AdkzJUNBZmaKlIALXOveDqBcOsomBhMhN66TDOUxOpM3REfPG1ICS9xsdLsPmOmkZuHhoUHZvvpnrd8Bj9b9SdM5&_nc_zt=23&_nc_ht=scontent.fbom22-1.fna&_nc_gid=gT9W6tuIDgQvjSdj38jXLQ&oh=00_Afh08JN57LfufVeXHj8dK85dggR8MnAmTODe3_IRMKF-ew&oe=69524590"
              alt="Anchor Harshal"
              className="w-40 h-40 md:w-64 md:h-64 rounded-3xl object-cover shadow-2xl border-4 border-yellow-400"
              whileHover={{ scale: 1.05 }}
            />

            {/* Extra small layered images */}
            <motion.img
              src= "./images/founder.jpg"
              className="absolute -bottom-4 md:-bottom-6 -left-6 md:-left-12 w-24 h-24 md:w-36 md:h-36 rounded-2xl shadow-xl border-4 border-white"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />
            <motion.img
              src="https://scontent.fbom22-1.fna.fbcdn.net/v/t1.6435-9/153360327_724836008176528_1573588013405086816_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rizIQUq05gEQ7kNvwHz5Svf&_nc_oc=Adnl_Fct2pEwHETPXG2CJFx7G9tYB9IZ9DKR-AlKFjduBvksdXH2q5R_EVKmeYFZ-M04cSpyGbFZTRgtr_4yzSHN&_nc_zt=23&_nc_ht=scontent.fbom22-1.fna&_nc_gid=sLCDvN5hkRN0lrfVCfVRQA&oh=00_AfiTrBU5xohLKT8S3ihXoPNC2vr40PlJUvk4CWBGKDHiAA&oe=695256C1"
              className="absolute -top-4 md:-top-6 right-0 w-28 h-28 md:w-40 md:h-40 rounded-2xl shadow-xl border-4 border-white"
              animate={{ rotate: [0, -4, 4, 0] }}
              transition={{ repeat: Infinity, duration: 10 }}
            />

            {/* Doodle: Paper Plane */}
            <img
              src="https://static.vecteezy.com/system/resources/previews/069/431/444/non_2x/paper-plain-doodle-vector.jpg"
              className="absolute -bottom-8 md:-bottom-10 right-6 md:right-10 w-10 md:w-14 opacity-80"
            />
          </div>

          {/* Text Section */}
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
              <span className="font-bold text-yellow-600">
                {" "}Khushboo Eventz
              </span>
              . Harshal transforms ideas into unforgettable experiences, 
              blending creativity, leadership, and passion.
            </p>

            <p className="text-gray-600 italic text-base md:text-lg">
              “Turning visions into vibrant celebrations.”
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
