import PropTypes from "prop-types";

import quoteSVG from "@/../public/assets/icons/quote.svg";
import Image from "next/image";
const TestimonialItem = ({ review }) => {
  const { name, profession, img, description } = review;
  return (
    <div className="p-5 mb-5 ml-5 space-y-5 rounded-md shadow md:p-8">
      <div className="flex flex-grow lg:justify-between">
        <div className="flex flex-col gap-4 lg:flex-row">
          <Image
            src={img}
            alt={name}
            className="object-cover w-16 h-16 rounded-full"
            height={64}
            width={64}
          />
          <div className="space-y-1">
            <h4 className="text-xl lg:text-2xl">{name}</h4>
            <h5 className="text-lg text-neutral lg:text-xl">{profession}</h5>
          </div>
        </div>
        <Image
          src={quoteSVG}
          alt="quote"
          className="hidden opacity-20 w-14 h-14 md:block"
          width={56}
          height={56}
        />
      </div>
      {/* <p>{description}</p> */}
      <p className="flex-grow text-justify ">
        {`There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.`}
      </p>
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
          checked
          readOnly
        />
      </div>
    </div>
  );
};

export default TestimonialItem;
TestimonialItem.propTypes = {
  review: PropTypes.object.isRequired,
};
