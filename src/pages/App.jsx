import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">🎙️ EchoMedia.ai</Link>
        <div className="space-x-6">
          <Link to="/about" className="text-gray-700 hover:text-blue-900">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-900">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
