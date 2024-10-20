import Image from "next/image";
import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  const { title, price, img, rating } = product;
  return (
    <>
      <div className="p-6 space-y-4 rounded-md shadow">
        <figure className="bg-[#F3F3F3] p-10 rounded-md">
          <Image
            src={img}
            alt={title}
            className="object-cover  h-[160px] w-auto mx-auto"
            // fill
            width={160}
            height={160}
          />
        </figure>

        <div className="py-3 space-y-3 text-center">
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
          <h4 className="">{title}</h4>
          <p className="text-xl font-semibold text-primary">${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
