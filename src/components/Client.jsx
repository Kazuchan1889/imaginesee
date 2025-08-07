import React, { useEffect, useRef, useState } from "react";
import ajip from "../assets/ajip.png";
import appeton from "../assets/appeton.png";
import beetpos from "../assets/beetpos.png";
import bi from "../assets/BI.png";
import lamak from "../assets/lamak.png";
import lenovo from "../assets/lenovo.png";
import mayar from "../assets/mayar.png";
import plantculture from "../assets/plantculture.png";
import plei from "../assets/plei.png";
import puriland from "../assets/puriland.png";
import yamaha from "../assets/yamaha.png";

const Client = () => {
  const logosRef = useRef(null);
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const cloned = ul.cloneNode(true);
      cloned.setAttribute("aria-hidden", "true");
      ul.parentNode.appendChild(cloned);
    }
  }, []);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative  flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
              Our{" "}
              <span className="bg-gradient-to-r from-[#58A0C8] to-[#34699A] text-transparent bg-clip-text">
                Client
              </span>
            </h2>
            {/* Logo Carousel animation */}
            <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul
                ref={logosRef}
                className="min-w-max flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  <img src={bi} alt="" />
                </li>
                <li>
                  <img src={ajip} alt="" />
                </li>
                <li>
                  <img src={lamak} alt="" />
                </li>
                <li>
                  <img src={beetpos} alt="" />
                </li>
                <li>
                  <img src={appeton} alt="" />
                </li>
                <li>
                  <img src={lenovo} alt="" />
                </li>
                <li>
                  <img src={plantculture} alt="" />
                </li>
                <li>
                  <img src={puriland} alt="" />
                </li>
              </ul>
            </div>
            {/* End: Logo Carousel animation */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Client;
