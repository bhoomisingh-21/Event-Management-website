import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const services = [
  {
    title: "Birthday Parties",
    description: "Make your special day unforgettable with our themed birthday celebrations.",
    image: "https://i.pinimg.com/1200x/06/71/c0/0671c0561ad84758b105250e5f2254ef.jpg",
  },
  {
    title: "Sangeet Sandhyas",
    description: "Celebrate music and dance with our expertly managed sangeet events.",
    image: "https://i.pinimg.com/1200x/10/bb/8a/10bb8a45a2a6fe3a90252a5830a63aa0.jpg",
  },
  {
    title: "Society Events",
    description: "Organize community gatherings and events with ease and elegance.",
    image: "https://i.pinimg.com/1200x/bf/53/b5/bf53b56f4d7859d74dee655083501d23.jpg",
  },
  {
    title: "Theme Parties",
    description: "Creative and fun theme parties tailored to your vision.",
    image: "https://i.pinimg.com/736x/1d/77/cc/1d77cc81ed0ea50b90f590bd18459cba.jpg",
  },
  {
    title: "Wedding",
    description: "From intimate ceremonies to grand weddings, we handle it all.",
    image: "https://i.pinimg.com/1200x/7b/40/4c/7b404c8d76c65a9103a995c42b05a430.jpg",
  },
  {
    title: "Corporate Events",
    description: "Professional management for corporate gatherings.",
    image: "https://i.pinimg.com/1200x/43/49/32/43493264861c0153a4708c902701d862.jpg",
  },
  {
    title: "Ring Ceremony",
    description: "Celebrate your love with our elegant and personalized ring ceremonies.",
    image: "https://i.pinimg.com/736x/ea/3b/67/ea3b674da5ce95c835aebf57b40c360a.jpg", // replace with your preferred image
  },
  {
    title: "God Bharayi",
    description: "Organize this auspicious ceremony with our expert arrangements and care.",
    image: "https://i.pinimg.com/1200x/ad/96/23/ad962315511a38186d1f7fca1cfdeccc.jpg", // replace with your preferred image
  },
  {
    title: "Anniversary Celebrations",
    description: "Mark your milestones with memorable anniversary parties tailored to your style.",
    image: "https://i.pinimg.com/736x/57/27/45/5727450944818d943a1b8c804aaf6b61.jpg", // replace with preferred image
  },
];


const ServicesSection = () => {
  return (
   <section id="services" className="relative py-24 bg-gradient-to-b from-white to-pink-50 overflow-hidden">

      {/* Floating Glow Orbs */}
      <div className="absolute -top-32 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light mb-4"
        >
          Events We Create
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
        >
          We plan and deliver celebrations filled with elegance, joy & moments
          that you cherish forever.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.04}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-md border border-white/30 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-72 w-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
