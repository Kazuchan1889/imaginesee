import React, { useEffect, useRef } from "react";

// Assets
import hbm from "../../assets/hbm.png";
import kaixin from "../../assets/kaixin.png";
import jateng from "../../assets/jateng.png";
import bni from "../../assets/bni.png";
import atapbiru from "../../assets/atapbiru.png";
import lifetech from "../../assets/lifetech.png";
import btn from "../../assets/btn.png";
import plei from "../../assets/plei.png";
import yamaha from "../../assets/yamaha.png";
import surya from "../../assets/surya.png";
import bahasaplus from "../../assets/bahasaplus.png";

const Slide2 = () => {
  const logosRef = useRef(null);

  const logos = [
    plei,
    yamaha,
    btn,
    lifetech,
    atapbiru,
    bni,
    kaixin,
    jateng,
    hbm,
    surya,
    bahasaplus,
  ];

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const cloned = ul.cloneNode(true);
      cloned.setAttribute("aria-hidden", "true");
      cloned.classList.add("animate-infinite-scroll");
      ul.parentNode.appendChild(cloned);

      return () => {
        if (cloned && cloned.parentNode) {
          cloned.parentNode.removeChild(cloned);
        }
      };
    }
  }, []);

  return (
    <div className="mt-6 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="min-w-max flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse"
      >
        {logos.map((logo, index) => (
          <li key={`logo2-${index}`}>
            <img src={logo} alt={`client-reverse-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slide2;
