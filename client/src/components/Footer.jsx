import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto text-white flex items-center justify-center sticky bottom-0 z-<-1> bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                Gurani
              </span>
              <span className="text-2xl md:text-3xl font-bold">Estates</span>
            </div>
            <p className="text-sm md:text-base text-gray-400 mb-6">
              Redefining modern living through exceptional apartment and
              property solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apartment Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Property Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400 text-sm md:text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">@</span>
                <span>info@guraniestates.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-sm mt-1">📍</span>
                <span>
                  123 Modern Street
                  <br />
                  Bangalore, India 110010
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>
            &copy; {new Date().getFullYear()} Gurani Estates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
