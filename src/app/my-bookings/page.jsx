"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { MdCancel } from "react-icons/md";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const session = useSession();
  const user = session?.data?.user;
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
  useEffect(() => {
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
        {bookings.length > 0 ? (
          bookings?.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              fetchBookings={fetchBookings}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-40 text-center md:col-span-2">
            <h3 className="capitalize">Not booked any service yet!</h3>
          </div>
        )}
      </section>
    </section>
  );
};

export default MyBookings;

const BookingCard = ({ booking, fetchBookings }) => {
  const { userInfo, _id, dateBooked, serviceInfo, isAccepted } = booking;
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert the booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/booking-service?_delete-service=${id}`,
            {
              method: "DELETE",
            }
          );
          const { deletedCount } = await resp.json();
          //   console.log(data);
          //   console.log(deletedCount);
          if (deletedCount) {
            fetchBookings();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Booking has been canceled.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <div className="flex flex-col justify-between gap-4 md:gap-4 lg:flex-row lg:items-center lg:gap-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7">
        <button onClick={() => handleDelete(_id)} className="hidden lg:block">
          <MdCancel className="text-4xl" />
        </button>
        <Link href={`/services/${serviceInfo._id}`}>
          <Image
            src={serviceInfo.img}
            width={150}
            height={150}
            alt={serviceInfo.title}
            className="lg:size-[150px] w-full rounded-lg object-cover max-h-[200px]"
          />
        </Link>
        <div>
          <Link href={`/services/${serviceInfo._id}`}>
            <h4 className="font-semibold">{serviceInfo.title}</h4>
          </Link>
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
        {isAccepted ? (
          <button className="text-[#444] hover:text-[#444] capitalize btn-transparent btn-transparent-gray">
            {"Accepted"}
          </button>
        ) : (
          <button className="capitalize btn-fill">{"Pending"}</button>
        )}
        <button
          onClick={() => handleDelete(_id)}
          className="block text-black lg:hidden btn-transparent btn-transparent-gray"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
