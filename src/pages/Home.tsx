// src/pages/Home.tsx

function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white text-black min-h-[80vh]">
      {/* Left content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold">
          Discreet. Professional. Trusted.
        </h1>
        <p className="text-lg text-gray-600">
          Premium cleaning and contracting services tailored for those who expect the finest.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Right image placeholder */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
          src="/hero.jpg"
          alt="YL Cleaning team at work"
          className="w-full max-w-md h-64 object-cover rounded-xl shadow"
          />
        </div>
    </section>
  );
}

export default Home;
