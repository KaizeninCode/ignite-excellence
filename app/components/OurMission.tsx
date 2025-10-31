import React from "react";

const OurMission = () => {
  const missionItems = [
    {
      title: "Run and Play",
      description:
        "Supporting children's gross motor development through outdoor play, organized sport and games such as ball games, roller-skating and skate boarding.",
    },
    {
      title: "Experiments and Science",
      description:
        "We will assist their learning about the world around us in coding, robotics, photography and film making.",
    },
    {
      title: "Arts",
      description:
        "the Arts provide a place to explore creativity through crafts, dance, music and drama.",
    },
    {
      title: "Create",
      description:
        "Using team-based activities to build creativity, collaboration and communication skills. These incorporate literacy, numeracy and life skills.",
    },
    {
      title: "Health",
      description:
        "Supporting children's physical and emotional health and well-being through fun and supporting activities such as the book club, chess, swimming, team building, and related activities.  ",
    },
  ];
  return (
    <section className="max-w-5xl py-5 mx-auto" id="mission">
      <h1 className="lg:text-7xl md:text-5xl text-3xl text-red-800 text-center">Our Mission</h1>
      <p className="md:text-2xl text-lg max-lg:px-4 font-light md:mt-8 mt-4">
        Our mission is to empower children to thrive, supporting their holistic
        development by providing a conducive environment to unwind, explore and
        make lasting memories while fostering a sense of belonging within our
        community. Our approach to the holistic development of children seeks to
        address the physical, emotional, relational, intellectual and spiritual
        aspects of the child. We do this through REACH. Every week we offer our
        REACH programme which includes activities in: <br />
        <br />
        </p>
        {missionItems.map((item, index) => (
          <div className="mb-3 space-y-1 w-4/5 mx-auto md:text-2xl text-lg" key={index}>
            <h2 className=" text-red-800 font-semibold">
              {item.title}
            </h2>
            <p className="font-light">{item.description}</p>
          </div>
        ))}
    </section>
  );
};

export default OurMission;
