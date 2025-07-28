export default function Services() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">✨ Our AI Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📝 Transcription</h3>
          <p className="text-gray-600">Convert speech to text quickly and accurately using AI models.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🎧 Audio Enhancement</h3>
          <p className="text-gray-600">Improve audio quality with noise reduction and equalization.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🧠 Content Creation</h3>
          <p className="text-gray-600">Generate engaging content using generative AI and voice synthesis.</p>
        </div>
      </div>
    </section>
  );
}
