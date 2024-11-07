import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { getAllServices } from "@/lib/getAllServices";

const Services = async () => {
  const services = await getAllServices();
  return (
    <section className="container">
      <PageTitle
        title="All Services"
        pagePath="Home/Services"
        titleBG={titleBG}
      />
      <section className="my-16 md:my-20 lg:my-32">
        <div>{/* There will add search and filter fields */}</div>
        <div className="grid grid-cols-1 gap-6 mt-10 lg:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
