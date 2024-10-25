import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  isLabelHidden,
  placeholder,
  name,
  isRequired,
  type,
  defaultValue,
  isReadOnly,
  pattern,
}) => {
  return (
    <div className="form-control">
      {!isLabelHidden && (
        <label className="label">
          <span className="text-lg font-semibold text-secondary">{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="p-3 text-sm rounded-lg md:text-base outline-secondary focus:outline-1"
        required={isRequired ? true : false}
        defaultValue={defaultValue}
        readOnly={isReadOnly ? true : false}
        pattern={pattern && pattern}
      />
    </div>
  );
};

export default InputField;
InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  isRequired: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  isReadOnly: PropTypes.bool,
};
