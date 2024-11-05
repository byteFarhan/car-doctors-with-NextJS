"use client";
import React from "react";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField";

const AddServiceForm = ({ handlerFunc, authorEmail }) => {
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
          />
          <InputField
            placeholder="Author Email"
            type="email"
            name="email"
            isLabelHidden={true}
            isRequired={true}
            defaultValue={authorEmail}
            isReadOnly={true}
          />
          <InputField
            placeholder="Service Image"
            type="text"
            name="img"
            isLabelHidden={true}
            isRequired={true}
          />
          <InputField
            placeholder="$ Price"
            type="text"
            name="price"
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
            Add Service
          </button>
        </div>
      </form>
    </>
  );
};

export default AddServiceForm;
AddServiceForm.propTypes = {
  userEmail: PropTypes.string.isRequired,
  handlerFunc: PropTypes.func.isRequired,
};
