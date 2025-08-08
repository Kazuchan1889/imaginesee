import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Service from "./components/service";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Blog from "./components/blog";
import Aboutus from "./components/Aboutus";
import Count from "./components/count";
import Client from "./components/Client";
import Form from "./components/Form";
import LoadingText from "./components/Loading.jsx"; // <- Import loading text

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      <div className="max-w-7xl">
        <HeroSection />
        <Aboutus />
        <Count />
        <Service />
        <Portfolio />
        <Blog />
        <Client />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default App;
