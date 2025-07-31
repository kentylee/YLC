// src/pages/Services.tsx
import { FaBroom, FaHandsHelping, FaTools } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaBroom className="text-4xl text-charcoal mb-4" />,
      title: 'Residential Cleaning',
      description: 'High-touch, detail-focused cleaning for elegant homes.',
    },
    {
      icon: <FaHandsHelping className="text-4xl text-charcoal mb-4" />,
      title: 'Contracting Support',
      description: 'Trusted partner services for property and facility upkeep.',
    },
    {
      icon: <FaTools className="text-4xl text-charcoal mb-4" />,
      title: 'Post-Renovation Cleanup',
      description: 'Final cleans for pristine, move-in ready finishes.',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-gray-200 bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-serif font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
