import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { 
    question: "How much does event management cost in India?", 
    answer: "Our pricing varies depending on the type, scale, and customization of your event. We offer flexible packages tailored to fit every budget across India." 
  },
  { 
    question: "What Event Management Services do you provide?", 
    answer: "We offer complete event solutions including planning, décor, entertainment, catering, photography, logistics, and on-site coordination for weddings, corporate events, and private parties across India." 
  },
  { 
    question: "Why should we hire an event planner?", 
    answer: "Hiring a professional event planner ensures stress-free execution, creative ideas, reliable vendor management, and smooth coordination throughout your event." 
  },
  { 
    question: "Do you organize events on a budget?", 
    answer: "Absolutely! We specialize in creating impressive events within your budget without compromising on quality or experience." 
  },
  { 
    question: "Who manages this Event Management Company?", 
    answer: "Our company is run by a passionate team of experienced professionals dedicated to planning innovative and unforgettable events." 
  },
  { 
    question: "How much does a destination wedding cost in India?", 
    answer: "The cost depends on factors like guest count, venue, and customization level. We offer tailor-made destination wedding packages suitable for various budgets and locations across India." 
  },
  { 
    question: "What makes your event management services stand out?", 
    answer: "Our creative approach, attention to detail, and commitment to client satisfaction make us one of the most trusted event planners in India." 
  },
  { 
    question: "Why is entertainment important at events? Do you provide entertainment services?", 
    answer: "Entertainment adds energy and creates lasting memories. We offer DJs, live bands, celebrity artists, and interactive performers to make your celebration unforgettable." 
  },
  { 
    question: "Can you handle last-minute events?", 
    answer: "Yes! Our expert team is equipped to organize well-coordinated, high-quality events efficiently, even on short notice." 
  },
  { 
    question: "Do you provide themed or destination events?", 
    answer: "Of course! We specialize in unique themes, destination weddings, and customized event experiences across India and abroad." 
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
