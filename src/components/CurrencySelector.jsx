import React from "react";
import PropTypes from "prop-types";
import currencies from "../utils/currencies";

const CurrencySelector = ({ label, value, onChange, moedas, disabled }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange} disabled={disabled}>
        {moedas.map((moeda) => (
          <option key={moeda} value={moeda} >
            {currencies[moeda].name}
          </option>
        ))}
      </select>
    </div>
  );
};

CurrencySelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};

export default CurrencySelector;
