import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsShowcase = () => {
  const stats = [
    { number: 15, label: "Years of Experience", suffix: "+" },
    { number: 1700, label: "Events Covered", suffix: "+" },
    { number: 1500, label: "Satisfied Clients", suffix: "+" },
    { number: 4.8, label: "Customer Rating", suffix: "/5" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true, // counts only the first time scrolled into view
    threshold: 0.3, // when 30% of the section is visible
  });

  return (
    <section id="about" className="w-full bg-white">
      {/* Stats */}
      <div
        ref={ref}
        className="max-w-7xl mx-auto py-18 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-4xl md:text-6xl font-m text-gray-900 mb-2">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2}
                  decimals={stat.number % 1 !== 0 ? 1 : 0}
                  suffix={stat.suffix}
                />
              ) : (
                0
              )}
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
          src="https://i.pinimg.com/1200x/f1/bf/a0/f1bfa0a041ecbb5a65b3729d6641e915.jpg"
          alt="Showcase"
          className="w-full md:w-4/5 lg:w-3/4 rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default StatsShowcase;
