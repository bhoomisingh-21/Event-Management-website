import React from "react";
import Tilt from "react-parallax-tilt";
import { Check, Star } from "lucide-react";

export default function PricingCard() {
  return (
    <section id="pricing"  className="py-24 bg-gradient-to-b from-pink-50 via-pink-100 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
          Our Event Packages
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Tailored experiences to make your celebration unforgettable
        </p>
      </div>

      {/* Pricing Card with Tilt */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="max-w-4xl mx-auto bg-gradient-to-br from-pink-200/40 to-pink-100/50 backdrop-blur-xl border border-pink-300/40 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row hover:scale-105 transition-transform duration-500 relative"
      >
        {/* Ribbon on Top-Right */}
<div className="absolute top-4 right-[-30px] transform rotate-25 bg-pink-600 text-white font-bold px-10 py-2 shadow-lg z-10">
  Limited Time Package
</div>


        {/* Left Side: Package info */}
        <div className="md:w-1/2 p-10 md:p-12 bg-pink-50 flex flex-col justify-between items-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Star size={28} className="text-pink-400 mr-2 animate-bounce" />
              <h3 className="text-3xl font-bold text-pink-700">Basic Package</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Perfect starter package for small to medium celebrations. Includes all the essentials to make your event lively and memorable.
            </p>
            <div className="text-5xl font-extrabold text-pink-700 mb-2">
              ₹20,000
            </div>
            <p className="text-gray-500 mb-6">All-inclusive, limited-time offer</p>
          </div>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-xl text-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Book Now
          </button>
        </div>

        {/* Right Side: Included Services */}
        <div className="md:w-1/2 p-10 md:p-12 bg-white border-l border-pink-300/30">
          <h4 className="text-2xl font-semibold text-pink-700 mb-6">What's Included:</h4>
          <ul className="text-gray-700 space-y-3 text-lg">
            <li className="flex items-center"><Check className="text-pink-500 mr-3" /> Anchor</li>
            <li className="flex items-center"><Check className="text-pink-500 mr-3" /> DJ</li>
            <li className="flex items-center"><Check className="text-pink-500 mr-3" /> Decoration</li>
            <li className="flex items-center"><Check className="text-pink-500 mr-3" /> Photographer</li>
            <li className="flex items-center"><Check className="text-pink-500 mr-3" /> Fun & Entertainment (Sangeet Artists, Tattoo Artist, Band Baja Baraat)</li>
          </ul>
        </div>
      </Tilt>
    </section>
  );
}
