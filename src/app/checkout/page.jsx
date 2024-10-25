import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React from "react";

const Checkout = () => {
  return (
    <section className="container">
      <PageTitle title="Check Out" pagePath="Home/Checkout" titleBG={titleBG} />
    </section>
  );
};

export default Checkout;
