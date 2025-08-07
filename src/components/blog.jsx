import React from "react";
import testImage3 from "../assets/testimage3.jpg";

const cardData = [
  {
    frontTitle: "5 Alasan Brand Kamu Wajib Pakai Digital Agency Sekarang Juga",
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
    <div id="blog" className="mt-18">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-12 tracking-wide">
        Blog
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {cardData.map((card, index) => (
          <div key={index} className="relative w-[240px] h-[320px] mx-auto group">
            {/* Glowing Border Effect */}
            <span className="absolute  left-0 w-full h-full scale-[0.95] blur-[25px] bg-gradient-to-br from-[#0F253E] to-[#F2BE5C] rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10" />

            {/* Card Container */}
            <div
              className="w-full h-full rounded-xl p-[5px] bg-gradient-to-br from-[#0F253E] to-[#F2BE5C]"
            >
              <div
                className="w-full h-full rounded-lg relative overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${card.frontImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay layer for front content */}
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-end text-white transition-opacity duration-500 group-hover:opacity-0">
                  <p className="text-lg font-bold">{card.frontTitle}</p>
                  <p className="text-sm">{card.backTitle}</p>
                </div>

                {/* Overlay layer for back content (on hover) */}
                <div className="absolute inset-0 bg-black bg-opacity-90 p-4 flex flex-col justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-lg font-bold mb-2">{card.backTitle}</p>
                  <p className="text-sm">{card.backDesc}</p>
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
