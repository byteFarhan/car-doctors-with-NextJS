"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React, { useEffect, useState } from "react";
import { getMyServices } from "@/lib/getMyServices";
import Link from "next/link";
import { MdCancel, MdDelete } from "react-icons/md";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const MyServices = () => {
  const { data } = useSession();
  const [myServices, setMyServices] = useState([]);
  const fetchmyServices = async () => {
    setMyServices(await getMyServices(data?.user?.email));
  };
  useEffect(() => {
    if (data?.user) {
      fetchmyServices();
    }
  }, [data?.user]);
  return (
    <section className="container">
      <PageTitle
        title="My Services"
        // isPathLeft={true}
        pagePath="Home/My Services"
        titleBG={titleBG}
      />
      <section className="grid grid-cols-1 gap-6 my-16 space-y-6 md:my-20 lg:my-32 md:grid-cols-2 lg:grid-cols-1">
        {myServices.length > 0 ? (
          myServices?.map((service) => (
            <MyServiceCard
              key={service._id}
              service={service}
              fetchmyServices={fetchmyServices}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-40 text-center md:col-span-2">
            <h3 className="capitalize">Not added any service yet!</h3>
          </div>
        )}
      </section>
    </section>
  );
};

export default MyServices;

const MyServiceCard = ({ service, fetchmyServices }) => {
  const { _id, postedDate, title, img, price, authorEmail } = service;

  return (
    <div className="flex flex-col justify-between gap-4 md:gap-4 lg:flex-row lg:items-center lg:gap-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7">
        <Link href={`/services/${_id}`}>
          <Image
            src={img}
            width={150}
            height={150}
            alt={title}
            className="lg:size-[150px] w-full rounded-lg object-cover max-h-[200px]"
          />
        </Link>
        <div>
          <Link href={`/services/${_id}`}>
            <h4 className="font-semibold">{title}</h4>
          </Link>
          <div className="flex gap-4 lg:flex-col lg:gap-1">
            <p className="lowercase">{authorEmail}</p>
          </div>
        </div>
      </div>
      <h4 className="hidden text-lg lg:block md:font-medium lg:font-semibold lg:text-xl">
        ${price}
      </h4>
      <h4 className="hidden text-lg font-medium lg:block md:font-medium lg:font-semibold lg:text-xl">
        {postedDate.split("/").join("-")}
      </h4>

      <div className="flex gap-6 lg:hidden">
        <h4 className="text-lg font-medium lg:font-semibold lg:text-xl">
          ${price}
        </h4>
        <h4 className="text-lg font-medium lg:font-semibold lg:text-xl">
          {postedDate.split("/").join("-")}
        </h4>
      </div>
      <div className="flex justify-between gap-4 *:flex-1 lg:hidden">
        <button className="block text-black lg:hidden btn-transparent btn-transparent-gray">
          Edit
        </button>
        <button className="block lg:hidden btn btn-fill">Delete</button>
      </div>
      <div className="hidden space-x-4 lg:block">
        <Link href="#">
          <button className="text-black transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              //   stroke="currentColor"
              stroke="#000"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </Link>
        <button className="text-black transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            // stroke="currentColor"
            stroke="#000"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
