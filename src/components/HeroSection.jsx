const HeroSection = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Welcome to
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Imaginesee
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Digitally transforming your vision into impactful, design-driven
        solutions that empower your brand to connect and inspire.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Discover More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
