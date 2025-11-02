import Header from "./Header";

const Hero = () => {
  return (
      <section className="text-white text-center">
        <video src="/hero.mp4" autoPlay loop muted playsInline className=" h-full w-full object-cover object-center absolute -z-2"/>
        <div className="absolute w-full h-full bg-black opacity-60 -z-1"/>
        <div className="lg:py-32 py-16 lg:pb-20 pb-48 flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-4xl font-bold text-center mt-24 text-orange-500">
            IGNITE&reg; excellence
          </h1>
          <h3 className="text-gray-300 text-center font-bold lg:text-4xl text-2xl mt-4 font-sacramento">
            Where Fun Meets The Future.
          </h3>
          <h4 className="text-gray-300 italic text-center font-extralight text-2xl mt-4">
            Unmatched Unforgettable Holiday Experiences For Children.
          </h4>
          <h2 className="text-center font-semibold lg:text-4xl text-2xl mt-8">
            Period:{" "}
            <span className="font-extrabold">
              November 10 - December 10, 2025
            </span>
          </h2>
          
        </div>
      </section>
  );
};

export default Hero;
