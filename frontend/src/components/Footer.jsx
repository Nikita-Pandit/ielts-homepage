
const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Institute Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">IELTS Pro</h2>
          <p className="text-sm text-gray-200">&copy; 2025 IELTS Pro. All rights reserved.</p>
        </div>

        {/* Center: Quick Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row gap-4 text-gray-200 font-medium">
            <li className="hover:text-yellow-300 transition cursor-pointer">Home</li>
            <li className="hover:text-yellow-300 transition cursor-pointer">Features</li>
            <li className="hover:text-yellow-300 transition cursor-pointer">Testimonials</li>
            <li className="hover:text-yellow-300 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="text-gray-200 text-sm text-center md:text-right">
          <p>Contact: info@ieltspro.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
