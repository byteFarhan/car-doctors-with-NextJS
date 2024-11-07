import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React from "react";

const MyServices = () => {
  return (
    <section className="container">
      <PageTitle
        title="My Services"
        // isPathLeft={true}
        pagePath="Home/My Services"
        titleBG={titleBG}
      />
    </section>
  );
};

export default MyServices;
