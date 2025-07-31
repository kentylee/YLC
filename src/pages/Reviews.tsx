// src/pages/Reviews.tsx

function Reviews() {
  const testimonials = [
    {
      name: 'Amanda L.',
      quote:
        'YL Cleaning is hands-down the most professional service I’ve used. Every detail was perfect and the team was incredibly respectful of my space.',
    },
    {
      name: 'Marcus T.',
      quote:
        'The only cleaning company I trust with my condo. Always on time, always flawless. Highly recommend their premium plan.',
    },
    {
      name: 'Rachel K.',
      quote:
        'Impressed with their post-renovation cleaning — they made it spotless and move-in ready. 10/10 service.',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-12">What Our Clients Say</h2>
        <div className="space-y-10">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-xl shadow-sm text-left hover:shadow-md transition"
            >
              <p className="text-lg italic text-gray-700 mb-4">“{review.quote}”</p>
              <p className="text-sm text-gray-600 font-medium">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
