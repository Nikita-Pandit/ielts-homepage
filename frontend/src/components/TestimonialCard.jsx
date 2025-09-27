

const TestimonialCard = ({ name, text, image }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-600 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-indigo-500"
      />
      <p className="text-gray-700 italic mb-4">"{text}"</p>
      <h4 className="font-bold text-indigo-700 text-lg">{name}</h4>
    </div>
  );
};

export default TestimonialCard;

