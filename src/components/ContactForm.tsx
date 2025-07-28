
export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input name="name" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Your message..." className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}
