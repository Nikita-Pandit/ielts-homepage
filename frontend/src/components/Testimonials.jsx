
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // trigger animation on load
  }, []);

  const testimonials = [
    {
      name: "Alice",
      text: "The mock tests and AI feedback improved my score tremendously!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Bob",
      text: "Speaking practice sessions helped me gain confidence.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Clara",
      text: "The AI band score feature gave me valuable feedback for improvement.",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">
          Student Testimonials
        </h2>
        <p className="text-gray-600 text-lg">
          Hear from students who boosted their IELTS scores using our platform.
        </p>
      </div>

      <div
        className={`max-w-7xl mx-auto px-6  cursor-pointer grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        {testimonials.map((testi, idx) => (
          <TestimonialCard key={idx} {...testi} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

