import Button from "../components/Button";
import {
  Play,
  Circle,
  Layers,
  LayoutGrid,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Clock,
  ChevronDown,
  ChevronUp,
  MapPin,
  Navigation,
  Eye,
} from "lucide-react";
import { useState } from "react";

import ContactForm from "../components/ContactForm";

import { Parallax } from "react-parallax";
import "../App.css";
// Import images
import homepic from "../assets/home.jpeg";
import "../assets/home-mobile.jpeg";
import buildings from "../assets/buildings.png";
import building from "../assets/building.jpeg";

const HomePage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showMapOptions, setShowMapOptions] = useState(false);
  const [currentMapType, setCurrentMapType] = useState("roadmap");

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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

  return (
    <div className="min-h-screen bg-white z-10">
      {/* Hero Section */}
      <section className="relative h-[270px] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-[270px] md:h-full">
            <Parallax
              className="absolute h-full object-contain"
              bgImage={homepic}
              strength={300}
            >
              <div
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Your content */}
              </div>
            </Parallax>
            <div className="absolute inset-0 bg-black/20 md:bg-black/30"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-[0px] md:text-7xl font-bold mb-6 leading-tight">
            GURANI ESTATES
            <br />
            <span className="text-lg md:text-5xl font-bold md:font-light italic ml-4">
              Your Trusted Partner in Real Estate Journey
            </span>
            <br />
            <span className="text-sm md:text-2xl font-medium">
              Buy, Sell, Rent, Manage{" "}
            </span>
          </h1>

          {/* Video Play Button */}
          <div className="flex justify-center mb-8">
            <button className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300">
              <Play className="h-5 w-5 text-white fill-white" />
              <span className="text-white text-sm md:text-lg font-medium">
                Explore Gurani Estates
              </span>
              <span className="text-white/80 text-[0px] md:text-sm">
                View Video
              </span>
            </button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="hidden md:flex md:absolute md:bottom-20 md:left-0 md:right-0 z-10">
          <div className="md:container md:mx-auto md:px-6 md:my-10">
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-white/90 font-bold text-lg">PROPERTY</div>
              <div className="text-white/90 font-bold text-lg">CONSULTING</div>
              <div className="text-white/90 font-bold text-lg">SOLUTIONS</div>
              <div className="text-white/90 font-bold text-lg">INVESTMENTS</div>
              <div className="text-white/90 font-bold text-lg">MANAGEMENT</div>
              <div className="text-white/90 font-bold text-lg">REALTY</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white">
        <div className="flex flex-col md:flex-row md:space-between">
          <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 px-10 md:px-20 md:mr-10 pt-20 pb-10">
            <h2 className="self-start text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Redefining Bangalore Property Management.
            </h2>
            <p className="text-justify text-gray-600 text-[16px] md:text-lg mb-8 leading-relaxed">
              Gurani Estates is the premier choice for discerning property
              owners in Bangalore. We provide a seamless, professional
              management experience through a dedicated single point of contact.
              Our holistic service covers every detail, from securing qualified
              tenants and managing ongoing maintenance to ensuring compliant
              tenant exits. Our commitment is to safeguard your investment,
              enhance its value, and deliver a superior return, all while
              granting you complete peace of mind.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  9+
                </div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Tailored
                </div>
                <div className="text-gray-600">Solutions</div>
              </div>
            </div>
            <Button>Learn More</Button>
          </div>

          <div className="ml-[-80px] md:ml-2 md:w-1/2">
            <Parallax
              className="h-full w-full"
              bgImage={building}
              strength={150}
            >
              <div
                style={{
                  height: "400px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Your content */}
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Features Section - Styled based on attachment */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Providing comprehensive real estate solutions for buying, selling,
              renting, and management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
            {/* Service 1: Buying */}
            <div className="text-center p-4 md:p-8 rounded-2xl border-2 border-white cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Circle className="h-10 w-10 md:h-16 md:w-16 text-primary" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">
                Explore Our Services
              </p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Buying Properties
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Expert guidance for finding and acquiring your ideal property
                with ease.
              </p>
            </div>

            {/* Service 2: Selling */}
            <div className="text-center p-4 md:p-8 rounded-2xl border-2 border-white cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <LayoutGrid className="h-10 w-10 md:h-16 md:w-16 text-primary" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">
                Explore Our Services
              </p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Selling Properties
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Maximize your property's value with our strategic selling
                approaches.
              </p>
            </div>

            {/* Service 3: Renting */}
            <div className="text-center p-4 md:p-8 rounded-2xl border-2 border-white cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-10 w-10 md:h-16 md:w-16 text-primary" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">
                Explore Our Services
              </p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Renting Solutions
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Seamless rental experiences for both tenants and property
                owners.
              </p>
            </div>

            {/* Service 4: Property Management */}
            <div className="text-center p-4 md:p-8 rounded-2xl border-2 border-white cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layers className="h-10 w-10 md:h-16 md:w-16 text-primary" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">
                Explore Our Services
              </p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Property Management
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Hassle-free management to protect and enhance your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits to Property Owner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Unlock the Full Potential of Your{" "}
              <span className="text-primary">Investment</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover how Gurani Estates empowers property owners with
              unparalleled advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <ShieldCheck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Maximized Returns
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Achieve optimal rental income and property value growth through
                our expert strategies.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Reduced Vacancy
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Minimize empty periods with efficient tenant placement and
                proactive marketing.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <Handshake className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Hassle-Free Management
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Enjoy peace of mind as we handle all aspects of property
                management, from tenants to maintenance.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Timely Reporting
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Stay informed with regular, transparent financial statements and
                property updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Service Process
            </h2>
            <p className="text-gray-600 text-lg">
              Simple steps to get started with our services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Initial Consultation
              </h3>
              <p className="text-gray-600">
                We discuss your needs and property requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Property Assessment
              </h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your property
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Service Implementation
              </h3>
              <p className="text-gray-600">
                Execute tailored solutions for your property
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Continuous monitoring and support services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End To End Property Management Services Section */}
      <section className="py-20 bg-white w-screen">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Property{" "}
              <span className="text-primary">Management Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience peace of mind with our end-to-end property management
              services.
            </p>
          </div>

          <div className="w-screen flex flex-col md:flex-row md:pl-4 md:justify-between">
            <div className="space-y-6 md:space-y-8 md:w-1/2 px-10 py-[1px] md:pl-20">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  Strategic
                  <span className="text-primary"> Tenant Placement</span>
                </h3>
                <p className="text-justify text-gray-600 text-sm md:text-base">
                  We meticulously market your property, conduct thorough tenant
                  verification, and facilitate placement upon your final
                  approval.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  Transparent
                  <span className="text-primary"> Financial Management</span>
                </h3>
                <p className="text-justify text-gray-600 text-sm md:text-base">
                  From timely rent collection and deposit management to detailed
                  monthly statements and seamless exit settlements, we handle
                  all financial aspects with complete transparency.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  Proactive
                  <span className="text-primary"> Property Care</span>
                </h3>
                <p className="text-justify text-gray-600 text-sm md:text-base">
                  Our team conducts thorough inspections with photo/video
                  documentation, identifies necessary repairs, and provides cost
                  and timeline estimates. We also coordinate with trusted local
                  vendors for maintenance, painting, and deep cleaning.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  Seamless
                  <span className="text-primary"> Tenant Relations</span>
                </h3>
                <p className="text-justify text-gray-600 text-sm md:text-base">
                  We manage all tenant move-ins and move-outs, including
                  inventory checks and deposit settlements. Our services extend
                  to lease renewals, terminations, negotiations, and prompt
                  resolution of urgent issues like plumbing or electrical
                  problems.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 border-b rounded-lg overflow-hidden">
              <Parallax
                className="w-full h-full"
                bgImage={buildings}
                strength={300}
              >
                <div
                  style={{
                    height: "70vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Your content */}

                  <div
                    style={{
                      position: "relative",
                      width: "200px",
                      height: "200px",
                      bordeRadius: "100%",

                      margin: "50px auto",
                      marginBottom: "-100px",
                    }}
                  >
                    <span className="circles circle1 text-3xl text-primary">
                      G
                    </span>
                    <span className="circles circle2 text-3xl text-primary">
                      u
                    </span>
                    <span className="circles circle3 text-3xl text-primary">
                      r
                    </span>
                    <span className="circles circle4 text-3xl text-primary">
                      a
                    </span>
                    <span className="circles circle5 text-3xl text-primary">
                      n
                    </span>
                    <span className="circles circle6 text-3xl text-primary">
                      i
                    </span>
                    <span className="circles circle7"></span>
                    <span className="circles circle8 text-2xl text-text">
                      E
                    </span>
                    <span className="circles circle9 text-2xl text-text">
                      s
                    </span>
                    <span className="circles circle10 text-2xl text-text">
                      t
                    </span>
                    <span className="circles circle11 text-2xl text-text">
                      a
                    </span>
                    <span className="circles circle12 text-2xl text-text">
                      t
                    </span>
                    <span className="circles circle13 text-2xl text-text">
                      e
                    </span>
                    <span className="circles circle14 text-2xl text-text">
                      s
                    </span>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button>GET A FREE CONSULTATION</Button>
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
      {/* Contact Form Section */}
      <ContactForm />
      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Partner with Gurani Estates?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you discover the perfect property that
            matches your lifestyle and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
              View Our Services
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
