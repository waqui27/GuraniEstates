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
              <img src={logo} alt="Logo" className="h-16 w-auto" />
              <span className="text-2xl font-bold text-primary">Gurani</span>
              <span className="text-2xl font-bold text-text">Estates</span>
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
      {/* <footer className="mt-auto h-48 bg-accent text-white flex items-center justify-center sticky bottom-0 z-<-1>">
                <p>&copy; 2023 My Application</p>
        </footer> */}
      <Footer />
    </div>
  );
};

export default NavBar;
