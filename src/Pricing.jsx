import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-orange-50 via-pink-50 to-white">
      
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold px-4 py-1 rounded-full bg-pink-100 text-pink-700">
          🔥 Limited Time Offer
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Perfect Starter Package
        </h2>

        <p className="text-gray-600 text-lg max-w-xl mx-auto mt-2">
          Everything you need for small to medium-scale celebrations
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        {/* LEFT CARD – WHAT'S INCLUDED */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            What's Included
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            A perfect starter package for small to medium-scale celebrations.
            It includes essential elements—anchoring, music, décor, photography,
            and entertainment—to ensure your event feels lively, organized, and
            memorable. Designed to provide a complete professional experience
            without hassle.
          </p>

          <div className="space-y-4">
            {[
              "Professional Event Anchoring",
              "Premium Music & Sound System",
              "Beautiful Event Décor",
              "Professional Photography",
              "Live Entertainment Acts",
              "Event Coordination & Management",
              "Guest Management Support",
              "Technical Support Throughout",
            ].map((item, i) => (
              <div className="flex items-start" key={i}>
                <Check className="text-pink-600 mt-1 mr-3" size={20} />
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD – PRICE CARD */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          
          <div className="text-center mb-8">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-4 py-1 rounded-full">
              LIMITED TIME OFFER
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mt-4">
              Starter Package
            </h3>

            <div className="text-5xl font-extrabold text-pink-600 mt-4">
              ₹20,000
            </div>
            <p className="text-gray-500">One-time payment</p>
          </div>

          {/* Details List */}
          <div className="space-y-5 text-lg">
            <div className="flex justify-between">
              <span className="text-gray-600">Event Duration</span>
              <span className="font-semibold text-gray-900">Full Day</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Guest Capacity</span>
              <span className="font-semibold text-gray-900">Up to 150</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Setup Time</span>
              <span className="font-semibold text-gray-900">Included</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Support</span>
              <span className="font-semibold text-gray-900">24/7</span>
            </div>
          </div>

     {/* CTA */}
<div className="mt-10">
  <button
    onClick={() => {
      document.getElementById("book")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="w-full py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 hover:opacity-90 shadow-lg"
  >
    Book Your Event Now
  </button>



            <p className="text-center text-sm mt-3 text-gray-500">
              Limited slots available · Book within 48 hours
            </p>
          </div>

        
        </div>

      </div>

      {/* BOTTOM ICONS ROW */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-3 text-center gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="font-semibold text-gray-900">Premium Quality</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="font-semibold text-gray-900">On-Time Delivery</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="font-semibold text-gray-900">Hassle-Free</p>
        </div>
      </div>
    </section>
  );
}
