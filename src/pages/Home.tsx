
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-purple-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎙️ EchoMedia.ai</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
        </nav>
      </header>

      <section className="text-center py-16 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">AI-powered audio solutions</h2>
        <p className="text-lg mb-6">Transform your audio content with advanced AI technology, tailored to your needs.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded text-lg">Get Started</button>
      </section>

      <section id="services" className="py-12 px-4 max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold mb-2">📝 Transcription</h3>
          <p>Convert speech to text quickly and accurately using AI models.</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold mb-2">🎧 Audio Enhancement</h3>
          <p>Improve audio quality with noise reduction and equalization.</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold mb-2">🧠 Content Creation</h3>
          <p>Generate engaging content using generative AI and voice synthesis.</p>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <ContactForm />
      </section>

      <section className="p-6 bg-white">
        <h2 className="text-xl font-bold mb-2">🔮 Chatbot (Coming Soon)</h2>
        <p>Interactive support powered by Azure Bot Framework and OpenAI GPT will be embedded here.</p>
      </section>

      <footer className="text-center text-sm p-4 bg-purple-800 text-white">
        © 2025 EchoMedia.ai — All rights reserved.
      </footer>
    </main>
  );
}
