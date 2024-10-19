import Image from "next/image";
import Link from "next/link";
import Proptypes from "prop-types";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const CarouselItem = ({
  sliderNo,
  img,
  title,
  description,
  rightBtnText,
  rightBtnPath,
  leftBtnText,
  leftBtnPath,
  rightSlideIconPath,
  leftSlideIconPath,
}) => {
  //   const backgroundImageStyle = {
  //     backgroundImage: `url('${img}')`,
  //   };
  return (
    <>
      <div
        id={sliderNo}
        className="relative flex w-full carousel-item h-[400px] md:h-[500px] lg:h-[700px]"
        // style={backgroundImageStyle}
      >
        <Image src={img} alt={title} className="object-cover w-full" fill />
        <div className="absolute flex flex-col w-full lg:w-1/2 h-full justify-center lg:items-center bg-gradient-to-r from-secondary to-[rgba(21, 21, 21, 0.00)] bg-blend-overlay">
          <div className="w-full p-3 space-y-3 md:space-y-5 md:p-5 lg:p-0 md:w-4/6 lg:w-2/3 lg:space-y-7">
            <h1 className="leading-tight">{title}</h1>
            <p className="text-sm text-white md:text-base">{description}</p>
            <div className="space-x-3 md:space-x-5">
              <Link href={rightBtnPath}>
                <button className="btn-fill">{rightBtnText}</button>
              </Link>
              <Link href={leftBtnPath}>
                <button className="btn-transparent btn-transparent-gray">
                  {leftBtnText}
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="absolute flex w-1/2 items-center justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] bg-blend-overlay">
          <div className="w-2/3 text-white space-y-7">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <p className="text-xl text-white">{description}</p>
            <div className="space-x-5">
              <Link to={rightBtnPath}>
                <button className="btn-fill">{rightBtnText}</button>
              </Link>
              <Link to={leftBtnPath}>
                <button className="btn-transparent btn-transparent-gray">
                  {leftBtnText}
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="absolute bottom-0 flex items-end justify-end gap-3 transform -translate-y-1/2 md:gap-5 md:left-5 md:right-5 left-1 right-2">
          <a
            href={`${rightSlideIconPath}`}
            className="p-3 border-none rounded-full btn md:btn-circle bg-[#FFFFFF33] hover:bg-primary text-white"
          >
            <FaArrowLeft />
          </a>
          <a
            href={`${leftSlideIconPath}`}
            className="p-3 border-none rounded-full btn md:btn-circle bg-[#FFFFFF33] hover:bg-primary text-white"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
CarouselItem.propTypes = {
  img: Proptypes.node.isRequired,
  sliderNo: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  rightBtnText: Proptypes.string.isRequired,
  rightBtnPath: Proptypes.string.isRequired,
  leftBtnText: Proptypes.string.isRequired,
  leftBtnPath: Proptypes.string.isRequired,
  rightSlideIconPath: Proptypes.string.isRequired,
  leftSlideIconPath: Proptypes.string.isRequired,
};
