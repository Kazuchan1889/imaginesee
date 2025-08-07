import { motion } from "framer-motion";
import logo from "../assets/logo putih.png";

const Aboutus = () => {
  return (
    <div
      id="about"
      className="relative mt-20 border-b border-neutral-800 min-h-[500px] px-16"
    >
      <div className="text-center mb-8">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About Us
        </span>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-12">
        {/* Logo with animation from left */}
        <motion.img
          src={logo}
          alt="logo"
          className="w-[35%]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Text section with animation from right */}
        <motion.div
          className="flex flex-col items-center mt-6 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-2xl">
            Looking for an all-in-one marketing team?{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              We're Here For You!
            </span>
          </h1>
          <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
            ImagineSee is a creative and digital agency based in Jakarta. We are
            experts in branding, marketing, design, and website development.
            With 3+ years of experience, we’ve worked with clients across
            various industries and regions. Our passion? Making an impact and
            helping businesses grow with today’s tech—all through a 360°
            marketing approach.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
