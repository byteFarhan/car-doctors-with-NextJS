"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React, { useEffect, useState } from "react";
import InputField from "@/components/InputField/InputField";
import { useSession } from "next-auth/react";
import { getService } from "@/lib/getService";

const UpdateService = ({ params }) => {
  const session = useSession();
  const [service, setService] = useState({});
  useEffect(() => {
    getService(params?.id).then((service) => setService(service));
  }, []);
  const { title, price, img, description, authorEmail } = service;
  return (
    <section className="container">
      <PageTitle
        title="Update Service"
        pagePath="Home/Update Bookings"
        isPathLeft={true}
        titleBG={titleBG}
      />
      <section className="px-6 py-10 my-16 rounded-lg md:my-20 lg:my-32 md:px-10 md:py-16 lg:p-24 bg-light-gray">
        <form
          //  onSubmit={handlerFunc}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <InputField
              placeholder="Service Name"
              type="text"
              name="service"
              defaultValue={title}
              isLabelHidden={true}
              isRequired={true}
            />
            <InputField
              placeholder="Author Email"
              type="email"
              name="email"
              isLabelHidden={true}
              isRequired={true}
              defaultValue={session?.data?.user?.email}
              isReadOnly={true}
            />
            <InputField
              placeholder="Service Image"
              type="text"
              name="img"
              defaultValue={img}
              isLabelHidden={true}
              isRequired={true}
            />
            <InputField
              placeholder="$ Price"
              type="text"
              name="price"
              defaultValue={price}
              isLabelHidden={true}
              isRequired={true}
              pattern="\d*"
            />
            <div className="form-control lg:col-span-2">
              <textarea
                className="p-3 rounded-lg outline-secondary focus:outline-1"
                name="description"
                defaultValue={description}
                placeholder="Service Description"
                cols="30"
                rows="8"
                required
              />
            </div>

            <button type="submit" className="w-full lg:col-span-2 btn-fill">
              Update Service
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default UpdateService;
