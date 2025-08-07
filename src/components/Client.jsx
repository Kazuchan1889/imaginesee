import React from "react";
import Slide1 from "./slide/Slide1";
import Slide2 from "./slide/Slide2";

const Client = () => {
  return (
    <div  id="client" className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
              Our{" "}
              <span className="bg-gradient-to-r from-[#58A0C8] to-[#34699A] text-transparent bg-clip-text">
                Client
              </span>
            </h2>

            {/* Slide 1 */}
            <Slide1 />

            {/* Slide 2 */}
            <Slide2 />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Client;
