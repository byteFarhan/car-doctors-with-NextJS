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
      <section>
        <div>{/* There will add search and filter fields */}</div>
      </section>
    </section>
  );
};

export default Services;
