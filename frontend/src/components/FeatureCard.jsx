

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl p-8 text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-3xl rounded-full mb-6">
        {icon}
      </div>
      <h3 className="font-bold text-2xl mb-3 text-indigo-700">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
