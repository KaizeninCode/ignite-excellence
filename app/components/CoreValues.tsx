import React from "react";

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
        "At its source: joy and passion. Our environment inspires this for all staff and children alike",
    },
  ];
  return (
    <section className="max-w-5xl lg:py-10 py-5 mx-auto" id="values">
      <h1 className="lg:text-7xl md:text-5xl text-3xl text-red-800 md:mb-8 mb-4 text-center">Our Core Values</h1>
      <p className="md:text-2xl text-lg max-lg:px-4 font-light">
        Our code of conduct is designed to help us, as individuals, children and
        our staff team, make appropriate decisions about behavior choices and to
        demonstrate five core values:
        <br /> <br />
        {coreValues.map((value, index) => (
          <span key={index}>
            <strong className="text-red-800 mb-8">{value.title}:</strong> {value.description} <br /><br /> 
          </span>
        ))}
      </p>
    </section>
  );
};

export default CoreValues;
