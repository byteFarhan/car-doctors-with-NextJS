"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";

const MyBookings = () => {
  return (
    <section className="container">
      <PageTitle
        title="My Bookings"
        pagePath="Home/My Services"
        isPathLeft={true}
        titleBG={titleBG}
      />
    </section>
  );
};

export default MyBookings;
