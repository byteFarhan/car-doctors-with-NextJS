"use client";
import React from "react";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import PageTitle from "@/components/PageTitle/PageTitle";
import AddServiceForm from "@/components/AddServiceForm/AddServiceForm";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const AddService = () => {
  const router = useRouter();
  const session = useSession();
  const authorEmail = session?.data?.user?.email;

  const handleAddService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newService = {
      title: form.service.value,
      img: form.img.value,
      price: form.price.value,
      description: form.description.value,
      authorEmail,
      postedDate: new Date().toLocaleDateString(),
      facility: [
        {
          name: "Instant Car Services",
          details:
            "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
        },
        {
          name: "24/7 Quality Service",
          details:
            "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
        },
        {
          name: "Easy Customer Service",
          details:
            "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
        },
        {
          name: "Quality Cost Service",
          details:
            "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
        },
      ],
    };
    // console.log(newService);
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services`,
        {
          method: "POST",
          body: JSON.stringify(newService),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const { acknowledged, insertedId } = await resp.json();
      if (acknowledged) {
        form.reset();
        router.push("/my-services");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service added successfully.🎉",
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
        title="Add New Service"
        pagePath="Home/Add Service"
        titleBG={titleBG}
      />
      <section className="px-6 py-10 my-16 rounded-lg md:my-20 lg:my-32 md:px-10 md:py-16 lg:p-24 bg-light-gray">
        <AddServiceForm
          handlerFunc={handleAddService}
          authorEmail={authorEmail}
        />
      </section>
    </section>
  );
};

export default AddService;
