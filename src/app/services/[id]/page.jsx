import Image from "next/image";
import React from "react";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import PageTitle from "@/components/PageTitle/PageTitle";

const ServiceDetails = async ({ params }) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${params.id}`
  );
  const service = await resp.json();
  // console.log(service);
  const { title, img, description, price, facility } = service;
  return (
    <section className="container">
      <PageTitle
        title="Service Details"
        pagePath="Home/Service Details"
        titleBG={titleBG}
      />
    </section>
  );
};

export default ServiceDetails;
