import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Birthday Parties",
    description: "Make your special day unforgettable with our themed birthday celebrations.",
    image: "/images/birthday.jpg",
  },
  {
    title: "Sangeet Sandhyas",
    description: "Celebrate music and dance with our expertly managed sangeet events.",
    image: "https://content.jdmagicbox.com/comp/bhopal/b7/0755px755.x755.210219194711.r6b7/catalogue/-s5o6736m45.jpg",
  },
  {
    title: "Society Events",
    description: "Organize community gatherings and events with ease and elegance.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/1/483363817/ZA/OR/BD/221110049/society-event-management-service-500x500.png",
  },
  {
    title: "Theme Parties",
    description: "Creative and fun theme parties tailored to your vision.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pYPR97rjZTiUvFiD53rgjwZ1MBz_3OBSOw&s",
    
  },
  {
    title: "Wedding",
    description: "From intimate ceremonies to grand weddings, we handle it all.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xct4MSnL4D_pY8OJ2T_UnFx7iIG6hURMBw&s",
  },
  {
    title: "Corporate Events",
    description: "Professional management for corporate gatherings.",
    image: "https://www.5thavenueeventmanagement.com/wp-content/uploads/2023/06/5th-Avenue-Event-Management-Corporate-Events-01.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-pink-50">
  <div className="max-w-5xl mx-auto px-8 sm:px-12">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
      Our Services
    </h2>
    <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
      We specialize in creating memorable experiences for all occasions. 
      From birthdays to corporate events, we ensure every detail is handled 
      with perfection, so you can enjoy your celebration stress-free.
    </p>

    {/* Divider */}
      <div className="relative flex justify-center items-center my-6">
        <div className="h-[2px] w-64 bg-pink-200"></div>
        <div className="absolute flex items-center justify-center">
          <div className="h-[6px] w-[6px] bg-pink-500 rounded-full mx-1"></div>
          <div className="h-[4px] w-10 bg-pink-500 rounded-full"></div>
          <div className="h-[6px] w-[6px] bg-pink-500 rounded-full mx-1"></div>
        </div>
      </div>


    {/* Services grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
         <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-center p-4">
  <div>
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-white text-sm">{service.description}</p>
  </div>
</div>

        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ServicesSection;
