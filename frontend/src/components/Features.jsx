
import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { FaMicrophone, FaClipboardList, FaRobot, FaBook } from "react-icons/fa";

const Features = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // delay to trigger animation
  }, []);

  const features = [
    {
      icon: <FaMicrophone />,
      title: "Speaking Practice",
      description: "Interactive speaking sessions to boost your fluency.",
    },
    {
      icon: <FaClipboardList />,
      title: "Mock Tests",
      description: "Simulate real IELTS exams and track your progress.",
    },
    {
      icon: <FaRobot />,
      title: "AI Band Score",
      description: "Get AI-based scoring and personalized feedback.",
    },
    {
      icon: <FaBook />,
      title: "Study Materials",
      description: "Curated IELTS resources and tips for every section.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-lg">
          Our features are designed to help you ace IELTS efficiently and confidently.
        </p>
      </div>

      <div
        className={`max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-opacity duration-1000 cursor-pointer ${
          visible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
