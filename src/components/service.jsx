import { useEffect, useState, useRef } from "react";
import Videocompanyprofile from "../assets/service/Videocompanyprofile.jpg";
import brandinggraphicdesign from "../assets/service/brandinggraphicdesign.jpg";
import eventdocs from "../assets/service/eventdocs.jpg";
import webdev from "../assets/service/webdev.jpg";
import marketing from "../assets/service/360marketing.jpg";
import sosmed from "../assets/service/sosmed.jpg";

const cardData = [
  {
    frontTitle: "Branding & Graphic Design",
    backTitle: "Visual Identity",
    backDesc: "Get a logo and brochure that capture your brand’s essence.",
    frontImage: brandinggraphicdesign,
    backImages: [brandinggraphicdesign, brandinggraphicdesign],
  },
  {
    frontTitle: "Event Documentation",
    backTitle: "Capture Every Moment",
    backDesc: "Capture moments or create videos with professional quality.",
    frontImage: eventdocs,
    backImages: [eventdocs, eventdocs],
  },
  {
    frontTitle: "Social Media Management",
    backTitle: "Build Online Presence",
    backDesc: "Keep your feeds active with consistent, engaging content.",
    frontImage: sosmed,
    backImages: [sosmed, sosmed],
  },
  {
    frontTitle: "Company Profile",
    backTitle: "Professional Storytelling",
    backDesc: "Showcase your business with a compelling profile video.",
    frontImage: Videocompanyprofile,
    backImages: [Videocompanyprofile, Videocompanyprofile],
  },
  {
    frontTitle: "360° Marketing",
    backTitle: "All-Around Strategy",
    backDesc:
      "Reach your audience through integrated online and offline campaigns.",
    frontImage: marketing,
    backImages: [marketing, marketing],
  },
  {
    frontTitle: "Website Development",
    backTitle: "Digital Experience",
    backDesc:
      "Launch a fast, responsive site that converts visitors into customers.",
    frontImage: webdev,
    backImages: [webdev, webdev],
  },
];

const FeatureSection = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const titleRef = useRef();
  const cardsRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    };

    const animateTitle = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-right");
          observer.unobserve(entry.target);
        }
      });
    };

    const titleObserver = new IntersectionObserver(
      animateTitle,
      observerOptions
    );
    const cardObserver = new IntersectionObserver(
      animateOnScroll,
      observerOptions
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (cardsRef.current) cardObserver.observe(cardsRef.current);
  }, []);

  return (
    <div
      id="service"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center opacity-0" ref={titleRef}>
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          We help you{" "}
          <span className="bg-gradient-to-r from-[#2e6bb1] to-[#F2BE5C] text-transparent bg-clip-text">
            grow digitally
          </span>
        </h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-6 opacity-0"
        ref={cardsRef}
      >
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
                <div className="relative h-[250px] w-full overflow-hidden">
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
                <div className="flex flex-col justify-center h-full px-4 text-left bg-gradient-to-br from-[#58A0C8] to-[#34699A]">
                  <p className="text-[1.1rem] font-bold mb-1">
                    {card.backTitle}
                  </p>
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
