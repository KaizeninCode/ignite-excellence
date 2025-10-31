import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <Header />
      <section className="bg-linear-to-l from-[#b3001b] via-red-500/90 to-[#b3001b] text-[#F4FEC1] py-20 px-4 text-center">
        <h1 className="text-6xl font-bold text-center">
          IGNITE&reg; Excellence
        </h1>
        <h3 className="text-gray-300 text-center text-3xl mt-4">
          Step Up. Stand Out. Be Active.
        </h3>
        <h2 className="text-center font-semibold text-4xl mt-4">
          Dates:{" "}
          <span className="font-extrabold">
            November 10 - December 10, 2025
          </span>
        </h2>
        <h2 className="text-center font-semibold text-4xl mt-4">
          Venue: <span className="font-extrabold">TBC</span>
        </h2>
        <h4 className="text-gray-300 italic text-center font-extralight text-2xl mt-8">
          Unmatched Unforgettable Experiences.
        </h4>
      </section>
    </>
  );
};

export default Hero;
