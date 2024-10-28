"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckoutForm = ({ handlerFunc, serviceName, userEmail }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <form onSubmit={handlerFunc} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <InputField
            placeholder="Service Name"
            type="text"
            name="service"
            isLabelHidden={true}
            isRequired={true}
            defaultValue={serviceName}
            isReadOnly={true}
          />
          <div className="form-control">
            <DatePicker
              name="date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              minDate={new Date()}
              //   maxDate={(date) => date.setFullYear(date.getFullYear() + 1)}
              dateFormat={"dd/MM/yyyy"}
              isClearable
              required
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
            defaultValue={userEmail}
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
              name="message"
              cols="30"
              rows="8"
              required
            />
          </div>

          <button type="submit" className="w-full lg:col-span-2 btn-fill">
            Confirm Order
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
CheckoutForm.propTypes = {
  serviceName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  handlerFunc: PropTypes.func.isRequired,
};
