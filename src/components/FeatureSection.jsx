import testImage from "../assets/test.jpg";

const cardData = [
  {
    frontTitle: "Web Development",
    backTitle: "Build Modern Websites",
    backDesc: "We create responsive, fast, and SEO-friendly websites for your business.",
  },
  {
    frontTitle: "Mobile Apps",
    backTitle: "iOS & Android",
    backDesc: "Custom mobile applications tailored to meet your goals on all platforms.",
  },
  {
    frontTitle: "UI/UX Design",
    backTitle: "Design That Works",
    backDesc: "Beautiful and intuitive design that improves user engagement and retention.",
  },
  {
    frontTitle: "SEO Optimization",
    backTitle: "Be Found Online",
    backDesc: "Increase your visibility and reach the right audience with strategic SEO.",
  },
  {
    frontTitle: "Cloud Solutions",
    backTitle: "Scale with Cloud",
    backDesc: "Leverage cloud infrastructure for scalability, security, and reliability.",
  },
  {
    frontTitle: "E-Commerce",
    backTitle: "Sell Online",
    backDesc: "Launch your online store with features like inventory, payments, and shipping.",
  },
  {
    frontTitle: "Maintenance",
    backTitle: "We Keep You Running",
    backDesc: "Ongoing updates, backups, and monitoring to keep your systems stable.",
  },
  {
    frontTitle: "Consulting",
    backTitle: "Tech Strategy",
    backDesc: "Guidance on digital strategy, tools, and best practices for your growth.",
  },
];

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          We help you{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
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
                  backgroundImage: `url(${testImage})`,
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
              <div className="absolute w-full h-full flex flex-col justify-center items-center border border-[#34699A] rounded-xl shadow-md text-white [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#58A0C8] to-[#34699A] px-4">
                <p className="text-[1.1rem] font-bold mb-1">{card.backTitle}</p>
                <p className="text-sm">{card.backDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
