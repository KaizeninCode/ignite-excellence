
const Participation = () => {
  return (
    <section className="max-w-5xl lg:py-10 py-5 mx-auto" id="participation">
      <h1 className="lg:text-6xl md:text-4xl text-2xl text-white w-fit mx-auto p-3 rounded-xl bg-orange-500 md:mb-8 mb-4 text-center">
        Participation Fees
      </h1>
      <div className="grid lg:grid-cols-3 max-lg:p-4 gap-8">
        <div className="relative h-128 rounded-xl">
          <img
            src="/participation1.jpeg"
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
          {/* Overlay bar for title */}
          <div className="absolute top-1/2 z-10 left-0 w-full bg-teal-700 bg-opacity-100 py-4 text-center">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              REACH Package
            </h2>
          </div>
          {/* Description below overlay */}
          <div className="absolute top-0 w-full h-full p-6 rounded-xl text-white text-center text-base font-light bg-linear-to-t from-black/70 via-black/40 to-black/20">
            <p className="mt-80">Half a day.</p>
          </div>
        </div>
        <div className="relative h-128 rounded-xl">
          <img
            src="/participation2.jpeg"
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
          {/* Overlay bar for title */}
          <div className="absolute top-1/2 z-10 left-0 w-full bg-teal-700 bg-opacity-100 py-4 text-center">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Extended Package
            </h2>
          </div>
          {/* Description below overlay */}
          <div className="absolute top-0 w-full h-full p-6 rounded-xl text-white text-center text-base font-light bg-linear-to-t from-black/70 via-black/40 to-black/20">
            <p className="mt-80">
              Full day period, morning and afternoon care for the child.
            </p>
          </div>
        </div>
        <div className="relative h-128 rounded-xl">
          <img
            src="/participation3.jpeg"
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
          {/* Overlay bar for title */}
          <div className="absolute top-1/2 z-10 left-0 w-full bg-teal-700 bg-opacity-100 py-4 text-center">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Pro Max Package
            </h2>
          </div>
          {/* Description below overlay */}
          <div className="absolute top-0 w-full h-full p-6 rounded-xl text-white text-center text-base font-light bg-linear-to-t from-black/70 via-black/40 to-black/20">
            <p className="mt-80">
              An extensive array of additional pay per game offers including
              giant inflatables, laser tags battles and quad biking all on
              campus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participation;
