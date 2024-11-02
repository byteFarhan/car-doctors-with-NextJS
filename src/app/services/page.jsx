import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";

const Services = () => {
  return (
    <section className="container">
      <PageTitle
        title="All Services"
        pagePath="Home/Services"
        titleBG={titleBG}
      />
    </section>
  );
};

export default Services;
