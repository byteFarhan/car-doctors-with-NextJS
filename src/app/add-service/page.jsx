import React from "react";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import PageTitle from "@/components/PageTitle/PageTitle";
import AddServiceForm from "@/components/AddServiceForm/AddServiceForm";

const AddService = () => {
  return (
    <section className="container">
      <PageTitle
        title="Add New Service"
        pagePath="Home/Add Service"
        titleBG={titleBG}
      />
      <section className="px-6 py-10 my-16 rounded-lg md:my-20 lg:my-32 md:px-10 md:py-16 lg:p-24 bg-light-gray">
        <AddServiceForm />
      </section>
    </section>
  );
};

export default AddService;
