import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const services = [
  {
    title: "Birthday Parties",
    description: "Make your special day unforgettable with our themed birthday celebrations.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/79533526_463732644286867_4423997820197928960_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6TWDwnT5QWMQ7kNvwHdifH5&_nc_oc=Adljlec3TXSIRuxZ83iOdHZU6IbZUVZ-2HFtxnPa-U5541wX0zRAobVtmt9TrBnmdnhlAzv1eJmlnEtYP0KArbRG&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=4Ze1bvbu_QmO6h0CcEKADA&oh=00_Afkdt9XI3P8BqZftN00r9FOd8ZP4GEVn-i3GHvcupMOoZA&oe=69561CF5",
  },
  {
    title: "Sangeet Sandhyas",
    description: "Celebrate music and dance with our expertly managed sangeet events.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t39.30808-6/469397768_1507816743211780_563828116340910998_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5GELK6tbcfwQ7kNvwEHqqXB&_nc_oc=AdkurbEZBpzGG0R8GdaLMTcRQJktiruP7ZgBYfKK9ME6vl8ces6bwilb1TApNNYLHZ6S0cd3gF9lTWQFV9eAbjGV&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=4uSDnY6HkymxdsD-n9Ae7g&oh=00_AfkcrAGTKddiZXIGzAg5PK8hl8VvqUUNBnKeBYuSnKeMOg&oe=6934708C",
  },
  {
    title: "Society Events",
    description: "Organize community gatherings and events with ease and elegance.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/129117240_680010619325734_4960729201389225622_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AyECaasD934Q7kNvwGLK5DM&_nc_oc=Adku8VAzSKad2SF3ZTD7qC6OdFEyqgNo-mN-qSpiP0vXavt8EarhaoL-OONylHvh9btWOidQW9d-b9N8R_KMkfAZ&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=sHQNLnOhnXTKroOBbIsrbA&oh=00_Afn59pZmHBVDy3kWGd4OLcgLwQud528OKJZsif99JgQg7g&oe=69563F77",
  },
  {
    title: "Theme Parties",
    description: "Creative and fun theme parties tailored to your vision.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/100389947_557200471606750_3141370837282586624_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SScbpgKLtywQ7kNvwE2OubF&_nc_oc=AdkgpSyLHrvfYKWwe4B950TSELRmBzdAASMHe-7rI5biE_nEdPdqy5MKHE3IjDn7Uh1XoldYTKZKIs5rffp51PkM&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=mfAKhRMIEx8tsYG-W4RKjQ&oh=00_Afmi1LaAFfD4U-m_updf1q_acawBHAyWhEuMgPmjeeEfEQ&oe=69561B91",
  },
  {
    title: "Wedding",
    description: "From intimate ceremonies to grand weddings, we handle it all.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t39.30808-6/480980350_1556183201708467_8861783915645022502_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Sh-Zd-rU-zMQ7kNvwEgUEPf&_nc_oc=Adkj-X6upZksjl6QuO9R50qqcjsYlPkokJ1k8akV_RSX5rxCH-Nf8SEfiF9q2VSo8P6E6SsT0H7FdHm91Rt-0Ckk&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=DaCTBnuwUsbHQNyMoWOT_g&oh=00_AflxP-FYITXXlvjIl-00Oz3ciOXlYuyMyv85lzudZYK9IA&oe=6934A970",
  },
  {
    title: "Corporate Events",
    description: "Professional management for corporate gatherings.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t39.30808-6/469562043_1510106469649474_2084761775949237716_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TXfDazdp5wkQ7kNvwHqxlUW&_nc_oc=AdnIp0EizcJK6yo5A6V09bXEO0gibBc5dcT69LBdgxfcRIgepmH5RfClqnz878RKEL3gaCkHXd8ZgNNb0FI-lIay&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=RFELDrH4TM5qyFSCPqu_tQ&oh=00_AfkemIKkMIf_F_u-KawwTaSKARQlqzOVZxwoD5AbxiSgYg&oe=69349113",
  },
  {
    title: "Ring Ceremony",
    description: "Celebrate your love with our elegant and personalized ring ceremonies.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/163446762_737913656868763_3641827570653057341_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=haPQcf4NDm4Q7kNvwFz_pHs&_nc_oc=AdkCnsXjwkuLw_bdotPtzi6X1u7Ys8Nx2ACZqZ4aUUEwW4p6c7RYVlsnyNbTG9s1fEdLZO4hrXbTjxqxv5fIC6e-&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=0c8W4Fqt6Att7iXUE1GYtA&oh=00_AfldXrIowd3UtcakRsJfkaqhMaMwk9aFqGdiJYAw0IeccA&oe=695640F6", // replace with your preferred image
  },
  {
    title: "God Bharayi",
    description: "Organize this auspicious ceremony with our expert arrangements and care.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t1.6435-9/35123443_184959945497473_6308247282017894400_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kBae7EGyLVEQ7kNvwGNQ2yg&_nc_oc=Adk3Ho9kMo14gFXk9ofzRk0ZKTzE08BoJi4fZJ7vIzlGBB3BZ8Kf0OpvP6vYCll_P_pfyj4Re39HmO5X8foXi8n0&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=4yLbGPJ3Qgfp7Z0yB93MHg&oh=00_AfkHJMEmWiOoqcXyqgQwiFA6wvT4L5DfABZdF6yE4BLDjw&oe=69562A1B", 
  },
  {
    title: "Anniversary Celebrations",
    description: "Mark your milestones with memorable anniversary parties tailored to your style.",
    image: "https://scontent.fbom46-1.fna.fbcdn.net/v/t39.30808-6/469308900_1508334656493322_3833425772138846564_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZoPAcmXgWMIQ7kNvwHhI5Cv&_nc_oc=Adno0z3TZiUWJBiTDOx_dlrXUc9Jsew92DXo-OmGifNlnx2-WLlxg-UQA6m-58zaH076NGnHZBmO0evtUFhNoq1s&_nc_zt=23&_nc_ht=scontent.fbom46-1.fna&_nc_gid=W1Q8GlXWYABR203mmQPQng&oh=00_AfkZ7eYs_Q9m6kzDghBUepktpLCZY6Evx_oVKBmsXQZ8zw&oe=69347D24", // replace with preferred image
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
