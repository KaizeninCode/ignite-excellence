import RegistrationForm from "./RegistrationForm";

const RegistrationParticipation = () => {
  return (
    <section className="max-w-5xl lg:py-10 py-5 mx-auto" id="registration">
      <h1 className="lg:text-6xl md:text-4xl text-2xl text-red-800 md:mb-8 mb-4 text-center">
        Registration and Participation Fees
      </h1>
      <p className="md:text-2xl text-lg max-md:px-4 font-light">
        In order to better understand the different fee options and how to
        register at a location near you, please make a direct inquiry at the
        Center near you because different centers have different rates
        specifically designed to meet demand from the immediate neighborhood.
        <br />
        <br />
        This system enables you to register your child online and also enables
        one to provide additional information such as your child&apos;s
        allergies, who may collect your child and when you would like to book
        your child into the program, cultural and religious
        requirements/sensitivities, among others. The system helps keep your
        child safe and gives you the peace of mind knowing your child has
        arrived at the center.
      </p>
      <RegistrationForm />
    </section>
  );
};

export default RegistrationParticipation;
