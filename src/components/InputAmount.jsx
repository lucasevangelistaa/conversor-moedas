import React from "react";
import PropTypes from "prop-types";

const InputAmount = ({ value, onChange }) => {
  return (
    <div>
      <label>Valor:</label>
      <input type="number" value={value} onChange={onChange} min="0" />
    </div>
  );
};

InputAmount.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputAmount;
