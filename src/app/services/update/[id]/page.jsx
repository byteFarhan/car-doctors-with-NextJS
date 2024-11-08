import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React from "react";

const UpdateService = () => {
  return (
    <section className="container">
      <PageTitle
        title="Update Service"
        pagePath="Home/Update Bookings"
        isPathLeft={true}
        titleBG={titleBG}
      />
    </section>
  );
};

export default UpdateService;
