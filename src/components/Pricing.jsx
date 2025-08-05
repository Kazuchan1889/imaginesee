import React from "react";
import testImage3 from "../assets/testimage3.jpg";

const cardData = [
  {
    frontTitle: "Branding & Graphic Design",
    backTitle: "Visual Identity",
    backDesc:
      "We craft stunning brand identities and eye-catching designs to represent your business professionally.",
    frontImage: testImage3,
  },
  {
    frontTitle: "Event Documentation",
    backTitle: "Capture the Moments",
    backDesc:
      "We provide professional photography and videography to document your important events.",
    frontImage: testImage3,
  },
  {
    frontTitle: "Social Media Management",
    backTitle: "Grow Your Audience",
    backDesc:
      "Let us handle your content, scheduling, and engagement to increase your social media presence.",
    frontImage: testImage3,
  },
  {
    frontTitle: "Website Development",
    backTitle: "Build Online Presence",
    backDesc:
      "We develop responsive, fast, and SEO-friendly websites tailored to your business needs.",
    frontImage: testImage3,
  },
];

const Pricing = () => {
  return (
    <div className="mt-18">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-12 tracking-wide">
        Blog
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative w-[240px] h-[320px] mx-auto group"
          >
            {/* Glow Background */}
            <div className="absolute top-1/2 left-1/2 w-[270px] h-[340px] rounded-[12px] bg-gradient-to-br from-[#e81cff] to-[#40c9ff] transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-[-10] -translate-x-1/2 -translate-y-1/2 group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]" />
            <div className="absolute top-1/2 left-1/2 w-[270px] h-[340px] z-[-1] bg-gradient-to-br from-[#fc00ff] to-[#00dbde] scale-[0.95] blur-[20px] transition-all duration-500 -translate-x-1/2 -translate-y-1/2 group-hover:blur-[30px]" />

            {/* Main Card */}
            <div
              className="w-full h-full bg-black text-white rounded-lg p-3 flex flex-col justify-end gap-3 cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `url(${card.frontImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Front Content */}
              <div className="relative z-10 bg-black bg-opacity-60 p-3 rounded-lg transition-opacity duration-500 group-hover:opacity-0">
                <p className="text-lg font-bold">{card.frontTitle}</p>
                <p className="text-sm">{card.backTitle}</p>
              </div>

              {/* Back Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-black bg-opacity-90 p-4 rounded-xl text-white w-[90%] h-[85%] flex flex-col justify-center">
                  <p className="text-lg font-bold mb-2">{card.backTitle}</p>
                  <p className="text-sm text-left">{card.backDesc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 border border-white text-white bg-black rounded-md hover:bg-white hover:text-black transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Pricing;
