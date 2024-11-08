import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getMyServices } from "@/lib/getMyServices";

const MyServices = async () => {
  const { user } = await getServerSession(authOptions);
  const myServices = await getMyServices(user?.email);
  return (
    <section className="container">
      <PageTitle
        title="My Services"
        // isPathLeft={true}
        pagePath="Home/My Services"
        titleBG={titleBG}
      />
      <section className="my-16 md:my-20 lg:my-32">
        <h3>{myServices?.length}</h3>
      </section>
    </section>
  );
};

export default MyServices;
