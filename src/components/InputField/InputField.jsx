import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  isLabelHidden,
  placeholder,
  name,
  isRequired,
  type,
}) => {
  return (
    <div className="px-10 form-control">
      {!isLabelHidden && (
        <label className="label">
          <span className="text-lg font-semibold text-secondary">{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="p-3 rounded-lg outline-secondary focus:outline-1"
        required={isRequired ? true : false}
      />
    </div>
  );
};

export default InputField;
InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
};
