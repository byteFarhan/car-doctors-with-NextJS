"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import titleBG from "@/../public/assets/images/checkout/checkout.png";
import React, { useState } from "react";
import InputField from "@/components/InputField/InputField";
import { useSession } from "next-auth/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Checkout = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const session = useSession();
  const user = session?.data?.user;
  console.log(selectedDate);
  return (
    <section className="container">
      <PageTitle title="Check Out" pagePath="Home/Checkout" titleBG={titleBG} />
      <section className="my-16 md:my-20 lg:my-32">
        <div className="px-6 py-10 rounded-lg md:px-10 md:py-16 lg:p-24 bg-light-gray">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <InputField
                placeholder="Service Name"
                type="text"
                name="service"
                isLabelHidden={true}
                isRequired={true}
                defaultValue={"Service Name"}
                isReadOnly={true}
              />
              <div className="form-control">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  minDate={new Date()}
                  //   maxDate={(date) => date.setFullYear(date.getFullYear() + 1)}
                  dateFormat={"dd/MM/yyyy"}
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  placeholderText="Select Date"
                  className="w-full p-3 text-sm rounded-lg md:text-base outline-secondary focus:outline-1"
                />
              </div>
              <InputField
                placeholder="Your Email"
                type="email"
                name="email"
                isLabelHidden={true}
                isRequired={true}
                defaultValue={user?.email}
                isReadOnly={true}
              />
              <InputField
                placeholder="Your Phone"
                type="tel"
                name="phone"
                isLabelHidden={true}
                isRequired={true}
                pattern="\d*"
              />
              <div className="form-control lg:col-span-2">
                <textarea
                  className="p-3 rounded-lg outline-secondary focus:outline-1"
                  name="massage"
                  cols="30"
                  rows="8"
                  required
                />
              </div>

              <button type="submit" className="w-full lg:col-span-2 btn-fill">
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
