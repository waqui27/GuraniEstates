import Button from "../components/Button";
import {
  Building,
  Search,
  Users,
  Palette,
  CheckCircle,
  Eye,
  UserCheck,
  Home,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Newspaper, // For Advertising
  DollarSign, // For Rent Rates
  ClipboardCheck, // For Tenant Placement
  Camera, // For Property Inspection
  Wrench, // For Vendor Coordination
  Truck, // For Move-ins/Move-outs
  Receipt, // For Timely Payments
  ClipboardList, // For Regular Inspections
  FileText, // For Lease Renewals
  AlertTriangle, // For Urgent Issues
  RefreshCcw, // For Reducing Vacancy
  Video, // For Work Progress Documentation
  Wallet, // For Transparent Expense Reporting
} from "lucide-react";
import "../App.css";

// Import service-related images

const Services = () => {
  return (
    <div className="min-h-screen bg-white z-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Property Management Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Gurani Estates, Bengaluru
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From advertising to transparent expense reporting, we handle every
              aspect of property management.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mb-20">
            {/* Service 1: Advertising the property */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Newspaper className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Property Advertising
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Advertising the property on local and digital platforms to
                    attract tenants.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: Assessing the market */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Competitive Rent Rates
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Assessing the market to set competitive rent rates for the
                    property.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Finding suitable tenants */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Tenant Placement & Agreements
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Finding the suitable tenants, drafting Rental/lease
                    agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4: Conducting a thorough inspection */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Property Inspection & Repairs
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Conducting a thorough inspection with photos/videos to
                    assess the flat's condition, list necessary repairs, and
                    provide cost and timeline estimates for completing the work.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 5: Vendor coordination */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-8 w-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Vendor Coordination
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Engaging local contractors and service providers for
                    repairs, Painting, Deep cleaning etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 6: Coordinating tenant move-ins and move-outs */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Tenant Move-in/Move-out
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Coordinating tenant move-ins and move-outs, including
                    inventory checks and deposit settlements.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 7: Ensuring timely payments */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Receipt className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Timely Rent Payments
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Ensuring timely payments and addressing delays or disputes.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 8: Regular inspections, repairs, and upkeep */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Property Upkeep
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Regular inspections, repairs, and upkeep to maintain the
                    property's condition.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 9: Renewing, terminating, and negotiating lease terms */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Lease Management
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Renewing, terminating, and negotiating lease terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 10: Addressing urgent issues */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Urgent Issue Resolution
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Addressing urgent issues like plumbing, electrical, or other
                    maintenance problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 11: Reducing vacancy periods */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <RefreshCcw className="h-8 w-8 text-lime-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Vacancy Reduction
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Reducing vacancy periods by ensuring quick tenant turnovers.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 12: Work Progress Documentation */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Video className="h-8 w-8 text-violet-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Work Progress Documentation
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Providing regular videos and photos of repairs, maintenance
                    etc to keep property owners updated on work progress and
                    quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 13: Transparent Expense Reporting */}
            <div className="lg:col-span-2 md:col-span-2 flex justify-center">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wallet className="h-8 w-8 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Transparent Expense Reporting
                    </h3>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      Sharing bills, receipts, and payment screenshots for
                      repairs, maintenance, and other property-related expenses
                      to ensure transparency and accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Gurani Estates
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the difference with our comprehensive approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Trusted Expertise
              </h3>
              <p className="text-gray-600">
                Established in 2015, with a deep understanding of the Bengaluru
                market.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                Offering customized solutions for buying, selling, renting, and
                property management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Exceptional Service
              </h3>
              <p className="text-gray-600">
                Committed to delivering professionalism and reliable guidance
                for all transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real feedback from satisfied property owners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Gurani Estates has been exceptional. They handle everything
                professionally and keep me informed every step of the way."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">David</p>
                  <p className="text-sm text-gray-500">Property Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The tenant placement service was outstanding. They found
                quality tenants quickly and handled all the paperwork
                seamlessly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Sarah</p>
                  <p className="text-sm text-gray-500">Real Estate Investor</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Their property management transformed my rental property. The
                space looks amazing and attracts high-quality tenants."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Vijay</p>
                  <p className="text-sm text-gray-500">Property Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started with Gurani Estates?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you manage your property with ease and
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
              Contact Us Today
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all"
            >
              Know About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
