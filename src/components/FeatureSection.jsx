import { useEffect, useState } from "react";
import testImage from "../assets/test.jpg";
import testImage2 from "../assets/testimage2.jpeg";
import testImage3 from "../assets/testimage3.jpg";

// 8 data dengan image depan dan belakang dirotasi dari 3 image yang tersedia
const cardData = [
  {
    frontTitle: "Web Development",
    backTitle: "Build Modern Websites",
    backDesc: "We create responsive, fast, and SEO-friendly websites for your business.",
    frontImage: testImage,
    backImages: [testImage2, testImage3],
  },
  {
    frontTitle: "Mobile Apps",
    backTitle: "iOS & Android",
    backDesc: "Custom mobile applications tailored to meet your goals on all platforms.",
    frontImage: testImage2,
    backImages: [testImage3, testImage],
  },
  {
    frontTitle: "UI/UX Design",
    backTitle: "Design That Works",
    backDesc: "Beautiful and intuitive design that improves user engagement and retention.",
    frontImage: testImage3,
    backImages: [testImage, testImage2],
  },
  {
    frontTitle: "SEO Optimization",
    backTitle: "Be Found Online",
    backDesc: "Increase your visibility and reach the right audience with strategic SEO.",
    frontImage: testImage,
    backImages: [testImage2, testImage3],
  },
  {
    frontTitle: "Cloud Solutions",
    backTitle: "Scale with Cloud",
    backDesc: "Leverage cloud infrastructure for scalability, security, and reliability.",
    frontImage: testImage2,
    backImages: [testImage3, testImage],
  },
  {
    frontTitle: "E-Commerce",
    backTitle: "Sell Online",
    backDesc: "Launch your online store with features like inventory, payments, and shipping.",
    frontImage: testImage3,
    backImages: [testImage, testImage2],
  },
  {
    frontTitle: "Maintenance",
    backTitle: "We Keep You Running",
    backDesc: "Ongoing updates, backups, and monitoring to keep your systems stable.",
    frontImage: testImage,
    backImages: [testImage2, testImage3],
  },
  {
    frontTitle: "Consulting",
    backTitle: "Tech Strategy",
    backDesc: "Guidance on digital strategy, tools, and best practices for your growth.",
    frontImage: testImage2,
    backImages: [testImage3, testImage],
  },
];

const FeatureSection = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          We help you{" "}
          <span className="bg-gradient-to-r from-[#58A0C8] to-[#34699A] text-transparent bg-clip-text">
            grow digitally
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full h-[254px] [perspective:1000px] font-sans group"
          >
            <div className="relative w-full h-full text-center transition-transform duration-[0.8s] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div
                className="absolute w-full h-full flex flex-col justify-center items-center border border-[#34699A] rounded-xl shadow-md text-white [backface-visibility:hidden] bg-cover bg-center overflow-hidden"
                style={{
                  backgroundImage: `url(${card.frontImage})`,
                }}
              >
                <span className="absolute inset-0 bg-black opacity-50 z-0" />
                <div className="z-10 px-4">
                  <p className="text-[1.1rem] font-bold mb-1">
                    {card.frontTitle}
                  </p>
                  <p className="text-sm">Hover Me</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full flex flex-col border border-[#34699A] rounded-xl shadow-md text-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                {/* Animated background images */}
                <div className="relative h-[100px] w-full overflow-hidden">
                  <img
                    src={card.backImages[0]}
                    alt="Back1"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      showFirstImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={card.backImages[1]}
                    alt="Back2"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      showFirstImage ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center h-full px-4 text-left bg-gradient-to-br from-[#58A0C8] to-[#34699A]">
                  <p className="text-[1.1rem] font-bold mb-1">{card.backTitle}</p>
                  <p className="text-sm">{card.backDesc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
