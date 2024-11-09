import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <>
      <div className="p-6 space-y-4 rounded-md shadow">
        <figure className="relative h-[250px]">
          <Image
            src={img}
            alt={title}
            className="object-cover rounded-md cursor-pointer size-full"
            height={250}
            width={385}
            // fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </figure>
        <h4 className="">{title}</h4>
        <div className="flex justify-between pb-4">
          <p className="text-xl font-semibold text-primary">Price: ${price}</p>
          <p className="text-3xl font-semibold text-primary">
            <Link href={`/services/${_id}`}>
              <GoArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
