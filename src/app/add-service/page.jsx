import React from "react";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import PageTitle from "@/components/PageTitle/PageTitle";

const AddService = () => {
  return (
    <section className="container">
      <PageTitle
        title="Add Service"
        pagePath="Home/Add Service"
        titleBG={titleBG}
      />
    </section>
  );
};

export default AddService;
