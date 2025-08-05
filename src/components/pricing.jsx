function Pricing() {
  const plans = [
    {
      name: "Standard",
      price: "$6.99",
      desc: "Perfect for small teams getting started",
      features: [
        "Up to 10 team members",
        "10 GB storage per user",
        "Basic AI assistance",
        "Email support",
        "Standard integrations",
        "Mobile app access",
      ],
    },
    {
      name: "Premium",
      price: "$15.99",
      desc: "Unlock the full power of AI",
      features: [
        "Unlimited team members",
        "100 GB storage per user",
        "Advanced AI features",
        "Priority support",
        "All integrations",
        "Advanced analytics",
        "Custom workflows",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored for large organizations",
      features: [
        "Unlimited everything",
        "Unlimited storage",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Training & onboarding",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Simple, transparent pricing</h2>
        <p className="text-center text-lg mb-12">No hidden fees, no surprises. Pick the plan that's right for your team.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md ${plan.popular ? 'border-2 border-blue-600' : ''}`}>
              {plan.popular && <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Most Popular</span>}
              <h3 className="text-xl font-semibold mt-2 mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold">{plan.price}<span className="text-sm">{plan.name !== "Enterprise" ? " /user/month" : ""}</span></p>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 mb-2">• {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-8">30-day money-back guarantee. No questions asked.</p>
      </div>
    </section>
  );
}

export default Pricing;