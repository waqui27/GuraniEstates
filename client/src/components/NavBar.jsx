import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/gurani-logo.jpeg";

import Button from "../components/Button";
import Footer from "./Footer";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              {/* <Building className="h-8 w-8 text-gray-800" /> */}
              <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
              <span className="text-xl md:text-2xl font-bold text-primary">
                Gurani
              </span>
              <span className="text-xl md:text-2xl font-bold text-text">
                Estates
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center text-lg space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text hover:text-secondary"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text hover:text-secondary"
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text hover:text-secondary"
                  }`
                }
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text hover:text-secondary"
                  }`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/listings"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text hover:text-secondary"
                  }`
                }
              >
                Listings
              </NavLink>
            </nav>

            {/* Book Now Button */}

            {/* Mobile Menu Button */}
            <Button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="w-4 h-0.5 bg-accent mb-1"></span>
                <span className="w-4 h-0.5 bg-accent mb-1"></span>
                <span className="w-4 h-0.5 bg-accent"></span>
              </div>
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link
                  to="/"
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>

                <Link
                  to="/services"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/listings"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Listings
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <Outlet />
      <div className="fixed bottom-20 right-2 z-40">
        <a
          href="https://api.whatsapp.com/send?phone=919901305115&text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20real%20estate%20services."
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 258"
          >
            <defs>
              <linearGradient
                id="logosWhatsappIcon0"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#1FAF38" />
                <stop offset="100%" stop-color="#60D669" />
              </linearGradient>
              <linearGradient
                id="logosWhatsappIcon1"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#F9F9F9" />
                <stop offset="100%" stop-color="#FFF" />
              </linearGradient>
            </defs>
            <path
              fill="url(#logosWhatsappIcon0)"
              d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
            />
            <path
              fill="url(#logosWhatsappIcon1)"
              d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
            />
            <path
              fill="#FFF"
              d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
            />
          </svg>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default NavBar;
