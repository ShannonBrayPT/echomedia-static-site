export default function Contact() {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">📬 Contact Us</h2>
      <form className="max-w-xl mx-auto px-6 space-y-6">
        <input className="w-full px-4 py-3 border rounded-md" type="text" placeholder="Your Name" />
        <input className="w-full px-4 py-3 border rounded-md" type="email" placeholder="Your Email" />
        <textarea className="w-full px-4 py-3 border rounded-md" rows={4} placeholder="Your message..." />
        <button className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition">Send</button>
      </form>
    </section>
  );
}
