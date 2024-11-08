"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React, { useEffect, useState } from "react";
import InputField from "@/components/InputField/InputField";
import { useSession } from "next-auth/react";
import { getService } from "@/lib/getService";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const UpdateService = ({ params }) => {
  const router = useRouter();
  const session = useSession();
  const [service, setService] = useState({});
  useEffect(() => {
    getService(params?.id).then((service) => setService(service));
  }, []);
  const { _id, title, price, img, description, authorEmail } = service;
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedService = {
      title: form.service.value,
      img: form.img.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
    };
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services/${_id}`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedService),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const { modifiedCount } = await resp.json();
      if (modifiedCount) {
        form.reset();
        router.push("/my-services");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service updated successfully.🎉",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container">
      <PageTitle
        title="Update Service"
        pagePath="Home/Update Bookings"
        isPathLeft={true}
        titleBG={titleBG}
      />
      <section className="px-6 py-10 my-16 rounded-lg md:my-20 lg:my-32 md:px-10 md:py-16 lg:p-24 bg-light-gray">
        <form onSubmit={handleUpdate} className="space-y-6">
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
