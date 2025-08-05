import { useState } from "react";
import project1 from "../assets/test.jpg";
import project2 from "../assets/testimage2.jpeg";
import project3 from "../assets/testimage3.jpg";
import project4 from "../assets/code.jpg";

const projects = [
  { id: 1, image: project1, category: "website" },
  { id: 2, image: project2, category: "social" },
  { id: 3, image: project3, category: "video" },
  { id: 4, image: project4, category: "event" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Our{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Project
        </span>
      </h2>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <div class="flex items-center gap-2 mt-10">
          <button
            onClick={() => setFilter("website")}
            class="cursor-pointer bg-black relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 rounded-md px-3"
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
            class="cursor-pointer bg-black relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 rounded-md px-3"
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
            class="cursor-pointer bg-black relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-9 rounded-md px-3"
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
            class="cursor-pointer bg-black relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FB923C] h-9 rounded-md px-3"
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
        <div className="mt-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                backgroundImage:
                  "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
                borderRadius: "20px",
                height: "200px",
                display: "inline-block",
                transition: "all 0.3s",
              }}
            >
              <img
                src={project.image}
                alt={`project-${project.id}`}
                className="card2"
                style={{
                  height: "200px",
                  width: "100%",
                  borderRadius: "10px",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
