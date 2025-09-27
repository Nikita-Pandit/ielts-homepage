



import { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setAnimate(true); // triggers initial entry animation
  }, []);

  const handleClick = () => {
    setClicked(true);
    // Reset animation after it finishes
    setTimeout(() => setClicked(false), 600); // 600ms animation duration
  };

  return (
    <section className="pt-28 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-6">
            Achieve Your Dream IELTS Score
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            AI-driven practice, mock tests, and speaking sessions to boost your band score.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Image with animation */}
        <div
          onClick={handleClick}
          className={`flex-1 overflow-hidden rounded-xl shadow-2xl cursor-pointer transform transition-transform duration-700 ${
            animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } ${
            clicked
              ? "scale-110 rotate-3 shadow-4xl"
              : "scale-100 rotate-0 shadow-2xl"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="IELTS"
            className="w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
