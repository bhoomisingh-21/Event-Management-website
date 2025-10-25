import React from "react";
import { motion } from "framer-motion";

const StatsShowcase = () => {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "1.7K+", label: "Events Covered" },
    { number: "1.5K+", label: "Satisfied Clients" },
    { number: "4.8", label: "Customer Rating" },
  ];

  return (
    <section id="about" className="w-full bg-white">
  {/* Stats */}
  <div className="max-w-7xl mx-auto py-18 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
    {stats.map((stat, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-6xl font-m text-gray-900 mb-2">
          {stat.number}
        </h2>
        <p className="text-sm md:text-xl text-gray-400 font-medium">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Showcase Image */}
  <div className="flex justify-center py-1 px-6 md:px-10 pb-16">
    <img
      src="https://5.imimg.com/data5/DS/DF/ZI/SELLER-37334244/birthday-event-planer--500x500.jpg"
      alt="Showcase"
      className="w-full md:w-4/5 lg:w-3/4 rounded-3xl shadow-2xl object-cover"
    />
  </div>
</section>

  );
};

export default StatsShowcase;
