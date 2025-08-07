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

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
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
