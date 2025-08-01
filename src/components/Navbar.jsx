import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="w-full flex items-center justify-between py-5 px-4 bg-black bg-opacity-95 border-b-2 border-gray-500 backdrop-blur-sm">
        <div className="flex flex-shrink-0 items-center">
          <h2 className="text-white mx-1 text-2xl font-bold">Jayavandhana</h2>
        </div>

        <div className="lg:hidden">
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-white focus:outline-none p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        
        <div className="hidden lg:flex gap-6">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
          <Link to="/projects" className="text-white hover:underline">
            Projects
          </Link>
          <Link to="/education" className="text-white hover:underline">
            Education
          </Link>
          <Link to="/experience" className="text-white hover:underline">
            Experience
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </div>
      </nav>

     
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 border-b border-gray-600">
          <div className="flex flex-col px-4 py-3 gap-2">
            <Link
              to="/"
              className="text-white py-2 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white py-2 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white py-2 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/education"
              className="text-white py-2 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              to="/experience"
              className="text-white py-2 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-white py-2 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
