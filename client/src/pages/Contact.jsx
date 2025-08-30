import { useState } from "react";

import ContactForm from "../components/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Navigation,
  Eye,
} from "lucide-react";
import "../App.css";

const Contact = () => {
  // Faq handler
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What are your office hours?",
      answer:
        "We're open Monday-Friday 9:00 AM - 6:00 PM, and Saturday 10:00 AM - 4:00 PM. We're closed on Sundays and major holidays.",
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our main office line.",
    },
    {
      question: "Do you offer virtual property tours?",
      answer:
        "Yes! We offer virtual tours for all our properties. Contact us to schedule a virtual viewing at your convenience.",
    },
    {
      question: "What documents do I need for rental applications?",
      answer:
        "Typically, you'll need proof of income, ID, references, and a completed application. Our team will provide a detailed checklist when you're ready to apply.",
    },
  ];

  // map handler
  const [showMapOptions, setShowMapOptions] = useState(false);
  const [currentMapType, setCurrentMapType] = useState("roadmap");

  const mapTypes = [
    {
      id: "roadmap",
      name: "Roadmap",
      url: "https://maps.google.com/maps?q=12.949869990873,77.70091731482089&z=15&output=embed",
    },
    {
      id: "satellite",
      name: "Satellite",
      url: "https://maps.google.com/maps?q=12.949869990873,77.70091731482089&z=15&t=k&output=embed",
    },
    {
      id: "terrain",
      name: "Terrain",
      url: "https://maps.google.com/maps?q=12.949869990873,77.70091731482089&z=15&t=p&output=embed",
    },
    {
      id: "hybrid",
      name: "Hybrid",
      url: "https://maps.google.com/maps?q=12.949869990873,77.70091731482089&z=15&t=h&output=embed",
    },
  ];

  const handleMapTypeChange = (mapType) => {
    setCurrentMapType(mapType.id);
    setShowMapOptions(false);
  };

  return (
    <div className="min-h-screen bg-white z-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Get in touch with our team. We're here to help you find your
              perfect home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you. Choose the best way to reach us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Phone</h3>
              <p className="text-gray-600 mb-2">Main Office</p>
              <p className="text-gray-800 font-semibold">+1 (555) 123-4567</p>
              <p className="text-gray-600 mt-2">Sales Hotline</p>
              <p className="text-gray-800 font-semibold">+1 (555) 123-4568</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <p className="text-gray-800 font-semibold">
                info@guraniestates.com
              </p>
              {/* <p className="text-gray-600 mt-2">Sales</p>
              <p className="text-gray-800 font-semibold">sales@guraniestates.com</p> */}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
              <p className="text-gray-600 mb-2">Main Office</p>
              <p className="text-gray-800 font-semibold">123 Modern Street</p>
              <p className="text-gray-800 font-semibold">Bangalore, India</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday</p>
              <p className="text-gray-800 font-semibold">9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mt-2">Saturday</p>
              <p className="text-gray-800 font-semibold">10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 text-lg">
              Come see us in person at our modern downtown office
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="w-[100%]  relative">
              <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                {/* Map Background - Google Maps Embed */}
                <iframe
                  src={mapTypes.find((type) => type.id === currentMapType)?.url}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full map-iframe"
                ></iframe>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/Kempegowda+International+Airport+Bengaluru/@12.949869990873,77.70091731482089,15z",
                        "_blank"
                      )
                    }
                    className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    title="View in Google Maps"
                  >
                    <Eye className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => {
                      // Check if device is mobile
                      const isMobile =
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        );

                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                          (position) => {
                            const { latitude, longitude } = position.coords;

                            if (isMobile) {
                              // For mobile devices, use different URL formats
                              const isIOS = /iPad|iPhone|iPod/.test(
                                navigator.userAgent
                              );

                              if (isIOS) {
                                // iOS - try Apple Maps first, fallback to Google Maps
                                window.open(
                                  `maps://maps.apple.com/?daddr=12.949869990873,77.70091731482089&saddr=${latitude},${longitude}`,
                                  "_blank"
                                );
                                // Fallback to Google Maps after a short delay
                                setTimeout(() => {
                                  window.open(
                                    `https://maps.google.com/maps?saddr=${latitude},${longitude}&daddr=12.949869990873,77.70091731482089&dirflg=d`,
                                    "_blank"
                                  );
                                }, 1000);
                              } else {
                                // Android - use Google Maps intent or web fallback
                                const googleMapsApp = `google.navigation:q=12.949869990873,77.70091731482089&mode=d`;
                                const googleMapsWeb = `https://maps.google.com/maps?saddr=${latitude},${longitude}&daddr=12.949869990873,77.70091731482089&dirflg=d`;

                                // Try to open in Google Maps app
                                window.location.href = googleMapsApp;

                                // Fallback to web version
                                setTimeout(() => {
                                  window.open(googleMapsWeb, "_blank");
                                }, 1500);
                              }
                            } else {
                              // Desktop - use standard Google Maps web
                              window.open(
                                `https://www.google.com/maps/dir/${latitude},${longitude}/12.949869990873,77.70091731482089`,
                                "_blank"
                              );
                            }
                          },
                          () => {
                            // If location access fails, open directions without current location
                            const destination =
                              "12.949869990873,77.70091731482089";

                            if (isMobile) {
                              const isIOS = /iPad|iPhone|iPod/.test(
                                navigator.userAgent
                              );

                              if (isIOS) {
                                window.open(
                                  `maps://maps.apple.com/?daddr=${destination}`,
                                  "_blank"
                                );
                                setTimeout(() => {
                                  window.open(
                                    `https://maps.google.com/maps?daddr=${destination}`,
                                    "_blank"
                                  );
                                }, 1000);
                              } else {
                                window.location.href = `google.navigation:q=${destination}`;
                                setTimeout(() => {
                                  window.open(
                                    `https://maps.google.com/maps?daddr=${destination}`,
                                    "_blank"
                                  );
                                }, 1500);
                              }
                            } else {
                              window.open(
                                `https://www.google.com/maps/dir//${destination}`,
                                "_blank"
                              );
                            }
                          },
                          {
                            enableHighAccuracy: true,
                            timeout: 10000,
                            maximumAge: 300000,
                          }
                        );
                      } else {
                        // Geolocation not supported - open directions without current location
                        const destination = "12.949869990873,77.70091731482089";
                        window.open(
                          `https://www.google.com/maps/dir//${destination}`,
                          "_blank"
                        );
                      }
                    }}
                    className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    title="Get Directions"
                  >
                    <Navigation className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {/* View Options Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setShowMapOptions(!showMapOptions)}
                      className="bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-600 text-sm font-medium flex items-center gap-1"
                    >
                      View
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          showMapOptions ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {showMapOptions && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[120px]">
                        {mapTypes.map((mapType) => (
                          <button
                            key={mapType.id}
                            onClick={() => handleMapTypeChange(mapType)}
                            className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                              currentMapType === mapType.id
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-gray-600"
                            }`}
                          >
                            {mapType.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                          (position) => {
                            const { latitude, longitude } = position.coords;

                            // Update the embedded map to show the user's location
                            const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;

                            const iframe =
                              document.querySelector(".map-iframe");
                            if (iframe) {
                              iframe.src = embedUrl;
                            }
                          },
                          () => {
                            alert(
                              "Unable to retrieve your location. Please enable location services."
                            );
                          }
                        );
                      } else {
                        alert("Geolocation is not supported by this browser");
                      }
                    }}
                    className="bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-600 text-sm font-medium"
                  >
                    My Location
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-2">By Car</h4>
              <p className="text-gray-600 text-sm">
                Parking available in our building garage. Enter from Modern
                Street.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-2">
                By Public Transit
              </h4>
              <p className="text-gray-600 text-sm">
                2 blocks from Central Station. Take the Red or Blue line to
                Downtown.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-2">By Foot</h4>
              <p className="text-gray-600 text-sm">
                Located in the heart of downtown, easily walkable from most
                hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get answers to common questions about our services and processes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openAccordion === index ? (
                      <ChevronUp className="h-6 w-6 text-primary transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-primary transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openAccordion === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
