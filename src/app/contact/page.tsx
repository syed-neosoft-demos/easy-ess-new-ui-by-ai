"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  MessageSquare,
  Calendar,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
    requestType: "demo",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <div className="mx-auto px-4 max-w-md text-center">
          <div className="flex justify-center items-center bg-green-100 mx-auto mb-6 rounded-full w-16 h-16">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="mb-4 font-bold text-gray-900 text-3xl">Thank You!</h2>
          <p className="mb-8 text-gray-600">
            We are received your message and will get back to you within 24
            hours. Our team is excited to help you transform your HR operations.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="mb-6 font-bold text-5xl">Get in Touch</h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            Ready to transform your HR operations? We are here to help you get
            started with Easy ESS and answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="bg-white shadow-lg p-8 rounded-xl text-center">
              <div className="flex justify-center items-center bg-blue-100 mx-auto mb-6 rounded-full w-16 h-16">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Schedule a Demo
              </h3>
              <p className="mb-6 text-gray-600">
                See Easy ESS in action with a personalized demo tailored to your
                organization needs.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full text-white transition-colors">
                Book Demo
              </button>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-xl text-center">
              <div className="flex justify-center items-center bg-teal-100 mx-auto mb-6 rounded-full w-16 h-16">
                <MessageSquare className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Start Free Trial
              </h3>
              <p className="mb-6 text-gray-600">
                Try Easy ESS risk-free for 30 days. No credit card required to
                get started.
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg w-full text-white transition-colors">
                Start Trial
              </button>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-xl text-center">
              <div className="flex justify-center items-center bg-blue-100 mx-auto mb-6 rounded-full w-16 h-16">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Talk to Sales
              </h3>
              <p className="mb-6 text-gray-600">
                Discuss custom solutions and enterprise pricing with our sales
                team.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-8 font-bold text-gray-900 text-3xl">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 font-medium text-gray-700 text-sm"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 font-medium text-gray-700 text-sm"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700 text-sm"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>

                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 font-medium text-gray-700 text-sm"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="employees"
                      className="block mb-2 font-medium text-gray-700 text-sm"
                    >
                      Number of Employees
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    >
                      <option value="">Select range</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 font-medium text-gray-700 text-sm"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="requestType"
                    className="block mb-2 font-medium text-gray-700 text-sm"
                  >
                    How can we help? *
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    required
                    value={formData.requestType}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                  >
                    <option value="demo">Schedule a demo</option>
                    <option value="trial">Start free trial</option>
                    <option value="pricing">Discuss pricing</option>
                    <option value="support">Technical support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-gray-700 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your needs..."
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg w-full font-semibold text-white text-lg hover:scale-105 transition-all transform"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-8 font-bold text-gray-900 text-3xl">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 justify-center items-center bg-blue-100 mr-4 rounded-full w-12 h-12">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                      Email Us
                    </h3>
                    <p className="mb-1 text-gray-600">sales@easyess.com</p>
                    <p className="text-gray-600">support@easyess.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex flex-shrink-0 justify-center items-center bg-teal-100 mr-4 rounded-full w-12 h-12">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                      Call Us
                    </h3>
                    <p className="mb-1 text-gray-600">
                      Sales: +1 (555) 123-4567
                    </p>
                    <p className="text-gray-600">Support: +1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex flex-shrink-0 justify-center items-center bg-blue-100 mr-4 rounded-full w-12 h-12">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                      Visit Us
                    </h3>
                    <p className="text-gray-600">
                      123 Business Avenue
                      <br />
                      Suite 100
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex flex-shrink-0 justify-center items-center bg-teal-100 mr-4 rounded-full w-12 h-12">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                      Business Hours
                    </h3>
                    <p className="mb-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                    </p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-blue-50 mt-12 p-6 rounded-lg">
                <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 2 hours during
                  business hours. For urgent matters, please call our support
                  line directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
