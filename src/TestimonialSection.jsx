import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ashok Kumar",
    rating: 5,
    text: "Excellent...everyone was surprised by seeing their performances..... definitely will invite for next function.......highly recommended!!!!!! its the highlight of our marriage!!!!",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Eo_circle_pink_white_letter-a.svg/2048px-Eo_circle_pink_white_letter-a.svg.png",
  },
  {
    name: "komal Ch",
    rating: 5,
    text: "This is best event management in Kerala. Our wedding event was amazing with this company. We are very happy with this group.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eo_circle_teal_letter-k.svg/1200px-Eo_circle_teal_letter-k.svg.png",
  },
  {
    name: "PINDIYAN ANTONY",
    rating: 5,
    text: "In my point of view best event management in Thrissur and very good wedding planner in Kerala.",
    image: "https://thepicturesdp.in/wp-content/uploads/2025/08/peachy-queen-profile-pic.jpg",
  },
  {
    name: "Rahul Dev",
    rating: 5,
    text: "Amazing work! The decoration and management were flawless. They made our event memorable beyond expectations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eo_circle_indigo_white_letter-r.svg/2048px-Eo_circle_indigo_white_letter-r.svg.png",
  },
  {
    name: "Anjali aron",
    rating: 5,
    text: "Top-notch professionalism and creativity! They handled everything smoothly. Would definitely recommend them for any big event.",
    image: "https://i.pinimg.com/236x/c1/b1/16/c1b116c483b052a9d09e6d1f1eb79009.jpg",
  },
  {
    name: "Sneha Nair",
    rating: 5,
    text: "Everything went perfectly! The team was very cooperative and made sure all arrangements were perfect.",
    image: "https://mastdp.in/wp-content/uploads/profile-cute-girl-pic-6.webp",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white text-center relative">
      {/* Heading */}
      <h3 className="text-pink-600 font-semibold text-lg tracking-widest uppercase">
        Client Testimonials
      </h3>

      <h2 className="text-2xl sm:text-4xl font-semibold mt-4 text-gray-900 mx-5 sm:mx-0">
        See What Our Clients Have to Say
      </h2>

      {/* Divider */}
      <div className="relative flex justify-center items-center my-6">
        <div className="h-[2px] w-64 bg-pink-200"></div>
        <div className="absolute flex items-center justify-center">
          <div className="h-[6px] w-[6px] bg-pink-500 rounded-full mx-1"></div>
          <div className="h-[4px] w-10 bg-pink-500 rounded-full"></div>
          <div className="h-[6px] w-[6px] bg-pink-500 rounded-full mx-1"></div>
        </div>
      </div>

      {/* Custom navigation buttons (outside swiper) */}
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-400 hover:text-pink-500 transition">
        <div className="swiper-button-prev-custom">
          <ChevronLeft size={26} />
        </div>
      </div>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-400 hover:text-pink-500 transition">
        <div className="swiper-button-next-custom">
          <ChevronRight size={26} />
        </div>
      </div>

      {/* Swiper (Slider) */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                {/* Card */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all text-left p-6 relative border border-gray-100 min-h-[240px] w-full">
                  {/* Google Icon */}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP6AKFlNa3Afg4RJOp7OtR7RGRrlPE2KbLg&s"
                    alt="Google"
                    className="absolute right-5 top-5 w-6 h-6"
                  />

                  {/* Stars */}
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 text-base leading-relaxed">
                    {t.text}
                  </p>
                </div>

                {/* User info below card */}
                <div className="flex items-center gap-3 mt-5 text-left w-full justify-start pl-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
