import { motion } from "framer-motion";
import bg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-[#2e6bb1] to-[#F2BE5C] text-transparent bg-clip-text">
          Lets Imagine{" "}
        </span>
        Bigger & Better
      </h1>
      <div className="flex justify-center my-10">
        <button class="group relative bg-[#1b4c85] h-16 w-64 border-2 border-[#F2BE5C] text-[#D9D9D9] text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-[#D9D9D9] hover:text-[#f0be60] p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
          Discover More
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
