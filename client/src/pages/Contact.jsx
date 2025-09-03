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
} from "lucide-react";
import "../App.css";
import Map from "../components/Map";

const Contact = () => {
  // Faq handler
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What are your office hours?",
      answer: "We're open 9:00 AM - 7:00 PM all day.",
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
      <section className="relative py-10 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
            <div className="bg-white p-2 md:p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-2 mb-6">
                <Phone className="h-6 w-6 md:h-8 md:w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Phone</h3>
              <p className="text-gray-600 mb-2">Main Office</p>
              <p className="text-gray-800 font-semibold text-sm">
                +91 9901305115 <br />
                +91 7760396892
              </p>
            </div>

            <div className="bg-white p-2 md:p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-2 mb-6">
                <Mail className="h-6 w-6 md:h-8 md:w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                info@guraniestates.com
              </p>
              {/* <p className="text-gray-600 mt-2">Sales</p>
              <p className="text-gray-800 font-semibold">sales@guraniestates.com</p> */}
            </div>

            <div className="bg-white p-2 md:p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-2 mb-6">
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
              <p className="text-gray-600 mb-2">Main Office</p>
              <p className="text-gray-800 font-semibold text-sm">
                Platinum lifestyle Apartment,
              </p>
              <p className="text-gray-800 font-semibold text-sm">
                80 ft Road, JP Nagar 8th Phase,
              </p>
              <p className="text-gray-800 font-semibold text-sm ">
                Bengaluru - 560083
              </p>
            </div>

            <div className="bg-white p-2 md:p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-2 mb-6">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-gray-800 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Sunday</p>

              <p className="text-gray-800 font-semibold text-sm">
                We're open 9:00 AM - 7:00 PM all day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <Map />

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
