import Image from "next/image";
import React from "react";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
// import thumbImg from "@/../public/assets/images/banner/2.jpg";
import playImg from "@/../public/assets/icons/play.svg";
import logo from "@/../public/assets/logo.svg";
import PageTitle from "@/components/PageTitle/PageTitle";
import Facility from "@/components/Facility/Facility";
import getTopServices from "@/lib/getTopServices";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { getService } from "@/lib/getService";

const ServiceDetails = async ({ params }) => {
  const topServices = await getTopServices();
  const filteredServices = topServices.filter(
    (service) => service._id !== params.id
  );
  // console.log(filteredServices.length);
  const service = await getService(params?.id);
  // console.log(service);
  const { title, img, description, price, facility } = service;
  return (
    <section className="container">
      <PageTitle
        title="Service Details"
        pagePath="Home/Service Details"
        titleBG={titleBG}
      />
      <section className="gap-6 mb-16 md:mb-20 lg:mb-32 lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div>
            <Image
              className="object-cover w-full max-h-[500px] rounded-xl"
              src={img}
              alt={title}
              height={400}
              width={700}
            />
          </div>
          <div className="mt-6 mb-5 lg:mt-12 md:mt-8 space-y-7 lg:mb-7">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-7">
            {facility?.map((item, idx) => (
              <Facility key={idx} facility={item} />
            ))}
          </div>
          <div>
            <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}</p>
            <h3 className="mt-12 mb-7">3 Simple Steps to Process</h3>
            <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`}</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-6 md:grid-cols-3 my-7">
              {steps?.map((item, idx) => (
                <div key={idx}>
                  <div className="px-4 md:px-8 py-6 md:py-10 space-y-3 md:space-y-5 text-center rounded-lg border border-[#E8E8E8]">
                    <span className="flex items-center justify-center rounded-full size-[70px] mx-auto bg-primary border-[10px] border-light-gray">
                      <p className="text-xl font-bold text-white">{`0${
                        idx + 1
                      }`}</p>
                    </span>
                    <h5 className="uppercase">{item.title}</h5>
                    <p className="w-full mx-auto md:w-4/5 capitalise">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{ backgroundImage: `url('/assets/images/banner/2.jpg')` }}
              className="h-[400px] w-full bg-cover bg-no-repeat rounded-xl flex items-center justify-center bg-gradient-to-r from-[#1515154d] cursor-pointer"
            >
              <Image
                className="mx-auto cursor-pointer"
                draggable={false}
                src={playImg}
                alt="Play Image"
                // height={400}
                // width={500}
                // fill
              />
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-8 lg:col-span-1 lg:mt-0">
          <div className="p-8 space-y-5 rounded-lg bg-light-gray">
            <h4>Other Services</h4>
            {filteredServices?.slice(0, 5).map((service) => (
              <Link
                key={service._id}
                href={`/services/${service._id}`}
                className="flex items-center justify-between p-5 text-base font-bold transition-all delay-150 bg-white rounded-lg text-secondary hover:bg-primary group hover:text-white"
              >
                {service?.title}
                <span className="text-3xl font-semibold transition-all delay-150 text-primary group-hover:text-white">
                  <GoArrowRight />
                </span>
              </Link>
            ))}
          </div>
          <div className="bg-secondary space-y-5 p-8 rounded-lg text-white *:text-white">
            <h4>Download</h4>
            <div className="space-y-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <HiOutlineDocumentChartBar className="w-auto text-white size-8" />
                  <span className="">
                    <p className="text-lg font-semibold text-white">
                      Our Brochure
                    </p>
                    <p className="text-base text-[#A2A2A2]">Download</p>
                  </span>
                </div>
                <Link href={"#"} className="p-4 rounded-lg bg-primary">
                  <GoArrowRight className="text-2xl font-semibold text-white" />
                </Link>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <HiOutlineDocumentChartBar className="w-auto text-white size-8" />
                  <span className="">
                    <p className="text-lg font-semibold text-white">
                      Company Details
                    </p>
                    <p className="text-base text-[#A2A2A2]">Download</p>
                  </span>
                </div>
                <Link href={"#"} className="p-4 rounded-lg bg-primary">
                  <GoArrowRight className="text-2xl font-semibold text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-8 space-y-5 text-center text-white rounded-lg bg-secondary">
            <Image src={logo} alt="Logo" className="w-32 mx-auto" />
            <h4 className="text-white">Car Doctor</h4>
            <p className="w-2/3 mx-auto text-xl font-bold leading-normal text-white">
              Need Help? We Are Here To Help You
            </p>
            <div className="">
              <div className="w-4/5 p-5 pb-8 mx-auto space-y-1 bg-white rounded-lg">
                <h4 className="text-primary">
                  Car Doctor <span className="text-secondary">Special</span>
                </h4>
                <p className="font-bold">
                  Save up to <span className="text-primary">60% off</span>
                </p>
              </div>
              <button className="-mt-8 btn-fill">Get A Quote</button>
            </div>
          </div>
          {/* <div> */}
          <h3>Price ${price}</h3>
          {/* </div> */}
          <Link
            href={`/checkout/service/${params.id}`}
            className="w-full btn-fill"
          >
            Proceed Checkout
          </Link>
        </div>
      </section>
    </section>
  );
};

export default ServiceDetails;
const steps = [
  {
    title: "Step One",
    description: "It uses a dictionary of over 200 .",
  },
  {
    title: "Step Two",
    description: "It uses a dictionary of over 200 .",
  },
  {
    title: "Step Three",
    description: "It uses a dictionary of over 200 .",
  },
];
