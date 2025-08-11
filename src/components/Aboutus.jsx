import { motion } from "framer-motion";
import logo from "../assets/logo putih.png";

const headingText = "We're Here For You!";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Aboutus = () => {
  const letters = headingText.split("");

  return (
    <div
      id="about"
      className="relative mt-20 border-b border-neutral-800 min-h-[500px] px-16"
    >
      <div className="text-center mb-8">
        <span className="bg-neutral-900 text-[#F2BE5C] rounded-full text-lg font-medium px-3 py-2 uppercase">
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
          <h1 className="text-xl sm:text-2xl lg:text-2xl flex flex-wrap justify-center lg:justify-start">
            Looking for an all in one marketing team?{" "}
            <motion.span
              className="text-2xl sm:text-3xl lg:text-3xl bg-gradient-to-r from-[#2e6bb1] to-[#F2BE5C] text-transparent bg-clip-text flex flex-wrap"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={letterVariant}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
            ImagineSee is a creative and digital agency based in Jakarta. We are
            experts in branding, marketing, design, and website development.
            With 3+ years of experience, we’ve worked with clients across
            various industries and regions. Our passion? Making an impact and
            helping businesses grow with today’s tech all through a 360°
            marketing approach.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
