import React from "react";
import Slider from "react-infinite-logo-slider";

// Assets
import hbm from "../../assets/hbm.png";
import kaixin from "../../assets/kaixin.png";
import jateng from "../../assets/jateng.png";
import atapbiru from "../../assets/atapbiru.png";
import lifetech from "../../assets/lifetech.png";
import plei from "../../assets/plei.png";
import yamaha from "../../assets/yamaha.png";
import surya from "../../assets/surya.png";
import bahasaplus from "../../assets/bahasaplus.png";
import hkynd from "../../assets/hkynd.png";

const Slide2 = () => {
  const logos = [
    plei,
    yamaha,
    lifetech,
    atapbiru,
    kaixin,
    jateng,
    hbm,
    surya,
    bahasaplus,
    hkynd,
  ];

  return (
    <div className="mt-6">
      <Slider
        width="200px" // lebar tiap logo
        duration={25} // durasi animasi penuh (semakin kecil semakin cepat)
        pauseOnHover={false}
      >
        {logos.map((logo, i) => (
          <Slider.Slide key={i}>
            <img src={logo} alt={`logo-${i}`} className="w-36" />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default Slide2;
