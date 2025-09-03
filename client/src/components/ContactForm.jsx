import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { Send, MessageSquare, Phone, MapPin } from "lucide-react";

const API_BASE = import.meta.env.VITE_APP_API_URL || "http://localhost:2002";

const ContactForm = () => {
  // contact form handler
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Basic client-side validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${API_BASE}/api/contact`, formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
      });

      if (res.data?.success) {
        setStatus({
          type: "success",
          message: res.data.message || "Message sent successfully!",
        });
        // Clear form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: res.data?.message || "Failed to send message.",
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      const msg =
        err.response?.data?.message ||
        err.message ||
        "An error occurred while sending the message. Please try again later.";
      setStatus({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {/* status message */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200" // Changed to green for success
                      : "bg-red-100 text-red-800 border border-red-200" // Red for error
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                      placeholder="+91 XXXXXXXXXX"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="rental">Rental Information</option>
                      <option value="purchase">Property Purchase</option>
                      <option value="management">Property Management</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all resize-vertical"
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white rounded hover:bg-primary/90 border-2 border-primary px-8 py-4 rounded-lg flex items-center justify-center space-x-2"
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </div>

            {/* Additional Information */}

            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Choose Us?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-gray-800 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Quick Response
                    </h4>
                    <p className="text-gray-600">
                      We respond to all inquiries within 24 hours, ensuring you
                      get the information you need promptly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-gray-800 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Expert Consultation
                    </h4>
                    <p className="text-gray-600">
                      Our experienced team provides personalized advice to help
                      you make the best property decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gray-800 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Local Expertise
                    </h4>
                    <p className="text-gray-600">
                      Deep knowledge of local markets and neighborhoods to guide
                      your property journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
