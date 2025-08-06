import React from "react";
import logo from "../assets/logo nav.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const icons = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=61577996219956",
    hoverBg: "hover:bg-[#1DA1F2]",
    tooltipBg: "bg-[#1da1f2]",
    textColor: "group-hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />, // Ganti jika ingin pakai icon LinkedIn yang tepat
    url: "https://www.linkedin.com/company/imaginesee-digital-agency/",
    hoverBg: "hover:bg-[#1DA1F2]",
    tooltipBg: "bg-[#1da1f2]",
    textColor: "group-hover:text-white",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/imaginesee.id/",
    hoverBg:
      "hover:bg-gradient-to-r hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    tooltipBg: "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    textColor: "group-hover:text-white",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left space-y-6 sm:space-y-0 relative">
        {/* Left Text */}
        <p className="text-sm text-neutral-400 sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2">
          © 2025 <span className="font-semibold text-white">ImagineSee</span> – Digital Agency
        </p>

        {/* Center Logo */}
        <div className="w-44 h-auto mx-auto">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        {/* Right Social Icons */}
        <div className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
          <ul className="flex justify-center gap-2">
            {icons.map(({ name, icon, url, hoverBg, tooltipBg, textColor }, index) => (
              <li key={index}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-[40px] h-[40px] bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${hoverBg}`}
                >
                  {/* Tooltip */}
                  <span
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 px-2 py-1 text-xs text-white rounded-md opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:opacity-100 group-hover:-top-5 ${tooltipBg}`}
                  >
                    {name}
                    <span
                      className={`absolute left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 -bottom-1 ${tooltipBg}`}
                    />
                  </span>

                  {/* Icon */}
                  <span className={`text-black text-[16px] transition duration-300 ${textColor}`}>
                    {icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
