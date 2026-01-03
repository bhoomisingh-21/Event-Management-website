import React from "react";
import {
  Check,
  Star,
  Crown,
  Sparkles,
  Music,
  Camera,
  Mic,
  Calendar,
} from "lucide-react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-orange-50 to-purple-50"
    >
      {/* ================= GLOW BLOBS ================= */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-40 w-[520px] h-[520px] bg-orange-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[520px] h-[520px] bg-purple-300/30 rounded-full blur-3xl" />

      {/* ================= FLOATING PARTICLES ================= */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* SMALL STARS */}
        <span className="particle star left-[12%] top-[18%]">★</span>
        <span className="particle star left-[28%] top-[32%]">★</span>
        <span className="particle star left-[72%] top-[22%]">★</span>
        <span className="particle star left-[85%] top-[40%]">★</span>

        {/* BIG STARS */}
        <span className="particle star big left-[18%] top-[55%]">★</span>
        <span className="particle star big left-[78%] top-[58%]">★</span>

        {/* DOTS */}
        <span className="particle dot left-[22%] top-[45%]" />
        <span className="particle dot left-[35%] top-[60%]" />
        <span className="particle dot left-[48%] top-[28%]" />
        <span className="particle dot left-[68%] top-[48%]" />
        <span className="particle dot left-[82%] top-[62%]" />

        {/* SMALL CIRCLES */}
        <span className="particle circle left-[90%] top-[18%]" />
        <span className="particle circle left-[6%] top-[42%]" />

        {/* BIG CIRCLES */}
        <span className="particle circle big left-[70%] top-[12%]" />
        <span className="particle circle big left-[15%] top-[68%]" />

        {/* SQUARES */}
        <span className="particle square left-[8%] top-[28%]" />
        <span className="particle square left-[88%] top-[34%]" />

        {/* BIG SQUARE */}
        <span className="particle square big left-[50%] top-[75%]" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center mb-24">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur border shadow-sm text-sm font-medium text-gray-700">
          <Sparkles size={16} className="text-pink-500" />
          Premium Event Solutions
        </span>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900">
          Luxury Made <span className="text-pink-600">Affordable</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Experience world-class event management with our all-inclusive
          starter package.
        </p>

        <p className="mt-2 text-pink-600 font-medium">
          Your dream celebration awaits.
        </p>
      </div>

      {/* ================= CARD ================= */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 flex justify-center">
        <div className="relative w-full max-w-md">
          {/* Badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
            <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold shadow-lg">
              <Crown size={16} />
              BEST VALUE
            </div>
          </div>

          {/* Card */}
          <div className="relative rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_40px_120px_-40px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:18px_18px]" />

            {/* Top */}
            <div className="relative p-10">
              <div className="flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
                  Starter Package
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-6xl font-bold text-gray-900">
                  ₹20,000
                </span>
                <span className="text-sm text-gray-500 mb-2">one-time</span>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Transform your celebration with a comprehensive, all-inclusive
                solution designed for intimate to mid-scale events.
              </p>

              <button className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition">
                ⚡ Book Your Event Now ⚡
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* ================= INCLUSIONS (RESTORED) ================= */}
            <div className="relative p-10 space-y-5">
              <div className="flex items-center justify-between mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  Premium Inclusions
                </p>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  5 Services
                </span>
              </div>

              {[
                { icon: Mic, text: "Professional event anchoring" },
                { icon: Music, text: "DJ & premium sound system" },
                { icon: Sparkles, text: "Curated event décor" },
                { icon: Camera, text: "Professional photography" },
                { icon: Calendar, text: "On-site event coordination" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white shadow-sm border hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
                      <item.icon size={18} className="text-pink-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                  <Check className="text-green-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Check className="text-green-500" /> 100+ Happy Events
            </span>
            <span className="flex items-center gap-2">
              <Star className="text-orange-400 fill-orange-400" /> 5-Star Rated
            </span>
            <span className="flex items-center gap-2">
              <Crown className="text-pink-500" /> Award Winning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
