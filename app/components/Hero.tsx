import Header from "./Header";

const Hero = () => {
  return (
      <section className="text-white text-center">
        <video src="/hero.mp4" autoPlay loop muted playsInline className=" h-full w-full object-cover object-center absolute -z-2"/>
        <div className="absolute w-full h-full bg-black opacity-60 -z-1"/>
        <div className="lg:py-32 lg:pb-20 py-8 pb-5 flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-4xl font-bold text-center mt-24">
            IGNITE&reg; Excellence
          </h1>
          <h3 className="text-gray-300 text-center font-bold lg:text-4xl text-2xl mt-4 font-sacramento">
            Step Up. Stand Out. Be Active.
          </h3>
          <h2 className="text-center font-semibold lg:text-4xl text-2xl mt-4">
            Dates:{" "}
            <span className="font-extrabold">
              November 10 - December 10, 2025
            </span>
          </h2>
          <h2 className="text-center font-semibold lg:text-4xl text-2xl mt-4">
            Venue: <span className="font-extrabold">TBC</span>
          </h2>
          <h4 className="text-gray-300 italic text-center font-extralight text-2xl mt-8">
            Unmatched Unforgettable Experiences.
          </h4>
        </div>
      </section>
  );
};

export default Hero;
