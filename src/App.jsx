import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Service from "./components/service";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Blog from "./components/blog";
import Aboutus from "./components/Aboutus";
import Client from "./components/Client";
import Form from "./components/Form";
import LoadingText from "./components/Loading.jsx";
import { FaWhatsapp } from "react-icons/fa"; // <- Import ikon WhatsApp

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 5 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <LoadingText />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <Aboutus />
        <Service />
        <Portfolio />
        <Blog />
        <Client />
        <Form />
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </>
  );
};

export default App;
