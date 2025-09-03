import Button from "../components/Button";
import { Users, Award, Target, Heart, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white z-10">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            About Gurani Estates
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Your Trusted Partner in Real Estate in Bengaluru
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white">
        <div className="flex flex-col md:flex-row md:space-between">
          <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 px-10 md:px-20 md:mr-10 pt-20 pb-10">
            <h2 className="self-start text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-[16px] md:text-lg mb-6 leading-relaxed">
              Gurani Estates, established in 2015, is a leading real estate
              consultancy based in Bengaluru. Specializing in buying, selling,
              renting, and property management services, the firm offers
              tailored solutions to meet the unique needs of its clients.
            </p>
            <p className="text-gray-600 text-[16px] md:text-lg mb-8 leading-relaxed">
              With a reputation for professionalism and a deep understanding of
              the local market, Gurani Estates is committed to delivering
              exceptional service and reliable guidance for property
              transactions. Based out of Bengaluru South, Gurani Estates
              continues to be a trusted partner for property seekers and
              investors in the city.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  2015
                </div>
                <div className="text-gray-600">Established</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Bengaluru
                </div>
                <div className="text-gray-600">Based</div>
              </div>
            </div>
            <Button onClick={() => navigate("/services")}>Learn More</Button>
          </div>

          <div className="md:px-10 md:flex md:justify-center md:items-center md:px-0 md:w-1/2 mt-10 md:mt-0">
            <div
              className="h-[400px] w-full md:w-4/5 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Guided by our core values and commitment to excellence in real
              estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To provide unparalleled real estate consultancy services,
                ensuring seamless transactions and maximizing client
                satisfaction through expert guidance and tailored solutions.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To be the most trusted and preferred real estate partner in
                Bengaluru, recognized for our integrity, market expertise, and
                commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Gurani Estates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-8 bg-gray-50 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Professionalism
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Upholding the highest standards of conduct and expertise in all
                our dealings.
              </p>
            </div>

            <div className="text-center p-4 md:p-8 bg-gray-50 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Operating with honesty, transparency, and ethical practices to
                build lasting trust.
              </p>
            </div>

            <div className="text-center p-4 md:p-8 bg-gray-50 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Client-Centric
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Prioritizing our clients' needs and delivering personalized
                solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-10 md:py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Achievements that reflect our commitment to excellence in real
              estate
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="bg-gray-700/50 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                2015
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Established
              </div>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                9+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Years Experience
              </div>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Properties Managed
              </div>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              Partner with Gurani Estates Today!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Experience professional real estate services tailored to your
              needs. Contact us for reliable guidance in buying, selling,
              renting, or property management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/services")}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                View Our Services
              </Button>
              <Button
                onClick={() => navigate("/navigate")}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
