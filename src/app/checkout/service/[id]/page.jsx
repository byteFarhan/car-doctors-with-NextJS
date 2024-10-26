"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import { getService } from "@/lib/getService";
import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Checkout = ({ params }) => {
  const [service, setService] = useState({});
  const session = useSession();
  //   console.log("session", session);
  const user = session?.data?.user;
  useEffect(() => {
    getService(params.id).then((data) => setService(data));
  }, [params]);
  //   console.log(service);
  //   console.log("user", user);
  const handleCheckout = (e) => {
    e.preventDefault();
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
