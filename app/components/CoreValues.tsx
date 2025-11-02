const CoreValues = () => {
  const coreValues = [
    {
      title: "Respect",
      description:
        "First and foremost, for ourselves, the children in our care, the families and school communities with whom we partner.",
    },
    {
      title: "Empathy",
      description:
        "We are always willing to step into the shoes of the other person, understand their feelings, and use that to guide our actions.",
    },
    {
      title: "Agility",
      description:
        "Flexibility in both mind and body, counter balanced by the ability to recover when things don't go according to plan.",
    },
    {
      title: "Care and Curiosity",
      description:
        "At the heart of all we do, by actively embracing each other's ideas, and valuing our diversity for the strength it brings.",
    },
    {
      title: "Happiness",
      description:
        "At its source: joy and passion. Our environment inspires this for all staff and children alike.",
    },
  ];
  return (
    <section className="max-w-4xl mx-auto py-12 px-4" id="core-values">
      <h1 className="text-4xl md:text-6xl text-white w-fit mx-auto p-3 rounded-xl bg-orange-500 mb-8">
        Our Core Values
      </h1>
      <div className="space-y-6">
        {/* Respect */}
        <div className="flex items-start gap-4">
          <span className="font-gloria lg:text-5xl text-3xl font-extrabold text-purple-600 drop-shadow select-none">
            R
          </span>
          <div>
            <span className="font-semibold lg:text-2xl text-white w-fit mx-auto p-3 rounded-xl bg-purple-600">Respect</span>
            <p className="text-base lg:text-2xl font-light mt-4">
              First and foremost, for ourselves, the children in our care, the
              families and school communities with whom we partner.
            </p>
          </div>
        </div>
        {/* Empathy */}
        <div className="flex items-start gap-4">
          <span className="font-gloria lg:text-5xl text-3xl font-extrabold text-blue-600 drop-shadow select-none">
            E
          </span>
          <div>
            <span className="font-semibold lg:text-2xl text-white w-fit mx-auto p-3 rounded-xl bg-blue-600">Empathy</span>
            <p className="text-base lg:text-2xl font-light mt-4">
              We are always willing to step into the shoes of the other person,
              understand their feelings, and use that to guide our actions.
            </p>
          </div>
        </div>
        {/* Agility */}
        <div className="flex items-start gap-4">
          <span className="font-gloria lg:text-5xl text-3xl font-extrabold text-orange-500 drop-shadow select-none">
            A
          </span>
          <div>
            <span className="font-semibold lg:text-2xl text-white w-fit mx-auto p-3 rounded-xl bg-orange-500">Agility</span>
            <p className="text-base lg:text-2xl font-light mt-4">
              Flexibility in both mind and body, counter balanced by the ability
              to recover when things don't go according to plan.
            </p>
          </div>
        </div>
        {/* Care and Curiosity */}
        <div className="flex items-start gap-4">
          <span className="font-gloria lg:text-5xl text-3xl font-extrabold text-cyan-500 drop-shadow select-none">
            C
          </span>
          <div>
            <span className="font-semibold lg:text-2xl text-white w-fit mx-auto p-3 rounded-xl bg-teal-500">Care and Curiosity</span>
            <p className="text-base lg:text-2xl font-light mt-4">
              At the heart of all we do, by actively embracing each other's
              ideas, and valuing our diversity for the strength it brings.
            </p>
          </div>
        </div>
        {/* Happiness */}
        <div className="flex items-start gap-4">
          <span className="font-gloria lg:text-5xl text-3xl font-extrabold text-pink-500 drop-shadow select-none">
            H
          </span>
          <div>
            <span className="font-semibold lg:text-2xl text-white w-fit mx-auto p-3 rounded-xl bg-pink-500">Happiness</span>
            <p className="text-base lg:text-2xl font-light mt-4">
              At its source: joy and passion. Our environment inspires this for
              all staff and children alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
