import logo from "../assets/logo basic2.png";

const Aboutus = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[300px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About Us
        </span>
      </div>
      <div className="flex lg:flex-row flex-col items-center ">
        <img src={logo} alt="logo" />
        <div className="flex flex-col items-center mt-6 ">
          <h1 className="text-xl sm:text-2xl lg:text-2xl tracking-wide">
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
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
