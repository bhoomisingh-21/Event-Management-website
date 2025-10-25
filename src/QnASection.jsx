import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { 
    question: "How much does event management cost in Mumbai?", 
    answer: "Our pricing varies depending on the type, scale, and customization of your event. We offer packages tailored to suit every budget." 
  },
  { 
    question: "What Event Management Services do we provide?", 
    answer: "We provide end-to-end services including event planning, decor, entertainment, catering, photography, logistics, and coordination for weddings, corporate events, and parties." 
  },
  { 
    question: "Why Should We Hire an Event Planner?", 
    answer: "Hiring a professional ensures stress-free event execution, creative ideas, timely coordination, and reliable vendor management." 
  },
  { 
    question: "Do You Arrange Events on a Budget?", 
    answer: "Yes! We work creatively within your budget to deliver memorable events without compromising on quality." 
  },
  { 
    question: "Who is the owner of this Event Management Company?", 
    answer: "Our company is managed by a team of experienced professionals passionate about creating innovative and unforgettable events." 
  },
  { 
    question: "How much does a destination wedding cost in Mumbai?", 
    answer: "Costs depend on guest count, location, and customization. We offer packages that start from mid-range and can be tailored to your preferences." 
  },
  { 
    question: "What sets your event management apart?", 
    answer: "Our attention to detail, creativity, personalized approach, and commitment to client satisfaction make us stand out." 
  },
  { 
    question: "Why is entertainment important in weddings? Do you offer entertainment services?", 
    answer: "Entertainment enhances the guest experience and creates lasting memories. We provide DJs, live bands, performers, and interactive activities to make your event lively." 
  },
  { 
    question: "Can you handle last-minute events?", 
    answer: "Yes! Our experienced team can organize high-quality events efficiently, even on tight timelines." 
  },
  { 
    question: "Do you provide themed or destination events?", 
    answer: "Absolutely! We specialize in creative themes, destination weddings, and customized experiences to match your vision." 
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <p className="text-pink-500 font-medium mb-2">
          Do you have any other questions?
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Please check these FAQs.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="cursor-pointer border-b border-gray-200 pb-4 transition-all duration-300 hover:border-pink-400"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-black-500">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <Minus className="text-pink-500 w-5 h-5" />
              ) : (
                <Plus className="text-pink-500 w-5 h-5" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
