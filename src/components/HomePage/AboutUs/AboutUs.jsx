import Image from "next/image";
import partsImg from "../../../../public/assets/images/about_us/parts.jpg";
import personImg from "../../../../public/assets/images/about_us/person.jpg";

const About = () => {
  return (
    <>
      <section
        id="aboutUs"
        className="flex flex-col-reverse items-start justify-start gap-10 my-20 md:gap-10 lg:gap-0 md:hero-content lg:flex-row"
      >
        <div className="relative w-full lg:w-2/4">
          <Image
            src={personImg}
            alt="about img 1"
            className="rounded-lg shadow-2xl w-5/6 md:h-[470px] md:w-5/6 object-cover lg:w-[460px]"
          />
          <Image
            src={partsImg}
            alt="about img 2"
            className="absolute rounded-lg shadow-2xl  w-4/6 md:h-[330px] md:w-[330px] object-cover border-4 md:border-8 border-white top-1/2 left-1/3 md:left-1/2 lg:left-1/3 "
          />
        </div>

        <div className="w-full space-y-3 md:space-y-4 lg:space-y-5 lg:w-2/4">
          <h5 className="text-primary">About Us</h5>
          <h2 className="w-full  lg:w-4/6 lg:text-5xl font-bold md:leading-[60px]">
            We are qualified & of experience in this field
          </h2>
          <p className="py-6 leading-7 capitalize">
            {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
            <br />
            <br />
            {`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
          </p>
          <button className="font-medium btn-fill">Get More Info</button>
        </div>
      </section>
    </>
  );
};

export default About;
