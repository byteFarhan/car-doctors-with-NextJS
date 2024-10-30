"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import { MdCancel } from "react-icons/md";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const session = useSession();
  const user = session?.data?.user;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/booking-service?_email=${user?.email}`
        );

        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await resp.json();
        // console.log(data);
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    if (user?.email) {
      fetchBookings();
    }
  }, [user]);

  return (
    <section className="container">
      <PageTitle
        title="My Bookings"
        pagePath="Home/My Bookings"
        isPathLeft={true}
        titleBG={titleBG}
      />
      <section className="grid grid-cols-1 gap-6 my-16 space-y-6 md:my-20 lg:my-32 md:grid-cols-2 lg:grid-cols-1">
        {bookings.length > 0 &&
          bookings?.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
      </section>
    </section>
  );
};

export default MyBookings;

export const BookingCard = ({ booking }) => {
  const { userInfo, dateBooked, serviceInfo, bookingStatus } = booking;
  return (
    <div className="flex flex-col justify-between gap-4 md:gap-4 lg:flex-row lg:items-center lg:gap-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7">
        <button className="hidden lg:block">
          <MdCancel className="text-4xl" />
        </button>
        <Image
          src={serviceInfo.img}
          width={150}
          height={150}
          alt={serviceInfo.title}
          className="lg:size-[150px] w-full rounded-lg object-cover max-h-[200px]"
        />
        <div>
          <h4 className="font-semibold">{serviceInfo.title}</h4>
          <div className="flex gap-4 lg:flex-col lg:gap-1">
            <p>Color : Green</p>
            <p>Size: S</p>
          </div>
        </div>
      </div>
      <h4 className="hidden text-lg lg:block md:font-medium lg:font-semibold lg:text-xl">
        ${serviceInfo.price}
      </h4>
      <h4 className="hidden text-lg font-medium lg:block md:font-medium lg:font-semibold lg:text-xl">
        {dateBooked.split("/").join("-")}
      </h4>

      <div className="flex gap-6 lg:hidden">
        <h4 className="text-lg font-medium lg:font-semibold lg:text-xl">
          ${serviceInfo.price}
        </h4>
        <h4 className="text-lg font-medium lg:font-semibold lg:text-xl">
          {dateBooked.split("/").join("-")}
        </h4>
      </div>
      <div className="flex justify-between gap-4 *:flex-1">
        <button className="capitalize btn-fill">{bookingStatus}</button>
        <button className="block text-black lg:hidden btn-transparent btn-transparent-gray">
          Cancel
        </button>
      </div>
    </div>
  );
};
