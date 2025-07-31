// src/pages/Contact.tsx

function Contact() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-10">Get In Touch</h2>

        <form
          action="https://formspree.io/f/xjkorjwk" // Replace with your Formspree ID
          method="POST"
          className="bg-gray-50 p-8 rounded-xl shadow-sm space-y-6 text-left"
        >
          {/* Honeypot field for bots */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tell us what you need..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-gray-600">
          Or contact us at <br />
          📞 <a href="tel:+6591234567" className="underline">+65 9123 4567</a><br />
          📧 <a href="mailto:hello@ylcleaning.com" className="underline">hello@ylcleaning.com</a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6591234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        💬
      </a>
    </section>
  );
}

export default Contact;
