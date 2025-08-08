import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="flex min-h-[70vh] flex-col items-center mt-6 lg:mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-[#2e6bb1] to-[#F2BE5C] text-transparent bg-clip-text">
          Lets Imagine{" "}
        </span>
        Bigger & Better
      </h1>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-[#58A0C8] to-[#34699A] py-3 px-4 mx-3 rounded-md"
        >
          Discover More
        </a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
