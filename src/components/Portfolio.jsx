import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "../assets/hbm_2.png";
import project2 from "../assets/social1.png";
import project5 from "../assets/arqa.png";
import project7 from "../assets/social3.png";
import project8 from "../assets/kingsvault.png";
import project9 from "../assets/vikings.png";
import project10 from "../assets/bahasa+.png";
import project11 from "../assets/social4.png";
import thumbbi from "../assets/thumb_bi.png";
import thumblenovo from "../assets/thumb_lenovo.png";

const projects = [
  { id: 1, image: project1, category: "website", link: "https://hbm.co.id/" },
  { id: 2, image: project2, category: "social" },
  {
    id: 3,
    video: "https://www.youtube.com/embed/KEuNE2c66qg?si=rFdVLR0LXWCjPweZ",
    category: "video",
  },
  {
    id: 4,
    video:
      "https://drive.google.com/file/d/1Vtefr46sk9KBecaP8NS2ZwO-X0fkfU7k/preview",
    poster: thumbbi,
    category: "event",
  },
  {
    id: 5,
    image: project5,
    category: "website",
    link: "https://arqa.hbm.co.id/",
  },
  { id: 7, image: project7, category: "social" },
  {
    id: 8,
    video: "https://www.youtube.com/embed/3ujlV7nmw6c?si=Ptcpk43qGYFg88Wc",
    category: "video",
  },
  {
    id: 9,
    video:
      "https://drive.google.com/file/d/1YvUnzCYhZJPK5fD9Epaopyd61SicqcoN/preview",
    poster: thumblenovo,
    category: "event",
  },
  {
    id: 10,
    image: project8,
    category: "website",
    link: "https://kingsvault.io/",
  },
  {
    id: 11,
    image: project9,
    category: "website",
    link: "http://31.97.66.224:81/",
  },
  {
    id: 12,
    image: project10,
    category: "website",
    link: "https://bahasaplus.com/",
  },
  {
    id: 13,
    image: project11,
    category: "social",
  },
  {
    id: 14,
    video: "https://www.instagram.com/reel/C316YQJP1PA/embed",
    category: "video",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("website");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const isCurrentVideo = filteredProjects[currentIndex]?.video;
    if (isCurrentVideo) return; // Stop auto slide if current is video

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === filteredProjects.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [filteredProjects, currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div id="porto" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Our{" "}
        <span className="bg-gradient-to-r from-[#2e6bb1] to-[#F2BE5C] text-transparent bg-clip-text">
          Project
        </span>
      </h2>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <div class="flex items-center gap-2 mt-10">
          <button
            onClick={() => setFilter("website")}
            className={`cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3
    ${
      filter === "website"
        ? "bg-[#F5F5F5] text-[#06B6D4]"
        : "bg-black hover:bg-[#F5F5F5] hover:text-[#06B6D4]"
    }
  `}
          >
            <svg
              class="lucide lucide-rocket text-cyan-500 dark:text-cyan-400"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="#06B6D4"
              fill="none"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
            Website
          </button>
          <button
            onClick={() => setFilter("social")}
            className={`cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 ${
              filter === "social"
                ? "bg-[#F5F5F5] text-[#60A5FA]"
                : "bg-black hover:bg-[#F5F5F5] hover:text-[#60A5FA]"
            }`}
          >
            <svg
              class="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="#60A5FA"
              fill="none"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
              <path d="M18 14h-8"></path>
              <path d="M15 18h-5"></path>
              <path d="M10 6h8v4h-8V6Z"></path>
            </svg>
            Social Media
          </button>
          <button
            onClick={() => setFilter("video")}
            class={`cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 ${
              filter === "video"
                ? "bg-[#F5F5F5] text-[#FACC14]"
                : "bg-black hover:bg-[#F5F5F5] hover:text-[#FACC14]"
            }`}
          >
            <svg
              class="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="#FACC14"
              fill="none"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
              <path d="M15 3v6h6"></path>
            </svg>
            Video Company Profile
          </button>
          <button
            onClick={() => setFilter("event")}
            class={`cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 ${
              filter === "event"
                ? "bg-[#F5F5F5] text-[#FB923C]"
                : "bg-black hover:bg-[#F5F5F5] hover:text-[#FB923C]"
            }`}
          >
            <svg
              class="lucide lucide-star text-orange-400 dark:text-orange-600"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="#FB923C"
              fill="#FB923C"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Event Documentation
          </button>
        </div>
        {/* PROJECT CARDS */}
        <div className="relative mt-10 px-10 flex-col justify-center items-center min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredProjects[currentIndex]?.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="card"
              style={{
                backgroundImage:
                  "linear-gradient(163deg, #0F253E 0%, #F2BE5C 100%)",
                borderRadius: "20px",
                width: "900px",
                height: "auto",
                display: "inline-block",
                transition: "all 0.3s",
              }}
            >
              {filteredProjects[currentIndex]?.video ? (
                <div style={{ width: "100%", height: "100%" }}>
                  {filteredProjects[currentIndex]?.poster && !showVideo ? (
                    <img
                      src={filteredProjects[currentIndex].poster}
                      alt="thumbnail"
                      style={{
                        borderRadius: "10px",
                        width: "100%",
                        height: "600px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowVideo(true)}
                    />
                  ) : (
                    <iframe
                      width="100%"
                      height="600px"
                      src={filteredProjects[currentIndex].video}
                      title={`project-${
                        filteredProjects[currentIndex]?.id || "video"
                      }`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        borderRadius: "10px",
                        display: "block",
                        backgroundColor: "#000",
                      }}
                    ></iframe>
                  )}
                </div>
              ) : (
                <>
                  {filteredProjects[currentIndex]?.category === "website" &&
                  filteredProjects[currentIndex]?.link ? (
                    <a
                      href={filteredProjects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={filteredProjects[currentIndex]?.image}
                        alt={`project-${filteredProjects[currentIndex]?.id}`}
                        className="card2 cursor-pointer"
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "10px",
                          display: "block",
                        }}
                      />
                    </a>
                  ) : (
                    <img
                      src={filteredProjects[currentIndex]?.image}
                      alt={`project-${filteredProjects[currentIndex]?.id}`}
                      className="card2"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "10px",
                        display: "block",
                      }}
                    />
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
          {/* Arrow Kiri */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full hover:bg-gray-800 transition z-10"
          >
            ◀
          </button>

          {/* Arrow Kanan */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full hover:bg-gray-800 transition z-10"
          >
            ▶
          </button>
          <div className="flex justify-center mt-4 gap-2">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentIndex
                    ? "bg-[#F2BE5C] scale-110"
                    : "bg-gray-400 hover:bg-[#F2BE5C]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
