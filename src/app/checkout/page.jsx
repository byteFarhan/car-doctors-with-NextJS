import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React from "react";
import InputField from "@/components/InputField/InputField";

const Checkout = () => {
  return (
    <section className="container">
      <PageTitle title="Check Out" pagePath="Home/Checkout" titleBG={titleBG} />
      <section className="my-32">
        <div className="p-24 rounded-lg bg-light-gray">
          <form>
            <InputField
              placeholder="test"
              type="text"
              name="test"
              isLabelHidden={true}
              isRequired={true}
            />
          </form>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
