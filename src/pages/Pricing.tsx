// src/pages/Pricing.tsx

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      features: [
        '2-hour residential clean',
        'All supplies included',
        'Standard weekday slot'
      ]
    },
    {
      name: 'Premium',
      price: '$179',
      features: [
        '4-hour deep clean',
        'Window and surface sanitization',
        'Flexible booking slots'
      ]
    },
    {
      name: 'Deluxe',
      price: '$249',
      features: [
        '6-hour full-service clean',
        'Post-renovation cleanup',
        'Upholstery & carpet care'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white text-black">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-md transition"
          >
            <h3 className="text-xl font-serif font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-black mb-4">{plan.price}</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
