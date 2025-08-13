import React, { useRef } from "react";

// Assets
import ajip from "../../assets/ajip.png";
import appeton from "../../assets/appeton.png";
import beetpos from "../../assets/beetpos.png";
import bi from "../../assets/BI.png";
import lenovo from "../../assets/lenovo.png";
import mayar from "../../assets/mayar.png";
import plantculture from "../../assets/plantculture.png";
import puriland from "../../assets/puriland.png";
import agna from "../../assets/agna.png";
import ajt from "../../assets/ajt.png";
import pch from "../../assets/pch.png";

const Slide1 = () => {
  const logosRef = useRef(null);

  const logos = [
    bi,
    ajip,
    mayar,
    beetpos,
    appeton,
    lenovo,
    plantculture,
    puriland,
    agna,
    ajt,
    pch,
  ];

  return (
    <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="min-w-max flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {[...logos, ...logos].map((logo, index) => (
          <li key={`logo1-${index}`}>
            <img src={logo} alt={`client-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slide1;
