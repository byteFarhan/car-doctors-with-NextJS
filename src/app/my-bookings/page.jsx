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
      <section>
        {bookings.length > 0 &&
          bookings?.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
      </section>
    </section>
  );
};

export default MyBookings;

const BookingCard = ({ booking }) => {
  const { userInfo, bookedDate, serviceInfo } = booking;
  return (
    <div key={booking._id}>
      <button className="">
        <MdCancel className="text-4xl" />
      </button>
      <div>
        <Image
          src={serviceInfo.img}
          width={250}
          height={250}
          alt={serviceInfo.title}
        />
      </div>
    </div>
  );
};
