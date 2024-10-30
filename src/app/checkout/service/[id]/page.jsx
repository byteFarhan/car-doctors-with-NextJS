"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import { getService } from "@/lib/getService";
import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Checkout = ({ params }) => {
  const router = useRouter();
  const [service, setService] = useState({});
  const session = useSession();
  //   console.log("session", session);
  const user = session?.data?.user;
  useEffect(() => {
    getService(params.id).then((data) => setService(data));
  }, [params]);
  //   console.log(service);
  //   console.log("user", user);
  const handleCheckout = async (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const date = form.date.value;
    // const serviceName = form.service.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const userMessage = form.message.value;
    // console.log("date", date);
    const checkoutData = {
      dateBooked: date,
      bookingStatus: "panding",
      userMessage,
      userInfo: {
        name: user?.name,
        email,
        phone,
      },
      serviceInfo: service,
    };
    // console.log(checkoutData);
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/booking-service`,
        {
          method: "POST",
          body: JSON.stringify(checkoutData),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      //   console.log(await resp.json());
      if (resp.ok && resp.status === 200) {
        form.reset();
        router.push("/my-bookings");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Booking successfull.🎉",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <section className="container">
      <PageTitle title="Check Out" pagePath="Home/Checkout" titleBG={titleBG} />
      <section className="my-16 md:my-20 lg:my-32">
        <div className="px-6 py-10 rounded-lg md:px-10 md:py-16 lg:p-24 bg-light-gray">
          <CheckoutForm
            handlerFunc={handleCheckout}
            userEmail={user?.email}
            serviceName={service?.title}
          />
        </div>
      </section>
    </section>
  );
};

export default Checkout;
