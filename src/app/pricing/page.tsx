import React, { useState } from "react";
import { Check, X, Star, Users, Building2, Crown } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: Users,
      description: "Perfect for small businesses getting started with ESS",
      monthlyPrice: 5,
      annualPrice: 4,
      employees: "Up to 50 employees",
      features: [
        "Employee self-service portal",
        "Basic leave management",
        "Payslip access",
        "Profile management",
        "Email support",
        "Mobile responsive",
        "Basic reporting",
      ],
      notIncluded: [
        "Advanced workflows",
        "Custom integrations",
        "Priority support",
        "Advanced analytics",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      icon: Building2,
      description: "Ideal for growing companies with advanced HR needs",
      monthlyPrice: 12,
      annualPrice: 10,
      employees: "Up to 500 employees",
      features: [
        "Everything in Starter",
        "Advanced leave workflows",
        "Time tracking & timesheets",
        "Document management",
        "Benefits enrollment",
        "Custom approval chains",
        "Advanced reporting",
        "API access",
        "Priority email support",
        "Single sign-on (SSO)",
      ],
      notIncluded: [
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "Complete solution for large organizations",
      monthlyPrice: 25,
      annualPrice: 20,
      employees: "Unlimited employees",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "White-label options",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Phone & priority support",
        "Custom training sessions",
        "SLA guarantee",
        "Advanced security features",
        "Multi-location support",
        "Custom workflows",
        "Audit trails",
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="mb-6 font-bold text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mb-8 text-blue-100 text-xl leading-relaxed">
            Choose the perfect plan for your organization. All plans include a
            30-day free trial and can be upgraded or downgraded at any time.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-8">
            <span
              className={`mr-3 ${!isAnnual ? "text-white" : "text-blue-200"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="inline-flex relative items-center bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 w-11 h-6 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`ml-3 ${isAnnual ? "text-white" : "text-blue-200"}`}
            >
              Annual
              <span className="bg-green-500 ml-1 px-2 py-1 rounded-full text-white text-sm">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                    plan.popular ? "ring-2 ring-blue-600 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="top-0 right-0 left-0 absolute bg-blue-600 py-2 font-semibold text-white text-sm text-center">
                      <Star className="inline mr-1 w-4 h-4" />
                      Most Popular
                    </div>
                  )}

                  <div className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          plan.popular ? "bg-blue-100" : "bg-gray-100"
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${
                            plan.popular ? "text-blue-600" : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-2xl">
                          {plan.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {plan.employees}
                        </p>
                      </div>
                    </div>

                    <p className="mb-6 text-gray-600">{plan.description}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="font-bold text-gray-900 text-5xl">
                          ${price}
                        </span>
                        <span className="ml-2 text-gray-600">
                          /employee/{isAnnual ? "month" : "month"}
                        </span>
                      </div>
                      {isAnnual && (
                        <p className="mt-1 text-green-600 text-sm">
                          Billed annually (${price * 12}/employee/year)
                        </p>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all ${
                        plan.popular
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {plan.cta}
                    </Link>

                    <div className="mt-8">
                      <h4 className="mb-4 font-semibold text-gray-900">
                        {` What's included:`}
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="flex-shrink-0 mt-0.5 mr-3 w-5 h-5 text-green-500" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start opacity-50"
                          >
                            <X className="flex-shrink-0 mt-0.5 mr-3 w-5 h-5 text-gray-400" />
                            <span className="text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-gray-900 text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-xl">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes! All plans come with a 30-day free trial. No credit card
                required to get started.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                Can I change plans anytime?
              </h3>
              <p className="text-gray-600">
                {`Absolutely. You can upgrade or downgrade your plan at any time.
                Changes take effect immediately, and we'll prorate any billing`}
                adjustments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                What happens if I exceed my employee limit?
              </h3>
              <p className="text-gray-600">
                {`
                We'll automatically suggest upgrading to the next tier. You
                won't be charged extra without your approval, and we'll help you
                find the best plan for your needs.`}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                Do you offer custom enterprise solutions?
              </h3>
              <p className="text-gray-600">
                Yes! Our Enterprise plan can be customized for large
                organizations with specific requirements. Contact our sales team
                to discuss your needs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Security is our top priority. We use enterprise-grade
                encryption, regular security audits, and comply with industry
                standards including SOC 2 and GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-white text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-blue-100 text-xl leading-relaxed">
            Join thousands of companies that trust Easy ESS for their employee
            self-service needs.
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
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
