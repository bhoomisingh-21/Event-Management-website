import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

const StatsShowcase = () => {
const stats = [
{ number: 15, label: "Years of Experience", suffix: "+" },
{ number: 1700, label: "Events Covered", suffix: "+" },
{ number: 1500, label: "Satisfied Clients", suffix: "+" },
{ number: 4.8, label: "Customer Rating", suffix: "/5" },
];

const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.3,
});

const [showBadge, setShowBadge] = useState(true);

return ( <section
   id="about"
   className="w-full bg-white relative pt-28 sm:pt-32 lg:pt-36"
 >
{/* Floating Promo Badge */}
{showBadge && (
<motion.div
initial={{ opacity: 1, y: -6, scale: 1 }}
animate={{ y: [-6, -2, -6], scale: [1, 1.03, 1] }}
transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-2"
> <div className="relative inline-block w-full max-w-xs sm:max-w-sm md:max-w-max">
{/* Gold Shine */} <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
<motion.div
initial={{ x: "-150%" }}
animate={{ x: "150%" }}
transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
className="w-2/3 sm:w-1/3 h-full bg-gradient-to-r from-transparent via-[#ffe8b9aa] to-transparent blur-2xl opacity-70"
/> </div>

        {/* Badge */}
<div
  onClick={() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="cursor-pointer px-3 py-2 sm:px-5 sm:py-3 rounded-full backdrop-blur-xl bg-white flex flex-wrap justify-center items-center gap-2 text-gray-900 font-semibold border border-[#f4d49a] shadow-[0_10px_35px_rgba(240,200,120,0.35)] text-xs sm:text-sm md:text-base"
>
  🎉 Basic Birthday Package – ₹20,000
  <span className="text-yellow-600 font-bold whitespace-nowrap">
    Limited Time
  </span>
</div>


      </div>
    </motion.div>
  )}

  {/* Stats Section */}
  <div
    ref={ref}
    className="max-w-7xl mx-auto py-16 px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 -mt-8 sm:-mt-10"
  >
    {stats.map((stat, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
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
      src="https://scontent.fbom46-1.fna.fbcdn.net/v/t39.30808-6/469356191_1507816666545121_2883998144245190373_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xpf5f1X5VMEQ7kNvwFpcK8V&_nc_oc=AdlcYDjR60Qp2ZEgcbgEy5ERtQSexrPtR_xgETMJs80zqp80xz7fGeUi2Ek21xFG78RQwPos8MeRGNgr8UumkLUe&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=g1G7XpbK6bIEzT4gphNpkw&oh=00_Afl5u-bG1GimmUtb5Pl_I3cUGdePYKFCE7SDtspXTmKRLg&oe=693471E8"
      alt="Showcase"
      className="w-full md:w-4/5 lg:w-3/4 rounded-3xl shadow-2xl object-cover"
    />
  </div>
</section>

);
};

export default StatsShowcase;
