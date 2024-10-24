import React from "react";

const ServiceDetails = async ({ params }) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${params.id}`
  );
  const service = await resp.json();
  // console.log(service);
  return <div></div>;
};

export default ServiceDetails;
