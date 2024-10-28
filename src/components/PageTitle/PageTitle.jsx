import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const PageTitle = ({ title, pagePath, titleBG, isPathLeft }) => {
  return (
    <>
      <section className="mt-6 mb-16 md:mb-20 lg:mt-10 lg:mb-32">
        <div className="relative">
          <div className="absolute rounded-[10px] h-full w-full lg:w-2/3 bg-[linear-gradient(90deg,_#151515_0%,_rgba(21,21,21,0.4)_100%)] lg:bg-[linear-gradient(90deg,_#151515_0%,_rgba(21,21,21,0)_100%)] flex flex-col items-center justify-center  p-6 lg:pl-24">
            <h3 className="text-white capitalize w-full font-bold text-2xl md:text-4xl text-center lg:text-left lg:text-[45px]">
              {title}
            </h3>
            <p
              className={`${
                isPathLeft ? "" : "lg:hidden"
              } w-full text-sm text-center md:text-base md:font-medium text-primary capitalize lg:text-left lg:mt-2`}
            >
              {pagePath.split("/").join(" - ")}
            </p>
          </div>
          <Image
            className="object-cover rounded-[10px] w-full max-h-48 lg:max-h-[300px]"
            alt="page title image"
            src={titleBG}
            height={300}
            width={500}
          />
          {isPathLeft || (
            <div className="relative justify-center hidden lg:flex">
              <div className="bg-primary absolute bottom-0 px-3 lg:px-5 w-2/4 md:w-1/3 lg:w-1/4 py-20 lg:py-28 mx-auto [clip-path:polygon(5%_81%,_95%_81%,_100%_100%,_0%_100%)] flex justify-center">
                <p className="absolute pt-4 text-sm font-medium text-center text-white capitalize md:text-base lg:text-xl bottom-1">
                  {pagePath}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PageTitle;
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  pagePath: PropTypes.string.isRequired,
  titleBG: PropTypes.node.isRequired,
  isPathLeft: PropTypes.bool,
};
