import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";

import React from "react";

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
