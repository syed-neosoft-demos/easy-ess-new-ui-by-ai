import React from "react";
import {
  Users,
  Clock,
  FileText,
  DollarSign,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 font-bold text-5xl leading-tight">
                Empower Your Employees with
                <span className="text-blue-200"> Easy ESS</span>
              </h1>
              <p className="mb-8 text-blue-100 text-xl leading-relaxed">
                Streamline HR processes and give your employees 24/7 access to
                their information, requests, and benefits through our intuitive
                self-service portal.
              </p>
              <div className="flex sm:flex-row flex-col gap-4">
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold text-blue-600 text-center hover:scale-105 transition-all transform"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-blue-700 px-8 py-3 border border-blue-200 rounded-lg font-semibold text-white text-center transition-all"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white shadow-2xl p-8 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500 transform">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center bg-blue-600 rounded-full w-12 h-12">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">
                        Employee Dashboard
                      </h3>
                      <p className="text-gray-600">
                        Quick access to everything
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                      <span className="text-gray-700">Leave Balance</span>
                      <span className="font-semibold text-green-600">
                        15 days
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                      <span className="text-gray-700">Payslips</span>
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-bold text-blue-600 text-4xl">500K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-teal-600 text-4xl">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-blue-600 text-4xl">40%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-teal-600 text-4xl">1000+</div>
              <div className="text-gray-600">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-gray-900 text-4xl">
              Everything Your Employees Need
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl">
              Comprehensive self-service features that reduce HR workload and
              empower your workforce
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-blue-200 rounded-xl transition-all duration-300">
              <div className="flex justify-center items-center bg-blue-100 mb-6 rounded-full w-16 h-16">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Leave Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Submit leave requests, track approvals, and view remaining
                balances. Automated workflows ensure quick processing.
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-blue-200 rounded-xl transition-all duration-300">
              <div className="flex justify-center items-center bg-teal-100 mb-6 rounded-full w-16 h-16">
                <DollarSign className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Payroll & Benefits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access payslips, tax documents, and benefits information
                securely. Update direct deposit and tax withholdings easily.
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-blue-200 rounded-xl transition-all duration-300">
              <div className="flex justify-center items-center bg-blue-100 mb-6 rounded-full w-16 h-16">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Document Center
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Download important documents, complete forms digitally, and
                maintain a secure personal document library.
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-blue-200 rounded-xl transition-all duration-300">
              <div className="flex justify-center items-center bg-teal-100 mb-6 rounded-full w-16 h-16">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Profile Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Update personal information, emergency contacts, and
                preferences. Keep your data current with easy-to-use forms.
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-blue-200 rounded-xl transition-all duration-300">
              <div className="flex justify-center items-center bg-blue-100 mb-6 rounded-full w-16 h-16">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Time Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Log work hours, submit timesheets, and track overtime.
                Integration with payroll ensures accurate compensation.
              </p>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-blue-200 rounded-xl transition-all duration-300">
              <div className="flex justify-center items-center bg-teal-100 mb-6 rounded-full w-16 h-16">
                <Smartphone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Mobile Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Full functionality on any device. Submit requests, check status,
                and access information on-the-go with our responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-50 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-bold text-gray-900 text-4xl">
                Why Choose Easy ESS?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-4 w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-xl">
                      Reduce HR Workload
                    </h3>
                    <p className="text-gray-600">
                      Automate routine tasks and free up your HR team for
                      strategic initiatives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-4 w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-xl">
                      Improve Employee Satisfaction
                    </h3>
                    <p className="text-gray-600">
                      Give employees control over their information and requests
                      with 24/7 access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-4 w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-xl">
                      Ensure Compliance
                    </h3>
                    <p className="text-gray-600">
                      Built-in workflows and audit trails help maintain
                      regulatory compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-4 w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 text-xl">
                      Secure & Reliable
                    </h3>
                    <p className="text-gray-600">
                      Enterprise-grade security with 99.9% uptime guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl p-8 rounded-2xl">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                  </div>
                  <span className="ml-2 text-gray-600">5.0 out of 5</span>
                </div>
                <blockquote className="text-gray-700 text-lg italic">
                  Easy ESS transformed our HR operations. Our employees love the
                  self-service capabilities, and our HR team can now focus on
                  strategic initiatives instead of processing routine requests.
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">
                    Sarah Johnson
                  </div>
                  <div className="text-gray-600">
                    HR Director, TechCorp Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-white text-4xl">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="mb-8 text-blue-100 text-xl leading-relaxed">
            Join thousands of companies that have streamlined their HR processes
            with Easy ESS. Start your free trial today and see the difference.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-blue-600 text-lg hover:scale-105 transition-all transform"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="hover:bg-blue-700 px-8 py-4 border border-blue-200 rounded-lg font-semibold text-white text-lg transition-all"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
